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

  return (
    <div ref={ref} className="text-6xl md:text-8xl font-black tracking-tighter number-glow">
      {prefix}{count.toFixed(target.includes('.') ? 1 : 0)}{suffix}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black text-center mb-24 tracking-tight"
        >
          The Numbers Don't Lie
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card glass-card-hover rounded-2xl p-8 md:p-12 text-center"
            >
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
