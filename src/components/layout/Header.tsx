
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
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`} style={{background: 'linear-gradient(to bottom, #004094 0%, #004094 55%, #e8f4ff 100%)'}}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-42">
            {/* Left Section - Location + Financing */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-white">
                <MapPin className="h-5 w-5 mr-2" />
                <div>
                  <div className="font-medium text-sm">Serving Dallas-Fort Worth</div>
                  <div className="text-xs text-blue-200">and Surrounding Areas</div>
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-2 border-white text-white hover:bg-blue-800 rounded-full px-6 py-2 font-medium mt-2"
                  >
                    FINANCING
                  </Button>
                </div>
              </div>
            </div>

            {/* Center - Logo */}
            <Link to="/" className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/3a34478a-6ec3-4ec8-b2ba-d58adf9728d6.png" 
                alt="Temp Kings Air Logo" 
                className="h-24 w-auto mb-2"
              />
              <div className="flex flex-col items-center">
                <div className="font-bold text-2xl text-white leading-tight">TEMP KINGS AIR</div>
                <div className="text-sm text-blue-200 leading-tight tracking-wide mt-1">HEATING AND AIR</div>
              </div>
            </Link>

            {/* Right Section - Emergency Info + Schedule Button */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-white">
                <Phone className="h-5 w-5 mr-2" />
                <div>
                  <div className="text-orange-400 font-medium text-sm">24/7 Emergency Services</div>
                  <div className="font-medium text-sm">
                    <a href="tel:(214) 555-0123" className="hover:text-hvac-yellow">
                      (214) 555-0123
                    </a>
                  </div>
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-2 border-white text-white hover:bg-teal-600 rounded-full px-6 py-2 font-medium mt-2"
                  >
                    SCHEDULE NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Bar */}
          <div>
            <nav className="flex items-center justify-center space-x-12 py-4">
              <Link
                to="/services/heating"
                className="text-white hover:text-hvac-yellow font-bold text-sm tracking-wide transition-colors"
              >
                HEATING
              </Link>
              <Link
                to="/services/cooling"
                className="text-white hover:text-hvac-yellow font-bold text-sm tracking-wide transition-colors"
              >
                COOLING
              </Link>
              <Link
                to="/services/maintenance"
                className="text-white hover:text-hvac-yellow font-bold text-sm tracking-wide transition-colors"
              >
                MAINTENANCE PLAN
              </Link>
              
              <div className="relative group">
                <button className="flex items-center text-white hover:text-hvac-yellow font-bold text-sm tracking-wide transition-colors">
                  SPECIALS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      to="/specials/current"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-hvac-red transition-colors"
                    >
                      Current Offers
                    </Link>
                    <Link
                      to="/specials/financing"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-hvac-red transition-colors"
                    >
                      Financing Options
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/areas"
                className="text-white hover:text-hvac-yellow font-bold text-sm tracking-wide transition-colors"
              >
                SERVICE AREA
              </Link>
              
              <div className="relative group">
                <button className="flex items-center text-white hover:text-hvac-yellow font-bold text-sm tracking-wide transition-colors">
                  ABOUT
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-hvac-red transition-colors"
                    >
                      Our Company
                    </Link>
                    <Link
                      to="/reviews"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-hvac-red transition-colors"
                    >
                      Reviews
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="text-white hover:text-hvac-yellow font-bold text-sm tracking-wide transition-colors"
              >
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
