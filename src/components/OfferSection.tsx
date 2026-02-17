import { motion } from "framer-motion";
import { MessageCircle, Check, Sparkles } from "lucide-react";

const benefits = [
  "Aula experimental com valor especial",
  "Planos flexíveis: avulsa, semanal ou mensal",
  "Horários adaptados à sua rotina",
  "Material de apoio personalizado",
  "Acompanhamento individual entre aulas",
  "Aulas online ao vivo — de qualquer lugar",
];

const OfferSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-section">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Comece <span className="text-gradient">agora</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Dê o primeiro passo para transformar sua relação com a Química.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-2xl bg-card border border-primary/20 card-glow glow-purple relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3">
              <Sparkles className="w-6 h-6 text-primary animate-pulse-glow" />
            </div>

            <h3 className="text-2xl font-display font-bold mb-2 text-foreground">
              Aula Experimental
            </h3>
            <p className="text-muted-foreground mb-8">
              Conheça o método, tire suas dúvidas e descubra como Química pode ser mais simples do que parece.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-foreground text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma aula experimental de Química."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all glow-purple"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Resposta em até 2 horas • Sem compromisso
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
