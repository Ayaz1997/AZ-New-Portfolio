import Image from "next/image";
import { DoodleArrow } from "@/components/icons/doodle-arrow";

export function AboutSection() {
  return (
    <section className="container mx-auto py-10 md:py-24 px-8 md:px-16">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
          About Me
        </h2>
        <p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed">
          Hi! 👋 I&apos;m Ayaz, A <span className="font-bold text-foreground">UI/UX Designer</span> With 2 Years Of Experience In SaaS Design. I&apos;ve Helped <span className="font-bold text-foreground">20K+ International Clients</span> 🌍 Build Clean And <span className="font-bold text-foreground">User-Friendly Interfaces</span> ✨.
        </p>
      </div>

      <div className="mt-20 md:mt-24 relative max-w-lg mx-auto h-[500px] md:h-[400px]">
        {/* Image 1: Creately */}
        <div className="absolute top-0 left-0 w-[180px] md:w-[250px] z-10 group">
          <div className="bg-card p-2 border rounded-xl shadow-2xl -rotate-3 dark:border-muted group-hover:rotate-0 transition-transform duration-300">
            <Image
              src="https://placehold.co/400x267.png"
              alt="Creately Landingpage"
              width={250}
              height={167}
              className="rounded-md"
              data-ai-hint="website screenshot"
            />
          </div>
          <div className="absolute top-4 -left-12 md:top-2 md:-left-20 transform -rotate-15">
            <DoodleArrow className="w-20 h-20 md:w-24 md:h-24 text-foreground rotate-[15deg]" />
            <p className="font-caption text-2xl md:text-3xl font-bold -mt-20 md:-mt-24 ml-2 md:ml-4 -rotate-[5deg]">Creately</p>
          </div>
        </div>

        {/* Image 2: Mailorant */}
        <div className="absolute top-24 right-0 w-[180px] md:w-[250px] z-20 group">
           <div className="bg-card p-2 border rounded-xl shadow-2xl rotate-2 dark:border-muted group-hover:rotate-0 transition-transform duration-300">
            <Image
              src="https://placehold.co/400x267.png"
              alt="Mailorant Landingpage"
              width={250}
              height={167}
              className="rounded-md"
              data-ai-hint="website screenshot"
            />
          </div>
           <div className="absolute -top-12 -right-12 md:-top-10 md:-right-16 transform rotate-15">
            <DoodleArrow className="w-20 h-20 md:w-24 md:h-24 text-foreground scale-x-[-1] rotate-[-15deg]" />
            <p className="font-caption text-2xl md:text-3xl font-bold -mt-[70px] md:-mt-10 mr-12 rotate-[5deg] text-right">Mailorant</p>
          </div>
        </div>

        {/* Image 3: Optitask */}
        <div className="absolute bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 w-[180px] md:w-[250px] z-30 group">
           <div className="bg-card p-2 border rounded-xl shadow-2xl -rotate-1 dark:border-muted group-hover:rotate-0 transition-transform duration-300">
            <Image
              src="https://placehold.co/400x267.png"
              alt="Optitask Landingpage"
              width={250}
              height={167}
              className="rounded-md"
              data-ai-hint="dashboard analytics"
            />
          </div>
           <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 md:-bottom-16">
            <DoodleArrow className="w-20 h-20 md:w-24 md:h-24 text-foreground scale-y-[-1] rotate-[15deg]" />
            <p className="font-caption text-2xl md:text-3xl font-bold -mt-10 -rotate-6">Optitask</p>
          </div>
        </div>
      </div>
    </section>
  );
}
