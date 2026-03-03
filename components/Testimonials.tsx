"use client"

import { testimonials, statistics } from "@/lib/data"

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Statistics Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="text-center slide-up">
            <h3 className="text-5xl md:text-6xl font-bold text-primary mb-2">{statistics.customers}</h3>
            <p className="text-lg text-text-light">Satisfied Customers</p>
          </div>
          <div className="text-center slide-up" style={{ animationDelay: "100ms" }}>
            <h3 className="text-5xl md:text-6xl font-bold text-primary mb-2">{statistics.experience}</h3>
            <p className="text-lg text-text-light">Industry Experience</p>
          </div>
          <div className="text-center slide-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-5xl md:text-6xl font-bold text-primary mb-2">{statistics.projects}</h3>
            <p className="text-lg text-text-light">Projects Completed</p>
          </div>
          <div className="text-center slide-up" style={{ animationDelay: "300ms" }}>
            <h3 className="text-5xl md:text-6xl font-bold text-primary mb-2">{statistics.satisfaction}</h3>
            <p className="text-lg text-text-light">Client Satisfaction</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="border-t pt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-16 text-center slide-up">What Our Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-surface p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg text-text-light mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-text">{testimonial.author}</p>
                  <p className="text-sm text-text-light">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
