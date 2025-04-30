import { useState } from "react";

export default function FilterHeader({ selectedSort, onSortChange }) {
  const [sortOpen, setSortOpen] = useState(false);

  const sortOptions = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  return (
    <div className="flex justify-between items-center px-4 md:px-6 py-4 border-b text-sm">
      <div className="flex items-center gap-4">
        <span className="font-medium">3425 ITEMS</span>
        <button className="text-gray-500 underline hover:text-black text-xs">
          &#x2039; HIDE FILTER
        </button>
      </div>

      <div className="relative">
        <button
          className="flex items-center gap-2 font-semibold"
          onClick={() => setSortOpen(!sortOpen)}
        >
          {selectedSort}
          <span className="text-lg">&#9662;</span>
        </button>

        {sortOpen && (
          <ul className="absolute right-0 mt-2 bg-white border shadow-md text-left w-60 z-10 rounded-sm">
            {sortOptions.map((option) => (
              <li
                key={option}
                onClick={() => {
                  onSortChange(option);
                  setSortOpen(false);
                }}
                className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${
                  selectedSort === option ? "font-bold text-black" : "text-gray-700"
                }`}
              >
                {selectedSort === option ? "✔ " : ""}{option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
