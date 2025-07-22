
import React from 'react';
import { Snowflake, Flame, Wrench, Cog, Thermometer, Fan, Zap, Settings, Wind, Shield, Clock, Home } from 'lucide-react';

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

      {/* Enhanced Floating HVAC Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* First row of icons - spread across full width */}
        <div className="animate-bounce-1 absolute top-4 left-[8%]" style={{ animationDelay: '0s' }}>
          <Snowflake className="h-12 w-12 text-blue-400/30" />
        </div>
        <div className="animate-bounce-2 absolute top-8 left-[45%]" style={{ animationDelay: '2s' }}>
          <Thermometer className="h-10 w-10 text-slate-400/30" />
        </div>
        <div className="animate-bounce-3 absolute top-6 right-[10%]" style={{ animationDelay: '4s' }}>
          <Fan className="h-11 w-11 text-blue-300/30" />
        </div>

        {/* Second row of icons - better distribution */}
        <div className="animate-bounce-4 absolute top-16 left-[20%]" style={{ animationDelay: '1s' }}>
          <Flame className="h-10 w-10 text-red-500/30" />
        </div>
        <div className="animate-bounce-1 absolute top-20 right-[25%]" style={{ animationDelay: '3s' }}>
          <Zap className="h-9 w-9 text-yellow-400/30" />
        </div>
        <div className="animate-bounce-2 absolute top-14 right-[5%]" style={{ animationDelay: '5s' }}>
          <Wind className="h-8 w-8 text-cyan-300/30" />
        </div>

        {/* Third row of icons - even spread */}
        <div className="animate-bounce-3 absolute top-24 left-[5%]" style={{ animationDelay: '2.5s' }}>
          <Settings className="h-9 w-9 text-slate-400/30" />
        </div>
        <div className="animate-bounce-4 absolute top-22 left-[60%]" style={{ animationDelay: '4.5s' }}>
          <Wrench className="h-8 w-8 text-slate-400/30" />
        </div>
        <div className="animate-bounce-1 absolute top-28 right-[15%]" style={{ animationDelay: '1.5s' }}>
          <Shield className="h-10 w-10 text-green-400/30" />
        </div>

        {/* Fourth row of icons - full width coverage */}
        <div className="animate-bounce-2 absolute top-32 left-[30%]" style={{ animationDelay: '3.5s' }}>
          <Clock className="h-8 w-8 text-yellow-500/30" />
        </div>
        <div className="animate-bounce-3 absolute top-30 right-[8%]" style={{ animationDelay: '0.5s' }}>
          <Home className="h-9 w-9 text-gray-400/30" />
        </div>
        <div className="animate-bounce-4 absolute top-26 left-[75%]" style={{ animationDelay: '2.8s' }}>
          <Cog className="h-14 w-14 text-slate-400/30" />
        </div>
      </div>

      {/* Animated Section Header */}
      <div className="relative z-10 text-center pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Animated Stats Counter */}
          <div className="flex justify-center items-center mb-8 space-x-8">
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Emergency Service</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* Main Title with Gradient Effect */}
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
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
