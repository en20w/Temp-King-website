import React, { useState, useEffect } from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      background: 'linear-gradient(to bottom, #004094 0%, #004094 55%, #e8f4ff 100%)'
    }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-42">
            {/* Left Section - Location + Financing */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-white">
                <MapPin className="h-5 w-5 mr-2" />
                <div>
                  <div className="font-medium text-sm">Serving Greater Los Angeles</div>
                  <div className="text-xs text-blue-200">and Surrounding Areas</div>
                  
                </div>
              </div>
            </div>

            {/* Center - Logo */}
            <Link to="/" className="flex flex-col items-center">
              <img src="/lovable-uploads/3a34478a-6ec3-4ec8-b2ba-d58adf9728d6.png" alt="Temp Kings Air Logo" className="h-16 w-auto mb-2" />
              <div className="flex flex-col items-center">
                <div className="font-bold text-2xl text-white leading-tight">TEMP KINGS AIR</div>
                <div className="text-sm text-blue-200 leading-tight tracking-wide mt-1">Rule your comfort</div>
              </div>
            </Link>

            {/* Right Section - Emergency Info + Schedule Button */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-white">
                <Phone className="h-5 w-5 mr-2" />
                <div>
                  <div className="text-orange-400 font-medium text-sm">24/7 Emergency Services</div>
                  <div className="font-medium text-sm">
                    <a href="tel:626-400-5300" className="hover:text-hvac-yellow">
                      626-400-5300
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="border-t border-blue-400/30">
            <div className="flex items-center justify-center py-4 space-x-8">
              <button 
                onClick={() => {
                  const servicesSection = document.getElementById('services-section');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-white hover:text-blue-200 font-medium text-sm transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => {
                  const scheduleSection = document.getElementById('schedule-appointment');
                  if (scheduleSection) {
                    scheduleSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-white hover:text-blue-200 font-medium text-sm transition-colors duration-200"
              >
                Schedule an Appointment
              </button>
              <button 
                onClick={() => {
                  // Find the Hours of Operation section by looking for the heading text
                  const headings = document.querySelectorAll('h2, h3');
                  let hoursSection = null;
                  for (let heading of headings) {
                    if (heading.textContent?.includes('Hours of Operation')) {
                      hoursSection = heading.closest('section');
                      break;
                    }
                  }
                  if (hoursSection) {
                    hoursSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    // Fallback - scroll to bottom where hours section should be
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  }
                }}
                className="text-white hover:text-blue-200 font-medium text-sm transition-colors duration-200"
              >
                Hours of Operation
              </button>
              <button 
                onClick={() => {
                  // For now, just scroll to top since service areas info isn't on page yet
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-white hover:text-blue-200 font-medium text-sm transition-colors duration-200"
              >
                Service Areas
              </button>
            </div>
          </div>

        </div>
      </header>
    </>;
};
export default Header;