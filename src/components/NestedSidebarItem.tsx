"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

type NestedSidebarItemProps = {
  label: string;
  href: string;
  icon?: ReactElement;
};

export default function NestedSidebarItem({
  label,
  href,
  icon,
}: NestedSidebarItemProps) {
  const pathname = usePathname();
  return (
    <li
      className={`flex items-center py-1 px-4 hover:shadow-xs hover:[box-shadow:0px_4px_73.8px_0px_#3A75BA26] hover:text-[#316DB4] hover:bg-white transition-all border-l-[3px]  hover:border-[#316DB4] ${
        pathname === href
          ? "[box-shadow:0px_4px_73.8px_0px_#3A75BA26] bg-white text-[#316DB4] border-l-[3px] border-[#316DB4]"
          : "border-transparent"
      } `}
    >
      <Link className={`flex items-center`} href={href}>
        {icon && <div className="mr-1.5">{icon}</div>}
        <p>{label}</p>
      </Link>
    </li>
  );
}
