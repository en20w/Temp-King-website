import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Snowflake, Flame, Wrench, Cog, ArrowRight, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const services = [{
    title: 'AC Repair',
    description: 'Fast and reliable air conditioning repair services',
    icon: Snowflake,
    link: '/services/ac-repair',
    gradient: 'from-blue-500 to-cyan-400',
    details: ['Emergency repairs available', 'Same-day service guarantee', 'All major brands serviced'],
    price: 'Starting at $89'
  }, {
    title: 'Heating Repair',
    description: 'Professional heating system repair and maintenance',
    icon: Flame,
    link: '/services/heating-repair',
    gradient: 'from-red-500 to-orange-400',
    details: ['Furnace repair & service', 'Heat pump maintenance', 'Boiler system repair'],
    price: 'Starting at $99'
  }, {
    title: 'Installation',
    description: 'Complete HVAC system installation services',
    icon: Wrench,
    link: '/services/installation',
    gradient: 'from-green-500 to-emerald-400',
    details: ['New system installations', 'Energy efficient upgrades', 'Complete system replacements'],
    price: 'Free estimates'
  }, {
    title: 'Maintenance',
    description: 'Regular maintenance to keep your system running efficiently',
    icon: Cog,
    link: '/services/maintenance',
    gradient: 'from-purple-500 to-violet-400',
    details: ['Annual tune-up services', 'Filter replacement programs', 'Preventive care plans'],
    price: 'Plans from $12/mo'
  }];
  return <section className="py-0 pb-16 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-hvac-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-hvac-yellow rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hexagonal Grid Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === index;
            return <div key={index} className={`relative transform transition-all duration-500 ${index % 2 === 1 ? 'lg:translate-y-12' : ''}`} onMouseEnter={() => setHoveredService(index)} onMouseLeave={() => setHoveredService(null)}>
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

                    {/* Floating Details Popup (positioned on left/right sides) */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-80 z-20 transition-all duration-500 ${index % 2 === 0 ? `right-full mr-6 ${isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 translate-x-4 pointer-events-none'}` : `left-full ml-6 ${isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 -translate-x-4 pointer-events-none'}`}`}>
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

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right Service?
            </h3>
            <p className="text-gray-600 mb-6">
              Our experts are standing by to help you find the perfect solution for your HVAC needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button className="bg-hvac-red hover:bg-hvac-red/90 text-white px-8">
                  View All Services
                </Button>
              </Link>
              <Button variant="outline" className="border-hvac-yellow text-hvac-yellow hover:bg-hvac-yellow hover:text-black">
                <Phone className="mr-2 h-4 w-4" />
                Call for Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;