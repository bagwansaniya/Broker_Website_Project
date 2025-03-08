import React, { useRef, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;

    // Hover animation setup
    card?.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(image, {
        scale: 1.1,
        duration: 0.5,
        ease: "power2.out"
      });
    });

    card?.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(image, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });
    });
  }, []);

  return (
    <div ref={cardRef} className="property-card bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          ref={imageRef}
          src={property.image} 
          alt={property.title} 
          className="w-full h-48 sm:h-64 object-cover transform-gpu"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {property.type}
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{property.title}</h3>
       
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center sm:justify-start group">
            <Phone size={16} className="transform group-hover:rotate-12 transition-transform duration-300" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;