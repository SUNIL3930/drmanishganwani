
import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Doctor', href: '/best-cardiologist-in-nagpur' },
    { name: 'Services', href: '/#services' },
    { name: 'Offers', href: '/offers' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      // If we're not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // If on home page, just scroll
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  const handleAppointmentClick = () => {
    navigate('/contact');
    setIsOpen(false);
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919373511338';
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span className="font-medium">Emergency: +91-9373511338</span>
              </div>
              <div className="hidden md:flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Ganwani Heart Care Clinic, Nagpur</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Mon-Sat: 10AM-8PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="cursor-pointer flex items-center h-20" onClick={() => navigate('/')}>
            <img
              src="/logo.png"
              alt="Dr. Manish Ganwani Logo"
              className="h-16 w-auto max-w-[220px] object-contain"
            />
          </div>


          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-accent"
              onClick={handleCallClick}
            >
              <Phone className="h-4 w-4 mr-1" />
              Call Now
            </Button>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90"
              onClick={handleAppointmentClick}
            >
              <Calendar className="h-4 w-4 mr-1" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-accent transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-accent transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="px-3 py-2 space-y-2">
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={handleAppointmentClick}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
              <Button
                variant="outline"
                className="w-full border-primary text-primary"
                onClick={handleCallClick}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
