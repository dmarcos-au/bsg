import AboutParallaxImage from '../components/AboutParallaxImage'

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center">About Building Spaces Group</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <AboutParallaxImage />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-primary">Our Passion for Innovation</h2>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              At Building Spaces Group, we&apos;re driven by a passion for revolutionizing the way buildings operate. Our team comprises key individuals with extensive experience in building technology platforms, access control systems, building services engineering, software development, and workspace collaboration technology.
            </p>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              We see endless possibilities in both commercial and residential buildings. Our goal is to harness these opportunities to create solutions that make life easier, more effective, and more enjoyable for building managers and tenants alike.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through our innovative approach, we&apos;re transforming previously arduous processes into streamlined, efficient systems. At Building Spaces, we&apos;re not just providing technology – we&apos;re reshaping the future of building management.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

