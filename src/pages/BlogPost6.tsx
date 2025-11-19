import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPost6 = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Free Angioplasty under Ayushman Bharat | Dr. Manish Ganwani | Cardiologist Nagpur</title>
        <meta name="description" content="Complete guide to accessing free angioplasty through Ayushman Bharat PMJAY scheme. Learn eligibility, process, and benefits from Dr. Manish Ganwani." />
        <meta name="keywords" content="free angioplasty, Ayushman Bharat, PMJAY, angioplasty cost, heart treatment, Dr. Manish Ganwani, cardiologist Nagpur, government health scheme, pre angioplasty" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Free Angioplasty under Ayushman Bharat | Dr. Manish Ganwani" />
        <meta property="og:description" content="Complete guide to accessing free angioplasty through Ayushman Bharat PMJAY scheme." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.drmanishganwani.com/blog/free-angioplasty-ayushman" />
        <meta property="og:image" content="https://www.drmanishganwani.com/blog-images/blog6.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Angioplasty under Ayushman Bharat" />
        <meta name="twitter:description" content="Complete guide to accessing free angioplasty through Ayushman Bharat PMJAY scheme." />
        <meta name="twitter:image" content="https://www.drmanishganwani.com/blog-images/blog6.png" />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/blog/free-angioplasty-ayushman" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "How to Get Angioplasty Free of Cost?",
          "description": "Complete guide to accessing free angioplasty through Ayushman Bharat and PMJAY schemes",
          "author": {
            "@type": "Person",
            "name": "Dr. Manish Ganwani",
            "jobTitle": "Cardiologist",
            "alumniOf": "Sree Chitra Tirunal Institute, Trivandrum"
          },
          "datePublished": "2024-01-16",
          "image": "https://www.drmanishganwani.com/blog-images/blog6.png",
          "keywords": "free angioplasty, Ayushman Bharat, PMJAY, government health scheme",
          "url": "https://www.drmanishganwani.com/blog/free-angioplasty-ayushman",
          "publisher": {
            "@type": "Organization",
            "name": "Ganwani Heart Care Clinic"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.drmanishganwani.com/blog/free-angioplasty-ayushman"
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
              How to Get Angioplasty Free of Cost?
            </h1>
            
            <div className="flex items-center text-gray-500 mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">January 16, 2024</span>
              <Clock className="h-5 w-5 mr-2" />
              <span>7 min read</span>
            </div>

            <div className="flex items-center mb-6">
              <img
                src="/images/dr-ganwani.jpg"
                alt="Dr. Manish Ganwani"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-primary">
                  <Link to="/best-cardiologist-in-nagpur" className="hover:underline">
                    Dr. Manish Ganwani
                  </Link>
                </p>
                <p className="text-sm text-gray-600">Cardiologist</p>
              </div>
            </div>
            
            <img
              src="/blog-images/blog6.png"
              alt="Ayushman Bharat healthcare scheme"
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Heart disease shouldn't be a financial burden. The Government of India's Ayushman Bharat scheme has made life-saving cardiac procedures like angioplasty accessible to millions of families. As a cardiologist who has helped numerous patients benefit from this scheme, I'll guide you through the complete process.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Understanding Ayushman Bharat PMJAY</h2>
            
            <p className="text-gray-700 mb-4">
              Pradhan Mantri Jan Arogya Yojana (PMJAY), under Ayushman Bharat, is the world's largest health insurance scheme providing coverage up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Coverage for Cardiac Procedures</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Coronary angioplasty with stent placement</li>
              <li>Coronary angiography</li>
              <li>Bypass surgery (CABG)</li>
              <li>Pacemaker implantation</li>
              <li>Heart valve surgeries</li>
              <li>Pre and post-operative care</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Eligibility Criteria</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Who Can Apply?</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Families listed in SECC-2011 (Socio-Economic Caste Census)</li>
              <li>Rural families with specific deprivation criteria</li>
              <li>Urban families with occupational criteria</li>
              <li>Families covered under RSBY scheme</li>
              <li>State-specific additional categories</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Check Your Eligibility:</h3>
              <p className="text-green-700 mb-2">
                Visit the official website: <strong>pmjay.gov.in</strong>
              </p>
              <p className="text-green-700">
                Use "Am I Eligible" feature with your mobile number or ration card number
              </p>
            </div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Step-by-Step Process</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">1. Generate Ayushman Card</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Visit nearest Common Service Center (CSC)</li>
              <li>Carry required documents (Aadhaar, ration card, etc.)</li>
              <li>Biometric verification will be done</li>
              <li>Receive your Ayushman Bharat card</li>
            </ul>

            <h3 className="text-xl font-semibulous text-primary mt-6 mb-3">2. Hospital Selection</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Choose from empaneled hospitals</li>
              <li>Verify hospital's PMJAY certification</li>
              <li>Ensure the hospital offers cardiac services</li>
              <li>Check availability of interventional cardiologist</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">3. Treatment Process</h3>
            <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
              <li>Visit the empaneled hospital with your Ayushman card</li>
              <li>Complete pre-authorization process</li>
              <li>Undergo necessary diagnostic tests</li>
              <li>Get treatment plan approved</li>
              <li>Receive cashless treatment</li>
              <li>Follow-up care as per protocol</li>
            </ol>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Required Documents</h2>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Ayushman Bharat Golden Card</li>
              <li>Aadhaar Card</li>
              <li>Ration Card</li>
              <li>Family ID</li>
              <li>Medical reports and prescriptions</li>
              <li>Reference from doctor (if any)</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Benefits of PMJAY for Cardiac Care</h2>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Cashless Treatment:</strong> No upfront payment required</li>
              <li><strong>Comprehensive Coverage:</strong> Pre and post-hospitalization expenses</li>
              <li><strong>Quality Care:</strong> Treatment at empaneled hospitals</li>
              <li><strong>Paperless Process:</strong> Minimal documentation required</li>
              <li><strong>Portability:</strong> Treatment available anywhere in India</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Additional State Schemes</h2>
            
            <p className="text-gray-700 mb-4">
              Many states have additional schemes that complement PMJAY:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Maharashtra:</strong> Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY)</li>
              <li><strong>Karnataka:</strong> Suvarna Arogya Suraksha Trust</li>
              <li><strong>Tamil Nadu:</strong> Chief Minister's Comprehensive Health Insurance Scheme</li>
              <li><strong>Rajasthan:</strong> Bhamashah Swasthya Bima Yojana</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Important Tips</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Before Treatment:</h3>
              <ul className="list-disc list-inside text-yellow-700 space-y-1">
                <li>Verify hospital empanelment status</li>
                <li>Confirm procedure coverage</li>
                <li>Get pre-authorization approved</li>
                <li>Understand package rates</li>
                <li>Keep all documents ready</li>
              </ul>
            </div>

            <div className="bg-accent rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Need Help with PMJAY Process?</h3>
              <p className="text-gray-700 mb-4">
                As an empaneled cardiologist under various government schemes, I can guide you through the entire process of accessing free angioplasty treatment. Don't let financial constraints delay your cardiac care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90">
                    Get PMJAY Guidance
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

export default BlogPost6;
