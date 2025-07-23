
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreditCard, CheckCircle, Phone, DollarSign, Calendar } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollUtils';

const Financing = () => {
  const handleScheduleClick = () => {
    scrollToSection('schedule-appointment');
  };

  const financingOptions = [
    {
      title: '0% APR for 12 Months',
      description: 'No interest for qualifying purchases',
      terms: 'On approved credit. Minimum purchase of $1,000.',
      popular: true,
      features: ['No interest charges', 'Fixed monthly payments', 'Quick approval process']
    },
    {
      title: '6.99% APR for 60 Months',
      description: 'Low monthly payments for larger purchases',
      terms: 'On approved credit. Minimum purchase of $3,000.',
      popular: false,
      features: ['Extended payment terms', 'Competitive rates', 'Flexible payment options']
    },
    {
      title: 'Same-Day Approval',
      description: 'Get approved and start your project today',
      terms: 'Subject to credit approval. Terms vary.',
      popular: false,
      features: ['Instant online application', 'Same-day decisions', 'No prepayment penalties']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <CreditCard className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Financing Options</h1>
            <p className="text-xl mb-8 opacity-90">
              Make your HVAC investment affordable with our flexible financing solutions.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
              <div className="text-3xl font-bold">0% APR</div>
              <div className="text-sm opacity-90">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financing Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the financing option that works best for your budget and needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {financingOptions.map((option, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow relative ${option.popular ? 'border-green-500 border-2' : ''}`}>
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="text-sm text-green-700">{option.terms}</div>
                  </div>
                  
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={handleScheduleClick}
                  >
                    Apply Now
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Financing?</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, title: 'No Hidden Fees', desc: 'Transparent pricing with no surprise charges' },
              { icon: Calendar, title: 'Flexible Terms', desc: 'Choose payment terms that fit your budget' },
              { icon: CheckCircle, title: 'Quick Approval', desc: 'Fast online application and approval process' },
              { icon: CreditCard, title: 'Competitive Rates', desc: 'Industry-leading interest rates available' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Application Process</h2>
              <p className="text-gray-600">Get approved in minutes with our streamlined process</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Apply Online</h3>
                <p className="text-gray-600">Complete our secure online application in minutes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Get Approved</h3>
                <p className="text-gray-600">Receive an instant decision on your application</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Schedule Service</h3>
                <p className="text-gray-600">Book your HVAC service and start your project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Apply for financing today and get your HVAC project started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
              onClick={handleScheduleClick}
            >
              Apply for Financing
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

export default Financing;
