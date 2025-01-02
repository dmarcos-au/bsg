'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

const Header = () => {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (href?.startsWith('/#')) {
        const targetId = href.replace('/#', '');
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const links = document.querySelectorAll('a[href^="/#"]');
    links.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/logo.svg" 
              alt="Building Spaces Group Logo" 
              width={180} 
              height={40} 
              className="h-10 w-auto"
            />
          </Link>
          <nav>
            <ul className="hidden md:flex space-x-8">
              <li><Link href="/#product" className="text-gray-700 hover:text-primary transition duration-300">Our Product</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-primary transition duration-300">About</Link></li>
              <li><Link href="/#contact" className="bg-primary text-white hover:bg-opacity-90 transition-colors duration-200 py-2 px-4 rounded">Contact Us</Link></li>
            </ul>
            <div className="relative">
              <button className="md:hidden" onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu?.classList.toggle('hidden');
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div id="mobile-menu" className="hidden md:hidden absolute right-0 top-10 bg-white p-4 rounded shadow-lg w-48">
                <ul className="flex flex-col space-y-4">
                  <li><Link href="/#product" className="block text-gray-700 hover:text-primary transition duration-300">Our Product</Link></li>
                  <li><Link href="/about" className="block text-gray-700 hover:text-primary transition duration-300">About</Link></li>
                  <li><Link href="/#contact" className="block bg-primary text-white hover:bg-opacity-90 transition-colors duration-200 py-2 px-4 rounded text-center">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

