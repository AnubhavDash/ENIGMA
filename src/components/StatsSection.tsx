import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    value: "13.8",
    label: "Spent by Williams F1 on crash damage in 2024",
    prefix: "€",
    suffix: "M"
  },
  {
    value: "675",
    label: "Cost of a single F1 carbon fiber chassis",
    prefix: "$",
    suffix: ",000"
  },
  {
    value: "287",
    label: "Predicted failure point - what if you knew before it happened?",
    suffix: " laps"
  },
  {
    value: "60",
    label: "From trackside photos to data-driven decisions",
    suffix: " seconds"
  }
];

const AnimatedNumber = ({ target, prefix = "", suffix = "" }: { target: string; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const targetNum = parseFloat(target);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = targetNum / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, targetNum]);

  const formattedNumber = target.includes('.') 
    ? count.toFixed(1)
    : count.toLocaleString('en-US', { maximumFractionDigits: 0 });

  return (
    <div ref={ref} className="text-6xl md:text-8xl font-black tracking-tighter number-glow">
      {prefix}{formattedNumber}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-32 px-4 bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 checkered-bg opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            bounce: 0.4
          }}
          className="text-5xl md:text-6xl font-black text-center mb-24 tracking-tight water-rise"
        >
          The Numbers Don't Lie
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                bounce: 0.35
              }}
              className="glass-card glass-card-hover rounded-2xl p-8 md:p-12 text-center water-rise relative overflow-hidden"
            >
              {/* Water droplet trails */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-0.5 bg-gradient-to-b from-white/60 via-white/30 to-transparent"
                    style={{
                      left: `${20 + i * 20}%`,
                      height: '40px',
                      top: '-40px'
                    }}
                    initial={{ y: 0, opacity: 0 }}
                    whileInView={{ 
                      y: 100,
                      opacity: [0, 1, 0.5, 0]
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.15 + 0.5 + i * 0.1,
                      ease: "easeIn"
                    }}
                  />
                ))}
              </div>
              
              <AnimatedNumber 
                target={stat.value} 
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
