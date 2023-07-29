import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import userIcon from "@/assets/images/user-icon.svg";
import cartIcon from "@/assets/images/cart-icon.svg";
import Link from "next/link";
import { NavLink } from "./NavLink";

export const Navbar: React.FC<{}> = function ({}) {
  return (
    <nav className="border-b border-screen-line">
      <div className="container flex justify-between items-center py-5 2xl:py-10">
        {/* Logo */}
        <Link href="/">
          <Image
            className="w-25 h-8 2xl:w-32 2xl:h-10 object-contain"
            src={logo}
            alt="Lalasia Logo"
          />
        </Link>

        <div className="flex flex-1 justify-between max-lg:hidden">
          {/* Links */}
          <ul className="flex flex-1 gap-14 justify-center text-title">
            <li>
              <NavLink href="/product">Product</NavLink>
            </li>
            <li>
              <NavLink href="/services">Services</NavLink>
            </li>
            <li>
              <NavLink href="/articles">Article</NavLink>
            </li>
            <li>
              <NavLink href="/about">About Us</NavLink>
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
