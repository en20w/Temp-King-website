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
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (isVisible) {
      // Animate counters
      const duration = 2000;
      const targets = {
        years: 10,
        customers: 500,
        satisfaction: 99
      };
      Object.keys(targets).forEach(key => {
        const target = targets[key as keyof typeof targets];
        const increment = target / (duration / 50);
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, 50);
      });
    }
  }, [isVisible]);
  const features = [{
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Available around the clock for urgent HVAC repairs and emergencies',
    metric: 'Response in 30 mins',
    color: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700'
  }, {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed technicians with comprehensive insurance coverage',
    metric: '100% Protected',
    color: 'bg-hvac-yellow',
    hoverColor: 'hover:bg-yellow-500'
  }, {
    icon: Wrench,
    title: 'Expert Technicians',
    description: 'Highly trained professionals with years of HVAC experience',
    metric: 'NATE Certified',
    color: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700'
  }];
  return <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-hvac-yellow rounded-full blur-3xl"></div>
      </div>

      
    </section>;
};
export default EnhancedWhyChooseUs;