import type { HTMLAttributes, ReactNode } from "react";
import { BrandMark } from "./BrandMark";
import {
  ArrowUpRight,
  Backpack,
  BookOpen,
  CalendarDays,
  Check,
  Clock3,
  Crown,
  Flame,
  Gift,
  MapPin,
  ShieldCheck,
  ShieldAlert,
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
    <section data-motion-section id={id} className={`landing-section ${className}`}>
      {children}
    </section>
  );
}

function Container({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`section-container mx-auto w-full max-w-7xl ${className}`.trim()}>
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      data-motion="eyebrow"
      className="section-eyebrow mb-4 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.42em] text-primary"
    >
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
        <p
          data-motion="eyebrow"
          className="mx-auto max-w-3xl text-center text-[11px] font-extrabold uppercase tracking-[0.5em] text-primary"
        >
          A experiência começa aqui
        </p>
        <h2
          data-motion="heading"
          className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl uppercase leading-tight tracking-wide text-white sm:text-5xl"
        >
          Assista ao vídeo e descubra por que o <span className="text-gold-gradient">Protagon</span>{" "}
          vai transformar a sua vida
        </h2>

        <div
          data-motion="media"
          className="video-frame relative mx-auto mt-10 aspect-video w-full max-w-5xl overflow-hidden"
        >
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
          <h2
            data-motion="heading"
            className="font-display text-3xl uppercase leading-[1.05] tracking-wide text-white sm:text-5xl"
          >
            Uma <span className="text-gold-gradient">experiência</span> presencial e transformadora
          </h2>
          <p
            data-motion="copy"
            className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
          >
            Três dias de imersão intensa com Wendell Carvalho e Karina Peloi para você destravar seu
            potencial, desenvolver sua mentalidade e construir um novo nível de vida.
          </p>

          <ul data-motion-stagger className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            {experienceHighlights.map((item) => (
              <li data-motion-item key={item.label} className="experience-highlight">
                <span className="text-primary">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-foreground/90">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure data-motion="image" className="event-art">
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
            <span>04 a 06 set</span>
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}

const stats: [string, string][] = [
  ["17 anos", "dedicados à pesquisa do comportamento humano"],
  ["+480k", "alunos em mais de 40 cursos"],
  ["+40", "cursos criados na plataforma Hotmart"],
  ["+500k", "pessoas impactadas em palestras e workshops"],
];

export function AboutWendell() {
  return (
    <Section
      id="wendell"
      className="bg-[radial-gradient(50%_60%_at_10%_50%,rgba(6,78,59,0.18),transparent_70%)]"
    >
      <Container className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <figure data-motion="image-up" className="authority-portrait">
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
          <h2
            data-motion="heading"
            className="font-display text-3xl uppercase tracking-wide text-white sm:text-5xl"
          >
            Quem é o <span className="text-gold-gradient">Wendell</span>?
          </h2>
          <div
            data-motion="copy"
            className="wendell-bio mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
          >
            <p>
              Um dos maiores especialistas do Brasil em transformação pessoal, alta performance e
              comportamento humano. Durante 17 anos, se dedicou à pesquisa de métodos científicos
              para a mudança de crenças e construção de prosperidade em todas as áreas da vida.
            </p>
            <p>
              É o criador dos Princípios da Vida Épica e do Protagon — a maior experiência imersiva
              de desenvolvimento pessoal presencial do Brasil. Nos eventos, Wendell une Programação
              Neurolinguística, neurociência e metodologias práticas para entregar uma transformação
              real e mensurável.
            </p>
          </div>

          <div
            data-motion-stagger
            className="authority-stats mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {stats.map(([number, label]) => (
              <div data-motion-item key={number + label} className="authority-stat">
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
        <p
          data-motion="eyebrow"
          className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-primary"
        >
          Para quem é?
        </p>
        <h2
          data-motion="heading"
          className="mt-4 font-display text-3xl uppercase tracking-wide text-white sm:text-5xl"
        >
          Para quem é o <span className="text-gold-gradient">Protagon</span>?
        </h2>
        <p data-motion="copy" className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          Se você se identifica com pelo menos um dos pontos abaixo, este evento é para você.
        </p>
      </Container>

      <Container
        data-motion-stagger
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {audience.map((item, i) => (
          <div data-motion-item key={item} className="audience-item">
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
  const accreditation = [
    "Credenciamento na véspera do evento: das 14h às 21h, com presente especial",
    "Credenciamento no 1º dia do evento: das 07h30 às 08h30",
    "Acesso prioritário para portadores do acesso Diamond",
    "Apresente o QR Code, impresso ou digital, e um documento com foto (RG ou CNH)",
    "Classificação etária: maiores de 18 anos",
    "Coquetel Diamond na véspera do evento: das 17h às 20h",
  ];
  const restrictions = [
    "Evento para maiores de 18 anos — não é permitida a entrada de menores",
    "O Protagon possui forte impacto emocional e dinâmicas de alta intensidade",
    "Não recomendado para gestantes ou pessoas com condições de saúde específicas — consulte a equipe antes de adquirir",
  ];

  return (
    <Section
      id="local-e-data"
      className="bg-[radial-gradient(50%_70%_at_90%_0%,rgba(212,175,55,0.08),transparent_70%)]"
    >
      <Container className="max-w-7xl">
        <div data-motion="panel" className="location-panel">
          <picture>
            <source srcSet="/uploads/cuiaba-atmosphere.avif" type="image/avif" />
            <img
              className="location-scenery"
              src="/uploads/cuiaba-atmosphere.jpg"
              alt=""
              aria-hidden="true"
              width="1672"
              height="941"
              loading="lazy"
              decoding="async"
              data-motion-parallax
              data-motion-parallax-range="20"
            />
          </picture>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(16,185,129,0.12),transparent_65%)]"
          />
          <Eyebrow>Local e data</Eyebrow>
          <h2
            data-motion="heading"
            className="font-display text-3xl uppercase tracking-wide text-white sm:text-5xl"
          >
            Cuiabá <span className="text-gold-gradient">·</span> MT
          </h2>
          <p
            data-motion="copy"
            className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground"
          >
            04 a 06 de setembro
          </p>

          <div
            data-motion-stagger
            className="location-summary mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2"
          >
            <div data-motion-item className="flex items-start gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm leading-6 text-foreground/90">
                <strong>Centro de Eventos Pantanal</strong>
                <small>Av. Bernardo Antônio de Oliveira Neto, s/n — Santa Marta, Cuiabá - MT</small>
              </span>
            </div>
            <div data-motion-item className="flex items-start gap-3">
              <CalendarDays className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm leading-6 text-foreground/90">
                <strong>3 dias de imersão ao vivo</strong>
                <small>Evento presencial · vagas limitadas</small>
              </span>
            </div>
          </div>

          <Button
            data-motion="action"
            data-landing-button
            asChild
            variant="outline"
            className="mt-8 h-11 rounded-xl border-white/20 bg-transparent px-7 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query=Centro+de+Eventos+Pantanal+Cuiab%C3%A1+MT"
              target="_blank"
              rel="noreferrer"
            >
              Ver no mapa
            </a>
          </Button>
        </div>

        <div data-motion-stagger className="event-perks">
          <article data-motion-item>
            <Gift aria-hidden="true" />
            <div>
              <p>Pague 1, leve 2</p>
              <h3>Cada acesso dá direito a um acompanhante</h3>
              <span>Grátis na mesma categoria — leve quem você quiser</span>
            </div>
          </article>
          <article data-motion-item>
            <Backpack aria-hidden="true" />
            <div>
              <p>Kit do participante</p>
              <h3>Incluso em todas as categorias</h3>
              <span>Crachá nominal, apostila completa e caneta</span>
            </div>
          </article>
        </div>

        <div data-motion-stagger className="event-logistics">
          <article data-motion-item className="event-information-block">
            <h3>
              <Clock3 aria-hidden="true" /> Credenciamento e acesso
            </h3>
            <ul>
              {accreditation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article data-motion-item className="event-information-block">
            <h3>
              <ShieldAlert aria-hidden="true" /> Classificação e restrições
            </h3>
            <ul>
              {restrictions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </Section>
  );
}

type GiftCourse = {
  name: string;
  description: string;
};

type AccessTier = {
  id: string;
  name: string;
  description: string;
  installments: string;
  cashPrice: string;
  image: {
    avif: string;
    fallback: string;
  };
  featured?: boolean;
  benefits: string[];
  gifts?: GiftCourse[];
  checkoutUrl: string;
};

const giftCourses: GiftCourse[] = [
  {
    name: "Ciclo da Maestria",
    description: "Como dominar inteligência emocional, financeira e na carreira.",
  },
  {
    name: "Finanças para Casais",
    description: "Tudo que você precisa saber para organizar as finanças com seu(ua) parceiro(a).",
  },
  {
    name: "Instagram Milionário",
    description: "Estratégias práticas para transformar o seu Instagram em uma máquina de vendas.",
  },
  {
    name: "7 Pilares do Relacionamento Épico",
    description: "Construa relacionamentos sólidos e duradouros.",
  },
  {
    name: "Tráfego Pago",
    description:
      "Passo a passo de como usar anúncios online para atrair clientes de forma constante e escalável.",
  },
];

const tiers: AccessTier[] = [
  {
    id: "acesso-executivo",
    name: "Executivo",
    description:
      "A porta de entrada para a experiência Protagon. Acesso completo aos 3 dias de imersão com todo o conteúdo e material.",
    installments: "12x R$ 147",
    cashPrice: "R$ 1.427 à vista",
    image: {
      avif: "/uploads/access-executivo.avif",
      fallback: "/uploads/access-executivo.png",
    },
    benefits: [
      "Acesso aos 3 dias de imersão",
      "Material completo",
      "1 acompanhante gratuito na mesma categoria",
    ],
    checkoutUrl:
      "https://go.hotmart.com/K105280346S?ap=84aa&sck=cd_79c82cf0e525442c99b6a99880add0f2&xcod=cd_79c82cf0e525442c99b6a99880add0f2",
  },
  {
    id: "acesso-vip",
    name: "VIP",
    description:
      "Posicionamento privilegiado na plenária e acesso a cursos digitais exclusivos além da imersão.",
    installments: "12x R$ 337",
    cashPrice: "R$ 3.297 à vista",
    image: {
      avif: "/uploads/access-vip.avif",
      fallback: "/uploads/access-vip.png",
    },
    featured: true,
    benefits: [
      "Acesso aos 3 dias de imersão",
      "Assentos mais à frente na plenária",
      "Material completo",
      "1 acompanhante gratuito na mesma categoria",
    ],
    gifts: giftCourses,
    checkoutUrl:
      "https://go.hotmart.com/K105280346S?ap=1eb4&sck=cd_79c82cf0e525442c99b6a99880add0f2&xcod=cd_79c82cf0e525442c99b6a99880add0f2",
  },
  {
    id: "acesso-diamond",
    name: "Diamond",
    description:
      "A experiência mais completa do Protagon — com mentoria exclusiva em grupo com Wendell e Karina, lounge privativo e acesso prioritário.",
    installments: "12x R$ 547",
    cashPrice: "R$ 5.497 à vista",
    image: {
      avif: "/uploads/access-diamond.avif",
      fallback: "/uploads/access-diamond.png",
    },
    benefits: [
      "Os melhores assentos — primeiras fileiras reservadas",
      "Mentoria exclusiva em grupo com Wendell e Karina Carvalho",
      "Coquetel durante a mentoria exclusiva (véspera do evento)",
      "Acesso prioritário ao evento",
      "Lounge privativo com petit fours e café",
      "Espaço reservado para networking de alto nível",
      "Acesso aos 3 dias + mentoria na véspera",
      "Material completo",
      "1 acompanhante gratuito na mesma categoria",
    ],
    gifts: giftCourses,
    checkoutUrl:
      "https://go.hotmart.com/K105280346S?ap=d755&sck=cd_79c82cf0e525442c99b6a99880add0f2&xcod=cd_79c82cf0e525442c99b6a99880add0f2",
  },
];

export function AccessTypes() {
  return (
    <Section id="tipos-de-acesso">
      <Container className="max-w-3xl text-center">
        <p
          data-motion="eyebrow"
          className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-primary"
        >
          Tipos de acesso
        </p>
        <h2
          data-motion="heading"
          className="mt-4 font-display text-3xl uppercase tracking-wide text-white sm:text-5xl"
        >
          Escolha o seu <span className="text-gold-gradient">nível</span> de experiência
        </h2>
      </Container>

      <Container data-motion-stagger className="access-grid mt-12">
        {tiers.map((t) => (
          <article
            data-motion-item
            id={t.id}
            key={t.name}
            className={`access-card ${
              t.featured ? "access-card-featured" : "access-card-standard"
            }`}
          >
            <div className="access-media">
              <picture>
                <source srcSet={t.image.avif} type="image/avif" />
                <img
                  src={t.image.fallback}
                  alt=""
                  width="500"
                  height="300"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="access-card-body">
              <p className="access-label">Acesso</p>
              <h3>
                {t.name === "Diamond" && <Crown aria-hidden="true" />}
                {t.name}
              </h3>
              <p className="access-description">{t.description}</p>

              <div className="access-price">
                <p>{t.installments}</p>
                <span>no cartão de crédito</span>
                <div className="access-price-divider" aria-hidden="true">
                  <span>ou</span>
                </div>
                <strong>{t.cashPrice}</strong>
              </div>

              <ul className="access-benefits">
                {t.benefits.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">
                      <Check />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {t.gifts && (
                <div className="access-gifts">
                  <h4>Presente especial — cursos</h4>
                  <ul>
                    {t.gifts.map((course) => (
                      <li key={course.name}>
                        <Check aria-hidden="true" />
                        <p>
                          <strong>{course.name}</strong> — {course.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button
                data-landing-button
                asChild
                className={`access-checkout ${t.featured ? "access-checkout-featured" : ""}`}
              >
                <a href={t.checkoutUrl} target="_blank" rel="noopener noreferrer">
                  Garantir acesso {t.name} <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </article>
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
          <h2
            data-motion="heading"
            className="font-display text-3xl uppercase tracking-wide text-white sm:text-5xl"
          >
            Garantia <span className="text-gold-gradient">épica</span>
          </h2>
          <p
            data-motion="copy"
            className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
          >
            Se até o final do 2º dia do evento você sentir que a experiência não foi o que esperava,
            poderá solicitar o reembolso presencialmente a um dos membros da equipe, conforme as
            regras da garantia.
          </p>
        </div>

        <div
          data-motion="seal"
          className="guarantee-seal relative mx-auto aspect-square w-52 sm:w-64"
        >
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
  [
    "Qual a diferença entre os tipos de acesso?",
    "O Executivo inclui os três dias de imersão e o material completo. O VIP acrescenta assentos mais à frente e cinco cursos digitais. O Diamond reúne a experiência mais completa, com primeiras fileiras, mentoria em grupo com Wendell e Karina, coquetel, acesso prioritário e lounge privativo. Todos incluem um acompanhante gratuito na mesma categoria.",
  ],
  [
    'O que significa "Pague 1, Leve 2"?',
    "Cada acesso dá direito a um acompanhante grátis na mesma categoria. Você pode levar quem quiser.",
  ],
  [
    "Quais são as formas de pagamento?",
    "Os três tipos de acesso oferecem parcelamento em até 12 vezes no cartão de crédito e uma condição de pagamento à vista. Os valores de cada categoria estão indicados nos cartões acima.",
  ],
  ["Como funciona a garantia?", "Resposta a ser definida."],
  [
    "Existe alguma restrição de participação?",
    "O evento é exclusivo para maiores de 18 anos, possui forte impacto emocional e dinâmicas de alta intensidade. Não é recomendado para gestantes ou pessoas com condições de saúde específicas; consulte a equipe antes de adquirir.",
  ],
  ["Esta é a página oficial do Protagon Cuiabá?", "Resposta a ser definida."],
];

export function FaqSection() {
  return (
    <Section id="faq">
      <Container className="max-w-4xl">
        <div className="text-center">
          <p
            data-motion="eyebrow"
            className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-primary"
          >
            Dúvidas
          </p>
          <h2
            data-motion="heading"
            className="mt-4 font-display text-3xl uppercase tracking-wide text-white sm:text-5xl"
          >
            Perguntas <span className="text-gold-gradient">frequentes</span>
          </h2>
        </div>

        <Accordion data-motion-stagger type="single" collapsible className="mt-12 w-full">
          {faq.map(([q, a], index) => (
            <AccordionItem data-motion-item key={q} value={`item-${index}`} className="faq-item">
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
        <p
          data-motion="eyebrow"
          className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-primary"
        >
          Continue sua jornada
        </p>
        <h2
          data-motion="heading"
          className="mt-4 font-display text-3xl uppercase leading-tight tracking-wide text-white sm:text-5xl"
        >
          Quer ver outros <span className="text-gold-gradient">Protagons</span> ou explorar mais
          cursos do Wendell?
        </h2>
        <p
          data-motion="copy"
          className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
        >
          Se Cuiabá não está no seu mapa neste momento, confira a agenda completa de eventos em
          outras cidades ou explore outros cursos e treinamentos.
        </p>
        <div
          data-motion="action"
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
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
        <div data-motion="panel" className="final-panel">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_80%_at_50%_0%,rgba(212,175,55,0.18),transparent_65%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_110%,rgba(16,185,129,0.16),transparent_65%)]"
          />

          <p
            data-motion="eyebrow"
            className="relative text-[11px] font-extrabold uppercase tracking-[0.5em] text-muted-foreground"
          >
            Sua vaga está esperando
          </p>
          <h2
            data-motion="heading"
            className="relative mt-4 font-display text-4xl uppercase leading-[0.95] tracking-[0.05em] text-white sm:text-6xl lg:text-7xl"
          >
            Novo <span className="text-gold-gradient">Protagon</span>
            <br />
            Cuiabá
          </h2>
          <p
            data-motion="copy"
            className="relative mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground"
          >
            04 a 06 de setembro · Cuiabá - MT
          </p>

          <div data-motion="action" className="relative mx-auto mt-10 max-w-md">
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
    <footer data-motion-section className="border-t border-white/10 bg-black/20 py-14 sm:py-20">
      <Container>
        <div data-motion-stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div data-motion-item className="sm:col-span-2 lg:col-span-2">
            <a href="#top" className="inline-block">
              <BrandMark className="footer-brand" />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
              Uma experiência presencial de três dias para construir uma vida épica com Wendell
              Carvalho.
            </p>
          </div>

          <div data-motion-item>
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

          <div data-motion-item>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-white">
              Links
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#top" className="transition-colors hover:text-primary">
                  Página Oficial
                </a>
              </li>
              <li>
                <a href="#acesso-executivo" className="transition-colors hover:text-primary">
                  Acesso Executivo
                </a>
              </li>
              <li>
                <a href="#acesso-vip" className="transition-colors hover:text-primary">
                  Acesso VIP
                </a>
              </li>
              <li>
                <a href="#acesso-diamond" className="transition-colors hover:text-primary">
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
