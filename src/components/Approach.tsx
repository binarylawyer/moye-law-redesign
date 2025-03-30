
import React from 'react';

const Approach: React.FC = () => {
  return (
    <section className="bg-white py-64 px-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-32 lg:gap-64">
          {/* Left Side: Traditional/Family Elements */}
          <div className="md:w-1/2">
            <h2 className="text-navy font-serif mb-16">Our Approach</h2>
            <p className="text-charcoal mb-16">
              We blend personalized attention with innovative legal solutions, combining decades of experience with advanced technology to provide exceptional service that evolves with your needs while maintaining the human touch.
            </p>
            
            {/* For Barbara: Personal Attention */}
            <div className="mb-24">
              <h3 className="text-navy font-serif text-xl mb-8">Personal Attention</h3>
              <p className="text-charcoal">We prioritize genuine relationships, ensuring every client receives dedicated time and tailored solutions.</p>
            </div>
            
            {/* For David: Stability Signal */}
            <div>
              <h3 className="text-navy font-serif text-xl mb-8">Deep Expertise</h3>
              <p className="text-charcoal">With over three decades of experience, our attorneys bring seasoned judgment to complex legal challenges.</p>
            </div>
          </div>
          
          {/* Right Side: Innovative/Tech Elements */}
          <div className="md:w-1/2 mt-32 md:mt-0">
            {/* For Alex: Tech Sophistication */}
            <div className="mb-24">
              <h3 className="text-navy font-serif text-xl mb-8">Tech-Forward Solutions</h3>
              <p className="text-charcoal">We leverage secure digital tools while maintaining strict confidentiality to streamline complex legal processes.</p>
            </div>
            
            <div>
              <h3 className="text-navy font-serif text-xl mb-8">Future-Oriented Planning</h3>
              <p className="text-charcoal">Our forward-thinking strategies anticipate changes in law, technology, and family dynamics to protect your legacy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
