import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { featuredProperties } from '@/data/properties';
import Head from 'next/head';

export default function BuyPage() {
  const buyProperties = featuredProperties.filter(p => p.type === 'Sale');
  
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Head>
        <title>Buy Property in Gurugram | Flats & Villas in Sihi by Moon Property</title>
        <meta name="description" content="Looking to buy property in Gurugram? Explore verified luxury apartments, flats, builder floors, and plots in Sihi, Sector 81, and New Gurgaon with Moon Property." />
      </Head>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-neutral-900">Buy Property in Gurugram with Moon Property</h1>
          <p className="text-lg text-neutral-600 max-w-3xl">
            Whether you are looking for luxury apartments in New Gurgaon, builder floors in Sihi, or commercial property near Dwarka Expressway, Moon Property brings you the most exclusive and 100% verified properties for sale in Gurugram.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {buyProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} priority={index < 3} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
