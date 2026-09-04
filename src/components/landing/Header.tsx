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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:flex lg:justify-between">
        <a href="#top" className="min-w-0 leading-tight">
          <span className="block truncate text-sm font-bold tracking-widest">NOVO PROTAGON</span>
          <span className="block truncate text-xs tracking-widest text-muted-foreground">
            CUIABÁ
          </span>
        </a>

        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:underline">
              {l.label}
            </a>
          ))}
        </nav>

        <Button asChild size="sm" className="shrink-0">
          <a href="#tipos-de-acesso">GARANTIR ACESSO</a>
        </Button>

        <nav className="col-span-2 -mx-4 flex gap-4 overflow-x-auto px-4 pb-1 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-xs text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
