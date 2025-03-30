
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface DesktopNavigationProps {
  practiceAreas: { title: string; path: string }[];
  specializedServices: { title: string; path: string }[];
  resourcesItems: { title: string; path: string }[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  practiceAreas,
  specializedServices,
  resourcesItems
}) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navMenuItemClasses = "text-navy hover:text-gold transition-colors font-sans text-lg relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left";
  const activeNavClass = "after:scale-x-100 font-medium";

  return (
    <div className="hidden md:flex items-center space-x-24">
      <NavigationMenu>
        <NavigationMenuList className="space-x-24">
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`${navMenuItemClasses} ${isActive('/practice') ? activeNavClass : ''} bg-transparent hover:bg-transparent focus:bg-transparent`}>Practice</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white shadow-lg rounded-sm p-4 w-[400px] mt-2">
              <div className="grid grid-cols-2 gap-4">
                {practiceAreas.map((area) => (
                  <Link
                    key={area.path}
                    to={area.path}
                    className="text-navy hover:text-gold p-2 transition-colors"
                  >
                    {area.title}
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <Link to="/practice" className="text-gold hover:text-navy flex items-center transition-colors">
                  View All Practice Areas
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`${navMenuItemClasses} ${isActive('/ip-consulting') || isActive('/ip-licensing') || isActive('/digital-asset-protection') || isActive('/entertainment-law') || isActive('/emerging-tech') ? activeNavClass : ''} bg-transparent hover:bg-transparent focus:bg-transparent`}>Services</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white shadow-lg rounded-sm p-4 w-[300px] mt-2">
              <div className="flex flex-col space-y-2">
                {specializedServices.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="text-navy hover:text-gold p-2 transition-colors"
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
              className={`${navMenuItemClasses} ${isActive('/about') ? activeNavClass : ''} flex items-center`}
            >
              Our Firm
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`${navMenuItemClasses} ${isActive('/resources') || isActive('/case-studies') || isActive('/faq') || isActive('/how-we-work') || isActive('/technology-approach') ? activeNavClass : ''} bg-transparent hover:bg-transparent focus:bg-transparent`}>Resources</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white shadow-lg rounded-sm p-4 w-[300px] mt-2">
              <div className="flex flex-col space-y-2">
                {resourcesItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-navy hover:text-gold p-2 transition-colors"
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
              className={`${navMenuItemClasses} ${isActive('/contact') ? activeNavClass : ''} flex items-center`}
            >
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <Link to="/contact">
        <Button 
          variant="ghost" 
          className="text-gold hover:text-white hover:bg-gold transition-all font-sans text-lg px-6 py-2 font-normal border border-transparent hover:border-gold"
        >
          Schedule Consultation
        </Button>
      </Link>
    </div>
  );
};

export default DesktopNavigation;
