export default function ProductCard({ product }) {
    return (
      <div className="border rounded-md overflow-hidden shadow-sm">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain bg-white"
        />
        <div className="p-2">
          <h3 className="font-semibold text-sm mb-1">{product.title}</h3>
          <p className="text-xs text-gray-500">${product.price}</p>
        </div>
      </div>
    );
  }