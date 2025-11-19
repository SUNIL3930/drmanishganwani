
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Calendar, Heart, Stethoscope, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const YavatmalLocation = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/contact');
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+919373511338';
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Best Heart Doctor in Yavatmal | Dr. Manish Ganwani | Cardiologist</title>
        <meta name="description" content="Dr. Manish Ganwani - Leading heart doctor serving Yavatmal patients. Expert cardiologist with 15+ years experience. ECG, 2D Echo, angioplasty services. Book appointment at Ganwani Heart Care Clinic, Nagpur." />
        <meta name="keywords" content="heart doctor yavatmal, cardiologist yavatmal, best heart specialist yavatmal, cardiac care yavatmal, heart clinic near yavatmal, dr manish ganwani yavatmal" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Yavatmal, Maharashtra" />
        
        <meta property="og:title" content="Best Heart Doctor in Yavatmal | Dr. Manish Ganwani" />
        <meta property="og:description" content="Leading heart doctor serving Yavatmal patients. Expert cardiologist with advanced cardiac care services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.drmanishganwani.com/locations/yavatmal" />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/locations/yavatmal" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "Dr. Manish Ganwani - Heart Doctor Yavatmal",
          "description": "Leading cardiologist serving Yavatmal patients with comprehensive heart care services",
          "url": "https://www.drmanishganwani.com/locations/yavatmal",
          "telephone": "+91-9373511338",
          "areaServed": "Yavatmal",
          "medicalSpecialty": "Cardiology",
          "physician": {
            "@type": "Physician",
            "name": "Dr. Manish Ganwani",
            "medicalSpecialty": "Cardiology"
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best Heart Doctor in Yavatmal
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Dr. Manish Ganwani - Expert Cardiologist Serving Yavatmal Patients
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Heart className="h-6 w-6 mr-2 text-primary" />
                  Comprehensive Heart Care for Yavatmal
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Dr. Manish Ganwani, a renowned cardiologist with over 15 years of experience, proudly serves patients from Yavatmal at Ganwani Heart Care Clinic in Nagpur. Our clinic offers advanced cardiac services including ECG, 2D Echo, TMT tests, angioplasty, and comprehensive heart health packages. Patients from Yavatmal trust Dr. Ganwani for his expertise in interventional cardiology, preventive heart care, and emergency cardiac services. With state-of-the-art equipment and compassionate care, we ensure the best possible outcomes for all heart-related conditions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleBookAppointment}
                    className="bg-primary hover:bg-primary/90 flex items-center justify-center"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleCallNow}
                    className="border-primary text-primary hover:bg-primary/10 flex items-center justify-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now: +91-9373511338
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-accent rounded-lg">
                  <Stethoscope className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Advanced Diagnostics</h3>
                    <p className="text-gray-600">ECG, 2D Echo, TMT Tests</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-accent rounded-lg">
                  <Activity className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Interventional Cardiology</h3>
                    <p className="text-gray-600">Angioplasty & Advanced Procedures</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-accent rounded-lg">
                  <MapPin className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Convenient Location</h3>
                    <p className="text-gray-600">Easily accessible from Yavatmal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" onClick={() => navigate('/')}>
                Home
              </Button>
              <Button variant="outline" onClick={() => navigate('/best-cardiologist-in-nagpur')}>
                About Dr. Ganwani
              </Button>
              <Button variant="outline" onClick={() => navigate('/contact')}>
                Contact Us
              </Button>
              <Button variant="outline" onClick={() => navigate('/#services')}>
                Our Services
              </Button>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default YavatmalLocation;
