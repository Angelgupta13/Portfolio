import { myName, socials } from "@/constants/about";
import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const GetIcons = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case "Email":
      return <FaEnvelope size={40} />;
    case "LinkedIn":
      return <FaLinkedin size={40} />;
    case "GitHub":
      return <FaGithub size={40} />;
    case "YouTube":
      return <FaYoutube size={40} />;
    case "Instagram":
      return <FaInstagram size={40} />;
    case "X":
      return <FaXTwitter size={40} />;
    default:
      return null;
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-socials" className="mt-16 wrapper text-center">
      <p className="pb-6 font-bold text-2xl">Socials & Contact</p>
      <div className="inline-flex flex-wrap justify-center gap-x-7">
        {socials.map((social, index) => (
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="rounded-full border-current border-2 w-16 h-16 flex-center fill-current transition-transform duration-300 hover:scale-125 animate-border"
          >
            <GetIcons iconName={social.name} />
          </a>
        ))}
      </div>

      <div className="col-span-2 pt-10">
        <h3 className="my-2">
          Designed & Built by{" "}
          <span className="italic text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            {myName}
          </span>
        </h3>
        <p className="mb-6">&copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
