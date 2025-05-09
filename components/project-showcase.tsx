"use client";
import { cn } from "@/lib/utils";
import { projectList } from "@/constants/projectList";
import Link from "next/link";
import { useState } from "react";

export default function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-12 md:py-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-600 dark:from-neutral-100 dark:to-neutral-500">
              Projects
            </h2>
            <p className="max-w-[700px] text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
              Explore my recent projects and technical work
            </p>
          </div>
          <div className="w-20 h-1.5 bg-gradient-to-r from-neutral-700 to-neutral-400 rounded-full mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="max-w-xs w-full group/card mx-auto relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card shine effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/card:opacity-100 blur-xl transition-opacity duration-500"></div>

              <div
                className={cn(
                  "cursor-pointer overflow-hidden relative card h-[420px] rounded-xl max-w-sm flex flex-col justify-between p-6",
                  "bg-gradient-to-br from-neutral-950 to-neutral-900 border border-neutral-800/60",
                  "transition-all duration-300 ease-in-out",
                  "shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]",
                  hoveredIndex === index &&
                    "scale-[1.03] border-neutral-700/80 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)]"
                )}
              >
                {/* Background gradient with animated glow on hover */}
                <div
                  className={cn(
                    "absolute w-full h-full top-0 left-0 transition-all duration-500",
                    "bg-gradient-to-b from-transparent via-black/20 to-black/80",
                    "after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:via-neutral-800/5 after:to-neutral-800/20 after:opacity-0 after:transition-opacity after:duration-500",
                    hoveredIndex === index && "opacity-95 after:opacity-100"
                  )}
                />

                {/* Top section with logo and title */}
                <div className="flex flex-row items-center space-x-4 z-10">
                  {project.logo && (
                    <div
                      className={cn(
                        "relative h-16 w-16 rounded-lg overflow-hidden border-2 border-neutral-700/80 bg-white/10 backdrop-blur-sm flex items-center justify-center",
                        "transition-all duration-300 ease-in-out shadow-md",
                        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-white/10 before:opacity-0 before:transition-opacity before:duration-300",
                        hoveredIndex === index &&
                          "scale-110 border-white/60 shadow-lg before:opacity-100"
                      )}
                    >
                      <img
                        alt={`${project.title} logo`}
                        src={project.logo}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <p
                      className={cn(
                        "font-bold text-xl text-white relative z-10",
                        "transition-all duration-300 tracking-tight",
                        hoveredIndex === index && "text-white scale-[1.02]"
                      )}
                    >
                      {project.title}
                    </p>
                    <p className="text-sm text-gray-400 mt-0.5 tracking-wide">
                      {project.year}
                    </p>
                  </div>
                </div>

                {/* Content section */}
                <div className="text content z-10 space-y-5">
                  <div className="space-y-3 mt-4">
                    {project.description.slice(0, 1).map((desc, i) => (
                      <p
                        key={i}
                        className={cn(
                          "font-normal text-sm leading-relaxed text-gray-300 relative",
                          "transition-all duration-300",
                          hoveredIndex === index && "text-gray-100"
                        )}
                      >
                        {desc}
                      </p>
                    ))}
                  </div>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.languages.map((lang, i) => (
                      <span
                        key={i}
                        className={cn(
                          "px-3 py-1 text-xs font-medium rounded-full",
                          "bg-neutral-800/80 text-gray-300 border border-neutral-700/50",
                          "transition-all duration-300",
                          "shadow-sm",
                          hoveredIndex === index &&
                            "bg-neutral-700/80 text-white border-neutral-600 shadow"
                        )}
                      >
                        {lang.name}
                      </span>
                    ))}
                  </div>

                  {/* Links section */}
                  <div
                    className={cn(
                      "flex gap-5 mt-4",
                      "transition-all duration-500 ease-in-out",
                      hoveredIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-70 translate-y-1"
                    )}
                  >
                    {project.gitHubUrl && (
                      <Link
                        href={project.gitHubUrl}
                        target="_blank"
                        className={cn(
                          "text-sm font-medium text-gray-300 hover:text-white transition-all flex items-center gap-2 px-3 py-2 rounded-md",
                          "bg-neutral-800/50 hover:bg-neutral-700/80 border border-neutral-700/40",
                          "hover:shadow-md hover:border-neutral-600/80",
                          hoveredIndex === index && "text-white"
                        )}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                        Code
                      </Link>
                    )}
                    {project.projectUrl && (
                      <Link
                        href={project.projectUrl}
                        target="_blank"
                        className={cn(
                          "text-sm font-medium text-gray-300 hover:text-white transition-all flex items-center gap-2 px-3 py-2 rounded-md",
                          "bg-neutral-800/50 hover:bg-neutral-700/80 border border-neutral-700/40",
                          "hover:shadow-md hover:border-neutral-600/80",
                          hoveredIndex === index && "text-white"
                        )}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" x2="21" y1="14" y2="3"></line>
                        </svg>
                        Demo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
