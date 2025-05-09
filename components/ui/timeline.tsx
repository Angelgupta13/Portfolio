"use client";
import {

  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

type TimelineProps = { data: TimelineEntry[]; hideYears?: boolean };

export const Timeline = ({ data, hideYears = false }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
        My Journey Through Hackathons and Innovation
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
        From hackathons to innovation competitions, each event has shaped my journey in unique ways. Here's a timeline of my key experiences and achievements that have contributed to my growth as a developer and innovator.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 flex-col md:flex-row md:gap-x-10"
          >
            {!hideYears && (
              <div className="sticky flex flex-col md:flex-row z-40 items-start md:items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full mb-4 md:mb-0">
                <div className="h-10 absolute left-[-25px] md:left-[-18px] w-10 rounded-full bg-white dark:bg-black flex items-center justify-center md:block hidden">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 border-neutral-300 dark:border-neutral-700 p-2 dark:border-neutral-800" />
                </div>
                <h3 className="text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 text-right md:text-right text-left">
                  {item.title}
                </h3>
              </div>
            )}
            <div className="relative pl-0 pr-4 md:pl-4 w-full">
              {item.content}
              {""}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-0 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:block hidden"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
