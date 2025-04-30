import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold uppercase mb-10 text-center">About Us</h1>

          <div className="prose prose-lg mx-auto text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia,
              nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia,
              nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
            </p>

            <p>
              Our brand was founded in 2010 with a simple mission: to create high-quality products that combine
              functionality with beautiful design. Since then, we've grown into a global brand with customers in over 50
              countries.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Our Mission</h2>
            <p>
              We believe that well-designed products can make everyday life better. Our team of designers and
              craftspeople work together to create products that are both beautiful and functional, using sustainable
              materials and ethical manufacturing processes.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Quality craftsmanship</li>
              <li>Sustainable materials</li>
              <li>Ethical manufacturing</li>
              <li>Timeless design</li>
              <li>Customer satisfaction</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
