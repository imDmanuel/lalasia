"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink: React.FC<
  React.ComponentProps<typeof Link> & { activeClassName?: string }
> = function ({ activeClassName, ...props }) {
  const pathname = usePathname();
  const active = props.href === pathname;
  return (
    <Link
      {...props}
      className={`${props.className} ${
        active && activeClassName ? activeClassName : ""
      }`}
    ></Link>
  );
};
