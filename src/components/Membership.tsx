import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Membership = () => {
  const plans = [
    {
      name: "Monthly",
      price: "₹999",
      period: "/month",
      description: "Perfect for trying out our services",
      features: [
        "Access to all equipment",
        "Group fitness classes",
        "Locker room access",
        "Mobile app access",
        "Basic nutrition guidance"
      ],
      popular: false,
      cta: "Start Monthly",
    },
    {
      name: "Quarterly",
      price: "₹2,499",
      period: "/3 months",
      description: "Great value for committed fitness enthusiasts",
      features: [
        "All Monthly features",
        "Personal training session (1x)",
        "Diet consultation",
        "Progress tracking",
        "Priority booking",
        "Guest pass (2x/month)"
      ],
      popular: true,
      cta: "Choose Quarterly",
    },
    {
      name: "Yearly",
      price: "₹8,499",
      period: "/year",
      description: "Best value for serious fitness goals",
      features: [
        "All Quarterly features",
        "Personal training sessions (4x)",
        "Custom workout plans",
        "Nutrition meal plans",
        "Body composition analysis",
        "VIP member events",
        "Unlimited guest passes"
      ],
      popular: false,
      cta: "Go Yearly",
    },
  ];

  return (
    <section id="membership" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Membership <span className="bg-gradient-primary bg-clip-text text-transparent">Plans</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect membership plan that fits your fitness journey and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative transition-all duration-300 hover:shadow-card ${
                plan.popular 
                  ? 'border-primary shadow-glow scale-105' 
                  : 'border-border/50 hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full mt-6"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include a 7-day free trial • No setup fees • Cancel anytime
          </p>
          <Button variant="ghost" className="text-primary">
            Compare all features →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Membership;