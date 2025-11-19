
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Heart, Clock } from 'lucide-react';

const ChhindwaraLocation = () => {
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
        <title>Best Cardiologist in Chhindwara, Nagpur | Dr. Manish Ganwani</title>
        <meta name="description" content="Dr. Manish Ganwani - Leading heart specialist serving Chhindwara, Nagpur with 15+ years experience. Expert cardiac care, angioplasty, 2D Echo, TMT tests. Emergency cardiac services available 24/7." />
        <meta name="keywords" content="cardiologist in Chhindwara, heart specialist Chhindwara Nagpur, best heart doctor Chhindwara, cardiac care Chhindwara, angioplasty Chhindwara, 2D echo test Chhindwara" />
        <link rel="canonical" href="https://www.drmanishganwani.com/locations/chhindwara" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        <div className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Best Cardiologist in Chhindwara, Nagpur
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
                <h2 className="text-2xl font-bold text-gray-900">Expert Cardiac Care for Chhindwara Patients</h2>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Dr. Manish Ganwani provides expert cardiac care to patients from Chhindwara at Ganwani Heart Care Clinic in Nagpur. With over 15 years of experience in cardiology, he specializes in angioplasty, 2D Echo, TMT tests, and emergency cardiac care. Patients from Chhindwara trust his expertise and compassionate approach to heart health.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Emergency Contact</h3>
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
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ChhindwaraLocation;
