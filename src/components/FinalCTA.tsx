import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Dramatic single spotlight from above */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, hsl(var(--glass-white-20)), transparent 60%)"
        }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative text-center max-w-5xl mx-auto space-y-12">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-8xl md:text-9xl font-black tracking-tighter text-glow"
        >
          ENIGMA
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-2xl md:text-3xl font-semibold">
            Data-Driven Damage Analysis for Formula 1
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Because in F1, every decision matters.
          </p>
        </motion.div>


        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center pt-8"
        >
          <Button 
            size="lg" 
            className="group glass-card-hover text-lg px-8 py-6 rounded-xl font-semibold bg-primary text-primary-foreground hover:shadow-2xl hover:shadow-primary/20"
            asChild
          >
            <a href="https://github.com/yourusername/enigma" target="_blank" rel="noopener noreferrer">
              Experience ENIGMA
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        {/* Final powerful statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="pt-16 border-t border-border/50 mt-16"
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-light italic max-w-3xl mx-auto">
            "In F1, milliseconds decide victories. <span className="text-primary font-semibold text-glow">ENIGMA decides what survives.</span>"
          </p>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default FinalCTA;
