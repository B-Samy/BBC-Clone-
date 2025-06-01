"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, User, X, Bell, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { navigationItems } from '@/lib/constants';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b' : 'bg-background'}`}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2 md:hidden" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
            
            <Link href="/" className="flex items-center">
              <div className="bg-red-700 text-white px-2 py-1 text-lg font-bold mr-2">BBC</div>
              <span className="font-bold text-lg hidden sm:inline-block">NEWS</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleSearch}>
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {mounted ? (
                theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                )
              ) : null}
            </Button>


     

              
 <SignedOut>
        <SignInButton >
             <Button variant="ghost" size="sm" className="flex items-center gap-2">
    <User className="h-4 w-4" />
  </Button> 
        </SignInButton>
      </SignedOut>
  
      <SignedIn>
        <UserButton />
      </SignedIn>



         

          </div>
        </div>
        
        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-3 border-t border-b">
            <div className="relative">
              <input
                type="text"
                placeholder="Search BBC"
                className="w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
                autoFocus
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={toggleSearch}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block py-2">
          <ul className="flex space-x-5 overflow-x-auto whitespace-nowrap text-sm font-medium">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="hover:text-red-700 transition-colors duration-200">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t py-4 animate-in slide-in-from-top">
            <nav>
              <ul className="space-y-4 px-2">
                {navigationItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      href={item.path} 
                      className="block py-2 hover:text-red-700 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
