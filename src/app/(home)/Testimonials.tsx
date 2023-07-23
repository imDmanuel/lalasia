import { testimonials } from "@/mock-data";
import { ITestimonial } from "@/types";
import Image from "next/image";
import starIcon from "@/assets/images/star-icon.png";
import quoteIcon from "@/assets/images/quotes-icon.svg";

export const Testimonials: React.FC = function () {
  return (
    // TESTIMONIAL SLIDER CONTAINER
    <div className="overflow-hidden">
      {/* TESTIMONIAL SLIDER */}
      <div className="flex space-x-8">
        {testimonials.map(({ name, content, rating, image }) => (
          <Testimonial
            key={`${name}-${rating}`}
            name={name}
            content={content}
            rating={rating}
            image={image}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonial: React.FC<ITestimonial> = function ({
  content,
  name,
  rating,
  image,
}) {
  return (
    <div className="xl:p-8 p-4 shadow shrink-0 w-full sm:max-w-xs lg:shrink-1">
      {/* Quote Icon */}
      <Image className="xl:w-10 aspect-square w-8" src={quoteIcon} alt="" />
      {/* Content */}
      <p className="xl:py-6 py-3 max-xl:paragraph-1">{content}</p>

      {/* Person details */}
      <div className="flex items-center gap-3">
        {/* Image */}
        <div className="relative overflow-hidden rounded-full aspect-square xl:w-12 w-7">
          <Image className="object-cover" src={image} alt="" fill />
        </div>
        {/* Name */}
        <div className="font-bold xl:text-xl text-title-600 text-sm min-w-fit">
          {name}
        </div>
        {/* Rating */}
        <div className="flex items-center ml-auto space-x-2 sm:pl-7">
          {/* Star Icon */}
          <Image className="w-6 aspect-square" src={starIcon} alt="" />
          <div className="font-bold xl:text-lg text-title-600 text-sm">
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};
