"use client";
import ProductCard from "@/components/product-card";
import { Input } from "@/components/ui/input";
import { products } from "@/constants/products";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type ProductType = (typeof products)[number];

export default function Home() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    if (!filter) {
      setSelectedProducts(products);
    } else {
      setSelectedProducts(
        products.filter((product) => product.category === filter),
      );
    }
  }, [filter]);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white dark:bg-gray-950 py-2 pl-12 pr-6 shadow-sm border-b">
        <nav className="flex flex-row items-center justify-between w-full">
          <Link
            href="/"
            className="font-bold text-lg flex items-center gap-2 flex-col"
            prefetch={false}
          >
            <Image
              src="/logo.svg"
              alt="Genai Hackathon"
              width={150}
              height={150}
              className="h-8 w-auto"
            />
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
        </nav>
      </header>
      <div className="flex flex-1">
        <aside className="bg-black border-r border-gray-800 p-6 w-52 hidden md:block">
          <h3 className="text-lg font-bold mb-4 text-white">
            Filter by Category
          </h3>
          <div className="space-y-2">
            <Link
              href="/?filter=Mens"
              className="block text-gray-400 hover:text-gray-50 hover:underline"
              prefetch={false}
            >
              Men&apos;s Clothing
            </Link>
            <Link
              href="/?filter=Womens"
              className="block text-gray-400 hover:text-gray-50 hover:underline"
              prefetch={false}
            >
              Women&apos;s Clothing
            </Link>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {selectedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
