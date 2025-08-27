'use client';

import {
  CaliforniaLogo,
  EasyDriversEdLogo,
  ModernDriversEdLogo,
} from '@/components/custom/logo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LogoShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          Logo Design Showcase
        </h1>
        <p className="text-muted-foreground text-center">
          Professional logo designs for Easy California Drivers Ed
        </p>
      </div>

      {/* Modern Professional Logo */}
      <div className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              � Professional Modern Logo - ModernDriversEdLogo
            </CardTitle>
            <p className="text-muted-foreground">
              A modern professional logo combining graduation cap and steering
              wheel elements
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Color Schemes */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Color Schemes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">
                    Black & Orange Theme
                  </p>
                  <ModernDriversEdLogo
                    size="md"
                    variant="full"
                    colorScheme="black"
                  />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">
                    Orange & Black Theme
                  </p>
                  <ModernDriversEdLogo
                    size="md"
                    variant="full"
                    colorScheme="orange"
                  />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">Gradient</p>
                  <ModernDriversEdLogo
                    size="md"
                    variant="full"
                    colorScheme="gradient"
                  />
                </div>
              </div>
            </div>

            {/* Size Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Size Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">Small</p>
                  <ModernDriversEdLogo
                    size="sm"
                    variant="full"
                    colorScheme="black"
                  />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">Medium</p>
                  <ModernDriversEdLogo
                    size="md"
                    variant="full"
                    colorScheme="black"
                  />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">Large</p>
                  <ModernDriversEdLogo
                    size="lg"
                    variant="full"
                    colorScheme="black"
                  />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">
                    Extra Large
                  </p>
                  <ModernDriversEdLogo
                    size="xl"
                    variant="full"
                    colorScheme="black"
                  />
                </div>
              </div>
            </div>

            {/* Layout Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Layout Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">
                    Full Logo
                  </p>
                  <ModernDriversEdLogo
                    size="md"
                    variant="full"
                    colorScheme="gradient"
                  />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">Compact</p>
                  <ModernDriversEdLogo
                    size="md"
                    variant="compact"
                    colorScheme="gradient"
                  />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">
                    Icon Only
                  </p>
                  <ModernDriversEdLogo
                    size="md"
                    variant="icon"
                    colorScheme="gradient"
                  />
                </div>
              </div>
            </div>

            {/* Animated Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Animated Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">
                    Black & Orange Animated
                  </p>
                  <ModernDriversEdLogo
                    size="lg"
                    variant="full"
                    colorScheme="black"
                    animated
                  />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">
                    Orange & Black Animated
                  </p>
                  <ModernDriversEdLogo
                    size="lg"
                    variant="full"
                    colorScheme="orange"
                    animated
                  />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">
                    Gradient Animated
                  </p>
                  <ModernDriversEdLogo
                    size="lg"
                    variant="full"
                    colorScheme="gradient"
                    animated
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* New Modern Logo */}
      <div className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              🆕 New Modern Logo - EasyDriversEdLogo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Full Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Full Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">Small</p>
                  <EasyDriversEdLogo size="sm" variant="full" />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">Medium</p>
                  <EasyDriversEdLogo size="md" variant="full" />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">Large</p>
                  <EasyDriversEdLogo size="lg" variant="full" />
                </div>
              </div>
            </div>

            {/* Compact Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Compact Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">
                    Small Compact
                  </p>
                  <EasyDriversEdLogo size="sm" variant="compact" />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">
                    Medium Compact
                  </p>
                  <EasyDriversEdLogo size="md" variant="compact" />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">
                    Large Compact
                  </p>
                  <EasyDriversEdLogo size="lg" variant="compact" />
                </div>
              </div>
            </div>

            {/* Icon Only Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Icon Only Variants</h3>
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <EasyDriversEdLogo size="xs" variant="icon" />
                  <p className="text-xs text-muted-foreground mt-2">XS</p>
                </div>
                <div className="flex flex-col items-center">
                  <EasyDriversEdLogo size="sm" variant="icon" />
                  <p className="text-xs text-muted-foreground mt-2">SM</p>
                </div>
                <div className="flex flex-col items-center">
                  <EasyDriversEdLogo size="md" variant="icon" />
                  <p className="text-xs text-muted-foreground mt-2">MD</p>
                </div>
                <div className="flex flex-col items-center">
                  <EasyDriversEdLogo size="lg" variant="icon" />
                  <p className="text-xs text-muted-foreground mt-2">LG</p>
                </div>
                <div className="flex flex-col items-center">
                  <EasyDriversEdLogo size="xl" variant="icon" />
                  <p className="text-xs text-muted-foreground mt-2">XL</p>
                </div>
              </div>
            </div>

            {/* Animated Version */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Animated Version</h3>
              <div className="p-6 border rounded-lg bg-background">
                <EasyDriversEdLogo size="lg" variant="full" animated />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Existing California Logo */}
      <div className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              📍 Existing Logo - CaliforniaLogo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Full Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Full Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">Small</p>
                  <CaliforniaLogo size="sm" variant="full" />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">Medium</p>
                  <CaliforniaLogo size="md" variant="full" />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">Large</p>
                  <CaliforniaLogo size="lg" variant="full" />
                </div>
              </div>
            </div>

            {/* Compact Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Compact Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">
                    Small Compact
                  </p>
                  <CaliforniaLogo size="sm" variant="compact" />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">
                    Medium Compact
                  </p>
                  <CaliforniaLogo size="md" variant="compact" />
                </div>
                <div className="p-6 border rounded-lg bg-background">
                  <p className="text-sm text-muted-foreground mb-3">
                    Large Compact
                  </p>
                  <CaliforniaLogo size="lg" variant="compact" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Usage Examples</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Header Style Usage */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                In Header/Navigation
              </h3>
              <div className="grid gap-6">
                <div className="p-4 border rounded-lg bg-background flex items-center justify-between">
                  <EasyDriversEdLogo size="md" variant="compact" />
                  <nav className="flex space-x-4">
                    <a href="#" className="text-sm">
                      Home
                    </a>
                    <a href="#" className="text-sm">
                      Services
                    </a>
                    <a href="#" className="text-sm">
                      Contact
                    </a>
                  </nav>
                </div>
                <div className="p-4 border rounded-lg bg-background flex items-center justify-between">
                  <CaliforniaLogo size="md" variant="compact" />
                  <nav className="flex space-x-4">
                    <a href="#" className="text-sm">
                      Home
                    </a>
                    <a href="#" className="text-sm">
                      Services
                    </a>
                    <a href="#" className="text-sm">
                      Contact
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            {/* Footer Style Usage */}
            <div>
              <h3 className="text-lg font-semibold mb-4">In Footer</h3>
              <div className="grid gap-6">
                <div className="p-6 bg-muted rounded-lg">
                  <EasyDriversEdLogo size="lg" variant="full" />
                  <p className="text-sm text-muted-foreground mt-4 max-w-md">
                    Professional driving education in California. Get your
                    license the easy way!
                  </p>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                  <CaliforniaLogo size="lg" variant="full" />
                  <p className="text-sm text-muted-foreground mt-4 max-w-md">
                    Professional driving education in California. Get your
                    license the easy way!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Design Notes */}
      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold mb-4">🎨 Design Notes</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-primary mb-2">
              New Modern Logo Features:
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>
                • Custom-designed steering wheel icon with modern gradients
              </li>
              <li>• Responsive sizing system (xs, sm, md, lg, xl)</li>
              <li>• Professional color scheme using CSS custom properties</li>
              <li>• Subtle animations and hover effects</li>
              <li>• Clean, minimalist aesthetic</li>
              <li>• Perfect for both light and dark themes</li>
              <li>• Scalable SVG design</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-2">
              Design Philosophy:
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Trustworthy and professional appearance</li>
              <li>• Modern tech-forward aesthetic</li>
              <li>
                • Clear brand hierarchy with &quot;Easy&quot; and &quot;Ed&quot;
                highlighted
              </li>
              <li>• Accessible color contrast</li>
              <li>• Mobile-first responsive design</li>
              <li>• Consistent with driving education theme</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
