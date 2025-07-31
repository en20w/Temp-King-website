import React from 'react';
import Layout from '../components/layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>

            <p className="text-muted-foreground mb-8">
              Temp Kings Air ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you interact with us through our website, text messaging, or other services.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">What We Collect:</h2>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Contact details such as your name, phone number, email, and address</li>
                <li>Service request information or appointment booking details</li>
                <li>Communication preferences and SMS opt-in/opt-out status</li>
                <li>Device information and IP address when you visit our website</li>
                <li>Photos or videos of your HVAC equipment (when provided for service purposes)</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information:</h2>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>To schedule and confirm appointments</li>
                <li>To send service updates, reminders, and promotional messages (with your consent)</li>
                <li>To respond to your questions or concerns</li>
                <li>For internal business analytics and improvement</li>
                <li>To process payments and maintain service records</li>
                <li>To improve our website functionality and user experience</li>
                <li>To comply with legal requirements and industry regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">SMS and Texting Consent:</h2>
              <p className="text-muted-foreground">
                When you provide your phone number, you consent to receive SMS messages from Temp Kings Air. Message frequency may vary. Message and data rates may apply. Text HELP for help or STOP to opt out.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Sharing:</h2>
              <p className="text-muted-foreground mb-4">
                We do <strong>not</strong> sell, rent, or share your personal information with third parties for marketing purposes. Your information is used solely for providing HVAC services and communicating with you as a customer.
              </p>
              <p className="text-muted-foreground">
                We may share limited information with trusted service providers who assist us in operating our business, such as payment processors, scheduling software providers, and communication platforms, but only to the extent necessary to provide our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security:</h2>
              <p className="text-muted-foreground">
                We take appropriate steps to protect your personal information using secure servers, access controls, and encryption where applicable. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention:</h2>
              <p className="text-muted-foreground">
                We retain your personal information for as long as necessary to provide our services and as required by law. Service records are typically maintained for 7 years for warranty and tax purposes. You may request deletion of your information at any time, subject to legal requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Website Analytics:</h2>
              <p className="text-muted-foreground">
                Our website may use cookies and similar technologies to improve your browsing experience, remember your preferences, and analyze website traffic. You can control cookie settings through your browser, though some features may not function properly if cookies are disabled.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights:</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Access: Request a copy of the personal information we have about you</li>
                <li>Correction: Request correction of inaccurate or incomplete information</li>
                <li>Deletion: Request deletion of your personal information (subject to legal requirements)</li>
                <li>Portability: Request transfer of your data to another service provider</li>
                <li>Opt-out: Unsubscribe from marketing communications at any time</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, contact us at info@tempkingsair.com or call (626) 400-5300.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">California Privacy Rights:</h2>
              <p className="text-muted-foreground">
                California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of the sale of personal information. We do not sell personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy:</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The most current version will always be available on our website with the updated effective date. We will notify you of significant changes via email or SMS if you have opted in to receive communications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information:</h2>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground font-semibold mb-2">Temp Kings Air</p>
                <p className="text-muted-foreground">Phone: (626) 400-5300</p>
                <p className="text-muted-foreground">Email: info@tempkingsair.com</p>
                <p className="text-muted-foreground">Website: https://tempkingsair.com</p>
                <p className="text-muted-foreground mt-3 text-sm">
                  For privacy-related inquiries, please clearly mark your message as "Privacy Request" to ensure prompt handling.
                </p>
              </div>
            </section>

            <hr className="my-12 border-border" />

            <h1 className="text-4xl font-bold text-foreground mb-8">SMS Terms & Conditions</h1>

            <p className="text-muted-foreground mb-8">
              By opting into SMS from Temp Kings Air, you agree to receive text messages from us regarding your HVAC services, appointment updates, promotional offers, or service-related alerts.
            </p>

            <p className="text-muted-foreground mb-8">
              Message frequency varies depending on your interactions with us.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Message & Data Rates:</h2>
              <p className="text-muted-foreground">
                Standard message and data rates may apply based on your mobile carrier plan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Opt-In:</h2>
              <p className="text-muted-foreground">
                You can opt in by providing your phone number through our website, contact forms, or in-person communication.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Opt-Out:</h2>
              <p className="text-muted-foreground">
                You may opt out of SMS messages at any time by replying STOP. You may also reply HELP for assistance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Support:</h2>
              <p className="text-muted-foreground">
                For any help or questions regarding SMS, email us at info@tempkingsair.com or call (626) 400-5300.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Privacy:</h2>
              <p className="text-muted-foreground">
                Your information is never sold or shared with third parties for marketing purposes. For full details, see our Privacy Policy at https://tempkingsair.com/privacy-policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Terms Changes:</h2>
              <p className="text-muted-foreground">
                We may update these Terms periodically. Continued use of our services constitutes acceptance of the latest version.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default PrivacyPolicy;