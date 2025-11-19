
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { Heart, Activity, AlertTriangle, TrendingUp, Stethoscope, Shield, Zap, Users, Zap as Pulse, Target } from 'lucide-react';
import { useBlogs } from '../hooks/use-blogs';
import { Blog as BlogType } from '../lib/supabase';

const Blog = () => {
  const [showAllPosts, setShowAllPosts] = useState(false);
  const { data: blogs, isLoading, error } = useBlogs();

  // Hardcoded blog posts as fallback
  const newBlogPosts = [
    {
      id: 8,
      title: "ASD, VSD, PDA: Understanding Congenital Heart Defects",
      excerpt: "Comprehensive guide to congenital heart defects including symptoms, diagnosis, and treatment options for ASD, VSD, and PDA.",
      image: "https://www.drmanishganwani.com/blog-images/blog8.png",
      date: "January 22, 2024",
      readTime: "8 min read",
      icon: Users,
      slug: "asd-vsd-pda-heart-defects"
    },
    {
      id: 9,
      title: "Atrial Fibrillation: Causes, Symptoms, and Treatment",
      excerpt: "Complete guide to atrial fibrillation management including causes, symptoms, diagnosis, and modern treatment approaches.",
      image: "https://www.drmanishganwani.com/blog-images/blog9.png",
      date: "January 21, 2024",
      readTime: "10 min read",
      icon: Pulse,
      slug: "atrial-fibrillation-management"
    },
    {
      id: 10,
      title: "Hypertension Management Tips",
      excerpt: "Expert tips for managing high blood pressure through lifestyle changes, medications, and regular monitoring for optimal heart health.",
      image: "https://www.drmanishganwani.com/blog-images/blog10.png",
      date: "January 23, 2024",
      readTime: "7 min read",
      icon: Target,
      slug: "hypertension-management"
    },
    {
      id: 4,
      title: "How to Manage High Cholesterol?",
      excerpt: "Comprehensive guide to understanding and managing high cholesterol levels through lifestyle changes and medical treatments.",
      image: "https://www.drmanishganwani.com/blog-images/blog4.png",
      date: "January 20, 2024",
      readTime: "6 min read",
      icon: TrendingUp,
      slug: "how-to-manage-high-cholesterol"
    },
    {
      id: 5,
      title: "What is Coronary Angiography?",
      excerpt: "Learn about coronary angiography, a vital diagnostic procedure for detecting heart blockages and planning treatment.",
      image: "https://www.drmanishganwani.com/blog-images/blog5.png",
      date: "January 18, 2024",
      readTime: "8 min read",
      icon: Stethoscope,
      slug: "what-is-coronary-angiography"
    },
    {
      id: 6,
      title: "How to Get Angioplasty Free of Cost?",
      excerpt: "Complete guide to accessing free angioplasty through Ayushman Bharat and PMJAY schemes for eligible patients.",
      image: "https://www.drmanishganwani.com/blog-images/blog6.png",
      date: "January 16, 2024",
      readTime: "7 min read",
      icon: Shield,
      slug: "free-angioplasty-ayushman"
    },
    {
      id: 7,
      title: "What is Angioplasty?",
      excerpt: "Understanding angioplasty procedure, types, benefits, and recovery process explained by an experienced cardiologist.",
      image: "https://www.drmanishganwani.com/blog-images/blog7.png",
      date: "January 14, 2024",
      readTime: "9 min read",
      icon: Zap,
      slug: "what-is-angioplasty"
    }
  ];

  const existingBlogPosts = [
    {
      id: 1,
      title: "When Should You Consult a Cardiologist? Essential Guidelines",
      excerpt: "Learn about the key symptoms and risk factors that indicate you should consult a heart specialist immediately for optimal cardiac care.",
      image: "https://www.drmanishganwani.com/blog-images/blog1.png",
      date: "January 15, 2024",
      readTime: "5 min read",
      icon: Heart,
      slug: "when-to-consult-cardiologist"
    },
    {
      id: 2,
      title: "ECG vs TMT: Understanding the Difference and When Each is Needed",
      excerpt: "A comprehensive guide to cardiac diagnostic tests and their specific applications in heart disease detection and monitoring.",
      image: "https://www.drmanishganwani.com/blog-images/blog2.png",
      date: "January 10, 2024",
      readTime: "7 min read",
      icon: Activity,
      slug: "ecg-vs-tmt-difference"
    },
    {
      id: 3,
      title: "Heart Attack Warning Signs You Should Never Ignore",
      excerpt: "Critical information about recognizing heart attack symptoms early, including signs specific to women and elderly patients.",
      image: "https://www.drmanishganwani.com/blog-images/blog3.png",
      date: "January 5, 2024",
      readTime: "6 min read",
      icon: AlertTriangle,
      slug: "heart-attack-warning-signs"
    }
  ];

  const hardcodedBlogPosts = [...newBlogPosts, ...existingBlogPosts];

  // Function to sort blogs by date (latest first)
  const sortBlogsByDate = (blogs: any[]) => {
    return blogs.sort((a, b) => {
      // Parse dates and compare them
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      
      // Sort in descending order (latest first)
      return dateB.getTime() - dateA.getTime();
    });
  };

  // Default icons for different blog types
  const defaultIcons = {
    'heart': Heart,
    'activity': Activity,
    'alert': AlertTriangle,
    'trending': TrendingUp,
    'stethoscope': Stethoscope,
    'shield': Shield,
    'zap': Zap,
    'users': Users,
    'pulse': Pulse,
    'target': Target
  };

  // Function to map database blog to BlogCard props
  const mapBlogToCardProps = (blog: BlogType) => {
    // Default values for missing fields
    const defaultImage = "https://www.drmanishganwani.com/blog-images/blog1.png";
    const defaultExcerpt = "No excerpt available";
    
    // Generate slug - use existing slug or create one from title
    let defaultSlug = blog.slug;
    if (!defaultSlug || defaultSlug.trim() === '') {
      // Create slug from title if none exists
      defaultSlug = blog.title
        ? blog.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-') // Replace multiple hyphens with single
            .trim()
        : `blog-${blog.id}`;
    }
    
    // Handle null/empty featured_image
    const imageUrl = blog.featured_image && blog.featured_image.trim() !== '' 
      ? blog.featured_image 
      : defaultImage;
    
    // Calculate read time based on content length (rough estimate: 200 words per minute)
    const wordCount = blog.content && blog.content.trim() !== '' ? blog.content.split(' ').length : 0;
    const readTimeMinutes = Math.ceil(wordCount / 200) || 1; // Minimum 1 min read
    const readTime = `${readTimeMinutes} min read`;

    // Format date
    const date = blog.created_at ? new Date(blog.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : 'Date not available';

    // Select a default icon (cycling through available icons)
    const iconKeys = Object.keys(defaultIcons);
    const iconIndex = (parseInt(blog.id) || 0) % iconKeys.length;
    const selectedIcon = defaultIcons[iconKeys[iconIndex] as keyof typeof defaultIcons] || Heart; // Fallback to Heart icon

    // Ensure we have a valid icon
    const finalIcon = selectedIcon && typeof selectedIcon === 'function' ? selectedIcon : Heart;
    
    return {
      id: parseInt(blog.id) || 1,
      title: blog.title || 'Untitled Blog Post',
      excerpt: blog.excerpt || defaultExcerpt,
      image: imageUrl,
      date: date,
      readTime: readTime,
      icon: finalIcon,
      slug: defaultSlug
    };
  };

  // Transform blogs data for BlogCard components with error handling
  let transformedBlogs: any[] = [];
  try {
    transformedBlogs = blogs ? blogs.map(mapBlogToCardProps) : [];
  } catch (error) {
    console.error('Error transforming blog data:', error);
    transformedBlogs = [];
  }
  
  // Always include hardcoded posts and append backend blogs to them
  const allBlogPosts = [...hardcodedBlogPosts, ...transformedBlogs];
  
  // Sort all blogs by date (latest first)
  const sortedBlogPosts = sortBlogsByDate(allBlogPosts);
  
  const displayedPosts = showAllPosts ? sortedBlogPosts : sortedBlogPosts.slice(0, 6);

  // Debug logging (remove in production)
  if (process.env.NODE_ENV === 'development') {
    console.log('Blogs from Supabase:', blogs);
    console.log('Transformed blogs:', transformedBlogs);
    console.log('Hardcoded blogs:', hardcodedBlogPosts);
    console.log('All blog posts:', allBlogPosts);
    console.log('Displayed posts:', displayedPosts);
    
    // Debug icon selection
    if (transformedBlogs.length > 0) {
      console.log('First blog icon:', transformedBlogs[0]?.icon);
      console.log('Icon type:', typeof transformedBlogs[0]?.icon);
      console.log('First blog slug:', transformedBlogs[0]?.slug);
      
      // Debug content format
      if (blogs && blogs[0]) {
        console.log('First blog content type:', typeof blogs[0].content);
        console.log('First blog content length:', blogs[0].content?.length);
        console.log('First blog content preview:', blogs[0].content?.substring(0, 200));
      }
    }
  }

  const handleViewMore = () => {
    setShowAllPosts(true);
    // Smooth scroll to the new content
    setTimeout(() => {
      const element = document.getElementById('additional-posts');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Ensure we always have something to render
  if (error && !blogs) {
    console.error('Critical error loading blogs:', error);
  }

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Heart Health Blog | Cardiology Tips Nagpur | Dr. Manish Ganwani | Bhandara Umred Seoni</title>
        <meta name="description" content="Expert cardiology advice from Dr. Manish Ganwani, best heart specialist in Nagpur. Health tips for Bhandara, Umred, Seoni patients. Learn about angioplasty, hypertension, cardiac care with 15+ years experience." />
        <meta name="keywords" content="cardiology blog nagpur, heart health tips bhandara, cardiac care advice umred, heart specialist seoni, angioplasty information nagpur, hypertension management bhandara, heart disease prevention umred, cardiac health nagpur, cardiologist advice seoni" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nagpur, Maharashtra" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Heart Health Blog | Expert Cardiology Tips from Dr. Manish Ganwani" />
        <meta property="og:description" content="Expert cardiology advice from leading heart specialist in Nagpur. Health tips for Bhandara, Umred, Seoni patients. 15+ years cardiac care experience." />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://www.drmanishganwani.com/blog" />
        <meta property="og:image" content="https://www.drmanishganwani.com/blog-images/blog10.png" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Dr. Manish Ganwani - Cardiologist Nagpur" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Heart Health Blog | Expert Cardiology Tips" />
        <meta name="twitter:description" content="Expert cardiology advice from Dr. Manish Ganwani, leading heart specialist serving Nagpur, Bhandara, Umred, Seoni." />
        <meta name="twitter:image" content="https://www.drmanishganwani.com/blog-images/blog10.png" />
        
        <link rel="canonical" href="https://www.drmanishganwani.com/blog" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Dr. Manish Ganwani's Heart Health Blog",
          "description": "Expert cardiology advice and heart health tips from leading cardiologist in Nagpur serving Bhandara, Umred, Seoni",
          "url": "https://www.drmanishganwani.com/blog",
          "author": {
            "@type": "Person",
            "name": "Dr. Manish Ganwani",
            "jobTitle": "Cardiologist",
            "medicalSpecialty": "Cardiology",
            "worksFor": {
              "@type": "MedicalClinic",
              "name": "Ganwani Heart Care Clinic",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nagpur",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              }
            }
          },
          "publisher": {
            "@type": "Organization",
            "name": "Ganwani Heart Care Clinic",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nagpur",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            }
          },
          "inLanguage": "en-IN",
          "about": ["Heart Health", "Cardiology", "Preventive Care", "Cardiac Treatments"],
          "audience": {
            "@type": "PeopleAudience",
            "geographicArea": ["Nagpur", "Bhandara", "Umred", "Seoni", "Maharashtra"]
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-accent to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Expert Cardiology Insights & Heart Health Tips from Dr. Manish Ganwani
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore expert cardiology insights, heart health tips, and the latest in cardiac care from Dr. Manish Ganwani. Stay informed with trusted advice on heart conditions, treatments, and prevention.
              </p>
            </div>
          </div>
        </section>



        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <p className="mt-4 text-gray-600">Loading blog posts...</p>
                
                {/* Skeleton loading state */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                      <div className="h-48 bg-gray-200"></div>
                      <div className="p-6">
                        <div className="h-4 bg-gray-200 rounded mb-3"></div>
                        <div className="h-4 bg-gray-200 rounded mb-3 w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded mb-3 w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                  <p className="text-red-600 font-medium">Error loading blog posts</p>
                  <p className="text-red-500 text-sm mt-2">{error.message}</p>
                </div>
              </div>
            )}



            {/* Fallback for when there are blogs but transformation fails */}
            {!isLoading && !error && blogs && blogs.length > 0 && transformedBlogs.length === 0 && (
              <div className="text-center py-12">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md mx-auto">
                  <p className="text-yellow-600 font-medium">Blog data loaded but display issue detected</p>
                  <p className="text-yellow-500 text-sm mt-2">
                    Please check the console for errors or contact support.
                  </p>
                  
                  {/* Show raw blog data for debugging */}
                  <details className="mt-4 text-left">
                    <summary className="cursor-pointer text-yellow-700 font-medium">Show Raw Data</summary>
                    <pre className="mt-2 text-xs bg-yellow-100 p-2 rounded overflow-auto max-h-40">
                      {JSON.stringify(blogs, null, 2)}
                    </pre>
                  </details>
                </div>
              </div>
            )}

            {!isLoading && !error && allBlogPosts.length > 0 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayedPosts.map((post, index) => {
                    // Safety check for post data
                    if (!post || !post.icon) {
                      console.error('Invalid post data:', post);
                      return null;
                    }
                    
                    return (
                      <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <BlogCard {...post} />
                      </div>
                    );
                  })}
                </div>
                
                {allBlogPosts.length > 6 && !showAllPosts && (
                  <div className="text-center mt-12">
                    <Button 
                      onClick={handleViewMore}
                      variant="outline" 
                      className="border-primary text-primary hover:bg-accent text-lg px-8 py-3"
                    >
                      View More Health Articles
                    </Button>
                  </div>
                )}
              </>
            )}


          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
