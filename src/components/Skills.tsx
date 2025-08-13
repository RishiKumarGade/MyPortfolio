import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiSpringboot,
  SiSocketdotio,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiVercel,
  SiCloudinary,
  SiPython,
  SiTensorflow,
  SiOpenai,
  SiFlask,
  SiDjango,
  SiPytorch,
  SiOpengl,
} from "react-icons/si";
import {
  FaJava,
  FaBrain,
  FaGamepad,
  FaCuttlefish,
  FaDatabase,
} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: <TbBrandCpp className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Python", icon: <SiPython className="text-yellow-500" /> },
        { name: "C", icon: <FaCuttlefish className="text-green-500" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        { name: "SQL", icon: <FaDatabase className="text-indigo-500" /> },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <SiReact className="text-sky-500" /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-500" />,
        },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        {
          name: "Spring Boot",
          icon: <SiSpringboot className="text-green-600" />,
        },
        { name: "Flask", icon: <SiFlask className="text-gray-700" /> },
        { name: "Django", icon: <SiDjango className="text-green-700" /> },
        { name: "Socket.io", icon: <SiSocketdotio /> },
        { name: "REST APIs", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "JWT Auth", icon: <SiNodedotjs className="text-green-500" /> },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "Git/GitHub", icon: <SiGit className="text-orange-500" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
        { name: "Vercel", icon: <SiVercel /> },
        {
          name: "Cloudinary",
          icon: <SiCloudinary className="text-blue-500" />,
        },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        {
          name: "TensorFlow",
          icon: <SiTensorflow className="text-orange-500" />,
        },
        { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
        {
          name: "Reinforcement Learning",
          icon: <FaBrain className="text-purple-500" />,
        },
        { name: "Q-Learning", icon: <FaBrain className="text-purple-500" /> },
        { name: "AI Integration", icon: <SiOpenai className="text-black" /> },
        { name: "LLM Integration", icon: <SiOpenai className="text-black" /> },
        { name: "Game AI", icon: <FaGamepad className="text-pink-500" /> },
        {
          name: "Data Analysis",
          icon: <SiTensorflow className="text-orange-500" />,
        },
      ],
    },
    {
      title: "Core Areas & Interests",
      skills: [
        {
          name: "Data Structures & Algorithms",
          icon: <FaBrain className="text-indigo-500" />,
        },
        {
          name: "Object-Oriented Programming",
          icon: <FaJava className="text-red-500" />,
        },
        {
          name: "Software Engineering",
          icon: <SiReact className="text-blue-400" />,
        },
        { name: "DevOps", icon: <SiDocker className="text-blue-400" /> },
        {
          name: "Full-Stack Development",
          icon: <SiReact className="text-blue-500" />,
        },
        {
          name: "Game Development",
          icon: <FaGamepad className="text-pink-500" />,
        },
        {
          name: "Artificial Intelligence",
          icon: <FaBrain className="text-purple-500" />,
        },
        { name: "OpenGL", icon: <SiOpengl className="text-green-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies, programming
            languages, and areas of expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center text-center space-y-2 transition-transform duration-300 hover:scale-110"
                  >
                    <div className="text-3xl transition-colors duration-300 hover:text-teal-500">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
