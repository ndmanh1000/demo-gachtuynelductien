interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  t: (key: string) => string;
}

export default function Pagination({ currentPage, totalPages, onPageChange, t }: PaginationProps) {
  return (
    <div className="mt-12 flex justify-center items-center gap-2">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#b84a14] hover:text-[#b84a14]"
        }`}
      >
        {t("previous") || "Previous"}
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          if (
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - 1 && page <= currentPage + 1)
          ) {
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`w-10 h-10 rounded-lg font-medium transition-all ${
                  currentPage === page
                    ? "bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white shadow-lg"
                    : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#b84a14] hover:text-[#b84a14]"
                }`}
              >
                {page}
              </button>
            );
          } else if (page === currentPage - 2 || page === currentPage + 2) {
            return (
              <span
                key={page}
                className="w-10 h-10 flex items-center justify-center text-gray-400"
              >
                ...
              </span>
            );
          }
          return null;
        })}
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#b84a14] hover:text-[#b84a14]"
        }`}
      >
        {t("next") || "Next"}
      </button>
    </div>
  );
}
