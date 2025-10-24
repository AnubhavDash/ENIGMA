import { motion } from "framer-motion";

const ImpactSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-32 overflow-hidden">
      {/* Dramatic spotlight from top */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
      
      {/* Checkered pattern */}
      <div className="absolute inset-0 checkered-bg opacity-5" />

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-glow">FROM PIXELS</span>
            <span className="block text-primary">TO PREDICTIONS</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6 text-2xl md:text-3xl text-muted-foreground font-light max-w-4xl mx-auto"
          >
            <p>While others show <span className="text-foreground font-medium">'what changed'</span>,</p>
            <p>we predict <span className="text-primary font-bold text-glow">'when it will fail'</span></p>
          </motion.div>

          {/* Animated visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 flex items-center justify-center gap-8 text-xl font-mono"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="glass-card px-6 py-3 rounded-lg"
            >
              Detection
            </motion.div>
            <motion.div className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="glass-card px-6 py-3 rounded-lg"
            >
              Classification
            </motion.div>
            <motion.div className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="glass-card px-6 py-3 rounded-lg text-primary font-bold"
            >
              Prediction
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
