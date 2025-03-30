
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import NotFound from './NotFound';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  longBio: string;
  expertise: string[];
  education: string[];
  imageUrl?: string;
}

const TeamMemberProfile: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();
  
  const teamMembersData: Record<string, TeamMember> = {
    "christopher-moye": {
      id: "christopher-moye",
      name: "Christopher Moye",
      title: "CEO & Founder",
      longBio: "Christopher Moye is the founder and CEO of Moye Law, a family-run firm that combines traditional legal expertise with innovative technological solutions. With over 15 years of experience in Estate Planning and Intellectual Property law, Christopher has built a reputation for providing sophisticated legal strategies tailored to high-net-worth individuals and their unique needs.\n\nChristopher's approach to law is defined by a commitment to personal service and forward-thinking solutions. He believes deeply in the importance of building lasting relationships with clients, understanding not just their legal needs but their values and goals for future generations.\n\nBefore founding Moye Law, Christopher worked at several prestigious firms in New York City, gaining experience that would later inform his vision for a different kind of legal practice—one that leverages technology to enhance, rather than replace, the personal touch that clients deserve.\n\nChristopher is known for his ability to explain complex legal concepts in accessible terms and for creating customized strategies that address the unique circumstances of each client.",
      expertise: [
        "Estate Planning for High-Net-Worth Individuals",
        "Trust Administration",
        "Intellectual Property Protection",
        "Digital Asset Planning",
        "Family Business Succession"
      ],
      education: [
        "J.D., Columbia Law School",
        "B.A. in Economics, Yale University",
        "Certificate in Digital Law and Technology, NYU"
      ]
    },
    "penny-moye": {
      id: "penny-moye",
      name: "Penny Moye",
      title: "VP Tech & Customer Success",
      longBio: "Penny Moye leads the firm's technological initiatives and customer experience strategies. With a background in both law and information technology, she has pioneered the firm's innovative approach to service delivery, ensuring that clients receive not only expert legal guidance but also a seamless, modern experience throughout their engagement with Moye Law.\n\nPenny's dual expertise allows her to bridge the gap between complex legal services and user-friendly client interactions. She has been instrumental in developing the firm's digital systems that enhance client communication, document management, and case tracking—all while maintaining the highest standards of confidentiality and security.\n\nAs VP of Customer Success, Penny works closely with clients to understand their needs and preferences, continually refining the firm's processes to ensure they align with client expectations. Her commitment to client satisfaction has been a driving force behind Moye Law's reputation for exceptional service.",
      expertise: [
        "Legal Technology Implementation",
        "Client Experience Design",
        "Digital Security Compliance",
        "Process Optimization",
        "Client Communications Systems"
      ],
      education: [
        "J.D., Fordham Law School",
        "M.S. in Information Systems, NYU Stern",
        "B.S. in Computer Science, Cornell University"
      ]
    },
    "christopher-moye-jr": {
      id: "christopher-moye-jr",
      name: "Christopher Moye Jr",
      title: "VP Marketing and Operations",
      longBio: "Christopher Moye Jr oversees the firm's operations and marketing initiatives, ensuring that Moye Law's values and vision are clearly communicated both internally and externally. With a background in business administration and legal marketing, he has developed strategies that highlight the firm's unique positioning at the intersection of traditional legal expertise and technological innovation.\n\nChristopher Jr is passionate about maintaining the firm's family values while expanding its reach to serve more clients who can benefit from its specialized approach. He manages the day-to-day operations of the firm, focusing on efficiency and effectiveness while never losing sight of the personal touch that defines the Moye Law experience.\n\nThrough thoughtful marketing initiatives, Christopher Jr has helped establish Moye Law's reputation as a forward-thinking firm that understands the evolving needs of high-net-worth clients in today's complex legal landscape.",
      expertise: [
        "Legal Practice Management",
        "Strategic Marketing for Legal Services",
        "Brand Development",
        "Client Acquisition Strategy",
        "Operational Efficiency"
      ],
      education: [
        "MBA, Harvard Business School",
        "B.A. in Communication and Business, Georgetown University",
        "Certificate in Digital Marketing, Cornell"
      ]
    }
  };
  
  const teamMember = memberId ? teamMembersData[memberId] : null;
  
  if (!teamMember) {
    return <NotFound />;
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-96 px-24">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-48 items-center md:items-start">
                <Avatar className="w-96 h-96 border-2 border-cerulean/20">
                  <AvatarImage src={teamMember.imageUrl} alt={teamMember.name} />
                  <AvatarFallback className="bg-cerulean/10 text-primary text-4xl">
                    {teamMember.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <h1 className="font-sans text-4xl md:text-5xl mb-8 text-primary">{teamMember.name}</h1>
                  <p className="text-cerulean text-xl mb-32">{teamMember.title}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bio Section */}
        <section className="py-64 px-24 bg-light-gray">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-sans text-2xl md:text-3xl mb-32 text-primary">About</h2>
              {teamMember.longBio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-charcoal/80 mb-24">{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
        
        {/* Expertise and Education Section */}
        <section className="py-64 px-24">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-48">
                {/* Expertise */}
                <div>
                  <h2 className="font-sans text-2xl md:text-3xl mb-32 text-primary">Areas of Expertise</h2>
                  <ul className="list-disc pl-24 space-y-16">
                    {teamMember.expertise.map((item, index) => (
                      <li key={index} className="text-charcoal/80">{item}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Education */}
                <div>
                  <h2 className="font-sans text-2xl md:text-3xl mb-32 text-primary">Education</h2>
                  <ul className="list-disc pl-24 space-y-16">
                    {teamMember.education.map((item, index) => (
                      <li key={index} className="text-charcoal/80">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamMemberProfile;
