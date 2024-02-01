"use client";

import { useState } from "react";
import MenuNav from "./MenuNav";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
  const [bukaMenu, mengaturMenuTerbuka] = useState(false);

  const klikMenuIcon = () => {
    mengaturMenuTerbuka(!bukaMenu);
  };

  const pilihMenu = () => {
    mengaturMenuTerbuka(false);
  };

  const sidebarClasses = `fixed flex flex-col top-0 left-0 h-full w-64 md:w-72 bg-gray-100 px-4 transform transition-transform duration-300 ease-in-out z-50${
    bukaMenu ? " translate-x-0" : " -translate-x-full"
  }`;

  return (
    <nav className="bg-gray-300 p-4 sticky top-0 left-0 right-0 z-10">
      <div className="container lg:px-16 mx-auto flex justify-between items-center">
        <div className="font-bold">
          <Link href="/">Logo</Link>
        </div>

        <div className="hidden md:block">
          <MenuNav pilihMenu={pilihMenu} />
        </div>

        <div className="block md:hidden">
          <button onClick={klikMenuIcon}>
            {bukaMenu ? <IconX /> : <IconMenu2 />}
          </button>
        </div>

        {bukaMenu && (
          <div
            className="fixed inset-0 bg-black opacity-10 z-40"
            onClick={klikMenuIcon}
          />
        )}

        <div className={sidebarClasses}>
          <div className="min-h-screen flex flex-col items-center justify-center">
            <MenuNav pilihMenu={pilihMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
