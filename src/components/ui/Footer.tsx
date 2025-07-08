import React from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer id='contact' className="bg-black/85 text-white border-t border-white/10 pt-20 pb-8 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 z-10 relative">
        {/* Brand & Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            {/* Replace with logo if needed */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
              GZ
            </div>
            <span className="text-2xl font-semibold tracking-wide font-poppins">
              GAZZEE
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Empowering machines to see, understand, and act.<br />
            Vision AI for a smarter, automated world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white/90 tracking-wide">Quick Links</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            {[
              { label: 'What We Do', href: '#services' },
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Contact', href: '#contact' },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-cyan-400 transition duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Offices */}
        <div>
          <h4 className="font-semibold mb-4 text-white/90 tracking-wide">Office Address</h4>
          <div className="text-white/60 text-sm space-y-4">
            <div className="flex gap-2 items-start">
              <MapPin size={18} className="mt-0.5 text-cyan-500" />
              <div>
                DigiTelescope Private Limited
                <br />
                Unispace Business Center, 4th Floor,
                <br />
                Street No 1, Patrika Nagar,
                <br />
                Madhapur,
                <br />
                Hyderabd, Telangana 500081
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <MapPin size={18} className="mt-0.5 text-purple-400" />
              <div>
                DigiTelescope INC.
                <br />
                1234 AI Drive, Silicon Valley, CA
                <br />
                Dover DE 19901
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-white/90 tracking-wide">Contact</h4>
          <div className="text-white/60 text-sm space-y-3">
            <div className="flex items-center gap-2 group">
              <Mail size={18} className="text-cyan-500 group-hover:scale-110 transition" />
              <a
                href="mailto:contact@aivision.tech"
                className="hover:text-cyan-400 transition duration-200"
              >
                ramesh.ayyala@digitelescope.com
              </a>
            </div>
            <div className="flex items-center gap-2 group">
              <Phone size={18} className="text-purple-400 group-hover:scale-110 transition" />
              <span className="hover:text-purple-300 transition duration-200">
                +91 79894-19864
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-white/40 text-xs z-10 relative">
        © {new Date().getFullYear()} Gazzee. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
