
import React from 'react';
import { Snowflake, Flame, Wrench, Cog } from 'lucide-react';

const HeroToServicesTransition = () => {
  return (
    <div className="relative -mt-16 pt-16">
      {/* Diagonal Wave Transition */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-24 transform rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--hvac-red))', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: 'hsl(var(--hvac-yellow))', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--hvac-red))', stopOpacity: 0.4 }} />
            </linearGradient>
          </defs>
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>

      {/* Floating HVAC Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-float-1 absolute top-8 left-1/4 text-hvac-yellow/20">
          <Snowflake className="h-12 w-12" />
        </div>
        <div className="animate-float-2 absolute top-16 right-1/3 text-hvac-red/20">
          <Flame className="h-10 w-10" />
        </div>
        <div className="animate-float-3 absolute top-6 left-2/3 text-hvac-yellow/20">
          <Wrench className="h-8 w-8" />
        </div>
        <div className="animate-float-1 absolute top-20 right-1/4 text-hvac-red/20">
          <Cog className="h-14 w-14" />
        </div>
      </div>

      {/* Animated Section Header */}
      <div className="relative z-10 text-center pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Animated Stats Counter */}
          <div className="flex justify-center items-center mb-8 space-x-8">
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-hvac-red">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-hvac-yellow">24/7</div>
              <div className="text-sm text-gray-600">Emergency Service</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-hvac-red">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* Main Title with Gradient Effect */}
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <span className="bg-gradient-to-r from-hvac-red via-hvac-yellow to-hvac-red bg-clip-text text-transparent">
                Expert HVAC Solutions
              </span>
            </h2>
            
            {/* Animated underline */}
            <div className="relative mx-auto w-32 h-1 bg-gradient-to-r from-hvac-red to-hvac-yellow rounded-full animate-scale-in" style={{ animationDelay: '0.8s' }}></div>
          </div>

          {/* Engaging Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            From emergency repairs to complete installations, discover how our certified technicians 
            keep Dallas-Fort Worth comfortable year-round
          </p>

          {/* Scroll Indicator */}
          <div className="mt-12 animate-bounce">
            <div className="mx-auto w-6 h-10 border-2 border-hvac-red rounded-full flex justify-center">
              <div className="w-1 h-3 bg-hvac-red rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-gray-50/50 pointer-events-none"></div>
    </div>
  );
};

export default HeroToServicesTransition;
