import { Button } from "@/components/ui/button";

const links = [
  { href: "#o-evento", label: "O Evento" },
  { href: "#wendell", label: "Quem é o Wendell" },
  { href: "#local-e-data", label: "Local e Data" },
  { href: "#tipos-de-acesso", label: "Tipos de Acesso" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <a href="#top" className="relative z-10 min-w-0 leading-tight">
            <span className="block truncate font-display text-xl leading-none tracking-[0.2em] text-white sm:text-2xl">
              NOVO <span className="text-gold-gradient">PROTAGON</span>
            </span>
            <span className="mt-1.5 block truncate text-[10px] font-extrabold uppercase tracking-[0.5em] text-muted-foreground sm:text-[11px]">
              Cuiabá — MT
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-white"
              >
                {l.label}
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
          </nav>

          <Button
            asChild
            size="sm"
            className="h-9 shrink-0 rounded-full border border-primary/40 bg-primary px-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary-foreground shadow-[0_8px_24px_-10px_rgba(212,175,55,0.65)] transition-transform duration-300 hover:scale-[1.03] hover:bg-primary/95 sm:px-5"
          >
            <a href="#tipos-de-acesso">Garantir acesso</a>
          </Button>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/5 py-3 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
