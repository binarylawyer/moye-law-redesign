import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import ConsultationCTA from '@/components/ConsultationCTA';
import '../styles/mondrian.css';

// Mock article data - in a real app this would come from an API or CMS
const articleData = {
  "first-amendment-digital-age": {
    id: "first-amendment-digital-age",
    title: "The First Amendment in the Digital Age: New Challenges",
    author: "Sarah Chen, Esq.",
    date: "May 15, 2024",
    readTime: "8 min read",
    category: "Constitutional Law",
    tags: ["First Amendment", "Digital Rights", "Social Media"],
    featuredImage: "/images/articles/first-amendment.jpg",
    shortDescription: "How traditional free speech protections are evolving to address the unique challenges of online expression and platform governance.",
    content: `
      <p>Freedom of expression faces unprecedented challenges in the digital age. As communication increasingly shifts to online platforms, traditional First Amendment principles developed for print and broadcast media require thoughtful reconsideration.</p>
      
      <h2>Platform Governance</h2>
      <p>Private companies now serve as the primary gatekeepers of public discourse. Their content moderation policies, while not subject to First Amendment constraints, profoundly shape the boundaries of acceptable speech for billions of users worldwide.</p>
      
      <p>Courts have consistently held that social media companies, as private entities, can establish and enforce their own content guidelines. However, recent legislative efforts in several states have attempted to limit platforms' moderation abilities, creating tension between state law and platforms' own First Amendment rights to editorial discretion.</p>
      
      <h2>Digital Public Forums</h2>
      <p>The Supreme Court has begun addressing how traditional public forum doctrine translates to digital spaces. In <em>Packingham v. North Carolina</em> (2017), Justice Kennedy described social media as "the modern public square," suggesting enhanced protection for online speech.</p>
      
      <p>Meanwhile, cases involving government officials' social media accounts, such as <em>Knight First Amendment Institute v. Trump</em>, have established that public officials cannot block users from official accounts based on viewpoint, effectively creating designated public forums within these digital spaces.</p>
      
      <h2>Anonymity and Privacy</h2>
      <p>Digital communication has renewed debates about anonymous speech. While the Supreme Court has historically protected anonymous speech as part of First Amendment rights, digital contexts present new challenges regarding verification, accountability, and the prevention of harassment.</p>
      
      <p>Balancing privacy interests against free expression remains a central tension, particularly as data collection practices enable unprecedented surveillance of communicative activities.</p>
      
      <h2>Future Considerations</h2>
      <p>As artificial intelligence reshapes content creation and moderation, new questions emerge about the boundaries of protected speech. When content is algorithmically generated or filtered, traditional concepts of speaker intent and editorial judgment become increasingly complicated.</p>
      
      <p>The global nature of digital communication also challenges the territorial scope of First Amendment protections. American companies operating globally must navigate competing speech norms and regulatory frameworks, raising complex questions about jurisdiction and applicable law.</p>
      
      <p>As these issues evolve, courts and legislatures will continue refining the application of First Amendment principles to digital expression. The fundamental values of free speech remain constant, but their implementation requires thoughtful adaptation to technological realities.</p>
    `
  },
  "ai-intellectual-property": {
    id: "ai-intellectual-property",
    title: "Artificial Intelligence and Intellectual Property: Ownership in the Age of Machine Creativity",
    author: "Marcus Powell, Esq.",
    date: "April 3, 2024",
    readTime: "10 min read",
    category: "Intellectual Property",
    tags: ["AI", "Copyright", "Patents", "Innovation"],
    featuredImage: "/images/articles/ai-ip.jpg",
    shortDescription: "Exploring the complex intellectual property questions arising from AI-generated content and inventions.",
    content: `
      <p>As artificial intelligence systems increasingly create works that would be protected by intellectual property laws if made by humans, fundamental questions arise about ownership, authorship, and the purpose of IP protection.</p>
      
      <h2>Copyright Challenges</h2>
      <p>The U.S. Copyright Office has maintained that creative works must be authored by humans to receive copyright protection. In a series of decisions, including the recent ruling on AI-generated images, the Office has declined to register works created by AI systems without substantial human creative input.</p>
      
      <p>This position creates uncertainty for businesses investing in AI-generated content. Without copyright protection, these works immediately enter the public domain, potentially undermining the economic incentive for development.</p>
      
      <h2>Patent Considerations</h2>
      <p>Similar issues arise in patent law. The USPTO rejected patent applications naming an AI system (DABUS) as the inventor, a position upheld by federal courts. Current patent law requires inventors to be "individuals," interpreted as human persons.</p>
      
      <p>As AI systems increasingly participate in the innovation process, from drug discovery to materials science, the requirement for human inventorship may create gaps in protection for AI-assisted innovations.</p>
      
      <h2>Ownership and Attribution</h2>
      <p>When AI generates potentially valuable creative works or innovations, complex questions arise regarding proper attribution and ownership rights. Potential claimants include:</p>
      
      <ul>
        <li>The developers of the AI system</li>
        <li>The users who provide prompts or direction</li>
        <li>The owners of training data used in the AI development</li>
        <li>The investors financing the technology</li>
      </ul>
      
      <p>Current legal frameworks provide limited guidance on resolving these competing claims, creating uncertainty for businesses and creators.</p>
      
      <h2>Policy Directions</h2>
      <p>Several approaches could address these emerging challenges:</p>
      
      <p><strong>Expanded Protection:</strong> Law could evolve to recognize non-human authors/inventors under certain conditions, with ownership assigned to human operators or developers.</p>
      
      <p><strong>New IP Categories:</strong> Jurisdictions might develop sui generis protection specifically designed for AI-generated works, with appropriate terms and limitations.</p>
      
      <p><strong>Contract-Based Solutions:</strong> In the absence of clear IP protection, industries might increasingly rely on contractual frameworks, technological protection measures, and trade secret law.</p>
      
      <p>As AI continues transforming creative and innovative processes, intellectual property frameworks will need thoughtful adaptation to maintain their fundamental purpose of incentivizing human creativity and innovation while accommodating technological change.</p>
    `
  }
};

const Article: React.FC = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // In a real app, this would be an API call to fetch article data
    const fetchArticle = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (articleId && articleId in articleData) {
          setArticle(articleData[articleId as keyof typeof articleData]);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchArticle();
    
    // Set up intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [articleId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 md:pt-40">
          <div className="container mx-auto px-8">
            <div className="mondrian-grid animate-pulse">
              <div className="col-span-12 md:col-span-8 bg-gray-100 h-12 mb-6"></div>
              <div className="col-span-12 md:col-span-4 bg-gray-100 h-8 mb-12"></div>
              <div className="col-span-12 md:col-span-8 space-y-4">
                <div className="bg-gray-100 h-6 w-full"></div>
                <div className="bg-gray-100 h-6 w-11/12"></div>
                <div className="bg-gray-100 h-6 w-10/12"></div>
                <div className="bg-gray-100 h-6 w-full"></div>
              </div>
              <div className="col-span-12 md:col-span-4 bg-gray-100 h-72"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 md:pt-40">
          <div className="container mx-auto px-8 py-24 text-center">
            <div className="mondrian-grid">
              <div className="col-span-3 mondrian-red"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8">
                <h1 className="font-display text-black text-4xl md:text-5xl mb-8">Article Not Found</h1>
                <p className="text-xl mb-8">The article you're looking for doesn't exist or has been moved.</p>
                <Button asChild className="mondrian-button yellow">
                  <Link to="/articles">View All Articles</Link>
                </Button>
              </div>
              <div className="col-span-3 mondrian-blue"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero Section - Mondrian Style */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-8">
            <div className="mondrian-grid mb-12">
              <div className="col-span-12 md:col-span-8 mondrian-grid-item bg-white p-8 border-4 border-black">
                <h1 className="reveal font-display text-black text-3xl md:text-4xl lg:text-5xl mb-6">{article.title}</h1>
                <div className="flex flex-wrap gap-4 mb-6">
                  {article.tags.map((tag: string, index: number) => (
                    <span 
                      key={index} 
                      className={`text-sm font-medium px-3 py-1 rounded-sm ${
                        index % 3 === 0 ? 'bg-red-100 text-red-800' : 
                        index % 3 === 1 ? 'bg-blue-100 text-blue-800' : 
                        'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-black/70 flex flex-wrap gap-x-4 gap-y-2">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 mondrian-yellow border-t-4 border-r-4 border-b-4 border-black p-6">
                <div className="text-xl font-display mb-4">Article Category</div>
                <div className="text-2xl font-medium">{article.category}</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-8">
            <div className="mondrian-grid">
              {/* Main Content */}
              <div className="col-span-12 md:col-span-8 order-2 md:order-1">
                <div className="mondrian-grid-item bg-white p-8 border-4 border-black prose prose-lg max-w-none">
                  <div className="reveal" dangerouslySetInnerHTML={{ __html: article.content }}></div>
                </div>
                
                {/* Author Box - Mondrian Style */}
                <div className="mondrian-grid mt-12">
                  <div className="col-span-3 mondrian-red"></div>
                  <div className="col-span-9 mondrian-grid-item bg-white p-8 border-4 border-black">
                    <h3 className="text-2xl font-display mb-4">About the Author</h3>
                    <p className="mb-4">{article.author} is a specialist in {article.category} with over 15 years of experience. They have published numerous articles on the subject and regularly speak at industry conferences.</p>
                    <Button asChild className="mondrian-button black">
                      <Link to="/team">View Profile</Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="col-span-12 md:col-span-4 order-1 md:order-2 mb-8 md:mb-0">
                {/* Featured Image */}
                <div className="mondrian-image mb-8">
                  <img 
                    src={article.featuredImage || "https://placehold.co/600x400/efefef/999?text=Featured+Image"} 
                    alt={article.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Related Content */}
                <div className="mondrian-grid-item bg-white p-6 border-4 border-black mb-8">
                  <h3 className="text-xl font-display mb-4 pb-2 border-b-2 border-black">Related Content</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/articles/first-amendment-digital-age" className="block group">
                        <span className="text-lg font-medium group-hover:text-black/70 transition-colors">The First Amendment in the Digital Age</span>
                        <span className="block text-sm text-black/70">Sarah Chen, Esq.</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/articles/ai-intellectual-property" className="block group">
                        <span className="text-lg font-medium group-hover:text-black/70 transition-colors">AI and Intellectual Property</span>
                        <span className="block text-sm text-black/70">Marcus Powell, Esq.</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/articles" className="inline-flex items-center text-sm font-medium mt-2 hover:text-black/70 transition-colors">
                        View all articles
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
                
                {/* Contact CTA */}
                <div className="mondrian-blue border-4 border-black p-6">
                  <h3 className="text-xl font-display text-white mb-4">Have a Legal Question?</h3>
                  <p className="text-white/90 mb-4">Our team is ready to provide expert guidance on your specific situation.</p>
                  <Button asChild className="mondrian-button white">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Bottom Navigation */}
            <div className="mondrian-grid mt-16">
              <div className="col-span-6 mondrian-grid-item bg-white p-4 border-4 border-black">
                <Link to="/articles" className="flex items-center group">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="font-medium group-hover:text-black/70 transition-colors">Back to Articles</span>
                </Link>
              </div>
              <div className="col-span-6 mondrian-grid-item bg-white p-4 border-4 border-black text-right">
                <Link to="/contact" className="flex items-center justify-end group">
                  <span className="font-medium group-hover:text-black/70 transition-colors">Discuss Your Case</span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mondrian-style divider */}
        <div className="mondrian-divider max-w-7xl mx-auto mb-16">
          <div className="mondrian-divider-yellow"></div>
          <div className="mondrian-divider-white"></div>
          <div className="mondrian-divider-red"></div>
          <div className="mondrian-divider-blue"></div>
        </div>
        
        {/* Using the ConsultationCTA component */}
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Article; 