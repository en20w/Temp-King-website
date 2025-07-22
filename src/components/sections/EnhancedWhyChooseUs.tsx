
import React, { useState, useEffect, useRef } from 'react';
import { Clock, Shield, Wrench, Award, Users, TrendingUp } from 'lucide-react';

const EnhancedWhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    customers: 0,
    satisfaction: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate counters
      const duration = 2000;
      const targets = { years: 10, customers: 500, satisfaction: 99 };
      
      Object.keys(targets).forEach((key) => {
        const target = targets[key as keyof typeof targets];
        const increment = target / (duration / 50);
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 50);
      });
    }
  }, [isVisible]);

  const features = [
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Available around the clock for urgent HVAC repairs and emergencies',
      metric: 'Response in 30 mins',
      color: 'bg-hvac-red',
      hoverColor: 'hover:bg-red-600'
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed technicians with comprehensive insurance coverage',
      metric: '100% Protected',
      color: 'bg-hvac-yellow',
      hoverColor: 'hover:bg-yellow-500'
    },
    {
      icon: Wrench,
      title: 'Expert Technicians',
      description: 'Highly trained professionals with years of HVAC experience',
      metric: 'NATE Certified',
      color: 'bg-hvac-red',
      hoverColor: 'hover:bg-red-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-hvac-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-hvac-yellow rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose HVAC ProService?
          </h2>
          
          {/* Animated Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {counters.years}+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {counters.customers}+
              </div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {counters.satisfaction}%
              </div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                index === 1 ? 'md:-mt-6' : ''
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                animation: isVisible ? 'fade-in 0.6s ease-out forwards' : 'none'
              }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Animated Icon Container */}
                <div className={`${feature.color} ${feature.hoverColor} text-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <feature.icon className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-hvac-red transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Metric Badge */}
                <div className="inline-flex items-center bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-hvac-yellow group-hover:text-black transition-all duration-300">
                  <Award className="h-4 w-4 mr-2" />
                  {feature.metric}
                </div>

                {/* Progress Bar Animation */}
                <div className="mt-6">
                  <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                    <div 
                      className="h-full bg-hvac-red transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${index * 300 + 500}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-hvac-yellow rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-hvac-red rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Shield, text: 'BBB A+ Rating' },
            { icon: Users, text: 'Family Owned' },
            { icon: Award, text: 'Industry Leader' },
            { icon: TrendingUp, text: 'Proven Results' }
          ].map((indicator, index) => (
            <div 
              key={index}
              className="flex items-center justify-center bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <indicator.icon className="h-5 w-5 text-hvac-red mr-2" />
              <span className="text-sm font-medium text-gray-700">{indicator.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedWhyChooseUs;
