import { Link } from "react-router-dom";
import gallery from "../data/galleryData";
import emailjs from "emailjs-com";
import Carousel from "../components/Carousel";
import services from "../data/servicesData";
import gallery1 from "../assets/images/gallery1.jpg";




export default function Home() {
    const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "SERVICE_ID",
      "TEMPLATE_ID",
      e.target,
      "PUBLIC_KEY"
    )
    .then(() => {
      alert("Message sent successfully");
      e.target.reset();
    });
};

  return (
    <div className="bg-cream">
<section className="relative">
  <Carousel />

  {/* HERO TEXT ON TOP */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
      <span className="font-signature text-6xl ">
  Sri Varshini Designer Studio
</span>

    </h1>
    <p className="text-lg text-white max-w-xl">
      Bridal Wear • Maggam Work • Machine Embroidery • Party & Theme Dresses
    </p>

    <Link
      to="/services"
      className="mt-6 bg-gold text-white px-6 py-3 rounded-full hover:opacity-90"
    >
      View Our Services
    </Link>
  </div>
</section>


     
      {/* ABOUT PREVIEW */}
<section className="py-20 bg-white px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT: IMAGE */}
    <div>
      <img
        src={gallery1}
        alt="Sri Varshini Designer Studio"
        className="rounded-2xl shadow-lg w-full object-cover h-[500px]"
      />
    </div>

    {/* RIGHT: CONTENT */}
    <div>
      <h2 className="text-3xl font-bold text-gold mb-4">
        About Sri Varshini Designer Studio
      </h2>

      <p className="text-gray-600 mb-4 leading-relaxed">
        Sri Varshini Designer Studio is a premium boutique dedicated to creating
        elegant, customized outfits that celebrate tradition with a modern touch.
        We specialize in bridal wear, maggam work, machine embroidery, and exclusive
        designer collections.
      </p>

      <p className="text-gray-600 mb-6 leading-relaxed">
        From bridal lehengas to birthday and theme party dresses, every piece is
        crafted with attention to detail, quality fabrics, and flawless finishing
        to make every occasion truly special.
      </p>

      <Link
        to="/about"
        className="inline-block bg-gold text-white px-6 py-3 rounded-full hover:opacity-90 transition"
      >
        Read More
      </Link>
    </div>

  </div>
</section>


      {/* SERVICES PREVIEW (LIKE GALLERY STYLE) */}
<section className="py-16 bg-cream px-6">
  <h2 className="text-3xl font-bold text-gold text-center mb-10">
    Our Services
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {services.slice(0, 4).map((service) => (
      <Link
        to={`/services/${service.id}`}
        key={service.id}
        className="block overflow-hidden rounded-xl shadow group bg-white"
      >
        <img
          src={service.image}
          alt={service.title}
          className="h-56 w-full object-cover group-hover:scale-110 transition duration-300"
        />

        <div className="p-4">
          <h3 className="text-xl font-semibold text-gold">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            {service.details}
          </p>
        </div>
      </Link>
    ))}
  </div>

  <div className="text-center mt-10">
    <Link
      to="/services"
      className="bg-gold text-white px-6 py-3 rounded-full hover:opacity-90 transition"
    >
      View All Services
    </Link>
  </div>
</section>

      {/* GALLERY PREVIEW */}
<section className="py-16 bg-white px-6">
  <h2 className="text-3xl font-bold text-gold text-center mb-10">
    Gallery
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {gallery.slice(0, 4).map((item) => (
      <Link
        to={`/gallery/${item.id}`}
        key={item.id}
        className="block overflow-hidden rounded-xl shadow"
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-56 w-full object-cover hover:scale-110 transition"
        />
        <h2 className="text-2xl font-bold text-gold mt-4">
        {item.title}
      </h2>
      <p className="mt-2">
        {item.details}
      </p>
      </Link>
    ))}
  </div>

  <div className="text-center mt-10">
    <Link
      to="/gallery"
      className="bg-gold text-white px-6 py-3 rounded-full"
    >
      View More
    </Link>
  </div>
</section>
{/* CONTACT SECTION */}
<section className="py-20 bg-white px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT: CONTACT FORM */}
    <div>
      <h2 className="text-3xl font-bold text-gold mb-4">
        Get in Touch
      </h2>
      <p className="text-gray-600 mb-6">
        Have a design in mind? From bridal wear to custom party outfits,
        we’d love to bring your vision to life.
      </p>

      <form onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border rounded px-4 py-2"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full border rounded px-4 py-2"
        ></textarea>

        <button
          type="submit"
          className="bg-gold text-white px-6 py-3 rounded-full"
        >
          Send Message
        </button>
      </form>
    </div>

    {/* RIGHT: GOOGLE MAP */}
    <div className="w-full h-full">
      <iframe
        title="Boutique Location"
        src="https://www.google.com/maps?q=Hyderabad&output=embed"
        className="w-full h-96 rounded-xl border"
        loading="lazy"
      ></iframe>
    </div>

  </div>
</section>

      
    </div>
  );
}

