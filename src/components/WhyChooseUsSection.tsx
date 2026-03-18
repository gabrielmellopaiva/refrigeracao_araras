import { motion } from "framer-motion";
import { Zap, UserCheck, ShieldCheck, BadgeDollarSign, Home } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

const benefits = [
  { icon: Zap, text: "Atendimento rápido" },
  { icon: UserCheck, text: "Profissionais qualificados" },
  { icon: ShieldCheck, text: "Serviço com garantia" },
  { icon: BadgeDollarSign, text: "Preço justo e negociável" },
  { icon: Home, text: "Atendimento residencial" },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          Por que escolher a Refrigeração Araras?
        </motion.h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.text}
              className="flex flex-col items-center text-center gap-3 p-6 bg-card rounded-2xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <b.icon size={22} />
              </div>
              <span className="text-sm font-semibold text-foreground">{b.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
