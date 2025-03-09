"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import AuthModal from "./AuthModal";

function Header() {
  const router = useRouter();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // 1. On initial render, check if a user is stored in localStorage.
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Header: Checking localStorage on mount:", storedUser);
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  // 2. Called when the modal closes (AuthModal's onOpenChange).
  //    We re-check localStorage in case the user just logged in.
  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    const storedUser = localStorage.getItem("user");
    console.log("Header: Checking localStorage after modal closed:", storedUser);
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    } else {
      setCurrentUser(null);
    }
  };

  // 3. Handle logout by removing user from localStorage, updating state, and redirecting.
  const handleLogout = () => {
    console.log("Header: Logging out...");
    localStorage.removeItem("user");
    setCurrentUser(null);
    router.push("/");
  };

  // Conditionally define menu links.
  // For non-logged in users, we include Home, Doctors, and Contact Us.
  // For logged in users, we add a Dashboard link and remove the Explore link.
  const menuItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Doctors", path: "/doctors" },
    ...(currentUser ? [{ id: 3, name: "Dashboard", path: "/dashboard" }] : []),
    { id: 4, name: "Contact Us", path: "/contact-us" },
  ];

  // Open the Auth Modal
  const openAuthModal = () => {
    console.log("Header: Opening AuthModal...");
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 shadow-sm">
        {/* Left side: Logo + Menu */}
        <div className="flex items-center gap-10">
          <Image
            src="/logo.svg"
            alt="logo"
            width={70}
            height={40}
            className="py-3 px-2"
          />
          <ul className="md:flex gap-10 hidden">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="hover:text-primary cursor-pointer hover:scale-110 transition-all ease-in-out"
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: Conditional button */}
        {currentUser ? (
          <Button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:opacity-90"
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={openAuthModal}
            className="bg-gradient-to-r from-[#5636e5] to-[#5636e5] text-white px-4 py-2 rounded-lg hover:opacity-90"
          >
            Login/Signup
          </Button>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onOpenChange={closeAuthModal} />
    </>
  );
}

export default Header;
