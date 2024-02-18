import Image from "next/image";
import searchIcon from "@/assets/images/search-icon.svg";

export const SearchProperty: React.FC<{ buttonText: string }> = function ({
  buttonText,
}) {
  return (
    <div className="flex w-full justify-center gap-2 bg-white py-4 pl-4 pr-4 shadow max-2xl:mb-7 2xl:gap-4 2xl:pl-6">
      <Image className="aspect-square w-5 2xl:w-7" src={searchIcon} alt="" />
      <input
        type="text"
        placeholder="Search property"
        className="paragraph-3 flex-1 outline-none max-2xl:text-sm"
      />
      <button className="btn btn-primary">{buttonText}</button>
    </div>
  );
};
