import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Building2, Phone, Mail, MapPin } from 'lucide-react';
import PropertyCard from './components/PropertyCard';
import ContactForm from './components/ContactForm';
import { properties } from './data/properties';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef(null);
  const propertiesRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    // Header animation
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power3.out"
    });

    // Hero text animations
    const heroText = headerRef.current?.querySelectorAll('.hero-text');
    gsap.from(heroText, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.5
    });

    // Properties section animation
    const cards = document.querySelectorAll('.property-card');
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        rotation: 2,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });

    // Services section animation
    const services = servicesRef.current?.querySelectorAll('.service-card');
    services?.forEach((service, index) => {
      gsap.from(service, {
        scrollTrigger: {
          trigger: service,
          start: "top bottom-=50",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: index % 2 === 0 ? -30 : 30,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header ref={headerRef} className="relative h-[80vh] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center">
          <Building2 size={64} className="mb-4 md:mb-6 hero-text" />
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 hero-text">SK Properties</h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 hero-text">Your Trusted Real Estate Partner in Phaltan</p>
          <div className="flex flex-col sm:flex-row gap-4 hero-text">
            <a href="#properties" className="w-full sm:w-auto bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center">
              View Properties
            </a>
            <a href="#contact" className="w-full sm:w-auto border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Properties Section */}
      <section id="properties" ref={propertiesRef} className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="bg-blue-50 py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Sell. Buy. Rent</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="service-card bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <Home className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Residential Properties</h3>
              <p className="text-gray-600">Find your perfect home with our selection of flats, row houses, and independent bungalows.</p>
            </div>
            <div className="service-card bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <MapPin className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">N.A. Properties</h3>
              <p className="text-gray-600">Expert guidance in Non-Agricultural property transactions and documentation.</p>
            </div>
            <div className="service-card bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Agricultural Land</h3>
              <p className="text-gray-600">Specialized services for agricultural land transactions and consultancy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="break-words">9822794889 / 8788440544</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="break-words">bagwanjaved55@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">Location</p>
                  <p>Phaltan, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 SK Properties. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;