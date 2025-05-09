import { Metadata } from "next";
import { about, skills } from "@/constants/about";
import Introduction from "@/components/shared/About/Introduction";
import Skills from "@/components/shared/About/Skills";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <>
      <Introduction about={about} />
      <Skills skills={skills} />
    </>
  );
};

export default About;
