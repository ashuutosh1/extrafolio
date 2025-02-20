import {
  FaXTwitter,
  FaInstagram,
  FaDribbble,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import configData from "../../data/config.json";

export default function Social() {
  const socialLinks = configData.social;

  return (
    <>
      <div className="flex justify-center  mt-10">
        <div
          id="connects"
          className=" gap-10 my-10 border-2 border-indigo-200 rounded-xl"
        >
          <div className="flex items-center justify-between px-7 py-7 gap-6 rounded-lg">
            <div className=" text-xl font-bold text-white flex items-center gap-x-2">
              Links
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-4">
              {socialLinks.map((socialLink, index) => {
                const iconMap = {
                  FaXTwitter,
                  FaInstagram,
                  FaDribbble,
                  FaGithub,
                  FaLinkedinIn,
                };
                const IconComponent = iconMap[socialLink.icon];

                return (
                  <a
                    key={index}
                    href={socialLink.link}
                    className="bg-white p-2 rounded-full duration-300 border-2 hover:bg-indigo-400 border-gray-200 drop-shadow-sm"
                  >
                    {<IconComponent size={20} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
