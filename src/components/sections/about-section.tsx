
'use client';

import Image from "next/image";
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useRef } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

const cardImages = [
  { src: "/img-1.png", alt: "Placeholder image 1" },
  { src: "/img-2.png", alt: "Placeholder image 2" },
  { src: "/img-3.png", alt: "Placeholder image 3" },
];

function useCardAnimation(scrollYProgress: MotionValue<number>) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const picture1X = useTransform(scrollYProgress, [0, 1], ['0%', '-90%']);
  const picture1Rotate = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const picture3X = useTransform(scrollYProgress, [0, 1], ['0%', '90%']);
  const picture3Rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return {
    scale,
    picture1X,
    picture1Rotate,
    picture3X,
    picture3Rotate,
  };
}

export function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScrollProgress(containerRef, {
      offset: ["start end", "end start"],
    });

    const { 
      scale, 
      picture1X, picture1Rotate,
      picture3X, picture3Rotate,
     } = useCardAnimation(scrollYProgress);

  return (
    <section ref={containerRef} className="container mx-auto py-10 md:py-24 px-4 md:px-16">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-6xl font-normal text-foreground">
          About Me
        </h2>
        <p className="mt-8 text-lg md:text-2xl text-muted-foreground leading-relaxed">
          Hi! 👋 I&apos;m Ayaz, A <span className="font-bold text-foreground">UI/UX Designer</span> With 4 Years Of Experience In Design. I&apos;ve worked with products in <span className="font-bold text-foreground">SaaS, Web3 & AI</span> 🌍 Building Clean And <span className="font-bold text-foreground">User-Friendly Interfaces</span> ✨.
        </p>
      </div>

      <div className="mt-20 md:mt-24 h-[200vh]">
          <div className="sticky top-1/4">
            <div className="grid grid-cols-3 justify-items-center">
              <motion.div style={{ x: picture1X, rotate: picture1Rotate, zIndex: 1 }} className="origin-center">
                  <div className="p-4 rounded-2xl border bg-card text-card-foreground shadow-lg">
                    <Image src={cardImages[0].src} alt={cardImages[0].alt} width={300} height={374} className="w-full h-auto rounded-lg object-cover bg-muted" />
                  </div>
              </motion.div>
              <motion.div style={{ scale, zIndex: 2 }} className="origin-center">
                  <div className="p-4 rounded-2xl border bg-card text-card-foreground shadow-lg">
                    <Image src={cardImages[1].src} alt={cardImages[1].alt} width={300} height={374} className="w-full h-auto rounded-lg object-cover bg-muted" />
                  </div>
              </motion.div>
              <motion.div style={{ x: picture3X, rotate: picture3Rotate, zIndex: 1 }} className="origin-center">
                  <div className="p-4 rounded-2xl border bg-card text-card-foreground shadow-lg">
                    <Image src={cardImages[2].src} alt={cardImages[2].alt} width={300} height={374} className="w-full h-auto rounded-lg object-cover bg-muted" />
                  </div>
              </motion.div>
            </div>
          </div>
      </div>
    </section>
  );
}
