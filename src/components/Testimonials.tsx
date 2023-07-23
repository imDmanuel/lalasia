import { testimonials } from "@/mock-data";
import { ITestimonial } from "@/types";
import Image from "next/image";
import starIcon from "@/assets/images/star-icon.png";
import quoteIcon from "@/assets/images/quotes-icon.svg";

export const Testimonials: React.FC = function () {
  return (
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
  );
};

const Testimonial: React.FC<ITestimonial> = function ({
  content,
  name,
  rating,
  image,
}) {
  return (
    <div className="p-8 shadow">
      {/* Quote Icon */}
      <Image src={quoteIcon} alt="" />
      {/* Content */}
      <p className="py-6">{content}</p>

      {/* Person details */}
      <div className="flex items-center gap-3">
        {/* Image */}
        <div className="relative overflow-hidden rounded-full aspect-square w-12">
          <Image className="object-cover" src={image} alt="" fill />
        </div>
        {/* Name */}
        <div className="font-bold text-xl text-title-600">{name}</div>
        {/* Rating */}
        <div className="flex items-center ml-auto space-x-2">
          {/* Star Icon */}
          <Image src={starIcon} alt="" />
          <div className="font-bold text-lg text-title-600">{rating}</div>
        </div>
      </div>
    </div>
  );
};
