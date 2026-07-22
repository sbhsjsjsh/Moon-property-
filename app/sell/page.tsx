import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function SellPage() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Head>
        <title>Sell Property in Gurugram | Get the Best Value | Moon Property</title>
        <meta name="description" content="Sell your property in Gurugram quickly and securely. Moon Property provides expert valuation and marketing for flats, villas, and plots in Sihi, Sector 81, and New Gurgaon." />
      </Head>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-neutral-900">Sell Property in Gurugram - Get the Best Value</h1>
        <p className="mb-12 text-lg text-neutral-600">
          Looking to sell your home or commercial space? List your property with Moon Property and leverage our vast network of verified buyers across Sihi, New Gurgaon, and Dwarka Expressway. We ensure quick closures and the best market price.
        </p>
        <div className="rounded-3xl bg-white p-8 shadow-xl text-left border border-neutral-100">
          <h2 className="mb-6 text-2xl font-bold text-neutral-900">Enter Property Details</h2>
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-neutral-700">Property Type</label>
              <select className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-neutral-900 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 bg-white">
                <option>Flats / Apartments</option>
                <option>Builder Floors</option>
                <option>Luxury Villas</option>
                <option>Commercial Property</option>
                <option>Plot / Land</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-neutral-700">Location in Gurugram</label>
              <input type="text" className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-neutral-900 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900" placeholder="e.g. Sihi, Sector 81, New Gurgaon, etc." />
            </div>
            <button type="button" className="mt-6 w-full rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800">
              Submit Details for Valuation
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
