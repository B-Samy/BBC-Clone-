"use client";

import Link from 'next/link';
import { mostReadArticles } from '@/lib/data';

export default function MostReadSection() {
  return (
    <section className="bg-card rounded-lg border overflow-hidden">
      <div className="bg-muted p-4 border-b">
        <h2 className="font-bold">Most Read</h2>
      </div>
      
      <div>
        {mostReadArticles.map((article, index) => (
          <Link 
            key={index} 
            href={`/news/${article.slug}`}
            className="block p-4 hover:bg-muted/50 transition-colors duration-200 border-b last:border-b-0"
          >
            <div className="flex items-start">
              <span className="text-2xl font-bold text-muted-foreground mr-3">{index + 1}</span>
              <h3 className="font-medium line-clamp-2">{article.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}