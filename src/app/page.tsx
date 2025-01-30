import Blog from "@/components/Blog";
import FollowUs from "@/components/FollowUs";
import HeroSection from "@/components/HeroSection";
import LatestProduct from "@/components/LatestProduct";
import NewArriwals from "@/components/NewArriwals";
import { SanityProduct } from "@/components/SanityProductDisplay/page";
import Tables from "@/components/Tables";

export default function Home() {
  return (
    <div>
        <HeroSection/>
        <Tables/>
        <LatestProduct/>
        <NewArriwals/>
        <SanityProduct/>
        <Blog/>
        <FollowUs/>
    </div>
  );
}