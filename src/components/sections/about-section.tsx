
'use client';

import Image from "next/image";
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useRef } from "react";

const stampImages = [
  { src: "/postcard-1.png", alt: "Placeholder image 1" },
  { src: "/postcard-2.png", alt: "Placeholder image 2" },
  { src: "/postcard-3.png", alt: "Placeholder image 3" },
  { src: "/postcard-4.png", alt: "Placeholder image 4" },
  { src: "/postcard-5.png", alt: "Placeholder image 5" },
];

function useCardAnimation(scrollYProgress: MotionValue<number>) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const picture1X = useTransform(scrollYProgress, [0, 1], ['0%', '-220%']);
  const picture1Rotate = useTransform(scrollYProgress, [0, 1], [0, -15]);

  const picture2X = useTransform(scrollYProgress, [0, 1], ['0%', '-110%']);
  const picture2Rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  
  const picture4X = useTransform(scrollYProgress, [0, 1], ['0%', '110%']);
  const picture4Rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const picture5X = useTransform(scrollYProgress, [0, 1], ['0%', '220%']);
  const picture5Rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return {
    scale,
    picture1X,
    picture1Rotate,
    picture2X,
    picture2Rotate,
    picture4X,
    picture4Rotate,
    picture5X,
    picture5Rotate,
  };
}


export function AboutSection() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"]
    })

    const { 
      scale, 
      picture1X, picture1Rotate,
      picture2X, picture2Rotate,
      picture4X, picture4Rotate,
      picture5X, picture5Rotate
     } = useCardAnimation(scrollYProgress);

  return (
    <section ref={targetRef} className="container mx-auto py-10 md:py-24 px-4 md:px-16">
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
            <div className="flex justify-center">
              <div className="grid grid-cols-5 gap-4 w-full max-w-5xl">
                <motion.div style={{ x: picture1X, rotate: picture1Rotate }} className="col-span-1 origin-center">
                    <Image src={stampImages[0].src} alt={stampImages[0].alt} width={300} height={374} className="w-full h-auto rounded-lg object-cover bg-muted" />
                </motion.div>
                <motion.div style={{ x: picture2X, rotate: picture2Rotate }} className="col-span-1 origin-center">
                    <Image src={stampImages[1].src} alt={stampImages[1].alt} width={300} height={374} className="w-full h-auto rounded-lg object-cover bg-muted" />
                </motion.div>
                <motion.div style={{ scale }} className="col-span-1 origin-center z-10">
                    <Image src={stampImages[2].src} alt={stampImages[2].alt} width={300} height={374} className="w-full h-auto rounded-lg object-cover bg-muted" />
                </motion.div>
                <motion.div style={{ x: picture4X, rotate: picture4Rotate }} className="col-span-1 origin-center">
                    <Image src={stampImages[3].src} alt={stampImages[3].alt} width={300} height={374} className="w-full h-auto rounded-lg object-cover bg-muted" />
                </motion.div>
                <motion.div style={{ x: picture5X, rotate: picture5Rotate }} className="col-span-1 origin-center">
                    <Image src={stampImages[4].src} alt={stampImages[4].alt} width={300} height={374} className="w-full h-auto rounded-lg object-cover bg-muted" />
                </motion.div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
