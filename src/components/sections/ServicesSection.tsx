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
  return <section id="services-section" className="py-16 bg-gray-50 relative overflow-hidden">
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
                    <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                      {/* Category Badge */}
                      <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                        service.category === 'Residential' ? 'bg-blue-100 text-blue-700' :
                        service.category === 'Commercial' ? 'bg-slate-100 text-slate-700' :
                        'bg-teal-100 text-teal-700'
                      }`}>
                        {service.category}
                      </div>

                      {/* Icon with animated background */}
                      <div className={`relative mb-6 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transition-all duration-500 ${isHovered ? 'shadow-xl rotate-12' : ''}`}>
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        
                        {/* Animated ring */}
                        <div className={`absolute inset-0 rounded-full border-2 border-gray-300 transition-all duration-500 ${isHovered ? 'scale-125 border-opacity-50' : 'scale-100 border-opacity-20'}`} />
                      </div>

                      {/* Service Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p className={`text-gray-600 mb-4 transition-all duration-500 ${isHovered ? 'opacity-70' : 'opacity-100'}`}>
                        {service.description}
                      </p>

                      {/* Action Button */}
                      <div className={`transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-60'}`}>
                        <Link to={service.link}>
                          
                        </Link>
                      </div>
                    </div>

                    {/* Floating Details Popup (positioned based on column position) */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-80 z-20 transition-all duration-500 ${
                      index % 3 === 0 ? `left-full ml-6 ${isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 -translate-x-4 pointer-events-none'}` :
                      index % 3 === 2 ? `right-full mr-6 ${isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 translate-x-4 pointer-events-none'}` :
                      `left-full ml-6 ${isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 -translate-x-4 pointer-events-none'}`
                    }`}>
                      <div className="relative">
                        {/* Elegant backdrop with glass effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-15 rounded-2xl blur-sm`} />
                        <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl">
                          {/* Popup arrow */}
                          <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br ${service.gradient} rotate-45 opacity-80`} />
                          
                          {/* Service details with icons */}
                          <div className="space-y-3 mb-4">
                            {service.details.map((detail, detailIndex) => <div key={detailIndex} className="flex items-center text-sm text-gray-700">
                                <Star className="h-4 w-4 text-hvac-yellow mr-3 flex-shrink-0" />
                                <span className="font-medium">{detail}</span>
                              </div>)}
                          </div>
                          
                          {/* Enhanced pricing display */}
                          <div className="flex items-center justify-center pt-2">
                            <div className={`bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-full text-base font-bold shadow-lg`}>
                              {service.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating connection lines */}
                  {index < services.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-px bg-gradient-to-r from-gray-300 to-transparent opacity-30"></div>}
                </div>;
          })}
          </div>
        </div>

      </div>
    </section>;
};
export default ServicesSection;