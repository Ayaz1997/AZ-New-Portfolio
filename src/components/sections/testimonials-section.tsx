
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "@/components/icons/quote";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: 'David Callahan',
    company: 'Marketing Director, Spotify',
    avatarUrl: 'https://placehold.co/40x40.png',
    avatarHint: 'man avatar',
    testimonial: 'We needed a modern, high-converting website, and the Bravio team delivered beyond expectations. Their design and SEO expertise helped us increase conversion rate significantly in just two weeks. Highly recommend!',
  },
  {
    name: 'Sarah Mitchel',
    company: 'Marketing Director, Google',
    avatarUrl: 'https://placehold.co/40x40.png',
    avatarHint: 'woman avatar',
    testimonial: 'From branding to website design, every detail was meticulously handled. The team’s expertise helped us launch faster, and the results have been phenomenal!',
  },
  {
    name: 'Tom Becker',
    company: 'Founder, PulseCore',
    avatarUrl: 'https://placehold.co/40x40.png',
    avatarHint: 'man avatar',
    testimonial: 'Their animation work took our product videos to the next level. The team truly understands user experience and storytelling.',
  },
  {
    name: 'Sarah Mitchel',
    company: 'Marketing Director, Google',
    avatarUrl: 'https://placehold.co/40x40.png',
    avatarHint: 'woman avatar',
    testimonial: 'The team nailed our MVP design with a fast turnaround and incredible attention to detail. The final product felt polished and professional.',
    dark: true,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[number] }) => (
  <Card className={cn(
    "p-6 md:p-8 rounded-2xl flex flex-col justify-between h-full",
    testimonial.dark ? 'bg-foreground text-background' : 'bg-card'
  )}>
    <div>
      <div className="mb-4">
        <QuoteIcon className={cn("w-6 h-6 mb-2", testimonial.dark ? "text-primary" : "text-red-400")} />
        <p className={cn("text-lg", testimonial.dark ? 'text-muted-foreground' : 'text-foreground/80')}>{testimonial.testimonial}</p>
      </div>
    </div>
    <div className="flex items-center gap-4 mt-6">
      <Image
        src={testimonial.avatarUrl}
        alt={testimonial.name}
        width={40}
        height={40}
        className="rounded-full"
        data-ai-hint={testimonial.avatarHint}
      />
      <div>
        <p className="font-bold">{testimonial.name}</p>
        <p className={cn("text-sm", testimonial.dark ? 'text-muted-foreground' : 'text-foreground/60')}>{testimonial.company}</p>
      </div>
    </div>
  </Card>
);

export function TestimonialsSection() {
  return (
    <section className="container mx-auto py-10 md:py-24 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
          Results that speaks volume
        </h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
          Find out how our happy clients are raving about us.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <TestimonialCard testimonial={testimonials[0]} />
        </div>
        <div className="flex flex-col gap-8">
          <TestimonialCard testimonial={testimonials[1]} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <TestimonialCard testimonial={testimonials[2]} />
            <TestimonialCard testimonial={testimonials[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
