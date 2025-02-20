import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  return (
    <section
      id="hero"
      className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24 "
    >
      <div className="self-center">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle">
          <img
            src={user_info.main.photo}
            className="rounded-full mb-6 lg:hidden"
            alt="Graduation Picture"
          />
        </div>
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <h2 className="text-xl">{user_info.main.role}</h2>
            <h1 className="font-black mt-3 text-5xl lg:w-[85%]">
              {user_info.main.name}
            </h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
              {user_info.main.description}
            </p>

            <div className="flex gap-2 mt-6">
              <a
                href="mailto:bro4code@gmail.com"
                target="mailto:bro4code@gmail.com"
                rel="noopener noreferrer"
                className="px-6 py-3 border rounded-xl border-black hover:bg-indigo-400 hover:text-white hover:border-indigo-400 dark:border-white font-medium transition-all duration-300"
              >
                Email
              </a>
              <a
                href="#contact"
                className="px-6 py-3 hover:text-indigo-400 dark:hover:text-indigo-400 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <a href="#connects">
                  <span className="self-center font-medium">
                    Connect with me
                  </span>
                </a>

                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block w-[480px] self-center">
            <img
              className="rounded-[10%] transform rotate-3"
              src={user_info.main.photo}
              alt="Daniel Shan Balico Graduation Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
