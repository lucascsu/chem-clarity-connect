import { motion } from "framer-motion";
import { AlertTriangle, XCircle, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: XCircle,
    title: "Cálculos confusos",
    description: "Estequiometria, mol, concentração... tudo parece um labirinto sem saída.",
  },
  {
    icon: HelpCircle,
    title: "Conceitos abstratos",
    description: "Equilíbrio químico, ligações, tabela periódica — difícil visualizar o que está acontecendo.",
  },
  {
    icon: AlertTriangle,
    title: "Notas baixas e ansiedade",
    description: "A prova chega e bate o desespero. Você estuda, mas não consegue resolver as questões.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-section">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Você se identifica com <span className="text-gradient">isso?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A maioria dos alunos enfrenta os mesmos obstáculos em Química. Você não está sozinho.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border card-glow"
            >
              <problem.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-display font-semibold mb-2 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
