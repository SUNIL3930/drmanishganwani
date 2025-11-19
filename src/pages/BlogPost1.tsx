import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPost1 = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>When to See a Cardiologist: Warning Signs | Dr. Manish Ganwani | DM Cardiology Expert Nagpur</title>
        <meta name="description" content="Learn warning signs that indicate you should consult a cardiologist. Expert advice by Dr. Manish Ganwani, DM Cardiology from Sree Chitra Tirunal Institute." />
        <meta name="keywords" content="when to see cardiologist, cardiac symptoms, heart warning signs, DM cardiology expert, interventional cardiologist, pre angioplasty, Free angioplasty under Ayushman, mjpjay" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="When to See a Cardiologist: Warning Signs | Dr. Manish Ganwani" />
        <meta property="og:description" content="Learn warning signs that indicate you should consult a cardiologist. Expert advice by DM Cardiology specialist." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.drmanishganwani.com/blog/when-to-see-cardiologist-warning-signs" />
        <meta property="og:image" content="https://www.drmanishganwani.com/blog-images/blog1.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="When to See a Cardiologist: Warning Signs" />
        <meta name="twitter:description" content="Learn warning signs that indicate you should consult a cardiologist." />
        <meta name="twitter:image" content="https://www.drmanishganwani.com/blog-images/blog1.png" />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/blog/when-to-see-cardiologist-warning-signs" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "When Should You See a Cardiologist? Warning Signs You Shouldn't Ignore",
          "description": "Learn the warning signs that indicate you should consult a cardiologist immediately",
          "author": {
            "@type": "Person",
            "name": "Dr. Manish Ganwani",
            "jobTitle": "Cardiologist",
            "alumniOf": "Sree Chitra Tirunal Institute, Trivandrum"
          },
          "datePublished": "2024-01-15",
          "image": "https://www.drmanishganwani.com/blog-images/blog1.png",
          "url": "https://www.drmanishganwani.com/blog/when-to-see-cardiologist-warning-signs",
          "publisher": {
            "@type": "Organization",
            "name": "Ganwani Heart Care Clinic"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.drmanishganwani.com/blog/when-to-see-cardiologist-warning-signs"
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="ghost" className="text-primary hover:bg-accent mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              When Should You See a Cardiologist? Warning Signs You Shouldn't Ignore
            </h1>
            
            <div className="flex items-center text-gray-500 mb-6">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">January 15, 2024</span>
              <Clock className="h-5 w-5 mr-2" />
              <span>5 min read</span>
            </div>
            
            <img
              src="/blog-images/blog1.png"
              alt="Cardiologist consultation"
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your heart is the most vital organ in your body, and recognizing when it needs professional attention can be life-saving. Dr. Manish Ganwani, a young and dynamic cardiologist with DM Cardiology from Sree Chitra Tirunal Institute, Trivandrum, shares the key warning signs that should prompt you to seek cardiac care immediately.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Critical Warning Signs</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">1. Chest Pain or Discomfort</h3>
            <p className="text-gray-700 mb-4">
              Not all chest pain indicates a heart attack, but any persistent chest discomfort should be evaluated by a cardiologist. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Squeezing, pressure, or burning sensation in the chest</li>
              <li>Pain that radiates to the arm, neck, jaw, or back</li>
              <li>Chest pain that worsens with physical activity</li>
              <li>Discomfort accompanied by shortness of breath</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">2. Shortness of Breath</h3>
            <p className="text-gray-700 mb-4">
              Difficulty breathing, especially during routine activities or while lying down, can indicate heart problems such as heart failure or coronary artery disease.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">3. Irregular Heartbeat</h3>
            <p className="text-gray-700 mb-4">
              Heart palpitations, racing heart, or irregular rhythm should be evaluated, especially if accompanied by dizziness, fainting, or chest discomfort.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Risk Factors That Require Cardiac Screening</h2>
            
            <p className="text-gray-700 mb-4">
              Even without symptoms, certain risk factors warrant regular cardiac check-ups:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Family history of heart disease</li>
              <li>High blood pressure or cholesterol</li>
              <li>Diabetes</li>
              <li>Smoking or tobacco use</li>
              <li>Obesity</li>
              <li>Sedentary lifestyle</li>
              <li>Age over 40 for men, 50 for women</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">When to Seek Emergency Care</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Call Emergency Services Immediately If You Experience:</h3>
              <ul className="list-disc list-inside text-red-700 space-y-1">
                <li>Severe chest pain lasting more than a few minutes</li>
                <li>Chest pain with sweating, nausea, or shortness of breath</li>
                <li>Sudden severe shortness of breath</li>
                <li>Fainting or loss of consciousness</li>
                <li>Severe, sudden onset of heart palpitations</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Preventive Care is Key</h2>
            
            <p className="text-gray-700 mb-4">
              Regular cardiac screenings can detect problems before they become serious. Dr. Ganwani recommends annual check-ups for adults over 40 or those with risk factors.
            </p>

            <div className="bg-accent rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Schedule Your Cardiac Consultation</h3>
              <p className="text-gray-700 mb-4">
                Don't wait for symptoms to worsen. Dr. Manish Ganwani, with his expertise in interventional cardiology and compassionate patient care, provides comprehensive cardiac evaluations for early detection and treatment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost1;
