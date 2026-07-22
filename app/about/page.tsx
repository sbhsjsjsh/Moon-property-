import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home, Users, Star, Award, Map, CheckCircle2 } from 'lucide-react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Head>
        <title>About Moon Property | Best Real Estate Agency in Sihi, Gurugram</title>
        <meta name="description" content="Learn more about Moon Property, the leading property dealer in Sihi, Gurugram. We offer expert guidance for buying, selling, and renting real estate in Sector 81, 82, 83, and New Gurgaon." />
      </Head>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
            About Moon Property - Leading Real Estate Consultant in Gurugram
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Welcome to Moon Property, your trusted real estate agency in Sihi, Gurugram. We specialize in connecting buyers, sellers, and renters with premium properties across Sector 81, Sector 82, Sector 83, New Gurgaon, and the Dwarka Expressway. Our mission is to make real estate transactions seamless, transparent, and profitable for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 mb-24">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-neutral-100">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
              <Home className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Local Listings</h3>
            <p className="text-neutral-600">Exclusive access to flats, plots, and villas in Sihi and New Gurgaon.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-neutral-100">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Property Dealers</h3>
            <p className="text-neutral-600">Our certified professionals know the Gurugram local market inside and out.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-neutral-100">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
              <Star className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Trusted & Verified</h3>
            <p className="text-neutral-600">Every property goes through strict legal checks ensuring scam-free deals.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-neutral-100 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Commitment to Excellence (E-E-A-T)</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900">Experience</h4>
                    <p className="text-neutral-600">Over a decade of hands-on experience navigating the complex Gurugram real estate market.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900">Expertise</h4>
                    <p className="text-neutral-600">Specialized knowledge in residential flats, commercial shops, and investment plots near Dwarka Expressway.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900">Authoritativeness</h4>
                    <p className="text-neutral-600">Recognized as top property consultants in Sihi, frequently guiding high-net-worth investments.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900">Trustworthiness</h4>
                    <p className="text-neutral-600">100% transparent pricing, zero hidden fees, and legal support for seamless registrations.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Core Service Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center text-neutral-700">
                  <Map className="h-5 w-5 mr-3 text-neutral-500" /> Sihi, Gurugram
                </div>
                <div className="flex items-center text-neutral-700">
                  <Map className="h-5 w-5 mr-3 text-neutral-500" /> Sector 81, Gurugram
                </div>
                <div className="flex items-center text-neutral-700">
                  <Map className="h-5 w-5 mr-3 text-neutral-500" /> Sector 82 & 83
                </div>
                <div className="flex items-center text-neutral-700">
                  <Map className="h-5 w-5 mr-3 text-neutral-500" /> New Gurgaon
                </div>
                <div className="flex items-center text-neutral-700">
                  <Map className="h-5 w-5 mr-3 text-neutral-500" /> Dwarka Expressway
                </div>
                <div className="flex items-center text-neutral-700">
                  <Map className="h-5 w-5 mr-3 text-neutral-500" /> Golf Course Ext. Rd
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
