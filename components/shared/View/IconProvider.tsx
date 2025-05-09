import GitHub from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/LinkedIn";
import Email from "@/components/icons/Email";
import Peerlist from "@/components/icons/Peerlist";
export const GetIcons = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case "GitHub":
      return <GitHub />;
    case "LinkedIn":
      return <LinkedIn />;
    case "Email":
      return <Email />;
    case "Peerlist":
      return <Peerlist />;
    default:
      return null;
  }
};
