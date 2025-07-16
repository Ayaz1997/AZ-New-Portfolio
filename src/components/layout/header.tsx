import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DoodleCircle } from '@/components/icons/doodle-circle';
import { Menu, MessageCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const navItems = [
    { name: 'home', href: '/' },
    { name: 'projects', href: '#' },
    { name: 'experience', href: '#' },
  ];

  const activePath = 'home';

  return (
    <header className="py-6">
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
              {item.name === activePath && (
                <DoodleCircle className="absolute -top-2 -left-4 w-[70px] h-10 text-primary" />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </nav>
        <Button size="lg" className="hidden md:flex px-6 font-semibold bg-gradient-to-r from-primary to-orange-400 text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/40 transition-all duration-300 hover:-translate-y-1">
          <MessageCircle className="mr-2 h-5 w-5" />
          Discuss Project
        </Button>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col items-center space-y-8 mt-16">
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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
