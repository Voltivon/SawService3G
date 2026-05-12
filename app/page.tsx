import { Nav } from "@/components/nav";
import { ClickToCallFab } from "@/components/click-to-call-fab";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { BrandsMarquee } from "@/components/sections/brands-marquee";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Coverage } from "@/components/sections/coverage";
import { WhyUs } from "@/components/sections/why-us";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { FieldGallery } from "@/components/sections/field-gallery";
import { VideoShowcase } from "@/components/sections/video-showcase";
import { EmergencyBand } from "@/components/sections/emergency-band";
import { QuoteForm } from "@/components/sections/quote-form";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <BrandsMarquee />
        <TrustedBy />
        <About />
        <Testimonials />
        <Coverage />
        <WhyUs />
        <FieldGallery />
        <VideoShowcase />
        <EmergencyBand />
        <QuoteForm />
        <Faq />
      </main>
      <Footer />
      <ClickToCallFab />
    </>
  );
}
