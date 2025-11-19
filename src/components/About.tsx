
import React, { useEffect, useRef } from 'react';
import { Award, Users, Heart, Clock, GraduationCap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const navigate = useNavigate();
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) {
      gsap.fromTo(aboutRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const achievements = [
    { icon: Users, number: "20000", text: "2d Echocardiography" },
    { icon: Heart, number: "10000", text: "Angiographies" },
    { icon: Award, number: "2000", text: "Angioplasties" },
    { icon: Clock, number: "8+", text: "Years of Experience" }
  ];

  const handleAboutClick = () => {
    navigate('/best-cardiologist-in-nagpur');
  };

  return (
    <section className="py-16 lg:py-24 bg-accent/30" ref={aboutRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <span className="text-primary font-semibold text-lg">About the Doctor</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2 mb-4">
                Dr. Manish Ganwani
              </h2>
              <div className="text-xl text-primary/80 font-semibold mb-4">
                Young & Dynamic Cardiologist - DM Cardiology
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Dr. Manish Ganwani, a young and dynamic cardiologist with over 8 years of experience, is dedicated to providing comprehensive cardiovascular care that combines advanced medical expertise with personalized patient-centered treatment.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-700">DM Cardiology - Sree Chitra Tirunal Institute, Trivandrum (AIR 7)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-700">MD General Medicine - IGGMC Nagpur (1st Attempt)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-700">Expert in Diagnostic & Interventional Cardiology</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-700">Compassionate Care with Advanced Medical Technology</span>
              </div>
            </div>

            <Button 
              onClick={handleAboutClick}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
            >
              View More About Doctor
            </Button>
          </div>
          
          <div className="text-center">
            
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-lg text-center">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">{item.number}</div>
                  <div className="text-gray-600 text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
