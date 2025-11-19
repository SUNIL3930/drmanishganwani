import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import BestCardiologistInNagpur from "./pages/BestCardiologistInNagpur";
import Offers from "./pages/Offers";
import Blog from "./pages/Blog";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";
import BlogPost7 from "./pages/BlogPost7";
import BlogPost8 from "./pages/BlogPost8";
import BlogPost9 from "./pages/BlogPost9";
import BlogPost10 from "./pages/BlogPost10";
import DynamicBlogPost from "./pages/DynamicBlogPost";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// Location pages
import BhandaraLocation from "./pages/locations/BhandaraLocation";
import UmredLocation from "./pages/locations/UmredLocation";
import SakoliLocation from "./pages/locations/SakoliLocation";
import TumsarLocation from "./pages/locations/TumsarLocation";
import SeoniLocation from "./pages/locations/SeoniLocation";
import ChhindwaraLocation from "./pages/locations/ChhindwaraLocation";
import ShahdolLocation from "./pages/locations/ShahdolLocation";
import YavatmalLocation from "./pages/locations/YavatmalLocation";
import MandlaLocation from "./pages/locations/MandlaLocation";
import SatnaLocation from "./pages/locations/SatnaLocation";
import KatniLocation from "./pages/locations/KatniLocation";
import SagarLocation from "./pages/locations/SagarLocation";
import NarsinghpurLocation from "./pages/locations/NarsinghpurLocation";
import RewaLocation from "./pages/locations/RewaLocation";
import BetulLocation from "./pages/locations/BetulLocation";
import BalaghatLocation from "./pages/locations/BalaghatLocation";
import JabalpurLocation from "./pages/locations/JabalpurLocation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/best-cardiologist-in-nagpur" element={<BestCardiologistInNagpur />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<Blog />} />
            {/* Dynamic blog post route - must come before specific routes */}
            <Route path="/blog/:slug" element={<DynamicBlogPost />} />
            {/* Keep existing specific routes for backward compatibility */}
            <Route path="/blog/when-to-consult-cardiologist" element={<BlogPost1 />} />
            <Route path="/blog/ecg-vs-tmt-difference" element={<BlogPost2 />} />
            <Route path="/blog/heart-attack-warning-signs" element={<BlogPost3 />} />
            <Route path="/blog/how-to-manage-high-cholesterol" element={<BlogPost4 />} />
            <Route path="/blog/what-is-coronary-angiography" element={<BlogPost5 />} />
            <Route path="/blog/free-angioplasty-ayushman" element={<BlogPost6 />} />
            <Route path="/blog/what-is-angioplasty" element={<BlogPost7 />} />
            <Route path="/blog/asd-vsd-pda-heart-defects" element={<BlogPost8 />} />
            <Route path="/blog/atrial-fibrillation-management" element={<BlogPost9 />} />
            <Route path="/blog/hypertension-management" element={<BlogPost10 />} />
            
            {/* Location pages */}
            <Route path="/locations/bhandara" element={<BhandaraLocation />} />
            <Route path="/locations/umred" element={<UmredLocation />} />
            <Route path="/locations/sakoli" element={<SakoliLocation />} />
            <Route path="/locations/tumsar" element={<TumsarLocation />} />
            <Route path="/locations/seoni" element={<SeoniLocation />} />
            <Route path="/locations/chhindwara" element={<ChhindwaraLocation />} />
            <Route path="/locations/shahdol" element={<ShahdolLocation />} />
            <Route path="/locations/yavatmal" element={<YavatmalLocation />} />
            <Route path="/locations/mandla" element={<MandlaLocation />} />
            <Route path="/locations/satna" element={<SatnaLocation />} />
            <Route path="/locations/katni" element={<KatniLocation />} />
            <Route path="/locations/sagar" element={<SagarLocation />} />
            <Route path="/locations/narsinghpur" element={<NarsinghpurLocation />} />
            <Route path="/locations/rewa" element={<RewaLocation />} />
            <Route path="/locations/betul" element={<BetulLocation />} />
            <Route path="/locations/balaghat" element={<BalaghatLocation />} />
            <Route path="/locations/jabalpur" element={<JabalpurLocation />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
