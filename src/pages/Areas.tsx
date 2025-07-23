
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '@/utils/scrollUtils';

const Areas = () => {
  const handleScheduleClick = () => {
    scrollToSection('schedule-appointment');
  };

  const serviceAreas = [
    {
      city: 'Dallas',
      description: 'Comprehensive HVAC services throughout Dallas and surrounding neighborhoods',
      neighborhoods: ['Downtown Dallas', 'Deep Ellum', 'Uptown', 'Oak Cliff', 'Bishop Arts District'],
      response: '30 minutes'
    },
    {
      city: 'Fort Worth',
      description: 'Professional heating and cooling services for Fort Worth residents',
      neighborhoods: ['Downtown Fort Worth', 'Sundance Square', 'Cultural District', 'Stockyards', 'West 7th'],
      response: '45 minutes'
    },
    {
      city: 'Plano',
      description: 'Reliable HVAC repair and installation services in Plano',
      neighborhoods: ['West Plano', 'East Plano', 'Legacy West', 'Willow Bend', 'Plano Centre'],
      response: '25 minutes'
    },
    {
      city: 'Arlington',
      description: 'Expert HVAC services for Arlington homes and businesses',
      neighborhoods: ['Downtown Arlington', 'Pantego', 'Dalworthington Gardens', 'Entertainment District'],
      response: '35 minutes'
    },
    {
      city: 'Irving',
      description: 'Complete HVAC solutions for Irving area residents',
      neighborhoods: ['Las Colinas', 'Valley Ranch', 'Hackberry Creek', 'Cottonwood Valley'],
      response: '40 minutes'
    },
    {
      city: 'Garland',
      description: 'Trusted HVAC repair and maintenance services in Garland',
      neighborhoods: ['Downtown Garland', 'Firewheel', 'Sachse', 'Rowlett'],
      response: '30 minutes'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Our Service Areas</h1>
            <p className="text-xl mb-8 opacity-90">
              Proudly serving the Dallas-Fort Worth metroplex with professional HVAC services.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
              <div className="text-3xl font-bold">24/7 Service</div>
              <div className="text-sm opacity-90">Throughout DFW Area</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cities We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fast, reliable HVAC services across the Dallas-Fort Worth metroplex and surrounding areas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">{area.city}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Areas Served:</h4>
                    <ul className="space-y-1">
                      {area.neighborhoods.map((neighborhood, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {neighborhood}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-blue-600 mr-1" />
                      <span className="text-sm text-gray-600">Response: {area.response}</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={handleScheduleClick}
                    >
                      Schedule Service
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete DFW Coverage</h2>
            <div className="bg-gray-100 rounded-lg p-8 mb-8">
              <div className="text-6xl text-gray-400 mb-4">🗺️</div>
              <p className="text-lg text-gray-600 mb-4">
                Interactive service area map coming soon
              </p>
              <p className="text-gray-600">
                We proudly serve the entire Dallas-Fort Worth metroplex including all surrounding cities and neighborhoods.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1,000+</div>
                <div className="text-gray-600">Square Miles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">30 min</div>
                <div className="text-gray-600">Average Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Serving Your Area 24/7</h2>
          <p className="text-xl mb-8 opacity-90">
            No matter where you are in the DFW area, we're here when you need us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
              onClick={handleScheduleClick}
            >
              Schedule Service
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (626) 400-5300
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Areas;
