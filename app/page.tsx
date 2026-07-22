import Image from 'next/image';
import { MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { featuredProperties } from '@/data/properties';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                Find your perfect home in <span className="text-neutral-500">Sihi, Noida</span>
              </h1>
              <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
                Discover the best premium and affordable properties tailored to your lifestyle. We make finding your dream location simple.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                  Featured Properties
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  Handpicked properties that offer the best value and location in Sihi, Noida.
                </p>
              </div>
              <button className="mt-6 md:mt-0 inline-flex font-semibold text-neutral-900 hover:text-neutral-600">
                View all properties &rarr;
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} priority={index < 3} />
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 sm:py-24 bg-neutral-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 mb-6">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Prime Locations</h3>
                <p className="text-neutral-400">
                  We specialize in the most sought-after neighborhoods, ensuring your investment grows over time.
                </p>
              </div>
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 mb-6">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Trusted Agents</h3>
                <p className="text-neutral-400">
                  Our certified professionals guide you through every step with transparency and expertise.
                </p>
              </div>
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 mb-6">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Best Prices</h3>
                <p className="text-neutral-400">
                  We negotiate the best deals for our clients, guaranteeing maximum value for your budget.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
