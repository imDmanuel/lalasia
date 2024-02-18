"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import userIcon from "@/assets/images/user-icon.svg";
import cartIcon from "@/assets/images/cart-icon.svg";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export const Navbar: React.FC<{}> = function ({}) {
  const location = usePathname();
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleNavbar = () => {
    setNavbarOpen((prevState) => {
      if (prevState === true) {
        // If the navbar is already open, enable bodyscroll because this will toggle it i.e close it
        enableBodyScroll(mobileMenuRef.current!);
      } else {
        disableBodyScroll(mobileMenuRef.current!, {
          reserveScrollBarGap: true,
        });
      }
      return !prevState;
    });
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-screen-line  bg-white">
        <div className="container flex items-center justify-between">
          {/* Moble Nav MenuIcon */}
          <div className="relative h-6 w-7">
            <label
              className="absolute left-0 cursor-pointer lg:hidden"
              onClick={toggleNavbar}
            >
              <input type="checkbox" className="invisible h-0 w-0" />
              <button>
                {/* MenuBars */}
                <div className="absolute block h-[3px] w-7 bg-title before:absolute before:block before:h-[3px] before:w-7 before:-translate-y-[6px] before:bg-title after:absolute after:top-0 after:block after:h-[3px] after:w-7 after:-translate-y-[12px] after:bg-title"></div>
              </button>
            </label>
          </div>

          {/* Logo */}
          <Link href="/">
            <Image
              className="w-25 h-8 object-contain 2xl:h-10 2xl:w-32"
              src={logo}
              alt="Lalasia Logo"
            />
          </Link>

          <div className="flex flex-1 justify-between max-lg:hidden">
            {/* Links */}
            <ul className="flex flex-1 justify-center gap-14 text-title">
              {navLinks.map((link) => {
                return (
                  <li
                    className={`relative cursor-pointer ${
                      location === link.to
                        ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-full after:bg-primary"
                        : "text-title"
                    }`}
                    key={link.to}
                  >
                    <NavLink
                      href={link.to}
                      className="inline-block px-2 py-5 2xl:py-7"
                    >
                      {link.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 justify-self-end py-3">
            <Image src={cartIcon} className="w-6" alt="cart" />
            <Image src={userIcon} className="w-6" alt="user" />
          </div>
        </div>
      </nav>

      {/* Mobile Navbar backdrop */}
      <div
        ref={mobileMenuRef}
        className={`z-[99999] mt-[750.4px] bg-white 2xl:hidden ${
          navbarOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-1 justify-between">
          {/* Links */}
          <ul className="flex flex-1 justify-center gap-14 text-title">
            {navLinks.map((link) => {
              return (
                <li
                  className={`relative cursor-pointer ${
                    location === link.to
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-full after:bg-primary"
                      : "text-title"
                  }`}
                  key={link.to}
                >
                  <NavLink
                    href={link.to}
                    className="inline-block px-2 py-5 2xl:py-7"
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Product", to: "/products" },
  { name: "Services", to: "/services" },
  { name: "Articles", to: "/articles" },
  { name: "About Us", to: "/about" },
];
