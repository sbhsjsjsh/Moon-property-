import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { featuredProperties } from '@/data/properties';

export default function RentPage() {
  const rentProperties = featuredProperties.filter(p => p.type === 'Rent');
  
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-neutral-900">Homes for Rent in Sihi</h1>
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
