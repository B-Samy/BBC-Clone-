"use client";

import Link from 'next/link';
import { footerLinks } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-8 pb-16 mt-12">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Link href="/" className="flex items-center">
            <div className="bg-white text-black px-2 py-1 text-lg font-bold mr-2">BBC</div>
            <span className="font-bold text-lg">NEWS</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.url} 
                      className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-6 border-t border-neutral-700 text-neutral-400 text-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Use</Link>
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
              <Link href="/cookies" className="hover:text-white transition-colors duration-200">Cookies</Link>
              <Link href="/accessibility" className="hover:text-white transition-colors duration-200">Accessibility</Link>
            </div>
            <div>
              © {new Date().getFullYear()} BBC. The BBC is not responsible for the content of external sites.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}