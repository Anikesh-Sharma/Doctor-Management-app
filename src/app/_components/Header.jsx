"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AuthModal from "./AuthModal"; // Import from the same directory

function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Doctors",
      path: "./doctors",
    },
    {
      id: 3,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 4,
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 shadow-sm">
        <div className="flex items-center gap-10">
          <Image
            src="/logo.svg"
            alt="logo"
            width={70}
            height={40}
            className="py-3 px-2"
          />
          <ul className="md:flex gap-10 hidden">
            {Menu.map((item) => (
              <li
                key={item.id}
                className="hover:text-primary cursor-pointer hover:scale-110 transition-all ease-in-out"
              >
                <Link href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Button 
          onClick={openAuthModal}
          className="bg-gradient-to-r from-[#5636e5] to-[#5636e5] text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          Login/Signup
        </Button>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </>
  );
}

export default Header;