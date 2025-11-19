import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useBlogBySlug } from '../hooks/use-blogs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Loader2, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const DynamicBlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: blog, isLoading, error } = useBlogBySlug(slug || '');

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Loading Blog Post | Dr. Manish Ganwani</title>
        </Helmet>
        <div className="min-h-screen bg-white">
          <Navbar />
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
              <p className="text-gray-600">Loading blog post...</p>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  if (error || !blog) {
    return <Navigate to="/blog" replace />;
  }

  // Calculate read time
  const wordCount = blog.content?.split(' ').length || 0;
  const readTime = Math.ceil(wordCount / 200);

  // Format date
  const formattedDate = blog.created_at 
    ? new Date(blog.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'Date not available';

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{blog.title} | Dr. Manish Ganwani - Cardiologist Nagpur</title>
        <meta name="description" content={blog.excerpt || blog.title} />
        <meta name="keywords" content="cardiology, heart health, cardiologist nagpur, dr manish ganwani" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt || blog.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.drmanishganwani.com/blog/${slug}`} />
        {blog.featured_image && (
          <meta property="og:image" content={blog.featured_image} />
        )}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.excerpt || blog.title} />
        {blog.featured_image && (
          <meta name="twitter:image" content={blog.featured_image} />
        )}
        
        <link rel="canonical" href={`https://www.drmanishganwani.com/blog/${slug}`} />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Back to Blog Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="mb-6 text-primary hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </div>

        {/* Blog Post Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">{formattedDate}</span>
              <Clock className="h-5 w-5 mr-2" />
              <span>{readTime} min read</span>
            </div>

            {blog.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed">
                {blog.excerpt}
              </p>
            )}
          </header>

          {/* Featured Image */}
          {blog.featured_image && (
            <div className="mb-8">
              <img
                src={blog.featured_image}
                alt={blog.title}
                className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            {/* Render content with proper HTML and CSS classes */}
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ 
                __html: blog.content || 'No content available.'
              }}
            />
            
            {/* Fallback: Show content as plain text if HTML rendering fails */}
            {!blog.content && (
              <div className="text-gray-600 italic">
                No content available for this blog post.
              </div>
            )}
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Published on {formattedDate}
              </div>
              <Button
                variant="outline"
                onClick={() => window.history.back()}
                className="text-primary border-primary hover:bg-primary hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </div>
          </footer>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default DynamicBlogPost;
