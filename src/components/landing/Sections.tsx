import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Placeholder, Section } from "./Placeholder";

export function Hero() {
  return (
    <Section id="top" className="pt-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <Placeholder label="[HERO] PLACEHOLDER DA ARTE PRINCIPAL" />
        <div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            NOVO PROTAGON
            <br />
            CUIABÁ
          </h1>
          <p className="mt-3 text-lg tracking-wide text-muted-foreground sm:text-xl">
            CONSTRUA SUA VIDA ÉPICA
          </p>
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
            <li className="rounded-md border border-border px-3 py-2">
              24, 25 e 26 de Outubro de 2025
            </li>
            <li className="rounded-md border border-border px-3 py-2">Cuiabá - MT</li>
            <li className="rounded-md border border-border px-3 py-2">Evento Presencial</li>
            <li className="rounded-md border border-border px-3 py-2">Vagas Limitadas</li>
          </ul>
          <Button asChild size="lg" className="mt-6 w-full sm:w-auto">
            <a href="#tipos-de-acesso">GARANTIR ACESSO</a>
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function VslSection() {
  return (
    <Section id="vsl">
      <h2 className="text-center text-xl font-bold sm:text-3xl">
        ASSISTA AO VÍDEO E DESCUBRA
        <br />
        POR QUE O PROTAGON VAI TRANSFORMAR A SUA VIDA
      </h2>
      <div className="mx-auto mt-8 w-full max-w-4xl">
        <Placeholder label="[ VSL / VÍDEO SERÁ INSERIDO AQUI ]" className="aspect-video" />
      </div>
    </Section>
  );
}

export function EventExperience() {
  const items = [
    "Conteúdo prático",
    "Networking de alto nível",
    "Ferramentas aplicáveis",
    "Ambiente transformador",
  ];
  return (
    <Section id="o-evento">
      <h2 className="text-2xl font-bold sm:text-3xl">
        UMA EXPERIÊNCIA
        <br />
        PRESENCIAL E TRANSFORMADORA
      </h2>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        Três dias de imersão intensa com Wendell Carvalho e Karina Peloi para você destravar seu
        potencial, desenvolver sua mentalidade e construir um novo nível de vida.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <li key={i} className="rounded-md border border-border p-4 text-sm">
            {i}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Placeholder label="[EVENTO] PLACEHOLDER FOTO DO EVENTO / PLATEIA" />
      </div>
    </Section>
  );
}

export function AboutWendell() {
  const stats = [
    ["+1 MILHÃO", "DE PESSOAS IMPACTADAS"],
    ["+10 ANOS", "DE EXPERIÊNCIA"],
    ["+100", "CIDADES NO BRASIL"],
  ];
  return (
    <Section id="wendell">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="grid gap-4">
          <Placeholder label="[WENDELL FOTO 01] PLACEHOLDER FOTO WENDELL" className="aspect-[4/5]" />
          <Placeholder label="[WENDELL FOTO 02] PLACEHOLDER FOTO WENDELL" className="aspect-video" />
        </div>
        <div>
          <p className="text-sm tracking-widest text-muted-foreground">SOBRE</p>
          <h2 className="text-2xl font-bold sm:text-3xl">WENDELL CARVALHO</h2>
          <p className="mt-4 text-muted-foreground">
            [Espaço reservado para o texto biográfico do Wendell Carvalho.]
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {stats.map(([n, d]) => (
              <div key={n} className="rounded-md border border-border p-4">
                <p className="text-lg font-bold">{n}</p>
                <p className="text-xs text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function AudienceSection() {
  const cards = [
    "QUER EVOLUIR PESSOAL E PROFISSIONALMENTE",
    "BUSCA MAIS DISCIPLINA, FOCO E RESULTADOS",
    "DESEJA CONSTRUIR UMA VIDA COM MAIS LIBERDADE",
    "ESTÁ PRONTO PARA ASSUMIR O CONTROLE DA SUA HISTÓRIA",
  ];
  return (
    <Section id="para-quem">
      <h2 className="text-2xl font-bold sm:text-3xl">PARA QUEM É O PROTAGON?</h2>
      <p className="mt-3 text-muted-foreground">
        Se você se identifica com pelo menos um dos pontos abaixo, este evento é para você.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <div key={c} className="rounded-md border border-border p-4">
            <p className="text-xs text-muted-foreground">CARD {i + 1}</p>
            <p className="mt-2 text-sm font-medium">{c}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function LocationSection() {
  return (
    <Section id="local-e-data">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">LOCAL E DATA</h2>
          <p className="mt-4 text-lg">Cuiabá - MT</p>
          <p className="text-lg">24, 25 e 26 de Outubro de 2025</p>
          <p className="mt-2 text-sm text-muted-foreground">Local a ser confirmado em breve.</p>
          <Button asChild variant="outline" className="mt-6">
            <a href="#">VER NO MAPA</a>
          </Button>
        </div>
        <Placeholder label="[CUIABÁ] PLACEHOLDER IMAGEM CUIABÁ" />
      </div>
    </Section>
  );
}

export function AccessTypes() {
  const tiers = [
    {
      name: "ACESSO ESSENCIAL",
      badge: null as string | null,
      items: ["Acesso aos 3 dias de evento", "Ingresso presencial", "Conteúdo principal"],
    },
    {
      name: "ACESSO EXECUTIVO",
      badge: "MAIS ESCOLHIDO",
      items: [
        "Tudo do Essencial",
        "Assentos exclusivos",
        "Materiais especiais",
        "Condições diferenciadas",
      ],
    },
    {
      name: "ACESSO DIAMOND",
      badge: null,
      items: ["Tudo do Executivo", "Experiência premium", "Encontro exclusivo", "Kit especial"],
    },
  ];
  return (
    <Section id="tipos-de-acesso">
      <h2 className="text-sm tracking-widest text-muted-foreground">TIPOS DE ACESSO</h2>
      <p className="mt-1 text-2xl font-bold sm:text-3xl">Escolha o seu nível de experiência</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className="flex flex-col rounded-md border border-border p-5">
            {t.badge && (
              <span className="mb-2 inline-block w-fit rounded border border-border px-2 py-1 text-[11px] tracking-wide">
                {t.badge}
              </span>
            )}
            <h3 className="text-lg font-bold">{t.name}</h3>
            <ul className="mt-3 flex-1 space-y-2 text-sm text-muted-foreground">
              {t.items.map((i) => (
                <li key={i}>- {i}</li>
              ))}
            </ul>
            <Button asChild className="mt-5 w-full">
              <a href="#">GARANTIR ACESSO</a>
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function GuaranteeSection() {
  return (
    <Section id="garantia">
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
        <div>
          <p className="text-sm tracking-widest text-muted-foreground">SEM RISCO</p>
          <h2 className="text-2xl font-bold sm:text-3xl">GARANTIA ÉPICA</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Se até o final do 2º dia do evento você sentir que a experiência não foi o que esperava,
            poderá solicitar o reembolso presencialmente a um dos membros da equipe, conforme as
            regras da garantia.
          </p>
        </div>
        <Placeholder label="[GARANTIA] PLACEHOLDER SELO DE GARANTIA" className="aspect-square" />
      </div>
    </Section>
  );
}

const faq = [
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
      <p className="text-sm tracking-widest text-muted-foreground">DÚVIDAS</p>
      <h2 className="text-2xl font-bold sm:text-3xl">Perguntas Frequentes</h2>
      <Accordion type="single" collapsible className="mt-6 w-full">
        {faq.map(([q, a], i) => (
          <AccordionItem key={q} value={`item-${i}`}>
            <AccordionTrigger className="text-left">{`${i + 1}. ${q}`}</AccordionTrigger>
            <AccordionContent>{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

export function JourneySection() {
  return (
    <Section id="jornada">
      <p className="text-sm tracking-widest text-muted-foreground">CONTINUE SUA JORNADA</p>
      <h2 className="text-2xl font-bold sm:text-3xl">
        Quer ver outros Protagons ou explorar mais cursos do Wendell?
      </h2>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        Se Cuiabá não está no seu mapa neste momento, confira a agenda completa de eventos em outras
        cidades ou explore outros cursos e treinamentos.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="outline">
          <a href="#">VER AGENDA DE OUTROS EVENTOS</a>
        </Button>
        <Button asChild variant="outline">
          <a href="#">CONHECER OUTROS CURSOS</a>
        </Button>
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section id="cta-final">
      <div className="text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">NOVO PROTAGON CUIABÁ</h2>
        <p className="mt-2 text-muted-foreground">24, 25 e 26 de Outubro de 2025</p>
        <p className="text-muted-foreground">Cuiabá - MT</p>
        <Button asChild size="lg" className="mt-6 w-full sm:w-auto">
          <a href="#tipos-de-acesso">GARANTIR ACESSO</a>
        </Button>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-bold">Novo Protagon Cuiabá</p>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold">Navegação</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <a href="#o-evento">O Evento</a>
              </li>
              <li>
                <a href="#wendell">Quem é o Wendell</a>
              </li>
              <li>
                <a href="#tipos-de-acesso">Tipos de Acesso</a>
              </li>
              <li>
                <a href="#local-e-data">Local e Data</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold">Links</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <a href="#">Página Oficial</a>
              </li>
              <li>
                <a href="#">Acesso Executivo</a>
              </li>
              <li>
                <a href="#">Acesso Diamond</a>
              </li>
              <li>
                <a href="#">Outros Eventos</a>
              </li>
              <li>
                <a href="#">Outros Cursos</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          [Área reservada para aviso legal e informações institucionais.]
        </div>
      </div>
    </footer>
  );
}
