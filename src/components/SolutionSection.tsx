import { motion } from "framer-motion";
import { CheckCircle2, BookOpen, Target, Users } from "lucide-react";

const solutions = [
  {
    icon: Users,
    title: "Aulas 100% Personalizadas",
    description: "Cada aula é montada com base nas suas dificuldades específicas. Nada de conteúdo genérico.",
  },
  {
    icon: BookOpen,
    title: "Resolução Passo a Passo",
    description: "Exercícios resolvidos com calma e clareza. Você entende a lógica, não apenas a resposta.",
  },
  {
    icon: Target,
    title: "Foco em Compreensão Real",
    description: "Método que constrói raciocínio químico sólido. Você aprende a pensar, não a decorar.",
  },
  {
    icon: CheckCircle2,
    title: "Preparação para Provas",
    description: "Estratégias específicas para ENEM, vestibulares e concursos. Questões comentadas e simulados.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            A <span className="text-gradient">solução</span> que você precisa
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Um método que transforma Química de um pesadelo em uma disciplina que faz sentido.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border card-glow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <solution.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold mb-1 text-foreground">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
