import type { ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  Crown,
  Flame,
  MapPin,
  Play,
  ShieldCheck,
  Sparkles,
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
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl ${className}`.trim()}>{children}</div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.42em] text-primary">
      <span aria-hidden className="h-px w-8 shrink-0 bg-primary/70" />
      <span>{children}</span>
    </p>
  );
}

const heroChips = [
  { icon: CalendarDays, label: "24, 25 e 26 de Outubro de 2025" },
  { icon: MapPin, label: "Cuiabá - MT" },
  { icon: Users, label: "Evento Presencial" },
  { icon: Sparkles, label: "Vagas Limitadas" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-6 sm:pt-10">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 left-1/2 h-[38rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(212,175,55,0.16),transparent)]" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.2),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.25)_100%)]" />
      </div>

      <Container className="relative grid items-center gap-14 py-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div className="max-w-xl">
          <p className="animate-fade-up text-[11px] font-extrabold uppercase tracking-[0.5em] text-muted-foreground">
            Evento presencial · 3 dias de imersão
          </p>

          <h1 className="animate-fade-up mt-5 font-display text-[3.2rem] uppercase leading-[0.92] tracking-[0.02em] text-white sm:text-7xl lg:text-[5.25rem]" style={{ animationDelay: "80ms" }}>
            Novo
            <br />
            <span className="text-gold-gradient">Protagon</span>
            <br />
            Cuiabá
          </h1>

          <p
            className="animate-fade-up mt-5 text-sm font-bold uppercase tracking-[0.4em] text-primary sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Construa sua vida épica
          </p>

          <p
            className="animate-fade-up mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
            style={{ animationDelay: "220ms" }}
          >
            Uma imersão presencial de três dias para você destravar seu potencial,
            desenvolver sua mentalidade e escrever o próximo capítulo da sua história.
          </p>

          <ul className="animate-fade-up mt-8 grid max-w-xl grid-cols-1 gap-2.5 sm:grid-cols-2" style={{ animationDelay: "280ms" }}>
            {heroChips.map((ch) => (
              <li
                key={ch.label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.05]"
              >
                <ch.icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-[13px] font-semibold tracking-wide text-foreground/90">
                  {ch.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "340ms" }}>
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl border border-primary/60 bg-primary px-8 text-[13px] font-extrabold uppercase tracking-[0.16em] text-primary-foreground shadow-[0_0_36px_-8px_rgba(212,175,55,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/95"
            >
              <a href="#tipos-de-acesso">Garantir acesso</a>
            </Button>
            <a
              href="#vsl"
              className="group inline-flex items-center justify-center gap-2 px-2 py-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary sm:px-4"
            >
              Ver vídeo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="animate-fade-up relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: "200ms" }}>
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-tr from-emerald-950/90 via-transparent to-primary/25 opacity-80 blur-2xl"
          />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/25 bg-card/50 p-2 shadow-2xl shadow-black/70 backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-[1.25rem]">
              <img
                src="/uploads/ChatGPT_Image_4_de_set._de_2026_12_56_34.png"
                alt="Wendell Carvalho — Novo Protagon Cuiabá"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(6,78,59,0.45)_0%,rgba(6,78,59,0)_40%,rgba(212,175,55,0.22)_100%)]" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-5 sm:p-6">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.42em] text-muted-foreground">
                    24 • 25 • 26 out 2025
                  </p>
                  <p className="mt-1 font-display text-2xl leading-none tracking-[0.12em] text-white sm:text-3xl">
                    CUIABÁ <span className="text-primary">/</span> MT
                  </p>
                </div>
                <span className="rounded-full border border-primary/40 bg-black/40 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.24em] text-primary backdrop-blur">
                  Imersão total
                </span>
              </div>
            </div>
          </div>

          <div
            aria-hidden
            className="animate-float absolute -right-3 top-6 hidden rounded-2xl border border-primary/30 bg-background/90 px-4 py-3 shadow-xl shadow-black/50 backdrop-blur sm:block lg:-right-6"
          >
            <p className="font-display text-2xl leading-none text-gold-gradient">3 DIAS</p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-muted-foreground">De pura imersão</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function VslSection() {
  return (
    <Section id="vsl" className="bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.07),transparent_70%)]">
      <Container>
        <p className="mx-auto max-w-3xl text-center text-[11px] font-extrabold uppercase tracking-[0.5em] text-primary">
          A experiência começa aqui
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl uppercase leading-tight tracking-wide text-white sm:text-5xl">
          Assista ao vídeo e descubra por que o{" "}
          <span className="text-gold-gradient">Protagon</span> vai transformar a sua vida
        </h2>

        <div className="animate-scale-in group relative mx-auto mt-10 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl shadow-black/60">
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src="https://www.youtube.com/embed/s40NIz9b6jw?si=X2y9_X3tD-yF9Sxb"
            title="Assista ao vídeo e descubra por que o Protagon vai transformar a sua vida"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
            Uma <span className="text-gold-gradient">experiência</span> presenciaL e transformadora
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            Três dias de imersão intensa com Wendell Carvalho e Karina Peloi para você destravar
            seu potencial, desenvolver sua mentalidade e construir um novo nível de vida.
          </p>

          <ul className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            {experienceHighlights.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-foreground/90">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div aria-hidden className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-bl from-emerald-950/80 via-transparent to-primary/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-2xl shadow-black/70">
            <img
              src="/uploads/1.png"
              alt="Público em imersão presencial do Novo Protagon"
              className="aspect-[4/3] w-full object-cover opacity-95"
              loading="lazy"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-5 sm:p-7">
              <div>
                <p className="font-display text-2xl leading-none tracking-[0.14em] text-white sm:text-3xl">
                  Imersão ao vivo
                </p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.34em] text-muted-foreground">
                  Conteúdo · presença · energia
                </p>
              </div>
              <span className="rounded-full bg-primary px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.22em] text-primary-foreground">
                24 a 26 out
              </span>
            </div>
          </div>
        </div>
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
    <Section id="wendell" className="bg-[radial-gradient(50%_60%_at_10%_50%,rgba(6,78,59,0.18),transparent_70%)]">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-tr from-primary/15 via-transparent to-emerald-950/80 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-card/50 p-2 shadow-2xl shadow-black/70 backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-[1.25rem]">
              <img
                src="/uploads/Design_sem_nome_2_.png"
                alt="Retrato de Wendell Carvalho"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(212,175,55,0.16)_0%,transparent_36%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-2xl leading-none tracking-[0.12em] text-white sm:text-3xl">
                  WENDELL <span className="text-gold-gradient">CARVALHO</span>
                </p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.34em] text-muted-foreground">
                  Palestrante e mentor
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Eyebrow>Sobre</Eyebrow>
          <h2 className="font-display text-3xl uppercase tracking-wide text-white sm:text-5xl">
            Quem é o <span className="text-gold-gradient">Wendell</span>?
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            [Espaço reservado para o texto biográfico do Wendell Carvalho.]
          </p>

          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map(([number, label]) => (
              <div
                key={number + label}
                className="rounded-2xl border border-white/10 bg-card/60 p-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
              >
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
        <p className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-primary">Para quem é?</p>
        <h2 className="mt-4 font-display text-3xl uppercase tracking-wide text-white sm:text-5xl">
          Para quem é o <span className="text-gold-gradient">Protagon</span>?
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          Se você se identifica com pelo menos um dos pontos abaixo, este evento é para você.
        </p>
      </Container>

      <Container className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audience.map((item, i) => (
          <div
            key={item}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
          >
            <p className="font-display text-5xl leading-none text-primary/15 transition-colors duration-300 group-hover:text-primary/35">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-6 text-sm font-semibold leading-6 text-foreground/90">{item}</p>
            <span aria-hidden className="mt-6 block h-px w-8 bg-primary/50 transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </Container>
    </Section>
  );
}

export function LocationSection() {
  return (
    <Section id="local-e-data" className="bg-[radial-gradient(50%_70%_at_90%_0%,rgba(212,175,55,0.08),transparent_70%)]">
      <Container className="max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/50 px-6 py-14 text-center shadow-2xl shadow-black/50 sm:px-12 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(16,185,129,0.12),transparent_65%)]" />
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
              <span className="text-sm font-medium text-foreground/90">Local a ser confirmado em breve</span>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <CalendarDays className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground/90">Evento presencial · vagas limitadas</span>
            </div>
          </div>

          <Button
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
        <Eyebrow className="justify-center">{undefined}</Eyebrow>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-primary">Tipos de acesso</p>
        <h2 className="mt-4 font-display text-3xl uppercase tracking-wide text-white sm:text-5xl">
          Escolha o seu <span className="text-gold-gradient">nível</span> de experiência
        </h2>
      </Container>

      <Container className="mt-12 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1 sm:p-8 ${
              t.featured
                ? "border-primary/50 bg-gradient-to-b from-primary/[0.16] via-card to-card shadow-[0_18px_60px_-24px_rgba(212,175,55,0.5)]"
                : "border-white/10 bg-card/50 hover:border-white/25 hover:bg-card/80"
            }`}
          >
            {t.badge && (
              <span className="absolute right-5 top-5 rounded-md bg-gradient-to-r from-yellow-200 via-[#d4af37] to-[#b8860b] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-black shadow-lg shadow-black/30">
                {t.badge}
              </span>
            )}

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
    <Section id="garantia" className="bg-[radial-gradient(50%_70%_at_0%_50%,rgba(6,78,59,0.16),transparent_70%)]">
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

        <div className="relative mx-auto aspect-square w-52 sm:w-64">
          <div aria-hidden className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-primary/50" />
          <div className="absolute inset-0 animate-scale-in flex items-center justify-center">
            <div className="flex h-[78%] w-[78%] flex-col items-center justify-center rounded-full border border-primary/25 bg-gradient-to-b from-emerald-950/40 to-card text-center shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]">
              <ShieldCheck className="h-9 w-9 text-primary sm:h-11 sm:w-11" />
              <p className="mt-2 font-display text-lg leading-none tracking-[0.14em] text-white sm:text-xl">GARANTIA</p>
              <p className="font-display text-lg leading-none tracking-[0.14em] text-primary sm:text-xl">ÉPICA</p>
              <p className="mt-2 px-4 text-[8px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Zero risco</p>
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
  ["O que significa \"Pague 1, Leve 2\"?", "Resposta a ser definida."],
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
          <p className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-primary">Dúvidas</p>
          <h2 className="mt-4 font-display text-3xl uppercase tracking-wide text-white sm:text-5xl">
            Perguntas <span className="text-gold-gradient">frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full">
          {faq.map(([q, a], index) => (
            <AccordionItem
              key={q}
              value={`item-${index}`}
              className="bg-white/[0.02] transition-colors duration-300 first:rounded-t-2xl last:rounded-b-2xl data-[state=open]:bg-white/[0.04]"
            >
              <AccordionTrigger className="px-1 font-display text-left text-base uppercase tracking-[0.08em] text-white transition-colors sm:px-3 sm:text-lg [&>svg]:text-primary">
                <span className="mr-3 text-primary">{String(index + 1).padStart(2, "0")}</span>
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
    <Section id="jornada" className="bg-[radial-gradient(60%_70%_at_50%_100%,rgba(16,185,129,0.08),transparent_70%)]">
      <Container className="max-w-4xl text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-primary">Continue sua jornada</p>
        <h2 className="mt-4 font-display text-3xl uppercase leading-tight tracking-wide text-white sm:text-5xl">
          Quer ver outros <span className="text-gold-gradient">Protagons</span> ou explorar mais cursos do Wendell?
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          Se Cuiabá não está no seu mapa neste momento, confira a agenda completa de eventos em
          outras cidades ou explore outros cursos e treinamentos.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            variant="outline"
            className="h-11 w-full rounded-xl border-white/15 bg-transparent px-6 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary sm:w-auto"
          >
            <a href="#">Ver agenda de outros eventos</a>
          </Button>
          <Button
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
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/25 bg-card/60 px-6 py-16 text-center shadow-2xl shadow-black/60 sm:px-12 sm:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_80%_at_50%_0%,rgba(212,175,55,0.18),transparent_65%)]" />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_110%,rgba(16,185,129,0.16),transparent_65%)]" />

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
              asChild
              size="lg"
              className="animate-glow-pulse h-14 w-full rounded-xl border border-primary/60 bg-primary px-8 text-sm font-extrabold uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
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
              <span className="font-display text-2xl leading-none tracking-[0.2em] text-white">
                NOVO <span className="text-gold-gradient">PROTAGON</span>
              </span>
              <span className="mt-2 block text-[10px] font-extrabold uppercase tracking-[0.5em] text-muted-foreground">
                Cuiabá — MT
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
              Uma experiência presencial de três dias para construir uma vida épica com
              Wendell Carvalho.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-white">Navegação</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li><a href="#o-evento" className="transition-colors hover:text-primary">O Evento</a></li>
              <li><a href="#wendell" className="transition-colors hover:text-primary">Quem é o Wendell</a></li>
              <li><a href="#tipos-de-acesso" className="transition-colors hover:text-primary">Tipos de Acesso</a></li>
              <li><a href="#local-e-data" className="transition-colors hover:text-primary">Local e Data</a></li>
              <li><a href="#faq" className="transition-colors hover:text-primary">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-white">Links</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">Página Oficial</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Acesso Executivo</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Acesso Diamond</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Outros Eventos</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Outros Cursos</a></li>
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
