import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CtaSection() {
  return (
    <section className="container mx-auto py-10 md:py-24 px-4">
      <Card className="bg-muted/50 border-none">
        <CardContent className="p-10 md:p-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground">
              Let's level up your product together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              29 founders have teamed up with us this year to shape their brands
            </p>
            <div className="mt-8">
              <Button size="lg">
                Get started
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
