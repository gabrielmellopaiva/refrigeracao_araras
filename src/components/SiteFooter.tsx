import logo from "@/assets/logo.png";

const SiteFooter = () => {
  return (
    <footer className="py-12 bg-foreground border-t border-border/10">
      <div className="container flex flex-col items-center gap-4 text-center">
        <img src={logo} alt="Refrigeração Araras" className="h-14 w-auto brightness-0 invert opacity-80" />
        <p className="font-display font-bold text-primary-foreground/70">Refrigeração Araras</p>
        <p className="text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Refrigeração Araras. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
