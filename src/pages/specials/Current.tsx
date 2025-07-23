
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Phone, CheckCircle } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollUtils';

const Current = () => {
  const handleScheduleClick = () => {
    scrollToSection('schedule-appointment');
  };

  const currentOffers = [
    {
      title: '$50 OFF AC Repair',
      description: 'Save $50 on any air conditioning repair service',
      terms: 'Valid for repairs over $150. Cannot be combined with other offers.',
      expires: 'March 31, 2024',
      code: 'COOL50',
      popular: true
    },
    {
      title: 'Free System Diagnostic',
      description: 'Comprehensive HVAC system inspection and diagnosis',
      terms: 'With any service call. $85 value.',
      expires: 'March 31, 2024',
      code: 'FREEDIAG',
      popular: false
    },
    {
      title: '$100 OFF New Installation',
      description: 'Save $100 on complete HVAC system installation',
      terms: 'Valid for new system installations only. Minimum purchase required.',
      expires: 'April 30, 2024',
      code: 'INSTALL100',
      popular: true
    },
    {
      title: 'Maintenance Plan Special',
      description: 'First month FREE on any maintenance plan',
      terms: 'New customers only. Must sign up for annual plan.',
      expires: 'March 31, 2024',
      code: 'MAINTAIN1',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Star className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Current Special Offers</h1>
            <p className="text-xl mb-8 opacity-90">
              Save money on professional HVAC services with our limited-time offers.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
              <div className="text-3xl font-bold">Limited Time</div>
              <div className="text-sm opacity-90">Don't Miss Out!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take advantage of these exclusive savings on our professional HVAC services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {currentOffers.map((offer, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow relative ${offer.popular ? 'border-orange-500 border-2' : ''}`}>
                {offer.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                    <p className="text-gray-600">{offer.description}</p>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-600 mb-1">Promo Code</div>
                      <div className="text-2xl font-bold text-gray-900 bg-white px-4 py-2 rounded border-2 border-dashed border-orange-300">
                        {offer.code}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">{offer.terms}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-red-500 mr-2" />
                      <span className="text-sm text-gray-700">Expires: {offer.expires}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button 
                      className="flex-1 bg-orange-600 hover:bg-orange-700"
                      onClick={handleScheduleClick}
                    >
                      Schedule Service
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms & Conditions</h2>
            <div className="prose prose-gray max-w-none">
              <ul className="space-y-2 text-gray-600">
                <li>• Offers valid for residential customers only</li>
                <li>• Cannot be combined with other promotions or discounts</li>
                <li>• Must mention promo code when scheduling service</li>
                <li>• Offers subject to change without notice</li>
                <li>• Some restrictions may apply</li>
                <li>• Valid in our service area only</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Save?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait - these offers won't last forever!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3"
              onClick={handleScheduleClick}
            >
              Schedule Service Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3"
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

export default Current;
