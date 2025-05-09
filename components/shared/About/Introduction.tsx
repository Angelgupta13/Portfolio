import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IntroductionProps } from "@/types/types";
import Image from "next/image";

const Introduction = ({ about }: IntroductionProps) => {
  const { heading, professionalInfo, personalInfo, casualLife } = about;

  return (
    <Card className="p-6 max-sm:p-3 flex items-center">
      <div className="flex-1">
        <CardHeader className="heading-text text-center">{heading}</CardHeader>
        <CardContent className="grid gap-1">
          {[professionalInfo, personalInfo, casualLife].map((info, index) => {
            return (
              <p key={index} className="pt-5">
                {info}
              </p>
            );
          })}
        </CardContent>
      </div>
      <div className="ml-6">
        <Image
          src="/self-3.jpg" // Replace with your image path
          alt="Self"
          width={300}
          height={300}
          className="w-100 h-100 object-cover rounded-md border-2 border-white"
        />
      </div>
    </Card>
  );
};

export default Introduction;
