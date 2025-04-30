import React, { useEffect, useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import DiscoverSection from "../components/DiscoverSection";
import FilterHeader from "../components/FilterHeader";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    switch (selectedSort) {
      case "PRICE : HIGH TO LOW":
        return b.price - a.price;
      case "PRICE : LOW TO HIGH":
        return a.price - b.price;
      case "NEWEST FIRST":
        return b.id - a.id;
      case "POPULAR":
        return b.rating?.rate - a.rating?.rate || 0;
      default:
        return 0;
    }
  });

  return (
    <div className="flex flex-col flex-1">
      <DiscoverSection />
      <FilterHeader selectedSort={selectedSort} onSortChange={setSelectedSort} />
      <main className="flex flex-1">
        <FilterSidebar />
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex-1">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </div>
  );
}
