import { TiTick } from "react-icons/ti";
import CourseBar from "./Component/CourseBar";
import HomeMemberCard from "./Component/HomeMemberCard";
import HomepageCard from "./Component/homepageCard";
import TestimonialCard from "./Component/TestimonialCard";
import TypingHero from "./Component/Typinghero";
import WhyChooseUsCard from "./Component/WhyChooseUsCard";
import Image from "next/image";
import LiveVideoImage from "./images/live-vid.png";
import { FaRegPlayCircle } from "react-icons/fa";
import Link from "next/link";
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
      {/* The why choose us section starts here */}
      <section className="why-choose-section mb-20 w-[95%] md:w-[90%] mx-auto mt-20">
        <h2 className="title text-center text-2xl md:text-4xl font-bold mb-6">
          WHY CHOOSE US?
        </h2>
        <p className="text-center text-sm md:text-md mb-6">
          We are committed to providing an exceptional learning experience with
          benefits tailored to your success.
        </p>
        <div className="">
          <WhyChooseUsCard />
        </div>
      </section>
      {/* The member card section starts here */}
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
      {/* The member card section ends here */}
      {/* The testimonial section starts here */}
      <section className="testimonial-section w-[95%] md:w-[90%] mx-auto mt-10 mb-20">
        <h2 className="title text-center text-2xl md:text-4xl font-bold mb-6">
          What Our Students Say
        </h2>
        <div className="testimonial-cards flex flex-wrap justify-center gap-4">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </section>
      {/* The testimonial section ends here */}
      {/* The live video section starts here */}
      <section className="live-video md:flex md:justify-between md:items-center w-[95%] md:w-[90%] mx-auto mt-10 mb-20 p-[10px] gap-5">
        <div className=" md:w-[45%]">
          <h2 className="text-xl md:text-4xl font-bold mb-2.5">
            Learn Together, Live Anywhere
          </h2>
          <p className="text-sm md:text-md mb-4">
            Our integrated in-app video call feature enables seamless
            collaborative learning, real-time Q&A with instructors, and
            interactive group projects.
          </p>
          <ul className="benefits-list text-[.9em] mb-4">
            <li className="flex items-center gap-2 mb-2 text-[.9em] md:text-[1em]">
              <TiTick className="text-green-500" /> Unlimited access to all
              courses
            </li>
            <li className="flex items-center gap-2 mb-2 text-[.9em] md:text-[1em]">
              <TiTick className="text-green-500" />
              Discount on all courses
            </li>
            <li className="flex items-center gap-2 mb-2 text-[.9em] md:text-[1em]">
              <TiTick className="text-green-500" />
              Discount on Virtual Trainings
            </li>
            <li className="flex items-center gap-2 mb-2 text-[.9em] md:text-[1em]">
              <TiTick className="text-green-500" />
              Free access to our instructors
            </li>
            <li className="flex items-center gap-2 mb-2 text-[.9em] md:text-[1em]">
              <TiTick className="text-green-500" />
              Free Certificate on all courses
            </li>
            <li className="flex items-center gap-2 mb-5 text-[.9em] md:text-[1em]">
              <TiTick className="text-green-500" />
              24/7 customer support
            </li>
          </ul>
          <div className="live-video-cta mb-8">
            <button className="bg-blue-500 text-white text-sm md:text-[1em] px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#899cb1] transition-colors">
              <FaRegPlayCircle className="text-lg" />
              Learn More About Live Sessions
            </button>
          </div>
        </div>
        <div className="">
          <Image
            src={LiveVideoImage}
            alt="Live Video"
            width={500}
            height={300}
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </section>
      {/* The live video section ends here */}
      <section className="cta w-[90%] mx-auto bg-blue-100 rounded-md h-[30%] md:h-[40%] lg:h-[50%] mb-20">
        <div className="cta-content text-center p-6  shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-sm md:text-md mb-6">
            Join thousands of students achieving their goals with
            Skillnova&apos;s expert-led courses and flexible learning options.
          </p>
          <Link
            href=""
            className="bg-blue-500 text-white text-sm md:text-[1em] px-4 py-2 rounded-md items-center gap-2 hover:bg-[#899cb1] transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
