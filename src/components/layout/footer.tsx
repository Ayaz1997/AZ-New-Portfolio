import Link from "next/link";
import { DoodleZigzag } from "@/components/icons/doodle-zigzag";
import { Button } from "@/components/ui/button";
import { Dribbble, Linkedin, Mail } from "lucide-react";

// A helper component for the X logo SVG
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1200 1227"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L112.633 44.0196H302.482L604.414 500.089L651.882 567.983L1098.04 1188.94H908.19L569.165 687.854V687.828Z"
        fill="currentColor"
      />
    </svg>
  );
}


export function Footer() {
  return (
    <footer className="container mx-auto py-10 px-4 md:px-16">
      <DoodleZigzag className="w-full h-4 text-border" />
      <div className="flex flex-col items-center text-center mt-16">
        <p className="font-headline text-3xl md:text-5xl font-medium text-foreground max-w-2xl">
          I craft bold ideas, one pixel at a time.
        </p>

        <div className="flex items-center gap-3 mt-8">
          <Link href="#" target="_blank" rel="noopener noreferrer">
             <Button variant="outline" size="icon" className="rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
                <Linkedin className="h-6 w-6 text-foreground" />
             </Button>
          </Link>
           <Link href="#" target="_blank" rel="noopener noreferrer">
             <Button variant="outline" size="icon" className="rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow p-2.5">
                <XIcon className="h-5 w-5 text-foreground" />
             </Button>
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
             <Button variant="outline" size="icon" className="rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
                <Dribbble className="h-6 w-6 text-foreground" />
             </Button>
          </Link>
          <Link href="mailto:hey@ayaz.me">
             <Button variant="outline" size="icon" className="rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
                <Mail className="h-6 w-6 text-foreground" />
             </Button>
          </Link>
        </div>

        <p className="text-sm text-muted-foreground mt-16">
          © 2025 Ayaz — Crafted with ❤️, fueled by ☕, and powered by AI 🤖 + Firebase Studio.
        </p>
      </div>
    </footer>
  );
}
