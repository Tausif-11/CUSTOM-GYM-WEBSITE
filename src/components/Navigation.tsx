
import { useState } from "react";
import { Menu, X, Dumbbell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Membership", href: "#membership" },
  ];

  const programItems = [
    { label: "CrossFit", href: "/programs/crossfit" },
    { label: "Zumba", href: "/programs/zumba" },
    { label: "MMA", href: "/programs/mma" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              FlexFusion
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Programs Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setProgramsOpen(!programsOpen)}
              >
                Programs
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {programsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-border rounded-md shadow-lg">
                  {programItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
                      onClick={() => setProgramsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Programs Menu */}
            <div className="space-y-2">
              <div className="text-foreground font-medium">Programs</div>
              {programItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block pl-4 text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full">
                Sign In
              </Button>
              <Button variant="hero" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
