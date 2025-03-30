
import React from 'react';
import { Button } from "@/components/ui/button";

const ConsultationCTA: React.FC = () => {
  return (
    <section className="bg-navy text-white py-64 px-24">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-white mb-16">Schedule a Confidential Consultation</h2>
          <p className="mb-32">
            Take the first step toward securing your legacy. Our confidential consultation process ensures your information remains private while we develop solutions tailored to your specific needs.
          </p>
          <Button className="bg-gold hover:bg-gold/90 text-white font-medium px-32 py-24">
            Request Consultation
          </Button>
          <p className="text-sm mt-16 text-white/80">
            All consultations are protected by attorney-client privilege
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
