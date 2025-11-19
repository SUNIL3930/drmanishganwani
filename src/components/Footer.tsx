
import React from 'react';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Youtube, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:+919373511338';
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/919373511338';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:ganwanimanish001@gmail.com';
  };

  const handleDirectionsClick = () => {
    window.open(`https://www.google.com/maps/place/21%C2%B008'58.1%22N+79%C2%B006'39.8%22E/@21.1494671,79.111056,17z/data=!3m1!4b1!4m4!3m3!8m2!3d21.1494671!4d79.111056?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D`, `_blank`);
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Heart className="h-6 w-6 mr-2" />
              Dr. Manish Ganwani
            </h3>
            <p className="text-white/90 mb-4">
              Trusted cardiologist in Nagpur providing comprehensive heart care with advanced medical expertise and compassionate service.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Ganwani-heart-clinic/100066994312973/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/cardiologist_nagpur/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@drganwani_cardiologist" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/manish-ganwani-573192179/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-white/90" />
                <div>
                  <button
                    onClick={handleCallClick}
                    className="text-white hover:text-white/80 transition-colors block"
                  >
                    +91-9373511338
                  </button>
                  <span className="text-white/70 text-sm">24/7 Emergency</span>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-white/90" />
                <button
                  onClick={handleEmailClick}
                  className="text-white hover:text-white/80 transition-colors"
                >
                  ganwanimanish001@gmail.com
                </button>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-white/90 shrink-0" />
                <button
                  onClick={handleDirectionsClick}
                  className="text-white hover:text-white/80 transition-colors text-left"
                >
                  Ganwani Heart Care Clinic, BS6, Sadoday Complex,<br />
                  Central Avenue Road, Nagpur
                </button>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-white/90" />
                <div className="text-white/90">
                  <div>Mon-Sat: 10:00 AM - 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Heart Health Resources</h4>
            <ul className="space-y-2 text-white/90">
              <li>
                <a
                  href="https://www.drmanishganwani.com/blog/asd-vsd-pda-heart-defects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  ASD, VSD, PDA: Understanding Congenital Heart Defects
                </a>
              </li>
              <li>
                <a
                  href="https://www.drmanishganwani.com/blog/atrial-fibrillation-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Atrial Fibrillation: Causes, Symptoms, and Treatment
                </a>
              </li>
              <li>
                <a
                  href="https://www.drmanishganwani.com/blog/hypertension-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Hypertension Management Tips
                </a>
              </li>
              <li>
                <a
                  href="https://www.drmanishganwani.com/blog/how-to-manage-high-cholesterol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Manage High Cholesterol
                </a>
              </li>
              <li>
                <a
                  href="https://www.drmanishganwani.com/blog/what-is-coronary-angiography"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Coronary Angiography
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/search?q=manish+ganwani&oq=manish+ganwani&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEEUYQDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIGCAYQRRg8MgYIBxBFGDzSAQgyMDM0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Find Best Cardiologist Near Me
                </a>
              </li>
              <li>
                <a
                  href="https://www.drmanishganwani.com/blog/free-angioplasty-ayushman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Angioplasty Free of Cost
                </a>
              </li>
              <li>
                <a
                  href="https://www.drmanishganwani.com/blog/what-is-angioplasty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  What is Angioplasty?
                </a>
              </li>
              <li>
                <a
                  href="https://www.drmanishganwani.com/blog/ecg-vs-tmt-difference"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  ECG vs 2D Echo
                </a>
              </li>
              <li>
                <a
                  href="https://www.drmanishganwani.com/blog/heart-attack-warning-signs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Heart Attack Prevention
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Best Cardiologist in Maharashtra</h4>
            <ul className="space-y-2 text-white/90">
              <li><a href="/locations/bhandara" className="hover:text-white transition-colors">Best Cardiologist in Bhandara</a></li>
              <li><a href="/locations/umred" className="hover:text-white transition-colors">Heart Specialist in Umred</a></li>
              <li><a href="/locations/sakoli" className="hover:text-white transition-colors">Cardiologist in Sakoli Nagpur</a></li>
              <li><a href="/locations/tumsar" className="hover:text-white transition-colors">Heart Doctor in Tumsar</a></li>
              <li><a href="/locations/seoni" className="hover:text-white transition-colors">Best Cardiologist in Seoni</a></li>
              <li><a href="/locations/chhindwara" className="hover:text-white transition-colors">Heart Specialist in Chhindwara</a></li>
              <li><a href="/locations/shahdol" className="hover:text-white transition-colors">Cardiologist in Shahdol</a></li>
              <li><a href="/locations/yavatmal" className="hover:text-white transition-colors">Heart Doctor in Yavatmal</a></li>
              <li><a href="/locations/mandla" className="hover:text-white transition-colors">Cardiologist in Mandla</a></li>
              <li><a href="/locations/satna" className="hover:text-white transition-colors">Heart Specialist in Satna</a></li>
              <li><a href="/locations/katni" className="hover:text-white transition-colors">Cardiologist in Katni</a></li>
              <li><a href="/locations/sagar" className="hover:text-white transition-colors">Heart Doctor in Sagar</a></li>
              <li><a href="/locations/narsinghpur" className="hover:text-white transition-colors">Cardiologist in Narsinghpur</a></li>
              <li><a href="/locations/rewa" className="hover:text-white transition-colors">Heart Specialist in Rewa</a></li>
              <li><a href="/locations/betul" className="hover:text-white transition-colors">Cardiologist in Betul</a></li>
              <li><a href="/locations/balaghat" className="hover:text-white transition-colors">Heart Doctor in Balaghat</a></li>
              <li><a href="/locations/jabalpur" className="hover:text-white transition-colors">Best Cardiologist in Jabalpur</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
          <p>&copy; 2024 Dr. Manish Ganwani - Cardiologist in Nagpur. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Professional cardiac care | Emergency services available 24/7
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
