'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';

export default function Home() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const sendViaWhatsApp = () => {
    const { firstName, lastName, email, subject, message } = form;

    const text = `
*Contact Form Inquiry*
👤 Name: ${firstName} ${lastName}
📧 Email: ${email}
📌 Subject: ${subject}
📝 Message: ${message}
    `.trim();

    const phoneNumber = '9660104545';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-amber-50/95 backdrop-blur-md border-b border-amber-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-amber-900">
                Shivam Art
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Products', 'Gallery', 'Contact'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-amber-800 hover:text-amber-900 font-medium transition-colors duration-200 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-amber-800 hover:text-amber-900"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-amber-200 bg-amber-50">
              {['Home', 'About', 'Products', 'Gallery', 'Contact'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-2 text-amber-800 hover:text-amber-900 hover:bg-amber-100 transition-colors duration-200"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(assets/banner-1.png)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Handcrafted with
            <span className="block text-amber-300">Tradition</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-200 max-w-2xl mx-auto">
            Three generations of master craftsmen creating beautiful wooden
            pieces that tell stories and warm hearts
          </p>
          <button
            onClick={() => scrollToSection('products')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Products
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-stone-700">
                <p className="mb-6">
                  Founded in 1952 by master craftsman Joseph Miller, our family
                  business has been creating exceptional wooden handicrafts for
                  over seven decades. What started as a small workshop in rural
                  Vermont has grown into a celebrated artisan studio, yet we
                  remain true to our traditional methods and values.
                </p>
                <p className="mb-6">
                  Each piece we create tells a story - from the carefully
                  selected hardwoods sourced from sustainable forests to the
                  intricate hand-carved details that showcase our craftsman's
                  skill. Our workshop combines time-honored techniques with
                  modern precision to create heirloom-quality pieces.
                </p>
                <p>
                  Today, Joseph's grandson Michael continues the legacy,
                  training a new generation of artisans while preserving the
                  traditional methods that make our work unique. Every cut,
                  every curve, every finish is applied with the same passion and
                  attention to detail that has defined our craft for
                  generations.
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              <img
                src="assets/no-image.jpg"
                alt="Master craftsman at work"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover our collection of handcrafted wooden pieces, each
              uniquely designed and built to last generations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Handcrafted Dining Table',
                description:
                  'Solid oak dining table with intricate carved details, seats 6-8 people comfortably.',
                image: 'assets/no-image.jpg',
                price: '$2,400',
              },
              {
                title: 'Rustic Bookshelf',
                description:
                  'Five-tier reclaimed wood bookshelf with natural edge and traditional joinery.',
                image: 'assets/no-image.jpg',
                price: '$890',
              },
              {
                title: 'Artisan Jewelry Box',
                description:
                  'Walnut jewelry box with velvet lining and hand-carved floral motifs.',
                image: 'assets/no-image.jpg',
                price: '$320',
              },
              {
                title: 'Custom Kitchen Cabinets',
                description:
                  'Made-to-order kitchen cabinets in cherry wood with traditional raised panels.',
                image: 'assets/no-image.jpg',
                price: 'From $4,200',
              },
              {
                title: 'Wooden Serving Tray',
                description:
                  'Maple serving tray with carved handles, perfect for entertaining guests.',
                image: 'assets/no-image.jpg',
                price: '$165',
              },
              {
                title: 'Rocking Chair',
                description:
                  'Traditional Windsor-style rocking chair crafted from seasoned hardwood.',
                image: 'assets/no-image.jpg',
                price: '$1,250',
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-stone-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-700">
                      {product.price}
                    </span>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Workshop Gallery
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Take a glimpse into our workshop and see the artistry behind every
              piece
            </p>
            <div className="mt-8">
              <Link
                href="/products"
                className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Products
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'assets/no-image.jpg',
              'assets/no-image.jpg',
              'assets/no-image.jpg',
              'assets/no-image.jpg',
              'assets/no-image.jpg',
              'assets/no-image.jpg',
            ].map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 px-4 py-2 rounded-md">
                    <span className="text-amber-900 font-medium">
                      View Full Size
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Ready to commission a custom piece or have questions about our
              work? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    Phone
                  </h3>
                  <p className="text-stone-600">
                    +91 9669104545, +91 9413123954
                  </p>
                  <p className="text-stone-500 text-sm">
                    Monday - Sunday, 8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    Email
                  </h3>
                  <p className="text-stone-600">kbsuthar54@gmail.com</p>
                  <p className="text-stone-500 text-sm">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    Workshop
                  </h3>
                  <p className="text-stone-600">Bhinmal - Jalore Rd</p>
                  <p className="text-stone-600"> Ramseen, Rajasthan 307803</p>
                  <p className="text-stone-500 text-sm">Visite Anytime</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-stone-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-stone-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-stone-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-stone-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Custom dining table inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-stone-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    name="message"
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us about your project or ask any questions..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  onClick={sendViaWhatsApp}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-md font-semibold transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Shivam Art</h3>
              <p className="text-amber-200 mb-4">
                Handcrafting exceptional wooden pieces since 1995. Three
                generations of tradition, quality, and artistry.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors duration-200"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors duration-200"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors duration-200"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Products', 'Gallery', 'Contact'].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block text-amber-200 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Workshop Hours</h4>
              <div className="space-y-2 text-amber-200">
                <p>Monday - Sunday: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 mt-8 pt-8 text-center">
            <p className="text-amber-200">
              © 2025 Shivam Art. All rights reserved. | Handcrafted with love.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
