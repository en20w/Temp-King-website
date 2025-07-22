import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Clock, Shield, Users, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicesSection from '@/components/sections/ServicesSection';
import HeroToServicesTransition from '@/components/sections/HeroToServicesTransition';
import EnhancedWhyChooseUs from '@/components/sections/EnhancedWhyChooseUs';
import CreativeScheduleTransition from '@/components/sections/CreativeScheduleTransition';
import EnhancedInteractiveFlow from '@/components/sections/EnhancedInteractiveFlow';
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
              <span className="block text-blue-400">Trusted HVAC Experts</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Professional heating, cooling, and air quality services with 24/7 emergency support. 
              Same-day service available.
            </p>

            <div className="flex justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-blue-500 text-white hover:bg-blue-600 text-lg px-8 py-3 h-auto"
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

      {/* Services Section */}
      <ServicesSection />

      {/* Enhanced Why Choose Us Section */}
      <EnhancedWhyChooseUs />

      {/* Creative Schedule Transition */}
      <CreativeScheduleTransition />

      {/* Enhanced Interactive Schedule Appointment Section */}
      <section id="schedule-appointment" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Schedule Your Appointment
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Experience our streamlined booking process. Choose your service, pick your time, and get back to comfort.
            </p>
          </div>
          
          <EnhancedInteractiveFlow />

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-blue-100 text-sm">
              Available 24/7 for emergency services • Free estimates on new installations
            </p>
          </div>
        </div>
      </section>

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
                  <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-white" />
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
              <div className="bg-blue-600 rounded-2xl p-8 shadow-lg text-white">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-blue-400 rounded-full w-16 h-16 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6">Emergency Service</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-4">24/7</div>
                  <p className="text-blue-100 mb-4">Available every day of the year</p>
                  <p className="text-sm text-blue-100">
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
                className="bg-blue-500 text-white hover:bg-blue-600 text-lg px-8 py-3 h-auto font-bold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (214) 555-0123
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need HVAC Service Today?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't wait for your comfort to be compromised. Call now for same-day service!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-500 text-white hover:bg-blue-600 text-lg px-8 py-3 h-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (214) 555-0123
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 h-auto"
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
