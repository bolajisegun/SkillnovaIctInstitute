import Link from "next/link";
import {
  FaCode,
  FaChartLine,
  FaPaintBrush,
  FaMoneyBillWave,
  FaLightbulb,
  FaBullhorn,
  FaBookOpen,
  FaShieldAlt,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaCube,
  FaGamepad,
  FaPencilRuler,
  FaBug,
  FaCogs,
  FaTasks,
  FaBusinessTime,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa";

export const categories = [
  { id: 1, name: "Web Development", icon: <FaCode /> },
  { id: 2, name: "Data Science", icon: <FaChartLine /> },
  { id: 3, name: "Graphic Design", icon: <FaPaintBrush /> },
  { id: 4, name: "Business & Finance", icon: <FaMoneyBillWave /> },
  { id: 5, name: "Entrepreneurship", icon: <FaLightbulb /> },
  { id: 6, name: "Digital Marketing", icon: <FaBullhorn /> },
  { id: 7, name: "Secondary School Subjects", icon: <FaBookOpen /> },
  { id: 8, name: "Cybersecurity", icon: <FaShieldAlt /> },
  { id: 9, name: "Mobile App Development", icon: <FaMobileAlt /> },
  { id: 10, name: "Cloud Computing", icon: <FaCloud /> },
  { id: 11, name: "AI & Machine Learning", icon: <FaRobot /> },
  { id: 12, name: "Blockchain Technology", icon: <FaCube /> },
  { id: 13, name: "Game Development", icon: <FaGamepad /> },
  { id: 14, name: "UI/UX Design", icon: <FaPencilRuler /> },
  { id: 15, name: "Software Testing", icon: <FaBug /> },
  { id: 16, name: "DevOps", icon: <FaCogs /> },
  { id: 17, name: "Project Management", icon: <FaTasks /> },
  { id: 18, name: "Business Analysis", icon: <FaBusinessTime /> },
  { id: 19, name: "Data Analysis", icon: <FaDatabase /> },
  { id: 20, name: "Data Visualization", icon: <FaChartBar /> },
];

const CategoriesBar = () => {
  return (
    <div className="dummy categories-bar flex overflow-x-scroll gap-4 p-4 bg-gray-100 rounded-md">
      {categories.map((category) => (
        <div
          key={category.id}
          className="category-item flex flex-col justify-between items-center p-4 rounded-md bg-white shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <div className="text-4xl text-[#4A90E2]">{category.icon}</div>

          <Link href="" className="ml-2 w-[100px] truncate">
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoriesBar;
