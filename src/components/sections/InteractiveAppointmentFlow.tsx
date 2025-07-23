
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Clock, Shield, Users, Wrench, CheckCircle, ArrowRight, Calendar, MapPin } from 'lucide-react';

const InteractiveAppointmentFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedService, setSelectedService] = useState('');

  const steps = [
    { id: 'service', title: 'Choose Service', icon: Wrench, color: 'bg-hvac-yellow' },
    { id: 'time', title: 'Pick Time', icon: Clock, color: 'bg-blue-500' },
    { id: 'confirm', title: 'Confirm', icon: CheckCircle, color: 'bg-green-500' }
  ];

  const services = [
    { id: 'emergency', name: 'Emergency Repair', time: '30 mins', price: 'Starting at $89' },
    { id: 'maintenance', name: 'Maintenance', time: '2 hours', price: 'Starting at $149' },
    { id: 'installation', name: 'New Installation', time: 'Same day', price: 'Free estimate' }
  ];

  const timeSlots = [
    { time: '9:00 AM', available: true, nextAvailable: false },
    { time: '11:00 AM', available: true, nextAvailable: true },
    { time: '2:00 PM', available: true, nextAvailable: false },
    { time: '4:00 PM', available: false, nextAvailable: false }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Progress Indicator */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div 
                className={`relative ${step.color} ${activeStep >= index ? 'text-white' : 'text-black bg-gray-200'} 
                  rounded-full w-16 h-16 flex items-center justify-center transition-all duration-500 
                  ${activeStep === index ? 'scale-110 shadow-lg' : ''}`}
              >
                <step.icon className="h-8 w-8" />
                {activeStep > index && (
                  <div className="absolute inset-0 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                )}
              </div>
              <div className="ml-3">
                <div className="font-semibold text-white">{step.title}</div>
                <div className="text-red-100 text-sm">Step {index + 1}</div>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="h-6 w-6 text-white mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Content Area */}
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
        {/* Step 1: Choose Service */}
        {activeStep === 0 && (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">What service do you need?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => {
                    setSelectedService(service.id);
                    setActiveStep(1);
                  }}
                  className={`group cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                    transition-all duration-300 transform hover:-translate-y-2 hover:scale-105
                    ${selectedService === service.id ? 'ring-4 ring-hvac-yellow' : ''}`}
                >
                  <div className="text-center">
                    <div className="bg-hvac-red text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-hvac-yellow group-hover:text-black transition-colors duration-300">
                      <Wrench className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h4>
                    <p className="text-gray-600 mb-3">Available in {service.time}</p>
                    <div className="bg-hvac-yellow text-black px-4 py-2 rounded-full text-sm font-semibold">
                      {service.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Pick Time */}
        {activeStep === 1 && (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">When would you like service?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {timeSlots.map((slot, index) => (
                <div
                  key={index}
                  onClick={() => slot.available && setActiveStep(2)}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer
                    ${slot.available 
                      ? 'bg-white border-white hover:bg-hvac-yellow hover:border-hvac-yellow text-gray-900 hover:text-black' 
                      : 'bg-gray-500 border-gray-500 text-gray-300 cursor-not-allowed'
                    }
                    ${slot.nextAvailable ? 'ring-4 ring-hvac-yellow animate-pulse' : ''}`}
                >
                  <div className="flex items-center justify-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="font-semibold">{slot.time}</span>
                  </div>
                  {slot.nextAvailable && (
                    <div className="absolute -top-2 -right-2 bg-hvac-yellow text-black text-xs px-2 py-1 rounded-full font-bold">
                      Next Available
                    </div>
                  )}
                  {!slot.available && (
                    <div className="absolute inset-0 bg-gray-600/50 rounded-xl flex items-center justify-center">
                      <span className="text-sm font-medium">Booked</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center text-red-100">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Today, {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        )}

        {/* Step 3: Confirm */}
        {activeStep === 2 && (
          <div className="text-center">
            <div className="bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Almost There!</h3>
            <div className="bg-white rounded-2xl p-6 max-w-md mx-auto mb-6">
              <div className="space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-semibold">{services.find(s => s.id === selectedService)?.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-semibold">11:00 AM Today</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Response:</span>
                  <span className="font-semibold text-green-600">30 minutes</span>
                </div>
              </div>
            </div>
            <p className="text-red-100 mb-6">Call now to confirm your appointment, or we'll call you back within 5 minutes.</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          className="bg-hvac-yellow text-black hover:bg-hvac-yellow/90 text-xl px-10 py-4 h-auto font-bold shadow-lg group"
        >
          <Phone className="mr-3 h-6 w-6 group-hover:animate-bounce" />
          Call (626) 400-5300
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="border-2 border-white text-white hover:bg-white hover:text-hvac-red text-xl px-10 py-4 h-auto font-bold"
        >
          <Wrench className="mr-3 h-6 w-6" />
          Complete Online
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="flex flex-col items-center text-center">
          <div className="bg-hvac-yellow text-black rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <Clock className="h-8 w-8" />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">Same-Day Service</h4>
          <p className="text-red-100 text-sm">Available for urgent repairs</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-hvac-yellow text-black rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <Shield className="h-8 w-8" />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">100% Guarantee</h4>
          <p className="text-red-100 text-sm">Satisfaction guaranteed</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-hvac-yellow text-black rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <Users className="h-8 w-8" />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">Expert Technicians</h4>
          <p className="text-red-100 text-sm">NATE-certified professionals</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAppointmentFlow;
