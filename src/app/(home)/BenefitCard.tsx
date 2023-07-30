import Image from "next/image";

export const BenefitCard: React.FC<{
  icon: React.ComponentProps<typeof Image>["src"];
  title: string;
  children: string;
}> = function ({ icon, title, children }) {
  return (
    <div className="shadow-lg p-4 2xl:p-6">
      {/* Card Icon */}
      <div className="bg-placeholder p-2 2xl:p-4 rounded-full max-w-fit">
        <Image className="w-6 aspect-square 2xl:w-8" src={icon} alt="" />
      </div>
      {/* Card title */}
      <h3 className="mt-3 mb-2 2xl:mt-6 2xl:mb-5 max-2xl:header-6">{title}</h3>
      {/* Card content */}
      <p className="paragraph-1 2xl:paragraph-3">{children}</p>
    </div>
  );
};
