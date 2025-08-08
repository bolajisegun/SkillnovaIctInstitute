"use client";

import Image from "next/image";
import React, { useState } from "react";
import SkillnovaWordmark from "../images/Skillnova_Logo_Wordmark.png";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Closes menu when any link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="relative">
      <nav className="bg-white shadow-md px-4 py-2 fixed w-full top-0 left-0 z-50">
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
                onClick={handleLinkClick}
                className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
                href="/"
              >
                Home
              </Link>
              <Link
                onClick={handleLinkClick}
                className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
                href="/Courses"
              >
                Membership
              </Link>
              <Link
                onClick={handleLinkClick}
                className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
                href="/Courses"
              >
                Courses
              </Link>
              <Link
                onClick={handleLinkClick}
                className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
                href="/Courses"
              >
                About Us
              </Link>
              <Link
                onClick={handleLinkClick}
                className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
                href="/StudentDashboard"
              >
                Dashboard
              </Link>
              <Link
                onClick={handleLinkClick}
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

        {/* Mobile Overlay Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-40 p-4 pt-16 md:hidden flex flex-col gap-4 font-semibold">
            <Link
              onClick={handleLinkClick}
              className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
              href="/"
            >
              Home
            </Link>
            <Link
              onClick={handleLinkClick}
              className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
              href="/Courses"
            >
              Membership
            </Link>
            <Link
              onClick={handleLinkClick}
              className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
              href="/Courses"
            >
              Courses
            </Link>
            <Link
              onClick={handleLinkClick}
              className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
              href="/Courses"
            >
              About Us
            </Link>
            <Link
              onClick={handleLinkClick}
              className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
              href="/StudentDashboard"
            >
              Dashboard
            </Link>
            <Link
              onClick={handleLinkClick}
              className="hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
              href="/Courses"
            >
              Contact Us
            </Link>

            {/* Search Bar */}
            <div>
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
            <Link
              onClick={handleLinkClick}
              href="#"
              className="text-center hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
            >
              Sign Up
            </Link>
            <Link
              onClick={handleLinkClick}
              href="#"
              className="text-center hover:bg-[#4A90E2] hover:text-white rounded-md px-4 py-2 transition"
            >
              Log In
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
