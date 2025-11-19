import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPost5 = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>What is Coronary Angiography | Dr. Manish Ganwani | Cardiologist Nagpur</title>
        <meta name="description" content="Learn about coronary angiography procedure, preparation, risks, and benefits. Expert guidance from Dr. Manish Ganwani, interventional cardiologist." />
        <meta name="keywords" content="coronary angiography, heart catheterization, cardiac diagnostics, angiogram, Dr. Manish Ganwani, cardiologist Nagpur, heart blockage detection, coronary artery disease" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="What is Coronary Angiography | Dr. Manish Ganwani" />
        <meta property="og:description" content="Learn about coronary angiography procedure, preparation, risks, and benefits from an expert cardiologist." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.drmanishganwani.com/blog/what-is-coronary-angiography" />
        <meta property="og:image" content="https://www.drmanishganwani.com/blog-images/blog5.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What is Coronary Angiography" />
        <meta name="twitter:description" content="Learn about coronary angiography procedure, preparation, risks, and benefits." />
        <meta name="twitter:image" content="https://www.drmanishganwani.com/blog-images/blog5.png" />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/blog/what-is-coronary-angiography" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "What is Coronary Angiography?",
          "description": "Learn about coronary angiography procedure, preparation, risks, and benefits",
          "author": {
            "@type": "Person",
            "name": "Dr. Manish Ganwani",
            "jobTitle": "Cardiologist",
            "alumniOf": "Sree Chitra Tirunal Institute, Trivandrum"
          },
          "datePublished": "2024-01-18",
          "image": "https://www.drmanishganwani.com/blog-images/blog5.png",
          "keywords": "coronary angiography, cardiac diagnostics, heart catheterization, angiogram",
          "url": "https://www.drmanishganwani.com/blog/what-is-coronary-angiography",
          "publisher": {
            "@type": "Organization",
            "name": "Ganwani Heart Care Clinic"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.drmanishganwani.com/blog/what-is-coronary-angiography"
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
              What is Coronary Angiography?
            </h1>
            
            <div className="flex items-center text-gray-500 mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">January 18, 2024</span>
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
              src="/blog-images/blog5.png"
              alt="Coronary angiography procedure"
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Coronary angiography is a specialized medical procedure that provides detailed images of your heart's blood vessels, helping diagnose and treat coronary artery disease. As an interventional cardiologist, I perform this procedure regularly to help patients understand their heart health and plan appropriate treatments.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">What is Coronary Angiography?</h2>
            
            <p className="text-gray-700 mb-4">
              Coronary angiography, also known as cardiac catheterization, is a minimally invasive procedure that uses contrast dye and X-rays to visualize the coronary arteries. It's considered the gold standard for diagnosing coronary artery disease and determining the best treatment approach.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">How is the Procedure Performed?</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Step-by-Step Process</h3>
            <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Preparation:</strong> Local anesthesia is applied to the insertion site (usually wrist or groin)</li>
              <li><strong>Catheter insertion:</strong> A thin, flexible tube is inserted into the artery</li>
              <li><strong>Navigation:</strong> The catheter is guided to the coronary arteries</li>
              <li><strong>Contrast injection:</strong> Special dye is injected through the catheter</li>
              <li><strong>Imaging:</strong> X-ray images are taken to visualize blood flow</li>
              <li><strong>Assessment:</strong> Any blockages or narrowing are identified and evaluated</li>
            </ol>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">When is Angiography Recommended?</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Common Indications</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Chest pain (angina) that doesn't respond to medication</li>
              <li>Abnormal stress test results</li>
              <li>Heart attack (acute or previous)</li>
              <li>Unexplained heart failure</li>
              <li>Before major surgery in high-risk patients</li>
              <li>Evaluation of heart valve problems</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Preparation for the Procedure</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Pre-procedure Instructions</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Fast for 6-8 hours before the procedure</li>
              <li>Inform your doctor about all medications and allergies</li>
              <li>Arrange for someone to drive you home</li>
              <li>Wear comfortable, loose-fitting clothes</li>
              <li>Remove jewelry and metal objects</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Risks and Complications</h2>
            
            <p className="text-gray-700 mb-4">
              While generally safe, coronary angiography carries some risks:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Bleeding or bruising at the insertion site</li>
              <li>Allergic reaction to contrast dye</li>
              <li>Irregular heart rhythms</li>
              <li>Kidney problems (rare)</li>
              <li>Stroke or heart attack (very rare)</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Important Note:</h3>
              <p className="text-blue-700">
                The benefits of accurate diagnosis far outweigh the risks. Modern techniques and equipment have made angiography extremely safe with complication rates less than 1%.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">After the Procedure</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Recovery Guidelines</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Rest for several hours after the procedure</li>
              <li>Keep the insertion site clean and dry</li>
              <li>Avoid heavy lifting for 24-48 hours</li>
              <li>Drink plenty of fluids to help eliminate the contrast dye</li>
              <li>Follow up with your cardiologist as scheduled</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Treatment Planning</h2>
            
            <p className="text-gray-700 mb-4">
              Based on angiography results, treatment options may include:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Medication management</li>
              <li>Angioplasty with stent placement</li>
              <li>Coronary artery bypass surgery</li>
              <li>Lifestyle modifications</li>
            </ul>

            <div className="bg-accent rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Expert Cardiac Care</h3>
              <p className="text-gray-700 mb-4">
                As an experienced interventional cardiologist, I ensure that every angiography procedure is performed with the highest standards of safety and accuracy. Early detection and proper treatment planning can significantly improve your heart health outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90">
                    Book Consultation
                  </Button>
                </Link>
                <Button variant="outline" className="border-primary text-primary">
                  Call: +91-9373511338
                </Button>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost5;
