
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "@/components/icons/quote";

const testimonials = [
  {
    name: 'David Callahan',
    company: 'Marketing Director, Spotify',
    avatarUrl: 'https://placehold.co/40x40.png',
    avatarHint: 'man avatar',
    testimonial: 'We needed a modern, high-converting website, and Ayaz delivered beyond expectations. Their design and SEO expertise helped us increase conversion rate significantly in just two weeks. Highly recommend!',
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
    name: 'Jane Doe',
    company: 'CEO, Innovate Ltd.',
    avatarUrl: 'https://placehold.co/40x40.png',
    avatarHint: 'woman avatar',
    testimonial: 'The team nailed our MVP design with a fast turnaround and incredible attention to detail. The final product felt polished and professional.',
  },
];

const TestimonialCard = ({ testimonial, className }: { testimonial: (typeof testimonials)[number], className?: string }) => (
  <Card className={`p-6 md:p-8 rounded-2xl flex flex-col justify-between shadow-lg dark:shadow-primary/10 ${className}`}>
    <div className="flex-grow">
      <QuoteIcon className="w-10 h-10 mb-6 text-primary" />
      <p className="text-foreground/80 text-lg leading-relaxed line-clamp-[7]">{testimonial.testimonial}</p>
    </div>
    <div className="flex items-center gap-4 mt-6 flex-shrink-0">
      <Image
        src={testimonial.avatarUrl}
        alt={testimonial.name}
        width={40}
        height={40}
        className="rounded-full"
        data-ai-hint={testimonial.avatarHint}
      />
      <div>
        <p className="font-bold text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
      </div>
    </div>
  </Card>
);

export function TestimonialsSection() {
  return (
    <section className="container mx-auto py-10 md:py-24 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
          Results that speak volumes
        </h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
          Find out how happy clients are raving about my work.
        </p>
      </div>

      <div className="mt-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 h-full">
            <TestimonialCard testimonial={testimonials[0]} className="h-full" />
          </div>
          <div className="md:col-span-2 flex flex-col gap-8">
            <TestimonialCard testimonial={testimonials[1]} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <TestimonialCard testimonial={testimonials[2]} />
              <TestimonialCard testimonial={testimonials[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
