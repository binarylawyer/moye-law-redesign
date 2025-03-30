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
      bio: "Christopher leads Moye Law with a passion for combining traditional legal expertise with innovative technological solutions.",
      featured: true,
      path: "/team/christopher-moye"
    },
    {
      id: "penny-moye",
      name: "Penny Moye",
      title: "VP Tech & Customer Success",
      bio: "Penny oversees client experience and the firm's technological initiatives to ensure seamless service delivery.",
      featured: false,
      path: "/team/penny-moye"
    },
    {
      id: "christopher-moye-jr",
      name: "Christopher Moye Jr",
      title: "VP Marketing and Operations",
      bio: "Christopher Jr manages the firm's operations and marketing strategies to align with our core values and vision.",
      featured: false,
      path: "/team/christopher-moye-jr"
    }
  ];

  // Featured team member (Christopher Moye)
  const featuredMember = teamMembers.find(member => member.featured);
  
  // Other team members
  const otherMembers = teamMembers.filter(member => !member.featured);

  return (
    <div className="py-16">
      {/* Featured Team Member */}
      {featuredMember && (
        <div className="mb-80">
          <h2 className="font-sans text-3xl md:text-4xl mb-40 text-primary text-center">Leadership</h2>
          <Card className="overflow-hidden border-none shadow-sm bg-white">
            <div className="grid md:grid-cols-12 gap-40">
              <div className="md:col-span-4 p-40 flex justify-center items-start">
                <Avatar className="w-80 h-80 border-2 border-cerulean/20">
                  <AvatarImage src={featuredMember.imageUrl} alt={featuredMember.name} />
                  <AvatarFallback className="bg-cerulean/10 text-primary text-2xl">
                    {featuredMember.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="md:col-span-8 p-40 flex flex-col">
                <h3 className="font-sans text-2xl text-primary mb-8">{featuredMember.name}</h3>
                <p className="text-cerulean mb-16">{featuredMember.title}</p>
                <p className="text-charcoal/80 mb-24">
                  Christopher Moye founded Moye Law with a vision to bridge traditional legal services with innovative technology. With extensive experience in both Estate Planning and Intellectual Property, Christopher has built a practice that serves high-net-worth individuals across New York City and Westchester County. His unique approach combines the personal attention of a family firm with the forward-thinking solutions enabled by modern technology.
                </p>
                <div className="mt-16">
                  <Link 
                    to={featuredMember.path}
                    className="inline-flex items-center font-sans text-cerulean hover:text-primary transition-colors"
                  >
                    Full profile <ChevronRight className="ml-8 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Other Team Members */}
      <div className="mt-80">
        <h2 className="font-sans text-3xl md:text-4xl mb-40 text-primary text-center">Team</h2>
        <div className="grid md:grid-cols-2 gap-40">
          {otherMembers.map(member => (
            <Card key={member.id} className="overflow-hidden border-none shadow-sm bg-white">
              <CardContent className="p-40 flex flex-col">
                <div className="flex items-center mb-24">
                  <Avatar className="w-56 h-56 mr-24 border-2 border-cerulean/20">
                    <AvatarImage src={member.imageUrl} alt={member.name} />
                    <AvatarFallback className="bg-cerulean/10 text-primary text-xl">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-sans text-xl text-primary">{member.name}</h3>
                    <p className="text-cerulean text-sm">{member.title}</p>
                  </div>
                </div>
                <p className="text-charcoal/80 mb-32">{member.bio}</p>
                <div className="mt-auto">
                  <Link 
                    to={member.path}
                    className="inline-flex items-center font-sans text-cerulean hover:text-primary transition-colors"
                  >
                    Learn more <ChevronRight className="ml-8 h-4 w-4" />
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
