
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Page Not Found | Dr. Manish Ganwani | Cardiologist in Nagpur</title>
        <meta name="description" content="The page you're looking for doesn't exist. Visit Dr. Manish Ganwani's homepage for cardiac care services in Nagpur." />
        <meta name="keywords" content="page not found, dr manish ganwani, cardiologist nagpur, pre angioplasty, Free angioplasty under Ayushman, mjpjay" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="noindex, follow" />
        <meta name="theme-color" content="#556960" />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/404" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-primary hover:text-primary/80 underline">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
