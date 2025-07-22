import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Star, Clock, Shield, Users, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'AC Repair',
      description: 'Fast and reliable air conditioning repair services',
      icon: '❄️',
      link: '/services/ac-repair'
    },
    {
      title: 'Heating Repair', 
      description: 'Professional heating system repair and maintenance',
      icon: '🔥',
      link: '/services/heating-repair'
    },
    {
      title: 'Installation',
      description: 'Complete HVAC system installation services',
      icon: '🔧',
      link: '/services/installation'
    },
    {
      title: 'Maintenance',
      description: 'Regular maintenance to keep your system running efficiently',
      icon: '⚙️',
      link: '/services/maintenance'
    }
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Excellent service! They fixed our AC quickly and professionally.',
      location: 'Dallas, TX'
    },
    {
      name: 'Mike Rodriguez',
      rating: 5,
      comment: 'Very reliable company. Great communication and fair pricing.',
      location: 'Fort Worth, TX'
    },
    {
      name: 'Lisa Chen',
      rating: 5,
      comment: 'Professional technicians who know what they\'re doing.',
      location: 'Plano, TX'
    }
  ];

  return (
    <div className="space-y-0">
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
        
        {/* Arrow-shaped bottom border with diagonal stripes */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <div className="relative w-full h-full">
            {/* Orange section with arrow shape */}
            <div 
              className="absolute inset-0 bg-orange-400"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
              }}
            ></div>
            {/* Diagonal white stripes */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                background: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 8px,
                  white 8px,
                  white 16px
                )`
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our HVAC Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive heating, cooling, and air quality solutions for your home or business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="outline" className="border-hvac-red text-hvac-red hover:bg-hvac-red hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/services">
              <Button className="bg-hvac-red hover:bg-hvac-red/90 text-white px-8">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HVAC ProService?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-hvac-red text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600">Available around the clock for urgent HVAC repairs and emergencies</p>
            </div>

            <div className="text-center">
              <div className="bg-hvac-yellow text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed technicians with comprehensive insurance coverage</p>
            </div>

            <div className="text-center">
              <div className="bg-hvac-red text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Highly trained professionals with years of HVAC experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex justify-center items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-hvac-yellow text-hvac-yellow" />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold">4.9/5 based on 500+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-hvac-yellow text-hvac-yellow" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.comment}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/reviews">
              <Button variant="outline" className="border-hvac-red text-hvac-red hover:bg-hvac-red hover:text-white">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proudly serving the Dallas-Fort Worth metroplex and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {['Dallas', 'Fort Worth', 'Plano', 'Frisco', 'McKinney', 'Allen', 'Richardson', 'Garland', 'Irving', 'Arlington', 'Grand Prairie', 'Mesquite'].map((city, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-gray-800">{city}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">Don't see your city? Call us - we may still be able to help!</p>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                24/7 Emergency HVAC Services
              </h2>
              <p className="text-xl text-gray-600">
                HVAC emergencies don't wait for business hours. Neither do we.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">When to Call for Emergency Service:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-hvac-red mr-2">•</span>
                    No heat during winter months
                  </li>
                  <li className="flex items-start">
                    <span className="text-hvac-red mr-2">•</span>
                    No cooling during extreme heat
                  </li>
                  <li className="flex items-start">
                    <span className="text-hvac-red mr-2">•</span>
                    Gas leaks or unusual odors
                  </li>
                  <li className="flex items-start">
                    <span className="text-hvac-red mr-2">•</span>
                    Electrical issues with HVAC system
                  </li>
                  <li className="flex items-start">
                    <span className="text-hvac-red mr-2">•</span>
                    Water leaks from unit
                  </li>
                  <li className="flex items-start">
                    <span className="text-hvac-red mr-2">•</span>
                    Unusual noises or burning smells
                  </li>
                </ul>
              </div>
              <div className="bg-hvac-red text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Emergency Hotline</h3>
                <p className="text-4xl font-bold text-hvac-yellow mb-4">(214) 555-0123</p>
                <p className="text-red-100 mb-6">Available 24/7, 365 days a year</p>
                <Button 
                  size="lg" 
                  className="bg-hvac-yellow text-black hover:bg-hvac-yellow/90 w-full"
                >
                  Call Now for Emergency Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about HVAC services and maintenance
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How often should I service my HVAC system?",
                answer: "We recommend annual maintenance - spring for AC and fall for heating systems."
              },
              {
                question: "What's included in a maintenance visit?",
                answer: "Filter replacement, system cleaning, inspection of all components, performance testing, and minor adjustments."
              },
              {
                question: "How do I know if I need a new HVAC system?",
                answer: "Signs include frequent repairs, high energy bills, uneven temperatures, and systems over 10-15 years old."
              },
              {
                question: "Do you offer financing options?",
                answer: "Yes, we offer flexible financing plans to make HVAC repairs and installations more affordable."
              },
              {
                question: "What brands do you service?",
                answer: "We service all major HVAC brands including Carrier, Trane, Lennox, Rheem, Goodman, and more."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About HVAC ProService
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  With over 10 years of experience serving the Dallas-Fort Worth area, HVAC ProService has built a reputation for reliability, quality, and exceptional customer service. Our team of certified technicians is committed to keeping your home comfortable year-round.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-hvac-red text-white p-2 rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">NATE-certified technicians</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-hvac-red text-white p-2 rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">Upfront, transparent pricing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-hvac-red text-white p-2 rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">100% satisfaction guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-hvac-red text-white p-2 rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">Same-day service available</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
                <p className="text-gray-600 mb-6">
                  "We treat every home like it's our own. That's why we offer a 100% satisfaction guarantee on all our work."
                </p>
                <div className="border-l-4 border-hvac-red pl-4">
                  <p className="italic text-gray-700 mb-2">
                    "Quality service, honest pricing, and your complete satisfaction - that's our commitment to you."
                  </p>
                  <p className="font-semibold text-gray-900">- Mike Johnson, Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Efficiency Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Energy Efficiency Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple ways to reduce your energy bills and extend your HVAC system's life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Change Your Filters",
                description: "Replace air filters every 1-3 months to maintain proper airflow and efficiency.",
                icon: "🔄"
              },
              {
                title: "Program Your Thermostat",
                description: "Set temperatures back 7-10 degrees when away to save up to 10% on energy bills.",
                icon: "🌡️"
              },
              {
                title: "Seal Air Leaks",
                description: "Check windows, doors, and ductwork for leaks that waste conditioned air.",
                icon: "🔒"
              },
              {
                title: "Regular Maintenance",
                description: "Annual tune-ups keep your system running efficiently and prevent costly repairs.",
                icon: "⚙️"
              },
              {
                title: "Upgrade Insulation",
                description: "Proper insulation reduces the workload on your HVAC system significantly.",
                icon: "🏠"
              },
              {
                title: "Use Ceiling Fans",
                description: "Ceiling fans can make you feel 3-4 degrees cooler, allowing higher thermostat settings.",
                icon: "💨"
              }
            ].map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Brands We Service
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our certified technicians are trained to work on all major HVAC brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['Carrier', 'Trane', 'Lennox', 'Rheem', 'Goodman', 'York', 'Amana', 'Bryant', 'Payne', 'Daikin', 'Mitsubishi', 'American Standard'].map((brand, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <span className="font-semibold text-gray-800">{brand}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">Don't see your brand? We service all major manufacturers - give us a call!</p>
          </div>
        </div>
      </section>

      {/* Seasonal Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seasonal HVAC Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Year-round advice to keep your system running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                season: "Spring",
                icon: "🌸",
                tips: ["Schedule AC tune-up", "Replace air filter", "Check outdoor unit", "Test thermostat"]
              },
              {
                season: "Summer",
                icon: "☀️",
                tips: ["Keep vents unobstructed", "Use ceiling fans", "Close blinds during day", "Change filter monthly"]
              },
              {
                season: "Fall",
                icon: "🍂",
                tips: ["Schedule heating tune-up", "Check insulation", "Clean around outdoor unit", "Test heating system"]
              },
              {
                season: "Winter",
                icon: "❄️",
                tips: ["Keep heat pumps clear", "Change filter regularly", "Check for drafts", "Monitor energy usage"]
              }
            ].map((season, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{season.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{season.season}</h3>
                  </div>
                  <ul className="space-y-2">
                    {season.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start text-sm text-gray-600">
                        <span className="text-hvac-red mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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
