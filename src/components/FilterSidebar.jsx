import { useState } from "react";

export default function FilterSidebar() {
  const filters = [
    "IDEAL FOR",
    "Occasion",
    "Work",
    "Fabric",
    "Segment",
    "Suitable For",
    "Raw Materials",
    "Pattern",
  ];

  const options = ["Men", "Women", "Baby & Kids"];

  const [openFilterIndex, setOpenFilterIndex] = useState(null);

  const toggleFilter = (index) => {
    setOpenFilterIndex(openFilterIndex === index ? null : index);
  };

  return (
    <aside className="w-64 p-4 border-r hidden md:block">
      <h2 className="font-bold text-lg mb-4">Filters</h2>
      {filters.map((filter, idx) => (
        <div key={idx} className="mb-3">
          <button
            onClick={() => toggleFilter(idx)}
            className="w-full text-left text-sm font-medium text-gray-700 mb-1 flex justify-between items-center"
          >
            {filter}
            <span>{openFilterIndex === idx ? "▲" : "▼"}</span>
          </button>
          {openFilterIndex === idx && (
            <select className="w-full border p-2 text-sm">
              <option value="">All</option>
              {options.map((option, i) => (
                <option key={i} value={option.toLowerCase()}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}
    </aside>
  );
}
