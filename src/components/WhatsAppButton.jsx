import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "916303179166";
  const message =
    "Hello Sri Varshini Boutique, I’m interested in your designs.";

  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Soft Glow */}
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 blur-xl animate-pulse"></span>

      {/* Button */}
      <span
        className="relative flex items-center justify-center
                   w-16 h-16 rounded-full
                   bg-green-500
                   shadow-2xl
                   transition-transform duration-300
                   group-hover:scale-110"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </span>
    </a>
  );
}
