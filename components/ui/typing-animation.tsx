/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 25,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [fadeInWords, setFadeInWords] = useState<{ [key: number]: boolean }>(
    {}
  );

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        const nextChar = text.substring(i, i + 1);
        setDisplayedText((prev) => prev + nextChar);
        setI(i + 1);

        if (nextChar === " ") {
          const word = text.substring(0, i).split(" ").pop();
          if (word === "Developer" || word === "Enthusiast") {
            setFadeInWords((prev) => ({ ...prev, [i]: true }));
          }
        }
      } else {
        clearInterval(typingEffect);
        setIsTypingComplete(true);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text]);

  const parts = displayedText.split(" ");

  return (
    <span>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part === "tech" && <br />}
          <span
            className={`transition-all duration-1000 ${
              (isTypingComplete || fadeInWords[index]) &&
              (part === "Developer" || part === "Enthusiast")
                ? "animated-gradient text-[2.5rem] font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm"
                : part === "Developer" || part === "Enthusiast"
                  ? "initial-font text-[2.5rem] font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm"
                  : "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm"
            }`}
            style={
              part === "Developer" || part === "Enthusiast"
                ? {
                    opacity: isTypingComplete || fadeInWords[index] ? 1 : 0,
                    transition:
                      "opacity 1s ease, color 1s ease, background 1s ease",
                  }
                : {}
            }
          >
            {part}{" "}
          </span>
        </React.Fragment>
      ))}
    </span>
  );
}
