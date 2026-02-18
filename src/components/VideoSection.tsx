import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const videos = [
  {
    id: "PO2q1j_KPLw",
    title: "Aula de Química",
    short: false,
  },
  {
    id: "lmm-0Je_x-A",
    title: "Short de Química",
    short: true,
  },
];

const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-primary">
            Assista uma aula
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Veja como são as{" "}
            <span className="text-gradient">aulas na prática</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Antes de agendar, confira o estilo de ensino e veja se combina com
            você.
          </p>
        </motion.div>

        <div className="flex flex-row flex-wrap justify-center items-start gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden border border-border bg-card shadow-lg ${
                video.short ? "w-[240px]" : "w-[420px]"
              }`}
            >
              <div
                className="relative w-full"
                style={{ paddingBottom: video.short ? "177.78%" : "56.25%" }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {video.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
