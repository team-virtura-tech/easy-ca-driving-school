'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Lessons', href: '/lessons' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export const Header = () => {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
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

  return (
    <motion.header
      id="Header"
      data-component="Header"
      initial={reduce ? false : { opacity: 0, y: -8 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo + Company Name */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-muted" />
          <span className="text-lg font-semibold">Driving School</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
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
          ))}
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link
            href="tel:+11234567890"
            className="flex items-center space-x-2 text-sm font-medium text-muted-foreground transition-colors hover:text-[--color-brand-orange]"
          >
            <Phone className="h-4 w-4" />
            <span>(123) 456-7890</span>
          </Link>
          {mounted && <ThemeToggle />}
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
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            id="mobile-menu"
            className="w-[300px] sm:w-[400px]"
          >
            <SheetHeader className="border-b pb-4">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </SheetHeader>

            <nav className="mt-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-base font-medium transition-colors hover:text-[--color-brand-orange]',
                    isActiveRoute(item.href)
                      ? 'text-[--color-brand-orange] font-semibold'
                      : 'text-foreground'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Separator className="my-6" />

            <div className="space-y-4">
              <Link
                href="tel:+11234567890"
                className="flex items-center space-x-3 text-base font-medium text-foreground transition-colors hover:text-[--color-brand-orange]"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-5 w-5" />
                <span>(123) 456-7890</span>
              </Link>

              {mounted && (
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};
