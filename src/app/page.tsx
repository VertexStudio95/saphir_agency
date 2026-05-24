import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import APropos from "@/components/sections/APropos";
import Contact from "@/components/sections/Contact";
import PageTransition from "@/components/layout/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Services />
      <APropos />
      <Contact />
    </PageTransition>
  );
}
