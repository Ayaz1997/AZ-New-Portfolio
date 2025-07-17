import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const experiences = [
  {
    date: '2024 - Now',
    isCurrent: true,
    company: 'Emura Studio',
    position: 'UI Designer',
    logoUrl: 'https://placehold.co/48x48.png',
    logoHint: 'abstract logo',
    responsibilities: [
      'Designed user interfaces for web and mobile applications, focusing on usability and visual appeal.',
      'Collaborated with developers and project managers to create intuitive and responsive designs.',
      'Conducted user research and usability testing to ensure designs met client and user needs.',
      'Contributed to the overall design strategy, enhancing the user experience across all digital platforms.',
    ],
  },
  {
    date: '2023 - 2024',
    isCurrent: false,
    company: 'Howaito Agency',
    position: 'Graphic Designer',
    logoUrl: 'https://placehold.co/48x48.png',
    logoHint: 'tech logo',
    responsibilities: [
      'Created visual designs for branding, marketing materials, and digital campaigns.',
      'Collaborated closely with clients to develop custom graphics aligned with their brand identity.',
      'Ensured all design work adhered to brand guidelines and maintained a high standard of quality.',
    ],
  },
  {
    date: '2022 - 2023',
    isCurrent: false,
    company: 'PixelPerfect Inc.',
    position: 'Jr. UI/UX Designer',
    logoUrl: 'https://placehold.co/48x48.png',
    logoHint: 'pixel logo',
    responsibilities: [
      'Assisted senior designers in creating wireframes, mockups, and prototypes.',
      'Participated in brainstorming sessions and contributed to design concepts.',
      'Helped maintain and organize the design system library.',
    ],
  },
    {
    date: '2021 - 2022',
    isCurrent: false,
    company: 'Creative Solutions',
    position: 'Design Intern',
    logoUrl: 'https://placehold.co/48x48.png',
    logoHint: 'creative logo',
    responsibilities: [
      'Supported the design team with various tasks, including asset creation and research.',
      'Gained hands-on experience with industry-standard design tools and software.',
      'Contributed to a variety of client projects under the guidance of senior designers.',
    ],
  },
    {
    date: '2020 - 2021',
    isCurrent: false,
    company: 'Innovatech',
    position: 'Freelance Graphic Designer',
    logoUrl: 'https://placehold.co/48x48.png',
    logoHint: 'modern logo',
    responsibilities: [
      'Worked with small businesses to create logos and branding materials.',
      'Designed marketing collateral such as flyers, brochures, and social media graphics.',
      'Managed client communication, project timelines, and deliverables.',
    ],
  },
];

function PushPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22V12" />
      <path d="M12 12L8 8" />
      <path d="M12 12L16 8" />
      <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" fill="#ff4d4d" stroke="#ff4d4d"/>
      <path d="M12 4C13.1046 4 14 3.10457 14 2C14 0.89543 13.1046 0 12 0C10.8954 0 10 0.89543 10 2C10 3.10457 10.8954 4 12 4Z" fill="#ff4d4d" stroke="#ff4d4d" />
    </svg>
  );
}


export function ExperienceSection() {
  return (
    <section className="container mx-auto py-10 md:py-24 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
          Work Experience
        </h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
          Explore My Journey And The Diverse Projects I've Worked On Throughout My Career.
        </p>
      </div>

      <div className="mt-16 relative">
        <div 
          className="absolute left-1/2 -translate-x-1/2 md:left-[calc(35%)] top-2 h-full w-0.5 bg-border" 
          aria-hidden="true"
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 w-full md:w-[35%] flex md:justify-end md:pr-8">
                <div className="relative flex items-center justify-start md:justify-end w-full">
                  <span className="bg-card border text-muted-foreground text-sm font-medium py-1 px-3 rounded-md z-10">
                    {exp.date}
                  </span>
                  <div className="absolute right-0 md:left-full md:-right-4 h-0.5 w-8 bg-border hidden md:block" />
                  
                  <div className="absolute top-1/2 -left-4 md:left-auto md:right-0 md:-translate-x-1/2 h-3 w-3 rounded-full bg-border border-4 box-content border-background z-10 -translate-y-1/2">
                    {exp.isCurrent && (
                       <PushPinIcon className="absolute -top-6 -left-1.5 w-6 h-6 text-primary z-20" />
                    )}
                  </div>
                </div>
              </div>

              <Card className="w-full md:max-w-md shadow-lg dark:shadow-primary/10">
                 <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold font-headline text-foreground">{exp.company}</h3>
                      <p className="text-muted-foreground">{exp.position}</p>
                    </div>
                    <Image
                      src={exp.logoUrl}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className="rounded-lg object-contain"
                      data-ai-hint={exp.logoHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary">Responsibility:</h4>
                  <div className="mt-4 space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i}>
                        <p className="text-muted-foreground text-sm">{resp}</p>
                        {i < exp.responsibilities.length - 1 && <Separator className="mt-3" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

    