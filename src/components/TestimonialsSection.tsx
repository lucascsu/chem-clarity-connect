import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lucas M.",
    role: "Aluno – 3º ano do Ensino Médio",
    text: "Eu achava que nunca ia entender estequiometria. Depois de 4 aulas, consegui resolver sozinho as questões do ENEM. Foi surreal.",
  },
  {
    name: "Fernanda R.",
    role: "Mãe de aluno – vestibulando",
    text: "Meu filho passou de 4 para 8 em Química. O professor tem uma paciência e uma didática que fazem toda a diferença.",
  },
  {
    name: "Pedro H.",
    role: "Aprovado em Medicina – UFMG",
    text: "As aulas me deram segurança para encarar Química no vestibular. O método passo a passo me ajudou a entender a lógica por trás dos cálculos.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            O que dizem os <span className="text-gradient">alunos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border card-glow flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
