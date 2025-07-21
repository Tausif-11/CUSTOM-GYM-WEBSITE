
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface ProgramDetailLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  heroImage: string;
  ctaText: string;
  ctaColor: string;
  children?: ReactNode;
}

const ProgramDetailLayout = ({
  title,
  subtitle,
  description,
  benefits,
  heroImage,
  ctaText,
  ctaColor,
  children
}: ProgramDetailLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block text-foreground">{title}</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {subtitle}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {description}
            </p>

            <Button 
              variant="hero" 
              size="lg" 
              className={`text-lg px-8 py-6 ${ctaColor}`}
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">{title}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the amazing benefits that make this program perfect for your fitness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <CardTitle className="text-lg">{benefit}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content */}
      {children}

      <Footer />
    </div>
  );
};

export default ProgramDetailLayout;
