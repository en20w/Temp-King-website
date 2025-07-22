
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Clock, Shield, Users, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicesSection from '@/components/sections/ServicesSection';
import HeroToServicesTransition from '@/components/sections/HeroToServicesTransition';
import EnhancedWhyChooseUs from '@/components/sections/EnhancedWhyChooseUs';
import FloatingAnimations from '@/components/animations/FloatingAnimations';

const Home = () => {
  return (
    <div className="space-y-0">
      <FloatingAnimations />
      
      {/* Hero Section */}
      <section 
        className="h-[70vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{ backgroundImage: 'url(/lovable-uploads/625dc519-0486-4cf0-ad9d-f4dc78b88bb6.png)' }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Dallas-Fort Worth's
              <span className="block text-hvac-yellow">Trusted HVAC Experts</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Professional heating, cooling, and air quality services with 24/7 emergency support. 
              Same-day service available.
            </p>

            <div className="flex justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-hvac-yellow text-black hover:bg-hvac-yellow/90 text-lg px-8 py-3 h-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (214) 555-0123
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Transition */}
      <HeroToServicesTransition />

      {/* Services Section - Using updated component without header */}
      <ServicesSection />

      {/* Enhanced Why Choose Us Section */}
      <EnhancedWhyChooseUs />

      {/* Hours of Operation Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Hours of Operation
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              We're here when you need us most. Regular hours for routine service, 24/7 for emergencies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Regular Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-hvac-yellow rounded-full w-16 h-16 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Regular Service Hours</h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Monday - Friday</span>
                    <span className="text-gray-900 font-bold">7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Saturday</span>
                    <span className="text-gray-900 font-bold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-gray-700">Sunday</span>
                    <span className="text-gray-900 font-bold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Emergency Hours */}
              <div className="bg-hvac-red rounded-2xl p-8 shadow-lg text-white">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-hvac-yellow rounded-full w-16 h-16 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6">Emergency Service</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-4">24/7</div>
                  <p className="text-red-100 mb-4">Available every day of the year</p>
                  <p className="text-sm text-red-100">
                    Emergency services include heating failures, cooling system breakdowns, 
                    and urgent repairs that affect your comfort and safety.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                <strong>Need service outside regular hours?</strong> Call us anytime for emergency repairs!
              </p>
              <Button 
                size="lg" 
                className="bg-hvac-yellow text-black hover:bg-hvac-yellow/90 text-lg px-8 py-3 h-auto font-bold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (214) 555-0123
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Appointment Section */}
      <section className="py-16 bg-gradient-to-br from-hvac-red via-hvac-red to-red-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Schedule Your Appointment Today
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Don't wait for your HVAC problems to get worse. Book your service appointment now and get back to comfort.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="bg-hvac-yellow text-black rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Same-Day Service</h3>
                  <p className="text-red-100 text-sm">Available for urgent repairs</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-hvac-yellow text-black rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">100% Guarantee</h3>
                  <p className="text-red-100 text-sm">Satisfaction guaranteed</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-hvac-yellow text-black rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Expert Technicians</h3>
                  <p className="text-red-100 text-sm">NATE-certified professionals</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-hvac-yellow text-black hover:bg-hvac-yellow/90 text-xl px-10 py-4 h-auto font-bold shadow-lg"
              >
                <Phone className="mr-3 h-6 w-6" />
                Call (214) 555-0123
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-hvac-red text-xl px-10 py-4 h-auto font-bold"
              >
                <Wrench className="mr-3 h-6 w-6" />
                Schedule Online
              </Button>
            </div>

            <p className="text-red-100 mt-6 text-sm">
              Available 24/7 for emergency services • Free estimates on new installations
            </p>
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
