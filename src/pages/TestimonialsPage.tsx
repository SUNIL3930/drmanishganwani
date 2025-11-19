
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TestimonialsPage = () => {
  useEffect(() => {
    // Load Elfsight script if not already loaded
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Patient Reviews | Dr. Manish Ganwani | Cardiologist in Nagpur</title>
        <meta name="description" content="Read verified patient reviews for Dr. Manish Ganwani. Trusted cardiologist in Nagpur with 4.9/5 rating for pre angioplasty, Free angioplasty under Ayushman." />
        <meta name="keywords" content="dr manish ganwani reviews, cardiologist nagpur testimonials, patient feedback, pre angioplasty, Free angioplasty under Ayushman, mjpjay, heart specialist reviews" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Patient Reviews | Dr. Manish Ganwani | Cardiologist in Nagpur" />
        <meta property="og:description" content="Read verified patient reviews for Dr. Manish Ganwani. Trusted cardiologist in Nagpur with 4.9/5 rating for pre angioplasty, Free angioplasty under Ayushman." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.drmanishganwani.com/testimonials" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Patient Reviews | Dr. Manish Ganwani" />
        <meta name="twitter:description" content="Read verified patient reviews for Dr. Manish Ganwani. Trusted cardiologist in Nagpur with 4.9/5 rating." />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/testimonials" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ReviewPage",
          "name": "Patient Reviews - Dr. Manish Ganwani",
          "description": "Verified patient reviews and testimonials for Dr. Manish Ganwani, leading cardiologist in Nagpur",
          "url": "https://www.drmanishganwani.com/testimonials",
          "about": {
            "@type": "Physician",
            "name": "Dr. Manish Ganwani",
            "medicalSpecialty": "Cardiology"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-accent to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                What Our Patients Say
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Read verified reviews from real patients who have visited our clinic and experienced exceptional cardiac care with Dr. Manish Ganwani.
              </p>
              
              <div className="flex items-center justify-center mb-8">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-current" />
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-primary">4.9/5</div>
                  <div className="text-gray-600">Based on Google Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews Widget */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="w-full max-w-6xl">
                <div 
                  className="elfsight-app-c429b7e4-24ae-454c-98f9-d96c66f77497 rounded-lg shadow-sm bg-white p-4" 
                  data-elfsight-app-lazy
                ></div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                All reviews are verified and updated automatically from Google My Business
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience the Same Exceptional Care
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied patients who trust Dr. Manish Ganwani for their cardiac health
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 transition-all duration-300 transform hover:-translate-y-1">
                  Book Your Appointment
                </Button>
              </Link>
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 transition-all duration-300 transform hover:-translate-y-1">
                Call Now: +91-9373511338
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TestimonialsPage;
