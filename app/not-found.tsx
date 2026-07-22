import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-neutral-200 text-neutral-900">
          <span className="text-3xl font-black">404</span>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mb-8 text-lg text-neutral-600 max-w-md mx-auto">
          We couldn't find the page you were looking for. It might have been moved or doesn't exist.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
