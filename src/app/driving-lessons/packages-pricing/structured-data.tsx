import { type Pkg } from '@/lib/packages';

export const generateStructuredData = (packages: Pkg[], zip: string) => {
  const baseUrl = 'https://easycodrivingschool.com';

  const offers = packages.map((pkg) => ({
    '@type': 'Offer',
    '@id': `${baseUrl}/packages/${pkg.id}`,
    name: pkg.title,
    description: `${pkg.bestFor} - ${pkg.hours} hours of professional driving instruction with ${pkg.lessons} lessons.`,
    price: pkg.price.toString(),
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    validFrom: new Date().toISOString(),
    seller: {
      '@type': 'Organization',
      name: 'Easy California Driving School',
    },
    areaServed: zip
      ? {
          '@type': 'PostalCode',
          identifier: zip,
        }
      : {
          '@type': 'State',
          name: 'California',
          alternateName: 'CA',
        },
    category: 'Driving Lessons',
    itemCondition: 'https://schema.org/NewCondition',
  }));

  const products = packages.map((pkg) => ({
    '@type': 'Product',
    '@id': `${baseUrl}/packages/${pkg.id}`,
    name: pkg.title,
    description: `${pkg.bestFor} - Complete driving lesson package with ${pkg.hours} hours of instruction.`,
    category: 'Driving Lessons',
    brand: {
      '@type': 'Organization',
      name: 'Easy California Driving School',
    },
    offers: offers.find(
      (offer) => offer['@id'] === `${baseUrl}/packages/${pkg.id}`
    ),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '245',
      bestRating: '5',
      worstRating: '1',
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Driving Lesson Packages',
    description:
      'Professional driving lesson packages for teens and adults in California',
    numberOfItems: packages.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: product,
    })),
  };
};

export default function StructuredData() {
  // This is a placeholder component that will be used in the page
  return null;
}
