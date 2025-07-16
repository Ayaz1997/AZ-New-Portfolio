import Image from "next/image";
import { DoodleArrow } from "@/components/icons/doodle-arrow";

export function AboutSection() {
  return (
    <section className="container mx-auto py-10 md:py-32 px-8 md:px-16">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
          About Me
        </h2>
        <p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed">
          Hi! 👋 I&apos;m Ayaz, A <span className="font-bold text-foreground">UI/UX Designer</span> With 2 Years Of Experience In SaaS Design. I&apos;ve Helped <span className="font-bold text-foreground">20K+ International Clients</span> 🌍 Build Clean And <span className="font-bold text-foreground">User-Friendly Interfaces</span> ✨.
        </p>
      </div>

      <div className="mt-24 relative">
        {/* Images */}
        <div className="relative">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Creately Landingpage"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl -rotate-3"
            data-ai-hint="website screenshot"
          />
          <div className="absolute top-1/2 left-0 -translate-x-full -translate-y-full -ml-8 -rotate-12">
            <DoodleArrow className="w-20 h-20 text-primary" />
            <p className="font-caption text-3xl font-bold -mt-8 -ml-8">Creately Landingpage</p>
          </div>
        </div>

        <div className="relative mt-[-100px] ml-auto w-fit">
           <Image
            src="https://placehold.co/600x400.png"
            alt="Mailorant Landingpage"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl rotate-2"
            data-ai-hint="website screenshot"
          />
           <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 mr-4 rotate-12">
            <DoodleArrow className="w-20 h-20 text-primary scale-x-[-1]" />
            <p className="font-caption text-3xl font-bold -mt-10 -mr-4 text-right">Mailorant Landingpage</p>
          </div>
        </div>

        <div className="relative mt-[-100px] mx-auto w-fit">
           <Image
            src="https://placehold.co/600x400.png"
            alt="Optitask Landingpage"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl -rotate-1"
            data-ai-hint="dashboard analytics"
          />
           <div className="absolute bottom-0 left-0 -translate-x-3/4 translate-y-1/4 -ml-20 rotate-[-30deg]">
            <DoodleArrow className="w-20 h-20 text-primary" />
            <p className="font-caption text-3xl font-bold -mt-2 -ml-16">Optitask Landingpage</p>
          </div>
        </div>
      </div>
    </section>
  );
}
