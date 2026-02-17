import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-chemistry.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Estruturas moleculares e átomos"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-primary"
          >
            Aulas Particulares Online de Química
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Pare de sofrer com{" "}
            <span className="text-gradient">Química.</span>{" "}
            Comece a <span className="text-gradient">entender.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Professor com mestrado e doutorado. Método focado em compreensão real, 
            não decoreba. Aulas online personalizadas para ENEM, vestibulares e concursos.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma aula experimental de Química."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all glow-purple"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Aula Experimental
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Primeira aula com desconto • Sem compromisso
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
