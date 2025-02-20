import { getConfigData } from "../../data/configReader";
import myAssets from "../../../public/EcoRide_Phase2 PDF.pdf";
import {
  FaXTwitter,
  FaInstagram,
  FaDribbble,
  FaGithub,
  FaLinkedinIn,
  FaDiagramProject,
} from "react-icons/fa6";

export default function Navbar() {
  const configData = getConfigData();
  const handleView = () => {
    window.open(myAssets, "_blank");
  };

  return (
    <>
      <header className="py-2 px-2 fixed top-0 left-0 w-full z-40">
        <div className="mx-auto max-w-xl ">
          <nav className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-xl flex items-center justify-between shadow-md">
            <div className="flex gap-x-3 px-5 py-2">
              <a
                href="/"
                className="opacity-50 p-2 bg-black  text-white rounded-full transition-all duration-300 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </a>
              <a
                href="#education-and-experience"
                className="flex gap-2 items-center opacity-50 p-2 hover:bg-black text-white hover:text-black rounded-full transition-all duration-300 hover:opacity-100"
              >
                <FaXTwitter className="text-xl  dark:text-white border-2 border-white" />
              </a>
              <a
                href="#projects"
                className="flex gap-2 items-center opacity-50 p-2 hover:bg-black text-white hover:text-white rounded-full transition-all duration-300 hover:opacity-100"
              >
                <FaDiagramProject className="text-xl  dark:text-white" />
                <span className="sm:flex hidden">Projects</span>
              </a>
            </div>
            <div className="justify-center">
              <a href={configData.hireMeLink}>
                <button
                  type="button"
                  className="gap-x-1 before:ease relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center mx-7"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
                    />
                  </svg>
                  <span className="">
                    <button onClick={handleView} className="">
                      Resume
                    </button>
                  </span>
                </button>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
