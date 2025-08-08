import Image from "next/image";
import React from "react";
import CourseImage from "../images/data-science.png";
import { CiStar } from "react-icons/ci";
import Link from "next/link";

const CompletedCourses = () => {
  return (
    <div>
      <div className="courseImg w-[250px] md:w-[350px] bg-white rounded-md shadow-lg hover:border-2 hover:border-[#4A90E2] transition-all p-4 flex flex-col items-center">
        <Image src={CourseImage} alt="Course Image" />
        <div className="courseInfo">
          <h5 className="courseSubtitle text-[#4A90E2] my-4 text-[10px] md:text-[12px] font-semibold">
            Programming
          </h5>
          <h3 className="courseTitle font-bold mb-1 text-[13px] md:text-[15px]">
            Data Science
          </h3>
          <p className="courseDescription text-[12px] md:text-[13px]">
            Build modern, high-performance web applications with React and
            Next.js, including server-side rendering and API integrations.
          </p>
          <div className="courseActions flex items-center justify-between mt-4 w-full">
            <div className="rating flex items-center gap-1 text-sm md:text-md text-yellow-500">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <span className="ratingValue text-black font-semibold">
                5.0<span className="text-gray-500 font-normal">(1200)</span>
              </span>
            </div>
          </div>
          <Link
            href="/course/react-next-js"
            className="w-full flex justify-center mt-5"
          >
            <button className="enrollButton px-4 py-2 bg-[#4A90E2] hover:bg-[#899cb1] text-white rounded-md transition w-full">
              Resume Course
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompletedCourses;
