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
        <section className="relative px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                Moon Property: Your Trusted Real Estate Agency in <span className="text-neutral-500">Sihi, Gurugram</span>
              </h1>
              <p className="mt-6 text-lg text-neutral-600 sm:text-xl leading-relaxed">
                Looking to buy, sell, or rent property in Gurugram? Moon Property is your premier real estate consultant specializing in Sihi, Sector 81, Sector 82, Sector 83, New Gurgaon, and Dwarka Expressway. Find verified flats, builder floors, luxury apartments, and commercial properties at the best prices.
              </p>
            </div>
          </div>
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
