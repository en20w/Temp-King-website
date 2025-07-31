import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              <strong>Effective Date:</strong> [Insert Date]
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
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information:</h2>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>To schedule and confirm appointments</li>
                <li>To send service updates, reminders, and promotional messages (with your consent)</li>
                <li>To respond to your questions or concerns</li>
                <li>For internal business analytics and improvement</li>
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
              <p className="text-muted-foreground">
                We do <strong>not</strong> sell, rent, or share your personal information with third parties for marketing purposes. Your information is used solely for providing HVAC services and communicating with you as a customer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security:</h2>
              <p className="text-muted-foreground">
                We take appropriate steps to protect your personal information using secure servers, access controls, and encryption where applicable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights:</h2>
              <p className="text-muted-foreground">
                You can request access to, correction of, or deletion of your personal information by contacting us at info@tempkingsair.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Updates:</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy periodically. The most current version will always be available on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us:</h2>
              <p className="text-muted-foreground">
                If you have any questions, please email info@tempkingsair.com or call (626) 400-5300.
              </p>
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
  );
};

export default PrivacyPolicy;