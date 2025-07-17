
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Web Design",
    description: "Designing Clean, Responsive, And User-Friendly Websites.",
    imageUrl: "https://placehold.co/500x300.png",
    imageHint: "website design"
  },
  {
    title: "Branding & Logo",
    description: "Creating Unique And Memorable Brand Identities That Resonate With Audience.",
    imageUrl: "https://placehold.co/500x300.png",
    imageHint: "app icon"
  },
  {
    title: "Character Design",
    description: "Creating Unique Characters That Capture Your Brand's Essence.",
    imageUrl: "https://placehold.co/500x300.png",
    imageHint: "character design"
  },
  {
    title: "Mobile Design",
    description: "Designing Seamless And Engaging Mobile Experiences For All Devices.",
    imageUrl: "https://placehold.co/500x300.png",
    imageHint: "mobile app"
  },
];

export function ServicesSection() {
  return (
    <section className="container mx-auto py-10 md:py-24 px-8 md:px-16">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
          My Services
        </h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
          I Offer A Range Of UI/UX Design Services Tailored To Help Businesses Create Seamless And Engaging Digital Experiences
        </p>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-0">
                <div className="aspect-[5/3] flex items-center justify-center p-4 bg-muted/40">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    width={500}
                    height={300}
                    className="w-full h-auto object-contain"
                    data-ai-hint={service.imageHint}
                  />
                </div>
                <div className="p-4 pt-4">
                  <h3 className="text-xl font-bold font-headline text-foreground">{service.title}</h3>
                  <p className="mt-1 text-muted-foreground text-sm">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
