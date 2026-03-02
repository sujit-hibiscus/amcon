"use client"

import { features } from "@/lib/data"

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">Our Core Strengths</h2>
          <p className="text-lg text-text-light">What sets AMCON apart from the competition</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 text-center group slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-7xl mb-6 group-hover:scale-125 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-3xl font-bold text-text mb-4">{feature.title}</h3>
              <p className="text-lg text-text-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
