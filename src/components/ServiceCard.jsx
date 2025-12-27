import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <div className="border p-4">
      <img src={service.image} className="h-48 w-full object-cover" />
      <h3 className="text-gold mt-2">{service.title}</h3>
      <Link to={`/services/${service.id}`} className="text-sm">
        View Details
      </Link>
    </div>
  );
}
