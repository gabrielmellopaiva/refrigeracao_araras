import { motion } from "framer-motion";

const ease = [0.23, 1, 0.32, 1] as const;

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          Sobre a Refrigeração Araras
        </motion.h2>

        <motion.div
          className="mt-8 space-y-4 text-muted-foreground leading-relaxed text-left md:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
        >
          <p>
            A Refrigeração Araras é especializada em instalação, manutenção e higienização de ar condicionado residencial.
          </p>
          <p>
            Nosso objetivo é oferecer um serviço de qualidade, com garantia, atendimento profissional e soluções eficientes para garantir o conforto térmico da sua casa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
