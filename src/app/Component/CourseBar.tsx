import React from "react";
import Link from "next/link";

const CourseBar = () => {
  return (
    <div>
      <div
        className="course-category-bar w-[95%] md:w-[90%] mx-auto mt-4 py-4 bg-gray-100 rounded-md flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide sm:justify-center sm:flex-wrap relative bottom-12
      "
      >
        {[
          "Programming",
          "ICT",
          "Enterprenuership",
          "Business",
          "Secondary School Subjects",
        ].map((category, index) => (
          <Link
            key={index}
            className="flex-shrink-0 block px-4 py-2 bg-[#4A90E2] text-white rounded-md hover:bg-[#a9bdd4] hover:text-black transition"
            href="/Courses"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseBar;
