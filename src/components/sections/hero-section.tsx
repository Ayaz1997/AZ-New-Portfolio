import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, MessageCircle, Linkedin, Dribbble, Twitter } from "lucide-react";
import { StickyNoteIcon } from "@/components/icons/sticky-note";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1200 1227"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L112.633 44.0196H302.482L604.414 500.089L651.882 567.983L1098.04 1188.94H908.19L569.165 687.854V687.828Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="container mx-auto py-10 md:py-24 px-4 md:px-16">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4">
          <Image
            src="/az-80.png"
            alt="Ayaz's avatar"
            width={80}
            height={80}
            className="rounded-2xl shadow-lg w-16 h-16 -rotate-3"
            data-ai-hint="man avatar"
          />
          <h2 className="font-headline text-4xl md:text-7xl font-medium text-foreground">
            Hello! I'm Ayaz
          </h2>
        </div>
        
        <h1 className="font-headline text-3xl md:text-7xl font-normal text-foreground mt-8 leading-tight">
          I Design Intuitive Digital Products With A
          <span className="inline-flex align-middle mx-2">
            <StickyNoteIcon className="h-10 w-10 md:h-16 md:w-16 -rotate-6 text-yellow-300" />
          </span>
          Focus On <br className="hidden md:block" />
          <span className="text-muted-foreground/50">Clarity, Empathy, And Precision.</span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Talk With Me
            </Button>
            <Button size="lg" variant="outline">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          <div className="flex items-center gap-3">
             <Button size="icon" className="rounded-md border border-[rgba(189,189,189,0.30)] bg-[#F8F8F8] bg-gradient-to-b from-[rgba(0,0,0,0.00)] to-[rgba(0,0,0,0.03)] shadow-[0_1.61px_4.025px_-0.805px_rgba(41,44,50,0.12)]">
                <Linkedin className="h-6 w-6 text-foreground" />
             </Button>
             <Button size="icon" className="rounded-md border border-[rgba(189,189,189,0.30)] bg-[#F8F8F8] bg-gradient-to-b from-[rgba(0,0,0,0.00)] to-[rgba(0,0,0,0.03)] shadow-[0_1.61px_4.025px_-0.805px_rgba(41,44,50,0.12)]">
                <Dribbble className="h-6 w-6 text-foreground" />
             </Button>
             <Button variant="outline" size="icon" className="rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
                <Twitter className="h-5 w-5 text-foreground" />
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
