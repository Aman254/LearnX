"use client";
import { sidebarLinks } from "@/constants";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        const LinkComponent = (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              isActive ? "bg-gray-200 rounded-lg" : "bg-transparent",
              "flex items-center justify-start gap-4  p-4 hover:bg-gray-100 text-gray-500 text-sm"
            )}
          >
            <Image
              src={item.imgURL}
              alt={item.route}
              width={20}
              height={20}
              className=""
            />
            <p
              className={cn(
                isActive ? "text-black" : "",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {item.label}
            </p>
          </Link>
        );
        return isMobileNav ? (
          <SheetClose></SheetClose>
        ) : (
          <React.Fragment key={item.route}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
