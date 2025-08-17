import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    maplibregl?: unknown;
  }
}

export type GMapProps = {
  id?: string;
  className?: string;
};

// MapLibre types are not included by default, so we use 'any' for the map instance only
export const GMap = ({ id, className }: GMapProps) => {
  const componentName = 'GMap';
  const rootId = id ?? componentName;
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    // Dynamically load MapLibre GL JS if not already loaded
    if (!window.maplibregl) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/maplibre-gl@5.6.2/dist/maplibre-gl.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => initMap();
      return () => {
        document.body.removeChild(script);
      };
    } else {
      initMap();
    }

    function initMap() {
      if (!mapRef.current || !window.maplibregl) return;
      const cities = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [-122.0084059, 37.3710304],
            },
          },
          {
            type: 'Feature',
            properties: {},
            geometry: { type: 'Point', coordinates: [-122.023209, 37.5494601] },
          },
          {
            type: 'Feature',
            properties: {},
            geometry: { type: 'Point', coordinates: [-121.9289069, 37.335361] },
          },
        ],
      };
      // @ts-expect-error: maplibregl is loaded globally
      const map = new window.maplibregl.Map({
        container: mapRef.current,
        style: `https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER}`,
        center: [-122.0084059, 37.3710304], // Center on first city
        zoom: 10,
      });
      map.on('load', () => {
        const animateLocations = () => {
          cities.features.forEach((city, index: number) => {
            setTimeout(() => {
              map.jumpTo({ center: city.geometry.coordinates });
              // Restart the animation after the last location
              if (index === cities.features.length - 1) {
                setTimeout(() => {
                  animateLocations();
                }, 2000);
              }
            }, 2000 * index);
          });
        };

        animateLocations();
      });
    }
    // Clean up: remove map instance if needed
    return () => {
      // No-op: MapLibre doesn't provide a global destroy, but you could track the map instance if needed
    };
  }, []);

  // MapLibre CSS
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!document.getElementById('maplibre-gl-css')) {
      const link = document.createElement('link');
      link.id = 'maplibre-gl-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/maplibre-gl@5.6.2/dist/maplibre-gl.css';
      document.head.appendChild(link);
      return () => {
        document.head.removeChild(link);
      };
    }
  }, []);

  return (
    <section id={rootId} data-component={componentName} className={className}>
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: 400,
          borderRadius: 12,
          overflow: 'hidden',
        }}
      />
    </section>
  );
};
