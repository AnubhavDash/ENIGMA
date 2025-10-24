import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import haasF1Car from "@/assets/haas-f1-car.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const carScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const carY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const spotlightX = useTransform(scrollYProgress, [0, 1], ["20%", "80%"]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[150vh] bg-background overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Animated Spotlight Effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${spotlightX} 30%, hsl(var(--glass-white-10)), transparent 60%)`
          }}
        />

        {/* Checkered Flag Pattern - Subtle */}
        <div className="absolute inset-0 checkered-bg opacity-30" />

        {/* F1 Car */}
        <motion.div
          className="relative z-10"
          style={{ 
            scale: carScale,
            y: carY
          }}
        >
          <img 
            src={haasF1Car} 
            alt="HAAS F1 Car" 
            className="max-w-4xl w-full h-auto drop-shadow-2xl"
          />
          {/* Car reflection */}
          <div className="absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-t from-transparent to-background/20 blur-xl" />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          style={{ opacity: textOpacity }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-8xl md:text-9xl font-black tracking-tighter text-glow mb-6"
          >
            ENIGMA
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl font-light tracking-wide text-muted-foreground"
          >
            Decoding Damage. Predicting Failure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-20 flex flex-col items-center gap-2"
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Scroll to decode</p>
            <ChevronDown className="w-6 h-6 animate-pulse-glow" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
