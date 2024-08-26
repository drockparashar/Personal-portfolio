// import { Education } from "@/components/component/education";

import { Hero } from "@/components/component/hero";
import { Landing } from "@/components/component/landing";
import Image from "next/image";
import CardCarousel from "@/components/component/projectSection";

export default function Home() {
  return (
    
      // <Landing/>
      <>
        <Hero/>
        <CardCarousel
        speed={500}
        direction="left"
      />
      </>
    
  );
}
