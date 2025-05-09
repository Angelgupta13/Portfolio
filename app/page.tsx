import dynamic from "next/dynamic";
import Hero from "@/components/shared/Hero";
import Projects from "@/components/shared/Project/Projects";
import { TimelineExpandableCard } from "@/components/timeline-expandable-card";



const FlickeringGrid = dynamic(
  () => import("@/components/shared/flickering-grid"),
  {
    ssr: false,
    loading: () => <div className="opacity-0" />,
  }
);

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 w-full transition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in">
          <FlickeringGrid
            className="w-full h-full [mask-image:radial-gradient(550px_circle_at_center,white,transparent)]"
            squareSize={4}
            gridGap={6}
            color="#60A5FA"
            maxOpacity={0.55}
            flickerChance={0.1}
          />
        </div>
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
      <Projects />
      <div className="w-full">
        
        <TimelineExpandableCard />
      </div>
    </>
  );
}
