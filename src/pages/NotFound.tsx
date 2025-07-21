
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Animated Dumbbell Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-6 animate-pulse">
            <Dumbbell className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl sm:text-9xl font-bold mb-4">
          <span className="bg-gradient-primary bg-clip-text text-transparent">404</span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Oops! Lost Your Way to <span className="text-primary">Fitness?</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Don't worry - even the best athletes sometimes take a wrong turn. Let's get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild variant="hero" size="lg" className="text-lg px-8 py-6">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
            <Link to="/programs/crossfit">
              <Search className="mr-2 h-5 w-5" />
              Explore Programs
            </Link>
          </Button>
        </div>

        {/* Navigation Suggestions */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4">Popular Destinations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link 
              to="/programs/crossfit" 
              className="block p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-all duration-200 border border-border/50 hover:border-primary/30"
            >
              <h4 className="font-medium text-primary">CrossFit Training</h4>
              <p className="text-sm text-muted-foreground">High-intensity functional fitness</p>
            </Link>
            
            <Link 
              to="/programs/zumba" 
              className="block p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-all duration-200 border border-border/50 hover:border-primary/30"
            >
              <h4 className="font-medium text-primary">Zumba Classes</h4>
              <p className="text-sm text-muted-foreground">Dance your way to fitness</p>
            </Link>
            
            <Link 
              to="/programs/mma" 
              className="block p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-all duration-200 border border-border/50 hover:border-primary/30"
            >
              <h4 className="font-medium text-primary">MMA Training</h4>
              <p className="text-sm text-muted-foreground">Mixed martial arts programs</p>
            </Link>
            
            <Link 
              to="/about" 
              className="block p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-all duration-200 border border-border/50 hover:border-primary/30"
            >
              <h4 className="font-medium text-primary">About Us</h4>
              <p className="text-sm text-muted-foreground">Learn about our story</p>
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Still can't find what you're looking for?{" "}
            <Link to="/contact" className="text-primary hover:underline">
              Contact us
            </Link>{" "}
            and we'll help you out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
