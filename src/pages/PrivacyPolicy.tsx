import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Phone, Users, Lock, Eye, FileText, Calendar } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-border/50">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-12 h-12 text-primary mr-3" />
                <h1 className="text-5xl font-bold text-foreground">Privacy Policy</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-4">
                Your privacy and data protection are our top priorities
              </p>
              <div className="inline-flex items-center bg-card border border-border rounded-lg px-4 py-2 shadow-sm">
                <Calendar className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm text-muted-foreground">
                  <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <Card className="mb-12 shadow-lg border-border/50">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Temp Kings Air ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you interact with us through our website, text messaging, or other services.
                </p>
              </CardContent>
            </Card>

            {/* Main Sections Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-lg border-border/50 hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl">
                    <Eye className="w-6 h-6 text-primary mr-3" />
                    What We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Contact details such as your name, phone number, email, and address
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Service request information or appointment booking details
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Communication preferences and SMS opt-in/opt-out status
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Device information and IP address when you visit our website
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Photos or videos of your HVAC equipment (when provided for service purposes)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Payment information (processed securely through third-party providers)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-border/50 hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl">
                    <Users className="w-6 h-6 text-primary mr-3" />
                    How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      To schedule and confirm appointments
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      To send service updates, reminders, and promotional messages (with your consent)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      To respond to your questions or concerns
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      For internal business analytics and improvement
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      To process payments and maintain service records
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      To improve our website functionality and user experience
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      To comply with legal requirements and industry regulations
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-border/50 hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl">
                    <Phone className="w-6 h-6 text-primary mr-3" />
                    SMS and Texting Consent
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    When you provide your phone number, you consent to receive SMS messages from Temp Kings Air. Message frequency may vary. Message and data rates may apply. Text HELP for help or STOP to opt out.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-border/50 hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl">
                    <Lock className="w-6 h-6 text-primary mr-3" />
                    Data Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We take appropriate steps to protect your personal information using secure servers, access controls, and encryption where applicable. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Sections */}
            <div className="space-y-8">
              <Card className="shadow-lg border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Shield className="w-6 h-6 text-primary mr-3" />
                    Data Sharing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We do <strong>not</strong> sell, rent, or share your personal information with third parties for marketing purposes. Your information is used solely for providing HVAC services and communicating with you as a customer.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We may share limited information with trusted service providers who assist us in operating our business, such as payment processors, scheduling software providers, and communication platforms, but only to the extent necessary to provide our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Data Retention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information for as long as necessary to provide our services and as required by law. Service records are typically maintained for 7 years for warranty and tax purposes. You may request deletion of your information at any time, subject to legal requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Cookies and Website Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may use cookies and similar technologies to improve your browsing experience, remember your preferences, and analyze website traffic. You can control cookie settings through your browser, though some features may not function properly if cookies are disabled.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Your Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Access</h4>
                      <p className="text-sm text-muted-foreground">Request a copy of the personal information we have about you</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Correction</h4>
                      <p className="text-sm text-muted-foreground">Request correction of inaccurate or incomplete information</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Deletion</h4>
                      <p className="text-sm text-muted-foreground">Request deletion of your personal information (subject to legal requirements)</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Portability</h4>
                      <p className="text-sm text-muted-foreground">Request transfer of your data to another service provider</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-6 leading-relaxed">
                    To exercise these rights, contact us at info@tempkingsair.com or call (626) 400-5300.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">California Privacy Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of the sale of personal information. We do not sell personal information.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Updates to This Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The most current version will always be available on our website with the updated effective date. We will notify you of significant changes via email or SMS if you have opted in to receive communications.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="shadow-lg border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border/50">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold text-lg">Temp Kings Air</p>
                        <p className="text-sm text-muted-foreground">Professional HVAC Services</p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-primary mr-2" />
                        <span className="text-muted-foreground">(626) 400-5300</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 text-primary mr-2" />
                        <span className="text-muted-foreground">info@tempkingsair.com</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm bg-muted/50 p-3 rounded border-l-4 border-primary">
                      For privacy-related inquiries, please clearly mark your message as "Privacy Request" to ensure prompt handling.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* SMS Terms & Conditions */}
            <div className="mt-16">
              <div className="bg-gradient-to-r from-secondary/10 via-secondary/5 to-transparent border border-border/50 rounded-lg p-1 mb-8">
                <div className="bg-card rounded-lg p-8">
                  <div className="flex items-center justify-center mb-6">
                    <Phone className="w-12 h-12 text-secondary mr-3" />
                    <h1 className="text-4xl font-bold text-foreground">SMS Terms & Conditions</h1>
                  </div>
                  <p className="text-lg text-muted-foreground text-center leading-relaxed">
                    By opting into SMS from Temp Kings Air, you agree to receive text messages from us regarding your HVAC services, appointment updates, promotional offers, or service-related alerts.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="shadow-lg border-border/50 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">Message & Data Rates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Standard message and data rates may apply based on your mobile carrier plan.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-border/50 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">Opt-In</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      You can opt in by providing your phone number through our website, contact forms, or in-person communication.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-border/50 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">Opt-Out</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      You may opt out of SMS messages at any time by replying STOP. You may also reply HELP for assistance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-border/50 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      For any help or questions regarding SMS, email us at info@tempkingsair.com or call (626) 400-5300.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-border/50 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">Privacy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Your information is never sold or shared with third parties for marketing purposes. For full details, see our Privacy Policy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-border/50 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">Terms Changes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We may update these Terms periodically. Continued use of our services constitutes acceptance of the latest version.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;