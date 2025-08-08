import React from "react";
import { IoMdBook } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { StudentChart } from "../Component/Student-Chart";
import OngoingCourses from "../Component/Ongoing-Courses";
import CompletedCourses from "../Component/Completed-Courses";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen">
      <section className="py-10 md:py-8 lg:py-12 w-[90%] mx-[auto] flex flex-col md:flex-row gap-8">
        <div className="bg-[#EFE5F1] p-6 rounded-md shadow-md w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Welcome Back, Temi!
          </h2>
          <p className="mb-8 text-sm md:text-md lg:text-lg">
            Dive into your learning journey. Here&apos;s a quick overview of
            your progress and what&apos;s next.
          </p>
          <div className="dummy mt-2.5 flex flex-nowrap overflow-scroll md:flex-row gap-4 ">
            <div className="in-progress bg-white p-4 rounded-md shadow-md ">
              <div className="flex items-center gap-2 mb-10 mt-[5vh]">
                <h5 className="">Courses in Progress</h5>
                <IoMdBook />
              </div>
              <h3 className="text-2xl font-bold text-center">3</h3>
            </div>
            <div className="in-progress bg-white p-4 rounded-md">
              <div className="flex items-center gap-2 mb-16 md:mb-10 mt-[5vh]">
                <h5 className="">Courses Completed</h5>
                <PiGraduationCap />
              </div>
              <h3 className="text-2xl font-bold text-center">124</h3>
            </div>
            <div className="in-progress bg-white p-4 rounded-md shadow-md min-h-[100px]">
              <div className="flex items-center gap-2 mb-16 md:mb-10 mt-[5vh]">
                <h5 className="">Certificate Earned</h5>
                <SlBadge />
              </div>
              <h3 className="text-2xl font-bold text-center">10</h3>
            </div>
            <div className="in-progress bg-white p-4 rounded-md shadow-md ">
              <div className="flex items-center gap-2 mb-10 mt-[5vh]">
                <h5 className="">Total Learning Hours</h5>
                <IoTimeOutline />
              </div>
              <h3 className="text-2xl font-bold text-center">200</h3>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left border-2 border-[#EFE5F1] p-6 rounded-md shadow-md w-full md:w-1/3">
          <h3 className="text-2xl md:text-3xl lg:4xl font-semibold ">
            Join Live Session
          </h3>
          <p className="mt-2 text-sm md:text-md lg:text-lg mb-[15vh] md:mb-[25vh]">
            Don&apos;t miss your upcoming live virtual training session with
            instructors.
          </p>
          <div className="flex justify-center items-center gap-4">
            <a href="#" className="btn ">
              Join Session
            </a>
          </div>
        </div>
      </section>
      <section className="">
        <h2 className="text-xl md:text-xl lg:text-2xl font-bold mt-4 mb-4 px-2 md:px-4 lg:px-8">
          Monthly Learning Hours
        </h2>
        <StudentChart />
      </section>
      <section className="ongoing-course my-6 md:my-8 lg:my-12 w-[90%] mx-[auto]">
        <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-8 text-center md:text-left px-2 md:px-4 lg:px-8">
          Ongoing Courses
        </h2>
        <div className="flex flex-wrap gap-4 w-[90%] mx-[auto]">
          <OngoingCourses />
          <OngoingCourses />
          <OngoingCourses />
          <OngoingCourses />
        </div>
      </section>
      <section className="ongoing-course my-6 md:my-8 lg:my-12 w-[90%] mx-[auto]">
        <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-8 text-center md:text-left px-2 md:px-4 lg:px-8">
          Completed Courses
        </h2>
        <div className="flex flex-wrap gap-4 w-[90%] mx-[auto]">
          <CompletedCourses />
          <CompletedCourses />
          <CompletedCourses />
          <CompletedCourses />
        </div>
      </section>
      <section className="ongoing-course my-6 md:my-8 lg:my-12 w-[90%] mx-[auto]">
        <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-8 text-center md:text-left px-2 md:px-4 lg:px-8">
          Recommended For You
        </h2>
        <p className="text-sm md:text-md lg:text-lg mb-4">
          Based on your interests and learning history.
        </p>
        <div className="flex flex-wrap gap-4 w-[90%] mx-[auto]">
          <CompletedCourses />
          <CompletedCourses />
          <CompletedCourses />
          <CompletedCourses />
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
