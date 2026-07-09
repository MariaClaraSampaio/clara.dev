import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

export default function Hero() {
  return (
  <section className="min-h-screen flex items-center">
  <div className="max-w-[1600px] w-full mx-auto px-16 flex items-center justify-between">

    <div className="max-w-[520px]">
  <h1 className="text-5xl font-bold text-white">
    Hi, I'm <span className="text-purple-400">Maria Clara</span>
  </h1>

  <h2 className="text-2xl text-purple-300 mt-2">
    Systems Developer
  </h2>

  <p className="mt-6 text-white/80 text-lg leading-8">
    I build modern, responsive, and user-focused web applications with clean code
    and intuitive interfaces.
  </p>

  <p className="mt-6 text-white/70">
    Currently learning <span className="text-purple-400">Next.js</span> and{" "}
    <span className="text-purple-400">Tailwind CSS</span> to build even more
    scalable and modern applications.
  </p>

<div className="flex items-center gap-5 mt-8 text-4xl text-white">

  <FaHtml5 className="hover:text-[#E34F26] duration-300 cursor-pointer" />
  <FaCss3Alt className="hover:text-[#1572B6] duration-300 cursor-pointer" />
  <SiJavascript className="hover:text-[#F7DF1E] duration-300 cursor-pointer" />
  <SiTypescript className="hover:text-[#3178C6] duration-300 cursor-pointer" />
  <FaReact className="hover:text-[#61DAFB] duration-300 cursor-pointer" />
  <SiNextdotjs className="hover:text-gray-300 duration-300 cursor-pointer" />
  <SiTailwindcss className="hover:text-[#38BDF8] duration-300 cursor-pointer" />
  <SiFirebase className="hover:text-[#FFCA28] duration-300 cursor-pointer" />
</div>

  <button className="mt-8 bg-purple-500 px-6 py-3 rounded-lg hover:bg-purple-600 transition">
    View Projects
  </button>
</div>

    <img
      src="/myphoto.png"
      alt="Foto"
      className="w-[850px] rounded-full hover:scale-105 duration-300"
    />

  </div>
</section>
  );
}