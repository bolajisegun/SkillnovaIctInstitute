import Image from "next/image";
import React from "react";
import testimonyImage from "../images/testimony-one.png";

const TestimonialCard = () => {
  return (
    <div className="testimonial-card bg-white rounded-md shadow-md p-4 w-[250px] md:w-[25%] lg:w-[20%] flex flex-wrap justify-center items-center text-center">
      <p className="text-gray-600">
        <q>
          This platform has transformed my learning experience. The courses are
          well-structured and the instructors are top-notch.
        </q>
      </p>
      <Image
        src={testimonyImage}
        alt="Student Photo"
        className="w-12 h-12 rounded-full mt-4"
      />
      <h4 className="font-bold mt-2">- Titi Obausi</h4>
      <p className="text-sm text-gray-500">Software Engineer</p>
    </div>
  );
};

export default TestimonialCard;
