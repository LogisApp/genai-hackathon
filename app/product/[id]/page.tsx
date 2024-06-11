"use client";

import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/constants/products";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { ShoppingBasketIcon } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

type Product = (typeof products)[0] | undefined;

const ProductPage = () => {
  const { id } = useParams();
  const product: Product = products.find((product) => product.id === id);
  const relatedProducts = products.filter(
    (prod) => prod.category === product?.category,
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const { name, description, price, image, category } = product;

  return (
    <div className="flex flex-col">
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className=" grid md:grid-cols-2 gap-8 items-center px-24">
          <div>
            <Image
              alt="Product Image"
              className="w-[75%] rounded-lg overflow-hidden object-cover"
              height={400}
              src={image}
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width={300}
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {name} | {category}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                {description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">${price}</h2>
              <div className=" items-center gap-2 hidden">
                <Label className="text-base" htmlFor="size">
                  Size
                </Label>
                <Select defaultValue="m">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="s">Small</SelectItem>
                    <SelectItem value="m">Medium</SelectItem>
                    <SelectItem value="l">Large</SelectItem>
                    <SelectItem value="xl">X-Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center justify-end gap-4">
              <Button className="w-32" variant="outline">
                <ShoppingBasketIcon className="w-5 h-5 -mt-1 mr-1" />
                Add to Cart
              </Button>
              <Button className="w-32">
                Try on
                <ArrowTopRightIcon className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-8 px-24">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductPage;
