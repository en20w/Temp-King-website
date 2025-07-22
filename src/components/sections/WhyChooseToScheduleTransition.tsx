
import React from 'react';
import { Phone, Wrench, Clock, Shield, Users, Zap, Settings, Wind } from 'lucide-react';

const WhyChooseToScheduleTransition = () => {
  return (
    <div className="relative -mt-8 pt-8 pb-8">
      {/* Diagonal Wave Transition */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 w-full h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="scheduleWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--background))', stopOpacity: 1 }} />
              <stop offset="30%" style={{ stopColor: 'hsl(var(--hvac-yellow))', stopOpacity: 0.3 }} />
              <stop offset="70%" style={{ stopColor: 'hsl(var(--hvac-red))', stopOpacity: 0.7 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--hvac-red))', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#scheduleWaveGradient)"
          />
        </svg>
      </div>

      {/* Flowing HVAC Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Icons flowing from left to right with animation */}
        <div className="animate-bounce-1 absolute top-8 left-[15%]" style={{ animationDelay: '0s' }}>
          <Phone className="h-8 w-8 text-hvac-yellow/40" />
        </div>
        <div className="animate-bounce-2 absolute top-12 left-[35%]" style={{ animationDelay: '1s' }}>
          <Clock className="h-10 w-10 text-white/50" />
        </div>
        <div className="animate-bounce-3 absolute top-6 left-[55%]" style={{ animationDelay: '2s' }}>
          <Shield className="h-9 w-9 text-hvac-yellow/60" />
        </div>
        <div className="animate-bounce-4 absolute top-10 right-[25%]" style={{ animationDelay: '3s' }}>
          <Users className="h-8 w-8 text-white/40" />
        </div>
        <div className="animate-bounce-1 absolute top-14 right-[10%]" style={{ animationDelay: '4s' }}>
          <Wrench className="h-7 w-7 text-hvac-yellow/50" />
        </div>

        {/* Secondary layer */}
        <div className="animate-bounce-2 absolute top-20 left-[25%]" style={{ animationDelay: '1.5s' }}>
          <Zap className="h-6 w-6 text-white/30" />
        </div>
        <div className="animate-bounce-3 absolute top-18 left-[45%]" style={{ animationDelay: '2.5s' }}>
          <Settings className="h-7 w-7 text-hvac-yellow/35" />
        </div>
        <div className="animate-bounce-4 absolute top-16 right-[15%]" style={{ animationDelay: '3.5s' }}>
          <Wind className="h-8 w-8 text-white/45" />
        </div>
      </div>

      {/* Gradient Overlay for smooth color transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hvac-red/20 to-hvac-red/80"></div>
    </div>
  );
};

export default WhyChooseToScheduleTransition;
