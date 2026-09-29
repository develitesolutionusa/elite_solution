import SiteHeader from "@/components/site-header";
import PageBackground from "@/components/page-background";
import Hero from "@/components/hero";
import FeatureStrip from "@/components/feature-strip";
import Services from "@/components/services";
import AboutPreview from "@/components/about-preview";
import PortfolioPreview from "@/components/portfolio-preview";
import WhyUs from "@/components/why-us";
import Faq from "@/components/faq";
import SiteFooter from "@/components/site-footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Elite Solution USA",
  url: "https://elitesolutionusa.com",
  email: "info@elitesolutionusa.com",
  telephone: "+1-832-951-2823",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1493 Fairway Drive",
    addressLocality: "Naperville",
    addressRegion: "IL",
    postalCode: "60563",
    addressCountry: "US",
  },
  sameAs: ["https://www.linkedin.com/company/elitesolutionusa/"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative bg-transparent text-white">
        <PageBackground />
        <div className="relative z-10">
          <SiteHeader />
          <main>
            <Hero />
            <Services />
            <FeatureStrip />
            <AboutPreview />
            <PortfolioPreview />
            <WhyUs />
            <Faq />
          </main>
          <SiteFooter />
        </div>
      </div>
    </>
  );
}
