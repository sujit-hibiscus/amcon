"use client"

import Link from "next/link"
import { contactInfo } from "@/lib/data"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-text text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="slide-up">
            <h3 className="text-2xl font-bold mb-4">AMCON Castings</h3>
            <p className="text-white/70 mb-6">
              Premier quality investment casting manufacturer serving industries worldwide.
            </p>
            <div className="flex gap-4">
              <a href={contactInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                f
              </a>
              <a href={contactInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                𝕏
              </a>
              <a href={contactInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                in
              </a>
              <a href={contactInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                📷
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="slide-up" style={{ animationDelay: "100ms" }}>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#products" className="text-white/70 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#features" className="text-white/70 hover:text-white transition-colors">Features</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="slide-up" style={{ animationDelay: "200ms" }}>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Investment Casting</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Quality Assurance</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Custom Solutions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="slide-up" style={{ animationDelay: "300ms" }}>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <span>📞</span>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span>✉️</span>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors break-all">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span className="text-white/70">{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70">
              &copy; {currentYear} AMCON Castings. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/70 text-sm">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors font-bold">
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
