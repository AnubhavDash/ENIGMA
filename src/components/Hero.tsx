import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen bg-background overflow-hidden flex items-center justify-center">
      {/* Dim white hue background - centered */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center 40%, hsl(var(--glass-white-10)), transparent 50%)`
        }}
      />

      {/* Checkered Flag Pattern - Subtle */}
      <div className="absolute inset-0 checkered-bg opacity-30" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
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
      </div>
    </section>
  );
};

export default Hero;
