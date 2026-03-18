import { motion } from "framer-motion";
import { Phone, Mail, Instagram } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

const contacts = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "19 99947 8616",
    href: "https://wa.me/5519999478616",
  },
  {
    icon: Mail,
    label: "Email",
    value: "refrigeracaoararas@gmail.com",
    href: "mailto:refrigeracaoararas@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@refrigeracaoararas",
    href: "https://instagram.com/refrigeracaoararas",
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          Contato
        </motion.h2>

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-3 p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <c.icon size={22} />
              </div>
              <span className="text-sm font-semibold text-foreground">{c.label}</span>
              <span className="text-sm text-muted-foreground">{c.value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
