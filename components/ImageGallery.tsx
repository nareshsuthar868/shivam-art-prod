"use client";

import { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Download,
  Share2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
  category?: string;
}

export default function ImageGallery({
  images,
  className,
  category,
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Early return if no images provided
  if (!images || images.length === 0) {
    return (
      <div className={cn("flex items-center justify-center py-20", className)}>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-muted-foreground/20 rounded"></div>
          </div>
          <p className="text-muted-foreground">No images to display</p>
        </div>
      </div>
    );
  }

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length;

    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const toggleFavorite = (imageId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(imageId)) {
      newFavorites.delete(imageId);
    } else {
      newFavorites.add(imageId);
    }
    setFavorites(newFavorites);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  const handleImageLoad = (imageId: string) => {
    setImageLoaded((prev) => ({ ...prev, [imageId]: true }));
  };

  return (
    <>
      {/* Gallery Grid */}
      <div
        className={cn(
          "columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-6 space-y-6",
          className
        )}
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className="break-inside-avoid group cursor-pointer mb-6"
            onClick={() => openModal(image, index)}
          >
            <div className="relative overflow-hidden rounded-2xl bg-muted shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] min-h-[200px]">
              {/* Loading skeleton */}
              {!imageLoaded[image.id] && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted via-muted/80 to-muted/60 min-h-[200px]" />
              )}

              <img
                src={image.url}
                alt={image.title}
                className={cn(
                  "w-full h-auto transition-all duration-500 min-h-[200px] object-cover",
                  imageLoaded[image.id] ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => handleImageLoad(image.id)}
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <h3 className="font-semibold text-lg mb-1">
                        {image.title}
                      </h3>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(image.id);
                      }}
                      className={cn(
                        "p-2 rounded-full transition-colors duration-200",
                        favorites.has(image.id)
                          ? "bg-red-500 text-white"
                          : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                      )}
                    >
                      <Heart
                        className={cn(
                          "w-4 h-4",
                          favorites.has(image.id) && "fill-current"
                        )}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-3 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />

              {/* Image info */}
              <div className="p-4 border-t border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">
                      {selectedImage.title}
                    </h2>
                    <p className="text-muted-foreground mb-3">
                      {selectedImage.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image counter */}
                <div className="text-center text-sm text-muted-foreground">
                  {currentIndex + 1} of {images.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
