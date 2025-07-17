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

      <div className="mt-24 relative max-w-2xl mx-auto h-[450px]">
        {/* Image 1: Creately */}
        <div className="absolute top-0 left-0 w-[300px] z-10">
          <Image
            src="https://placehold.co/400x267.png"
            alt="Creately Landingpage"
            width={300}
            height={200}
            className="rounded-xl shadow-2xl -rotate-3"
            data-ai-hint="website screenshot"
          />
          <div className="absolute -top-8 -left-20">
            <DoodleArrow className="w-24 h-24 text-foreground -rotate-[25deg]" />
            <p className="font-caption text-3xl font-bold -mt-12 ml-4 -rotate-12">Creately</p>
          </div>
        </div>

        {/* Image 2: Mailorant */}
        <div className="absolute top-16 right-0 w-[300px] z-20">
           <Image
            src="https://placehold.co/400x267.png"
            alt="Mailorant Landingpage"
            width={300}
            height={200}
            className="rounded-xl shadow-2xl rotate-2"
            data-ai-hint="website screenshot"
          />
           <div className="absolute -top-4 -right-24">
            <DoodleArrow className="w-24 h-24 text-foreground scale-x-[-1] rotate-12" />
            <p className="font-caption text-3xl font-bold -mt-14 -mr-4 rotate-12 text-right">Mailorant</p>
          </div>
        </div>

        {/* Image 3: Optitask */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] z-30">
           <Image
            src="https://placehold.co/400x267.png"
            alt="Optitask Landingpage"
            width={300}
            height={200}
            className="rounded-xl shadow-2xl -rotate-1"
            data-ai-hint="dashboard analytics"
          />
           <div className="absolute -bottom-16 left-28">
            <DoodleArrow className="w-24 h-24 text-foreground scale-y-[-1] rotate-[15deg]" />
            <p className="font-caption text-3xl font-bold -mt-24 ml-12 -rotate-[15deg]">Optitask</p>
          </div>
        </div>
      </div>
    </section>
  );
}
