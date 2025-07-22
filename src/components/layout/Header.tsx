import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { title: 'Services', href: '/services' },
    { title: 'Resources', href: '/resources' },
    { title: 'About Us', href: '/about' },
    { title: 'Areas We Service', href: '/service-areas' },
  ];

  return (
    <div className="border-b">
      {/* Main Header - Single Row */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Section - Location */}
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-theme-blue" />
            <span className="font-medium ml-1">Pasadena</span>
            <Link to="/locations" className="ml-2 text-theme-blue hover:underline text-sm">
              Change Location
            </Link>
          </div>

          {/* Center Section - Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="text-gray-800 hover:text-theme-blue font-medium transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right Section - Phone & CTA */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-theme-blue mr-2" />
              <a href="tel:(214) 555-0123" className="text-xl font-bold">
                (214) 555-0123
              </a>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 uppercase tracking-wide">
              BOOK NOW
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block text-lg font-medium text-gray-900 hover:text-theme-blue"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                  
                  <div className="pt-4 border-t">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;