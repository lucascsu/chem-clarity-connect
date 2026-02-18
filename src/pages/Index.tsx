import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import VideoSection from "@/components/VideoSection";
import CredibilitySection from "@/components/CredibilitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <VideoSection />
      <CredibilitySection />
      <TestimonialsSection />
      <OfferSection />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Professor de Química · Aulas Particulares Online
          </p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
