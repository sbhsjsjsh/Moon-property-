import { Home, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
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
              Reimagining real estate in Sihi, Noida. Find your perfect space with modern tools and expert guidance.
            </p>
            <div className="mt-6 flex gap-4 text-neutral-400">
              <Link href="#" className="hover:text-neutral-900"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-neutral-900"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-neutral-900"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-neutral-900"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-neutral-900 uppercase">Properties</h3>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link href="/buy" className="hover:text-neutral-900">Homes for Sale</Link></li>
              <li><Link href="/rent" className="hover:text-neutral-900">Homes for Rent</Link></li>
              <li><Link href="/buy" className="hover:text-neutral-900">Commercial Spaces</Link></li>
              <li><Link href="/buy" className="hover:text-neutral-900">New Developments</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-neutral-900 uppercase">Company</h3>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link href="/about" className="hover:text-neutral-900">About Us</Link></li>
              <li><Link href="/about" className="hover:text-neutral-900">Our Agents</Link></li>
              <li><Link href="/about" className="hover:text-neutral-900">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-neutral-900 uppercase">Resources</h3>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link href="#" className="hover:text-neutral-900">Blog</Link></li>
              <li><Link href="#" className="hover:text-neutral-900">Market Reports</Link></li>
              <li><Link href="#" className="hover:text-neutral-900">Buyer's Guide</Link></li>
              <li><Link href="#" className="hover:text-neutral-900">Seller's Guide</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between border-t border-neutral-200 pt-8 sm:flex-row text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Moon Property. All rights reserved.</p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <Link href="#" className="hover:text-neutral-900">Privacy Policy</Link>
            <Link href="#" className="hover:text-neutral-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
