import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home, Users, Star } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-neutral-900">About Moon Property</h1>
          <p className="text-lg text-neutral-600">
            We are the premier real estate agency in Sihi, Noida. Our mission is to help you find the perfect place to call home, with transparency and expert guidance at every step.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
              <Home className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Listings</h3>
            <p className="text-neutral-600">Exclusive access to the best properties in Sihi and surrounding areas.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Agents</h3>
            <p className="text-neutral-600">Our certified professionals know the local market inside and out.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
              <Star className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Top Rated</h3>
            <p className="text-neutral-600">Thousands of happy families have found their dream homes with us.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
