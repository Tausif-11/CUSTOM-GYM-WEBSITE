
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Trainers from "@/components/Trainers";
import Testimonials from "@/components/Testimonials";
import Membership from "@/components/Membership";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Programs />
      <Trainers />
      <Testimonials />
      <Membership />
      <Footer />
    </div>
  );
};

export default Index;
