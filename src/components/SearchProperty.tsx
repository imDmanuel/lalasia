import Image from "next/image";
import searchIcon from "@/assets/images/search-icon.svg";

export const SearchProperty: React.FC<{ buttonText: string }> = function ({
  buttonText,
}) {
  return (
    <div className="bg-white py-4 pr-4 pl-4 xl:pl-6 gap-2 xl:gap-4 flex w-full justify-center shadow max-xl:mb-7">
      <Image className="w-8 aspect-square max-xl:w-6" src={searchIcon} alt="" />
      <input
        type="text"
        placeholder="Search property"
        className="flex-1 outline-none paragraph-3 max-xl:text-sm"
      />
      <button className="btn btn-primary">{buttonText}</button>
    </div>
  );
};
