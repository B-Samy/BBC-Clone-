"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { getArticlesByCategory } from '@/lib/data';

export default function NewsByCategorySection({ category }) {
  const articles = getArticlesByCategory(category);
  
  if (!articles || articles.length === 0) return null;

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{category}</h2>
        <Link href={`/category/${category.toLowerCase()}`} className="text-red-700 hover:text-red-800 text-sm font-medium">
          More {category} news
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div 
            key={index} 
            className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Link href={`/news/${article.slug}`}>
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
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{article.summary}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}