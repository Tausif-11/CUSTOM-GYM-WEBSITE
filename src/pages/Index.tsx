import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Trainers from "@/components/Trainers";
import Membership from "@/components/Membership";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Programs />
      <Trainers />
      <Membership />
      <Footer />
    </div>
  );
};

export default Index;
