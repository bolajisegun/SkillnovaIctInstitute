import React from "react";
import { SlPeople } from "react-icons/sl";
import { IoBookOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { GrLineChart } from "react-icons/gr";
import { GiMoneyStack } from "react-icons/gi";

const WhyChooseUsCard = () => {
  return (
    <div className="mt-10 flex flex-wrap md:flex-wrap justify-center md:flex-row gap-4">
      <div className="text-center mb-4 w-[70%] md:w-[25%] bg-white rounded-md shadow-lg hover:border-2 hover:border-[#4A90E2] transition-all p-4 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mb-4">
          <SlPeople className="text-[#4A90E2] text-4xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Expert Instructors</h3>
          <p className="text-sm text-gray-400 mt-2">
            Learn from industry veterans and academic experts passionate about
            teaching and sharing their knowledge.
          </p>
        </div>
      </div>
      <div className="text-center mb-4 w-[70%] md:w-[25%] bg-white rounded-md shadow-lg hover:border-2 hover:border-[#4A90E2] transition-all p-4 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mb-4">
          <IoBookOutline className="text-[#4A90E2] text-4xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Flexible Learning</h3>
          <p className="text-sm text-gray-400 mt-2">
            Study at your own pace, on your own schedule, with access to course
            materials anytime, anywhere.
          </p>
        </div>
      </div>
      <div className="text-center mb-4 w-[70%] md:w-[25%] bg-white rounded-md shadow-lg hover:border-2 hover:border-[#4A90E2] transition-all p-4 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mb-4">
          <LuGraduationCap className="text-[#4A90E2] text-4xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Career-Focused Content</h3>
          <p className="text-sm text-gray-400 mt-2">
            Our courses are designed with practical skills and industry
            relevance in mind, boosting your career prospects.
          </p>
        </div>
      </div>
      <div className="text-center mb-4 w-[70%] md:w-[25%] bg-white rounded-md shadow-lg hover:border-2 hover:border-[#4A90E2] transition-all p-4 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mb-4">
          <HiOutlineLightBulb className="text-[#4A90E2] text-4xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Interactive Sessions</h3>
          <p className="text-sm text-gray-400 mt-2">
            Engage in live Q&A, collaborative projects, and interactive
            exercises to deepen your understanding.
          </p>
        </div>
      </div>
      <div className="text-center mb-4 w-[70%] md:w-[25%] bg-white rounded-md shadow-lg hover:border-2 hover:border-[#4A90E2] transition-all p-4 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mb-4">
          <GrLineChart className="text-[#4A90E2] text-4xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Continuous Support</h3>
          <p className="text-sm text-gray-400 mt-2">
            Receive ongoing support from our dedicated team and a thriving
            community of learners.
          </p>
        </div>
      </div>
      <div className="text-center mb-4 w-[70%] md:w-[25%] bg-white rounded-md shadow-lg hover:border-2 hover:border-[#4A90E2] transition-all p-4 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mb-4">
          <GiMoneyStack className="text-[#4A90E2] text-4xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Affordable Pricing</h3>
          <p className="text-sm text-gray-400 mt-2">
            High-quality education made accessible with transparent and
            competitive pricing plans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
