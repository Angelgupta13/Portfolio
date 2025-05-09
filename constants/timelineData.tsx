// Define the structure for each timeline item's data
import React from "react";

export interface TimelineCardData {
  id: string; // Unique ID for layout animation
  timelineTitle: string; // Title shown on the timeline axis
  cardTitle: string; // Title shown in the card
  description: string; // Short description shown in the collapsed card
  src: string; // Image source
  ctaText: string; // Call-to-action button text
  ctaLink: string; // Call-to-action link
  content: () => JSX.Element | string; // Full content for the expanded card
}

// Timeline Data for the Timeline Expandable Card
export const timelineItems: TimelineCardData[] = [
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
    timelineTitle: "8-12th january 2025",
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
        Secured a spot in the top 8 at Vihaan 8.0, DTU&apos;s flagship 24-hour
        hackathon, competing against 2000+ teams. After rigorous rounds, we made
        it to the finals, where we were among the top 8 teams in the software
        category. This achievement marked my second win in just two weeks,
        demonstrating resilience, creativity, and effective teamwork.
      </p>
    ),
  },
];
