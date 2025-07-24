
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { DoodleCircle } from '@/components/icons/doodle-circle';
import { Menu, MessageCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  const navItems = [
    { name: 'home', href: '/' },
    { name: 'experience', href: '/#experience' },
    { name: 'projects', href: '/projects' },
  ];

  const pathname = usePathname();
  const [hash, setHash] = React.useState('');

  React.useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
    };

    // Set initial hash
    onHashChange();

    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);


  const isActive = (href: string) => {
    // Never highlight the experience link
    if (href === '/#experience') {
      return false;
    }

    const isAnchorLink = href.startsWith('/#');
    
    if (isAnchorLink) {
      // Only highlight anchor links if the hash matches
      return hash === href.substring(1);
    }
    
    // For the home page, we want an exact match and no hash.
    if (href === '/') {
      return pathname === '/' && !hash;
    }
    
    // For other pages, we check if the pathname starts with the href.
    // This is useful for nested routes.
    return pathname.startsWith(href);
  };

  return (
    <header className="py-6 px-4 md:px-16">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="font-headline text-3xl font-bold text-foreground">
          Ayaz.
        </Link>
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="capitalize text-lg text-muted-foreground hover:text-primary transition-colors relative"
            >
              {isActive(item.href) && (
                <DoodleCircle className="absolute -top-2 -left-4 w-[70px] h-10 text-primary" />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button size="lg" className="font-semibold">
            <MessageCircle className="mr-2 h-5 w-5" />
            Discuss Project
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <nav className="flex flex-col items-center justify-center h-full space-y-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="capitalize text-2xl text-muted-foreground hover:text-primary transition-colors relative"
                  >
                     {isActive(item.href) && (
                      <DoodleCircle className="absolute -top-2 -left-4 w-[80px] h-12 text-primary" />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                ))}
                 <div className="pt-8">
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
