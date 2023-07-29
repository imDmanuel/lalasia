import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Link from "next/link";

export const Footer: React.FC = function () {
  return (
    <footer className="xl:mt-20 mt-12">
      <div className="container">
        <div className="flex 2xl:flex-row flex-col border-t border-screen-line 2xl:pt-20 2xl:pb-20 pt-5 pb-6">
          {/* Left section */}
          <div>
            {/* Logo */}
            <div className="w-24 h-8 2xl:w-32 2xl:h-10">
              <Image className="object-cover" src={logoImage} alt="Logo" />
            </div>
            {/* Branding Summary */}
            <p className="text-sm 2xl:paragraph-3 max-w-lg mt-9">
              Lalasia is digital agency that help you make better experience
              iaculis cras in.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex space-x-7 2xl:space-x-24  2xl:ml-auto ml-0 2xl:mt-0 mt-7">
            {/* Product column */}
            <div>
              <h4 className="max-xl:text-base">Product</h4>

              <ul className="mt-5 space-y-3 text-sm 2xl:text-lg text-paragraph">
                <li>
                  <Link href="#">New Arrivals</Link>
                </li>
                <li>
                  <Link href="#">Best Selling</Link>
                </li>
                <li>
                  <Link href="#">Home Decor</Link>
                </li>
                <li>
                  <Link href="#">Kitchen Set</Link>
                </li>
              </ul>
            </div>

            {/* Services column */}
            <div>
              <h4 className="max-xl:text-base">Services</h4>
              <ul className="mt-5 space-y-3 text-sm 2xl:text-lg text-paragraph">
                <li>
                  <Link href="#">Catalog</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">FaQ</Link>
                </li>
                <li>
                  <Link href="#">Pricing</Link>
                </li>
              </ul>
            </div>

            {/* Follow Us column */}
            <div>
              <h4 className="max-xl:text-base">Follow Us</h4>
              <ul className="mt-5 space-y-3 text-sm 2xl:text-lg text-paragraph">
                <li>
                  <Link href="#">Facebook</Link>
                </li>
                <li>
                  <Link href="#">Instagram</Link>
                </li>
                <li>
                  <Link href="#">Twitter</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
