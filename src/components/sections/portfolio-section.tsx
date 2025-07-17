import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Creately - Web Builder Landingpage",
    description: "This Page Is Designed To Introduce Creately As A Powerful And Intuitive Web Builder",
    year: "2024",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "website screenshot",
  },
  {
    title: "Socive - Social Media Analytics Landingpage",
    description: "Designed To Simplify Tracking Engagement And Performance Across Social Platforms.",
    year: "2024",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "dashboard analytics",
  },
  {
    title: "Akaru - Studio Design Landing Page",
    description: "This Landing Page introduces Akaru, A Creative Studio",
    year: "2024",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "design studio website",
  },
  {
    title: "Mailorant - Inbox Mail Landing Page",
    description: "This Landing Page Is Designed To Highlight The Key Features Of Mailorant",
    year: "2024",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "email application",
  },
];

export function PortfolioSection() {
  return (
    <section className="container mx-auto py-10 md:py-24 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
          My Portfolio
        </h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
          Check Out My Portfolio To See The Projects I've Crafted And The Designs I've Brought To Life.
        </p>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <Card 
                className={cn(
                  `rounded-2xl border shadow-lg dark:shadow-primary/10 transition-transform duration-300 ease-in-out group-hover:scale-105`,
                  index % 2 === 0 ? "group-hover:rotate-2" : "group-hover:-rotate-2"
                )}
              >
                <CardContent className="p-4">
                  <div className="rounded-xl overflow-hidden mb-6">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                  <div className="px-2">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold font-headline text-foreground">{project.title}</h3>
                      <span className="text-muted-foreground font-mono text-sm flex-shrink-0 ml-4">{project.year}</span>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link href="#">
          <Button variant="outline" size="lg">
            View all projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
