import { useParams, Link } from "react-router-dom";
import services from "../data/servicesData";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <p className="text-center mt-10">Service not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-96 object-cover rounded"
      />

      <h2 className="text-3xl font-bold text-gold mt-6">
        {service.title}
      </h2>

      <p className="mt-4 text-lg">
        {service.description}
      </p>

      <div className="mt-6 flex gap-4">
        <Link to="/services" className="text-gold">
          ← Back to Services
        </Link>
        <Link to="/" className="text-gold">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
