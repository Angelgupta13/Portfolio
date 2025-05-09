"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Using framer-motion
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Timeline } from "@/components/ui/timeline"; // Assuming this path is correct

// Define the structure for each timeline item's data
interface TimelineCardData {
  id: string; // Unique ID for layout animation
  timelineTitle: string; // Title shown on the timeline axis
  cardTitle: string; // Title shown in the card
  description: string; // Short description shown in the collapsed card
  src: string; // Image source
  ctaText: string; // Call-to-action button text
  ctaLink: string; // Call-to-action link
  content: () => JSX.Element | string; // Full content for the expanded card
}

// Sample Data for the Timeline Expandable Card
const timelineItems: TimelineCardData[] = [
  {
    id: "TechStars Startup Weekend",
    timelineTitle: "19-21st April 2024",
    cardTitle: "TechStars Startup Weekend",
    description:
      "Competition by Google for Startups hosted at E-Cell, DTU (Formerly DCE) ",
    src: "/dtu.jpg", // Replace with relevant image
    ctaText: "Read More",
    ctaLink:
      "https://www.linkedin.com/posts/angel-gupta16_startupweekend-dtudelhi-entrepreneurship-activity-7210198273897168896-_BNX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMPRh4B3Fpr8orglQkfLWMB86JtxFPCQgw", // Replace with actual link
    content: () => (
      <p>
        A transformative experience where I co-created and pitched Lumi-fi, an
        innovative LiFi solution. Worked alongside brilliant minds, gained
        invaluable insights into startup culture, and learned from top mentors.
        This journey sharpened my entrepreneurial mindset and strengthened my
        passion for tech-driven change.
      </p>
    ),
  },
  {
    id: "18TH OCT 2024",
    timelineTitle: "18th Oct 2024",
    cardTitle: "Pixel to pitch   ",
    description: "Secured 1st position in ui/ux competition",
    src: "pitch.jpg", // Replace with relevant image
    ctaText: "Read More",
    ctaLink: "#", // Replace with actual link
    content: () => (
      <p>
        Secured 1st position for creating an innovative landing page and unique
        business idea, blending creativity with technical skills. This
        experience enhanced my problem-solving and entrepreneurial mindset.
      </p>
    ),
  },
  {
    id: "VICHARX BVEST",
    timelineTitle: "19th Oct 2024",
    cardTitle: "VICHARX BVEST",
    description: "Secured 2nd position in vicharx Ideathon",
    src: "https://assets.aceternity.com/demos/metallica.jpeg", // Replace with relevant image
    ctaText: "Read More",
    ctaLink: "#", // Replace with actual link
    content: () => (
      <p>
        Won VicharX by presenting a compelling and innovative solution that
        combined creativity and strategic thinking. The competition allowed me
        to showcase my problem-solving skills and entrepreneurial mindset. It
        was an amazing experience that reinforced my passion for driving
        impactful change through technology.
      </p>
    ),
  },
  {
    id: "CAMPUS CARNIVAL 3.0",
    timelineTitle: "19th Oct 2024",
    cardTitle: "CAMPUS CARNIVAL 3.0",
    description: "Secured 2nd position in CAMPUS CARNIVAL 3.0",
    src: "campus.jpg", // Replace with relevant image
    ctaText: "Read More",
    ctaLink: "#", // Replace with actual link
    content: () => (
      <p>
        Had an awesome time in Campus Carnival 3.0, where I got to put my
        creativity and skills to the test. It was all about fun, teamwork, and
        coming up with fresh ideas. Definitely a highlight of my journey, and a
        chance to learn while having a blast!
      </p>
    ),
  },
  {
    id: "National youth festival 2025",
    timelineTitle: "8-12 january 2025",
    cardTitle: "National youth festival 2025",
    description: "Represented Delhi at National Youth Festival 2025",
    src: "https://assets.aceternity.com/demos/metallica.jpeg", // Replace with relevant image
    ctaText: "Read More",
    ctaLink:
      "https://www.linkedin.com/posts/angel-gupta16_viksitbharat-nationalyouthfestival-teamdelhi-activity-7288020130331078656-7QEi?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMPRh4B3Fpr8orglQkfLWMB86JtxFPCQgw", // Replace with actual link
    content: () => (
      <p>
        Selected through a rigorous two-month, four-stage process to represent
        <strong>Team Delhi</strong> at the <strong>National Youth</strong>{" "}
        Festival 2025, where I participated in the Young Leaders&apos; Dialogue
        on &apos;<strong>Making India the Startup Capital by 2047</strong>
        &apos;, gaining invaluable insights on innovation and entrepreneurship.
      </p>
    ),
  },
  {
    id: "INNOVATION MELA",
    timelineTitle: "17th feb 2025",
    cardTitle: "INNOVATION MELA",
    description: "Secured 2nd position in Innovation Mela at MAIT",
    src: "mait.jpg", // Replace with relevant image
    ctaText: "Read More",
    ctaLink:
      "https://www.linkedin.com/posts/angel-gupta16_innovationmela2025-bvcoe-gratefulhearts-activity-7315561625892147201-zO_E?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMPRh4B3Fpr8orglQkfLWMB86JtxFPCQgw", // Replace with actual link
    content: () => (
      <p>
        Honored to have secured 2nd position in the Innovation Mela 2025 –
        Innovation Idea Presentation, organized by the Department of Computer
        Science and Engineering, Maharaja Agrasen Institute of Technology
        (MAIT).
      </p>
    ),
  },
  {
    id: "Reckon 6.0",
    timelineTitle: "8-9th March 2025",
    cardTitle: "Reckon 6.0",
    description: " Reach in Top 16 Teams in Reckon 6.0 at JIET",
    src: "https://assets.aceternity.com/demos/metallica.jpeg", // Replace with relevant image
    ctaText: "Read More",
    ctaLink: "#", // Replace with actual link
    content: () => (
      <p>
        Reckon 6.0 was my first interstate hackathon experience, where I
        traveled from Delhi to Jodhpur to compete. Hosted by JIET, it was an
        intense 24-hour innovation sprint that brought together passionate
        developers and creators. It pushed my limits and gave me a real taste of
        building impactful solutions under pressure.
      </p>
    ),
  },
  {
    id: "Upstart",
    timelineTitle: "19th March 2025",
    cardTitle: "Upstart – E-Summit 2025, E-Cell MSIT ",
    description: "Secured 1st position in Upstart Startup Pitch Competition",
    src: "https://assets.aceternity.com/demos/metallica.jpeg", // Replace with relevant image
    ctaText: "Read More",
    ctaLink:
      "https://www.linkedin.com/posts/angel-gupta16_doublewin-entrepreneurship-winningmindset-activity-7314499864325722112-5oBD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMPRh4B3Fpr8orglQkfLWMB86JtxFPCQgw", // Replace with actual link
    content: () => (
      <p>
        Secured 1st place in Upstart, a flagship startup pitch competition at
        E-Summit 2025. Presented a disruptive startup idea backed by a scalable
        business model, focusing on innovation, feasibility, and strategic
        impact. The event tested my ability to pitch under pressure and defend
        ideas with a strong parametric approach.
      </p>
    ),
  },
  {
    id: "Saleable",
    timelineTitle: "20th March 2025",
    cardTitle: "Saleable - E-Summit 2025",
    description: "Secured 1st position in Saleable at E-Summit 2025",
    src: "https://assets.aceternity.com/demos/metallica.jpeg", // Replace with relevant image
    ctaText: "Read More",
    ctaLink:
      "https://www.linkedin.com/posts/angel-gupta16_doublewin-entrepreneurship-winningmindset-activity-7314499864325722112-5oBD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMPRh4B3Fpr8orglQkfLWMB86JtxFPCQgw", // Replace with actual link
    content: () => (
      <p>
        Won 1st place in Saleable, a real-time sales and marketing simulation
        challenge at E-Summit 2025. Demonstrated strategic thinking, consumer
        behavior understanding, and on-the-spot problem-solving to position a
        product in a competitive market landscape
      </p>
    ),
  },
  {
    id: " Innovicon 3.0",
    timelineTitle: "8th April 2025",
    cardTitle: "Innovicon 3.0 ",
    description: "Secured 3rd position in Innovicon 3.0 by IEEE BVCOE",
    src: "https://assets.aceternity.com/demos/metallica.jpeg", // Replace with relevant image
    ctaText: "Read More",
    ctaLink: "#", // Replace with actual link
    content: () => (
      <p>
        Secured 3rd position in the Software category at InnoviCon 3.0,
        organized by IEEE BVCOE. Presented an innovative software solution
        addressing real-world challenges, highlighting technical skills,
        creative problem-solving, and the ability to build impactful digital
        products under pressure.
      </p>
    ),
  },
  {
    id: "Technesis",
    timelineTitle: "10-12th April 2025",
    cardTitle: "Technesis 2025",
    description: "Secured 3rd position in Technesis 2025",
    src: "https://assets.aceternity.com/demos/metallica.jpeg", // Replace with relevant image
    ctaText: "Read More",
    ctaLink: "#", // Replace with actual link
    content: () => (
      <p>
        Secured 3rd position at TechGenesis 2.0, a 3-day on-site hackathon
        organized by IOSC-BVP. Participated in Devयुद्ध, where we built an
        innovative tech solution with support from industry mentors. The event
        challenged my problem-solving, teamwork, and execution under pressure.
      </p>
    ),
  },
  {
    id: " Vihaan 8.0 – DTU",
    timelineTitle: "17-18th April 2025",
    cardTitle: "Vihaan 8.0 – DTU",
    description: "Top 8 in Vihaan 8.0 by DTU",
    src: "dtu2.jpg", // Replace with relevant image
    ctaText: "Read More",
    ctaLink: "#", // Replace with actual link
    content: () => (
      <p>
        Secured a spot in the top 8 at Vihaan 8.0, DTU’s flagship 24-hour
        hackathon, competing against 2000+ teams. After rigorous rounds, we made
        it to the finals, where we were among the top 8 teams in the software
        category. This achievement marked my second win in just two weeks,
        demonstrating resilience, creativity, and effective teamwork.
      </p>
    ),
  },
];

export function TimelineExpandableCard() {
  const [active, setActive] = useState<TimelineCardData | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const uniqueId = useId(); // Use React's useId for unique IDs

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  // Prepare data for the Timeline component
  const timelineData = timelineItems.map((item) => ({
    title: item.timelineTitle,
    content: (
      // This is the collapsed card view within the timeline
      <motion.div
        layoutId={`card-${item.id}-${uniqueId}`} // Unique layoutId
        key={item.id}
        onClick={() => setActive(item)}
        className="p-4 flex flex-col sm:flex-row justify-between items-center hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 transition-colors duration-200"
      >
        <div className="flex gap-4 flex-col sm:flex-row items-center">
          <motion.div layoutId={`image-${item.id}-${uniqueId}`}>
            <img
              width={100}
              height={100}
              src={item.src}
              alt={item.cardTitle}
              className="h-16 w-16 sm:h-14 sm:w-14 rounded-lg object-cover object-top flex-shrink-0"
            />
          </motion.div>
          <div className="text-center sm:text-left">
            <motion.h3
              layoutId={`title-${item.id}-${uniqueId}`}
              className="font-medium text-neutral-800 dark:text-neutral-200"
            >
              {item.cardTitle}
            </motion.h3>
            <motion.p
              layoutId={`description-${item.id}-${uniqueId}`}
              className="text-sm text-neutral-600 dark:text-neutral-400"
            >
              {item.description}
            </motion.p>
          </div>
        </div>
        <motion.button
          layoutId={`button-${item.id}-${uniqueId}`}
          className="px-4 py-2 text-xs sm:text-sm rounded-full font-bold bg-gray-100 dark:bg-neutral-900 dark:text-neutral-300 hover:bg-green-500 hover:text-white text-black mt-4 sm:mt-0 flex-shrink-0"
        >
          {item.ctaText}
        </motion.button>
      </motion.div>
    ),
    // Pass the full item data if needed by the Timeline component itself,
    // otherwise, it's mainly used for the onClick handler above.
    cardData: item,
  }));

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      {/* Modal for Expanded Card */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 h-full w-full z-30" // Increased z-index from potentially lower/default value
            onClick={() => setActive(null)} // Allow closing by clicking backdrop
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-40 p-4">
            {" "}
            {/* Increased z-index from potentially lower/default value */}
            <motion.button
              key={`button-close-${active.id}-${uniqueId}`}
              layout // Animate layout changes
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8 z-50" // Ensure button is above card (z-50 is likely sufficient)
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.id}-${uniqueId}`} // Match layoutId
              ref={ref}
              className="w-full max-w-lg h-auto max-h-[80vh] md:max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.id}-${uniqueId}`}>
                <img
                  // Use consistent width/height for smoother animation if possible
                  // width={500}
                  // height={300}
                  src={active.src}
                  alt={active.cardTitle}
                  className="w-full h-60 object-cover" // Adjusted height
                />
              </motion.div>

              <div className="flex flex-col justify-between flex-grow p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.id}-${uniqueId}`}
                      className="text-xl font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.cardTitle}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.id}-${uniqueId}`}
                      className="text-sm text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <motion.a
                    layoutId={`button-${active.id}-${uniqueId}`}
                    href={active.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white whitespace-nowrap flex-shrink-0 ml-4" // Added margin
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <motion.div
                  layout // Animate content layout changes
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 text-sm md:text-base flex-grow overflow-y-auto dark:text-neutral-400 pr-2 [scrollbar-width:thin]" // Added padding-right for scrollbar
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Render the Timeline */}
      <div className="mt-10">
        {" "}
        {/* Add some margin */}
        <Timeline data={timelineData} hideYears={!!active} />
      </div>
    </div>
  );
}

// Close Icon Component (copied from expandable-card-demo-standard.tsx)
// Consider moving this to a shared UI components directory
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24" // Corrected viewBox
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
