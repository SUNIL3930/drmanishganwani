
import React, { useEffect, useRef } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const navigate = useNavigate();
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Elfsight script if not already loaded
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Animation
    if (testimonialsRef.current) {
      gsap.fromTo(testimonialsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const handleViewAllClick = () => {
    navigate('/testimonials');
  };

  return (
    <section className="py-16 lg:py-24 bg-white" ref={testimonialsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            What Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real experiences from patients who trusted us with their cardiac care
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <div className="flex text-yellow-400 mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-gray-600">Based on Google Reviews</div>
            </div>
          </div>
        </div>

        {/* Google Reviews Widget - Compact Version */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-4xl">
            <div 
              className="elfsight-app-c429b7e4-24ae-454c-98f9-d96c66f77497 rounded-lg shadow-sm bg-white p-4" 
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            onClick={handleViewAllClick}
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-3 transition-all duration-300 transform hover:-translate-y-1"
          >
            View All Testimonials
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            All reviews are verified and updated automatically from Google My Business
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
