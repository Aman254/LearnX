import React from "react";
import NavLinks from "./navbar/NavLinks";

const LeftSideBar = () => {
  return (
    <section className="custom-scrollbar bg-white border-gray-[#8C8c8c] sticky left-0 top-0 h-screen flex-col justify-between overflow-y-auto border-r p-2  max-sm:hidden lg:w-[266px] shadow-lg">
      <div className="flex flex-1 flex-col">
        <NavLinks />
      </div>
    </section>
  );
};

export default LeftSideBar;
