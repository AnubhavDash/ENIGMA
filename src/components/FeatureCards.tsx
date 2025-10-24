import { motion } from "framer-motion";
import { TrendingUp, Gauge, Brain, Map, DollarSign, Clock } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  stat: string;
}

const features: Feature[] = [
  {
    icon: TrendingUp,
    title: "Time-Series Prediction",
    description: "287 laps to failure - we predict it before it happens",
    stat: "99.25% faster than manual inspection"
  },
  {
    icon: Gauge,
    title: "Damage Velocity Tracking",
    description: "Detects 3.5x acceleration in damage progression",
    stat: "Prevents DNFs before they occur"
  },
  {
    icon: Brain,
    title: "AI Classification",
    description: "89% confidence defect detection",
    stat: "Catches damage invisible to human eye"
  },
  {
    icon: Map,
    title: "Environmental Intelligence",
    description: "2.3x higher damage at high-speed circuits - we learn patterns",
    stat: "Predicts damage before arriving at track"
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description: "$3-8M saved per team per season",
    stat: "Never breach the budget cap"
  },
  {
    icon: Clock,
    title: "Instant Analysis",
    description: "45 seconds from photo to recommendation",
    stat: "Real-time trackside intelligence"
  }
];

const FeatureCards = () => {
  return (
    <section className="relative py-32 px-4 bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            The Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered damage analysis that predicts failures before they happen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-card glass-card-hover rounded-2xl p-8 spotlight relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-glow transition-all">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-mono text-primary font-semibold">
                      {feature.stat}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
