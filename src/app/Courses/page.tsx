import React from "react";
import CategoriesBar from "../Component/Categories-Bar";
import HomepageCard from "../Component/homepageCard";

const Courses = () => {
  return (
    <div className="coursesPage min-h-screen mb-[100px]">
      <section className="exploreCourses py-10 md:py-8 lg:py-12 w-[100%] mx-[auto]">
        <h2 className="text-3xl font-bold mb-6">Explore Courses</h2>
        <h5 className="text-lg mb-4 w-[90%] md:w-[80%] lg:w-[60%] mx-auto text-center">
          Discover a variety of courses tailored to your learning needs.
        </h5>
      </section>
      <section className="featured-categories mt-10 md:mt-8 lg:mt-12 w-[95%] md:w-[90%] mx-auto">
        <h2 className="text-3xl font-bold mb-6 ">Featured Categories</h2>
        <div className="relative bottom-0">
          <CategoriesBar />
        </div>
      </section>
      <section className="trending-courses mt-10 md:mt-8 lg:mt-12 w-[95%] md:w-[90%] mx-auto">
        <h2 className="text-3xl font-bold mb-6 ">Trending Courses</h2>
        <div className="dummy flex flex-nowrap gap-4 justify-around w-[95%] md:w-[90%] mx-auto overflow-x-scroll">
          <HomepageCard />
          <HomepageCard />
          <HomepageCard />
          <HomepageCard />
          <HomepageCard />
          <HomepageCard />
        </div>
      </section>
    </div>
  );
};

export default Courses;
