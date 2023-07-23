import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import userIcon from "@/assets/images/user-icon.svg";
import cartIcon from "@/assets/images/cart-icon.svg";
import Link from "next/link";

export const Navbar: React.FC<{}> = function ({}) {
  return (
    <nav className="border-b border-screen-line">
      <div className="container flex justify-between items-center py-10">
        {/* Logo */}
        <Image src={logo} alt="Lalasia Logo" />

        {/* Links */}
        <ul className="flex flex-1 gap-14 justify-center text-title-600">
          <li>
            <Link href="#">Product</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Article</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Image src={cartIcon} alt="cart" />
          <Image src={userIcon} alt="user" />
        </div>
      </div>
    </nav>
  );
};
