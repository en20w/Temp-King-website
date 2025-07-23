
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Phone } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollUtils';

const Reviews = () => {
  const handleScheduleClick = () => {
    scrollToSection('schedule-appointment');
  };

  const reviews = [
    {
      name: 'Sarah Johnson',
      location: 'Dallas, TX',
      rating: 5,
      date: '2 weeks ago',
      review: 'Excellent service! The technician arrived on time, diagnosed the problem quickly, and fixed our AC the same day. Very professional and reasonably priced.',
      service: 'AC Repair'
    },
    {
      name: 'Mike Rodriguez',
      location: 'Fort Worth, TX',
      rating: 5,
      date: '1 month ago',
      review: 'Had a heating emergency in the middle of winter. They came out within 2 hours and had us warm again. Highly recommend!',
      service: 'Emergency Heating Repair'
    },
    {
      name: 'Emily Chen',
      location: 'Plano, TX',
      rating: 5,
      date: '3 weeks ago',
      review: 'Professional installation of our new HVAC system. The crew was clean, efficient, and explained everything clearly. Great experience!',
      service: 'System Installation'
    },
    {
      name: 'David Thompson',
      location: 'Arlington, TX',
      rating: 5,
      date: '1 week ago',
      review: 'Been using their maintenance plan for 2 years now. My system runs perfectly and my energy bills have decreased significantly.',
      service: 'Maintenance Plan'
    },
    {
      name: 'Lisa Martinez',
      location: 'Irving, TX',
      rating: 5,
      date: '2 months ago',
      review: 'Outstanding customer service from start to finish. Fair pricing, quality work, and they stand behind their service. Will definitely use again.',
      service: 'AC Installation'
    },
    {
      name: 'Robert Wilson',
      location: 'Garland, TX',
      rating: 5,
      date: '3 weeks ago',
      review: 'Fast, reliable service. The technician was knowledgeable and took time to explain what was wrong and how to prevent future issues.',
      service: 'Heating Repair'
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {renderStars(5)}
            </div>
            <h1 className="text-5xl font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl mb-8 opacity-90">
              See what our satisfied customers are saying about our HVAC services.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-sm opacity-90">Based on 500+ Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real reviews from real customers who trust Temp Kings Air with their comfort.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {renderStars(review.rating)}
                    </div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                  
                  <div className="mb-4">
                    <Quote className="h-6 w-6 text-gray-300 mb-2" />
                    <p className="text-gray-700 leading-relaxed">{review.review}</p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-gray-900">{review.name}</div>
                        <div className="text-sm text-gray-600">{review.location}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-blue-600">{review.service}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Review Statistics</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Total Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">98%</div>
              <div className="text-gray-600">5-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Recommend Us</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Service?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied customers who trust us with their comfort.
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

export default Reviews;
