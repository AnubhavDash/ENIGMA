import { motion } from "framer-motion";

const Acknowledgments = () => {
  return (
    <section className="relative py-32 px-4 bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black text-center mb-20 tracking-tight"
        >
          Heritage & Precision
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Bletchley Park Heritage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card glass-card-hover rounded-2xl p-12 space-y-6"
          >
            <div className="text-6xl mb-6">🇬🇧</div>
            <h3 className="text-3xl font-bold mb-4">Inspired by Brilliance</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Inspired by <span className="text-foreground font-semibold">Alan Turing's</span> Enigma-breaking genius at <span className="text-foreground font-semibold">Bletchley Park</span>. 
              Where codes were cracked and impossible became possible.
            </p>
            <p className="text-md text-muted-foreground italic">
              "We can only see a short distance ahead, but we can see plenty there that needs to be done."
              <span className="block mt-2 text-sm">— Alan Turing</span>
            </p>
          </motion.div>

          {/* Made in India */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card glass-card-hover rounded-2xl p-12 space-y-6 relative overflow-hidden"
          >
            {/* Indian tri-color accent */}
            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[hsl(28,100%,60%)] via-white to-[hsl(123,89%,27%)]" />
            
            <div className="text-6xl mb-6">🇮🇳</div>
            <h3 className="text-3xl font-bold mb-4">Built with Precision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Engineered in <span className="text-foreground font-semibold">India</span> for engineers who demand precision in decision-making. 
              Where innovation meets execution.
            </p>
          </motion.div>
        </div>

        {/* Bridge statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-4xl mx-auto">
            From <span className="text-foreground">Bletchley Park</span> to the <span className="text-foreground">F1 paddock</span> — 
            <span className="block mt-2 text-primary font-semibold text-glow">precision is our legacy</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Acknowledgments;
