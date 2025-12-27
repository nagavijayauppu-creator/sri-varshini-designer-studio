import { useState } from "react";
import services from "../data/servicesData";
import ServiceCard from "../components/ServiceCard";
import Pagination from "../components/Pagination";

export default function Services() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentServices = services.slice(firstIndex, lastIndex);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gold mb-6">
        Our Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <Pagination
        total={services.length}
        perPage={perPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
