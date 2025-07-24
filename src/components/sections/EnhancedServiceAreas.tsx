import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Clock, Shield, MapPin, Truck, CheckCircle, Search, ChevronDown, ChevronUp } from 'lucide-react';

const serviceAreas = [
  {
    name: 'Pasadena',
    level: 'Premium',
    responseTime: '15-30 min',
    availability: 'Same-day service',
    zipCodes: ['91101', '91103', '91104', '91105', '91106', '91107'],
    landmarks: ['Old Town Pasadena', 'Rose Bowl', 'Caltech'],
    stats: 'Primary Coverage Area',
    expanded: false
  },
  {
    name: 'Los Angeles',
    level: 'Standard',
    responseTime: '30-45 min',
    availability: '24/7 emergency',
    zipCodes: ['90027', '90028', '90029', '90038', '90068', '90039'],
    landmarks: ['Hollywood', 'Griffith Observatory', 'Silver Lake'],
    stats: 'Extended Coverage Area',
    expanded: false
  },
  {
    name: 'Glendale',
    level: 'Premium',
    responseTime: '20-35 min',
    availability: 'Same-day service',
    zipCodes: ['91201', '91202', '91203', '91204', '91205', '91206'],
    landmarks: ['Americana at Brand', 'Forest Lawn', 'Verdugo Mountains'],
    stats: 'Full Service Area',
    expanded: false
  },
  {
    name: 'Burbank',
    level: 'Standard',
    responseTime: '25-40 min',
    availability: '24/7 emergency',
    zipCodes: ['91501', '91502', '91503', '91504', '91505', '91506'],
    landmarks: ['Warner Bros Studios', 'Bob Hope Airport', 'Media District'],
    stats: 'Full Service Area',
    expanded: false
  },
  {
    name: 'Altadena',
    level: 'Premium',
    responseTime: '15-25 min',
    availability: 'Same-day service',
    zipCodes: ['91001', '91003'],
    landmarks: ['Cobb Estate', 'Eaton Canyon', 'Angeles National Forest'],
    stats: 'Priority Service Area',
    expanded: false
  },
  {
    name: 'San Marino',
    level: 'Premium',
    responseTime: '20-30 min',
    availability: 'Same-day service',
    zipCodes: ['91108', '91118'],
    landmarks: ['Huntington Library', 'Lacy Park', 'San Marino High School'],
    stats: 'Full Service Area',
    expanded: false
  },
  {
    name: 'Arcadia',
    level: 'Standard',
    responseTime: '25-35 min',
    availability: 'Next-day service',
    zipCodes: ['91006', '91007'],
    landmarks: ['Santa Anita Park', 'Los Angeles County Arboretum', 'Westfield Mall'],
    stats: 'Extended Service Area',
    expanded: false
  },
  {
    name: 'South Pasadena',
    level: 'Premium',
    responseTime: '20-30 min',
    availability: 'Same-day service',
    zipCodes: ['91030', '91031'],
    landmarks: ['Mission West District', 'Garfield Park', 'South Pasadena High School'],
    stats: 'Full Service Area',
    expanded: false
  }
];

const EnhancedServiceAreas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCards, setExpandedCards] = useState<string[]>([]);

  const toggleCardExpansion = (areaName: string) => {
    setExpandedCards(prev => 
      prev.includes(areaName) 
        ? prev.filter(name => name !== areaName)
        : [...prev, areaName]
    );
  };

  const filteredAreas = serviceAreas.filter(area => 
    area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.zipCodes.some(zip => zip.includes(searchTerm))
  );

  const getBadgeVariant = (level: string) => {
    switch (level) {
      case 'Premium': return 'default';
      case 'Standard': return 'secondary';
      default: return 'outline';
    }
  };

  return (
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

        {/* Search and Coverage Calculator */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by city or zip code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {filteredAreas.map((area, index) => {
            const isExpanded = expandedCards.includes(area.name);
            return (
              <Card key={area.name} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-400 rounded-full w-12 h-12 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant={getBadgeVariant(area.level)} className="text-xs">
                      {area.level}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-center">{area.name}</h3>
                  
                  <div className="space-y-2 text-center mb-4">
                    <div className="flex items-center justify-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                      {area.stats}
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-blue-300" />
                      {area.responseTime} response
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <Truck className="h-4 w-4 mr-2 text-blue-300" />
                      {area.availability}
                    </div>
                  </div>

                  {/* Expandable Content */}
                  {isExpanded && (
                    <div className="animate-fade-in space-y-3 pt-3 border-t border-white/20">
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-blue-200">Zip Codes:</h4>
                        <div className="flex flex-wrap gap-1">
                          {area.zipCodes.map(zip => (
                            <span key={zip} className="text-xs bg-white/20 px-2 py-1 rounded">
                              {zip}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-blue-200">Key Landmarks:</h4>
                        <div className="text-xs text-blue-100">
                          {area.landmarks.join(' • ')}
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => toggleCardExpansion(area.name)}
                    className="w-full mt-4 pt-3 border-t border-white/20 flex items-center justify-center text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-1" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-1" />
                        View Details
                      </>
                    )}
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Coverage Guarantee */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-12 border border-white/20">
          <div className="text-center">
            <Shield className="h-12 w-12 text-blue-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Service Guarantee</h3>
            <p className="text-blue-100 mb-6">
              We guarantee professional service and customer satisfaction across all our service areas. 
              Our certified technicians arrive on time with fully stocked vehicles ready to solve your HVAC needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <CheckCircle className="h-8 w-8 text-green-300 mx-auto mb-2" />
                <div className="text-white font-semibold">Licensed & Insured</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Clock className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                <div className="text-white font-semibold">On-Time Guarantee</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Shield className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                <div className="text-white font-semibold">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in" style={{animationDelay: '1.2s'}}>
          <p className="text-blue-100 mb-6 text-lg">
            <strong>Don't see your area?</strong> Call us - we may still be able to help!
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 h-auto font-bold">
            <Phone className="mr-2 h-5 w-5" />
            Call (626) 400-5300
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServiceAreas;