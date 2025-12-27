import { Link } from "react-router-dom";
import gallery1 from "../assets/images/gallery1.jpg";

export default function About() {
  return (
    <div className="bg-cream">

      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center text-center px-6 bg-gold">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Sri Varshini Designer Studio
          </h1>
          <p className="text-white max-w-2xl mx-auto">
            Crafting elegance, tradition, and timeless beauty through custom
            designer wear.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div>
            <img
              src={gallery1}
              alt="Sri Varshini Designer Studio"
              className="rounded-2xl shadow-xl w-full object-cover h-[700px]"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-gold mb-4">
              Our Story
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Sri Varshini Designer Studio is a boutique dedicated to bringing
              dreams to life through elegant, customized designer wear. With a
              deep respect for traditional craftsmanship and a passion for modern
              fashion, we create outfits that reflect individuality and grace.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Our expertise lies in bridal wear, maggam work, machine embroidery,
              lehengas, theme party dresses, and birthday outfits — all crafted
              with premium fabrics, detailed handwork, and flawless finishing.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Every design at Sri Varshini is tailored with care, ensuring comfort,
              beauty, and confidence for every special occasion.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES HIGHLIGHT */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gold mb-10">
            What We Specialize In
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Bridal Wear & Lehengas",
              "Maggam & Hand Embroidery",
              "Machine Embroidery Designs",
              "Theme Party Dresses",
              "Birthday & Kids Wear",
              "Custom Designer Outfits",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow text-gray-700 font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-gold mb-4">
          Let’s Design Something Beautiful
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Whether it’s your wedding, a special celebration, or a custom outfit,
          we’re here to design something truly special for you.
        </p>

        <Link
          to="/contact"
          className="bg-gold text-white px-8 py-3 rounded-full hover:opacity-90 transition"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
}
