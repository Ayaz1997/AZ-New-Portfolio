import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const processes = [
  {
    title: "User research",
    description: "Understanding your audience and what drives them is a key part of our design process.",
    imageUrl: "https://placehold.co/500x300.png",
    imageHint: "user research"
  },
  {
    title: "Competitive analysis",
    description: "We analyze how your competitiors approach and how you can stand out.",
    imageUrl: "https://placehold.co/500x300.png",
    imageHint: "data analysis"
  },
  {
    title: "Copy writing",
    description: "It's not just words. We write compelling copy that makes your users click.",
    imageUrl: "https://placehold.co/500x300.png",
    imageHint: "writing copy"
  },
  {
    title: "Converting design",
    description: "We create designs that will convert your visitors into paying customers.",
    imageUrl: "https://placehold.co/500x300.png",
    imageHint: "user interface design"
  },
];

export function DesignProcessSection() {
  return (
    <section className="container mx-auto py-10 md:py-24 px-4 md:px-16">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-6xl font-normal text-foreground">
          My design process
        </h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
          I make designs that convert
        </p>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
          {processes.map((process, index) => (
            <Card 
              key={index} 
              className="overflow-hidden rounded-2xl bg-transparent shadow-none border-dotted border-2"
            >
              <CardContent className="p-0">
                <div className="p-4">
                  <Image
                    src={process.imageUrl}
                    alt={process.title}
                    width={500}
                    height={300}
                    className="w-full h-auto object-contain rounded-lg"
                    data-ai-hint={process.imageHint}
                  />
                </div>
                <div className="p-6 pt-0">
                  <h3 className="text-xl font-bold font-headline text-foreground">{process.title}</h3>
                  <p className="mt-2 text-muted-foreground">{process.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
