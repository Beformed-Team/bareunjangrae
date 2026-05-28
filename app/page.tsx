import { Hero } from "@/components/sections/Hero";
import { Values } from "@/components/sections/Values";
import { Services } from "@/components/sections/Services";
import { PricePreview } from "@/components/sections/PricePreview";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Values />
      <Services />
      <PricePreview />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
