import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '@/utils/scrollUtils';
const Footer = () => {
  const handleScheduleClick = () => {
    scrollToSection('schedule-appointment');
  };
  return <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/033eeacb-5dce-4d4c-a236-c77fa4146550.png" alt="Temp Kings Air Logo" className="h-16 w-auto" />
              <div>
                <div className="font-bold text-xl">Temp Kings Air</div>
                <div className="text-sm text-gray-400">Rule your comfort</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">Your trusted HVAC partner in Pasadena. We provide reliable heating, cooling, and air quality services with 24/7 emergency support.</p>
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-hvac-yellow text-hvac-yellow" />)}
              </div>
              <span className="text-sm text-gray-300">4.9/5 on Google Reviews</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-hvac-yellow">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/ac-repair" className="text-gray-300 hover:text-white transition-colors">AC Repair</Link></li>
              <li><Link to="/services/heating-repair" className="text-gray-300 hover:text-white transition-colors">Heating Repair</Link></li>
              <li><Link to="/services/installation" className="text-gray-300 hover:text-white transition-colors">Installation</Link></li>
              <li><Link to="/services/maintenance" className="text-gray-300 hover:text-white transition-colors">Maintenance</Link></li>
              <li><Link to="/services/air-quality" className="text-gray-300 hover:text-white transition-colors">Air Quality</Link></li>
              <li><Link to="/services/commercial" className="text-gray-300 hover:text-white transition-colors">Commercial HVAC</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-hvac-yellow">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/areas/pasadena" className="text-gray-300 hover:text-white transition-colors">Pasadena</Link></li>
              <li><Link to="/areas/los-angeles" className="text-gray-300 hover:text-white transition-colors">Los Angeles</Link></li>
              <li><Link to="/areas/glendale" className="text-gray-300 hover:text-white transition-colors">Glendale</Link></li>
              <li><Link to="/areas/burbank" className="text-gray-300 hover:text-white transition-colors">Burbank</Link></li>
              <li><Link to="/areas/altadena" className="text-gray-300 hover:text-white transition-colors">Altadena</Link></li>
              <li><Link to="/areas/san-marino" className="text-gray-300 hover:text-white transition-colors">San Marino</Link></li>
              <li><Link to="/areas/arcadia" className="text-gray-300 hover:text-white transition-colors">Arcadia</Link></li>
              <li><Link to="/areas/south-pasadena" className="text-gray-300 hover:text-white transition-colors">South Pasadena</Link></li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-hvac-yellow">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-hvac-red" />
                <a href="tel:(626) 400-5300" className="text-gray-300 hover:text-white transition-colors">
                  (626) 400-5300
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-hvac-red" />
                <span className="text-gray-300">License: 1135339</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-hvac-red mt-0.5" />
                <div className="text-gray-300">
                  <div>145 N Sierra Madre, #6</div>
                  <div>Pasadena, CA 91107</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-hvac-red" />
                <div className="text-gray-300">
                  <div>24/7 Emergency Service</div>
                  <div className="text-xs">Mon-Fri: 8AM-6PM</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <Button className="w-full bg-hvac-red hover:bg-hvac-red/90 text-white">
                <Phone className="mr-2 h-4 w-4" />
                Emergency Service
              </Button>
              <Button variant="outline" className="w-full border-hvac-yellow text-hvac-yellow hover:bg-hvac-yellow hover:text-black" onClick={handleScheduleClick}>
                Schedule Service
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-2 md:mb-0">
              ©2025 TempKingsAir. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              
              
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;