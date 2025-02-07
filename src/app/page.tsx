import Blog from "@/components/Blog";
import FollowUs from "@/components/FollowUs";
import HeroSection from "@/components/HeroSection";
import NewArriwals from "@/components/NewArriwals";
import { SanityProduct } from "@/components/SanityProductDisplay/page";
import Tables from "@/components/Tables";

export default function Home() {
  return (
    <div>
        <HeroSection/>
        <Tables/>
        <SanityProduct/>
        <NewArriwals/>
        <Blog/>
        <FollowUs/>
    </div>
  );
}