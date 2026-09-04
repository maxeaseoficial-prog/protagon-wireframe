import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Header } from "@/components/landing/Header";
import {
  VslSection,
  EventExperience,
  AboutWendell,
  AudienceSection,
  LocationSection,
  AccessTypes,
  GuaranteeSection,
  FaqSection,
  JourneySection,
  FinalCta,
  Footer,
} from "@/components/landing/Sections";

const title = "Novo Protagon Cuiabá — 24, 25 e 26 de Outubro de 2025";
const description =
  "Evento presencial Novo Protagon em Cuiabá - MT: três dias de imersão com Wendell Carvalho. Vagas limitadas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="landing-page min-h-screen w-full bg-background text-foreground">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <VslSection />
        <EventExperience />
        <AboutWendell />
        <AudienceSection />
        <LocationSection />
        <AccessTypes />
        <GuaranteeSection />
        <FaqSection />
        <JourneySection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
