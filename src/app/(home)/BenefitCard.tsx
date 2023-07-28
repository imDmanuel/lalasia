import Image from "next/image";

export const BenefitCard: React.FC<{
  icon: React.ComponentProps<typeof Image>["src"];
  title: string;
  children: string;
}> = function ({ icon, title, children }) {
  return (
    <div className="shadow-lg p-4 xl:p-6">
      {/* Card Icon */}
      <div className="bg-placeholder p-2 xl:p-4 rounded-full max-w-fit">
        <Image className="w-6 aspect-square xl:w-8" src={icon} alt="" />
      </div>
      {/* Card title */}
      <h3 className="mt-3 mb-2 xl:mt-6 xl:mb-5 max-xl:header-6">{title}</h3>
      {/* Card content */}
      <p className="paragraph-1 xl:paragraph-3">{children}</p>
    </div>
  );
};
