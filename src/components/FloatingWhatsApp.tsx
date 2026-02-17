import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma aula experimental de Química."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:opacity-90 transition-all glow-purple"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
