import { products } from "@/constants/products";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = (typeof products)[0];

const ProductCard = (props: ProductCardProps) => {
  const { id, name, image, description, price } = props;
  return (
    <div
      key={id}
      className="bg-white dark:bg-gray-950 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <Link href="#" prefetch={false}>
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="rounded-t-lg w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{name}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-primary-500">${price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
