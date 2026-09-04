import { Menu, ArrowUpRight } from "lucide-react";
import { BrandMark } from "./BrandMark";

const links = [
  { href: "#o-evento", label: "O Evento" },
  { href: "#wendell", label: "Quem é o Wendell" },
  { href: "#local-e-data", label: "Local e Data" },
  { href: "#tipos-de-acesso", label: "Tipos de Acesso" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <div className="header-inner">
        <a href="#top" className="header-brand" aria-label="Novo Protagon Cuiabá — início">
          <BrandMark eager />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#tipos-de-acesso" className="header-access gold-button">
          Garantir acesso <ArrowUpRight aria-hidden="true" />
        </a>
        <details
          className="mobile-menu"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.currentTarget.open = false;
              event.currentTarget.querySelector("summary")?.focus();
            }
          }}
        >
          <summary aria-label="Menu de navegação">
            <Menu aria-hidden="true" />
            <span>Menu</span>
          </summary>
          <nav aria-label="Navegação principal móvel">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.currentTarget.closest("details")?.removeAttribute("open");
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
