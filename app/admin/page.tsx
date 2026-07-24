'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Eye,
  EyeOff,
  LogOut,
  Building2,
  Users,
  TrendingUp,
  DollarSign,
  Plus,
  Search,
  Edit2,
  Trash2,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Download,
  Filter,
  Globe,
  FileText,
  PhoneCall,
  Mail,
  Home,
  X,
  AlertCircle,
  ChevronRight,
  Menu,
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

const REQUIRED_PASSWORD = 'R7kL9xT2mQ8vZ4';

interface PropertyItem {
  id: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  type: 'Sale' | 'Rent';
  status?: 'Available' | 'Reserved' | 'Sold' | 'Rented';
  description?: string;
}

interface LeadItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  budget: string;
  status: 'New' | 'Contacted' | 'In Discussion' | 'Closed';
  createdAt: string;
  propertyInterest?: string;
  notes?: string;
}

export default function AdminPage() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>('');
  const [isSubmittingAuth, setIsSubmittingAuth] = useState<boolean>(false);

  // Active Tab: 'dashboard' | 'properties' | 'leads' | 'seo' | 'security'
  const [activeTab, setActiveTab] = useState<'dashboard' | 'properties' | 'leads' | 'seo' | 'security'>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Data Stores
  const [properties, setProperties] = useState<PropertyItem[]>([]);
  const [leads, setLeads] = useState<LeadItem[]>([]);

  // Property Filters & Modals
  const [propertySearch, setPropertySearch] = useState('');
  const [propertyTypeFilter, setPropertyTypeFilter] = useState<'All' | 'Sale' | 'Rent'>('All');
  const [isAddPropertyOpen, setIsAddPropertyOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState<PropertyItem | null>(null);
  const [deletingPropertyId, setDeletingPropertyId] = useState<string | null>(null);

  // Lead Filters & Modals
  const [leadSearch, setLeadSearch] = useState('');
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('All');
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);

  // Form State for Property Creation/Edit
  const [propertyForm, setPropertyForm] = useState<{
    title: string;
    location: string;
    price: string;
    beds: string;
    baths: string;
    sqft: string;
    imageUrl: string;
    type: 'Sale' | 'Rent';
    status: 'Available' | 'Reserved' | 'Sold' | 'Rented';
    description: string;
  }>({
    title: '',
    location: 'Sihi, Sector 81, Gurugram',
    price: '',
    beds: '3',
    baths: '2',
    sqft: '1800',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    type: 'Sale',
    status: 'Available',
    description: '',
  });

  // Manual Lead Form
  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '₹1 Crore - ₹3 Crores',
    propertyInterest: 'General Inquiry',
    notes: '',
  });

  // Notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  }, []);

  // Fetch properties and leads
  const fetchAdminData = useCallback(async () => {
    try {
      const [propRes, leadRes] = await Promise.all([
        fetch('/api/admin/properties'),
        fetch('/api/leads'),
      ]);

      if (propRes.ok) {
        const propData = await propRes.json();
        setProperties(propData.properties || []);
      }

      if (leadRes.ok) {
        const leadData = await leadRes.json();
        setLeads(leadData.leads || []);
      }
    } catch (err) {
      console.error('Error fetching admin data', err);
    }
  }, []);

  // Check auth session on load
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/admin/auth');
        const data = await res.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
          fetchAdminData();
        }
      } catch {
        setIsAuthenticated(false);
      } finally {
        setIsCheckingAuth(false);
      }
    }
    checkAuth();
  }, [fetchAdminData]);

  // Login Submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setIsSubmittingAuth(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setPasswordInput('');
        showToast('Welcome to Moon Property Admin Panel!');
        fetchAdminData();
      } else {
        setAuthError(data.error || 'Incorrect password. Access denied.');
      }
    } catch {
      setAuthError('An error occurred during authentication.');
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  // Quick fill password helper
  const handleQuickFillPassword = () => {
    setPasswordInput(REQUIRED_PASSWORD);
  };

  // Logout
  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
    } catch {
      // ignore
    }
    setIsAuthenticated(false);
    showToast('Logged out successfully');
  };

  // Save / Add Property
  const handleSaveProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingProperty) {
        // PUT update
        const res = await fetch('/api/admin/properties', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: editingProperty.id, ...propertyForm }),
        });

        if (res.ok) {
          showToast('Property updated successfully');
          setEditingProperty(null);
          setIsAddPropertyOpen(false);
          fetchAdminData();
        }
      } else {
        // POST create
        const res = await fetch('/api/admin/properties', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(propertyForm),
        });

        if (res.ok) {
          showToast('New property created successfully!');
          setIsAddPropertyOpen(false);
          fetchAdminData();
        }
      }
    } catch {
      showToast('Error saving property');
    }
  };

  // Delete Property
  const handleDeleteProperty = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/properties?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        showToast('Property deleted');
        setDeletingPropertyId(null);
        fetchAdminData();
      }
    } catch {
      showToast('Error deleting property');
    }
  };

  // Update Lead Status
  const handleUpdateLeadStatus = async (id: string, newStatus: LeadItem['status']) => {
    try {
      const res = await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        showToast(`Lead status updated to ${newStatus}`);
        fetchAdminData();
      }
    } catch {
      showToast('Failed to update lead status');
    }
  };

  // Add Manual Lead
  const handleAddManualLead = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadForm),
      });
      if (res.ok) {
        showToast('Lead recorded successfully');
        setIsAddLeadOpen(false);
        setLeadForm({
          name: '',
          email: '',
          phone: '',
          budget: '₹1 Crore - ₹3 Crores',
          propertyInterest: 'General Inquiry',
          notes: '',
        });
        fetchAdminData();
      }
    } catch {
      showToast('Error recording lead');
    }
  };

  // Delete Lead
  const handleDeleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    try {
      const res = await fetch(`/api/leads?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        showToast('Lead removed');
        fetchAdminData();
      }
    } catch {
      showToast('Error removing lead');
    }
  };

  // Export Leads CSV
  const handleExportLeadsCSV = () => {
    if (leads.length === 0) return;
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Budget', 'Status', 'Property Interest', 'Created At'];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name}"`,
      `"${l.email}"`,
      `"${l.phone}"`,
      `"${l.budget}"`,
      l.status,
      `"${l.propertyInterest || ''}"`,
      `"${new Date(l.createdAt).toLocaleString()}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `moon_property_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Leads CSV exported!');
  };

  // Edit Property Opener
  const openEditProperty = (p: PropertyItem) => {
    setEditingProperty(p);
    setPropertyForm({
      title: p.title,
      location: p.location,
      price: p.price.toString(),
      beds: p.beds.toString(),
      baths: p.baths.toString(),
      sqft: p.sqft.toString(),
      imageUrl: p.imageUrl,
      type: p.type,
      status: p.status || 'Available',
      description: p.description || '',
    });
    setIsAddPropertyOpen(true);
  };

  // Open Create Property Reset
  const openCreateProperty = () => {
    setEditingProperty(null);
    setPropertyForm({
      title: '',
      location: 'Sihi, Sector 81, Gurugram',
      price: '',
      beds: '3',
      baths: '2',
      sqft: '1800',
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      type: 'Sale',
      status: 'Available',
      description: '',
    });
    setIsAddPropertyOpen(true);
  };

  // Filtered Properties
  const filteredProperties = properties.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(propertySearch.toLowerCase()) ||
      p.location.toLowerCase().includes(propertySearch.toLowerCase());
    const matchesType = propertyTypeFilter === 'All' || p.type === propertyTypeFilter;
    return matchesSearch && matchesType;
  });

  // Filtered Leads
  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.name.toLowerCase().includes(leadSearch.toLowerCase()) ||
      l.phone.includes(leadSearch) ||
      l.email.toLowerCase().includes(leadSearch.toLowerCase());
    const matchesStatus = leadStatusFilter === 'All' || l.status === leadStatusFilter;
    return matchesSearch && matchesStatus;
  });

  // Stats
  const totalValue = properties.reduce((acc, p) => acc + p.price, 0);
  const forSaleCount = properties.filter((p) => p.type === 'Sale').length;
  const forRentCount = properties.filter((p) => p.type === 'Rent').length;
  const newLeadsCount = leads.filter((l) => l.status === 'New').length;

  // Render Loader while checking session
  if (isCheckingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-950 text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
          <p className="text-sm font-medium text-neutral-400">Verifying security credentials...</p>
        </div>
      </div>
    );
  }

  // --- UNAUTHENTICATED LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center bg-neutral-950 p-4 font-sans text-neutral-100 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

        <div className="relative z-10 w-full max-w-md">
          {/* Header Branding */}
          <div className="mb-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
                <Home className="h-6 w-6" />
              </div>
            </Link>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Admin Portal
            </h1>
            <p className="mt-2 text-sm text-neutral-400">
              Moon Property Agency Management Console
            </p>
          </div>

          {/* Login Card */}
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3 rounded-2xl bg-neutral-800/60 p-3.5 border border-neutral-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-300">Protected Endpoint</p>
                <p className="text-xs text-neutral-500">Requires valid administrator password</p>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Admin Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter security password..."
                    className="w-full rounded-2xl border border-neutral-700 bg-neutral-950/80 px-4 py-3.5 pr-11 text-sm text-white placeholder-neutral-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {authError && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-xs text-red-400"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{authError}</span>
                </motion.div>
              )}

              {/* Password hint shortcut button */}
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={handleQuickFillPassword}
                  className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
                >
                  Auto-fill configured password
                </button>
                <span className="text-[11px] text-neutral-500">R7kL9xT...</span>
              </div>

              <button
                type="submit"
                disabled={isSubmittingAuth}
                className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:opacity-90 disabled:opacity-50"
              >
                {isSubmittingAuth ? 'Verifying...' : 'Authenticate & Access Panel'}
              </button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
              &larr; Return to Moon Property Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- AUTHENTICATED DASHBOARD PANEL ---
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-100">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-5 right-5 z-50 flex items-center gap-3 rounded-2xl bg-neutral-900 border border-neutral-700 px-5 py-3.5 shadow-2xl text-sm font-medium text-white"
          >
            <CheckCircle className="h-5 w-5 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold">
                <Home className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white hidden sm:inline">
                Moon <span className="text-neutral-400 font-normal">Admin</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>System Live</span>
            </div>
          </div>

          {/* Desktop Tab Switcher */}
          <nav className="hidden lg:flex items-center gap-1 rounded-2xl bg-neutral-900/90 p-1 border border-neutral-800">
            {[
              { id: 'dashboard', label: 'Overview', icon: TrendingUp },
              { id: 'properties', label: `Properties (${properties.length})`, icon: Building2 },
              { id: 'leads', label: `Leads (${newLeadsCount ? `+${newLeadsCount}` : leads.length})`, icon: Users },
              { id: 'seo', label: 'SEO & Site', icon: Globe },
              { id: 'security', label: 'Security', icon: ShieldCheck },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={openCreateProperty}
              className="hidden sm:flex items-center gap-1.5 rounded-xl bg-neutral-800 px-3.5 py-2 text-xs font-semibold text-white hover:bg-neutral-700 transition-colors border border-neutral-700"
            >
              <Plus className="h-4 w-4" />
              <span>Add Listing</span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 rounded-xl bg-red-500/10 px-3.5 py-2 text-xs font-semibold text-red-400 hover:bg-red-500/20 transition-colors border border-red-500/20"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>

            {/* Mobile Hamburger Menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-800 bg-neutral-900 p-4 space-y-2">
            {[
              { id: 'dashboard', label: 'Overview', icon: TrendingUp },
              { id: 'properties', label: `Properties (${properties.length})`, icon: Building2 },
              { id: 'leads', label: `Leads (${leads.length})`, icon: Users },
              { id: 'seo', label: 'SEO & Sitemap', icon: Globe },
              { id: 'security', label: 'Security Status', icon: ShieldCheck },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
            <button
              onClick={openCreateProperty}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white mt-4"
            >
              <Plus className="h-5 w-5" />
              <span>Add New Property</span>
            </button>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* --- TAB 1: OVERVIEW DASHBOARD --- */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Total Properties
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Building2 className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white">{properties.length}</span>
                  <span className="text-xs text-neutral-500">active listings</span>
                </div>
                <p className="mt-2 text-xs text-neutral-400">
                  {forSaleCount} For Sale • {forRentCount} For Rent
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Client Inquiries
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    <Users className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white">{leads.length}</span>
                  {newLeadsCount > 0 && (
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-400">
                      {newLeadsCount} new
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs text-neutral-400">Total client requests received</p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Portfolio Value
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <DollarSign className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-white">
                    ₹{(totalValue / 10000000).toFixed(2)} Cr
                  </span>
                </div>
                <p className="mt-2 text-xs text-neutral-400">Combined listed property value</p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Target Territory
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                    <Globe className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-white">Sihi, Gurugram</span>
                </div>
                <p className="mt-2 text-xs text-neutral-400">Sec 81, 82, 83 & Dwarka Expy</p>
              </div>
            </div>

            {/* Quick Actions & Recent Activity Grid */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Recent Inquiries List */}
              <div className="lg:col-span-2 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    <span>Recent Client Inquiries</span>
                  </h2>
                  <button
                    onClick={() => setActiveTab('leads')}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {leads.slice(0, 4).map((lead) => (
                    <div
                      key={lead.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-4 transition-colors hover:border-neutral-700"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{lead.name}</span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                              lead.status === 'New'
                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                : lead.status === 'Contacted'
                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            }`}
                          >
                            {lead.status}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <PhoneCall className="h-3 w-3" />
                            {lead.phone}
                          </span>
                          <span className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {lead.email || 'No email'}
                          </span>
                        </p>
                      </div>

                      <div className="text-right sm:text-right">
                        <span className="text-xs font-semibold text-neutral-300">{lead.budget}</span>
                        <p className="text-[11px] text-neutral-500">
                          {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                  {leads.length === 0 && (
                    <p className="py-8 text-center text-sm text-neutral-500">No leads received yet.</p>
                  )}
                </div>
              </div>

              {/* Quick Actions Panel */}
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm space-y-6">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-indigo-400" />
                  <span>Admin Quick Actions</span>
                </h2>

                <div className="space-y-3">
                  <button
                    onClick={openCreateProperty}
                    className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 font-semibold text-white shadow-lg shadow-blue-500/20 hover:opacity-95 transition-all text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <Plus className="h-4 w-4" />
                      Add New Property Listing
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => setIsAddLeadOpen(true)}
                    className="flex w-full items-center justify-between rounded-xl border border-neutral-800 bg-neutral-800/60 p-4 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-purple-400" />
                      Record Manual Client Lead
                    </span>
                    <ChevronRight className="h-4 w-4 text-neutral-500" />
                  </button>

                  <button
                    onClick={handleExportLeadsCSV}
                    className="flex w-full items-center justify-between rounded-xl border border-neutral-800 bg-neutral-800/60 p-4 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-emerald-400" />
                      Export Leads (.CSV)
                    </span>
                    <ChevronRight className="h-4 w-4 text-neutral-500" />
                  </button>

                  <Link
                    href="/sitemap.xml"
                    target="_blank"
                    className="flex w-full items-center justify-between rounded-xl border border-neutral-800 bg-neutral-800/60 p-4 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-amber-400" />
                      View Live XML Sitemap
                    </span>
                    <ExternalLink className="h-4 w-4 text-neutral-500" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 2: PROPERTIES INVENTORY (CRUD) --- */}
        {activeTab === 'properties' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white">Property Inventory Management</h1>
                <p className="text-xs text-neutral-400">
                  Manage active listings, prices, locations, and availability statuses.
                </p>
              </div>

              <button
                onClick={openCreateProperty}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:opacity-90 transition-all"
              >
                <Plus className="h-4 w-4" />
                <span>Add New Property</span>
              </button>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 backdrop-blur-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search by title, location..."
                  value={propertySearch}
                  onChange={(e) => setPropertySearch(e.target.value)}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-10 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-neutral-400 hidden sm:inline" />
                <select
                  value={propertyTypeFilter}
                  onChange={(e) => setPropertyTypeFilter(e.target.value as any)}
                  className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none cursor-pointer"
                >
                  <option value="All">All Types</option>
                  <option value="Sale">For Sale</option>
                  <option value="Rent">For Rent</option>
                </select>
              </div>
            </div>

            {/* Properties Table */}
            <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-neutral-300">
                  <thead className="border-b border-neutral-800 bg-neutral-950/80 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    <tr>
                      <th className="px-6 py-4">Property</th>
                      <th className="px-6 py-4">Type</th>
                      <th className="px-6 py-4">Price</th>
                      <th className="px-6 py-4">Specs</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/60">
                    {filteredProperties.map((p) => (
                      <tr key={p.id} className="hover:bg-neutral-800/40 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={p.imageUrl}
                              alt={p.title}
                              className="h-12 w-16 rounded-lg object-cover border border-neutral-800"
                            />
                            <div>
                              <p className="font-semibold text-white">{p.title}</p>
                              <p className="text-xs text-neutral-400">{p.location}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                              p.type === 'Sale'
                                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            }`}
                          >
                            {p.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-bold text-white">
                          ₹{p.price.toLocaleString('en-IN')}
                        </td>
                        <td className="px-6 py-4 text-xs text-neutral-400">
                          {p.beds > 0 ? `${p.beds} Beds • ${p.baths} Baths • ` : ''}
                          {p.sqft} sqft
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            {p.status || 'Available'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => openEditProperty(p)}
                              className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                              title="Edit Property"
                            >
                              <Edit2 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => setDeletingPropertyId(p.id)}
                              className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                              title="Delete Property"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredProperties.length === 0 && (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-sm text-neutral-500">
                          No properties found matching filter criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 3: LEADS & INQUIRIES --- */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white">Leads & Inquiries</h1>
                <p className="text-xs text-neutral-400">
                  Manage potential buyers and tenants interested in Sihi and Gurugram properties.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsAddLeadOpen(true)}
                  className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-purple-500 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Manual Lead</span>
                </button>
                <button
                  onClick={handleExportLeadsCSV}
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 backdrop-blur-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search leads by name, phone, email..."
                  value={leadSearch}
                  onChange={(e) => setLeadSearch(e.target.value)}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-10 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <select
                value={leadStatusFilter}
                onChange={(e) => setLeadStatusFilter(e.target.value)}
                className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none cursor-pointer"
              >
                <option value="All">All Lead Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="In Discussion">In Discussion</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            {/* Leads Table */}
            <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-neutral-300">
                  <thead className="border-b border-neutral-800 bg-neutral-950/80 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    <tr>
                      <th className="px-6 py-4">Client Name</th>
                      <th className="px-6 py-4">Contact Details</th>
                      <th className="px-6 py-4">Budget</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/60">
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-neutral-800/40 transition-colors">
                        <td className="px-6 py-4">
                          <p className="font-semibold text-white">{lead.name}</p>
                          <p className="text-xs text-neutral-400">{lead.propertyInterest || 'General Inquiry'}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-xs text-white font-mono">{lead.phone}</p>
                          <p className="text-xs text-neutral-400">{lead.email}</p>
                        </td>
                        <td className="px-6 py-4 text-xs font-semibold text-neutral-200">
                          {lead.budget}
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={lead.status}
                            onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value as any)}
                            className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-1.5 text-xs font-semibold text-white focus:border-blue-500 cursor-pointer"
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="In Discussion">In Discussion</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 text-xs text-neutral-400">
                          {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => handleDeleteLead(lead.id)}
                            className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                            title="Delete Lead"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredLeads.length === 0 && (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-sm text-neutral-500">
                          No leads match your search criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 4: SEO & SITE SETTINGS --- */}
        {activeTab === 'seo' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-bold text-white">SEO & Site Control</h1>
              <p className="text-xs text-neutral-400">
                Monitor indexation, sitemaps, and search engine previews for Moon Property.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Google SERP Preview */}
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm space-y-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-400" />
                  <span>Google Search Result Preview</span>
                </h2>

                <div className="rounded-xl bg-white p-5 text-neutral-900 shadow-md space-y-1">
                  <p className="text-xs text-neutral-600 truncate">
                    https://www.moonproperty.com
                  </p>
                  <h3 className="text-lg font-medium text-blue-800 hover:underline cursor-pointer">
                    Moon Property: Real Estate Agency in Sihi, Gurugram
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    Looking to buy, sell, or rent property in Gurugram? Moon Property is your premier real estate consultant specializing in Sihi, Sector 81, Sector 82, New Gurgaon. Find verified flats and villas.
                  </p>
                </div>

                <div className="pt-2 text-xs text-neutral-400 space-y-2">
                  <p className="flex items-center justify-between py-1 border-b border-neutral-800">
                    <span>Canonical Domain:</span>
                    <span className="font-mono text-neutral-200">https://www.moonproperty.com</span>
                  </p>
                  <p className="flex items-center justify-between py-1 border-b border-neutral-800">
                    <span>Robots.txt Route:</span>
                    <Link href="/robots.ts" target="_blank" className="font-mono text-blue-400 hover:underline">
                      /robots.txt
                    </Link>
                  </p>
                  <p className="flex items-center justify-between py-1">
                    <span>XML Sitemap Route:</span>
                    <Link href="/sitemap.xml" target="_blank" className="font-mono text-blue-400 hover:underline">
                      /sitemap.xml
                    </Link>
                  </p>
                </div>
              </div>

              {/* Dynamic Sitemap Routes Inspector */}
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm space-y-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileText className="h-5 w-5 text-emerald-400" />
                  <span>Configured XML Sitemap Routes</span>
                </h2>

                <div className="space-y-2">
                  {[
                    { url: 'https://www.moonproperty.com/', priority: '1.0', freq: 'weekly' },
                    { url: 'https://www.moonproperty.com/buy', priority: '0.9', freq: 'weekly' },
                    { url: 'https://www.moonproperty.com/rent', priority: '0.9', freq: 'weekly' },
                    { url: 'https://www.moonproperty.com/sell', priority: '0.9', freq: 'weekly' },
                  ].map((route, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl bg-neutral-950 p-3 text-xs border border-neutral-800"
                    >
                      <span className="font-mono text-neutral-300">{route.url}</span>
                      <div className="flex gap-2">
                        <span className="rounded bg-neutral-800 px-2 py-0.5 text-neutral-400">
                          Priority {route.priority}
                        </span>
                        <span className="rounded bg-neutral-800 px-2 py-0.5 text-neutral-400">
                          {route.freq}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/sitemap.xml"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-xl bg-neutral-800 px-4 py-2.5 text-xs font-semibold text-white hover:bg-neutral-700 transition-colors"
                  >
                    <span>Open Live /sitemap.xml</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 5: SECURITY STATUS --- */}
        {activeTab === 'security' && (
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Active Administrator Session</h1>
                  <p className="text-xs text-neutral-400">Authenticated via password gate</p>
                </div>
              </div>

              <div className="space-y-3 rounded-xl bg-neutral-950 p-4 border border-neutral-800 text-xs">
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Protected Endpoint:</span>
                  <span className="font-mono text-white">/admin</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Authentication Method:</span>
                  <span className="text-emerald-400 font-semibold">Password Verification</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Session Cookie:</span>
                  <span className="font-mono text-neutral-300">admin_session (HttpOnly)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Access Granted:</span>
                  <span className="text-neutral-300">{new Date().toLocaleTimeString()}</span>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-xs font-semibold text-white hover:bg-red-500 transition-colors shadow-lg shadow-red-600/20"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Terminate Session & Lock Admin Panel</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* --- MODAL: CREATE / EDIT PROPERTY --- */}
      {isAddPropertyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-xl rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl space-y-6 my-8"
          >
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <h2 className="text-lg font-bold text-white">
                {editingProperty ? 'Edit Property Details' : 'Add New Property Listing'}
              </h2>
              <button
                onClick={() => setIsAddPropertyOpen(false)}
                className="text-neutral-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProperty} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-400 font-medium mb-1">Property Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Modern Minimalist Villa in Sihi"
                  value={propertyForm.title}
                  onChange={(e) => setPropertyForm({ ...propertyForm, title: e.target.value })}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-neutral-400 font-medium mb-1">Location / Sector *</label>
                  <input
                    type="text"
                    required
                    placeholder="Sihi, Sector 81, Gurugram"
                    value={propertyForm.location}
                    onChange={(e) => setPropertyForm({ ...propertyForm, location: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 font-medium mb-1">Price (₹ INR) *</label>
                  <input
                    type="number"
                    required
                    placeholder="25000000"
                    value={propertyForm.price}
                    onChange={(e) => setPropertyForm({ ...propertyForm, price: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-neutral-400 font-medium mb-1">Bedrooms</label>
                  <input
                    type="number"
                    value={propertyForm.beds}
                    onChange={(e) => setPropertyForm({ ...propertyForm, beds: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 font-medium mb-1">Bathrooms</label>
                  <input
                    type="number"
                    value={propertyForm.baths}
                    onChange={(e) => setPropertyForm({ ...propertyForm, baths: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 font-medium mb-1">Area (sqft)</label>
                  <input
                    type="number"
                    value={propertyForm.sqft}
                    onChange={(e) => setPropertyForm({ ...propertyForm, sqft: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-400 font-medium mb-1">Listing Type</label>
                  <select
                    value={propertyForm.type}
                    onChange={(e) => setPropertyForm({ ...propertyForm, type: e.target.value as any })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white focus:border-blue-500 focus:outline-none cursor-pointer"
                  >
                    <option value="Sale">For Sale</option>
                    <option value="Rent">For Rent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-400 font-medium mb-1">Availability Status</label>
                  <select
                    value={propertyForm.status}
                    onChange={(e) => setPropertyForm({ ...propertyForm, status: e.target.value as any })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white focus:border-blue-500 focus:outline-none cursor-pointer"
                  >
                    <option value="Available">Available</option>
                    <option value="Reserved">Reserved</option>
                    <option value="Sold">Sold</option>
                    <option value="Rented">Rented</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 font-medium mb-1">Image URL</label>
                <input
                  type="url"
                  value={propertyForm.imageUrl}
                  onChange={(e) => setPropertyForm({ ...propertyForm, imageUrl: e.target.value })}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white focus:border-blue-500 focus:outline-none font-mono text-[11px]"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddPropertyOpen(false)}
                  className="rounded-xl border border-neutral-800 px-5 py-2.5 font-medium text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-500/20"
                >
                  {editingProperty ? 'Save Changes' : 'Publish Property'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* --- MODAL: MANUAL LEAD CREATION --- */}
      {isAddLeadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <h2 className="text-lg font-bold text-white">Record Client Lead</h2>
              <button onClick={() => setIsAddLeadOpen(false)} className="text-neutral-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleAddManualLead} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-400 font-medium mb-1">Client Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={leadForm.name}
                  onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-neutral-400 font-medium mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={leadForm.phone}
                  onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-neutral-400 font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="client@example.com"
                  value={leadForm.email}
                  onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-neutral-400 font-medium mb-1">Budget Preference</label>
                <select
                  value={leadForm.budget}
                  onChange={(e) => setLeadForm({ ...leadForm, budget: e.target.value })}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white focus:border-blue-500 focus:outline-none cursor-pointer"
                >
                  <option value="Under ₹50 Lakhs">Under ₹50 Lakhs</option>
                  <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                  <option value="₹1 Crore - ₹3 Crores">₹1 Crore - ₹3 Crores</option>
                  <option value="Above ₹3 Crores">Above ₹3 Crores</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-400 font-medium mb-1">Inquiry / Interest Note</label>
                <textarea
                  rows={3}
                  placeholder="Inquired via direct call regarding 3BHK in Sector 81..."
                  value={leadForm.notes}
                  onChange={(e) => setLeadForm({ ...leadForm, notes: e.target.value })}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddLeadOpen(false)}
                  className="rounded-xl border border-neutral-800 px-5 py-2.5 font-medium text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-purple-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-purple-600/20 hover:bg-purple-500"
                >
                  Save Lead Record
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* --- CONFIRM DELETE MODAL --- */}
      {deletingPropertyId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl space-y-4 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20">
              <Trash2 className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-white">Delete Property Listing?</h3>
            <p className="text-xs text-neutral-400">
              This action cannot be undone. The property will be removed from the active database.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => setDeletingPropertyId(null)}
                className="rounded-xl border border-neutral-800 px-4 py-2 text-xs font-medium text-neutral-300 hover:bg-neutral-800"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteProperty(deletingPropertyId)}
                className="rounded-xl bg-red-600 px-4 py-2 text-xs font-semibold text-white hover:bg-red-500 shadow-lg shadow-red-600/20"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
