import React from 'react';
import BlogCard from './BlogCard';
import { Button } from '@/components/ui/button';
import { Users, Activity, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const featuredPosts = [
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
      icon: Activity,
      slug: "atrial-fibrillation-management"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Latest Health Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with expert cardiology advice and heart health tips from Dr. Manish Ganwani.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button variant="outline" className="border-primary text-primary hover:bg-accent text-lg px-8 py-3">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
