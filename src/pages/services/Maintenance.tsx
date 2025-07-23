
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Cog, CheckCircle, Star, Phone, Calendar, DollarSign } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollUtils';

const Maintenance = () => {
  const handleScheduleClick = () => {
    scrollToSection('schedule-appointment');
  };

  const plans = [
    {
      title: 'Basic Plan',
      price: '$12/month',
      features: [
        'Annual system inspection',
        'Filter replacement reminders',
        'Priority scheduling',
        '10% discount on repairs'
      ]
    },
    {
      title: 'Premium Plan',
      price: '$24/month',
      features: [
        'Bi-annual system tune-ups',
        'Free filter replacements',
        'Priority emergency service',
        '20% discount on repairs',
        'Extended warranty coverage'
      ]
    },
    {
      title: 'Ultimate Plan',
      price: '$36/month',
      features: [
        'Quarterly system maintenance',
        'Free filter replacements',
        'Priority emergency service',
        '30% discount on repairs',
        'Extended warranty coverage',
        'Free annual duct cleaning'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-violet-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Cog className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">HVAC Maintenance Plans</h1>
            <p className="text-xl mb-8 opacity-90">
              Keep your HVAC system running efficiently year-round with our comprehensive maintenance plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
                onClick={handleScheduleClick}
              >
                Choose Your Plan
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (626) 400-5300
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Maintenance Plan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Regular maintenance extends your system's life, improves efficiency, and prevents costly breakdowns.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${index === 1 ? 'border-purple-600 border-2' : ''}`}>
                <CardContent className="p-6">
                  {index === 1 && (
                    <div className="bg-purple-600 text-white text-center py-2 px-4 rounded-lg mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-2">{plan.price}</div>
                    <div className="text-gray-600 text-sm">per month</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Select Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Regular Maintenance</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, title: 'Save Money', desc: 'Prevent costly repairs and reduce energy bills' },
              { icon: Calendar, title: 'Extend Lifespan', desc: 'Regular maintenance extends system life by years' },
              { icon: Star, title: 'Improved Efficiency', desc: 'Maintain peak performance and comfort' },
              { icon: CheckCircle, title: 'Warranty Protection', desc: 'Keep manufacturer warranties valid' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
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

export default Maintenance;
