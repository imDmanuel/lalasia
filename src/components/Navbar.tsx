import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import userIcon from "@/assets/images/user-icon.svg";
import cartIcon from "@/assets/images/cart-icon.svg";
import Link from "next/link";
import { NavLink } from "./NavLink";

export const Navbar: React.FC<{}> = function ({}) {
  return (
    <nav className="border-b border-screen-line">
      <div className="container flex justify-between items-center py-5 xl:py-10">
        {/* Logo */}
        <Link href="/">
          <Image
            className="w-25 h-8 xl:w-32 xl:h-10 object-contain"
            src={logo}
            alt="Lalasia Logo"
          />
        </Link>

        <div className="flex flex-1 justify-between max-lg:hidden">
          {/* Links */}
          <ul className="flex flex-1 gap-14 justify-center text-title-600">
            <li>
              <NavLink href="/product">Product</NavLink>
            </li>
            <li>
              <NavLink href="/services">Services</NavLink>
            </li>
            <li>
              <NavLink href="/article">Article</NavLink>
            </li>
            <li>
              <NavLink activeClassName="bg-red-900" href="/about">
                About Us
              </NavLink>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <Image src={cartIcon} alt="cart" />
            <Image src={userIcon} alt="user" />
          </div>
        </div>
      </div>
    </nav>
  );
};
