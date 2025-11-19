
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Contact Dr. Manish Ganwani | Book Appointment | Cardiologist in Nagpur</title>
        <meta name="description" content="Contact Dr. Manish Ganwani for cardiac consultation in Nagpur. Book appointment for pre angioplasty, Free angioplasty under Ayushman, mjpjay schemes." />
        <meta name="keywords" content="contact cardiologist nagpur, book appointment heart specialist, pre angioplasty, cardiac emergency nagpur" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Contact Dr. Manish Ganwani | Book Appointment | Cardiologist in Nagpur" />
        <meta property="og:description" content="Contact Dr. Manish Ganwani for cardiac consultation in Nagpur. Book appointment for pre angioplasty, Free angioplasty under Ayushman." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.drmanishganwani.com/contact" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Dr. Manish Ganwani | Book Appointment" />
        <meta name="twitter:description" content="Contact Dr. Manish Ganwani for cardiac consultation in Nagpur. Book appointment for pre angioplasty, Free angioplasty under Ayushman." />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/contact" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "Ganwani Heart Care Clinic",
          "description": "Contact Dr. Manish Ganwani for comprehensive cardiac care in Nagpur",
          "url": "https://www.drmanishganwani.com/contact",
          "telephone": "+91-9373511338",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "BS6, Sadoday Complex, Central Avenue Road",
            "addressLocality": "Nagpur",
            "addressRegion": "Maharashtra",
            "postalCode": "440018",
            "addressCountry": "IN"
          },
          "openingHours": [
            "Mo-Sa 09:00-20:00",
            "Su 10:00-14:00"
          ],
          "medicalSpecialty": "Cardiology"
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
