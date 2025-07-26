import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Snowflake, Flame, Wrench, Cog, Wind, Building2, ArrowRight, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const serviceCategories = {
    residential: [
      {
        title: 'AC Repair',
        description: 'Fast and reliable air conditioning repair services',
        icon: Snowflake,
        link: '/services/ac-repair',
        gradient: 'from-blue-500 to-cyan-400',
        details: ['Emergency repairs available', 'Same-day service guarantee', 'All major brands serviced'],
        price: 'Free estimate',
        category: 'Residential'
      },
      {
        title: 'Heating Repair',
        description: 'Professional heating system repair and maintenance',
        icon: Flame,
        link: '/services/heating-repair',
        gradient: 'from-red-500 to-orange-400',
        details: ['Furnace repair & service', 'Heat pump maintenance', 'Boiler system repair'],
        price: 'Free estimate',
        category: 'Residential'
      },
      {
        title: 'Installation',
        description: 'Complete HVAC system installation services',
        icon: Wrench,
        link: '/services/installation',
        gradient: 'from-green-500 to-emerald-400',
        details: ['New system installations', 'Energy efficient upgrades', 'Complete system replacements'],
        price: 'Free estimate',
        category: 'Residential'
      },
      {
        title: 'Maintenance',
        description: 'Regular maintenance to keep your system running efficiently',
        icon: Cog,
        link: '/services/maintenance',
        gradient: 'from-purple-500 to-violet-400',
        details: ['Annual tune-up services', 'Filter replacement programs', 'Preventive care plans'],
        price: 'Free estimate',
        category: 'Residential'
      }
    ],
    specialized: [
      {
        title: 'Air Quality',
        description: 'Improve your indoor air quality and health',
        icon: Wind,
        link: '/services/air-quality',
        gradient: 'from-teal-500 to-emerald-400',
        details: ['Duct cleaning services', 'Air purifier installation', 'Humidity control systems'],
        price: 'Free estimate',
        category: 'Specialized'
      },
      {
        title: 'Commercial HVAC',
        description: '24/7 commercial HVAC services for businesses',
        icon: Building2,
        link: '/services/commercial',
        gradient: 'from-slate-600 to-blue-600',
        details: ['24/7 emergency service', 'Maintenance contracts', 'Energy efficiency audits'],
        price: 'Free consultation',
        category: 'Commercial'
      }
    ]
  };

  const services = [...serviceCategories.residential, ...serviceCategories.specialized];
  return <section id="services-section" className="pt-16 pb-8 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-hvac-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-hvac-yellow rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Services We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional HVAC services for your home and business. From emergency repairs to complete installations, 
            we provide reliable solutions to keep you comfortable year-round.
          </p>
        </div>

        {/* Category Headers */}
        <div className="mb-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span className="text-lg font-semibold text-gray-700">Residential Services</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-slate-600 rounded-full"></div>
            <span className="text-lg font-semibold text-gray-700">Specialized & Commercial</span>
          </div>
        </div>

        {/* Hexagonal Grid Container */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === index;
            return <div key={index} className={`relative transform transition-all duration-500 ${index % 3 === 1 ? 'lg:translate-y-8' : index % 3 === 2 ? 'lg:translate-y-16' : ''}`} onMouseEnter={() => setHoveredService(index)} onMouseLeave={() => setHoveredService(null)}>
                  {/* Hexagonal Card Container */}
                  <div className="relative h-80">
                    {/* Hexagonal Background with clipPath */}
                    <div className={`absolute inset-0 bg-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${isHovered ? 'shadow-2xl shadow-gray-400/50' : 'shadow-lg'}`} style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                }}>
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 transition-opacity duration-500 ${isHovered ? 'opacity-20' : ''}`} />
                    </div>

                    {/* Content Container (not clipped) */}
                    <div className="relative h-full flex flex-col items-center justify-center p-6 text-center max-w-[85%] mx-auto">
                      {/* Category Badge */}
                      <div className={`absolute top-3 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                        service.category === 'Residential' ? 'bg-blue-100 text-blue-700' :
                        service.category === 'Commercial' ? 'bg-slate-100 text-slate-700' :
                        'bg-teal-100 text-teal-700'
                      }`}>
                        {service.category}
                      </div>

                      {/* Icon with animated background */}
                      <div className={`relative mb-4 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transition-all duration-500 ${isHovered ? 'shadow-xl rotate-12' : ''}`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        
                        {/* Animated ring */}
                        <div className={`absolute inset-0 rounded-full border-2 border-gray-300 transition-all duration-500 ${isHovered ? 'scale-125 border-opacity-50' : 'scale-100 border-opacity-20'}`} />
                      </div>

                      {/* Service Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p className={`text-sm text-gray-600 mb-3 transition-all duration-500 leading-relaxed max-w-[90%] h-10 ${isHovered ? 'opacity-70' : 'opacity-100'}`}>
                        {service.description}
                      </p>

                      {/* Action Button */}
                      <div className={`transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-60'}`}>
                        <Link to={service.link}>
                          
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>;
          })}
          </div>
        </div>

        {/* Free Consultation Box */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-8 rounded-2xl shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-blue-900/20"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Get Your Free Consultation Today
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Professional HVAC assessment with no obligation. We'll help you find the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (626) 225-4019
                </Button>
                <div className="text-white/90">
                  <span className="text-sm">Available 24/7 for emergencies</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>;
};
export default ServicesSection;