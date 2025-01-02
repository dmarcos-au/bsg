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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-4-LH3QegbkwR4wALc09rUZDPCmQhmETy.svg" 
              alt="Building Spaces Group Logo" 
              width={180} 
              height={40} 
              className="h-10 w-auto"
            />
          </Link>
          <nav>
            <ul className="flex space-x-8">
              <li><Link href="/#product" className="text-gray-700 hover:text-primary transition duration-300">Our Product</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-primary transition duration-300">About</Link></li>
              <li><Link href="/#contact" className="bg-primary text-white hover:bg-opacity-90 transition-colors duration-200 py-2 px-4 rounded">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

