import React, { useEffect, useRef } from 'react';
import { Heart, Activity, Stethoscope, Microscope, RadioIcon as Radio, Phone, Calendar, CheckCircle, Star, Shield, Zap, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Offers = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLDivElement>(null);
  const offersRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current && offersRef.current && ctaRef.current) {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Offers animation
      gsap.fromTo(".offer-card",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: offersRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // CTA animation
      gsap.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const offers = [
    {
      icon: Activity,
      title: "Basic Cardiac Evaluation",
      price: "₹2,300",
      originalPrice: "₹3,500",
      savings: "Save ₹1,200",
      description: "Essential cardiac screening package for basic heart health assessment",
      includes: [
        "ECG (Electrocardiogram)",
        "2D Echo with Color Doppler",
        "Cardiologist Consultation",
        "Digital Reports",
        "Same-day Results"
      ],
      features: [
        "12-Lead ECG Analysis",
        "Heart Function Assessment",
        "Valve Evaluation",
        "Blood Flow Analysis",
        "Expert Interpretation"
      ],
      popular: false
    },
    {
      icon: Stethoscope,
      title: "Cardiac & Metabolic Evaluation",
      price: "₹4,500",
      originalPrice: "₹7,200",
      savings: "Save ₹2,700",
      description: "Comprehensive cardiac and metabolic health assessment package",
      includes: [
        "ECG (Electrocardiogram)",
        "2D Echo with Color Doppler",
        "Cardiologist Consultation",
        "60 Blood Tests Panel",
        "Metabolic Profile Analysis"
      ],
      features: [
        "Complete Blood Count",
        "Lipid Profile",
        "Kidney Function Tests",
        "Liver Function Tests",
        "Diabetes Screening",
        "Thyroid Function Tests"
      ],
      popular: true
    },
    {
      icon: Microscope,
      title: "Complete Cardiac Evaluation",
      price: "₹10,000",
      originalPrice: "₹15,000",
      savings: "Save ₹5,000",
      description: "Advanced cardiac diagnostic package with angiography",
      includes: [
        "ECG (Electrocardiogram)",
        "2D Echo with Color Doppler",
        "Cardiologist Consultation",
        "Coronary Angiography",
        "Digital Imaging & Reports"
      ],
      features: [
        "Coronary Artery Visualization",
        "Blockage Detection",
        "Treatment Planning",
        "Risk Assessment",
        "Follow-up Consultation"
      ],
      popular: false
    },

  ];

  const handleBookAppointment = () => {
    navigate('/contact');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919373511338';
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/919373511338';
  };

  return (
    <div className="min-h-screen bg-accent/30">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={titleRef} className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <span className="text-white font-medium text-lg">4.9 • 500+ Google Reviews</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Special Cardiac Evaluation Packages
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Comprehensive cardiac care packages designed by Dr. Manish Ganwani to provide the best value for your heart health
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2 border border-white/20">
                <Shield className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-green-200 font-semibold">Medical Council Verified</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2 border border-white/20">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-green-200 font-semibold">8+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={offersRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 offer-card border-2 ${
                  offer.popular ? 'border-primary shadow-xl ring-4 ring-primary/10' : 'border-primary/10'
                }`}
              >
                {offer.popular && (
                  <div className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-6 transform -rotate-2">
                    ⭐ Most Popular Package
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className="bg-accent p-4 rounded-full mr-4 transform hover:scale-110 transition-transform">
                    <offer.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">{offer.title}</h2>
                    <p className="text-primary/80 text-base">{offer.description}</p>
                  </div>
                </div>

                {/* Price Section */}
                <div className="bg-accent/50 rounded-xl p-6 mb-6 text-center">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="text-4xl font-bold text-primary">{offer.price}</span>
                    <span className="text-xl text-gray-500 line-through">{offer.originalPrice}</span>
                  </div>
                  <div className="text-lg font-semibold text-green-600">{offer.savings}</div>
                </div>

                {/* Package Includes */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Package Includes:
                  </h3>
                  <ul className="space-y-2">
                    {offer.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                    Key Features:
                  </h3>
                  <ul className="space-y-2">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full text-lg py-4 transition-all duration-300 ${
                    offer.popular 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-accent hover:bg-accent/80 text-primary border-2 border-primary'
                  }`}
                  onClick={handleBookAppointment}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book This Package
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Why Choose Dr. Ganwani's Cardiac Packages?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert cardiac care with advanced technology and personalized treatment approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Expert Care</h3>
              <p className="text-gray-600">DM Cardiology specialist with 8+ years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Activity className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art diagnostic equipment and imaging</p>
            </div>
            <div className="text-center">
              <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Gauge className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Comprehensive Reports</h3>
              <p className="text-gray-600">Detailed analysis and personalized recommendations</p>
            </div>
            <div className="text-center">
              <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Affordable Care</h3>
              <p className="text-gray-600">Quality cardiac care at competitive prices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 lg:py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Heart Health?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Book your cardiac evaluation package today and get expert care from Dr. Manish Ganwani, 
            one of Nagpur's leading cardiologists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 transition-all duration-300 transform hover:-translate-y-1"
              onClick={handleBookAppointment}
            >
              <Calendar className="mr-2 h-6 w-6" />
              Book Appointment
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 transition-all duration-300 transform hover:-translate-y-1"
              onClick={handleCallClick}
            >
              <Phone className="mr-2 h-6 w-6" />
              Call: +91-9373511338
            </Button>
          </div>

          <div className="bg-white/10 rounded-xl p-6 inline-block">
            <div className="flex items-center justify-center text-white">
              <div className="flex text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="font-semibold">Trusted by 20,000+ patients in Nagpur</span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Cardiac Emergency?</h3>
          <p className="text-red-100 mb-6 text-lg">
            Don't wait - immediate cardiac care can save your life. Dr. Ganwani is available for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-3 transition-all duration-300 transform hover:-translate-y-1"
              onClick={handleCallClick}
            >
              <Phone className="mr-2 h-5 w-5" />
              Emergency: +91-9373511338
            </Button>
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-3 transition-all duration-300 transform hover:-translate-y-1"
              onClick={handleWhatsAppClick}
            >
              WhatsApp Emergency
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Offers;
