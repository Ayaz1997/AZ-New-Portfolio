import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SparkleIcon } from "@/components/icons/sparkle";

export function HeroSection() {
  return (
    <section className="container mx-auto py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <SparkleIcon className="absolute -top-8 -left-8 w-12 h-12 text-primary/50" />
          <p className="font-headline text-lg text-primary tracking-widest">HI, I&apos;M AYAZ.</p>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground mt-2 leading-tight">
            A Creative Designer & Developer
          </h1>
          <p className="text-muted-foreground mt-6 max-w-lg text-lg">
            I&apos;m a passionate and innovative designer from Pakistan, with a mission to create delightful and intuitive digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/40 transition-all duration-300 hover:-translate-y-1">
              Discuss Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 hover:bg-primary/10 transition-colors">
              View all projects
            </Button>
          </div>
           <SparkleIcon className="absolute bottom-8 -right-8 w-8 h-8 text-primary/50" />
        </div>
        <div className="relative flex justify-center items-center p-4">
           <div className="w-full max-w-[450px] aspect-[4/5] bg-secondary rounded-tl-[120px] rounded-br-[120px] overflow-hidden shadow-xl">
             <Image
                src="https://placehold.co/450x560.png"
                alt="Ayaz's portrait"
                width={450}
                height={560}
                className="object-cover w-full h-full"
                data-ai-hint="man portrait"
              />
           </div>
           <SparkleIcon className="absolute top-0 -left-4 w-10 h-10 text-primary" />
           <SparkleIcon className="absolute bottom-0 -right-4 w-6 h-6 text-primary/70" />
        </div>
      </div>
    </section>
  );
}
