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
    <>
      {/* Top Bar with Location and Phone */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Left side - Empty space for logo */}
            <div className="w-52"></div>

            {/* Middle - Location */}
            <div className="flex items-center">
              <div className="bg-yellow-400 rounded-full p-1.5 mr-1.5">
                <MapPin className="h-4 w-4 text-black" />
              </div>
              <span className="font-medium">Pasadena</span>
              <span className="mx-2 text-gray-400">|</span>
              <Link to="/locations" className="text-red-500 hover:underline text-sm font-medium">
                Change Location
              </Link>
            </div>

            {/* Right side - Phone */}
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-theme-blue mr-2" />
              <a href="tel:(626) 657-3200" className="text-2xl font-bold">
                (626) 657-3200
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Navigation and CTA */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end h-16">
            {/* Right-aligned navigation */}
            <nav className="hidden lg:flex items-center space-x-8 mr-4">
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

            {/* CTA Button */}
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 uppercase tracking-wide">
              BOOK NOW
            </Button>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden ml-4">
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
    </>
  );
};

export default Header;