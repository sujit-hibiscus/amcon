"use client"

import { quickFacts } from "@/lib/data"

export default function QuickFacts() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">Why Choose AMCON?</h2>
          <p className="text-lg text-text-light">Industry-leading solutions backed by years of expertise</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {quickFacts.map((fact, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{fact.icon}</div>
              <h3 className="text-xl font-bold text-text mb-3">{fact.title}</h3>
              <p className="text-text-light leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
