"use client";

import { useCart } from "@/contexts/CartContext";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import ProductCard from "./products/ProductCard";
import FilterDropdown from "./products/FilterDropdown";
import Pagination from "./products/Pagination";
import SearchBar from "./products/SearchBar";
import ActiveFilters from "./products/ActiveFilters";

export default function ProductList() {
  const { addToCart } = useCart();
  const t = useTranslations("Products");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [addedProduct, setAddedProduct] = useState<string | null>(null);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      });
  }, []);

  const products = productsData.map((product: any) => ({
    ...product,
    name: product.name || t(`${product.id}.name`),
    desc: product.desc || t(`${product.id}.desc`),
  }));

  const categories = [
    { id: "all", label: t("all"), count: products.length },
    { id: "standard", label: t("standard"), count: products.filter(p => p.category === "standard").length },
    { id: "decorative", label: t("decorative"), count: products.filter(p => p.category === "decorative").length },
    { id: "special", label: t("special"), count: products.filter(p => p.category === "special").length },
  ];

  const sortOptions = [
    { id: "default", label: t("sort_default") || "Default" },
    { id: "price_asc", label: t("sort_price_asc") || "Price: Low to High" },
    { id: "price_desc", label: t("sort_price_desc") || "Price: High to Low" },
    { id: "name_asc", label: t("sort_name") || "Name: A-Z" },
  ];

  let filteredProducts = products;

  if (filter !== "all") {
    filteredProducts = filteredProducts.filter((p) => p.category === filter);
  }

  if (searchQuery.trim()) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (sortBy === "price_asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price_desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "name_asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handleSortChange = (newSort: string) => {
    setSortBy(newSort);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleAddToCart = (product: { id: string; name: string; price: number; image: string }) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAddedProduct(product.id);
    setTimeout(() => setAddedProduct(null), 2000);
  };

  const handleClearAll = () => {
    setFilter("all");
    setSortBy("default");
    setCurrentPage(1);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              placeholder={t("search_placeholder") || "Search products..."}
            />

            <div className="flex items-center gap-3">
              <FilterDropdown
                showFilterDropdown={showFilterDropdown}
                setShowFilterDropdown={setShowFilterDropdown}
                filter={filter}
                sortBy={sortBy}
                categories={categories}
                sortOptions={sortOptions}
                onFilterChange={handleFilterChange}
                onSortChange={handleSortChange}
                onClearAll={handleClearAll}
                t={t}
              />
            </div>
          </div>
        </div>

        <ActiveFilters
          filter={filter}
          sortBy={sortBy}
          searchQuery={searchQuery}
          categories={categories}
          sortOptions={sortOptions}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          onSearchChange={handleSearchChange}
          t={t}
        />

        <div className="mb-6">
          <p className="text-sm text-gray-600">
            {t("showing") || "Showing"} <span className="font-bold text-gray-900">{startIndex + 1}-{Math.min(endIndex, filteredProducts.length)}</span> {t("of") || "of"} <span className="font-bold text-gray-900">{filteredProducts.length}</span> {t("products_count")}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b84a14]"></div>
          </div>
        ) : (
          <>
            <div className={
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            }>
              {currentProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  addedProduct={addedProduct}
                  onAddToCart={handleAddToCart}
                  t={t}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
                  <X className="w-10 h-10 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg">{t("no_products")}</p>
              </div>
            )}
          </>
        )}

        {filteredProducts.length > 0 && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            t={t}
          />
        )}
      </div>
    </section>
  );
}
