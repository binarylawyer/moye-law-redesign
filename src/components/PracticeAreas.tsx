
import React from 'react';
import { Shield, BookOpen, GanttChart, Landmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PracticeAreas: React.FC = () => {
  const practiceAreas = [
    { 
      id: 1,
      title: "Estate Planning & Trusts",
      description: "Comprehensive strategies to protect and transfer wealth while minimizing tax implications.",
      icon: Shield,
      persona: "David (Wealth Preservation)",
      path: "/practice/estate-planning"
    },
    { 
      id: 2,
      title: "Elder Law",
      description: "Compassionate guidance for long-term care planning, guardianship, and Medicare/Medicaid support.",
      icon: Landmark,
      persona: "Barbara (Elder Care)",
      path: "/practice/elder-law"
    },
    { 
      id: 3,
      title: "Intellectual Property & Digital Assets",
      description: "Protection for traditional IP and emerging digital assets, including cryptocurrency and NFTs.",
      icon: GanttChart,
      persona: "Alex (Tech Entrepreneur)",
      path: "/practice/ip-digital-assets"
    },
    { 
      id: 4,
      title: "Art Law",
      description: "Specialized counsel for artists, collectors, galleries, and museums in acquisition, protection, and legacy planning.",
      icon: BookOpen,
      persona: "Premium Differentiator",
      path: "/practice/art-law"
    }
  ];

  return (
    <section className="bg-light-gray py-64 px-24">
      <div className="container mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-navy font-serif mb-16">Our Practice Areas</h2>
          <p className="max-w-2xl mx-auto">
            Specialized legal services tailored to protect your legacy, family, and assets with personalized attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
          {practiceAreas.map((area) => (
            <Card key={area.id} className="bg-white hover:shadow-md transition-shadow border-none overflow-hidden">
              <CardContent className="p-24">
                <div className="flex flex-col h-full">
                  <div className="mb-16">
                    <area.icon className="h-10 w-10 text-navy" />
                  </div>
                  <h3 className="text-navy font-serif text-xl mb-8">{area.title}</h3>
                  <p className="text-charcoal mb-16 flex-grow">{area.description}</p>
                  <a 
                    href={area.path}
                    className="text-gold hover:text-gold/80 font-medium text-sm inline-flex items-center mt-auto"
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
