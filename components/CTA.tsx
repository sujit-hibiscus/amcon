"use client"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-dark">
      <div className="max-w-4xl mx-auto text-center slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-white/90 mb-10">
          Contact us today to discuss your casting requirements and receive a customized quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/+1555123456"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Message on WhatsApp
          </a>
          <a
            href="mailto:info@amconcastings.com"
            className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-colors duration-300"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  )
}
