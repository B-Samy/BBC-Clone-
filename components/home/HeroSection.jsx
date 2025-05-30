"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { heroArticle, featuredArticles } from '@/lib/data';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [timeAgo, setTimeAgo] = useState('');
  
  useEffect(() => {
    setMounted(true);
    setTimeAgo(formatDistanceToNow(new Date(heroArticle.publishedAt), { addSuffix: true }));
    
    const timer = setInterval(() => {
      setTimeAgo(formatDistanceToNow(new Date(heroArticle.publishedAt), { addSuffix: true }));
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Top Stories</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Hero Article */}
        <div className="lg:col-span-8 bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow duration-200">
          <Link href={`/news/${heroArticle.slug}`} className="block">
            <div className="relative aspect-[16/9]">
              <Image 
                
                src="https://i.ytimg.com/vi/M0JRk9LPOq4/maxresdefault.jpg"
                alt={heroArticle.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{heroArticle.title}</h3>
              <p className="text-muted-foreground mb-3">{heroArticle.summary}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                <span>{timeAgo}</span>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Featured Articles */}
        <div className="lg:col-span-4 space-y-4">
          {featuredArticles.map((article, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow duration-200">
              <Link href={`/news/${article.slug}`} className="block">
                <div className="relative aspect-[16/9]">
                  <Image 
                    src={article.image} 
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bold mb-2">{article.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          
          <Link href="/news" className="flex items-center text-red-700 hover:text-red-800 font-medium">
            <span>View all news</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}