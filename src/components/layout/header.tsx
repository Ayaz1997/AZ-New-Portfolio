import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DoodleCircle } from '@/components/icons/doodle-circle';

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
        <Button size="lg" className="hidden md:flex rounded-full px-6 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/40 transition-all duration-300 hover:-translate-y-1">
          Discuss Project
        </Button>
      </div>
    </header>
  );
}
