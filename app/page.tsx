import Image from 'next/image';
import { MapPin, Building2, Home, Landmark, Briefcase, Star, Search, Handshake } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { featuredProperties } from '@/data/properties';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative px-4 pt-20 pb-28 sm:px-6 sm:pt-28 sm:pb-32 lg:px-8 lg:pt-36 lg:pb-40 bg-gradient-to-br from-blue-100 via-indigo-50 to-white border-b border-neutral-200">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"><div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div></div><div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
              <div className="text-center lg:text-left max-w-3xl lg:max-w-2xl mx-auto lg:mx-0 flex-1">
                <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                  Moon Property: Your Trusted Real Estate Agency in <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sihi, Gurugram</span>
                </h1>
                <p className="mt-6 text-lg text-neutral-600 sm:text-xl leading-relaxed">
                  Looking to buy, sell, or rent property in Gurugram? Moon Property is your premier real estate consultant specializing in Sihi, Sector 81, Sector 82, Sector 83, New Gurgaon, and Dwarka Expressway. Find verified flats, builder floors, luxury apartments, and commercial properties at the best prices.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/buy" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-base font-semibold text-white transition-all hover:opacity-90 hover:shadow-xl text-center shadow-lg shadow-blue-200">
                    Explore Properties
                  </Link>
                  <Link href="#footer-form" className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 border border-neutral-200 text-center shadow-sm">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full max-w-lg lg:max-w-none mx-auto mt-8 lg:mt-0 relative">
                <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-neutral-100 border border-neutral-200/60">
                  <Image 
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80" 
                    alt="Beautiful modern house representing prime real estate"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"><div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div></div>
        </section>

        {/* Property Categories */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center text-neutral-900 mb-12">
              Explore Property Types in Gurugram
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {[
                { name: 'Flats & Apartments', icon: Building2 },
                { name: 'Builder Floors', icon: Home },
                { name: 'Luxury Villas', icon: Landmark },
                { name: 'Plots & Land', icon: MapPin },
                { name: 'Commercial Property', icon: Briefcase },
              ].map((category) => (
                <div key={category.name} className="flex flex-col items-center p-6 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-neutral-300 transition-colors text-center cursor-pointer">
                  <category.icon className="h-8 w-8 text-neutral-700 mb-3" />
                  <span className="font-semibold text-neutral-900">{category.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"><div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div></div>
        </section>

        {/* Featured Properties */}
        <section className="bg-neutral-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                  Featured Properties for Sale in Gurugram
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  Discover top real estate deals in Sihi, New Gurgaon, and near Dwarka Expressway.
                </p>
              </div>
              <Link href="/buy" className="mt-6 md:mt-0 inline-flex font-semibold text-neutral-900 hover:text-neutral-600">
                View all properties &rarr;
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} priority={index < 3} />
              ))}
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"><div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div></div>
        </section>

        {/* Local SEO / Target Locations */}
        <section className="bg-white py-16 sm:py-24 border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-8">
              Premium Real Estate Locations in Gurugram
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-600 leading-relaxed">
              <div>
                <p className="mb-4">
                  As a leading <strong>Property Dealer in Sihi</strong>, Moon Property offers exclusive access to the most sought-after neighborhoods in Gurugram. Whether you are searching for a dream home or a high-ROI investment, our expertise in local markets ensures you make the best choice.
                </p>
                <p>
                  Our primary focus areas include residential and commercial properties in <strong>Sihi, Sector 81, Sector 82, and Sector 83, Gurugram</strong>. These sectors are rapidly developing with world-class amenities, excellent schools, and top-tier hospitals.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  We also specialize in properties across <strong>New Gurgaon</strong> and along the <strong>Dwarka Expressway</strong>, offering seamless connectivity to Delhi and the rest of NCR.
                </p>
                <p>
                  Looking for premium segments? Explore our luxury apartments and builder floors near <strong>Golf Course Extension Road</strong> and <strong>Sohna Road</strong>. Moon Property is your dedicated real estate consultant in Gurugram for all your property needs.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"><div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div></div>
        </section>

        {/* Value Proposition (E-E-A-T) */}
        <section className="py-16 sm:py-24 bg-neutral-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
              Why Choose Moon Property as Your Real Estate Consultant?
            </h2>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 mb-6">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expertise & Experience</h3>
                <p className="text-neutral-400">
                  With years of deep-rooted experience in the Gurugram real estate market, our certified property dealers understand local trends, pricing, and investment hotspots better than anyone.
                </p>
              </div>
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 mb-6">
                  <Handshake className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Trustworthiness & Transparency</h3>
                <p className="text-neutral-400">
                  We follow strict ethical guidelines. Every property is thoroughly verified for legal compliance, ensuring our clients experience a safe, scam-free, and transparent transaction.
                </p>
              </div>
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 mb-6">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Authoritative Guidance</h3>
                <p className="text-neutral-400">
                  From property search to finalizing paperwork and securing loans, we provide end-to-end authoratitive guidance. We negotiate the best prices on flats, plots, and commercial spaces.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"><div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div></div>
        </section>
        
        {/* FAQ Section */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-8 text-center">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-6">
              {[
                { q: "Where is Moon Property located?", a: "Moon Property is a premier real estate agency located in Sihi, Gurugram. We serve clients across Sector 81, 82, 83, New Gurgaon, and Dwarka Expressway." },
                { q: "What types of properties do you deal in?", a: "We deal in residential and commercial properties, including flats, luxury apartments, builder floors, villas, and plots in Gurugram." },
                { q: "Is Sector 81 Gurugram a good place to invest?", a: "Yes, Sector 81 is a highly sought-after location in New Gurgaon due to its excellent connectivity, proximity to NH-48, and premium residential projects." },
                { q: "Do you help with renting properties in Gurugram?", a: "Absolutely! We assist tenants in finding the best rental flats and apartments, and help landlords find verified tenants." },
                { q: "How can I verify a property before buying?", a: "Our team at Moon Property conducts strict legal and background checks on all listings to ensure they are 100% verified and litigation-free." }
              ].map((faq, i) => (
                <div key={i} className="border-b border-neutral-200 pb-6">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{faq.q}</h3>
                  <p className="text-neutral-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"><div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
