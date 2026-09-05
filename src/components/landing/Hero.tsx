import { useRef } from "react";
import { ArrowRight, CalendarDays, MapPin, Play, Users } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { useHeroPointerMotion } from "./useLandingMotion";

const eventFacts = [
  { icon: CalendarDays, label: "Evento presencial" },
  { icon: MapPin, label: "Cuiabá - MT" },
  { icon: Users, label: "Vagas limitadas" },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  useHeroPointerMotion(heroRef);

  return (
    <section ref={heroRef} id="top" className="cinematic-hero" aria-labelledby="hero-title">
      <div className="hero-scenery" aria-hidden="true" />
      <div className="hero-light" aria-hidden="true" />
      <picture className="hero-lion" aria-hidden="true">
        <source srcSet="/uploads/protagon-lion.avif" type="image/avif" />
        <img
          src="/uploads/1.png"
          alt=""
          width="1024"
          height="1024"
          loading="eager"
          fetchPriority="low"
          decoding="async"
        />
      </picture>
      <div className="hero-editorial hero-editorial-left" aria-hidden="true">
        <p>
          Pessoas reais.
          <br />
          Resultados
          <br />
          extraordinários.
        </p>
        <span />
        <p>
          Aqui, grandes histórias
          <br />
          ganham um novo nível.
        </p>
      </div>
      <div className="hero-editorial hero-editorial-right" aria-hidden="true">
        <p>
          Disciplina
          <br />
          Relacionamentos
          <br />
          Prosperidade
          <br />
          Legado
        </p>
        <span />
        <p>
          Cuiabá.
          <br />
          Terra de grandes pessoas.
        </p>
      </div>
      <div className="hero-person">
        <picture>
          <source srcSet="/uploads/hero-wendell.avif" type="image/avif" />
          <img
            src="/uploads/Design_sem_nome_2_.png"
            alt="Wendell Carvalho, palestrante do Novo Protagon Cuiabá"
            width="1080"
            height="1350"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
      <div className="hero-content">
        <h1 id="hero-title" className="sr-only">
          Novo Protagon Cuiabá — Construa sua vida épica
        </h1>
        <BrandMark className="hero-brand" eager />
        <p className="hero-tagline">
          Construa sua <strong>vida épica</strong>
        </p>
        <a href="#tipos-de-acesso" className="gold-button hero-cta">
          Garantir acesso <ArrowRight aria-hidden="true" />
        </a>
        <ul className="hero-facts">
          {eventFacts.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
        <div className="hero-details">
          <p>
            04 a 06 de setembro <span>· 3 dias de imersão</span>
          </p>
          <a href="#vsl">
            <Play aria-hidden="true" /> Assistir ao vídeo
          </a>
        </div>
      </div>
    </section>
  );
}
