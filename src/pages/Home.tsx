import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Clock, Shield, Users, Wrench, MapPin, Truck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicesSection from '@/components/sections/ServicesSection';
import HeroToServicesTransition from '@/components/sections/HeroToServicesTransition';
import EnhancedWhyChooseUs from '@/components/sections/EnhancedWhyChooseUs';
import CreativeScheduleTransition from '@/components/sections/CreativeScheduleTransition';
import EnhancedInteractiveFlow from '@/components/sections/EnhancedInteractiveFlow';
import FloatingAnimations from '@/components/animations/FloatingAnimations';
const Home = () => {
  return <div className="space-y-0">
      <FloatingAnimations />
      
      {/* Hero Section */}
      <section className="h-[70vh] bg-cover bg-center bg-no-repeat relative flex items-center" style={{
      backgroundImage: 'url(/lovable-uploads/625dc519-0486-4cf0-ad9d-f4dc78b88bb6.png)'
    }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Pasadena's
              <span className="block text-blue-400">Trusted HVAC Experts</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Professional heating, cooling, and air quality services with 24/7 emergency support. 
              Same-day service available.
            </p>

            <div className="flex justify-center pt-4">
              <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600 text-lg px-8 py-3 h-auto">
                <Phone className="mr-2 h-5 w-5" />
                Call (626) 400-5300
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
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float" style={{
          animationDelay: '3s'
        }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full blur-2xl animate-float" style={{
          animationDelay: '1.5s'
        }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Schedule Your Appointment
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              Experience our streamlined booking process. Choose your service, pick your time, and get back to comfort.
            </p>
          </div>
          
          <EnhancedInteractiveFlow />

          <div className="text-center mt-12 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <p className="text-blue-100 text-sm">
              Available 24/7 for emergency services
            </p>
          </div>
        </div>
      </section>

      {/* Hours of Operation Section */}
      <section id="hours-of-operation" className="py-16 bg-gradient-to-b from-gray-50 to-white">
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
                    <span className="font-semibold text-gray-700">Monday</span>
                    <span className="text-gray-900 font-bold">24 Hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Tuesday</span>
                    <span className="text-gray-900 font-bold">24 Hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Wednesday</span>
                    <span className="text-gray-900 font-bold">24 Hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Thursday</span>
                    <span className="text-gray-900 font-bold">24 Hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Friday</span>
                    <span className="text-gray-900 font-bold">24 Hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Saturday</span>
                    <span className="text-gray-900 font-bold">24 Hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-gray-700">Sunday</span>
                    <span className="text-gray-900 font-bold">24 Hours</span>
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
              <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600 text-lg px-8 py-3 h-auto font-bold">
                <Phone className="mr-2 h-5 w-5" />
                Call (626) 400-5300
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="service-areas" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-blue-300 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Service Areas
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Professional HVAC services throughout Pasadena and surrounding communities. 
              Fast response times and reliable service across the San Gabriel Valley.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {/* Pasadena */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="bg-gray-600/50 rounded-xl h-32 mb-4 flex items-center justify-center">
                <span className="text-white/60 text-sm">Photo Coming Soon</span>
              </div>
              <h3 className="text-lg font-bold text-center">Pasadena</h3>
            </div>

            {/* Los Angeles */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="bg-gray-600/50 rounded-xl h-32 mb-4 flex items-center justify-center">
                <span className="text-white/60 text-sm">Photo Coming Soon</span>
              </div>
              <h3 className="text-lg font-bold text-center">Los Angeles</h3>
            </div>

            {/* Glendale */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="bg-gray-600/50 rounded-xl h-32 mb-4 flex items-center justify-center">
                <span className="text-white/60 text-sm">Photo Coming Soon</span>
              </div>
              <h3 className="text-lg font-bold text-center">Glendale</h3>
            </div>

            {/* Burbank */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="bg-cover bg-center rounded-xl h-32 mb-4 flex items-end justify-center relative" style={{backgroundImage: 'url(/lovable-uploads/dee61e61-b71f-443e-9ecb-4203898a3c16.png)'}}>
                <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
              </div>
              <h3 className="text-lg font-bold text-center">Burbank</h3>
            </div>

            {/* Altadena */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.7s'}}>
              <div className="bg-gray-600/50 rounded-xl h-32 mb-4 flex items-center justify-center">
                <span className="text-white/60 text-sm">Photo Coming Soon</span>
              </div>
              <h3 className="text-lg font-bold text-center">Altadena</h3>
            </div>

            {/* San Marino */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="bg-gray-600/50 rounded-xl h-32 mb-4 flex items-center justify-center">
                <span className="text-white/60 text-sm">Photo Coming Soon</span>
              </div>
              <h3 className="text-lg font-bold text-center">San Marino</h3>
            </div>

            {/* Arcadia */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.9s'}}>
              <div className="bg-cover bg-center rounded-xl h-32 mb-4 flex items-end justify-center relative" style={{backgroundImage: 'url(/lovable-uploads/aafbe202-25c9-4e1c-a2ed-9ae6d9fe6230.png)'}}>
                <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
              </div>
              <h3 className="text-lg font-bold text-center">Arcadia</h3>
            </div>

            {/* South Pasadena */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{animationDelay: '1s'}}>
              <div className="bg-gray-600/50 rounded-xl h-32 mb-4 flex items-center justify-center">
                <span className="text-white/60 text-sm">Photo Coming Soon</span>
              </div>
              <h3 className="text-lg font-bold text-center">South Pasadena</h3>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in" style={{animationDelay: '1.1s'}}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Area?</h3>
              <p className="text-blue-100 mb-6">
                We're expanding our service coverage! Call us to check if we can serve your location. 
                We often provide service beyond our primary areas for the right customers.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3 h-auto font-bold">
                <Phone className="mr-2 h-5 w-5" />
                Call (626) 400-5300
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>;
};
export default Home;