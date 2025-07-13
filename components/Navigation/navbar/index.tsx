import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogIn, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/icons/learnX-logo.png"
            alt="Logo"
            width={120}
            height={20}
            className="hidden md:block"
          />
        </Link>

        {/* <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search for a course"
            className="pl-10 w-80 border-gray-200 focus:border-gray-400"
          />
        </div> */}
        <p>Global Search</p>
        <Button
          variant="ghost"
          // onClick={() => setShowAuthModal(true)}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer"
        >
          <LogIn className="w-4 h-4" />
          Login
        </Button>
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
