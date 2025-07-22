"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Filter } from "lucide-react";
import ImageGallery, { GalleryImage } from "@/components/ImageGallery";

export interface Category {
  id: number;
  title: string;
  description: string;
  products: GalleryImage[];
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/assets/category-products.json")
      .then((res) => res.json())
      .then((data: any) => setCategories(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const filteredCategory: any =
    selectedCategory === 0
      ? categories
      : categories.find(
          (category: Category) => category.id === selectedCategory
        );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory]);

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

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4 py-8">
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
          <div className="hidden lg:block w-66 min-w-[20rem] flex-shrink-0">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category: any) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-2 py-3 rounded-md transition-all duration-200 flex justify-between items-center ${
                      selectedCategory === category.id
                        ? "bg-amber-100 text-amber-900 font-medium"
                        : "text-stone-600 hover:bg-stone-50 hover:text-stone-800"
                    }`}
                  >
                    <span>{category.title}</span>
                    <span className="text-sm bg-stone-200 text-stone-600 px-2 py-1 rounded-full">
                      {category.products.length}
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
                  {categories.map((category: any) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setMobileFilterOpen(false);
                      }}
                      className={`px-2 py-2 rounded-md text-sm transition-all duration-200 ${
                        selectedCategory === category.id
                          ? "bg-amber-100 text-amber-900 font-medium"
                          : "text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      {category.title} ({category.products.length})
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
                Showing {filteredCategory?.products?.length} of{" "}
                {filteredCategory?.products?.length} products
              </p>
              <div className="hidden sm:block text-sm text-stone-500">
                Category:{" "}
                <span className="font-medium text-amber-700">
                  {
                    categories.find((p: any) => p.id === selectedCategory)
                      ?.title
                  }
                </span>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {filteredCategory?.products?.length > 0 && (
                <ImageGallery
                  images={filteredCategory?.products}
                  category={
                    categories.find((p: any) => p.id === selectedCategory)
                      ?.title
                  }
                  className="w-full"
                />
              )}
            </div>

            {filteredCategory?.products?.length === 0 && (
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
