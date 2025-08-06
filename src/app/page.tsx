import CourseBar from "./Component/CourseBar";
import HomeMemberCard from "./Component/HomeMemberCard";
import HomepageCard from "./Component/homepageCard";
import TypingHero from "./Component/Typinghero";
// import Link from "next/link";

export default async function Home() {
  // const response = await fetch("https://dummyjson.com/posts");
  // const data = await response.json();

  // interface posts {
  //   id: number;
  //   title: string;
  // }

  return (
    <>
      {/* hero section starts here */}
      <section className="">
        <div className="hero-section">
          <TypingHero />
        </div>
      </section>
      {/* hero section ends here */}

      {/* The course main category bar starts here */}
      <CourseBar />
      {/* The course main category bar ends here */}

      {/* The homepage card section starts here */}
      <section className="homepage-card-section w-[95%] md:w-[90%] mx-auto mt-3">
        <h2 className="title text-center text-2xl md:text-4xl font-bold mb-6">
          Explore Our Top Courses
        </h2>
        <div className="dummy flex flex-nowrap md:flex-wrap justify-center gap-4 overflow-x-scroll scroll-smooth w-[95%] md:w-[90%] mx-auto mt-4 py-4 rounded-md scrollbar-hide sm:justify-center sm:flex-wrap relative pl-40 md:pl-0 lg:pl-0">
          <HomepageCard />
          <HomepageCard />
          <HomepageCard />
          <HomepageCard />
          <HomepageCard />
          <HomepageCard />
          <HomepageCard />
          <HomepageCard />
        </div>
      </section>
      {/* The homepage card section ends here */}
      <section className="member">
        <h2 className="title text-center text-2xl md:text-4xl font-bold mb-6">
          BECOME A MEMBER
        </h2>
        <p className="text-center text-sm md:text-md">
          Join our community and unlock exclusive benefits!
        </p>
        <div className="member-card flex justify-center mt-4">
          <HomeMemberCard />
        </div>
      </section>
    </>
  );
}
