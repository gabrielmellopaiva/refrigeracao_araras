import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ease = [0.23, 1, 0.32, 1] as const;

const faqs = [
  {
    q: "Vocês fazem orçamento gratuito?",
    a: "O orçamento é realizado após visita técnica.",
  },
  {
    q: "Vocês atendem em Campinas?",
    a: "Sim, atendemos Campinas e região.",
  },
  {
    q: "Quanto tempo demora a instalação?",
    a: "Depende do equipamento e do ambiente, mas normalmente é realizada no mesmo dia.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-2xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          Perguntas Frequentes
        </motion.h2>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
