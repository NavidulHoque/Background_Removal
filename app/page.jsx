import BgSlider from "@/components/home/BgSlider";
import Hero from "@/components/home/hero/Hero";
import Reviews from "@/components/home/Reviews";
import Steps from "@/components/home/Steps";
import TryNow from "@/components/home/TryNow";


export default function Home() {
  return (
    <div>
      
      <Hero />
      <Steps />
      <BgSlider />
      <Reviews />
      <TryNow />
      
    </div>
  );
}
