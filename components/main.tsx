import { Input } from "@/components/ui/input";
import Link from "next/link";

export function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-100 dark:bg-gray-950 py-4 px-6 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="font-bold text-lg" prefetch={false}>
            Clothing Co.
          </Link>
          <form className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full bg-white dark:bg-gray-900 pl-10 pr-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-700 dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </form>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="bg-gray-100 dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 p-6 w-64 hidden md:block">
          <h3 className="text-lg font-bold mb-4">Filter by Category</h3>
          <div className="space-y-2">
            <Link
              href="#"
              className="block text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:underline"
              prefetch={false}
            >
              Men&apos;s Clothing
            </Link>
            <Link
              href="#"
              className="block text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:underline"
              prefetch={false}
            >
              Women&apos;s Clothing
            </Link>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-950 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href="#" prefetch={false}>
                  <img
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="rounded-t-lg w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary-500">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

const products = [
  {
    id: 1,
    name: "Classic White Tee",
    description: "A timeless essential for any wardrobe",
    price: 19.99,
    image: "https://picsum.photos/id/10/200",
    category: "Mens",
  },
  {
    id: 2,
    name: "Floral Sundress",
    description: "Lightweight and breezy for summer days",
    price: 39.99,
    image: "https://picsum.photos/id/11/200",
    category: "Womens",
  },
  {
    id: 3,
    name: "Slim Fit Chinos",
    description: "Versatile and comfortable chino pants",
    price: 29.99,
    image: "https://picsum.photos/id/20/200",
    category: "Mens",
  },
  {
    id: 4,
    name: "Lace Blouse",
    description: "Elegant and feminine blouse with lace details",
    price: 24.99,
    image: "https://picsum.photos/id/13/200",
    category: "Womens",
  },
  {
    id: 5,
    name: "Denim Jacket",
    description: "Classic denim jacket for any occasion",
    price: 49.99,
    image: "https://picsum.photos/id/40/200",
    category: "Mens",
  },
  {
    id: 6,
    name: "Maxi Skirt",
    description: "Flowing and comfortable maxi skirt",
    price: 34.99,
    image: "https://picsum.photos/id/51/200",
    category: "Womens",
  },
  {
    id: 7,
    name: "Striped Polo",
    description: "Classic polo shirt with a modern twist",
    price: 24.99,
    image: "https://picsum.photos/id/17/200",
    category: "Mens",
  },
  {
    id: 8,
    name: "Pleated Midi Dress",
    description: "Elegant and sophisticated midi dress",
    price: 59.99,
    image: "https://picsum.photos/id/63/200",
    category: "Womens",
  },
];
