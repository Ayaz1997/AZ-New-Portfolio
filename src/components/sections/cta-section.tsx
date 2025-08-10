import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Toaster } from "@/components/ui/toaster";

export function CtaSection() {
  return (
    <section className="container mx-auto py-10 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="border">
          <CardContent className="p-10 md:p-16">
            <div className="text-center">
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-foreground">
                Let's level up your product together
              </h2>
              <p className="mt-4 mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
                I'd Love To Hear About Your Project Or Ideas. Whether You're Looking For Design Work Or Just Want To Connect, Feel Free To Reach Out. Let's Create Something Amazing Together!
              </p>
              <ContactForm />
            </div>
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </section>
  );
}
