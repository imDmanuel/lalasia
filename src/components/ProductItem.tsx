import { IProduct } from "@/types";
import Image from "next/image";
import React from "react";

const ProducItem = React.forwardRef<HTMLImageElement, IProduct>(
  ({ image, category, name, description, price }, ref) => {
    return (
      <div>
        {/* Product Image */}
        <div className="overflow-hidden">
          <Image
            ref={ref}
            src={image}
            alt={name}
            width={394}
            height={360}
            className="w-[220px] h-[194px] 2xl:w-[394px] 2xl:h-[360px] object-cover"
          />
        </div>

        {/* Product Category */}
        <h5 className="text-paragraph mt-3 mb-2 2xl:mt-8 2xl:mb-3 max-2xl:text-xs">
          {category}
        </h5>

        {/* Product Name */}
        <div className="font-bold text-base text-title 2xl:text-2xl">
          {name}
        </div>

        {/* Product Description */}
        <p className="mt-1 mb-3 max-2xl:text-sm 2xl:mt-2 2xl:mb-4 line-clamp-1">
          {description}
        </p>

        {/* Product Price */}
        <h3 className="max-2xl:text-base">${price}</h3>
      </div>
    );
  }
);

ProducItem.displayName = "ProductItem";

export { ProducItem };
