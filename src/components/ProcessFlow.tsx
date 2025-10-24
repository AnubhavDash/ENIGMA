import { motion } from "framer-motion";
import { Upload, Grid3x3, Eye, Brain, Sparkles, CheckCircle } from "lucide-react";

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Upload,
    title: "UPLOAD",
    description: "Time-series images"
  },
  {
    icon: Grid3x3,
    title: "ALIGN",
    description: "Automated alignment"
  },
  {
    icon: Eye,
    title: "DETECT",
    description: "Change detection"
  },
  {
    icon: Brain,
    title: "ANALYZE",
    description: "AI classification"
  },
  {
    icon: Sparkles,
    title: "PREDICT",
    description: "Failure prediction"
  },
  {
    icon: CheckCircle,
    title: "DECIDE",
    description: "Data-driven recommendation"
  }
];

const ProcessFlow = () => {
  return (
    <section className="relative py-32 px-4 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            From pixels to predictions in six seamless steps
          </p>
        </motion.div>

        {/* Desktop: Horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <motion.div 
              className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Icon Circle */}
                    <motion.div 
                      className="relative mb-6 w-40 h-40 rounded-full glass-card glass-card-hover flex items-center justify-center"
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    >
                      <Icon className="w-12 h-12 text-primary" />
                      
                      {/* Pulse effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 1.2, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                    </motion.div>

                    <h3 className="text-lg font-bold mb-2 tracking-wider">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical flow */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-6"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full glass-card flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
