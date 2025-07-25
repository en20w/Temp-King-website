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
      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 25%, #2563eb 50%, #1d4ed8 75%, #1e3a8a 100%)'
    }}>
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="flex items-center justify-between h-48">
            {/* Left Section - Location + Financing */}
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
            <Link to="/" className="flex flex-col items-center mt-2">
              <img src="/lovable-uploads/8e96ab51-028f-4f6d-b8f0-133dbd16a69d.png" alt="Temp Kings Air Logo" className="h-44 w-auto mb-2" />
              
            </Link>

            {/* Right Section - Emergency Info + Schedule Button */}
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

          {/* Navigation Bar - Positioned at bottom */}
          <div className="absolute bottom-2 left-8 right-8">
            <div className="flex items-center justify-between">
              {/* Left Navigation Group */}
              <div className="flex items-center space-x-6">
                <button onClick={() => scrollToSection('services-section')} className="text-white hover:text-blue-200 font-medium text-base transition-colors duration-200">
                  Services
                </button>
                <button onClick={() => scrollToSection('schedule-appointment')} className="text-white hover:text-blue-200 font-medium text-base transition-colors duration-200">
                  Schedule an Appointment
                </button>
              </div>
              
              {/* Right Navigation Group */}
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
      </header>
    </>;
};
export default Header;