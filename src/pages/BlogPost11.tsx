
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPost10 = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Hypertension Management Tips | Blood Pressure Control | Dr. Manish Ganwani</title>
        <meta name="description" content="Expert tips for managing hypertension and controlling blood pressure. Learn lifestyle changes, medications, and prevention strategies from cardiologist Dr. Manish Ganwani." />
        <meta name="keywords" content="hypertension, high blood pressure, blood pressure management, lifestyle changes, antihypertensive medications, Dr. Manish Ganwani, cardiologist Nagpur, heart health" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Hypertension Management Tips | Blood Pressure Control | Dr. Manish Ganwani" />
        <meta property="og:description" content="Expert tips for managing hypertension and controlling blood pressure from cardiologist Dr. Manish Ganwani." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.drmanishganwani.com/blog/hypertension-management" />
        <meta property="og:image" content="https://www.drmanishganwani.com/blog-images/blog10.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hypertension Management Tips | Blood Pressure Control" />
        <meta name="twitter:description" content="Expert tips for managing hypertension and controlling blood pressure." />
        <meta name="twitter:image" content="https://www.drmanishganwani.com/blog-images/blog10.png" />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/blog/hypertension-management" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Hypertension Management Tips",
          "description": "Expert tips for managing hypertension and controlling blood pressure. Learn lifestyle changes, medications, and prevention strategies.",
          "author": {
            "@type": "Person",
            "name": "Dr. Manish Ganwani",
            "jobTitle": "Cardiologist",
            "alumniOf": "Sree Chitra Tirunal Institute, Trivandrum"
          },
          "datePublished": "2024-01-23",
          "dateModified": "2024-01-23",
          "image": "https://www.drmanishganwani.com/blog-images/blog10.png",
          "keywords": "hypertension, blood pressure management, lifestyle changes, cardiovascular health",
          "url": "https://www.drmanishganwani.com/blog/hypertension-management",
          "publisher": {
            "@type": "Organization",
            "name": "Ganwani Heart Care Clinic"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.drmanishganwani.com/blog/hypertension-management"
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
              Hypertension Management Tips
            </h1>
            
            <div className="flex items-center text-gray-500 mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">January 23, 2024</span>
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
              src="/blog-images/blog9.png"
              alt="Blood pressure monitoring"
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Hypertension, commonly known as high blood pressure, affects nearly half of all adults worldwide and is a major risk factor for cardiovascular disease. Effective management through lifestyle modifications and appropriate medical treatment can significantly reduce the risk of heart attack, stroke, and other serious complications.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Understanding Blood Pressure Numbers</h2>
            
            <p className="text-gray-700 mb-4">
              Blood pressure readings consist of two numbers: systolic (top number) and diastolic (bottom number), measured in millimeters of mercury (mmHg).
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Blood Pressure Categories</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Normal:</strong> Less than 120/80 mmHg</li>
              <li><strong>Elevated:</strong> 120-129 systolic and less than 80 diastolic</li>
              <li><strong>Stage 1 Hypertension:</strong> 130-139/80-89 mmHg</li>
              <li><strong>Stage 2 Hypertension:</strong> 140/90 mmHg or higher</li>
              <li><strong>Hypertensive Crisis:</strong> Higher than 180/120 mmHg (requires immediate medical attention)</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Lifestyle Modifications</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Dietary Changes</h3>
            
            <h4 className="text-lg font-medium text-primary mt-4 mb-2">DASH Diet Principles</h4>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Increase fruits and vegetables (4-5 servings each per day)</li>
              <li>Choose whole grains over refined grains</li>
              <li>Include low-fat dairy products</li>
              <li>Eat lean proteins (fish, poultry, beans, nuts)</li>
              <li>Limit red meat and processed foods</li>
              <li>Reduce added sugars and refined carbohydrates</li>
            </ul>

            <h4 className="text-lg font-medium text-primary mt-4 mb-2">Sodium Reduction</h4>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Aim for less than 2,300 mg of sodium per day (ideally 1,500 mg)</li>
              <li>Read food labels carefully</li>
              <li>Cook at home more often</li>
              <li>Use herbs and spices instead of salt for flavoring</li>
              <li>Avoid processed and packaged foods</li>
              <li>Limit restaurant meals</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Physical Activity</h3>
            
            <h4 className="text-lg font-medium text-primary mt-4 mb-2">Exercise Recommendations</h4>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>At least 150 minutes of moderate-intensity aerobic activity per week</li>
              <li>Or 75 minutes of vigorous-intensity aerobic activity per week</li>
              <li>Muscle-strengthening activities 2 or more days per week</li>
              <li>Start slowly if you're not currently active</li>
              <li>Choose activities you enjoy (walking, swimming, cycling, dancing)</li>
            </ul>

            <h4 className="text-lg font-medium text-primary mt-4 mb-2">Benefits of Regular Exercise</h4>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Can lower systolic blood pressure by 4-9 mmHg</li>
              <li>Improves heart and blood vessel health</li>
              <li>Helps with weight management</li>
              <li>Reduces stress and improves mood</li>
              <li>Enhances overall cardiovascular fitness</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Weight Management</h3>
            
            <p className="text-gray-700 mb-4">
              Maintaining a healthy weight is crucial for blood pressure control:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Even modest weight loss can make a significant difference</li>
              <li>Aim for a BMI between 18.5-24.9 kg/m²</li>
              <li>Focus on sustainable lifestyle changes rather than crash diets</li>
              <li>Combine dietary changes with regular physical activity</li>
              <li>Monitor portion sizes and practice mindful eating</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Stress Management</h3>
            
            <h4 className="text-lg font-medium text-primary mt-4 mb-2">Effective Stress Reduction Techniques</h4>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Regular meditation or mindfulness practice</li>
              <li>Deep breathing exercises</li>
              <li>Yoga or tai chi</li>
              <li>Regular sleep schedule (7-9 hours per night)</li>
              <li>Time management and prioritization</li>
              <li>Social support and healthy relationships</li>
              <li>Hobbies and recreational activities</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Limiting Alcohol and Avoiding Tobacco</h3>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Alcohol:</strong> Limit to no more than 2 drinks per day for men, 1 for women</li>
              <li><strong>Tobacco:</strong> Quit smoking and avoid secondhand smoke completely</li>
              <li><strong>Caffeine:</strong> Monitor intake if sensitive to caffeine's effects</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Medical Management</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Common Antihypertensive Medications</h3>
            
            <h4 className="text-lg font-medium text-primary mt-4 mb-2">ACE Inhibitors</h4>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Examples: Lisinopril, Enalapril, Ramipril</li>
              <li>Help relax blood vessels and reduce blood volume</li>
            </ul>

            <h4 className="text-lg font-medium text-primary mt-4 mb-2">ARBs (Angiotensin Receptor Blockers)</h4>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Examples: Losartan, Valsartan, Telmisartan</li>
              <li>Block the action of angiotensin II hormone</li>
            </ul>

            <h4 className="text-lg font-medium text-primary mt-4 mb-2">Calcium Channel Blockers</h4>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Examples: Amlodipine, Nifedipine, Diltiazem</li>
              <li>Prevent calcium from entering heart and blood vessel cells</li>
            </ul>

            <h4 className="text-lg font-medium text-primary mt-4 mb-2">Diuretics</h4>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Examples: Hydrochlorothiazide, Chlorthalidone, Spironolactone</li>
              <li>Help kidneys remove excess sodium and water</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Home Blood Pressure Monitoring</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Benefits of Home Monitoring</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Provides more accurate assessment of blood pressure control</li>
              <li>Helps detect white coat hypertension</li>
              <li>Identifies masked hypertension</li>
              <li>Monitors response to treatment</li>
              <li>Increases patient engagement in care</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Proper Monitoring Technique</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Use a validated, properly sized cuff</li>
              <li>Sit quietly for 5 minutes before measuring</li>
              <li>Keep feet flat on floor, back supported</li>
              <li>Arm should be at heart level</li>
              <li>Take multiple readings and record the average</li>
              <li>Measure at the same times each day</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">When to Seek Medical Attention</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Seek Immediate Medical Care if:</h3>
              <ul className="list-disc list-inside text-red-700 space-y-1">
                <li>Blood pressure reading is 180/120 mmHg or higher</li>
                <li>Severe headache with high blood pressure</li>
                <li>Chest pain or shortness of breath</li>
                <li>Severe nausea or vomiting</li>
                <li>Confusion or changes in vision</li>
                <li>Severe anxiety or feeling of impending doom</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Long-term Success Strategies</h2>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Set realistic, achievable goals</li>
              <li>Track your progress with a blood pressure log</li>
              <li>Work closely with your healthcare team</li>
              <li>Take medications as prescribed, even if you feel fine</li>
              <li>Regular follow-up appointments</li>
              <li>Stay educated about your condition</li>
              <li>Build a support system</li>
            </ul>

            <div className="bg-accent rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Comprehensive Hypertension Care</h3>
              <p className="text-gray-700 mb-4">
                As an experienced cardiologist, I provide personalized hypertension management plans that combine lifestyle modifications with appropriate medical treatment. Regular monitoring and adjustment of treatment ensure optimal blood pressure control and reduced cardiovascular risk.
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

export default BlogPost10;
