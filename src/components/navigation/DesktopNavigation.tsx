
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
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

  // Check if the current path is part of a service path
  const isServiceActive = () => {
    return specializedServices.some(service => location.pathname === service.path);
  };

  const navMenuItemClasses = "text-navy hover:text-gold transition-colors font-sans text-lg relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left";
  const activeNavClass = "after:scale-x-100 font-medium";

  // Select only a subset of practice areas for the dropdown
  const featuredPracticeAreas = practiceAreas.slice(0, 6);

  return (
    <div className="hidden md:flex items-center space-x-8 pr-8">
      <NavigationMenu>
        <NavigationMenuList className="space-x-12">
          <NavigationMenuItem className="relative">
            <Link to="/practice" className={`${navMenuItemClasses} ${isActive('/practice') ? activeNavClass : ''} text-lg`}>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent text-lg p-0">Practice</NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent className="bg-white shadow-lg rounded-sm p-8 w-[500px] absolute left-1/2 -translate-x-1/2 mt-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {featuredPracticeAreas.map((area) => (
                  <Link
                    key={area.path}
                    to={area.path}
                    className="text-navy hover:text-gold p-2 transition-colors whitespace-nowrap"
                  >
                    {area.title}
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t">
                <Link to="/practice" className="text-gold hover:text-navy flex items-center transition-colors">
                  View All Practice Areas
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className={`${navMenuItemClasses} ${isServiceActive() ? activeNavClass : ''} bg-transparent hover:bg-transparent focus:bg-transparent`}>Services</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white shadow-lg rounded-sm p-4 w-[300px] absolute left-1/2 -translate-x-1/2 mt-6">
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
          
          <NavigationMenuItem className="relative">
            <Link to="/resources" className={`${navMenuItemClasses} ${isActive('/resources') ? activeNavClass : ''}`}>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent text-lg p-0">Resources</NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent className="bg-white shadow-lg rounded-sm p-4 w-[300px] absolute left-1/2 -translate-x-1/2 mt-6">
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
    </div>
  );
};

export default DesktopNavigation;
