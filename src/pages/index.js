import CompanyListSection from "@/components/section/CompanyListSection";
import HeroSection from "@/components/section/HeroSection";
import WhyWaxoSection from "@/components/section/WhyWaxoSection";

export default function Home() {
  return (
    <section className="max-w-7xl w-full mx-auto flex flex-col gap-y-12 py-12 px-8">
      <HeroSection />
      <WhyWaxoSection />
      <hr />
      <CompanyListSection />
    </section>
  );
}
