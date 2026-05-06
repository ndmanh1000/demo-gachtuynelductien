import { Filter, ChevronDown, Check } from "lucide-react";

interface FilterDropdownProps {
  showFilterDropdown: boolean;
  setShowFilterDropdown: (show: boolean) => void;
  filter: string;
  sortBy: string;
  categories: Array<{ id: string; label: string; count: number }>;
  sortOptions: Array<{ id: string; label: string }>;
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: string) => void;
  onClearAll: () => void;
  t: (key: string) => string;
}

export default function FilterDropdown({
  showFilterDropdown,
  setShowFilterDropdown,
  filter,
  sortBy,
  categories,
  sortOptions,
  onFilterChange,
  onSortChange,
  onClearAll,
  t,
}: FilterDropdownProps) {
  return (
    <div
      className="relative pb-2"
      onMouseEnter={() => setShowFilterDropdown(true)}
      onMouseLeave={() => setShowFilterDropdown(false)}
    >
      <button className="flex items-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-[#b84a14] transition-all font-medium text-gray-700">
        <Filter className="w-5 h-5" />
        <span>{t("filter")}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {showFilterDropdown && (
        <>
          {/* Mobile backdrop */}
          <div className="md:hidden fixed inset-0 bg-black/20 z-[100]" onClick={() => setShowFilterDropdown(false)} />

          {/* Filter dropdown */}
          <div className="fixed md:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:top-full md:left-auto md:right-0 md:-mt-2 w-[calc(100vw-2rem)] max-w-[320px] md:w-72 bg-white rounded-xl shadow-2xl border-2 border-gray-200 z-[101] md:z-50 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h4 className="text-sm font-bold text-gray-900 mb-3">
              {t("category") || "Category"}
            </h4>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onFilterChange(cat.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === cat.id
                      ? "bg-[#b84a14] text-white"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      filter === cat.id ? "bg-white/20" : "bg-gray-200"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4">
            <h4 className="text-sm font-bold text-gray-900 mb-3">
              {t("sort_by") || "Sort By"}
            </h4>
            <div className="space-y-2">
              {sortOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => onSortChange(option.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    sortBy === option.id
                      ? "bg-[#b84a14] text-white"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span>{option.label}</span>
                  {sortBy === option.id && <Check className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </div>

          {(filter !== "all" || sortBy !== "default") && (
            <div className="p-3 border-t border-gray-200 bg-gray-50">
              <button
                onClick={onClearAll}
                className="w-full text-sm font-semibold text-[#b84a14] hover:text-[#a14010] transition-colors"
              >
                {t("clear_all") || "Clear All"}
              </button>
            </div>
          )}
        </div>
        </>
      )}
    </div>
  );
}
