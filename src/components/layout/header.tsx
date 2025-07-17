import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DoodleCircle } from '@/components/icons/doodle-circle';
import { Menu, MessageCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  const navItems = [
    { name: 'home', href: '/' },
    { name: 'projects', href: '#' },
    { name: 'experience', href: '#' },
  ];

  const activePath = 'home';

  return (
    <header className="py-6">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-16">
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
              {item.name === activePath && (
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
                     {item.name === activePath && (
                      <DoodleCircle className="absolute -top-2 -left-4 w-[80px] h-12 text-primary" />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                ))}
                <div className="mt-8 absolute bottom-10">
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
