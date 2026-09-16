import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Quote } from "@/components/Quote";
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
        <Quote />
        <WhyUs />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
