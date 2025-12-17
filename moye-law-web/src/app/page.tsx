import NavBarV2 from "@/components/layout/NavBarV2";
import TerminalFooter from "@/components/layout/TerminalFooter";
import HeroV2 from "@/components/layout/HeroV2";
import SplitServiceCard from "@/components/content/SplitServiceCard";
import FeatureGrid from "@/components/layout/FeatureGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavBarV2 />

      <main className="pt-20">
        <HeroV2 />

        {/* SECTION 9: FEATURE GRID TEST */}
        <FeatureGrid />

        {/* 4. THE PAIRING (Binary Choice Services) */}
        <section id="services" className="py-24 bg-grey border-b-4 border-navy relative">
          <div className="absolute top-0 left-0 bg-navy text-white px-2 py-1 text-xs font-mono">
            System_Modules::Active
          </div>

          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <span className="font-mono text-navy text-xs tracking-[0.3em] uppercase block mb-4">
                System Capabilities
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy">
                Automated Intelligence. <span className="italic block mt-2 text-3xl opacity-70">Optional Human Oversight.</span>
              </h2>
              <p className="font-sans text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                Start with our high-velocity automated tools. If your needs exceed the algorithm, seamlessly upgrade to our private client counsel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* ESTATE PLANNING */}
              <SplitServiceCard
                title="Estate Planning"
                serviceTitle="Private Client Strategy"
                serviceDesc="Legacy planning for high-net-worth portfolios."
                productTitle="Will & Trust Generator"
                productDesc="Instant, attorney-verified documents."
              />

              {/* INTELLECTUAL PROPERTY */}
              <SplitServiceCard
                title="Intellectual Property"
                serviceTitle="Global IP Architecture"
                serviceDesc="Defensive strategy for international brands."
                productTitle="Auto-Trademark Filing"
                productDesc="Secure your brand identity in minutes."
              />

              {/* BUSINESS FORMATION */}
              <SplitServiceCard
                title="Business Formation"
                serviceTitle="Complex Entity Structuring"
                serviceDesc="Tax-optimized architecture for scaling ventures."
                productTitle="LLC Launch Protocol"
                productDesc="50-state compliant formation engine."
              />

              {/* ELDER LAW */}
              <SplitServiceCard
                title="Elder Law"
                serviceTitle="Medicaid Crisis Planning"
                serviceDesc="Urgent asset protection strategies."
                productTitle="Eligibility Calculator"
                productDesc="Determine your benefits status instantly."
              />

              {/* DIGITAL ASSETS */}
              <SplitServiceCard
                title="Digital Assets"
                serviceTitle="Key Succession Counsel"
                serviceDesc="Recovering locked assets and cold storage."
                productTitle="Dead Man's Switch"
                productDesc="Automated crypto-access transfer protocol."
              />

              {/* REAL ESTATE */}
              <SplitServiceCard
                title="Real Estate"
                serviceTitle="Commercial Closing"
                serviceDesc="Complex deal structuring and diligence."
                productTitle="Deed Generator"
                productDesc="Transfer property titles automatically."
              />
            </div>
          </div>
        </section>

      </main>

      <TerminalFooter />
    </div>
  );
}
