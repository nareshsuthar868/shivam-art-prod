'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Filter } from 'lucide-react';

// Static product data
const productsData = [
  {
    id: 1,
    title: 'Handcrafted Dining Table',
    description:
      'Solid oak dining table with intricate carved details, seats 6-8 people comfortably.',
    image: 'assets/no-image.jpg',
    price: '$2,400',
    category: 'furniture',
  },
  {
    id: 2,
    title: 'Rustic Bookshelf',
    description:
      'Five-tier reclaimed wood bookshelf with natural edge and traditional joinery.',
    image: 'assets/no-image.jpg',
    price: '$890',
    category: 'furniture',
  },
  {
    id: 3,
    title: 'Artisan Jewelry Box',
    description:
      'Walnut jewelry box with velvet lining and hand-carved floral motifs.',
    image: 'assets/no-image.jpg',
    price: '$320',
    category: 'accessories',
  },
  {
    id: 4,
    title: 'Custom Kitchen Cabinets',
    description:
      'Made-to-order kitchen cabinets in cherry wood with traditional raised panels.',
    image: 'assets/no-image.jpg',
    price: 'From $4,200',
    category: 'furniture',
  },
  {
    id: 5,
    title: 'Wooden Serving Tray',
    description:
      'Maple serving tray with carved handles, perfect for entertaining guests.',
    image: 'assets/no-image.jpg',
    price: '$165',
    category: 'kitchenware',
  },
  {
    id: 6,
    title: 'Rocking Chair',
    description:
      'Traditional Windsor-style rocking chair crafted from seasoned hardwood.',
    image: 'assets/no-image.jpg',
    price: '$1,250',
    category: 'furniture',
  },
  {
    id: 7,
    title: 'Wooden Cutting Board Set',
    description:
      'Set of three cutting boards in different sizes, made from bamboo and walnut.',
    image: 'assets/no-image.jpg',
    price: '$85',
    category: 'kitchenware',
  },
  {
    id: 8,
    title: 'Handcarved Picture Frame',
    description:
      'Ornate picture frame with intricate floral carvings, available in multiple sizes.',
    image: 'assets/no-image.jpg',
    price: '$145',
    category: 'accessories',
  },
  {
    id: 9,
    title: 'Wooden Spice Rack',
    description:
      'Wall-mounted spice rack with 12 glass jars, perfect for kitchen organization.',
    image: 'assets/no-image.jpg',
    price: '$220',
    category: 'kitchenware',
  },
  {
    id: 10,
    title: 'Cedar Hope Chest',
    description:
      'Traditional cedar hope chest with brass hardware and soft-close hinges.',
    image: 'assets/no-image.jpg',
    price: '$680',
    category: 'furniture',
  },
  {
    id: 11,
    title: 'Wooden Wine Rack',
    description:
      'Elegant wine rack holding 12 bottles, crafted from reclaimed oak.',
    image: 'assets/no-image.jpg',
    price: '$295',
    category: 'accessories',
  },
  {
    id: 12,
    title: 'Artisan Wooden Bowl Set',
    description:
      'Set of five nesting bowls hand-turned from cherry wood with natural finish.',
    image: 'assets/no-image.jpg',
    price: '$180',
    category: 'kitchenware',
  },
];

const categories = [
  { id: 'all', name: 'All Products', count: productsData.length },
  {
    id: 'furniture',
    name: 'Furniture',
    count: productsData.filter((p) => p.category === 'furniture').length,
  },
  {
    id: 'kitchenware',
    name: 'Kitchenware',
    count: productsData.filter((p) => p.category === 'kitchenware').length,
  },
  {
    id: 'accessories',
    name: 'Accessories',
    count: productsData.filter((p) => p.category === 'accessories').length,
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredProducts =
    selectedCategory === 'all'
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-amber-50/95 backdrop-blur-md border-b border-amber-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center space-x-3 text-amber-900 hover:text-amber-800 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="text-2xl font-bold text-amber-900">Shivam Art</div>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our Complete Collection
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover our full range of handcrafted wooden pieces, each uniquely
            designed and built with traditional techniques passed down through
            generations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex justify-between items-center ${
                      selectedCategory === category.id
                        ? 'bg-amber-100 text-amber-900 font-medium'
                        : 'text-stone-600 hover:bg-stone-50 hover:text-stone-800'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-sm bg-stone-200 text-stone-600 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md border border-stone-200"
            >
              <Filter size={20} className="text-amber-600" />
              <span className="font-medium text-stone-700">
                Filter by Category
              </span>
            </button>

            {/* Mobile Filter Dropdown */}
            {mobileFilterOpen && (
              <div className="mt-4 bg-white rounded-lg shadow-lg border border-stone-200 p-4">
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setMobileFilterOpen(false);
                      }}
                      className={`px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-amber-100 text-amber-900 font-medium'
                          : 'text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-stone-600">
                Showing {filteredProducts.length} of {productsData.length}{' '}
                products
              </p>
              <div className="hidden sm:block text-sm text-stone-500">
                Category:{' '}
                <span className="font-medium text-amber-700">
                  {categories.find((c) => c.id === selectedCategory)?.name}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
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
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-amber-900">
                        {product.title}
                      </h3>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full capitalize">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-stone-600 mb-4 line-clamp-3">
                      {product.description}
                    </p>
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

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-stone-500 text-lg">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Shivam Art</h3>
            <p className="text-amber-200 mb-4">
              Handcrafting exceptional wooden pieces since 1995.
            </p>
            <div className="border-t border-amber-800 pt-8">
              <p className="text-amber-200">
                © 2025 Shivam Art . All rights reserved. | Handcrafted with
                love.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
