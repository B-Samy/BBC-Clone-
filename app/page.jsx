import HeroSection from '@/components/home/HeroSection';
import NewsByCategorySection from '@/components/home/NewsByCategorySection';
import MostReadSection from '@/components/home/MostReadSection';
import LiveNewsSection from '@/components/home/LiveNewsSection';
import WeatherWidget from '@/components/widgets/WeatherWidget';

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        <div className="lg:col-span-8">
          <HeroSection />
          <LiveNewsSection />
          <NewsByCategorySection category="World" />
          <NewsByCategorySection category="Business" />
          <NewsByCategorySection category="Technology" />
        </div>
        
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <WeatherWidget />
            <MostReadSection />
          </div>
        </div>
      </div>
    </div>
  );
}