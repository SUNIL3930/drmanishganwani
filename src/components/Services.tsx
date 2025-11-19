
import React, { useEffect, useRef } from 'react';
import { Heart, Activity, Stethoscope, Zap, Shield, Clock, Phone, Battery, Gauge, HeartHandshake, Microscope, RadioIcon as Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const navigate = useNavigate();
  const servicesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const emergencyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (servicesRef.current && titleRef.current && emergencyRef.current) {
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

      // Service cards animation
      gsap.fromTo(".service-card",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Emergency section animation
      gsap.fromTo(emergencyRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: emergencyRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const services = [
    {
      icon: Activity,
      title: "ECG",
      shortDesc: "Electrocardiogram testing in Nagpur",
      description: "Comprehensive 12-lead ECG testing to evaluate heart rhythm and detect cardiac abnormalities with advanced digital analysis by Dr. Manish Ganwani.",
      features: ["12-Lead ECG", "Rhythm Analysis", "Digital Reports", "Same-day Results"],
      emergency: false
    },
    {
      icon: Stethoscope,
      title: "2D ECHO AND COLOUR DOPPLER",
      shortDesc: "Advanced cardiac imaging in Nagpur",
      description: "State-of-the-art 2D echocardiography with color Doppler to assess heart structure, function, and blood flow patterns with expert interpretation.",
      features: ["Transthoracic Echo", "Cardiac Function Assessment", "Valve Evaluation", "Blood Flow Analysis"],
      emergency: false
    },
    {
      icon: HeartHandshake,
      title: "PEDIATRIC ECHOCARDIOGRAPHY",
      shortDesc: "Specialized child heart care in Nagpur",
      description: "Expert pediatric echocardiography services for children with congenital heart conditions and cardiac monitoring by experienced cardiologist.",
      features: ["Child-Friendly Approach", "Congenital Heart Disease", "Growth Monitoring", "Family Counseling"],
      emergency: false
    },
    {
      icon: Microscope,
      title: "ANGIOGRAPHY",
      shortDesc: "Cardiac catheterization in Nagpur",
      description: "Advanced coronary angiography procedures to visualize heart arteries and diagnose coronary artery disease with precision imaging technology.",
      features: ["Coronary Angiography", "Diagnostic Catheterization", "Digital Imaging", "Detailed Analysis"],
      emergency: false
    },
    {
      icon: Heart,
      title: "ANGIOPLASTY",
      shortDesc: "Best angioplasty doctor in Nagpur",
      description: "Expert angioplasty procedures to open blocked coronary arteries with high success rates and personalized care by Dr. Manish Ganwani.",
      features: ["Primary Angioplasty", "Elective Procedures", "Stent Placement", "24/7 Emergency Care"],
      emergency: true
    },
    {
      icon: Battery,
      title: "PACEMAKER / ICD",
      shortDesc: "Cardiac device implantation in Nagpur",
      description: "Advanced pacemaker and ICD implantation for patients with heart rhythm disorders using latest technology and expert surgical techniques.",
      features: ["Pacemaker Implantation", "ICD Placement", "Device Programming", "Follow-up Care"],
      emergency: false
    },
    {
      icon: Shield,
      title: "ASD / VSD / PDA CLOSURE",
      shortDesc: "Congenital defect treatment in Nagpur",
      description: "Minimally invasive closure procedures for atrial septal defect, ventricular septal defect, and patent ductus arteriosus with excellent outcomes.",
      features: ["Transcatheter Closure", "Minimally Invasive", "Pediatric & Adult", "Quick Recovery"],
      emergency: false
    },
    {
      icon: Zap,
      title: "TMT",
      shortDesc: "Treadmill stress testing in Nagpur",
      description: "Comprehensive treadmill test (TMT) to evaluate exercise tolerance and detect coronary artery disease with accurate cardiac assessment.",
      features: ["Exercise Testing", "Cardiac Stress Evaluation", "Risk Stratification", "Detailed Reports"],
      emergency: false
    },
    {
      icon: Radio,
      title: "HOLTER STUDY",
      shortDesc: "24-hour heart monitoring in Nagpur",
      description: "Continuous 24-48 hour heart rhythm monitoring to detect intermittent arrhythmias and cardiac events with advanced digital analysis.",
      features: ["24-Hour Monitoring", "Arrhythmia Detection", "Digital Analysis", "Comprehensive Reports"],
      emergency: false
    },
    {
      icon: Gauge,
      title: "VALVULAR HEART DISEASE MANAGEMENT",
      shortDesc: "Heart valve treatment in Nagpur",
      description: "Comprehensive management of heart valve diseases including mitral, aortic, tricuspid, and pulmonary valve disorders by expert cardiologist.",
      features: ["Valve Assessment", "Medical Management", "Surgical Planning", "Long-term Care"],
      emergency: false
    }
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
    <section id="services" className="py-16 lg:py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Comprehensive Cardiac Services in Nagpur
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert cardiac care with advanced technology and personalized treatment approaches for all heart conditions by Dr. Manish Ganwani.
          </p>
        </div>

        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 service-card border border-primary/10"
            >
              {service.emergency && (
                <div className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Emergency Available
                </div>
              )}
              
              <div className="flex items-center mb-6">
                <div className="bg-accent p-3 rounded-full mr-4 transform hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-primary">{service.title}</h2>
                  <p className="text-primary/80 text-sm font-medium">{service.shortDesc}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300"
                onClick={handleBookAppointment}
              >
                Book Appointment
              </Button>
            </div>
          ))}
        </div>

        {/* Emergency Section */}
        <div ref={emergencyRef} className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Cardiac Emergency?</h3>
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
      </div>
    </section>
  );
};

export default Services;
