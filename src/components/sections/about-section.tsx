
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

      <div className="mt-20 md:mt-24 relative max-w-2xl mx-auto h-[450px] md:h-[400px]">
        {/* Image 1: Creately - Polaroid */}
        <div className="absolute top-0 -left-4 sm:left-0 w-[180px] md:w-[250px] z-10 group transition-transform duration-300 ease-in-out hover:scale-110 hover:z-40">
          <div className="bg-card p-3 pb-8 border rounded-lg shadow-2xl -rotate-12 dark:border-muted group-hover:rotate-0">
            <Image
              src="https://placehold.co/400x267.png"
              alt="Creately Landingpage"
              width={250}
              height={167}
              className="rounded-sm"
              data-ai-hint="website screenshot"
            />
          </div>
        </div>

        {/* Image 2: Mailorant - Polaroid */}
        <div className="absolute top-32 right-0 sm:-right-8 w-[180px] md:w-[250px] z-20 group transition-transform duration-300 ease-in-out hover:scale-110 hover:z-40">
           <div className="bg-card p-3 pb-8 border rounded-lg shadow-2xl rotate-12 dark:border-muted group-hover:rotate-0">
            <Image
              src="https://placehold.co/400x267.png"
              alt="Mailorant Landingpage"
              width={250}
              height={167}
              className="rounded-sm"
              data-ai-hint="website screenshot"
            />
          </div>
        </div>

        {/* Image 3: Optitask - Polaroid */}
        <div className="absolute bottom-16 -left-4 sm:left-8 w-[180px] md:w-[250px] z-30 group transition-transform duration-300 ease-in-out hover:scale-110 hover:z-40">
           <div className="bg-card p-3 pb-8 border rounded-lg shadow-2xl rotate-6 dark:border-muted group-hover:rotate-0">
            <Image
              src="https://placehold.co/400x267.png"
              alt="Optitask Landingpage"
              width={250}
              height={167}
              className="rounded-sm"
              data-ai-hint="dashboard analytics"
            />
          </div>
        </div>
        
        {/* Image 4: New Project - Polaroid */}
        <div className="absolute bottom-0 right-0 sm:right-8 w-[180px] md:w-[250px] z-20 group transition-transform duration-300 ease-in-out hover:scale-110 hover:z-40">
           <div className="bg-card p-3 pb-8 border rounded-lg shadow-2xl -rotate-6 dark:border-muted group-hover:rotate-0">
            <Image
              src="https://placehold.co/400x267.png"
              alt="New Project"
              width={250}
              height={167}
              className="rounded-sm"
              data-ai-hint="wireframe sketch"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
