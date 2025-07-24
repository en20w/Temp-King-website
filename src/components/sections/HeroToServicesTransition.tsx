import React from 'react';
import { Button } from '@/components/ui/button';
import { Snowflake, Flame, Wrench, Cog, Thermometer, Fan, Zap, Settings, Wind, Shield, Clock, Home, Phone } from 'lucide-react';
const HeroToServicesTransition = () => {
  return <div className="relative -mt-16 pt-16">
      {/* Diagonal Wave Transition */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-24 transform rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{
              stopColor: '#1e40af',
              stopOpacity: 0.9
            }} />
              <stop offset="25%" style={{
              stopColor: '#3b82f6',
              stopOpacity: 0.8
            }} />
              <stop offset="50%" style={{
              stopColor: '#60a5fa',
              stopOpacity: 0.7
            }} />
              <stop offset="75%" style={{
              stopColor: '#93c5fd',
              stopOpacity: 0.6
            }} />
              <stop offset="100%" style={{
              stopColor: '#dbeafe',
              stopOpacity: 0.5
            }} />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{
              stopColor: '#1e40af',
              stopOpacity: 0.3
            }} />
              <stop offset="100%" style={{
              stopColor: '#93c5fd',
              stopOpacity: 0.1
            }} />
            </linearGradient>
          </defs>
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="url(#waveGradient)" />
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="url(#waveGradient2)" transform="translate(0, -10)" />
        </svg>
      </div>

      {/* Enhanced Floating HVAC Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top area icons */}
        <div className="animate-bounce-1 absolute top-4 left-[8%]" style={{
        animationDelay: '0s'
      }}>
          <Snowflake className="h-12 w-12 text-blue-400/30" />
        </div>
        <div className="animate-bounce-2 absolute top-8 left-[45%]" style={{
        animationDelay: '2s'
      }}>
          <Thermometer className="h-10 w-10 text-slate-400/30" />
        </div>
        <div className="animate-bounce-3 absolute top-6 right-[10%]" style={{
        animationDelay: '4s'
      }}>
          <Fan className="h-11 w-11 text-blue-300/30" />
        </div>

        {/* Upper-middle area icons */}
        <div className="animate-bounce-4 absolute top-[25%] left-[15%]" style={{
        animationDelay: '1s'
      }}>
          <Flame className="h-10 w-10 text-red-500/30" />
        </div>
        <div className="animate-bounce-1 absolute top-[30%] right-[20%]" style={{
        animationDelay: '3s'
      }}>
          <Zap className="h-9 w-9 text-yellow-400/30" />
        </div>
        <div className="animate-bounce-2 absolute top-[20%] right-[5%]" style={{
        animationDelay: '5s'
      }}>
          <Wind className="h-8 w-8 text-cyan-300/30" />
        </div>

        {/* Middle area icons */}
        <div className="animate-bounce-3 absolute top-[50%] left-[5%]" style={{
        animationDelay: '2.5s'
      }}>
          <Settings className="h-9 w-9 text-slate-400/30" />
        </div>
        <div className="animate-bounce-4 absolute top-[45%] left-[60%]" style={{
        animationDelay: '4.5s'
      }}>
          <Wrench className="h-8 w-8 text-slate-400/30" />
        </div>
        <div className="animate-bounce-1 absolute top-[55%] right-[15%]" style={{
        animationDelay: '1.5s'
      }}>
          <Shield className="h-10 w-10 text-green-400/30" />
        </div>

        {/* Lower-middle area icons */}
        <div className="animate-bounce-2 absolute top-[70%] left-[30%]" style={{
        animationDelay: '3.5s'
      }}>
          <Clock className="h-8 w-8 text-yellow-500/30" />
        </div>
        <div className="animate-bounce-3 absolute top-[75%] right-[8%]" style={{
        animationDelay: '0.5s'
      }}>
          <Home className="h-9 w-9 text-gray-400/30" />
        </div>
        <div className="animate-bounce-4 absolute top-[65%] left-[75%]" style={{
        animationDelay: '2.8s'
      }}>
          <Cog className="h-14 w-14 text-slate-400/30" />
        </div>

        {/* Bottom area icons */}
        <div className="animate-bounce-1 absolute bottom-4 left-[12%]" style={{
        animationDelay: '1.8s'
      }}>
          <Snowflake className="h-10 w-10 text-blue-300/30" />
        </div>
        <div className="animate-bounce-2 absolute bottom-8 left-[50%]" style={{
        animationDelay: '3.8s'
      }}>
          <Flame className="h-9 w-9 text-red-400/30" />
        </div>
        <div className="animate-bounce-3 absolute bottom-6 right-[12%]" style={{
        animationDelay: '5.2s'
      }}>
          <Thermometer className="h-8 w-8 text-slate-300/30" />
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
            <div className="text-center animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Emergency Service</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* Main Title with Gradient Effect */}
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                Expert HVAC Solutions
              </span>
            </h2>
            
            {/* Animated underline */}
            <div className="relative mx-auto w-32 h-1 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 rounded-full animate-scale-in shadow-lg shadow-blue-500/50" style={{
            animationDelay: '0.8s'
          }}></div>
          </div>

          {/* Engaging Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{
          animationDelay: '1s'
        }}>From emergency repairs to complete installations, discover how our certified technicians keep Pasadena comfortable year-round</p>

          {/* CTA Section */}
          <div className="mt-12 animate-fade-in" style={{
          animationDelay: '1.2s'
        }}>
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help Choosing the Right Service?
              </h3>
              <p className="text-gray-600 mb-6">
                Our experts are standing by to help you find the perfect solution for your HVAC needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8"
                  onClick={() => {
                    const servicesSection = document.getElementById('services-section');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View All Services
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  Call for Free Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 animate-bounce">
            <div className="mx-auto w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-blue-50/70 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-600/5 pointer-events-none"></div>
    </div>;
};
export default HeroToServicesTransition;