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
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={394}
          height={360}
          className="w-[220px] h-[194px] xl:w-[394px] xl:h-[360px] object-cover"
        />
      </div>

      {/* Product Category */}
      <h5 className="text-paragraph mt-3 mb-2 xl:mt-8 xl:mb-3 max-xl:text-xs">
        {category}
      </h5>

      {/* Product Name */}
      <div className="font-bold text-base text-title xl:text-2xl">{name}</div>

      {/* Product Description */}
      <p className="mt-1 mb-3 max-xl:text-sm xl:mt-2 xl:mb-4">{description}</p>

      {/* Product Price */}
      <h3 className="max-xl:text-base">${price}</h3>
    </div>
  );
};
