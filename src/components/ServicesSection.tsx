import { motion } from "framer-motion";
import { AirVent, Wrench, SprayCan } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

const services = [
  {
    icon: AirVent,
    title: "Instalação de Ar Condicionado",
    description: "Instalação segura e profissional para garantir o funcionamento perfeito do equipamento e maior eficiência.",
  },
  {
    icon: Wrench,
    title: "Manutenção de Ar Condicionado",
    description: "Manutenção preventiva e corretiva para aumentar a vida útil do equipamento e evitar problemas futuros.",
  },
  {
    icon: SprayCan,
    title: "Higienização de Ar Condicionado",
    description: "Limpeza completa para eliminar fungos, bactérias e melhorar a qualidade do ar da sua casa.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          Nossos Serviços
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group p-8 bg-card border border-border rounded-2xl flex flex-col gap-4 transition-colors duration-300 hover:border-primary/40"
              style={{ background: "hsl(var(--card))" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              whileHover={{
                background: "radial-gradient(circle at 50% 50%, hsl(204 100% 97%) 0%, hsl(var(--card)) 70%)",
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary">
                <s.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-sm text-muted-foreground text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
        >
          Orçamentos são realizados após visita técnica, exceto para serviços de limpeza.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesSection;
