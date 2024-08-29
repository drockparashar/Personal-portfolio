// import { Education } from "@/components/component/education";

import About from "@/components/component/about";
import { Hero } from "@/components/component/hero";
import CardCarousel from "@/components/component/projectSection";

export default function Home() {
  return (
    
      // <Landing/>
      <>
        <Hero/>
        <About/>
        <CardCarousel
        speed={500}
        direction="left"
      />
      </>
    
  );
}
