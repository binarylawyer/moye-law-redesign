import React from 'react';
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from 'lucide-react';

interface DesktopNavigationProps {
  practiceAreas: { title: string; path: string }[];
  specializedServices: { title: string; path: string }[];
  resourcesItems: { title: string; path: string }[];
  isScrolled?: boolean;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  practiceAreas,
  specializedServices,
  resourcesItems,
  isScrolled = true
}) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Check if the current path is part of a service path
  const isServiceActive = () => {
    return specializedServices.some(service => location.pathname === service.path);
  };
  
  // Check if the current path is part of a practice path
  const isPracticeActive = () => {
    return location.pathname.includes('/practice') || practiceAreas.some(area => location.pathname === area.path);
  };
  
  // Check if the current path is part of a resources path
  const isResourceActive = () => {
    return location.pathname.includes('/resources') || resourcesItems.some(item => location.pathname === item.path);
  };

  // Select only a subset of practice areas for the dropdown
  const featuredPracticeAreas = practiceAreas.slice(0, 6);

  // Define colors for nav boxes
  const boxColors = {
    practice: {
      bg: 'bg-[#D6001C]/10',
      border: 'border-[#D6001C]',
      active: 'bg-[#D6001C]/20'
    },
    services: {
      bg: 'bg-[#FFEB80]/10',
      border: 'border-[#FFEB80]',
      active: 'bg-[#FFEB80]/20'
    },
    about: {
      bg: 'bg-[#4D80D4]/10',
      border: 'border-[#4D80D4]',
      active: 'bg-[#4D80D4]/20'
    },
    resources: {
      bg: 'bg-[#00A650]/10',
      border: 'border-[#00A650]',
      active: 'bg-[#00A650]/20'
    }
  };

  // Consistent colors regardless of scroll state
  const textColor = 'text-black';
  const activeColor = 'text-[#D6001C]';
  const hoverColor = 'hover:text-[#D6001C]';

  return (
    <NavigationMenu className="relative">
      <NavigationMenuList className="space-x-8">
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger 
            className={`group px-4 py-2 ${boxColors.practice.bg} focus:bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-inherit border-2 ${isPracticeActive() ? boxColors.practice.active + ' ' + boxColors.practice.border : 'border-black/30'} hover:${boxColors.practice.border}`}
          >
            <span className={`font-serif text-lg font-medium ${textColor} ${hoverColor} transition-colors ${isPracticeActive() ? activeColor : ''}`}>
              Practice
            </span>
            <ChevronDown className={`h-4 w-4 transition duration-200 ml-2 group-data-[state=open]:rotate-180 ${textColor}`} />
          </NavigationMenuTrigger>
          
          <NavigationMenuContent className="bg-white border-4 border-black p-8 !w-[1050px] absolute left-0 mt-64 transition-all duration-300 ease-in-out origin-top-center animate-dropdown z-50">
            {/* Mondrian accent element */}
            <div className="absolute top-0 left-0 w-1/3 h-2 bg-[#D6001C]"></div>
            
            <div className="grid grid-cols-2 gap-x-16 gap-y-6">
              {featuredPracticeAreas.map((area, index) => (
                <Link
                  key={area.path}
                  to={area.path}
                  className="text-black group flex items-center border-b-2 border-black/30 pb-3 transition-colors whitespace-nowrap hover:border-[#D6001C]"
                >
                  <span className="w-8 h-8 inline-flex items-center justify-center mr-4 text-md font-medium border-2 border-black">
                    {index + 1}
                  </span>
                  <span className="group-hover:text-[#D6001C] text-lg">{area.title}</span>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 pt-4 border-t-2 border-black">
              <Link to="/practice" className="text-[#4D80D4] hover:text-[#D6001C] flex items-center transition-colors font-serif text-base">
                View All Practice Areas
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger 
            className={`group px-4 py-2 ${boxColors.services.bg} focus:bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-inherit border-2 ${isServiceActive() ? boxColors.services.active + ' ' + boxColors.services.border : 'border-black/30'} hover:${boxColors.services.border}`}
          >
            <span className={`font-serif text-lg font-medium ${textColor} ${hoverColor} transition-colors ${isServiceActive() ? activeColor : ''}`}>
              Services
            </span>
            <ChevronDown className={`h-4 w-4 transition duration-200 ml-2 group-data-[state=open]:rotate-180 ${textColor}`} />
          </NavigationMenuTrigger>
          
          <NavigationMenuContent className="bg-white border-4 border-black p-8 !w-[550px] absolute left-0 mt-64 transition-all duration-300 ease-in-out origin-top-center animate-dropdown z-50">
            {/* Mondrian accent element */}
            <div className="absolute top-0 right-0 w-1/3 h-2 bg-[#FFEB80]"></div>
            
            <div className="flex flex-col space-y-4">
              {specializedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="text-black hover:text-[#D6001C] transition-colors border-b-2 border-black/30 pb-2 hover:border-[#D6001C] text-base"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link 
            to="/about" 
            className={`px-4 py-2 font-serif text-lg font-medium ${textColor} ${hoverColor} transition-colors border-2 ${isActive('/about') ? boxColors.about.active + ' ' + boxColors.about.border : boxColors.about.bg + ' border-black/30'} hover:${boxColors.about.border}`}
          >
            Our Firm
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger 
            className={`group px-4 py-2 ${boxColors.resources.bg} focus:bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-inherit border-2 ${isResourceActive() ? boxColors.resources.active + ' ' + boxColors.resources.border : 'border-black/30'} hover:${boxColors.resources.border}`}
          >
            <span className={`font-serif text-lg ${textColor} ${hoverColor} transition-colors ${isResourceActive() ? activeColor : ''}`}>
              Resources
            </span>
            <ChevronDown className={`h-4 w-4 transition duration-200 ml-2 group-data-[state=open]:rotate-180 ${textColor}`} />
          </NavigationMenuTrigger>
          
          <NavigationMenuContent className="bg-white border-4 border-black p-8 !w-[550px] absolute left-0 mt-64 transition-all duration-300 ease-in-out origin-top-center animate-dropdown z-50">
            {/* Mondrian accent element */}
            <div className="absolute bottom-0 left-0 w-1/3 h-2 bg-[#4D80D4]"></div>
            
            <div className="flex flex-col space-y-4">
              {resourcesItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-black hover:text-[#D6001C] transition-colors border-b-2 border-black/30 pb-2 hover:border-[#D6001C] text-base"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link 
            to="/contact" 
            className="px-4 py-2 font-serif text-lg font-medium text-black bg-[#FFEB80] hover:bg-[#D6001C] hover:text-white transition-colors border-4 border-black flex items-center mondrian-button light-yellow"
          >
            Contact
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
