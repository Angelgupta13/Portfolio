import { hero } from "@/constants/about";
import ScrollDown from "./ScrollDown";
import Link from "next/link";
import ShimmerButton from "@/components/ui/shimmer-button";
import TypingAnimation from "@/components/ui/typing-animation";

const Landing = () => {
  const { heading } = hero;
  return (
    <div className="text-center content-z-index h-dvh flex items-center">
      <div className="content-z-index relative">
        <h1 className="text-black/70 dark:text-white/70 text-9xl max-md:text-6xl font-bold mb-4 glow">
          {heading}
        </h1>
        <h1 className="text-black/70 dark:text-white/70 text-5xl max-md:text-4xl font-bold mb-4 ">
          <TypingAnimation text="Full-Stack Developer and Tech Enthusiast ." />
        </h1>
        <div className="flex justify-center space-x-4 mb-4 mt-20">
          <Link href="mailto:angelgupt16@gmail.com" passHref>
            <ShimmerButton className="shadow-2l">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Contact
              </span>
            </ShimmerButton>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1u6Vsc3-28pNaM_gzjkBFRAZJvj9TTMiW/view?usp=drivesdk"
            target="_blank"
            passHref
          >
            <ShimmerButton className="shadow-2l">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Resume
              </span>
            </ShimmerButton>
          </Link>
          <Link
            href="https://alfastrek.my.canva.site/"
            target="_blank"
            passHref
          >
            <ShimmerButton className="shadow-2l ">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Content Creation&nbsp;
              </span>
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </ShimmerButton>
          </Link>
        </div>
        <ScrollDown />
      </div>
    </div>
  );
};

export default Landing;
