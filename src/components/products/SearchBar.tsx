import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  placeholder: string;
}

export default function SearchBar({ searchQuery, onSearchChange, placeholder }: SearchBarProps) {
  return (
    <div className="relative flex-1 max-w-md w-full">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#b84a14] focus:ring-2 focus:ring-[#b84a14]/20 transition-all outline-none text-base"
      />
    </div>
  );
}
