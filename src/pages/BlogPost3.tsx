import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPost3 = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Heart Attack Prevention: 10 Lifestyle Changes | Dr. Manish Ganwani | DM Cardiology Expert Nagpur</title>
        <meta name="description" content="Learn 10 evidence-based lifestyle changes to prevent heart attacks. Expert advice from Dr. Manish Ganwani, DM Cardiology from Sree Chitra Tirunal Institute." />
        <meta name="keywords" content="heart attack prevention, lifestyle changes, cardiac health, DM cardiology expert, interventional cardiologist, pre angioplasty, Free angioplasty under Ayushman, mjpjay" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Heart Attack Prevention: 10 Lifestyle Changes | Dr. Manish Ganwani" />
        <meta property="og:description" content="Learn 10 evidence-based lifestyle changes to prevent heart attacks. Expert advice from DM Cardiology specialist." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.drmanishganwani.com/blog/heart-attack-prevention-lifestyle-changes" />
        <meta property="og:image" content="https://www.drmanishganwani.com/blog-images/blog3.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Heart Attack Prevention: 10 Lifestyle Changes" />
        <meta name="twitter:description" content="Learn 10 evidence-based lifestyle changes to prevent heart attacks." />
        <meta name="twitter:image" content="https://www.drmanishganwani.com/blog-images/blog3.png" />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/blog/heart-attack-prevention-lifestyle-changes" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Heart Attack Prevention: 10 Lifestyle Changes That Save Lives",
          "description": "Learn 10 evidence-based lifestyle changes that can significantly reduce your risk of heart attacks",
          "author": {
            "@type": "Person",
            "name": "Dr. Manish Ganwani",
            "jobTitle": "Cardiologist",
            "alumniOf": "Sree Chitra Tirunal Institute, Trivandrum"
          },
          "datePublished": "2024-01-05",
          "image": "https://www.drmanishganwani.com/blog-images/blog3.png",
          "url": "https://www.drmanishganwani.com/blog/heart-attack-prevention-lifestyle-changes",
          "publisher": {
            "@type": "Organization",
            "name": "Ganwani Heart Care Clinic"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.drmanishganwani.com/blog/heart-attack-prevention-lifestyle-changes"
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
              Heart Attack Prevention: 10 Lifestyle Changes That Save Lives
            </h1>
            
            <div className="flex items-center text-gray-500 mb-6">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">January 5, 2024</span>
              <Clock className="h-5 w-5 mr-2" />
              <span>6 min read</span>
            </div>
            
            <img
              src="/blog-images/blog3.png"
              alt="Healthy lifestyle for heart"
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Heart attacks are largely preventable through lifestyle modifications. Dr. Manish Ganwani, a young and dynamic cardiologist with DM Cardiology from Sree Chitra Tirunal Institute, shares 10 evidence-based strategies that can significantly reduce your risk of coronary artery disease and heart attacks.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">10 Proven Strategies for Heart Attack Prevention</h2>

            <div className="space-y-8">
              <div className="bg-accent rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">1. Maintain a Heart-Healthy Diet</h3>
                <p className="text-gray-700 mb-3">Focus on:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Fresh fruits and vegetables</li>
                  <li>Whole grains and lean proteins</li>
                  <li>Omega-3 rich fish</li>
                  <li>Nuts and seeds</li>
                  <li>Limit saturated fats and trans fats</li>
                </ul>
              </div>

              <div className="bg-accent rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">2. Exercise Regularly</h3>
                <p className="text-gray-700">
                  Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week. Include strength training exercises twice a week.
                </p>
              </div>

              <div className="bg-accent rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">3. Quit Smoking</h3>
                <p className="text-gray-700">
                  Smoking damages blood vessels and increases heart attack risk by 2-4 times. Quitting smoking immediately starts reducing your risk.
                </p>
              </div>

              <div className="bg-accent rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">4. Control Blood Pressure</h3>
                <p className="text-gray-700">
                  Keep blood pressure below 120/80 mmHg through diet, exercise, stress management, and medication if prescribed.
                </p>
              </div>

              <div className="bg-accent rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">5. Manage Cholesterol Levels</h3>
                <p className="text-gray-700">
                  Keep LDL (bad) cholesterol low and HDL (good) cholesterol high through diet and medication when necessary.
                </p>
              </div>

              <div className="bg-accent rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">6. Maintain Healthy Weight</h3>
                <p className="text-gray-700">
                  Achieve and maintain a BMI between 18.5-24.9. Even losing 5-10% of body weight can significantly reduce heart disease risk.
                </p>
              </div>

              <div className="bg-accent rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">7. Control Diabetes</h3>
                <p className="text-gray-700">
                  Keep blood sugar levels within target range through diet, exercise, and medication. Diabetes doubles heart attack risk.
                </p>
              </div>

              <div className="bg-accent rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">8. Manage Stress</h3>
                <p className="text-gray-700">
                  Practice stress-reduction techniques like meditation, yoga, deep breathing, or regular hobbies. Chronic stress increases heart disease risk.
                </p>
              </div>

              <div className="bg-accent rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">9. Limit Alcohol Consumption</h3>
                <p className="text-gray-700">
                  If you drink, do so in moderation: up to one drink per day for women and up to two drinks per day for men.
                </p>
              </div>

              <div className="bg-accent rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">10. Get Regular Check-ups</h3>
                <p className="text-gray-700">
                  Regular cardiac screenings can detect problems early. Schedule annual check-ups, especially if you have risk factors.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">The Power of Prevention</h2>
            
            <p className="text-gray-700 mb-4">
              Studies show that following these lifestyle changes can reduce heart attack risk by up to 80%. The key is consistency and making gradual, sustainable changes.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Remember: It's Never Too Late to Start</h3>
              <p className="text-red-700">
                Even if you already have heart disease, these lifestyle changes can slow progression and reduce the risk of future heart attacks.
              </p>
            </div>

            <div className="bg-accent rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Start Your Heart-Healthy Journey Today</h3>
              <p className="text-gray-700 mb-4">
                Dr. Manish Ganwani can help you create a personalized heart disease prevention plan based on your individual risk factors and health status. With his expertise in interventional cardiology and comprehensive cardiovascular care, get the guidance you need for optimal heart health.
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

export default BlogPost3;
