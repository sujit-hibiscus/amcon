"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">About AMCON Castings</h2>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              With over 20 years of experience in investment casting, AMCON Castings has established itself as a trusted partner for industries worldwide. We specialize in manufacturing precision castings that meet the highest quality standards.
            </p>
            <p className="text-lg text-text-light mb-8 leading-relaxed">
              Our state-of-the-art facilities, combined with expert craftsmanship and modern technology, enable us to deliver solutions that exceed customer expectations. We are committed to sustainable manufacturing practices and continuous innovation.
            </p>
            <div className="flex gap-4">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">45+</h3>
                <p className="text-text-light">Active Customers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">1000+</h3>
                <p className="text-text-light">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">20+</h3>
                <p className="text-text-light">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Placeholder */}
          <div className="fade-in relative">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl h-96 md:h-full min-h-96 flex items-center justify-center shadow-xl">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏭</div>
                <p className="text-xl font-semibold">Manufacturing Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
