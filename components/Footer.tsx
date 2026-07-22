import { Home } from 'lucide-react';
import Link from 'next/link';
import FooterForm from './FooterForm';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FooterForm />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white">
                <Home className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-neutral-900">
                Moon <span className="font-medium text-neutral-500">Property</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-neutral-500">
              Your trusted real estate agency in Sihi, Gurugram. We specialize in verified residential and commercial properties at the best prices.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-neutral-900 uppercase">Properties</h3>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link href="/buy" className="hover:text-neutral-900">Buy Property in Gurugram</Link></li>
              <li><Link href="/sell" className="hover:text-neutral-900">Sell Property</Link></li>
              <li><Link href="/rent" className="hover:text-neutral-900">Flats for Rent</Link></li>
              <li><Link href="/buy" className="hover:text-neutral-900">Commercial Spaces</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-neutral-900 uppercase">Top Locations</h3>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link href="/buy" className="hover:text-neutral-900">Sihi, Gurugram</Link></li>
              <li><Link href="/buy" className="hover:text-neutral-900">Sector 81 & 82, Gurugram</Link></li>
              <li><Link href="/buy" className="hover:text-neutral-900">New Gurgaon</Link></li>
              <li><Link href="/buy" className="hover:text-neutral-900">Dwarka Expressway</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-neutral-900 uppercase">Company</h3>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link href="/about" className="hover:text-neutral-900">About Us</Link></li>
              <li><Link href="/about" className="hover:text-neutral-900">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-neutral-900">Contact Agent</Link></li>
              <li><Link href="#" className="hover:text-neutral-900">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between border-t border-neutral-200 pt-8 sm:flex-row text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Moon Property. All rights reserved.</p>
          <div className="mt-4 flex gap-6 sm:mt-0 text-center sm:text-right">
            <span className="text-xs text-neutral-400">Serving Sihi, Sector 81, Sector 82, Sector 83, New Gurgaon, Dwarka Expressway, Golf Course Extension Road, Sohna Road, Gurugram</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
