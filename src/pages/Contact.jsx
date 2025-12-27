import emailjs from "emailjs-com";

export default function Contact() {
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
        alert("Thank you! Your message has been sent.");
        e.target.reset();
      });
  };

  return (
    <div className="bg-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with Sri Varshini Designer Studio for custom bridal wear,
            maggam work, embroidery, and exclusive designer outfits.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT: CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gold mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={sendEmail} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your requirement"
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
              ></textarea>

              <button
                type="submit"
                className="bg-gold text-white px-6 py-3 rounded-full hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: CONTACT INFO + MAP */}
          <div className="space-y-8">

            {/* CONTACT INFO */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                Visit Our Studio
              </h2>

              <p className="text-gray-600 mb-3">
                📍 Hyderabad, Telangana
              </p>
              <p className="text-gray-600 mb-3">
                📞 +91 98765 43210
              </p>
              <p className="text-gray-600">
                ✉️ srivarshinidesignerstudio@gmail.com
              </p>
            </div>

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Sri Varshini Boutique Location"
                src="https://www.google.com/maps?q=Hyderabad&output=embed"
                className="w-full h-72 border-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
