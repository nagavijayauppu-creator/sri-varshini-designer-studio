import { useParams, Link } from "react-router-dom";
import gallery from "../data/galleryData";

export default function GalleryDetails() {
  const { id } = useParams();
  const item = gallery.find((g) => g.id === id);

  if (!item) {
    return <p className="text-center mt-10">Image not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-96 object-cover rounded"
      />

      <h2 className="text-2xl font-bold text-gold mt-4">
        {item.title}
      </h2>

      <p className="mt-2">
        {item.details}
      </p>

      <Link to="/gallery" className="text-gold mt-4 inline-block">
        ← Back to Gallery
      </Link>
    </div>
  );
}
