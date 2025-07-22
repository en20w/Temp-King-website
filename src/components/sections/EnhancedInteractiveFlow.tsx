
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Clock, CheckCircle, ArrowRight, Calendar, MapPin, Star, Zap } from 'lucide-react';

const EnhancedInteractiveFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    { id: 'service', title: 'Choose Service', description: 'What do you need help with?' },
    { id: 'time', title: 'Select Time', description: 'When works best for you?' },
    { id: 'confirm', title: 'Confirm Booking', description: 'Ready to schedule!' }
  ];

  const services = [
    { 
      id: 'emergency', 
      name: 'Emergency Repair', 
      icon: Zap,
      time: '30 mins response', 
      price: 'Starting at $89',
      urgency: 'urgent',
      description: 'Immediate response for heating/cooling failures'
    },
    { 
      id: 'maintenance', 
      name: 'Maintenance Service', 
      icon: Clock,
      time: '2-4 hours', 
      price: 'Starting at $149',
      urgency: 'normal',
      description: 'Regular tune-ups and system checks'
    },
    { 
      id: 'installation', 
      name: 'New Installation', 
      icon: CheckCircle,
      time: 'Same/next day', 
      price: 'Free estimate',
      urgency: 'scheduled',
      description: 'Complete system installation and setup'
    }
  ];

  const timeSlots = [
    { time: '9:00 AM', available: true, popular: false },
    { time: '11:00 AM', available: true, popular: true },
    { time: '2:00 PM', available: true, popular: false },
    { time: '4:00 PM', available: false, popular: false },
    { time: '6:00 PM', available: true, popular: false }
  ];

  const handleStepTransition = (newStep: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(newStep);
      setIsAnimating(false);
    }, 300);
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setTimeout(() => handleStepTransition(1), 500);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setTimeout(() => handleStepTransition(2), 500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div 
                  className={`relative w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                    currentStep >= index 
                      ? 'bg-hvac-yellow border-hvac-yellow text-black' 
                      : 'border-white/50 text-white/50'
                  } ${currentStep === index ? 'scale-110 animate-pulse-glow' : ''}`}
                >
                  {currentStep > index ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <span className="font-bold">{index + 1}</span>
                  )}
                </div>
                <div className="mt-2 text-center">
                  <div className="text-sm font-semibold text-white">{step.title}</div>
                  <div className="text-xs text-white/70">{step.description}</div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className={`h-5 w-5 mx-6 transition-colors duration-300 ${
                  currentStep > index ? 'text-hvac-yellow' : 'text-white/30'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Content */}
      <div className={`bg-white/10 backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 ${
        isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      }`}>
        
        {/* Step 1: Service Selection */}
        {currentStep === 0 && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">What service do you need?</h3>
              <p className="text-white/80 text-lg">Choose the option that best describes your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className={`group relative cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                      transition-all duration-300 transform hover:-translate-y-2 hover:scale-105
                      ${service.urgency === 'urgent' ? 'ring-2 ring-red-400 animate-pulse-glow' : ''}
                      ${selectedService === service.id ? 'ring-4 ring-hvac-yellow' : ''}`}
                  >
                    {service.urgency === 'urgent' && (
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-bounce">
                        URGENT
                      </div>
                    )}
                    
                    <div className="text-center">
                      <div className="bg-hvac-red text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-hvac-yellow group-hover:text-black transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h4>
                      <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                      <p className="text-gray-500 text-sm mb-4">Response time: {service.time}</p>
                      
                      <div className="bg-hvac-yellow text-black px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-hvac-red group-hover:text-white transition-colors duration-300">
                        {service.price}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Time Selection */}
        {currentStep === 1 && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">When would you like service?</h3>
              <p className="text-white/80 text-lg">Select your preferred time slot</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {timeSlots.map((slot, index) => (
                <div
                  key={index}
                  onClick={() => slot.available && handleTimeSelect(slot.time)}
                  className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer text-center
                    ${slot.available 
                      ? 'bg-white border-white hover:bg-hvac-yellow hover:border-hvac-yellow text-gray-900 hover:text-black hover:scale-105' 
                      : 'bg-gray-500 border-gray-500 text-gray-300 cursor-not-allowed opacity-50'
                    }
                    ${slot.popular ? 'ring-4 ring-hvac-yellow shadow-lg' : ''}
                    ${selectedTime === slot.time ? 'ring-4 ring-green-400 bg-green-100' : ''}`}
                >
                  {slot.popular && (
                    <div className="absolute -top-2 -right-2 bg-hvac-yellow text-black text-xs px-2 py-1 rounded-full font-bold flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex flex-col items-center">
                    <Clock className="h-6 w-6 mb-2" />
                    <span className="font-bold text-lg">{slot.time}</span>
                    <span className="text-sm mt-1">
                      {slot.available ? 'Available' : 'Booked'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center text-white/80">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Today, {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {currentStep === 2 && (
          <div className="space-y-8 text-center">
            <div className="animate-scale-in">
              <div className="bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle className="h-12 w-12" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Perfect! You're all set!</h3>
              <p className="text-white/80 text-lg mb-8">Here's your appointment summary:</p>
            </div>

            <div className="bg-white rounded-2xl p-6 max-w-md mx-auto shadow-xl">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Service:</span>
                  <span className="font-bold text-gray-900">
                    {services.find(s => s.id === selectedService)?.name}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Time:</span>
                  <span className="font-bold text-gray-900">{selectedTime} Today</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Response:</span>
                  <span className="font-bold text-green-600">Within 30 minutes</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 font-medium">Status:</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    Confirmed
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-blue-800 text-sm">
                <strong>Next Steps:</strong> Call now to finalize your appointment, or we'll call you within 5 minutes to confirm details.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Button 
          size="lg" 
          className="bg-hvac-yellow text-black hover:bg-hvac-yellow/90 text-xl px-10 py-4 h-auto font-bold shadow-lg group hover:scale-105 transition-all duration-300"
        >
          <Phone className="mr-3 h-6 w-6 group-hover:animate-bounce" />
          Call (214) 555-0123
        </Button>
        
        {currentStep < 2 && (
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-hvac-red text-xl px-10 py-4 h-auto font-bold"
            onClick={() => setCurrentStep(0)}
          >
            Start Over
          </Button>
        )}
      </div>
    </div>
  );
};

export default EnhancedInteractiveFlow;
