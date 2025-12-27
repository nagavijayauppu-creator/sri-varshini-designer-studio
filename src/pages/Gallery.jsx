import { useState } from "react";
import { Link } from "react-router-dom";
import gallery from "../data/galleryData";
import Pagination from "../components/Pagination";

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9; // 3 x 3 grid

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentGallery = gallery.slice(firstIndex, lastIndex);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gold mb-6">Gallery</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {currentGallery.map((item) => (
          <Link
            to={`/gallery/${item.id}`}
            key={item.id}
            className="group"
          >
            <div className="overflow-hidden rounded-xl shadow">
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            <h3 className="text-xl font-semibold text-gold mt-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              {item.details}
            </p>
          </Link>
        ))}
      </div>

      {/* PAGINATION */}
      <Pagination
        total={gallery.length}
        perPage={perPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
