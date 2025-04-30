// components/Sidebar.jsx
export default function Sidebar() {
    return (
      <aside className="w-full md:w-64 bg-white rounded-xl shadow p-4 space-y-6 sticky top-4 h-fit">
        {/* Search */}
        <div>
          <h2 className="text-sm font-semibold mb-2">Search</h2>
          <input
            type="text"
            placeholder="Search by keyword"
            className="w-full border border-gray-300 rounded p-2 text-sm"
          />
        </div>
  
        {/* Category */}
        <div>
          <h2 className="text-sm font-semibold mb-2">Category</h2>
          {['Home Living', 'Electronics', 'Watches', 'Bags', 'Accessories', 'Others'].map((category) => (
            <div key={category} className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="accent-pink-500" />
              <label>{category}</label>
            </div>
          ))}
        </div>
  
        {/* Brands */}
        <div>
          <h2 className="text-sm font-semibold mb-2">Brands</h2>
          {['Tenda', 'Sony', 'Samsung', 'Gionee', 'Apple', 'Others'].map((brand) => (
            <div key={brand} className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="accent-pink-500" />
              <label>{brand}</label>
            </div>
          ))}
        </div>
  
        {/* Price Rating */}
        <div>
          <h2 className="text-sm font-semibold mb-2">Price Rating</h2>
          <input type="range" min="0" max="500" className="w-full accent-pink-500" />
          <p className="text-xs text-gray-500 mt-1">$0 - $500</p>
        </div>
  
        {/* Sales */}
        <div>
          <h2 className="text-sm font-semibold mb-2">Sales</h2>
          {['On Sale', 'In Stock', 'Out of Stock', 'Bestsell'].map((sale) => (
            <div key={sale} className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="accent-pink-500" />
              <label>{sale}</label>
            </div>
          ))}
        </div>
  
        {/* Ratings */}
        <div>
          <h2 className="text-sm font-semibold mb-2">Ratings</h2>
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center space-x-1 text-sm">
              <input type="radio" name="rating" className="accent-pink-500" />
              <span>{'★'.repeat(star)}{'☆'.repeat(5 - star)}</span>
            </div>
          ))}
        </div>
  
        {/* Colors */}
        <div>
          <h2 className="text-sm font-semibold mb-2">Colors</h2>
          <div className="flex space-x-2">
            {["bg-red-500", "bg-yellow-400", "bg-green-500", "bg-blue-500", "bg-orange-500"].map((color, i) => (
              <div
                key={i}
                className={`${color} w-5 h-5 rounded-full cursor-pointer border border-gray-200`}
              ></div>
            ))}
          </div>
        </div>
  
        {/* Sizes */}
        <div>
          <h2 className="text-sm font-semibold mb-2">Sizes</h2>
          {['S', 'M', 'L', 'XL'].map((size) => (
            <div key={size} className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="accent-pink-500" />
              <label>{size}</label>
            </div>
          ))}
        </div>
      </aside>
    );
  }
  