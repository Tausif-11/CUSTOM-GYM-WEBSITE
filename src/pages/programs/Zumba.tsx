
import ProgramDetailLayout from "@/components/ProgramDetailLayout";
import ScheduleTable from "@/components/ScheduleTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Music, Smile } from "lucide-react";

const Zumba = () => {
  const benefits = [
    "Fun Dance Workouts",
    "Calorie Burning",
    "Improved Coordination",
    "Stress Relief",
    "Social Connection",
    "Full Body Cardio"
  ];

  const schedule = [
    { time: "9:00 AM", day: "Monday", trainer: "Isabella Martinez", level: "Beginner" as const, duration: "45 min" },
    { time: "6:30 PM", day: "Monday", trainer: "Isabella Martinez", level: "Intermediate" as const, duration: "60 min" },
    { time: "9:00 AM", day: "Tuesday", trainer: "Isabella Martinez", level: "Advanced" as const, duration: "60 min" },
    { time: "6:30 PM", day: "Tuesday", trainer: "Isabella Martinez", level: "Beginner" as const, duration: "45 min" },
    { time: "9:00 AM", day: "Wednesday", trainer: "Isabella Martinez", level: "Intermediate" as const, duration: "60 min" },
    { time: "6:30 PM", day: "Wednesday", trainer: "Isabella Martinez", level: "Advanced" as const, duration: "60 min" },
    { time: "9:00 AM", day: "Thursday", trainer: "Isabella Martinez", level: "Beginner" as const, duration: "45 min" },
    { time: "6:30 PM", day: "Thursday", trainer: "Isabella Martinez", level: "Intermediate" as const, duration: "60 min" },
    { time: "9:00 AM", day: "Friday", trainer: "Isabella Martinez", level: "Advanced" as const, duration: "60 min" },
    { time: "6:30 PM", day: "Friday", trainer: "Isabella Martinez", level: "Beginner" as const, duration: "45 min" },
    { time: "10:00 AM", day: "Saturday", trainer: "Isabella Martinez", level: "Intermediate" as const, duration: "60 min" },
    { time: "11:30 AM", day: "Saturday", trainer: "Isabella Martinez", level: "Advanced" as const, duration: "60 min" },
  ];

  const trainer = {
    name: "Isabella Martinez",
    specialty: "Zumba Instructor & Dance Choreographer",
    image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=300&h=300&fit=crop&crop=face",
    experience: "5 years",
    achievements: "Licensed Zumba Instructor, Dance Background"
  };

  return (
    <ProgramDetailLayout
      title="Zumba"
      subtitle="Dance Fitness"
      description="Dance your way to fitness with high-energy Latin-inspired workouts that combine fun choreography with effective calorie burning."
      benefits={benefits}
      heroImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop"
      ctaText="Join Zumba Now"
      ctaColor="hover:shadow-glow"
    >
      <ScheduleTable schedule={schedule} title="Zumba Class Schedule" />
      
      {/* Featured Trainer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Meet Your <span className="bg-gradient-primary bg-clip-text text-transparent">Zumba Instructor</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our passionate instructor will make every session energetic, fun, and effective.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardHeader className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-3xl mb-2">{trainer.name}</CardTitle>
                <p className="text-primary font-medium text-lg">{trainer.specialty}</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-6 text-muted-foreground">
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-accent" />
                    {trainer.experience}
                  </div>
                  <div className="flex items-center">
                    <Music className="w-5 h-5 mr-2 text-accent" />
                    Licensed
                  </div>
                </div>
                <p className="text-accent font-medium">{trainer.achievements}</p>
                <p className="text-muted-foreground">
                  "I believe fitness should be fun! My goal is to create an environment where everyone feels confident to move, dance, and sweat while having the time of their lives."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Zumba Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why <span className="bg-gradient-primary bg-clip-text text-transparent">Zumba</span> Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover why millions of people worldwide have fallen in love with Zumba fitness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Smile className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>It's Fun!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Forget boring workouts! Zumba feels like a party where you happen to burn calories.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Effective Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Burn 300-900 calories per class while improving cardiovascular health and coordination.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Music className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle>For Everyone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No dance experience needed! All fitness levels welcome with modifications for everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Dance Your Way to <span className="bg-gradient-primary bg-clip-text text-transparent">Fitness?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our vibrant Zumba community and discover how fun fitness can be. Your first class is free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Music className="mr-2 h-5 w-5" />
              Start Dancing Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Try Free Class
            </Button>
          </div>
        </div>
      </section>
    </ProgramDetailLayout>
  );
};

export default Zumba;
