import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Link from "next/link";

export const Footer: React.FC = function () {
  return (
    <footer className="mt-20 mb-24">
      <div className="container flex">
        {/* Left section */}
        <div>
          {/* Logo */}
          <Image src={logoImage} alt="Logo" />
          {/* Branding Summary */}
          <p className="paragraph-3 max-w-lg mt-9">
            Lalasia is digital agency that help you make better experience
            iaculis cras in.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex gap-24 ml-auto">
          {/* Product column */}
          <div>
            <h4>Product</h4>

            <ul className="mt-5 space-y-3">
              <li className="paragraph-3 text-title-600">
                <Link href="#">New Arrivals</Link>
              </li>
              <li className="paragraph-3 text-title-600">
                <Link href="#">Best Selling</Link>
              </li>
              <li className="paragraph-3 text-title-600">
                <Link href="#">Home Decor</Link>
              </li>
              <li className="paragraph-3 text-title-600">
                <Link href="#">Kitchen Set</Link>
              </li>
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h4>Services</h4>
            <ul className="mt-5 space-y-3">
              <li className="paragraph-3 text-title-600">
                <Link href="#">Catalog</Link>
              </li>
              <li className="paragraph-3 text-title-600">
                <Link href="#">Blog</Link>
              </li>
              <li className="paragraph-3 text-title-600">
                <Link href="#">FaQ</Link>
              </li>
              <li className="paragraph-3 text-title-600">
                <Link href="#">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us column */}
          <div>
            <h4>Follow Us</h4>
            <ul className="mt-5 space-y-3">
              <li className="paragraph-3 text-title-600">
                <Link href="#">Facebook</Link>
              </li>
              <li className="paragraph-3 text-title-600">
                <Link href="#">Instagram</Link>
              </li>
              <li className="paragraph-3 text-title-600">
                <Link href="#">Twitter</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
