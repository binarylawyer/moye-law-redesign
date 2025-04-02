
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  featured: boolean;
  path: string;
}

const TeamMembers: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: "christopher-moye",
      name: "Christopher Moye",
      title: "CEO & Founder",
      bio: "Christopher leads Moye Law with a passion for combining traditional legal expertise with innovative technological solutions. With over 20 years of experience in estate planning and intellectual property, he brings a unique perspective to serving high-net-worth clients.",
      featured: true,
      path: "/team/christopher-moye"
    },
    {
      id: "penny-moye",
      name: "Penny Moye",
      title: "VP Tech & Customer Success",
      bio: "Penny oversees client experience and the firm's technological initiatives to ensure seamless service delivery. Her background in both legal operations and technology innovation helps bridge the gap between traditional legal services and modern client expectations.",
      featured: false,
      path: "/team/penny-moye"
    },
    {
      id: "christopher-moye-jr",
      name: "Christopher Moye Jr",
      title: "VP Marketing and Operations",
      bio: "Christopher Jr manages the firm's operations and marketing strategies to align with our core values and vision. His focus on client-centered processes ensures that every interaction with Moye Law reflects our commitment to exceptional service.",
      featured: false,
      path: "/team/christopher-moye-jr"
    }
  ];

  // Featured team member (Christopher Moye)
  const featuredMember = teamMembers.find(member => member.featured);
  
  // Other team members
  const otherMembers = teamMembers.filter(member => !member.featured);

  return (
    <div className="py-48">
      {/* Featured Team Member */}
      {featuredMember && (
        <div className="mb-80">
          <h2 className="font-display text-4xl md:text-5xl mb-40 text-navy text-center">Leadership</h2>
          <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-pastel-blue/30 to-white">
            <div className="grid md:grid-cols-12 gap-40">
              <div className="md:col-span-4 p-40 flex justify-center items-start">
                <Avatar className="w-96 h-96 border-4 border-ocean-blue/20">
                  <AvatarImage src={featuredMember.imageUrl} alt={featuredMember.name} />
                  <AvatarFallback className="bg-ocean-blue/10 text-primary text-3xl">
                    {featuredMember.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="md:col-span-8 p-40 flex flex-col">
                <h3 className="font-display text-3xl text-navy mb-8">{featuredMember.name}</h3>
                <p className="text-ocean-blue text-xl mb-16">{featuredMember.title}</p>
                <p className="text-charcoal/80 text-xl mb-24">
                  Christopher Moye founded Moye Law with a vision to bridge traditional legal services with innovative technology. With extensive experience in both Estate Planning and Intellectual Property, Christopher has built a practice that serves high-net-worth individuals across New York City and Westchester County. His unique approach combines the personal attention of a family firm with the forward-thinking solutions enabled by modern technology.
                </p>
                <div className="mt-16">
                  <Link 
                    to={featuredMember.path}
                    className="inline-flex items-center font-sans text-ocean-blue hover:text-navy transition-colors text-lg"
                  >
                    Full profile <ChevronRight className="ml-8 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Other Team Members */}
      <div className="mt-80">
        <h2 className="font-display text-4xl md:text-5xl mb-40 text-navy text-center">Team</h2>
        <div className="grid md:grid-cols-2 gap-40">
          {otherMembers.map((member, index) => (
            <Card key={member.id} className={`overflow-hidden border-none shadow-md ${index % 2 === 0 ? 'bg-gradient-to-br from-pastel-green/30 to-white' : 'bg-gradient-to-br from-pastel-beige/30 to-white'}`}>
              <CardContent className="p-40 flex flex-col">
                <div className="flex items-center mb-24">
                  <Avatar className="w-64 h-64 mr-24 border-3 border-ocean-blue/20">
                    <AvatarImage src={member.imageUrl} alt={member.name} />
                    <AvatarFallback className="bg-ocean-blue/10 text-primary text-2xl">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-display text-2xl text-navy">{member.name}</h3>
                    <p className="text-ocean-blue text-lg">{member.title}</p>
                  </div>
                </div>
                <p className="text-charcoal/80 text-lg mb-32">{member.bio}</p>
                <div className="mt-auto">
                  <Link 
                    to={member.path}
                    className="inline-flex items-center font-sans text-ocean-blue hover:text-navy transition-colors text-lg"
                  >
                    Learn more <ChevronRight className="ml-8 h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
