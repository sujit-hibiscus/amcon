"use client"

import { useState } from "react"
import { products } from "@/lib/data"

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  // Show 3 items on desktop, 1 on mobile
  const itemsPerPage = 3
  const visibleProducts = []
  for (let i = 0; i < itemsPerPage; i++) {
    visibleProducts.push(products[(currentIndex + i) % products.length])
  }

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">Our Products & Solutions</h2>
          <p className="text-lg text-text-light">Serving diverse industries with precision-engineered castings</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Product Image */}
                <div className="h-56 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center overflow-hidden relative">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {product.id === 1 && "💧"}
                    {product.id === 2 && "🏥"}
                    {product.id === 3 && "🔧"}
                    {product.id === 4 && "⚙️"}
                    {product.id === 5 && "🚗"}
                    {product.id === 6 && "🚜"}
                    {product.id === 7 && "🔬"}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-text mb-3">{product.name}</h3>
                  <p className="text-text-light mb-4">{product.description}</p>
                  <button className="text-primary font-bold hover:text-primary-dark transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Single View */}
          <div className="md:hidden mb-8">
            <div className="bg-surface rounded-2xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <div className="text-7xl">
                  {products[currentIndex].id === 1 && "💧"}
                  {products[currentIndex].id === 2 && "🏥"}
                  {products[currentIndex].id === 3 && "🔧"}
                  {products[currentIndex].id === 4 && "⚙️"}
                  {products[currentIndex].id === 5 && "🚗"}
                  {products[currentIndex].id === 6 && "🚜"}
                  {products[currentIndex].id === 7 && "🔬"}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-text mb-3">{products[currentIndex].name}</h3>
                <p className="text-text-light">{products[currentIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
              aria-label="Previous product"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex % products.length ? "bg-primary w-8" : "bg-border"
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
              aria-label="Next product"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
