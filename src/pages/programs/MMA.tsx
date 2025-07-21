
import ProgramDetailLayout from "@/components/ProgramDetailLayout";
import ScheduleTable from "@/components/ScheduleTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Target, Zap, Play } from "lucide-react";

const MMA = () => {
  const benefits = [
    "Self-Defense Skills",
    "Mental Toughness",
    "Improved Discipline",
    "Full Body Strength",
    "Stress Relief",
    "Confidence Building"
  ];

  const schedule = [
    { time: "7:00 AM", day: "Monday", trainer: "Miguel Rodriguez", level: "Beginner" as const, duration: "90 min" },
    { time: "8:00 PM", day: "Monday", trainer: "Miguel Rodriguez", level: "Advanced" as const, duration: "120 min" },
    { time: "7:00 AM", day: "Tuesday", trainer: "Miguel Rodriguez", level: "Intermediate" as const, duration: "90 min" },
    { time: "8:00 PM", day: "Tuesday", trainer: "Miguel Rodriguez", level: "Beginner" as const, duration: "90 min" },
    { time: "7:00 AM", day: "Wednesday", trainer: "Miguel Rodriguez", level: "Advanced" as const, duration: "120 min" },
    { time: "8:00 PM", day: "Wednesday", trainer: "Miguel Rodriguez", level: "Intermediate" as const, duration: "90 min" },
    { time: "7:00 AM", day: "Thursday", trainer: "Miguel Rodriguez", level: "Beginner" as const, duration: "90 min" },
    { time: "8:00 PM", day: "Thursday", trainer: "Miguel Rodriguez", level: "Advanced" as const, duration: "120 min" },
    { time: "7:00 AM", day: "Friday", trainer: "Miguel Rodriguez", level: "Intermediate" as const, duration: "90 min" },
    { time: "8:00 PM", day: "Friday", trainer: "Miguel Rodriguez", level: "Advanced" as const, duration: "120 min" },
    { time: "11:00 AM", day: "Saturday", trainer: "Miguel Rodriguez", level: "Beginner" as const, duration: "90 min" },
    { time: "2:00 PM", day: "Saturday", trainer: "Miguel Rodriguez", level: "Intermediate" as const, duration: "90 min" },
  ];

  const trainer = {
    name: "Miguel Rodriguez",
    specialty: "MMA & Brazilian Jiu-Jitsu Instructor",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300&h=300&fit=crop&crop=face",
    experience: "12 years",
    achievements: "Former Professional MMA Fighter, BJJ Black Belt"
  };

  return (
    <ProgramDetailLayout
      title="MMA"
      subtitle="Training"
      description="Master the art of mixed martial arts with comprehensive training in striking, grappling, and self-defense techniques from experienced fighters."
      benefits={benefits}
      heroImage="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1200&h=600&fit=crop"
      ctaText="Train MMA Today"
      ctaColor="hover:shadow-glow"
    >
      <ScheduleTable schedule={schedule} title="MMA Training Schedule" />
      
      {/* Featured Trainer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Train with a <span className="bg-gradient-primary bg-clip-text text-transparent">Pro Fighter</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn from someone who has been in the cage and knows what it takes to excel in martial arts.
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
                    <Shield className="w-5 h-5 mr-2 text-destructive" />
                    {trainer.experience}
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-destructive" />
                    Professional
                  </div>
                </div>
                <p className="text-destructive font-medium">{trainer.achievements}</p>
                <p className="text-muted-foreground">
                  "MMA taught me discipline, respect, and mental toughness. My mission is to pass these values to every student while teaching practical self-defense and fitness."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              See MMA Training in <span className="bg-gradient-primary bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a glimpse of our training sessions and the techniques you'll learn.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=450&fit=crop"
                alt="MMA Training Session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Button variant="hero" size="lg" className="group-hover:scale-110 transition-transform duration-300">
                  <Play className="mr-2 h-6 w-6" />
                  Watch Training Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Disciplines */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Master Multiple <span className="bg-gradient-primary bg-clip-text text-transparent">Disciplines</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive MMA program covers all aspects of mixed martial arts training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-destructive" />
                </div>
                <CardTitle>Striking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Master boxing, Muay Thai, and kickboxing techniques for effective stand-up fighting.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle>Grappling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn Brazilian Jiu-Jitsu, wrestling, and submission techniques for ground fighting.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>Self-Defense</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Practical self-defense techniques for real-world situations and personal safety.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your <span className="bg-gradient-primary bg-clip-text text-transparent">Warrior Journey?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our MMA community and develop the skills, discipline, and confidence that will serve you inside and outside the gym.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Shield className="mr-2 h-5 w-5" />
              Begin Training
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

export default MMA;
