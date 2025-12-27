import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-signature text-gold mb-4">
              Sri Varshini
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sri Varshini Designer Studio creates elegant bridal and
              designer outfits with premium fabrics, maggam work, and
              flawless craftsmanship.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/services" className="hover:text-gold">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Bridal Wear</li>
              <li>Maggam Work</li>
              <li>Machine Embroidery</li>
              <li>Party & Theme Dresses</li>
              <li>Custom Stitching</li>
            </ul>
          </div>

          {/* CONTACT + SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              <li>📍 Hyderabad, Telangana</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ srivarshinidesignerstudio@gmail.com</li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center
                           rounded-full border border-gold
                           text-gold hover:bg-gold hover:text-white transition"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center
                           rounded-full border border-gold
                           text-gold hover:bg-gold hover:text-white transition"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Sri Varshini Designer Studio. All rights reserved.
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6
                   bg-gold text-white
                   w-10 h-10 rounded-full
                   flex items-center justify-center
                   shadow-lg hover:opacity-90"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
}

