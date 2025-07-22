import React from 'react';
import { Wrench, Clock, Shield, Settings, Zap, Wind, Phone } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollUtils';

const CreativeScheduleTransition = () => {
  const handleScheduleClick = () => {
    scrollToSection('schedule-appointment');
  };

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-8 left-8 w-24 h-24 bg-hvac-yellow/10 rotate-45 animate-float"></div>
        <div className="absolute top-16 right-16 w-32 h-32 bg-hvac-red/10 rounded-full animate-bounce-1"></div>
        <div className="absolute bottom-8 left-1/4 w-20 h-20 bg-hvac-yellow/15 transform rotate-12 animate-bounce-2"></div>
        <div className="absolute bottom-16 right-1/3 w-28 h-28 bg-hvac-red/15 rounded-full animate-bounce-3"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100 to-hvac-red/5"></div>
      </div>

      {/* Flying Service Cards */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Emergency Card - slides in from left */}
          <div className="group animate-slide-in-left bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-hvac-red text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                <Zap className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Emergency Repair</h3>
            <p className="text-gray-600 text-center mb-4">24/7 immediate response</p>
            <div className="bg-hvac-red/10 text-hvac-red text-center py-2 rounded-lg font-semibold">
              Available Now
            </div>
          </div>

          {/* Maintenance Card - slides in from up */}
          <div className="group animate-slide-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center mb-4">
              <div className="bg-hvac-yellow text-black rounded-full w-16 h-16 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                <Settings className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Maintenance</h3>
            <p className="text-gray-600 text-center mb-4">Keep your system running smooth</p>
            <div className="bg-hvac-yellow/20 text-hvac-yellow text-center py-2 rounded-lg font-semibold">
              Same Day
            </div>
          </div>

          {/* Installation Card - slides in from right */}
          <div className="group animate-slide-in-right bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center mb-4">
              <div className="bg-hvac-red text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                <Wrench className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">New Installation</h3>
            <p className="text-gray-600 text-center mb-4">Complete system installation</p>
            <div className="bg-green-100 text-green-600 text-center py-2 rounded-lg font-semibold">
              Free Estimate
            </div>
          </div>
        </div>

        {/* Central Call-to-Action */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div 
            className="inline-flex items-center bg-hvac-yellow text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            onClick={handleScheduleClick}
          >
            <Phone className="mr-3 h-6 w-6 group-hover:animate-bounce" />
            Ready to Schedule? Let's Get Started!
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-4 left-1/4 animate-bounce-1" style={{ animationDelay: '1s' }}>
          <Clock className="h-8 w-8 text-hvac-yellow/40" />
        </div>
        <div className="absolute top-12 right-1/4 animate-bounce-2" style={{ animationDelay: '1.5s' }}>
          <Shield className="h-10 w-10 text-hvac-red/40" />
        </div>
        <div className="absolute bottom-8 left-1/3 animate-bounce-3" style={{ animationDelay: '2s' }}>
          <Wind className="h-9 w-9 text-hvac-yellow/40" />
        </div>
      </div>
    </div>
  );
};

export default CreativeScheduleTransition;
