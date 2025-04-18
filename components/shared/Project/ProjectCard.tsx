import {
  CircleIcon,
  GitHubLogoIcon,
  CalendarIcon,
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/types/types";
import Link from "next/link";

const colorVariants = {
  NextJS: "text-sky-400",
  ReactJS: "text-blue-400",
  NodeJS: "text-green-300",
  MySQL: "text-purple-400",
  Ruby: "text-rose-500",
  EmberJS: "text-red-300",
  MongoDB: "text-teal-300",
};

export function ProjectCard({
  logo,
  title,
  description,
  projectUrl,
  gitHubUrl,
  year,
  languages,
}: Project) {
  return (
    <Card className="custom-hover inline-block mb-6 hover:scale-105 transition duration-500 relative border-2 border-white">
      {/* Background image and blur effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${logo})`,
          filter: "blur(3px)", // Apply blur effect
        }}
      ></div>

      {/* Black overlay with opacity */}
      <div
        className="absolute inset-0 bg-black opacity-60"
        style={{
          filter: "blur(8px)", // Optional: Apply extra blur to the overlay if needed
        }}
      ></div>

      {/* Content above overlay */}
      <div className="relative z-10 p-4">
        <CardHeader className="grid place-items-center space-y-0">
          <div className="text-center">
            <CardTitle>
              <span className="text-gradient2">{title}</span>
            </CardTitle>
            <CardDescription className="mt-2 text-left">
              <ul className="list-disc pl-5 text-white">
                {description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-4">
                {languages.map((language, i) => (
                  <div key={i} className="flex items-center">
                    <CircleIcon
                      className={`mr-1 h-3 w-3 ${
                        colorVariants[
                          language.name as keyof typeof colorVariants
                        ]
                      }`}
                    />
                    {language.name}
                  </div>
                ))}

                <div className="flex items-center col-span-2">
                  <CalendarIcon className="mr-2" />
                  {year}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              {gitHubUrl ? (
                <Link href={gitHubUrl} target="_blank" passHref>
                  <Button variant="ghost" size="icon" className="text-2xl">
                    <GitHubLogoIcon className="w-6 h-6 highlight" />
                  </Button>
                </Link>
              ) : null}
              {projectUrl ? (
                <Link href={projectUrl} target="_blank" passHref>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-2xl"
                    style={{ marginLeft: "15px" }}
                  >
                    <svg
                      data-slot="icon"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-8 h-8 text-blue-500 svg-highlight"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </Button>
                </Link>
              ) : null}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
