import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import ParallaxImage from '@/components/ParallaxImage'
import HeroParallaxImage from '@/components/HeroParallaxImage'
import { FAQAccordion } from '@/components/FAQAccordion'

export default function Home() {
  const faqItems = [
    {
      question: "What is Custom App Branding per Customer?",
      answer: "We customize branding within our app so that when tenants log on, they see their own company&#39;s logo - creating a seamless, integrated experience that feels like their own company&#39;s system."
    },
    {
      question: "What are the pricing options?",
      answer: "We offer flexible pricing tailored to your building&#39;s specific needs. Contact our sales team for a personalized quote that aligns with your requirements and budget."
    },
    {
      question: "How can I apply your product to an entire building?",
      answer: "Our expert team will guide you through a smooth implementation process, ensuring Intenant is seamlessly integrated across your entire building for all tenants and management."
    },
    {
      question: "How do you address user privacy concerns?",
      answer: "We prioritize user privacy with robust security measures and full compliance with data protection regulations, ensuring your tenants&#39; information is always safe and secure."
    },
    {
      question: "Is there support for building managers using Intenant?",
      answer: "Absolutely. Building managers have access to dedicated support channels for any Intenant-related questions or issues, ensuring smooth operations at all times."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h1 className="text-5xl font-bold mb-6 leading-tight">We Build Smart Real Estate Solutions</h1>
              <p className="text-xl mb-8 opacity-90">Empowering building managers and tenants with innovative technology for streamlined, efficient, and enjoyable experiences.</p>
              <div className="space-x-4">
                <Link href="/#product" className="bg-white text-primary hover:bg-gray-100 transition-colors duration-200 text-lg px-8 py-3 rounded">Explore Our Product</Link>
                <Link href="/about" className="border border-white text-white hover:bg-white hover:text-primary transition-colors duration-200 text-lg px-8 py-3 rounded">Learn More</Link>
              </div>
            </div>
            <div className="hidden md:block">
              <HeroParallaxImage />
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center flex items-center justify-center gap-4">
            Our Product 
            <Image 
              src="/images/intenant-logo.svg"
              alt="Intenant Logo"
              width={157}
              height={40}
            />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ParallaxImage />
            <div>
              <div>
                <h3 className="text-3xl font-semibold mb-6">One-Stop Solution for Building Management</h3>
                <p className="text-lg mb-8 text-gray-600 leading-relaxed">Intenant provides building tenants with a seamless and streamlined experience for gaining entry into, and existing within a building. Our innovative platform optimizes every aspect of building management.</p>
                <div className="space-x-4 mb-12">
                  <Link href="/demo" className="bg-primary text-white hover:bg-opacity-90 transition-colors duration-200 text-lg px-6 py-2 rounded">Schedule a Demo</Link>
                  <Link href="/product" className="text-primary font-semibold hover:underline">Learn More →</Link>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">Practical & Efficient</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">Secure & Streamlined</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">Easy & Fun</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">Centralised Communication</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">Contactless Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">Data-Driven Insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Let&#39s Discuss Your Project</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <input type="email" placeholder="Your email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
              <textarea placeholder="Your message" className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
              <button type="submit" className="bg-primary text-white hover:bg-opacity-90 transition-colors duration-200 w-full text-lg py-3 rounded">Send Message</button>
            </form>
            <p className="mt-8 text-center text-gray-600">Or email us directly at: <a href="mailto:sales@buildingspacesgroup.com.au" className="text-primary font-semibold hover:underline">sales@buildingspacesgroup.com.au</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}

