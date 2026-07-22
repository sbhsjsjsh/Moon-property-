'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FooterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Auto close after success
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1200);
  };

  return (
    <div id="footer-form" className="relative mx-auto mb-16 max-w-4xl overflow-hidden rounded-[2rem] bg-neutral-900 p-8 shadow-[0_0_40px_rgba(0,0,0,0.1)] sm:p-12 lg:p-16">
      {/* Glowing effects */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-[80px]" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-500/20 blur-[80px]" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full max-w-2xl"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to find your dream home?
              </h2>
              <p className="mb-8 text-neutral-400">
                Join our exclusive network and get early access to premium listings in Sihi before they go public.
              </p>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-neutral-700 bg-neutral-800/50 px-6 py-4 text-white placeholder-neutral-500 backdrop-blur-sm transition-colors focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-neutral-700 bg-neutral-800/50 px-6 py-4 text-white placeholder-neutral-500 backdrop-blur-sm transition-colors focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-neutral-700 bg-neutral-800/50 px-6 py-4 text-white placeholder-neutral-500 backdrop-blur-sm transition-colors focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                />
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-neutral-700 bg-neutral-800/50 px-6 py-4 text-white backdrop-blur-sm transition-colors focus:border-white focus:outline-none focus:ring-1 focus:ring-white appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-neutral-500">Select Budget</option>
                  <option value="under-50l" className="bg-neutral-900">Under ₹50 Lakhs</option>
                  <option value="50l-1cr" className="bg-neutral-900">₹50 Lakhs - ₹1 Crore</option>
                  <option value="1cr-3cr" className="bg-neutral-900">₹1 Crore - ₹3 Crores</option>
                  <option value="above-3cr" className="bg-neutral-900">Above ₹3 Crores</option>
                </select>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group sm:col-span-2 mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-neutral-900 transition-all hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span>{isSubmitting ? 'Sending Request...' : 'Get in Touch'}</span>
                  {!isSubmitting && (
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex w-full flex-col items-center justify-center py-6 text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400 ring-4 ring-green-500/20">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">You're on the list!</h3>
              <p className="text-neutral-400">
                Keep an eye on your inbox for the latest exclusive listings.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
