import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SkillsProps } from "@/types/types";
import Image from "next/image";

const Skills = ({ skills }: SkillsProps) => {
  return (
    <Card className="card lighter-bg mt-8 p-6 max-sm:p-3 text-center">
      <CardHeader className="text-xl pb-8 font-bold">Skills</CardHeader>
      <CardContent className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 flex flex-col text-center items-center"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={50}
              height={50}
              className="pb-2 hover:scale-110 transition duration-500 w-auto h-auto"
            />
            <div>
              <p className="mt-2 text-sm font-medium text-center">
                {skill.name}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Skills;
