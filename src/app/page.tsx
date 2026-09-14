import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AiServices } from "@/components/AiServices";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Works } from "@/components/Works";
import { TechStack } from "@/components/TechStack";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <AiServices />
        <WhyUs />
        <Process />
        <Works />
        <TechStack />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
