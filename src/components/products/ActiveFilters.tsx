import { X } from "lucide-react";

interface ActiveFiltersProps {
  filter: string;
  sortBy: string;
  searchQuery: string;
  categories: Array<{ id: string; label: string; count: number }>;
  sortOptions: Array<{ id: string; label: string }>;
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: string) => void;
  onSearchChange: (query: string) => void;
  t: (key: string) => string;
}

export default function ActiveFilters({
  filter,
  sortBy,
  searchQuery,
  categories,
  sortOptions,
  onFilterChange,
  onSortChange,
  onSearchChange,
  t,
}: ActiveFiltersProps) {
  if (filter === "all" && sortBy === "default" && !searchQuery) {
    return null;
  }

  return (
    <div className="mb-6 flex items-center gap-2 flex-wrap">
      <span className="text-sm font-semibold text-gray-700">
        {t("active_filters") || "Active"}:
      </span>
      {filter !== "all" && (
        <span className="inline-flex items-center gap-1 bg-[#b84a14] text-white text-xs px-3 py-1 rounded-full">
          {categories.find((c) => c.id === filter)?.label}
          <X
            className="w-3 h-3 cursor-pointer"
            onClick={() => onFilterChange("all")}
          />
        </span>
      )}
      {sortBy !== "default" && (
        <span className="inline-flex items-center gap-1 bg-[#b84a14] text-white text-xs px-3 py-1 rounded-full">
          {sortOptions.find((s) => s.id === sortBy)?.label}
          <X
            className="w-3 h-3 cursor-pointer"
            onClick={() => onSortChange("default")}
          />
        </span>
      )}
      {searchQuery && (
        <span className="inline-flex items-center gap-1 bg-[#b84a14] text-white text-xs px-3 py-1 rounded-full">
          "{searchQuery}"
          <X
            className="w-3 h-3 cursor-pointer"
            onClick={() => onSearchChange("")}
          />
        </span>
      )}
    </div>
  );
}
