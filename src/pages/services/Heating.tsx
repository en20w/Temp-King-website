
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Flame, Wrench, Clock, Phone, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '@/utils/scrollUtils';

const Heating = () => {
  const handleScheduleClick = () => {
    scrollToSection('schedule-appointment');
  };

  const services = [
    {
      title: 'Furnace Repair',
      description: 'Expert furnace repair services for all major brands',
      features: ['Same-day service', 'All major brands', 'Licensed technicians', 'Warranty included']
    },
    {
      title: 'Heat Pump Service',
      description: 'Comprehensive heat pump maintenance and repair',
      features: ['Energy efficient', 'Year-round comfort', 'Professional installation', 'Regular maintenance']
    },
    {
      title: 'Boiler Systems',
      description: 'Complete boiler installation and repair services',
      features: ['High efficiency', 'Reliable heating', 'Expert installation', 'Emergency repairs']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Flame className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Professional Heating Services</h1>
            <p className="text-xl mb-8 opacity-90">
              Keep your home warm and comfortable with our expert heating repair, installation, and maintenance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3"
                onClick={handleScheduleClick}
              >
                Schedule Service Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (626) 400-5300
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Heating Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to new installations, we provide comprehensive heating solutions for your home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Clock className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">24/7 Emergency Heating Service</h2>
          <p className="text-xl mb-8 opacity-90">
            Heating system breakdown? We're here to help, day or night.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3"
          >
            <Phone className="mr-2 h-5 w-5" />
            Emergency Service: (626) 400-5300
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Temp Kings Air?</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Star, title: 'Expert Technicians', desc: 'Licensed and certified heating professionals' },
              { icon: Clock, title: '24/7 Service', desc: 'Emergency repairs available around the clock' },
              { icon: CheckCircle, title: 'Quality Guarantee', desc: 'All work backed by our satisfaction guarantee' },
              { icon: Wrench, title: 'All Brands', desc: 'We service all major heating system brands' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heating;
