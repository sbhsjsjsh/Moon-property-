import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SellPage() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-neutral-900">Sell Your Property</h1>
        <p className="mb-12 text-lg text-neutral-600">
          List your property with Moon Property and get the best value for your home.
        </p>
        <div className="rounded-3xl bg-white p-8 shadow-xl text-left border border-neutral-100">
          <h2 className="mb-6 text-2xl font-bold text-neutral-900">Property Details</h2>
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-neutral-700">Property Type</label>
              <select className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-neutral-900 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 bg-white">
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Plot / Land</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-neutral-700">Location in Sihi</label>
              <input type="text" className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-neutral-900 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900" placeholder="Sector, Enclave, etc." />
            </div>
            <button type="button" className="mt-4 w-full rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800">
              Submit Details
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
