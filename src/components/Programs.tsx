import { ArrowRight, Zap, Users, Target, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Programs = () => {
  const programs = [
    {
      id: "crossfit",
      title: "CrossFit",
      description: "High-intensity functional fitness that will push your limits and build incredible strength.",
      icon: Zap,
      features: ["HIIT Workouts", "Olympic Lifting", "Metabolic Conditioning", "Community Support"],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: "zumba",
      title: "Zumba",
      description: "Dance your way to fitness with high-energy Latin-inspired dance workouts.",
      icon: Users,
      features: ["Dance Cardio", "Latin Rhythms", "Full Body Workout", "Fun & Social"],
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      id: "mma",
      title: "MMA Training",
      description: "Mixed martial arts training for self-defense, discipline, and ultimate fitness.",
      icon: Target,
      features: ["Striking Techniques", "Grappling", "Self Defense", "Mental Toughness"],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      id: "general",
      title: "General Fitness",
      description: "Comprehensive fitness programs designed for all levels and goals.",
      icon: Flame,
      features: ["Strength Training", "Cardio", "Flexibility", "Personalized Plans"],
      color: "text-primary-glow",
      bgColor: "bg-primary-glow/10",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Program</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse range of fitness programs designed to meet your unique goals and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full ${program.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className={`h-8 w-8 ${program.color}`} />
                </div>
                <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                <CardDescription className="text-sm">
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full ${program.color.replace('text-', 'bg-')} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;