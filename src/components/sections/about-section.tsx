
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="container mx-auto py-10 md:py-24 px-4 md:px-16">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
          About Me
        </h2>
        <p className="mt-8 text-lg md:text-2xl text-muted-foreground leading-relaxed">
          Hi! 👋 I&apos;m Ayaz, A <span className="font-bold text-foreground">UI/UX Designer</span> With 2 Years Of Experience In SaaS Design. I&apos;ve Helped <span className="font-bold text-foreground">20K+ International Clients</span> 🌍 Build Clean And <span className="font-bold text-foreground">User-Friendly Interfaces</span> ✨.
        </p>
      </div>

      <div className="mt-20 md:mt-24 relative max-w-lg mx-auto h-[400px] md:h-[350px]">
        {/* Image 1: Creately */}
        <div className="absolute top-0 -left-4 sm:left-0 w-[180px] md:w-[250px] z-10 group">
          <div className="bg-card p-2 border rounded-xl shadow-2xl -rotate-6 dark:border-muted group-hover:rotate-0 transition-transform duration-300">
            <Image
              src="https://placehold.co/400x267.png"
              alt="Creately Landingpage"
              width={250}
              height={167}
              className="rounded-md"
              data-ai-hint="website screenshot"
            />
          </div>
        </div>

        {/* Image 2: Mailorant */}
        <div className="absolute top-32 -right-4 sm:right-0 w-[180px] md:w-[250px] z-20 group">
           <div className="bg-card p-2 border rounded-xl shadow-2xl rotate-6 dark:border-muted group-hover:rotate-0 transition-transform duration-300">
            <Image
              src="https://placehold.co/400x267.png"
              alt="Mailorant Landingpage"
              width={250}
              height={167}
              className="rounded-md"
              data-ai-hint="website screenshot"
            />
          </div>
        </div>

        {/* Image 3: Optitask */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] md:w-[250px] z-30 group">
           <div className="bg-card p-2 border rounded-xl shadow-2xl rotate-2 dark:border-muted group-hover:rotate-0 transition-transform duration-300">
            <Image
              src="https://placehold.co/400x267.png"
              alt="Optitask Landingpage"
              width={250}
              height={167}
              className="rounded-md"
              data-ai-hint="dashboard analytics"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
