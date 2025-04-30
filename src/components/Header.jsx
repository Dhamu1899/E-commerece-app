

export default function Header() {
  return (
    <header className="bg-white px-6 py-4 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left logo icon */}
        <div className="flex items-center gap-6">
          <img src="\public\Logo.png" alt="Logo Icon" className="h-8 w-8" />
        </div>

        {/* Center logo text */}
        <div className="text-2xl font-bold tracking-wide">LOGO</div>

        {/* Right-side icons */}
        <div className="flex items-center space-x-4 text-sm">
          <button><img src="https://img.icons8.com/ios/24/search--v1.png" alt="Search" /></button>
          <button><img src="https://img.icons8.com/ios/24/like--v1.png" alt="Wishlist" /></button>
          <button><img src="https://img.icons8.com/ios/24/shopping-bag--v1.png" alt="Cart" /></button>
          <button><img src="https://img.icons8.com/ios/24/user--v1.png" alt="User" /></button>
          <select className="bg-transparent text-sm outline-none">
            <option>ENG</option>
            <option>FR</option>
            <option>DE</option>
          </select>
        </div>
      </div>

    </header>
  );
}
