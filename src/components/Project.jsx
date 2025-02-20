import { CiLink } from "react-icons/ci";

function Project({
  title,
  date,
  description,
  technologies,
  link,
  github,
  image,
}) {
  return (
    <div className="hover:bg-zinc-100 hover:dark:bg-zinc-900 transition-all duration-300 p-6 md:rounded-xl">
      {/* =========== PROJECT IMAGE =========== */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mt-4"
        />
      )}

      {/* =========== PROJECT TITLE =========== */}
      <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-300 mt-4">
        {title}
      </h3>

      <div className="flex gap-2 overflow-x-scroll py-2">
        {/* =========== TECHNOLOGIES USED =========== */}
        {technologies.split(",").map((tech, index) => (
          <span
            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-indigo-400 dark:bg-indigo-400 dark:text-white"
            key={index}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* =========== PROJECT DATE=========== */}
      <p className="leading-7 text-zinc-500 dark:text-indigo-200 font-bold text-sm pt-6 ">
        {date}
      </p>

      {/* =========== PROJECT DESCRIPTION =========== */}
      <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-sm mt-4">
        {description}
      </p>

      <div className="flex gap-6 text-zinc-600 dark:text-zinc-300 font-medium">
        {/* =========== PROJECT LINK =========== */}
        <a
          href={link}
          className="flex gap-2 mt-4 hover:text-indigo-400 hover:dark:text-indigo-400 cursor-pointer transition-all duration-300"
        >
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">View Project</span>
        </a>
        {/* =========== PROJECT GITHUB =========== */}
        <a
          href={github}
          className="flex gap-2 mt-4 hover:text-indigo-400 hover:dark:text-indigo-400 cursor-pointer transition-all duration-300"
        >
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">View Github</span>
        </a>
      </div>
    </div>
  );
}

export default Project;
