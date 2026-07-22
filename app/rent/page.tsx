import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { featuredProperties } from '@/data/properties';
import Head from 'next/head';

export default function RentPage() {
  const rentProperties = featuredProperties.filter(p => p.type === 'Rent');
  
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Head>
        <title>Rent Property in Gurugram | Flats & Apartments | Moon Property</title>
        <meta name="description" content="Find the best rental properties in Gurugram. Rent flats, builder floors, and villas in Sihi, Sector 82, and New Gurgaon. Trusted property dealer in Sihi." />
      </Head>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-neutral-900">Rent Property in Gurugram - Flats, Apartments & Villas</h1>
          <p className="text-lg text-neutral-600 max-w-3xl">
            Searching for a rental home? Explore premium flats and builder floors for rent in Sihi, Sector 82, Sector 83, and other prime locations in Gurugram. Moon Property ensures verified landlords and hassle-free agreements.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rentProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} priority={index < 3} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
