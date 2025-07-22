
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Star, Clock, Shield, Users, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'AC Repair',
      description: 'Fast and reliable air conditioning repair services',
      icon: '❄️',
      link: '/services/ac-repair'
    },
    {
      title: 'Heating Repair',
      description: 'Professional heating system repair and maintenance',
      icon: '🔥',
      link: '/services/heating-repair'
    },
    {
      title: 'Installation',
      description: 'Complete HVAC system installation services',
      icon: '🔧',
      link: '/services/installation'
    },
    {
      title: 'Maintenance',
      description: 'Regular maintenance to keep your system running efficiently',
      icon: '⚙️',
      link: '/services/maintenance'
    }
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Excellent service! They fixed our AC quickly and professionally.',
      location: 'Dallas, TX'
    },
    {
      name: 'Mike Rodriguez',
      rating: 5,
      comment: 'Very reliable company. Great communication and fair pricing.',
      location: 'Fort Worth, TX'
    },
    {
      name: 'Lisa Chen',
      rating: 5,
      comment: 'Professional technicians who know what they\'re doing.',
      location: 'Plano, TX'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hvac-red via-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-hvac-yellow text-hvac-yellow" />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold">4.9/5 Google Reviews</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Dallas-Fort Worth's
              <span className="block text-hvac-yellow">Trusted HVAC Experts</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Professional heating, cooling, and air quality services with 24/7 emergency support. 
              Same-day service available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-hvac-yellow text-black hover:bg-hvac-yellow/90 text-lg px-8 py-3 h-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (214) 555-0123
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-hvac-red text-lg px-8 py-3 h-auto"
              >
                Schedule Service Online
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                24/7 Emergency Service
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Licensed & Insured
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                10+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our HVAC Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive heating, cooling, and air quality solutions for your home or business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="outline" className="border-hvac-red text-hvac-red hover:bg-hvac-red hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/services">
              <Button className="bg-hvac-red hover:bg-hvac-red/90 text-white px-8">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HVAC ProService?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-hvac-red text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600">Available around the clock for urgent HVAC repairs and emergencies</p>
            </div>

            <div className="text-center">
              <div className="bg-hvac-yellow text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed technicians with comprehensive insurance coverage</p>
            </div>

            <div className="text-center">
              <div className="bg-hvac-red text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Highly trained professionals with years of HVAC experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex justify-center items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-hvac-yellow text-hvac-yellow" />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold">4.9/5 based on 500+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-hvac-yellow text-hvac-yellow" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.comment}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/reviews">
              <Button variant="outline" className="border-hvac-red text-hvac-red hover:bg-hvac-red hover:text-white">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hvac-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need HVAC Service Today?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Don't wait for your comfort to be compromised. Call now for same-day service!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-hvac-yellow text-black hover:bg-hvac-yellow/90 text-lg px-8 py-3 h-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (214) 555-0123
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-hvac-red text-lg px-8 py-3 h-auto"
            >
              Schedule Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
