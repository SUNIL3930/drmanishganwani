import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPost8 = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>ASD, VSD, PDA: Understanding Congenital Heart Defects | Dr. Manish Ganwani</title>
        <meta name="description" content="Comprehensive guide to congenital heart defects - ASD, VSD, and PDA. Learn about symptoms, diagnosis, and treatment options from expert cardiologist Dr. Manish Ganwani." />
        <meta name="keywords" content="ASD, VSD, PDA, congenital heart defects, atrial septal defect, ventricular septal defect, patent ductus arteriosus, pediatric cardiology, Dr. Manish Ganwani, cardiologist Nagpur, heart surgery" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="ASD, VSD, PDA: Understanding Congenital Heart Defects | Dr. Manish Ganwani" />
        <meta property="og:description" content="Comprehensive guide to congenital heart defects - ASD, VSD, and PDA from expert cardiologist." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.drmanishganwani.com/blog/asd-vsd-pda-heart-defects" />
        <meta property="og:image" content="https://www.drmanishganwani.com/blog-images/blog8.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ASD, VSD, PDA: Understanding Congenital Heart Defects" />
        <meta name="twitter:description" content="Comprehensive guide to congenital heart defects from expert cardiologist." />
        <meta name="twitter:image" content="https://www.drmanishganwani.com/blog-images/blog8.png" />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/blog/asd-vsd-pda-heart-defects" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "ASD, VSD, PDA: Understanding Congenital Heart Defects",
          "description": "Comprehensive guide to congenital heart defects - ASD, VSD, and PDA. Learn about symptoms, diagnosis, and treatment options.",
          "author": {
            "@type": "Person",
            "name": "Dr. Manish Ganwani",
            "jobTitle": "Cardiologist",
            "alumniOf": "Sree Chitra Tirunal Institute, Trivandrum"
          },
          "datePublished": "2024-01-22",
          "dateModified": "2024-01-22",
          "image": "https://www.drmanishganwani.com/blog-images/blog8.png",
          "keywords": "ASD, VSD, PDA, congenital heart defects, pediatric cardiology",
          "url": "https://www.drmanishganwani.com/blog/asd-vsd-pda-heart-defects",
          "publisher": {
            "@type": "Organization",
            "name": "Ganwani Heart Care Clinic"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.drmanishganwani.com/blog/asd-vsd-pda-heart-defects"
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
              ASD, VSD, PDA: Understanding Congenital Heart Defects
            </h1>
            
            <div className="flex items-center text-gray-500 mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">January 22, 2024</span>
              <Clock className="h-5 w-5 mr-2" />
              <span>8 min read</span>
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
              src="/blog-images/blog8.png"
              alt="Congenital heart defects illustration"
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Congenital heart defects are structural abnormalities of the heart that are present from birth. Among the most common types are Atrial Septal Defect (ASD), Ventricular Septal Defect (VSD), and Patent Ductus Arteriosus (PDA). Understanding these conditions is crucial for early detection and appropriate management.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">What Are Congenital Heart Defects?</h2>
            
            <p className="text-gray-700 mb-4">
              Congenital heart defects occur when the heart or blood vessels don't develop normally during pregnancy. These structural problems can affect the heart's ability to pump blood efficiently and may require medical intervention ranging from monitoring to surgical repair.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Atrial Septal Defect (ASD)</h2>
            
            <p className="text-gray-700 mb-4">
              An ASD is a hole in the wall (septum) that separates the two upper chambers (atria) of the heart. This allows oxygen-rich blood from the left atrium to mix with oxygen-poor blood in the right atrium.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Symptoms of ASD</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Shortness of breath during exercise</li>
              <li>Fatigue and weakness</li>
              <li>Frequent respiratory infections</li>
              <li>Heart murmur detected during examination</li>
              <li>In severe cases: heart failure symptoms</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Ventricular Septal Defect (VSD)</h2>
            
            <p className="text-gray-700 mb-4">
              VSD is the most common congenital heart defect, involving a hole in the wall separating the two lower chambers (ventricles) of the heart. This causes oxygen-rich blood to flow from the left ventricle to the right ventricle.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Types of VSD</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Small VSDs:</strong> Often close on their own and may not require treatment</li>
              <li><strong>Medium VSDs:</strong> May require monitoring and possible surgical repair</li>
              <li><strong>Large VSDs:</strong> Usually require surgical closure to prevent complications</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Patent Ductus Arteriosus (PDA)</h2>
            
            <p className="text-gray-700 mb-4">
              PDA occurs when the ductus arteriosus, a blood vessel that normally closes after birth, remains open. This creates an abnormal connection between the aorta and pulmonary artery, causing extra blood flow to the lungs.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Signs and Symptoms</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Rapid breathing or breathlessness</li>
              <li>Poor feeding and slow weight gain in infants</li>
              <li>Continuous heart murmur</li>
              <li>Increased susceptibility to respiratory infections</li>
              <li>Exercise intolerance in older children</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Diagnosis</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Diagnostic Methods</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Echocardiogram:</strong> Primary diagnostic tool showing heart structure and function</li>
              <li><strong>Chest X-ray:</strong> May show enlarged heart or increased lung markings</li>
              <li><strong>ECG:</strong> Can detect irregular heart rhythms or chamber enlargement</li>
              <li><strong>Cardiac catheterization:</strong> For complex cases requiring detailed assessment</li>
              <li><strong>Pulse oximetry:</strong> Measures oxygen levels in the blood</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Treatment Options</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Non-Surgical Management</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Regular monitoring with echocardiograms</li>
              <li>Medications to manage symptoms (diuretics, ACE inhibitors)</li>
              <li>Prevention of infective endocarditis with antibiotics when needed</li>
              <li>Activity restrictions if recommended by cardiologist</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Surgical Interventions</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Device closure:</strong> Minimally invasive procedure using catheter-based devices</li>
              <li><strong>Open heart surgery:</strong> Direct surgical repair with patch or sutures</li>
              <li><strong>Timing:</strong> Usually performed in childhood, but can be done in adults</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Prognosis and Long-term Outlook</h2>
            
            <p className="text-gray-700 mb-4">
              The prognosis for patients with ASD, VSD, and PDA is generally excellent with appropriate treatment. Many small defects close spontaneously, while larger ones can be successfully repaired with minimal long-term complications.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Follow-up Care</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Regular cardiology appointments</li>
              <li>Periodic echocardiograms to monitor heart function</li>
              <li>Endocarditis prophylaxis when indicated</li>
              <li>Exercise and activity guidelines</li>
              <li>Genetic counseling for family planning</li>
            </ul>

            <div className="bg-accent rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Expert Congenital Heart Care</h3>
              <p className="text-gray-700 mb-4">
                As an experienced cardiologist, I provide comprehensive evaluation and management of congenital heart defects. Early detection and appropriate treatment can ensure optimal outcomes and quality of life for patients with these conditions.
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

export default BlogPost8;
