"use client"; // If you're using Next.js App Router

import { useEffect, useState } from "react";
import Link from "next/link";

const messages = [
  "Learn. Grow. Succeed - The Skillnova Way",
  "Unlock Your Potential With Skillnova",
  "Your Gateway to Digital, Academic & Business Excellence",
  "Master IT, Business & School Subjects Here.",
];

export default function TypingHero() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];

    // Typing effect
    if (charIndex < currentMessage.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentMessage[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50); // speed per character
      return () => clearTimeout(timeout);
    } else {
      // Wait before switching to the next message
      const waitBeforeNext = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      }, 1000); // how long to show full message
      return () => clearTimeout(waitBeforeNext);
    }
  }, [charIndex, currentMessageIndex]);

  return (
    <div className="hero-section justify-center text-center w-[80%] lg:w-[50%]">
      <h1 className="text-2xl md:text-4xl font-bold transition-all duration-500">
        {displayedText}
        <span className="animate-pulse">|</span>
      </h1>
      <p className="hero-description mt-4">
        Welcome to Skillnova, your gateway to digital, academic, and business
        excellence. Explore our diverse range of courses designed to empower you
        with the skills you need to succeed in today's fast-paced world.
      </p>
      <Link
        href="/Courses"
        className="bg-[#4A90E2] text-white rounded-md mt-8 px-4 py-2 transition duration-300 ease-in-out"
      >
        Explore Courses
      </Link>
    </div>
  );
}
