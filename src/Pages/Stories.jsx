import React from "react";

const stories = [
  {
    id: 1,
    title: "How Our First Product Was Born",
    summary:
      "A look back at how our founder sketched the first prototype on a napkin in a café, and turned an idea into a movement.",
    image: "https://source.unsplash.com/800x500/?startup,product",
    author: "By Alex Turner",
    date: "March 2024",
  },
  {
    id: 2,
    title: "Meet the Makers Behind the Brand",
    summary:
      "An inside look at our studio where craftsmanship and creativity meet every single day.",
    image: "https://source.unsplash.com/800x500/?team,craft",
    author: "By Emma Liu",
    date: "April 2024",
  },
  {
    id: 3,
    title: "Shipping to 50+ Countries: Our Global Journey",
    summary:
      "How we scaled our small business to reach customers in over 50 countries — and what we learned along the way.",
    image: "https://source.unsplash.com/800x500/?globe,shipping",
    author: "By Daniel Kim",
    date: "May 2024",
  },
];

export default function Stories() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold uppercase mb-12 text-center">Our Stories</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <div key={story.id} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
              <img src={story.image} alt={story.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{story.summary}</p>
                <div className="text-xs text-gray-500">{story.author} — {story.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
