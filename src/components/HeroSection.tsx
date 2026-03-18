import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const ease = [0.23, 1, 0.32, 1] as const;

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Instalação de ar condicionado" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-transparent" />
      </div>

      {/* Watermark logo */}
      <div className="absolute right-8 bottom-8 md:right-16 md:bottom-16 opacity-10 pointer-events-none">
        <img src={logo} alt="" className="w-32 md:w-48" />
      </div>

      <div className="container relative z-10 py-32 md:py-40">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <motion.h1
            className="text-primary-foreground font-bold leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Especialistas em Instalação e Manutenção de Ar Condicionado
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-primary-foreground/80 max-w-[55ch]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Soluções rápidas e profissionais para deixar sua casa mais confortável mesmo nos dias mais quentes.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contato">
                Solicitar Visita Técnica <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/5519999478616" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} /> Falar no WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
