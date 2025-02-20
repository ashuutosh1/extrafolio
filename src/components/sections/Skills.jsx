import {
  BiLogoNetlify,
  BiLogoPostgresql,
  BiLogoTypescript,
} from "react-icons/bi";
import { CgVercel } from "react-icons/cg";
import { DiGithubAlt, DiMongodb } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import {
  FaAws,
  FaCss3Alt,
  FaDigitalOcean,
  FaGitAlt,
  FaGitlab,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiAntdesign,
  SiExpress,
  SiFlask,
  SiJest,
  SiNuxtdotjs,
  SiPassport,
  SiPostman,
  SiPythonanywhere,
  SiSequelize,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function Skills() {
  return (
    <>
      {/* =========== SKILLS TITLE =========== */}
      <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">
        {"TechStack </>"}
      </h4>
      <section id="skills" className="mx-4 lg:mx-20">
        {/* =========== LIST OF SKILLS =========== */}
        <div className="flex flex-wrap gap-4 mt-8 text-xs">
          <span className="inline-flex items-center justify-between gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <FaHtml5 className="text-2xl text-indigo-400" /> HTML
          </span>

          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <FaCss3Alt className="text-2xl text-indigo-400" /> CSS
          </span>
          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <IoLogoJavascript className="text-2xl text-indigo-400" /> JavaScript
          </span>
          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <BiLogoTypescript className="text-2xl text-indigo-400" /> TypeScript
          </span>
          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <FaPython className="text-2xl text-indigo-400" /> Python
          </span>
          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <FaReact className="text-2xl text-indigo-400" /> React
          </span>
          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <SiExpress className="text-2xl text-indigo-400" /> Express
          </span>
          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <FaNodeJs className="text-2xl text-indigo-400" /> NodeJS
          </span>
          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <SiTailwindcss className="text-2xl text-indigo-400" /> Tailwind
          </span>

          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <FaGitAlt className="text-2xl text-indigo-400" /> Git
          </span>
          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <DiGithubAlt className="text-2xl text-indigo-400" /> Github
          </span>
          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <BiLogoNetlify className="text-2xl text-indigo-400" /> Netlify
          </span>
          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <CgVercel className="text-2xl text-indigo-400" /> Vercel
          </span>
          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <IoLogoFirebase className="text-2xl text-indigo-400" /> Firebase
          </span>
          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <SiPostman className="text-2xl text-indigo-400" /> Postman
          </span>

          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <DiMongodb className="text-2xl text-indigo-400" /> MongoDB
          </span>
          <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-5">
            <BiLogoPostgresql className="text-2xl text-indigo-400" /> PostgreSQL
          </span>
        </div>
      </section>
    </>
  );
}

export default Skills;
