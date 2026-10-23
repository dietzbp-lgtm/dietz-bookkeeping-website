import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, color = "bg-blue-500" }) => {
  return (
    <Link 
      to={link.endsWith('/') ? link : `${link}/`}
      className="group block h-full"
    >
      <div className="h-full bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col relative overflow-hidden">
        <div className={cn("absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 opacity-10 transition-transform group-hover:scale-150", color)} />
        
        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg shadow-blue-500/20", color)}>
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="flex items-center text-blue-700 font-medium text-sm mt-auto group-hover:translate-x-1 transition-transform">
          Explore {title} <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
