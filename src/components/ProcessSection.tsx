import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, Search, ShieldCheck } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

const steps = [
  { icon: MessageCircle, title: "Contato", desc: "Você entra em contato pelo WhatsApp." },
  { icon: CalendarCheck, title: "Agendamento", desc: "Agendamos uma visita técnica." },
  { icon: Search, title: "Análise", desc: "Analisamos o local e indicamos a melhor solução." },
  { icon: ShieldCheck, title: "Execução", desc: "Realizamos o serviço com segurança e garantia." },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-2xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          Como funciona o atendimento
        </motion.h2>

        <div className="mt-14 relative">
          {/* Vertical dashed line */}
          <div className="absolute left-6 md:left-7 top-0 bottom-0 w-px border-l border-dashed border-border" />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                className="flex items-start gap-6 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease }}
              >
                <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0">
                  <s.icon size={22} />
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-foreground text-lg">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mt-1">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
