import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, MessageCircle, Twitter, Linkedin, Dribbble } from "lucide-react";
import { StickyNoteIcon } from "@/components/icons/sticky-note";

export function HeroSection() {
  return (
    <section className="container mx-auto py-10 md:py-24">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4">
          <Image
            src="https://placehold.co/80x80.png"
            alt="Ayaz's avatar"
            width={80}
            height={80}
            className="rounded-2xl shadow-lg w-16 h-16 md:w-20 md:h-20"
            data-ai-hint="man avatar"
          />
          <h2 className="font-headline text-4xl md:text-7xl font-bold text-foreground">
            Hello! I&apos;m Ayaz
          </h2>
        </div>
        
        <h1 className="font-headline text-4xl md:text-7xl font-medium text-foreground mt-8 leading-tight">
          I Design Intuitive Digital Products With A
          <span className="inline-flex align-middle mx-2 md:mx-4">
            <StickyNoteIcon className="h-12 w-12 md:h-16 md:w-16 -rotate-6 text-yellow-300" />
          </span>
          Focus On <br className="hidden md:block" />
          <span className="text-muted-foreground/50">Clarity, Empathy, And Precision.</span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex items-center gap-4">
            <Button size="lg" className="px-8">
              <MessageCircle className="mr-2 h-5 w-5" />
              Talk With Me
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              <Download className="mr-2 h-5 w-5" />
              Download my CV
            </Button>
          </div>
          <div className="flex items-center gap-3 mt-8 md:mt-0">
             <Button variant="outline" size="icon" className="rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
                <Linkedin className="h-6 w-6 text-foreground fill-foreground" />
             </Button>
             <Button variant="outline" size="icon" className="rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
                <Dribbble className="h-6 w-6 text-foreground" />
             </Button>
             <Button variant="outline" size="icon" className="rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
                <Twitter className="h-5 w-5 text-foreground fill-foreground" />
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
