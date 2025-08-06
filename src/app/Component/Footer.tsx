import Image from "next/image";
import React from "react";
import logo from "../images/Skillnova_Logo_Wordmark.png";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer-content w-[95%] md:w-[90%] mx-auto pt-10">
        <Image
          src={logo}
          alt="Skillnova Logo"
          width={150}
          height={50}
          className="mx-auto mb-4"
        />
        <p className="text-center text-sm text-gray-600 mb-6">
          Skillnova is your gateway to a world of knowledge and skills. Join us
          today and start your learning journey!
        </p>
        <div className="w-full px-4 py-10 bg-gray-50">
          <div className="max-w-xl mx-auto text-center mb-20">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Stay up-to-date with Skillnova
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full sm:w-auto">
                <CiMail className="text-2xl text-gray-500 mr-2" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="outline-none w-full sm:w-64 bg-transparent text-sm"
                />
              </div>
              <Link
                href="#"
                className="bg-[#4A90E2] text-white font-medium px-5 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </Link>
            </div>
          </div>
          <div className="text-center flex flex-col md:flex-row justify-between items-center gap-2">
            <select
              name="language"
              id="language"
              className="border border-gray-300 rounded-md px-1 py-1 text-sm text-gray-600"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Skillnova. All rights reserved.
            </p>
            <div className="">
              <p className="text-sm text-gray-600">
                Follow us on social media:
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  <FiFacebook className="text-xl" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  <FaInstagram className="text-xl" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  <FiLinkedin className="text-xl" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  <RiTiktokLine className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
