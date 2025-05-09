"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Using framer-motion
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Timeline } from "@/components/ui/timeline"; // Assuming this path is correct
import { TimelineCardData, timelineItems } from "@/constants/timelineData";

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
