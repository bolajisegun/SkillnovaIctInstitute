import CourseBar from "./Component/CourseBar";
import TypingHero from "./Component/Typinghero";
import Link from "next/link";

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
    </>
  );
}
