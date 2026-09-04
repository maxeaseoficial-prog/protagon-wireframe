import { useEffect, useRef, type ReactNode } from "react";
import { BrandMark } from "./BrandMark";
import {
  BookOpen,
  CalendarDays,
  Check,
  Crown,
  Flame,
  MapPin,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          section.classList.add("section-entered");
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} id={id} className={`landing-section ${className}`}>
      {children}
    </section>
  );
}

function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`section-container mx-auto w-full max-w-7xl ${className}`.trim()}>
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="section-eyebrow mb-4 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.42em] text-primary">
      <span aria-hidden className="h-px w-8 shrink-0 bg-primary/70" />
      <span>{children}</span>
    </p>
  );
}

export function VslSection() {
  return (
    <Section
      id="vsl"
      className="bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.07),transparent_70%)]"
    >
      <Container>
        <p className="mx-auto max-w-3xl text-center text-[11px] font-extrabold uppercase tracking-[0.5em] text-primary">
          A experiência começa aqui
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl uppercase leading-tight tracking-wide text-white sm:text-5xl">
          Assista ao vídeo e descubra por que o <span className="text-gold-gradient">Protagon</span>{" "}
          vai transformar a sua vida
        </h2>

        <div className="video-frame relative mx-auto mt-10 aspect-video w-full max-w-5xl overflow-hidden">
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src="https://www.youtube.com/embed/s40NIz9b6jw?si=X2y9_X3tD-yF9Sxb"
            title="Assista ao vídeo e descubra por que o Protagon vai transformar a sua vida"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </Container>
    </Section>
  );
}

const experienceHighlights = [
  { icon: BookOpen, label: "Conteúdo prático" },
  { icon: Users, label: "Networking de alto nível" },
  { icon: Wrench, label: "Ferramentas aplicáveis" },
  { icon: Flame, label: "Ambiente transformador" },
];

export function EventExperience() {
  return (
    <Section id="o-evento">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>O evento</Eyebrow>
          <h2 className="font-display text-3xl uppercase leading-[1.05] tracking-wide text-white sm:text-5xl">
            Uma <span className="text-gold-gradient">experiência</span> presencial e transformadora
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            Três dias de imersão intensa com Wendell Carvalho e Karina Peloi para você destravar seu
            potencial, desenvolver sua mentalidade e construir um novo nível de vida.
          </p>

          <ul className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            {experienceHighlights.map((item) => (
              <li key={item.label} className="experience-highlight">
                <span className="text-primary">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-foreground/90">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="event-art">
          <img
            src="/uploads/ChatGPT_Image_4_de_set._de_2026_12_26_17.png"
            alt="Arte do Novo Protagon Cuiabá com Wendell Carvalho, Karina Peloi e cenas da experiência"
            width="1920"
            height="819"
            loading="lazy"
          />
          <figcaption>
            <div>
              <p>Imersão ao vivo</p>
              <span>Conteúdo · presença · energia</span>
            </div>
            <span>24 a 26 out</span>
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}

const stats: [string, string][] = [
  ["+1 milhão", "de pessoas impactadas"],
  ["+10 anos", "de experiência"],
  ["+100", "cidades no brasil"],
];

export function AboutWendell() {
  return (
    <Section
      id="wendell"
      className="bg-[radial-gradient(50%_60%_at_10%_50%,rgba(6,78,59,0.18),transparent_70%)]"
    >
      <Container className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <figure className="authority-portrait">
          <img
            src="/uploads/Design_sem_nome.png"
            alt="Retrato de Wendell Carvalho"
            width="1080"
            height="1350"
            loading="lazy"
          />
          <figcaption>
            <p>
              Wendell <span>Carvalho</span>
            </p>
            <span>Palestrante e mentor</span>
          </figcaption>
        </figure>

        <div>
          <Eyebrow>Sobre</Eyebrow>
          <h2 className="font-display text-3xl uppercase tracking-wide text-white sm:text-5xl">
            Quem é o <span className="text-gold-gradient">Wendell</span>?
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            [Espaço reservado para o texto biográfico do Wendell Carvalho.]
          </p>

          <div className="authority-stats mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map(([number, label]) => (
              <div key={number + label} className="authority-stat">
                <p className="font-display text-3xl leading-none text-gold-gradient sm:text-4xl">
                  {number}
                </p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

const audience = [
  "Quer evoluir pessoal e profissionalmente",
  "Busca mais disciplina, foco e resultados",
  "Deseja construir uma vida com mais liberdade",
  "Está pronto para assumir o controle da sua história",
];

export function AudienceSection() {
  return (
    <Section id="para-quem">
      <Container className="max-w-3xl text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-primary">
          Para quem é?
        </p>
        <h2 className="mt-4 font-display text-3xl uppercase tracking-wide text-white sm:text-5xl">
          Para quem é o <span className="text-gold-gradient">Protagon</span>?
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          Se você se identifica com pelo menos um dos pontos abaixo, este evento é para você.
        </p>
      </Container>

      <Container className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audience.map((item, i) => (
          <div key={item} className="audience-item">
            <p aria-hidden="true" className="audience-number">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-6 text-sm font-semibold leading-6 text-foreground/90">{item}</p>
            <span
              aria-hidden
              className="mt-6 block h-px w-8 bg-primary/50 transition-all duration-500 group-hover:w-full"
            />
          </div>
        ))}
      </Container>
    </Section>
  );
}

export function LocationSection() {
  return (
    <Section
      id="local-e-data"
      className="bg-[radial-gradient(50%_70%_at_90%_0%,rgba(212,175,55,0.08),transparent_70%)]"
    >
      <Container className="max-w-7xl">
        <div className="location-panel">
          <img
            className="location-scenery"
            src="/uploads/cuiaba-atmosphere.jpg"
            alt=""
            aria-hidden="true"
            width="1672"
            height="941"
            loading="lazy"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(16,185,129,0.12),transparent_65%)]"
          />
          <Eyebrow>Local e data</Eyebrow>
          <h2 className="font-display text-3xl uppercase tracking-wide text-white sm:text-5xl">
            Cuiabá <span className="text-gold-gradient">·</span> MT
          </h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            24, 25 e 26 de outubro de 2025
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground/90">
                Local a ser confirmado em breve
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <CalendarDays className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground/90">
                Evento presencial · vagas limitadas
              </span>
            </div>
          </div>

          <Button
            data-landing-button
            asChild
            variant="outline"
            className="mt-8 h-11 rounded-xl border-white/20 bg-transparent px-7 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            <a href="#">Ver no mapa</a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

const tiers: {
  name: string;
  badge?: string;
  featured?: boolean;
  items: string[];
}[] = [
  {
    name: "Acesso Essencial",
    items: ["Acesso aos 3 dias de evento", "Ingresso presencial", "Conteúdo principal"],
  },
  {
    name: "Acesso Executivo",
    badge: "Mais escolhido",
    featured: true,
    items: [
      "Tudo do Essencial",
      "Assentos exclusivos",
      "Materiais especiais",
      "Condições diferenciadas",
    ],
  },
  {
    name: "Acesso Diamond",
    items: ["Tudo do Executivo", "Experiência premium", "Encontro exclusivo", "Kit especial"],
  },
];

export function AccessTypes() {
  return (
    <Section id="tipos-de-acesso">
      <Container className="max-w-3xl text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-primary">
          Tipos de acesso
        </p>
        <h2 className="mt-4 font-display text-3xl uppercase tracking-wide text-white sm:text-5xl">
          Escolha o seu <span className="text-gold-gradient">nível</span> de experiência
        </h2>
      </Container>

      <Container className="mt-12 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`access-card ${
              t.featured ? "access-card-featured" : "access-card-standard"
            }`}
          >
            {t.badge && <span className="access-badge">{t.badge}</span>}

            <h3 className="flex items-center gap-2 font-display text-xl uppercase tracking-[0.14em] text-white sm:text-2xl">
              {t.name.includes("Diamond") && <Crown className="h-5 w-5 text-primary" />}
              {t.name}
            </h3>

            <ul className="mt-7 flex-1 space-y-3.5">
              {t.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button
              data-landing-button
              asChild
              className={`mt-8 h-11 w-full rounded-xl px-6 text-[11px] font-extrabold uppercase tracking-[0.18em] ${
                t.featured
                  ? "border border-primary/60 bg-primary text-primary-foreground shadow-[0_0_28px_-8px_rgba(212,175,55,0.7)] hover:bg-primary/95"
                  : "border border-white/15 bg-white/[0.04] text-white hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <a href="#">Garantir acesso</a>
            </Button>
          </div>
        ))}
      </Container>
    </Section>
  );
}

export function GuaranteeSection() {
  return (
    <Section
      id="garantia"
      className="bg-[radial-gradient(50%_70%_at_0%_50%,rgba(6,78,59,0.16),transparent_70%)]"
    >
      <Container className="grid items-center gap-14 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <Eyebrow>Sem risco</Eyebrow>
          <h2 className="font-display text-3xl uppercase tracking-wide text-white sm:text-5xl">
            Garantia <span className="text-gold-gradient">épica</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            Se até o final do 2º dia do evento você sentir que a experiência não foi o que esperava,
            poderá solicitar o reembolso presencialmente a um dos membros da equipe, conforme as
            regras da garantia.
          </p>
        </div>

        <div className="guarantee-seal relative mx-auto aspect-square w-52 sm:w-64">
          <div aria-hidden className="absolute inset-0 rounded-full border border-primary/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-[78%] w-[78%] flex-col items-center justify-center rounded-full border border-primary/25 bg-gradient-to-b from-emerald-950/40 to-card text-center shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]">
              <ShieldCheck className="h-9 w-9 text-primary sm:h-11 sm:w-11" />
              <p className="mt-2 font-display text-lg leading-none tracking-[0.14em] text-white sm:text-xl">
                GARANTIA
              </p>
              <p className="font-display text-lg leading-none tracking-[0.14em] text-primary sm:text-xl">
                ÉPICA
              </p>
              <p className="mt-2 px-4 text-[8px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                Zero risco
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

const faq: [string, string][] = [
  ["O que é exatamente o Protagon?", "Resposta a ser definida."],
  ["Qual a diferença entre os tipos de acesso?", "Resposta a ser definida."],
  ['O que significa "Pague 1, Leve 2"?', "Resposta a ser definida."],
  ["Quais são as formas de pagamento?", "Resposta a ser definida."],
  ["Como funciona a garantia?", "Resposta a ser definida."],
  ["Existe alguma restrição de participação?", "Resposta a ser definida."],
  ["Esta é a página oficial do Protagon Cuiabá?", "Resposta a ser definida."],
];

export function FaqSection() {
  return (
    <Section id="faq">
      <Container className="max-w-4xl">
        <div className="text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-primary">
            Dúvidas
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase tracking-wide text-white sm:text-5xl">
            Perguntas <span className="text-gold-gradient">frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full">
          {faq.map(([q, a], index) => (
            <AccordionItem key={q} value={`item-${index}`} className="faq-item">
              <AccordionTrigger className="px-1 font-display text-left text-base uppercase tracking-[0.08em] text-white transition-colors sm:px-3 sm:text-lg [&>svg]:text-primary">
                <span>{q}</span>
              </AccordionTrigger>
              <AccordionContent className="px-1 pb-6 pt-1 text-sm leading-7 text-muted-foreground sm:px-3 sm:text-base">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}

export function JourneySection() {
  return (
    <Section
      id="jornada"
      className="bg-[radial-gradient(60%_70%_at_50%_100%,rgba(16,185,129,0.08),transparent_70%)]"
    >
      <Container className="max-w-4xl text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-primary">
          Continue sua jornada
        </p>
        <h2 className="mt-4 font-display text-3xl uppercase leading-tight tracking-wide text-white sm:text-5xl">
          Quer ver outros <span className="text-gold-gradient">Protagons</span> ou explorar mais
          cursos do Wendell?
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          Se Cuiabá não está no seu mapa neste momento, confira a agenda completa de eventos em
          outras cidades ou explore outros cursos e treinamentos.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            data-landing-button
            asChild
            variant="outline"
            className="h-11 w-full rounded-xl border-white/15 bg-transparent px-6 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary sm:w-auto"
          >
            <a href="#">Ver agenda de outros eventos</a>
          </Button>
          <Button
            data-landing-button
            asChild
            variant="outline"
            className="h-11 w-full rounded-xl border-white/15 bg-transparent px-6 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary sm:w-auto"
          >
            <a href="#">Conhecer outros cursos</a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section id="cta-final" className="pb-24 sm:pb-32">
      <Container>
        <div className="final-panel">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_80%_at_50%_0%,rgba(212,175,55,0.18),transparent_65%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_110%,rgba(16,185,129,0.16),transparent_65%)]"
          />

          <p className="relative text-[11px] font-extrabold uppercase tracking-[0.5em] text-muted-foreground">
            Sua vaga está esperando
          </p>
          <h2 className="relative mt-4 font-display text-4xl uppercase leading-[0.95] tracking-[0.05em] text-white sm:text-6xl lg:text-7xl">
            Novo <span className="text-gold-gradient">Protagon</span>
            <br />
            Cuiabá
          </h2>
          <p className="relative mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            24, 25 e 26 de outubro de 2025 · Cuiabá - MT
          </p>

          <div className="relative mx-auto mt-10 max-w-md">
            <Button
              data-landing-button
              asChild
              size="lg"
              className="gold-button h-14 w-full rounded-xl border border-primary/60 bg-primary px-8 text-sm font-extrabold uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <a href="#tipos-de-acesso">Garantir acesso</a>
            </Button>
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Evento presencial · vagas limitadas
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#top" className="inline-block">
              <BrandMark className="footer-brand" />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
              Uma experiência presencial de três dias para construir uma vida épica com Wendell
              Carvalho.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-white">
              Navegação
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#o-evento" className="transition-colors hover:text-primary">
                  O Evento
                </a>
              </li>
              <li>
                <a href="#wendell" className="transition-colors hover:text-primary">
                  Quem é o Wendell
                </a>
              </li>
              <li>
                <a href="#tipos-de-acesso" className="transition-colors hover:text-primary">
                  Tipos de Acesso
                </a>
              </li>
              <li>
                <a href="#local-e-data" className="transition-colors hover:text-primary">
                  Local e Data
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-primary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-white">
              Links
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Página Oficial
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Acesso Executivo
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Acesso Diamond
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Outros Eventos
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Outros Cursos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs leading-6 text-muted-foreground/70">
          [Área reservada para aviso legal e informações institucionais.]
        </div>
      </Container>
    </footer>
  );
}
