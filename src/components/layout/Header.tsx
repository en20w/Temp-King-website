
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, MapPin, Clock, ChevronDown } from 'lucide-react';
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
    {
      title: 'Services',
      href: '/services',
      submenu: [
        { title: 'AC Repair', href: '/services/ac-repair' },
        { title: 'Heating Repair', href: '/services/heating-repair' },
        { title: 'Installation', href: '/services/installation' },
        { title: 'Maintenance', href: '/services/maintenance' },
      ]
    },
    {
      title: 'Areas',
      href: '/areas',
      submenu: [
        { title: 'Dallas', href: '/areas/dallas' },
        { title: 'Fort Worth', href: '/areas/fort-worth' },
        { title: 'Plano', href: '/areas/plano' },
        { title: 'Arlington', href: '/areas/arlington' },
      ]
    },
    { title: 'About', href: '/about' },
    { title: 'Reviews', href: '/reviews' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Main Header */}
      <header className={`sticky top-0 z-50 bg-blue-900 border-b transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/3876ce9e-9680-4dd2-8a15-a07e4a1c4155.png" 
                alt="Temp Kings Air Logo" 
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <div className="font-bold text-xl text-white">Temp Kings Air</div>
                <div className="text-sm text-blue-200">Rule Your Comfort</div>
              </div>
            </Link>

            {/* Center - Navigation + Info */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Emergency Info */}
              <div className="flex items-center space-x-4 text-sm text-blue-200">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>24/7 Emergency</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Dallas-Fort Worth</span>
                </div>
              </div>
              
              {/* Navigation */}
              <nav className="flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <div key={item.title} className="relative group">
                    <Link
                      to={item.href}
                      className="flex items-center text-white hover:text-hvac-yellow font-medium transition-colors"
                    >
                      {item.title}
                      {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                    </Link>
                    
                    {item.submenu && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-hvac-red transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Right - Phone + CTA Buttons */}
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center gap-2 text-white text-sm">
                <Phone className="h-4 w-4" />
                <a href="tel:(214) 555-0123" className="font-semibold hover:text-hvac-yellow">
                  (214) 555-0123
                </a>
              </div>
              <Button className="hidden md:block bg-hvac-yellow text-black hover:bg-hvac-yellow/90">
                Book Service
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-blue-800">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    {/* Mobile Info */}
                    <div className="pb-4 border-b">
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="h-4 w-4" />
                        <a href="tel:(214) 555-0123" className="font-semibold">
                          (214) 555-0123
                        </a>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>24/7 Emergency Service</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>Serving Dallas-Fort Worth</span>
                      </div>
                    </div>

                    {navigationItems.map((item) => (
                      <div key={item.title} className="space-y-2">
                        <Link
                          to={item.href}
                          className="block text-lg font-medium text-gray-900 hover:text-hvac-red"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                        {item.submenu && (
                          <div className="ml-4 space-y-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.title}
                                to={subItem.href}
                                className="block text-gray-600 hover:text-hvac-red"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    
                    <div className="pt-4 border-t space-y-3">
                      <Button 
                        className="w-full bg-hvac-yellow text-black hover:bg-hvac-yellow/90"
                        onClick={() => setIsOpen(false)}
                      >
                        Book Service
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
