import HeroSection from "@/components/HeroSection";
import FeaturedTools from "@/components/FeaturedTools";
import PopularTools from "@/components/PopularTools";
import PremiumToolsPreview from "@/components/PremiumToolsPreview";
import TrendingBlogs from "@/components/TrendingBlogs";
import LatestAINews from "@/components/LatestAINews";
import AdBlock from "@/components/AdBlock";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedTools />
      <AdBlock />
      <PopularTools />
      <PremiumToolsPreview />
      <TrendingBlogs />
      <LatestAINews />
      <AdBlock />
    </main>
  );
}
