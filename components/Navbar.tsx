'use client';

import { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToFooter = () => {
    setIsOpen(false);
    const footerForm = document.getElementById('footer-form');
    if (footerForm) {
      footerForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white">
            <Home className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-neutral-900">
            Moon <span className="font-medium text-neutral-500">Property</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <Link href="/#hero" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">Home</Link>
          <Link href="/buy" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">Buy</Link>
          <Link href="/rent" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">Rent</Link>
          <Link href="/sell" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">Sell</Link>
          <button 
            onClick={scrollToFooter}
            className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="space-y-1 px-4 pb-3 pt-2 sm:px-6">
            <Link href="/#hero" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-neutral-900 hover:bg-neutral-50">Home</Link>
            <Link href="/buy" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-neutral-900 hover:bg-neutral-50">Buy</Link>
            <Link href="/rent" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-neutral-900 hover:bg-neutral-50">Rent</Link>
            <Link href="/sell" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-neutral-900 hover:bg-neutral-50">Sell</Link>
            <div className="mt-4 px-3">
              <button 
                onClick={scrollToFooter}
                className="w-full rounded-full bg-neutral-900 px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
