
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Clock, Award, Phone } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollUtils';

const About = () => {
  const handleScheduleClick = () => {
    scrollToSection('schedule-appointment');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Temp Kings Air</h1>
            <p className="text-xl mb-8 opacity-90">
              Your trusted HVAC partner in the Dallas-Fort Worth area, providing exceptional heating and cooling services since 2010.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
              onClick={handleScheduleClick}
            >
              Schedule Service Today
            </Button>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg text-gray-600">
                Founded with a mission to provide reliable, honest, and professional HVAC services to our community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Rule Your Comfort</h3>
                <p className="text-gray-600 mb-6">
                  At Temp Kings Air, we believe everyone deserves to be comfortable in their own home. 
                  Our team of certified technicians brings years of experience and a commitment to excellence 
                  to every job, whether it's a simple repair or a complete system installation.
                </p>
                <p className="text-gray-600 mb-6">
                  We serve the entire Dallas-Fort Worth metroplex with 24/7 emergency service, 
                  ensuring you're never left uncomfortable when you need us most.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span className="font-bold text-gray-900">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-1" />
                    <span className="font-bold text-gray-900">5,000+ Happy Customers</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/3a34478a-6ec3-4ec8-b2ba-d58adf9728d6.png" 
                  alt="Temp Kings Air Team" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Star, title: 'Excellence', desc: 'We strive for perfection in every service call' },
              { icon: Users, title: 'Integrity', desc: 'Honest, transparent pricing and recommendations' },
              { icon: Clock, title: 'Reliability', desc: 'On-time service and dependable solutions' },
              { icon: Award, title: 'Expertise', desc: 'Certified technicians with ongoing training' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Affiliations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain the highest industry standards through continuous training and certifications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Licensed HVAC Contractors',
              'NATE Certified Technicians',
              'EPA Certified for Refrigerants',
              'Better Business Bureau A+ Rating',
              'Manufacturer Authorized Dealers',
              'Insured & Bonded'
            ].map((cert, index) => (
              <div key={index} className="flex items-center justify-center bg-white rounded-lg p-6 shadow-md">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <span className="font-medium text-gray-900">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Temp Kings Air Difference</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust us with their comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
              onClick={handleScheduleClick}
            >
              Schedule Service
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
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

export default About;
