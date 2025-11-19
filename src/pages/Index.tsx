
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Dr. Manish Ganwani | Best Cardiologist in Nagpur | Best Heart Specialist Nagpur, Bhandara</title>
        <meta name="description" content="Dr. Manish Ganwani - Best cardiologist in Nagpur with 8+ years experience. Expert heart specialist serving Bhandara, Umred, Seoni, Mauda. Advanced cardiac care, angioplasty, 2D Echo, TMT tests. Emergency cardiac services 24/7." />
        <meta name="keywords" content="best cardiologist nagpur, heart specialist bhandara, cardiologist umred, heart doctor seoni, angioplasty nagpur, 2D echo test nagpur, cardiologist near me, heart clinic mauda, cardiac care tumsar, heart specialist amravati, cardiologist yavatmal, heart doctor chhindwara, emergency cardiac care nagpur" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nagpur, Maharashtra" />
        <meta name="geo.position" content="21.1458;79.0882" />
        <meta name="ICBM" content="21.1458, 79.0882" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Dr. Manish Ganwani | Best Cardiologist in Nagpur | Heart Specialist" />
        <meta property="og:description" content="Leading cardiologist in Nagpur with 8+ years experience. Expert heart care for Bhandara, Umred, Seoni patients. Advanced cardiac treatments, angioplasty, emergency care 24/7." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.drmanishganwani.com" />
        <meta property="og:image" content="https://www.drmanishganwani.com/images/dr-ganwani.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Dr. Manish Ganwani - Cardiologist Nagpur" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Manish Ganwani | Best Cardiologist in Nagpur" />
        <meta name="twitter:description" content="Leading cardiologist in Nagpur with 8+ years experience. Expert heart care serving Bhandara, Umred, Seoni. Advanced cardiac treatments available." />
        <meta name="twitter:image" content="https://www.drmanishganwani.com/images/dr-ganwani.jpg" />
        
        <link rel="canonical" href="https://www.drmanishganwani.com" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": "https://www.drmanishganwani.com/#clinic",
              "name": "Ganwani Heart Care Clinic",
              "description": "Leading cardiac care clinic in Nagpur offering comprehensive heart treatments with personalized patient-centered care by Dr. Manish Ganwani",
              "url": "https://www.drmanishganwani.com",
              "telephone": "+91-9373511338",
              "email": "info@ganwaniheartcare.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "BS6, Sadoday Complex, Central Avenue Road",
                "addressLocality": "Nagpur",
                "addressRegion": "Maharashtra",
                "postalCode": "440018",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "21.1458",
                "longitude": "79.0882"
              },
              "areaServed": [
                "Nagpur", "Bhandara", "Umred", "Seoni", "Mauda", "Sakoli", "Tumsar", "Chhindwara", "Amravati", "Yavatmal"
              ],
              "medicalSpecialty": ["Cardiology", "Interventional Cardiology", "Preventive Cardiology"],
              "openingHours": [
                "Mo-Sa 10:00-20:00",
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              },
              "hasMap": "https://maps.google.com/?q=21.1458,79.0882"
            },
            {
              "@type": "Physician",
              "@id": "https://www.drmanishganwani.com/#doctor",
              "name": "Dr. Manish Ganwani",
              "jobTitle": "Cardiologist",
              "medicalSpecialty": ["Cardiology", "Interventional Cardiology"],
              "yearsOfExperience": "8+",
              "alumniOf": [
                "NKP Salve Institute",
                "IGGMC Nagpur", 
                "Sree Chitra Tirunal Institute, Trivandrum"
              ],
              "worksFor": {
                "@id": "https://www.drmanishganwani.com/#clinic"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nagpur",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "telephone": "+91-9373511338",
              "url": "https://www.drmanishganwani.com",
              "sameAs": [
                "https://www.facebook.com/drmanishganwani",
                "https://www.linkedin.com/in/drmanishganwani"
              ]
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://www.drmanishganwani.com/#localbusiness",
              "name": "Dr. Manish Ganwani - Cardiologist Nagpur",
              "image": "https://www.drmanishganwani.com/images/dr-ganwani.jpg",
              "description": "Best cardiologist in Nagpur providing expert heart care services to patients from Bhandara, Umred, Seoni, and surrounding areas",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "BS6, Sadoday Complex, Central Avenue Road",
                "addressLocality": "Nagpur",
                "addressRegion": "Maharashtra",
                "postalCode": "440018",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "21.1458",
                "longitude": "79.0882"
              },
              "telephone": "+91-9373511338",
              "url": "https://www.drmanishganwani.com",
              "openingHours": "Mo-Sa 09:00-20:00, Su 10:00-14:00",
              "paymentAccepted": "Cash, Card, UPI, Insurance",
              "currenciesAccepted": "INR"
            }
          ]
        })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        <h1 style={{ 
  position: 'absolute', 
  left: '-10000px', 
  top: 'auto', 
  width: '1px', 
  height: '1px', 
  overflow: 'hidden' 
}}>
  Best Cardiologist in Nagpur – Dr. Manish Ganwani
</h1>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <BlogPreview />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
