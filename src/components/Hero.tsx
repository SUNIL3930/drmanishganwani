
import React, { useEffect, useRef } from 'react';
import { Phone, MapPin, Calendar, Star, Award, Users, CheckCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && leftContentRef.current && rightContentRef.current) {
      const tl = gsap.timeline();
      
      // Animate left content
      tl.fromTo(leftContentRef.current, 
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      )
      // Animate right content
      .fromTo(rightContentRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );

      // Animate individual elements with stagger
      gsap.fromTo(".hero-stat", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.8 }
      );

      gsap.fromTo(".hero-button", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 1.0 }
      );

      gsap.fromTo(".hero-service-card", 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, delay: 1.2 }
      );
    }
  }, []);

  const handleCallClick = () => {
    window.location.href = 'tel:+919373511338';
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/919373511338';
  };

  const handleAppointmentClick = () => {
    navigate('/contact');
  };

  return (
    <section ref={heroRef} id="home" className="bg-primary text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={leftContentRef}>
            {/* Trust Indicators */}
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-white font-medium">4.9 • 500+ Google Reviews</span>
            </div>
            
            {/* Verification Badge */}
            <div className="flex items-center mb-6">
              <Shield className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-green-200 font-semibold">Medical Registration Verified</span>
            </div>
            
            {/* Main Heading */}
            <div className="mb-6">
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-3">
                Dr. Manish Ganwani
              </h1>
              <div className="text-lg lg:text-xl text-white/90 font-semibold mb-2">
                Young & Dynamic Cardiologist - DM Cardiology
              </div>
              <div className="text-base text-white/80 mb-4">
                Expert in Interventional Cardiology with 8+ Years of Experience
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="bg-white/10 rounded-lg p-4 mb-6 border border-white/20">
              <div className="flex items-center text-white font-semibold text-lg">
                <Award className="h-5 w-5 mr-2" />
                DM Cardiology • Sree Chitra Tirunal Institute (AIR 7)
              </div>
            </div>

            {/* Certifications & Affiliations */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-sm text-white/90">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                DM Cardiology (AIR 7)
              </div>
              <div className="flex items-center text-sm text-white/90">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                MD General Medicine
              </div>
              <div className="flex items-center text-sm text-white/90">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Interventional Specialist
              </div>
              <div className="flex items-center text-sm text-white/90">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                24/7 Emergency Care
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-white rounded-xl shadow-sm">
              <div className="text-center hero-stat">
                <div className="text-2xl font-bold text-primary">20000+</div>
                <div className="text-sm text-gray-600">Patients Treated</div>
              </div>
              <div className="text-center hero-stat">
                <div className="text-2xl font-bold text-primary">10000+</div>
                <div className="text-sm text-gray-600">Procedures Done</div>
              </div>
              <div className="text-center hero-stat">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/10 hero-button"
                onClick={handleAppointmentClick}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-primary hover:bg-white/10 hero-button"
                onClick={handleCallClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91-9373511338
              </Button>
            </div>

            {/* Location & Hours */}
            <div className="space-y-3 text-white/90">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Ganwani Heart Care Clinic, BS6, Sadoday Complex, Central Avenue Road, Nagpur</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>Mon-Sat: 10AM-8PM</span>
              </div>
            </div>
          </div>
          
          <div ref={rightContentRef} className="text-center">
            <img
              src="/images/dr-ganwani.jpg"
              alt="Dr. Manish Ganwani - Best Cardiologist in Nagpur"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
            
            {/* Emergency Contact Card */}
            <div className="mt-8 bg-red-600 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Cardiac Emergency?</h3>
              <p className="mb-4">Don't wait - call immediately for life-saving care</p>
              <Button 
                className="bg-white text-red-600 hover:bg-gray-100 w-full"
                onClick={handleCallClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency: +91-9373511338
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
