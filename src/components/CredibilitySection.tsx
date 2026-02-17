import { motion } from "framer-motion";
import { GraduationCap, Award, Clock, Beaker } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "Mestrado e Doutorado em Química" },
  { icon: Award, label: "Experiência em Ensino Médio e Superior" },
  { icon: Clock, label: "+10 anos de experiência docente" },
  { icon: Beaker, label: "Especialista em Estequiometria e Equilíbrio" },
];

const CredibilitySection = () => {
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
            Por que confiar em <span className="text-gradient">mim?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Formação sólida e anos de prática ensinando alunos como você a dominar Química.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {credentials.map((cred, index) => (
            <motion.div
              key={cred.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-card border border-border card-glow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <cred.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{cred.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
