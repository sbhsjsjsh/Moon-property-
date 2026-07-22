export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  type: 'Sale' | 'Rent';
}

export const featuredProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Minimalist Villa',
    location: 'Sector 4, Sihi, Noida',
    price: 25000000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    type: 'Sale',
  },
  {
    id: '2',
    title: 'Luxury Downtown Apartment',
    location: 'Central Boulevard, Sihi, Noida',
    price: 15000000,
    beds: 2,
    baths: 2,
    sqft: 1450,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    type: 'Sale',
  },
  {
    id: '3',
    title: 'Cozy Suburban Townhouse',
    location: 'West Enclave, Sihi, Noida',
    price: 45000,
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    type: 'Rent',
  },
  {
    id: '4',
    title: 'Contemporary Family Home',
    location: 'Valley Park, Sihi, Noida',
    price: 18000000,
    beds: 4,
    baths: 3,
    sqft: 2400,
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    type: 'Sale',
  },
  {
    id: '5',
    title: 'Skyview Penthouse',
    location: 'North Towers, Sihi, Noida',
    price: 85000,
    beds: 3,
    baths: 3,
    sqft: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    type: 'Rent',
  },
  {
    id: '6',
    title: 'Heritage Estate',
    location: 'Old District, Sihi, Noida',
    price: 55000000,
    beds: 6,
    baths: 5,
    sqft: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    type: 'Sale',
  },
];
