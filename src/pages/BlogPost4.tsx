import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPost4 = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>How to Manage High Cholesterol | Dr. Manish Ganwani | Cardiologist Nagpur</title>
        <meta name="description" content="Complete guide to managing high cholesterol through diet, lifestyle changes, and medications. Expert advice from Dr. Manish Ganwani, DM Cardiology specialist." />
        <meta name="keywords" content="high cholesterol management, cholesterol diet, heart health, cardiology, Dr. Manish Ganwani, cardiologist Nagpur, heart treatment, cholesterol medication" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="How to Manage High Cholesterol | Dr. Manish Ganwani" />
        <meta property="og:description" content="Complete guide to managing high cholesterol through diet, lifestyle changes, and medications." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.drmanishganwani.com/blog/how-to-manage-high-cholesterol" />
        <meta property="og:image" content="https://www.drmanishganwani.com/blog-images/blog4.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Manage High Cholesterol" />
        <meta name="twitter:description" content="Complete guide to managing high cholesterol through diet, lifestyle changes, and medications." />
        <meta name="twitter:image" content="https://www.drmanishganwani.com/blog-images/blog4.png" />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/blog/how-to-manage-high-cholesterol" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "How to Manage High Cholesterol?",
          "description": "Complete guide to managing high cholesterol through diet, lifestyle changes, and medications",
          "author": {
            "@type": "Person",
            "name": "Dr. Manish Ganwani",
            "jobTitle": "Cardiologist",
            "alumniOf": "Sree Chitra Tirunal Institute, Trivandrum"
          },
          "datePublished": "2024-01-20",
          "image": "https://www.drmanishganwani.com/blog-images/blog4.png",
          "keywords": "high cholesterol, heart health, cardiology, cholesterol management",
          "url": "https://www.drmanishganwani.com/blog/how-to-manage-high-cholesterol",
          "publisher": {
            "@type": "Organization",
            "name": "Ganwani Heart Care Clinic"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.drmanishganwani.com/blog/how-to-manage-high-cholesterol"
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
              How to Manage High Cholesterol?
            </h1>
            
            <div className="flex items-center text-gray-500 mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">January 20, 2024</span>
              <Clock className="h-5 w-5 mr-2" />
              <span>6 min read</span>
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
              src="/blog-images/blog4.png"
              alt="Cholesterol management consultation"
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              High cholesterol is a silent threat that affects millions worldwide, significantly increasing the risk of heart disease and stroke. As a cardiologist with over 8 years of experience, I've helped countless patients successfully manage their cholesterol levels through comprehensive treatment approaches.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Understanding Cholesterol</h2>
            
            <p className="text-gray-700 mb-4">
              Cholesterol is a waxy, fat-like substance found in your blood. While your body needs cholesterol to build healthy cells, high levels can lead to fatty deposits in blood vessels, making it difficult for blood to flow through arteries.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Types of Cholesterol</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>LDL (Low-Density Lipoprotein):</strong> "Bad" cholesterol that builds up in artery walls</li>
              <li><strong>HDL (High-Density Lipoprotein):</strong> "Good" cholesterol that helps remove LDL from arteries</li>
              <li><strong>Triglycerides:</strong> Another type of fat in blood that can increase heart disease risk</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Lifestyle Management Strategies</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">1. Heart-Healthy Diet</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Reduce saturated fats found in red meat and full-fat dairy products</li>
              <li>Eliminate trans fats from processed foods</li>
              <li>Eat foods rich in omega-3 fatty acids (fish, walnuts, flaxseeds)</li>
              <li>Increase soluble fiber intake (oats, beans, apples, barley)</li>
              <li>Add whey protein to your diet</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">2. Regular Physical Activity</h3>
            <p className="text-gray-700 mb-4">
              Exercise can improve cholesterol levels by raising HDL and lowering LDL. Aim for at least 30 minutes of moderate-intensity exercise most days of the week.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">3. Weight Management</h3>
            <p className="text-gray-700 mb-4">
              Losing even 5-10% of your body weight can significantly improve cholesterol levels and reduce cardiovascular risk.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Medical Treatment Options</h2>
            
            <p className="text-gray-700 mb-4">
              When lifestyle changes aren't enough, medications may be necessary:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Statins:</strong> Most commonly prescribed cholesterol-lowering medications</li>
              <li><strong>Bile acid sequestrants:</strong> Help reduce cholesterol absorption</li>
              <li><strong>Cholesterol absorption inhibitors:</strong> Block dietary cholesterol absorption</li>
              <li><strong>PCSK9 inhibitors:</strong> For patients with very high cholesterol levels</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Regular Monitoring</h2>
            
            <p className="text-gray-700 mb-4">
              Regular cholesterol screening is essential. Adults should have their cholesterol checked every 4-6 years, or more frequently if risk factors are present.
            </p>

            <div className="bg-accent rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Take Control of Your Heart Health</h3>
              <p className="text-gray-700 mb-4">
                Managing high cholesterol requires a comprehensive approach combining lifestyle modifications and, when necessary, medical intervention. Don't let high cholesterol silently damage your cardiovascular system.
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

export default BlogPost4;
