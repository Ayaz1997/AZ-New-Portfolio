
import Image from "next/image";

const stampImages = [
  {
    src: "/image-1.png",
    alt: "Placeholder image 1",
  },
  {
    src: "/image-2.png",
    alt: "Placeholder image 2",
  },
  {
    src: "/image-3.png",
    alt: "Placeholder image 3",
  },
  {
    src: "/image-4.png",
    alt: "Placeholder image 4",
  },
  {
    src: "/image-5.png",
    alt: "Placeholder image 5",
  }
];

export function AboutSection() {
  return (
    <section className="container mx-auto py-10 md:py-24 px-4 md:px-16">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-6xl font-normal text-foreground">
          About Me
        </h2>
        <p className="mt-8 text-lg md:text-2xl text-muted-foreground leading-relaxed">
          Hi! 👋 I&apos;m Ayaz, A <span className="font-bold text-foreground">UI/UX Designer</span> With 4 Years Of Experience In Design. I&apos;ve worked with products in <span className="font-bold text-foreground">SaaS, Web3 & AI</span> 🌍 Building Clean And <span className="font-bold text-foreground">User-Friendly Interfaces</span> ✨.
        </p>
      </div>

      <div className="mt-20 md:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stampImages.map((image, index) => (
            <div key={index}>
               <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={267}
                  className="w-full h-auto rounded-lg object-cover bg-muted"
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
