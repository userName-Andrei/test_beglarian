"use client";

import { joinClasses } from "@/utils/joinClasses";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavLinkProps extends LinkProps {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  className: string;
  activeClass: string;
}

const NavLink = ({
  href,
  exact,
  children,
  className,
  activeClass,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const classNames = joinClasses(className, isActive ? activeClass : undefined);

  return (
    <Link href={href} className={classNames} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
