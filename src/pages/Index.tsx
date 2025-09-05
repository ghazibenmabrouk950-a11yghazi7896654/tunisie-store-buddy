import HeroSection from "@/components/HeroSection";
import ProcessSteps from "@/components/ProcessSteps";
import VideoSection from "@/components/VideoSection";
import FAQ from "@/components/FAQ";
import OrderForm from "@/components/OrderForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProcessSteps />
      <VideoSection />
      <FAQ />
      <OrderForm />
    </div>
  );
};

export default Index;
