"use client";

import Image from "next/image";
import React, { useState } from "react";
import SkillnovaWordmark from "../images/Skillnova_Logo_Wordmark.png";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="bg-white shadow-md px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src={SkillnovaWordmark}
              width={100}
              height={50}
              alt="My logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-4 font-semibold">
              <Link
                className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
                href="/"
              >
                Home
              </Link>
              <Link
                className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
                href="/Courses"
              >
                Membership
              </Link>
              <Link
                className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
                href="/Courses"
              >
                Courses
              </Link>
              <Link
                className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
                href="/Courses"
              >
                About Us
              </Link>
              <Link
                className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
                href="/Courses"
              >
                Dashboard
              </Link>
              <Link
                className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
                href="/Courses"
              >
                Contact Us
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex items-center">
              <CiSearch className="relative left-5" />
              <input
                type="search"
                placeholder="search courses"
                className="border border-gray-300 rounded-md pl-5 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2 font-semibold">
            <Link
              href="#"
              className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
            >
              Sign Up
            </Link>
            <Link
              href="#"
              className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
            >
              Log In
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 font-semibold">
            <Link
              className="block px-4 py-2 hover:bg-[#4A90E2] hover:text-white rounded-md transition"
              href="/"
            >
              Home
            </Link>
            <Link
              className="block px-4 py-2 hover:bg-[#4A90E2] hover:text-white rounded-md transition"
              href="/Courses"
            >
              Membership
            </Link>
            <Link
              className="block px-4 py-2 hover:bg-[#4A90E2] hover:text-white rounded-md transition"
              href="/Courses"
            >
              Courses
            </Link>
            <Link
              className="block px-4 py-2 hover:bg-[#4A90E2] hover:text-white rounded-md transition"
              href="/Courses"
            >
              About Us
            </Link>
            <Link
              className="block px-4 py-2 hover:bg-[#4A90E2] hover:text-white rounded-md transition"
              href="/Courses"
            >
              Dashboard
            </Link>
            <Link
              className="block px-4 py-2 hover:bg-[#4A90E2] hover:text-white rounded-md transition"
              href="/Courses"
            >
              Contact Us
            </Link>

            {/* Search Bar */}
            <div className="px-4 py-2">
              <div className="flex items-center">
                <CiSearch className="relative left-5" />
                <input
                  type="search"
                  placeholder="search courses"
                  className="border border-gray-300 rounded-md pl-5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="px-4 py-2 flex flex-col gap-2">
              <Link
                href="#"
                className="block text-center hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
              >
                Sign Up
              </Link>
              <Link
                href="#"
                className="block text-center hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
              >
                Log In
              </Link>
            </div>
          </div>
        )}
      </nav>
      {/* The nav bar ends here */}
    </header>
  );
};

export default Header;
