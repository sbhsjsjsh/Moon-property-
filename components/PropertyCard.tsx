import Image from 'next/image';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Property } from '../data/properties';

export default function PropertyCard({ property, priority = false }: { property: Property, priority?: boolean }) {
  const formattedPrice = property.type === 'Rent' 
    ? `₹${property.price.toLocaleString('en-IN')}/mo` 
    : `₹${property.price.toLocaleString('en-IN')}`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-neutral-200 transition-all hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 backdrop-blur-sm">
          For {property.type}
        </div>
      </div>
      
      <div className="flex flex-col p-5">
        <div className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
          {formattedPrice}
        </div>
        
        <h3 className="mb-1 text-lg font-semibold text-neutral-800 line-clamp-1">
          {property.title}
        </h3>
        
        <div className="mb-4 flex items-center text-sm text-neutral-500">
          <MapPin className="mr-1 h-4 w-4 shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>
        
        <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-4 text-sm text-neutral-600">
          <div className="flex items-center gap-1.5">
            <Bed className="h-4 w-4" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="h-4 w-4" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}
