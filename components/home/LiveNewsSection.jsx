"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { liveNewsUpdates } from '@/lib/data';
import { formatDistanceToNow } from 'date-fns';

export default function LiveNewsSection() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="mb-8">
      <div className="flex items-center mb-4">
        <div className="bg-red-600 text-white px-3 py-1 rounded-md mr-2 text-sm font-bold animate-pulse">
          LIVE
        </div>
        <h2 className="text-xl font-bold">Latest Updates</h2>
      </div>
      
      <div className="border border-red-200 rounded-lg overflow-hidden bg-red-50 dark:bg-red-950/20">
        <div className="bg-red-100 dark:bg-red-900/30 p-3 border-b border-red-200">
          <h3 className="font-bold">Breaking News</h3>
        </div>
        
        <div className="divide-y divide-red-200">
          {liveNewsUpdates.map((update, index) => {
            const timeAgo = formatDistanceToNow(new Date(update.timestamp), { addSuffix: true });
            
            return (
              <div key={index} className="p-4 hover:bg-red-100/50 dark:hover:bg-red-900/10 transition-colors duration-200">
                <div className="flex items-center text-xs text-muted-foreground mb-1">
                  <span className="font-medium">{timeAgo}</span>
                </div>
                <Link href={`/live/${update.id}`} className="block">
                  <h4 className="font-bold mb-1">{update.title}</h4>
                  <p className="text-sm text-muted-foreground">{update.content}</p>
                </Link>
              </div>
            );
          })}
        </div>
        
        <div className="bg-red-100 dark:bg-red-900/30 p-3 text-center">
          <Link href="/live" className="text-red-700 hover:text-red-800 font-medium text-sm">
            Follow our live coverage
          </Link>
        </div>
      </div>
    </section>
  );
}