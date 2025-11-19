
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  id: number | string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  icon: React.ComponentType<any>;
  slug: string;
}

const BlogCard = ({ title, excerpt, image, date, readTime, icon: Icon, slug }: BlogCardProps) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${slug}`);
  };

  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary p-2 rounded-full">
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="mr-4">{date}</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {excerpt}
        </p>
        
        <button
          onClick={handleReadMore}
          className="inline-flex items-center text-primary font-semibold hover:underline cursor-pointer"
        >
          Read More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default BlogCard;
