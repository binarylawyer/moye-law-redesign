
import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsultationCTA from "../components/ConsultationCTA";
import { resources } from "../data/resourcesData";
import useAnimatedElements from "../hooks/useAnimatedElements";

const Articles: React.FC = () => {
  const elementsRef = useAnimatedElements();
  
  // Filter only articles
  const articles = resources.filter(resource => resource.category === 'article');

  return (
    <>
      <Header />
      <main className="pt-48 bg-white">
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-8">
            <div className="max-w-3xl mx-auto">
              <h1 
                ref={el => elementsRef.current[0] = el}
                className="reveal font-serif text-4xl md:text-5xl text-navy mb-8"
              >
                Articles
              </h1>
              <p 
                ref={el => elementsRef.current[1] = el}
                className="reveal text-lg text-charcoal/80 mb-12"
                style={{ transitionDelay: '0.1s' }}
              >
                Browse our collection of articles written by our legal experts to help you understand complex legal topics and make informed decisions about your estate planning, intellectual property, and other legal needs.
              </p>
            </div>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-24 bg-light-gray">
          <div className="container mx-auto px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {articles.map((article, index) => (
                  <div 
                    key={article.id}
                    ref={el => elementsRef.current[2 + index] = el}
                    className="reveal bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                    style={{ transitionDelay: `${0.2 + (index * 0.05)}s` }}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                          Article
                        </span>
                        <span className="text-xs text-charcoal/60 ml-3">{article.date}</span>
                      </div>
                      <h3 className="font-serif text-xl text-navy mb-2">{article.title}</h3>
                      <p className="text-charcoal/80 text-sm mb-4 line-clamp-2">{article.description}</p>
                      <Link 
                        to={`/resources/${article.slug}`}
                        className="text-navy hover:text-gold transition-colors text-sm font-medium"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
};

export default Articles;
