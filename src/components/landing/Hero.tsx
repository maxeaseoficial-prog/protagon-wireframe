import { ArrowRight, CalendarDays, MapPin, Play, Users } from "lucide-react";
import { BrandMark } from "./BrandMark";

const eventFacts = [
  { icon: CalendarDays, label: "Evento presencial" },
  { icon: MapPin, label: "Cuiabá - MT" },
  { icon: Users, label: "Vagas limitadas" },
];

export function Hero() {
  return (
    <section id="top" className="cinematic-hero" aria-labelledby="hero-title">
      <div className="hero-scenery" aria-hidden="true">
        <img
          src="/uploads/cuiaba-atmosphere.jpg"
          alt=""
          width="1672"
          height="941"
          loading="eager"
        />
      </div>
      <div className="hero-light" aria-hidden="true" />
      <img
        className="hero-lion"
        src="/uploads/1.png"
        alt=""
        aria-hidden="true"
        width="1024"
        height="1024"
      />
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
        <img
          src="/uploads/Design_sem_nome_2_.png"
          alt="Wendell Carvalho, palestrante do Novo Protagon Cuiabá"
          width="1080"
          height="1350"
          loading="eager"
          fetchPriority="high"
        />
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
            24, 25 e 26 de outubro de 2025 <span>· 3 dias de imersão</span>
          </p>
          <a href="#vsl">
            <Play aria-hidden="true" /> Assistir ao vídeo
          </a>
        </div>
      </div>
    </section>
  );
}
