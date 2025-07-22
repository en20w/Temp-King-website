import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, MapPin, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { title: 'Services', href: '/services' },
    { title: 'Resources', href: '/resources' },
    { title: 'About Us', href: '/about' },
    { title: 'Areas We Service', href: '/service-areas' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Empty space for logo */}
            <div className="w-40"></div>

            {/* Location Selector */}
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-theme-blue" />
              <span className="font-medium ml-1">Pasadena</span>
              <Link to="/locations" className="ml-2 text-theme-blue hover:underline text-sm">
                Change Location
              </Link>
            </div>

            {/* Phone Number */}
            <div className="flex items-center">
              <div className="mr-2">
                <Phone className="h-5 w-5 text-theme-blue" />
              </div>
              <a href="tel:(214) 555-0123" className="text-xl font-bold">
                (214) 555-0123
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`bg-white border-b transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Empty Space */}
            <div className="w-40"></div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.title} className="relative">
                  <Link
                    to={item.href}
                    className="flex items-center text-gray-800 hover:text-theme-blue font-medium transition-colors py-4"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 uppercase tracking-wide">
                BOOK NOW
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <div key={item.title} className="space-y-2">
                      <Link
                        to={item.href}
                        className="block text-lg font-medium text-gray-900 hover:text-theme-blue"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t space-y-3">
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
      </header>
    </>
  );
};

export default Header;