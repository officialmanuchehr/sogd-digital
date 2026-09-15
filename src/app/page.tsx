import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AiServices } from "@/components/AiServices";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
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
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
