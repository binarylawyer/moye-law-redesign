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

  // Select only a subset of practice areas for the dropdown
  const featuredPracticeAreas = practiceAreas.slice(0, 6);

  // Consistent colors regardless of scroll state
  const textColor = 'text-black';
  const activeColor = 'text-[#D6001C]';
  const hoverColor = 'hover:text-[#D6001C]';

  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-4">
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger 
            className="group px-2 bg-transparent focus:bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-inherit border-2 border-black/30 hover:border-black"
          >
            <span className={`font-serif text-lg font-medium ${textColor} ${hoverColor} transition-colors ${isActive('/practice') ? activeColor : ''}`}>
              Practice
            </span>
            <ChevronDown className={`h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 ${textColor}`} />
          </NavigationMenuTrigger>
          
          <NavigationMenuContent className="bg-white border-4 border-black p-6 w-[500px] absolute left-1/2 -translate-x-1/2 mt-3">
            {/* Mondrian accent element */}
            <div className="absolute top-0 left-0 w-1/3 h-2 bg-[#D6001C]"></div>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {featuredPracticeAreas.map((area, index) => (
                <Link
                  key={area.path}
                  to={area.path}
                  className="text-black group flex items-center border-b-2 border-black/30 pb-1 transition-colors whitespace-nowrap hover:border-[#D6001C]"
                >
                  <span className="w-6 h-6 inline-flex items-center justify-center mr-2 text-xs font-medium border-2 border-black">
                    {index + 1}
                  </span>
                  <span className="group-hover:text-[#D6001C]">{area.title}</span>
                </Link>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t-2 border-black">
              <Link to="/practice" className="text-[#003B98] hover:text-[#D6001C] flex items-center transition-colors font-serif">
                View All Practice Areas
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger 
            className="group px-2 bg-transparent focus:bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-inherit border-2 border-black/30 hover:border-black"
          >
            <span className={`font-serif text-lg font-medium ${textColor} ${hoverColor} transition-colors ${isServiceActive() ? activeColor : ''}`}>
              Services
            </span>
            <ChevronDown className={`h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 ${textColor}`} />
          </NavigationMenuTrigger>
          
          <NavigationMenuContent className="bg-white border-4 border-black p-5 w-[300px] absolute left-1/2 -translate-x-1/2 mt-3">
            {/* Mondrian accent element */}
            <div className="absolute top-0 right-0 w-1/3 h-2 bg-[#FFD500]"></div>
            
            <div className="flex flex-col space-y-3">
              {specializedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="text-black hover:text-[#D6001C] transition-colors border-b-2 border-black/30 pb-1 hover:border-[#D6001C]"
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
            className={`px-3 py-2 font-serif text-base font-medium ${textColor} ${hoverColor} transition-colors border-2 border-black/30 hover:border-black ${isActive('/about') ? activeColor : ''}`}
          >
            Our Firm
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger 
            className="group px-2 bg-transparent focus:bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-inherit border-2 border-black/30 hover:border-black"
          >
            <span className={`font-serif text-lg ${textColor} ${hoverColor} transition-colors ${isActive('/resources') ? activeColor : ''}`}>
              Resources
            </span>
            <ChevronDown className={`h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 ${textColor}`} />
          </NavigationMenuTrigger>
          
          <NavigationMenuContent className="bg-white border-4 border-black p-5 w-[300px] absolute left-1/2 -translate-x-1/2 mt-3">
            {/* Mondrian accent element */}
            <div className="absolute bottom-0 left-0 w-1/3 h-2 bg-[#003B98]"></div>
            
            <div className="flex flex-col space-y-3">
              {resourcesItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-black hover:text-[#D6001C] transition-colors border-b-2 border-black/30 pb-1 hover:border-[#D6001C]"
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
            className="px-3 py-2 font-serif text-lg font-medium text-black bg-[#FFD500] hover:bg-[#D6001C] hover:text-white transition-colors border-4 border-black flex items-center mondrian-button yellow"
          >
            Contact
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
