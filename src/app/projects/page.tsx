import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, CircleDot, PauseCircle, Rocket, User, ArrowRight } from "lucide-react";

type ProjectType = "Product" | "Side-Project" | "Client Project" | "Startup";
type ProjectStatus = "Ongoing" | "Past work" | "Paused" | "Launched";
type ProjectRole = "Founder" | "Co-founder" | "Maker" | "Product Designer";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  type: ProjectType;
  status: ProjectStatus;
  date: string;
  role: ProjectRole;
  caseStudyUrl?: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
    name: "Creately - Web Builder",
    description: "A powerful and intuitive web builder designed to create stunning websites with ease. Features a drag-and-drop interface and a rich component library.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "website builder interface",
    type: "Product",
    status: "Launched",
    date: "07/2024",
    role: "Product Designer",
    caseStudyUrl: "#",
    projectUrl: "#",
  },
  {
    name: "Socive - Social Media Analytics",
    description: "A comprehensive dashboard to track social media engagement, performance, and audience growth across multiple platforms.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "analytics dashboard chart",
    type: "Client Project",
    status: "Ongoing",
    date: "05/2024",
    role: "Maker",
    projectUrl: "#",
  },
  {
    name: "Akaru - Creative Studio",
    description: "A branding and design project for a creative studio, including logo design, brand guidelines, and a portfolio website.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "design studio logo",
    type: "Client Project",
    status: "Past work",
    date: "02/2024",
    role: "Product Designer",
    caseStudyUrl: "#",
    projectUrl: "#",
  },
  {
    name: "Mailorant - Smart Inbox",
    description: "An intelligent email client that organizes your inbox, prioritizes important messages, and helps you stay on top of your communication.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "email application interface",
    type: "Side-Project",
    status: "Paused",
    date: "11/2023",
    role: "Co-founder",
    projectUrl: "#",
  },
  {
    name: "Innovatech - Startup Platform",
    description: "A platform for early-stage startups to connect with investors, mentors, and resources to accelerate their growth.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "startup networking event",
    type: "Startup",
    status: "Launched",
    date: "08/2023",
    role: "Founder",
    caseStudyUrl: "#",
    projectUrl: "#",
  },
];

const statusIcons = {
  "Ongoing": <CircleDot className="mr-1.5 h-3.5 w-3.5 text-blue-500" />,
  "Past work": <CircleDot className="mr-1.5 h-3.5 w-3.5 text-gray-500" />,
  "Paused": <PauseCircle className="mr-1.5 h-3.5 w-3.5 text-yellow-500" />,
  "Launched": <Rocket className="mr-1.5 h-3.5 w-3.5 text-green-500" />,
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <Header />
      <main className="flex-1 py-10 md:py-24">
        <div className="container mx-auto px-4 md:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
              My Proof of Work!
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Here's a selection of projects that I'm proud of. Each one represents a unique challenge and an opportunity to create something meaningful and impactful.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="w-full h-auto p-2 border-4 border-foreground rounded-xl">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground">{project.name}</h2>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                  
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{project.type}</Badge>
                    <Badge variant="secondary" className="flex items-center">
                      {statusIcons[project.status]}
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>{project.role}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    {project.caseStudyUrl && (
                      <Link href={project.caseStudyUrl}>
                        <Button size="lg">
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                    <Link href={project.projectUrl}>
                       <Button size="lg" variant={project.caseStudyUrl ? "outline" : "default"}>
                        View Project
                       </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
