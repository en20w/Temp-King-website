import React, { useState, useEffect } from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '@/utils/scrollUtils';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <>
      {/* Main Header */}
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`} style={{
      background: 'linear-gradient(180deg, #1d4ed8 0%, #2563eb 25%, #3b82f6 50%, #60a5fa 75%, #93c5fd 100%)'
    }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Mobile: Logo between LA Area and Phone */}
            <div className="relative flex items-center py-9 px-2">
              <div className="flex items-center text-white flex-1">
                <MapPin className="h-4 w-4 mr-1" />
                <div>
                  <div className="font-medium text-sm">LA Area</div>
                </div>
              </div>
              
              <Link to="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <img src="/lovable-uploads/8e96ab51-028f-4f6d-b8f0-133dbd16a69d.png" alt="Temp Kings Air Logo" className="h-20 w-auto" />
              </Link>
              
              <div className="flex items-center text-white flex-1 justify-end">
                <Phone className="h-4 w-4 mr-1" />
                <div>
                  <div className="font-medium text-sm">
                    <a href="tel:626-400-5300" className="hover:text-hvac-yellow">
                      626-400-5300
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile: Navigation */}
            <div className="pb-1">
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <button onClick={() => scrollToSection('services-section')} className="text-white hover:text-blue-200 font-medium transition-colors duration-200 px-2">
                  Services
                </button>
                <button onClick={() => scrollToSection('schedule-appointment')} className="text-white hover:text-blue-200 font-medium transition-colors duration-200 px-2">
                  Schedule
                </button>
                <button onClick={() => scrollToSection('hours-of-operation')} className="text-white hover:text-blue-200 font-medium transition-colors duration-200 px-2">
                  Hours
                </button>
                <button onClick={() => scrollToSection('service-areas')} className="text-white hover:text-blue-200 font-medium transition-colors duration-200 px-2">
                  Areas
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block relative">
            <div className="flex items-center justify-between h-48">
              {/* Left Section - Location */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-white">
                  <MapPin className="h-5 w-5 mr-2" />
                  <div>
                    <div className="font-medium text-lg">Serving Greater Los Angeles</div>
                    <div className="text-base text-blue-200">and Surrounding Areas</div>
                  </div>
                </div>
              </div>

              {/* Center - Logo */}
              <Link to="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <img src="/lovable-uploads/8e96ab51-028f-4f6d-b8f0-133dbd16a69d.png" alt="Temp Kings Air Logo" className="h-44 w-auto" />
              </Link>

              {/* Right Section - Contact */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-white">
                  <Phone className="h-5 w-5 mr-2" />
                  <div>
                    <div className="text-orange-400 font-medium text-lg">Contact Us</div>
                    <div className="font-medium text-lg">
                      <a href="tel:626-400-5300" className="hover:text-hvac-yellow">
                        626-400-5300
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Bar */}
            <div className="absolute bottom-2 left-8 right-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <button onClick={() => scrollToSection('services-section')} className="text-white hover:text-blue-200 font-medium text-base transition-colors duration-200">
                    Services
                  </button>
                  <button onClick={() => scrollToSection('schedule-appointment')} className="text-white hover:text-blue-200 font-medium text-base transition-colors duration-200">
                    Schedule an Appointment
                  </button>
                </div>
                <div className="flex items-center space-x-6">
                  <button onClick={() => scrollToSection('hours-of-operation')} className="text-white hover:text-blue-200 font-medium text-base transition-colors duration-200">
                    Hours of Operation
                  </button>
                  <button onClick={() => scrollToSection('service-areas')} className="text-white hover:text-blue-200 font-medium text-base transition-colors duration-200">
                    Service Areas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>;
};
export default Header;