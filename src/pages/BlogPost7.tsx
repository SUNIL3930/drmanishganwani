import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPost7 = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>What is Angioplasty | Complete Guide | Dr. Manish Ganwani | Cardiologist Nagpur</title>
        <meta name="description" content="Complete guide to angioplasty procedure, types, benefits, risks, and recovery. Expert insights from Dr. Manish Ganwani, interventional cardiologist." />
        <meta name="keywords" content="angioplasty, balloon angioplasty, stent placement, coronary angioplasty, heart blockage treatment, Dr. Manish Ganwani, cardiologist Nagpur, interventional cardiology" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="What is Angioplasty | Complete Guide | Dr. Manish Ganwani" />
        <meta property="og:description" content="Complete guide to angioplasty procedure, types, benefits, risks, and recovery from an expert cardiologist." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.drmanishganwani.com/blog/what-is-angioplasty" />
        <meta property="og:image" content="https://www.drmanishganwani.com/blog-images/blog7.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What is Angioplasty | Complete Guide" />
        <meta name="twitter:description" content="Complete guide to angioplasty procedure, types, benefits, risks, and recovery." />
        <meta name="twitter:image" content="https://www.drmanishganwani.com/blog-images/blog7.png" />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/blog/what-is-angioplasty" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "What is Angioplasty?",
          "description": "Complete guide to angioplasty procedure, types, benefits, risks, and recovery",
          "author": {
            "@type": "Person",
            "name": "Dr. Manish Ganwani",
            "jobTitle": "Cardiologist",
            "alumniOf": "Sree Chitra Tirunal Institute, Trivandrum"
          },
          "datePublished": "2024-01-14",
          "image": "https://www.drmanishganwani.com/blog-images/blog7.png",
          "keywords": "angioplasty, stent placement, coronary angioplasty, interventional cardiology",
          "url": "https://www.drmanishganwani.com/blog/what-is-angioplasty",
          "publisher": {
            "@type": "Organization",
            "name": "Ganwani Heart Care Clinic"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.drmanishganwani.com/blog/what-is-angioplasty"
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
              What is Angioplasty?
            </h1>
            
            <div className="flex items-center text-gray-500 mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">January 14, 2024</span>
              <Clock className="h-5 w-5 mr-2" />
              <span>9 min read</span>
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
              src="/blog-images/blog7.png"
              alt="Angioplasty procedure"
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Angioplasty is one of the most effective and commonly performed procedures in interventional cardiology. As a cardiologist with extensive experience in performing angioplasties, I've witnessed firsthand how this life-saving procedure has transformed the treatment of coronary artery disease and given countless patients a second chance at healthy living.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">What is Angioplasty?</h2>
            
            <p className="text-gray-700 mb-4">
              Angioplasty, medically known as Percutaneous Coronary Intervention (PCI), is a minimally invasive procedure used to open blocked or narrowed coronary arteries. The procedure involves inserting a tiny balloon into the blocked artery and inflating it to compress the plaque against the artery walls, restoring normal blood flow to the heart muscle.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Types of Angioplasty</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">1. Balloon Angioplasty</h3>
            <p className="text-gray-700 mb-4">
              The original form where only a balloon is used to open the artery. However, this method has largely been replaced by stent placement due to higher rates of re-narrowing.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">2. Stent Angioplasty</h3>
            <p className="text-gray-700 mb-4">
              The most common type today, where a small metal mesh tube (stent) is placed in the artery to keep it open permanently.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">3. Drug-Eluting Stent (DES)</h3>
            <p className="text-gray-700 mb-4">
              Advanced stents coated with medication that helps prevent re-narrowing of the artery, significantly reducing the need for repeat procedures.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">When is Angioplasty Recommended?</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Emergency Situations</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Heart attack (ST-elevation myocardial infarction)</li>
              <li>Unstable angina with high-risk features</li>
              <li>Cardiogenic shock due to coronary blockage</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Elective Procedures</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Stable angina not responding to medication</li>
              <li>Significant coronary blockages (&gt;70%)</li>
              <li>Abnormal stress test results</li>
              <li>Lifestyle-limiting chest pain</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">The Angioplasty Procedure</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Step-by-Step Process</h3>
            <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Preparation:</strong> Local anesthesia is administered at the catheter insertion site</li>
              <li><strong>Access:</strong> A small incision is made in the wrist or groin artery</li>
              <li><strong>Catheter insertion:</strong> Guide catheters are positioned at the coronary artery openings</li>
              <li><strong>Wire placement:</strong> A guidewire is threaded across the blockage</li>
              <li><strong>Balloon inflation:</strong> The balloon is inflated to compress the plaque</li>
              <li><strong>Stent deployment:</strong> If needed, a stent is placed to keep the artery open</li>
              <li><strong>Final assessment:</strong> Blood flow is checked to ensure success</li>
            </ol>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Benefits of Angioplasty</h2>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Immediate relief:</strong> Quick restoration of blood flow</li>
              <li><strong>Minimally invasive:</strong> No need for open-heart surgery</li>
              <li><strong>Short recovery:</strong> Most patients go home within 24-48 hours</li>
              <li><strong>High success rate:</strong> Over 95% success rate in appropriate cases</li>
              <li><strong>Improved quality of life:</strong> Significant reduction in chest pain and breathlessness</li>
              <li><strong>Life-saving:</strong> Particularly crucial in heart attacks</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Risks and Complications</h2>
            
            <p className="text-gray-700 mb-4">
              While angioplasty is generally safe, potential risks include:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Bleeding at the catheter insertion site</li>
              <li>Re-narrowing of the artery (restenosis)</li>
              <li>Blood clots in the stent</li>
              <li>Allergic reaction to contrast dye</li>
              <li>Irregular heart rhythms</li>
              <li>Kidney problems (rare)</li>
              <li>Stroke or heart attack (very rare)</li>
            </ul>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Important:</h3>
              <p className="text-red-700">
                The benefits of angioplasty far outweigh the risks, especially in emergency situations. Modern techniques and equipment have made the procedure extremely safe with major complication rates less than 1%.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Recovery and Post-Procedure Care</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Immediate Recovery</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Bed rest for 4-6 hours after the procedure</li>
              <li>Regular monitoring of vital signs</li>
              <li>Checking the catheter insertion site for bleeding</li>
              <li>Starting dual antiplatelet therapy</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Long-term Care</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Regular medications as prescribed</li>
              <li>Lifestyle modifications (diet, exercise, smoking cessation)</li>
              <li>Regular follow-up appointments</li>
              <li>Cardiac rehabilitation program</li>
              <li>Monitoring for any chest pain or symptoms</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Life After Angioplasty</h2>
            
            <p className="text-gray-700 mb-4">
              Most patients experience significant improvement in their symptoms and quality of life after angioplasty. However, it's important to understand that angioplasty treats the blockage but doesn't cure the underlying coronary artery disease.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Long-term Success Factors</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Adherence to prescribed medications</li>
              <li>Regular exercise and physical activity</li>
              <li>Heart-healthy diet</li>
              <li>Smoking cessation</li>
              <li>Stress management</li>
              <li>Regular medical follow-ups</li>
            </ul>

            <div className="bg-accent rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Expert Angioplasty Care</h3>
              <p className="text-gray-700 mb-4">
                As an experienced interventional cardiologist trained at Sree Chitra Tirunal Institute, I have performed thousands of angioplasty procedures with excellent outcomes. Every case is unique, and I ensure personalized care from diagnosis through recovery and long-term follow-up.
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

export default BlogPost7;
