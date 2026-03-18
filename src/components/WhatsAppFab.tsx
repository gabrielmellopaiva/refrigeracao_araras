import { MessageCircle } from "lucide-react";

const WhatsAppFab = () => {
  return (
    <a
      href="https://wa.me/5519999478616"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:brightness-110 transition-all active:scale-95"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={26} />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-accent/40 animate-pulse-ring" />
    </a>
  );
};

export default WhatsAppFab;
