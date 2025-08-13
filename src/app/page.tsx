import Navbar from "@/lib/components/Navbar";

import {
  KeyboardDoubleArrowDownOutlined as DownArrow,
  AccountCircleOutlined as User,
  LocalShippingOutlined as Shipping,
} from '@mui/icons-material';

import { SiNextdotjs, SiPython, SiTailwindcss, SiFirebase, SiStripe, SiReact, SiCplusplus, SiTypescript } from "react-icons/si";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FAF9F6]">
      <div className="section-bg">
        <Navbar />
        <div className="flex flex-col text-center items-center justify-center min-h-[80vh] p-4">
          <h2 className="text-3xl fira text-sky-400 font-semibold">Hello--</h2>
          <h1 className="text-6xl ubuntu">
            I'm <strong><u className="">Mohammad</u></strong>.
          </h1>
          <p className="fira mt-3 text-lg">Junior Year High School Student @ Stuyvesant</p>
          <p className="fira mt-1.5 text-lg font-bold text-red-400">Full-Stack Web Developer (Freelance) | NextJS | Python | Java</p>
          <p className="fira mt-1.5 font-light text-gray-300">📍 Based in NYC</p>

          <a href="#about" className="mt-10 font-semibold text-xl fira border-4 rounded-xl p-4 animated-border"><span>About Me</span> <span><DownArrow /></span></a>

        </div>
      </div>
      <div className="pb-100" id="about">
        <h2 className="text-sky-400 text-2xl text-center fira font-semibold pt-32">ABOUT ME</h2>
        <h1 className="text-4xl text-center ubuntu font-semibold">Allow me to introduce myself.</h1>
        <p className="ubuntu mt-4 text-lg text-center max-w-2xl mx-auto leading-8 text-gray-600">
          I'm a zealous web developer focused on developing user friendly and responsive sites. I have a strong passion
          to coding front and backend applications, and I am always eager to learn new technologies and frameworks.
          I strive to build websites that are not only functional but also visually appealing and easy to navigate.
        </p>

        <hr className="animated-gradient-hr" />

        <div className="flex justify-center gap-8 mt-8 text-5xl cursor-default select-none">
          <SiReact className="text-blue-600 hover:scale-110 transition-transform" />
          <SiNextdotjs className="text-gray-900 light:text-white hover:scale-110 transition-transform" />
          <SiTailwindcss className="text-sky-400 hover:scale-110 transition-transform" />
          <SiFirebase className="text-yellow-500 hover:scale-110 transition-transform" />
          <SiStripe className="text-purple-500 hover:scale-110 transition-transform" />

          <SiPython className="text-blue-500 hover:scale-110 transition-transform" />
          <SiTypescript className="text-blue-600 hover:scale-110 transition-transform" />
          <Image
            src="/java.svg"
            alt="Java"
            width={60}
            height={60}
            className="hover:scale-110 transition-transform"
          />
          <SiCplusplus className="text-blue-700 hover:scale-110 transition-transform" />
        </div>

        {/* Profile & Skills Section */}
        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Profile Card */}
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center space-y-2">
            {/* User Icon */}
            <User className="text-gray-700 mb-4 text-6xl" fontSize="large" />

            {/* Name */}
            <h3 className="text-2xl ubuntu font-semibold">Mohammad Rahman</h3>

            {/* Short Bio */}
            <p className="fira text-gray-700 mt-1">High School Student & Web Developer</p>
            <p className="fira text-gray-500 text-sm">📍 NYC</p>

            <div className="space-y-2 text-black fira mt-2">
              {/* Contact Info */}
              <p className="fira text-sm"><strong>Email:</strong> <a href="mailto:mohammadnyc96@gmail.com" className="underline hover:text-sky-400 transition-colors">mohammadnyc96@gmail.com</a></p>

              {/* Education */}
              <p className="text-sm"><strong>High School:</strong> Stuyvesant High School</p>
              <p className="text-sm"><strong>Current Grade:</strong> 11</p>

              <hr className="ml-auto mr-auto max-w-20 m-6" />

              {/* Occupation */}
              <p className="text-sm"><strong>Occupation:</strong> Student, Freelance Web Developer</p>

              {/* Portfolio Link */}
              <p className="fira text-sm">
                <strong>Portfolio Website:</strong>
                <a
                  href="https://mohammadr09-portfolio.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-sky-400 transition-colors ml-1"
                >
                  mohammadr09-portfolio.vercel.app
                </a>
              </p>
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col gap-6">
            <h3 className="text-2xl ubuntu font-semibold text-center">Skill Strengths</h3>
            {/* Example skill bars */}
            {[
              { name: "Next.js", level: 90 },
              { name: "React", level: 85 },
              { name: "Python", level: 90 },
              { name: "Java", level: 80 },
              { name: "Tailwind CSS", level: 88 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="fira font-medium">{skill.name}</span>
                  <span className="fira font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-sky-400 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>



        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 ml-auto mr-auto mt-10 max-w-5xl">
          <h3 className="text-2xl ubuntu font-semibold text-center mb-6">Other Tech I am Familiar With</h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Firebase", desc: "Authentication & Database", icon: <SiFirebase className="text-yellow-500 text-3xl" />, level: "Advanced" },
              { name: "Stripe", desc: "Payment Integration", icon: <SiStripe className="text-purple-500 text-3xl" />, level: "Proficient" },
              {
                name: "Shippo",
                desc: "Shipping Rate API",
                icon: <Image src="/shippo.png" alt="Shippo" width={48} height={48} className="text-purple-500" />,
                level: "Intermediate"
              },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center bg-gray-50 light:bg-gray-800 shadow-md rounded-2xl p-4 w-40 hover:scale-105 transition-transform cursor-default"
              >
                {tech.icon}
                <h4 className="mt-2 ubuntu font-semibold text-center">{tech.name}</h4>
                <p className="fira text-sm text-gray-500 text-center mb-2">{tech.desc}</p>
                <span className="mt-auto px-3 py-1 bg-sky-400 text-white rounded-full text-xs">{tech.level}</span>
              </div>
            ))}
          </div>

        </div>


      </div>
    </div>
  );
}
