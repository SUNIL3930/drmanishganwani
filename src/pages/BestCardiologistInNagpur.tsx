import React , { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, Heart, Clock, GraduationCap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const BestCardiologistInNagpur = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const qualifications = [
    "MBBS - NKP Salve Institute",
    "MD General Medicine - IGGMC Nagpur (1st Attempt)", 
    "DM Cardiology - Sree Chitra Tirunal Institute, Trivandrum (All India Rank 7)",
    "Specialist in Diagnostic & Interventional Cardiology"
  ];

  const experience = [
    "Senior Cardiologist - Ganwani Heart Care Clinic (2019-Present)",
    "Trained at Sree Chitra Tirunal Institute, Trivandrum",
    "Expert in Complex Cardiovascular Conditions Management",
    "Specializes in Coronary Artery Disease, Heart Failure & Arrhythmias"
  ];

  const achievements = [
    { icon: Users, number: "20000", text: "2d Echocardiography" },
        { icon: Heart, number: "10000", text: "Angiographies" },
        { icon: Award, number: "2000", text: "Angioplasties" },
        { icon: Clock, number: "8+", text: "Years of Experience" }
  ];

  const handleAppointmentClick = () => {
    navigate('/contact');
    setIsOpen(false);
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919373511338';
  };
  
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Top Cardiologist in Nagpur – Dr. Manish Ganwani | DM Cardiology Expert</title>
        <meta name="description" content="Looking for the top 10 cardiologists in Nagpur? Dr. Manish Ganwani is a DM Cardiology expert with 8+ years of experience, offering advanced heart care in Nagpur." />
        <meta name="keywords" content="dr manish ganwani, DM cardiology, interventional cardiologist nagpur, sree chitra tirunal institute, best cardiologist in nagpur, pre angioplasty, Free angioplasty under Ayushman, mjpjay" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Dr. Manish Ganwani | DM Cardiology Expert" />
        <meta property="og:description" content="Young & dynamic cardiologist in Nagpur with 8+ years experience. DM Cardiology from Sree Chitra Tirunal Institute (AIR 7)." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.drmanishganwani.com/best-cardiologist-in-nagpur" />
        <meta property="og:image" content="https://www.drmanishganwani.com/images/dr-ganwani.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Dr. Manish Ganwani | DM Cardiology Expert" />
        <meta name="twitter:description" content="Young & dynamic cardiologist with DM Cardiology from Sree Chitra Tirunal Institute (AIR 7)." />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/best-cardiologist-in-nagpur" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          "name": "Dr. Manish Ganwani",
          "description": "Young and dynamic cardiologist in Nagpur with 8+ years of experience in comprehensive cardiovascular care and interventional cardiology",
          "medicalSpecialty": ["Cardiology", "Interventional Cardiology"],
          "yearsOfExperience": "8+",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "BS6, Sadoday Complex, Central Avenue Road",
            "addressLocality": "Nagpur",
            "addressRegion": "Maharashtra",
            "postalCode": "440018",
            "addressCountry": "IN"
          },
          "telephone": "+91-9373511338",
          "url": "https://www.drmanishganwani.com/best-cardiologist-in-nagpur",
          "alumniOf": [
            "NKP Salve Institute",
            "IGGMC Nagpur", 
            "Sree Chitra Tirunal Institute, Trivandrum"
          ],
          "memberOf": {
            "@type": "MedicalOrganization",
            "name": "Ganwani Heart Care Clinic"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500"
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-accent to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                  Best Cardiologist in Nagpur – Why Choose Dr. Manish Ganwani?
                </h1>
                <div className="text-xl text-primary font-semibold mb-4">
                  Young & Dynamic Interventional Cardiologist in Nagpur
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Dr. Manish Ganwani, a young and dynamic cardiologist with over 8 years of experience, is dedicated to providing comprehensive cardiovascular care that combines advanced medical expertise with personalized patient-centered treatment.
                </p>
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">4.9 Rating from 500+ Patients</span>
                </div>
              </div>
              
              <div className="text-center">
                <img
                  src="/images/dr-ganwani.jpg"
                  alt="Dr. Manish Ganwani - Best Cardiologist in Nagpur"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Description */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-8">
                Genuine and Professional Cardiology Care
              </h2>
              <div className="text-lg text-gray-700 space-y-6">
                <p>
                  Specializing in both diagnostic and interventional cardiology, Dr. Ganwani brings a holistic approach to heart health, focusing on prevention, precise diagnosis, and innovative treatment strategies.
                </p>
                <p>
                  Trained at Sree Chitra Tirunal Institute, Trivandrum, he has extensive expertise in managing complex cardiovascular conditions, including coronary artery disease, heart failure, arrhythmias, and hypertension.
                </p>
                <p>
                  With a commitment to staying at the forefront of medical research and technological advancements, the doctor utilizes state-of-the-art diagnostic tools and cutting-edge treatment protocols to deliver optimal patient outcomes.
                </p>
                <p>
                  Beyond clinical excellence, Dr. Ganwani is known for a compassionate bedside manner that helps patients feel supported and empowered throughout their health journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}      
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Medical Excellence & Experience
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{item.number}</div>
                  <div className="text-gray-600 text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <GraduationCap className="h-8 w-8 text-primary mr-3" />
                  Education & Qualifications
                </h3>
                <div className="space-y-4">
                  {qualifications.map((qual, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">{qual}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <Award className="h-8 w-8 text-primary mr-3" />
                  Professional Experience
                </h3>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">{exp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Consult with Dr. Manish Ganwani?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience world-class cardiac care with Nagpur's most trusted young cardiologist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 transition-all duration-300 transform hover:-translate-y-1"
                onClick={handleAppointmentClick}>
                Book Appointment
              </Button>
              <Button 
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 transition-all duration-300 transform hover:-translate-y-1"
                onClick={handleCallClick}
              >
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

export default BestCardiologistInNagpur;
