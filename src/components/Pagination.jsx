export default function Pagination({
  total,
  perPage,
  currentPage,
  setCurrentPage,
}) {
  const pages = Math.ceil(total / perPage);

  return (
    <div className="flex justify-center gap-3 mt-8">
      {[...Array(pages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-4 py-2 border ${
            currentPage === index + 1
              ? "bg-gold text-white"
              : "bg-white"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
