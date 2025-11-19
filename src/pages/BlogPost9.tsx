import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPost9 = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Atrial Fibrillation: Causes, Symptoms, and Treatment | Dr. Manish Ganwani</title>
        <meta name="description" content="Complete guide to atrial fibrillation - causes, symptoms, diagnosis, and treatment options. Expert advice from Dr. Manish Ganwani, cardiologist in Nagpur." />
        <meta name="keywords" content="atrial fibrillation, AFib, irregular heartbeat, heart rhythm disorder, anticoagulation, cardioversion, Dr. Manish Ganwani, cardiologist Nagpur, arrhythmia treatment" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Atrial Fibrillation: Causes, Symptoms, and Treatment | Dr. Manish Ganwani" />
        <meta property="og:description" content="Complete guide to atrial fibrillation from expert cardiologist Dr. Manish Ganwani." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.drmanishganwani.com/blog/atrial-fibrillation-management" />
        <meta property="og:image" content="https://www.drmanishganwani.com/blog-images/blog9.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Atrial Fibrillation: Causes, Symptoms, and Treatment" />
        <meta name="twitter:description" content="Complete guide to atrial fibrillation from expert cardiologist." />
        <meta name="twitter:image" content="https://www.drmanishganwani.com/blog-images/blog9.png" />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/blog/atrial-fibrillation-management" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Atrial Fibrillation: Causes, Symptoms, and Treatment",
          "description": "Complete guide to atrial fibrillation - causes, symptoms, diagnosis, and treatment options from expert cardiologist.",
          "author": {
            "@type": "Person",
            "name": "Dr. Manish Ganwani",
            "jobTitle": "Cardiologist",
            "alumniOf": "Sree Chitra Tirunal Institute, Trivandrum"
          },
          "datePublished": "2024-01-21",
          "dateModified": "2024-01-21",
          "image": "https://www.drmanishganwani.com/blog-images/blog9.png",
          "keywords": "atrial fibrillation, AFib, arrhythmia, heart rhythm disorder",
          "url": "https://www.drmanishganwani.com/blog/atrial-fibrillation-management",
          "publisher": {
            "@type": "Organization",
            "name": "Ganwani Heart Care Clinic"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.drmanishganwani.com/blog/atrial-fibrillation-management"
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
              Atrial Fibrillation: Causes, Symptoms, and Treatment
            </h1>
            
            <div className="flex items-center text-gray-500 mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">January 21, 2024</span>
              <Clock className="h-5 w-5 mr-2" />
              <span>10 min read</span>
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
              src="/blog-images/blog9.png"
              alt="Atrial fibrillation ECG reading"
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Atrial fibrillation (AFib) is the most common irregular heart rhythm, affecting millions of people worldwide. As a cardiologist with extensive experience in managing rhythm disorders, I've seen how proper diagnosis and treatment can dramatically improve patients' quality of life and reduce serious complications.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">What is Atrial Fibrillation?</h2>
            
            <p className="text-gray-700 mb-4">
              Atrial fibrillation is a heart rhythm disorder where the heart's upper chambers (atria) beat irregularly and often rapidly. Instead of contracting normally, the atria quiver or fibrillate, leading to an irregular and often fast heartbeat.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Types of Atrial Fibrillation</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Paroxysmal AFib:</strong> Episodes that come and go, usually lasting less than 7 days</li>
              <li><strong>Persistent AFib:</strong> Continuous AFib lasting more than 7 days</li>
              <li><strong>Long-standing persistent AFib:</strong> Continuous AFib lasting more than 12 months</li>
              <li><strong>Permanent AFib:</strong> AFib that cannot be converted to normal rhythm</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Causes and Risk Factors</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Common Causes</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>High blood pressure</li>
              <li>Coronary artery disease</li>
              <li>Heart valve problems</li>
              <li>Heart failure</li>
              <li>Overactive thyroid</li>
              <li>Sleep apnea</li>
              <li>Excessive alcohol consumption</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Risk Factors</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Age (risk increases with age)</li>
              <li>Family history of AFib</li>
              <li>Obesity</li>
              <li>Diabetes</li>
              <li>Chronic kidney disease</li>
              <li>European ancestry</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Symptoms</h2>
            
            <p className="text-gray-700 mb-4">
              Some people with AFib have no symptoms, while others experience:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Heart palpitations (rapid, fluttering, or pounding heartbeat)</li>
              <li>Fatigue and weakness</li>
              <li>Shortness of breath</li>
              <li>Chest pain or pressure</li>
              <li>Dizziness or lightheadedness</li>
              <li>Reduced exercise tolerance</li>
              <li>Confusion (in elderly patients)</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Diagnosis</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Diagnostic Tests</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>ECG (Electrocardiogram):</strong> Primary test to diagnose AFib</li>
              <li><strong>Holter monitor:</strong> 24-48 hour continuous heart rhythm monitoring</li>
              <li><strong>Event monitor:</strong> Longer-term monitoring for intermittent symptoms</li>
              <li><strong>Echocardiogram:</strong> Evaluates heart structure and function</li>
              <li><strong>Blood tests:</strong> Check for thyroid problems and other conditions</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Complications</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Serious Complications of Untreated AFib:</h3>
              <ul className="list-disc list-inside text-red-700 space-y-1">
                <li><strong>Stroke:</strong> 5 times higher risk due to blood clots</li>
                <li><strong>Heart failure:</strong> Weakened heart muscle over time</li>
                <li><strong>Cognitive decline:</strong> Reduced blood flow to the brain</li>
                <li><strong>Other embolic events:</strong> Blood clots to other organs</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Treatment Options</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Rate Control</h3>
            <p className="text-gray-700 mb-4">
              Medications to control heart rate while allowing AFib to continue:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Beta-blockers</li>
              <li>Calcium channel blockers</li>
              <li>Digoxin</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Rhythm Control</h3>
            <p className="text-gray-700 mb-4">
              Strategies to restore and maintain normal heart rhythm:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Cardioversion:</strong> Electric shock or medications to reset rhythm</li>
              <li><strong>Antiarrhythmic medications:</strong> Drugs to maintain normal rhythm</li>
              <li><strong>Catheter ablation:</strong> Procedure to destroy abnormal heart tissue</li>
              <li><strong>Surgical maze procedure:</strong> Open-heart surgery for complex cases</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Anticoagulation</h3>
            <p className="text-gray-700 mb-4">
              Blood thinners to prevent stroke and blood clots:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Warfarin (traditional blood thinner)</li>
              <li>Direct oral anticoagulants (DOACs): rivaroxaban, apixaban, dabigatran</li>
              <li>Left atrial appendage closure devices (for those who can't take blood thinners)</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Lifestyle Management</h2>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Maintain a healthy weight</li>
              <li>Exercise regularly (as approved by your doctor)</li>
              <li>Limit alcohol consumption</li>
              <li>Manage stress effectively</li>
              <li>Control blood pressure and diabetes</li>
              <li>Treat sleep apnea if present</li>
              <li>Avoid excessive caffeine</li>
            </ul>

            <div className="bg-accent rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Expert AFib Management</h3>
              <p className="text-gray-700 mb-4">
                Managing atrial fibrillation requires a comprehensive, individualized approach. With proper treatment, most people with AFib can lead normal, active lives while significantly reducing their risk of stroke and other complications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90">
                    Schedule Consultation
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

export default BlogPost9;
