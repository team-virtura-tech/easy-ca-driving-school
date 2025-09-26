'use client';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, ChevronRight, Menu, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CaliforniaLogo } from '../logo';

const showThemeToggle = false;

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Driving Lessons',
    href: '/driving-lessons', // This won't be used as a link
    children: [
      {
        label: 'Packages & Pricing',
        href: '/driving-lessons/packages-pricing',
      },
      {
        label: 'Driving Assessments',
        href: '/driving-lessons/driving-assessments',
      },
      { label: 'DMV Road Tests', href: '/driving-lessons/dmv-road-tests' },
      {
        label: "Learner's Permit",
        href: '/driving-lessons/learners-permit',
      },
      { label: 'Service Area', href: '/driving-lessons/service-area' },
    ],
  },
  { label: 'Traffic School', href: '/traffic-school' },
  { label: 'Reviews', href: '/reviews' },
  {
    label: 'Resources',
    href: '/resources', // This won't be used as a link
    children: [
      { label: 'DMV Practice Tests', href: '/resources/dmv-practice-tests' },
      { label: 'DMV Info', href: '/resources/dmv-info' },
      { label: 'About Us', href: '/about-us' },
    ],
  },
  { label: 'Contact Us', href: '/contact-us' },
];

export const Header = () => {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenAccordions(new Set());
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const hasActiveChild = (children?: NavItem[]) => {
    if (!children) return false;
    return children.some((child) => isActiveRoute(child.href));
  };

  const toggleAccordion = (itemLabel: string) => {
    const newOpenAccordions = new Set(openAccordions);
    if (newOpenAccordions.has(itemLabel)) {
      newOpenAccordions.delete(itemLabel);
    } else {
      newOpenAccordions.add(itemLabel);
    }
    setOpenAccordions(newOpenAccordions);
  };

  // Desktop Navigation Item Component
  const DesktopNavItem = ({ item }: { item: NavItem }) => {
    if (!item.children) {
      return (
        <Link
          href={item.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-[--color-brand-orange]',
            isActiveRoute(item.href)
              ? 'text-[--color-brand-orange] underline underline-offset-4'
              : 'text-muted-foreground'
          )}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <div className="relative group">
        <button
          className={cn(
            'flex items-center gap-1 text-sm font-medium transition-colors hover:text-[--color-brand-orange] focus:outline-none px-2 py-1 -mx-2 -my-1 cursor-pointer',
            isActiveRoute(item.href) || hasActiveChild(item.children)
              ? 'text-[--color-brand-orange]'
              : 'text-muted-foreground'
          )}
        >
          {item.label}
          <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
        </button>

        {/* Invisible bridge to prevent gaps */}
        <div className="absolute top-full left-0 w-full h-2 bg-transparent group-hover:block hidden" />

        {/* Dropdown Content */}
        <div className="absolute top-full left-0 z-[9999] mt-2 w-48 scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-out origin-top">
          <div className="rounded-lg border bg-background shadow-2xl py-2 backdrop-blur-sm">
            {/* Main link as first item - only for About Us */}
            {item.label === 'About Us' && (
              <>
                <Link
                  href={item.href}
                  className={cn(
                    'block px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-[--color-brand-orange]',
                    isActiveRoute(item.href)
                      ? 'font-semibold text-[--color-brand-orange] bg-accent/50'
                      : 'text-foreground'
                  )}
                >
                  {item.label}
                </Link>
                <div className="h-px bg-border mx-2 my-1" />
              </>
            )}
            {/* Children links */}
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  'block px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-[--color-brand-orange]',
                  isActiveRoute(child.href)
                    ? 'font-semibold text-[--color-brand-orange] bg-accent/50'
                    : 'text-foreground'
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Mobile Navigation Item Component
  const MobileNavItem = ({ item }: { item: NavItem }) => {
    if (!item.children) {
      return (
        <Link
          href={item.href}
          className={cn(
            'block px-4 py-3 text-base font-medium transition-all duration-200 hover:text-[--color-brand-orange] hover:bg-accent/50 rounded-lg mx-2',
            isActiveRoute(item.href)
              ? 'text-[--color-brand-orange] font-semibold bg-accent/50'
              : 'text-foreground'
          )}
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </Link>
      );
    }

    const isAccordionOpen = openAccordions.has(item.label);

    return (
      <div className="mx-2 mb-1">
        <Collapsible
          open={isAccordionOpen}
          onOpenChange={() => toggleAccordion(item.label)}
        >
          <CollapsibleTrigger className="w-full">
            <div
              className={cn(
                'flex items-center justify-between w-full px-4 py-3 text-base font-medium transition-all duration-200 hover:text-[--color-brand-orange] hover:bg-accent/50 rounded-lg group',
                (isActiveRoute(item.href) && item.label === 'About Us') ||
                  hasActiveChild(item.children)
                  ? 'text-[--color-brand-orange] font-semibold bg-accent/50'
                  : 'text-foreground'
              )}
              onClick={() => {
                // For About Us, also navigate to the page
                if (item.label === 'About Us') {
                  setIsOpen(false);
                  window.location.href = item.href;
                }
              }}
            >
              <span className="text-left">{item.label}</span>
              <ChevronRight
                className={cn(
                  'h-4 w-4 transition-all duration-200 text-muted-foreground group-hover:text-[--color-brand-orange]',
                  isAccordionOpen && 'rotate-90 text-[--color-brand-orange]'
                )}
              />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 pr-2 pt-1">
            <div className="space-y-1 border-l-2 border-accent/30 pl-4 ml-2">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    'block py-2 px-3 text-sm font-medium transition-all duration-200 hover:text-[--color-brand-orange] hover:bg-accent/30 rounded-md',
                    isActiveRoute(child.href)
                      ? 'text-[--color-brand-orange] font-semibold bg-accent/50'
                      : 'text-muted-foreground'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  };

  return (
    <motion.header
      id="Header"
      data-component="Header"
      initial={reduce ? false : { opacity: 0, y: -8 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="sticky top-0 z-[50] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="flex h-20 items-center justify-between px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-none w-full">
        {/* Logo + Company Name */}
        <Link href="/" className="flex items-center">
          <CaliforniaLogo variant="full" size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex md:items-center md:space-x-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <DesktopNavItem key={item.href} item={item} />
          ))}
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link
            href="tel:+11234567890"
            className="flex items-center space-x-2 text-sm font-medium text-muted-foreground transition-colors hover:text-[--color-brand-orange]"
          >
            <Phone className="h-4 w-4" />
            <span>(888) 299-8911</span>
          </Link>
          <Button asChild className="ml-4">
            <Link href="/contact-us">Book Now</Link>
          </Button>
          {mounted && showThemeToggle && <ThemeToggle />}
        </div>

        {/* Mobile Hamburger Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className={cn(isOpen && 'opacity-0 pointer-events-none')}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            id="mobile-menu"
            className="w-[300px] sm:w-[400px] z-[200]"
          >
            <VisuallyHidden>
              <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden>
            <nav
              className="mt-16 flex flex-col space-y-2"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <MobileNavItem key={item.href} item={item} />
              ))}
            </nav>

            <Separator className="my-6" />

            <div className="space-y-4 px-2">
              <Link
                href="tel:+11234567890"
                className="flex items-center space-x-3 px-4 py-3 text-base font-medium text-foreground transition-all duration-200 hover:text-[--color-brand-orange] hover:bg-accent/50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-5 w-5" />
                <span>(888) 299-8911</span>
              </Link>

              {mounted && showThemeToggle && (
                <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-accent/20">
                  <span className="text-base font-medium text-muted-foreground">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
              )}
            </div>

            {/* Sticky CTA Button */}
            <div className="absolute bottom-4 left-4 right-4">
              <Button asChild className="w-full" size="lg">
                <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};
