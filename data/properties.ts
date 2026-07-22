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
    title: 'Modern Minimalist Villa in Sihi',
    location: 'Sihi, Sector 81, Gurugram',
    price: 25000000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    type: 'Sale',
  },
  {
    id: '2',
    title: 'Luxury Apartment on Dwarka Expressway',
    location: 'Dwarka Expressway, Gurugram',
    price: 15000000,
    beds: 3,
    baths: 2,
    sqft: 1850,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    type: 'Sale',
  },
  {
    id: '3',
    title: 'Cozy Builder Floor near New Gurgaon',
    location: 'Sector 82, New Gurgaon',
    price: 45000,
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    type: 'Rent',
  },
  {
    id: '4',
    title: 'Contemporary Family Home in Sector 83',
    location: 'Sector 83, Gurugram',
    price: 18000000,
    beds: 4,
    baths: 3,
    sqft: 2400,
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    type: 'Sale',
  },
  {
    id: '5',
    title: 'Skyview Penthouse at Golf Course Extension',
    location: 'Golf Course Extension Road, Gurugram',
    price: 85000,
    beds: 3,
    baths: 3,
    sqft: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    type: 'Rent',
  },
  {
    id: '6',
    title: 'Premium Commercial Plot',
    location: 'Sohna Road, Gurugram',
    price: 55000000,
    beds: 0,
    baths: 0,
    sqft: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    type: 'Sale',
  },
];
