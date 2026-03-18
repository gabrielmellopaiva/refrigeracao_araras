import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const ease = [0.23, 1, 0.32, 1] as const;

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-foreground">
      <div className="container text-center max-w-2xl">
        <motion.img
          src={logo}
          alt="Refrigeração Araras"
          className="h-16 w-auto mx-auto mb-8 brightness-0 invert opacity-80"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        />
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          Precisando instalar ou fazer manutenção no seu ar condicionado?
        </motion.h2>

        <motion.p
          className="mt-6 text-primary-foreground/70 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          Fale com a gente agora mesmo e agende sua visita técnica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-10"
        >
          <Button variant="whatsapp" size="xl" asChild>
            <a href="https://wa.me/5519999478616" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} /> Chamar no WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
