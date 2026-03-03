"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full h-96 md:h-[600px] overflow-hidden pt-20 bg-gradient-to-r from-primary to-primary-dark">
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <div className="slide-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Premier Quality <br className="hidden md:block" />
            Investment Casting
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Precision engineering solutions for industrial, automotive, food & pharma, and more. Your trusted casting partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#products"
              className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300"
            >
              Explore Products
            </Link>
            <a
              href="https://wa.me/+1555123456"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{
        clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)"
      }}></div>
    </section>
  )
}
