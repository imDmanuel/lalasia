import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Link from "next/link";

export const Footer: React.FC = function () {
  return (
    <footer className="xl:mt-20 mt-12">
      <div className="container flex xl:flex-row flex-col border-t border-screen-line xl:pt-20 xl:pb-20 pt-5 pb-6">
        {/* Left section */}
        <div>
          {/* Logo */}
          <Image src={logoImage} alt="Logo" />
          {/* Branding Summary */}
          <p className="text-sm xl:paragraph-3 max-w-lg mt-9">
            Lalasia is digital agency that help you make better experience
            iaculis cras in.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex gap-7 xl:gap-24  xl:ml-auto ml-0 xl:mt-0 mt-7">
          {/* Product column */}
          <div>
            <h4 className="max-xl:text-base">Product</h4>

            <ul className="mt-5 space-y-3 text-sm xl:text-lg text-paragraph-600">
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
            <ul className="mt-5 space-y-3 text-sm xl:text-lg text-paragraph-600">
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
            <ul className="mt-5 space-y-3 text-sm xl:text-lg text-paragraph-600">
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
    </footer>
  );
};
