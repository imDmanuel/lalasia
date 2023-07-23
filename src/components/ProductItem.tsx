import { IProduct } from "@/types";
import Image from "next/image";

export const ProducItem: React.FC<IProduct> = function ({
  image,
  category,
  name,
  description,
  price,
}) {
  return (
    <div>
      {/* Product Image */}
      <div className="w-[394px] h-[360px] relative">
        <Image src={image} alt={name} fill objectFit="cover" />
      </div>

      {/* Product Category */}
      <h5 className="text-paragraph-600">{category}</h5>

      {/* Product Name */}
      <div className="font-bold text-2xl text-title-600">{name}</div>

      {/* Product Description */}
      <p>{description}</p>

      {/* Product Price */}
      <h3>${price}</h3>
    </div>
  );
};
