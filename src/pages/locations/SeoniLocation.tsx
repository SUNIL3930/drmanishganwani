
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, MapPin, Heart, Clock } from 'lucide-react';

const SeoniLocation = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:+919373511338';
  };

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Best Cardiologist in Seoni, Nagpur | Dr. Manish Ganwani</title>
        <meta name="description" content="Dr. Manish Ganwani - Leading heart specialist serving Seoni, Nagpur with 15+ years experience. Expert cardiac care, angioplasty, 2D Echo, TMT tests. Emergency cardiac services available 24/7." />
        <meta name="keywords" content="cardiologist in Seoni, heart specialist Seoni Nagpur, best heart doctor Seoni, cardiac care Seoni, angioplasty Seoni, 2D echo test Seoni, cardiologist near Seoni, heart clinic Seoni" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Seoni, Madhya Pradesh" />
        
        <meta property="og:title" content="Best Cardiologist in Seoni, Nagpur | Dr. Manish Ganwani" />
        <meta property="og:description" content="Leading heart specialist serving Seoni, Nagpur with 15+ years experience. Expert cardiac care and emergency services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.drmanishganwani.com/locations/seoni" />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/locations/seoni" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        <div className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Best Cardiologist in Seoni, Nagpur
              </h1>
              <p className="text-xl text-white/90">
                Dr. Manish Ganwani - Your Trusted Heart Specialist
              </p>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Expert Cardiac Care for Seoni Patients</h2>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Dr. Manish Ganwani, a renowned cardiologist with over 15 years of clinical excellence, extends his specialized cardiac care services to patients from Seoni and surrounding areas at Ganwani Heart Care Clinic in Nagpur. Our clinic offers comprehensive cardiovascular services including advanced angioplasty procedures, detailed 2D Echo cardiac imaging, complete TMT stress testing, and emergency cardiac care available 24/7. Patients from Seoni benefit from Dr. Ganwani's expertise in interventional cardiology, his commitment to preventive heart health, and his personalized approach to cardiovascular care.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Emergency Contact</h3>
                    <p className="text-gray-600">24/7 cardiac emergency services available</p>
                    <button
                      onClick={handleCallClick}
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      +91-9373511338
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Clinic Hours</h3>
                    <p className="text-gray-600">Mon-Sat: 10:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleContactClick}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Book Appointment Today
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="/" className="text-primary hover:text-primary/80">Home</a>
                  <a href="/contact" className="text-primary hover:text-primary/80">Contact Us</a>
                  <a href="/locations/tumsar" className="text-primary hover:text-primary/80">Cardiologist in Tumsar</a>
                  <a href="/locations/chhindwara" className="text-primary hover:text-primary/80">Cardiologist in Chhindwara</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SeoniLocation;
