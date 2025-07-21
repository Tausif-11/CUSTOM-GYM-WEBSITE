
import ProgramDetailLayout from "@/components/ProgramDetailLayout";
import ScheduleTable from "@/components/ScheduleTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Dumbbell, Target, Users } from "lucide-react";

const CrossFit = () => {
  const benefits = [
    "Functional Strength Training",
    "High-Intensity Workouts",
    "Community Support",
    "Improved Endurance",
    "Olympic Lifting Techniques",
    "Metabolic Conditioning"
  ];

  const schedule = [
    { time: "6:00 AM", day: "Monday", trainer: "Sarah Johnson", level: "Intermediate" as const, duration: "60 min" },
    { time: "7:00 PM", day: "Monday", trainer: "Alex Thompson", level: "Advanced" as const, duration: "75 min" },
    { time: "6:00 AM", day: "Tuesday", trainer: "Sarah Johnson", level: "Beginner" as const, duration: "45 min" },
    { time: "7:00 PM", day: "Tuesday", trainer: "Alex Thompson", level: "Intermediate" as const, duration: "60 min" },
    { time: "6:00 AM", day: "Wednesday", trainer: "Sarah Johnson", level: "Advanced" as const, duration: "75 min" },
    { time: "7:00 PM", day: "Wednesday", trainer: "Alex Thompson", level: "Intermediate" as const, duration: "60 min" },
    { time: "6:00 AM", day: "Thursday", trainer: "Sarah Johnson", level: "Beginner" as const, duration: "45 min" },
    { time: "7:00 PM", day: "Thursday", trainer: "Alex Thompson", level: "Advanced" as const, duration: "75 min" },
    { time: "6:00 AM", day: "Friday", trainer: "Sarah Johnson", level: "Intermediate" as const, duration: "60 min" },
    { time: "7:00 PM", day: "Friday", trainer: "Alex Thompson", level: "Advanced" as const, duration: "75 min" },
    { time: "9:00 AM", day: "Saturday", trainer: "Sarah Johnson", level: "Beginner" as const, duration: "45 min" },
    { time: "10:30 AM", day: "Saturday", trainer: "Alex Thompson", level: "Intermediate" as const, duration: "60 min" },
  ];

  const trainers = [
    {
      name: "Sarah Johnson",
      specialty: "CrossFit Level 3 Trainer",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop&crop=face",
      experience: "8 years",
      achievements: "Regional CrossFit Champion"
    },
    {
      name: "Alex Thompson",
      specialty: "Olympic Lifting Specialist",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face",
      experience: "6 years",
      achievements: "Certified Strength & Conditioning Specialist"
    }
  ];

  return (
    <ProgramDetailLayout
      title="CrossFit"
      subtitle="Training"
      description="Push your limits with high-intensity functional fitness that builds strength, endurance, and mental toughness through constantly varied workouts."
      benefits={benefits}
      heroImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop"
      ctaText="Join CrossFit Now"
      ctaColor="hover:shadow-glow"
    >
      <ScheduleTable schedule={schedule} title="CrossFit Class Schedule" />
      
      {/* Featured Trainers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Meet Your <span className="bg-gradient-primary bg-clip-text text-transparent">CrossFit Coaches</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced trainers will guide you through every workout with expertise and motivation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trainers.map((trainer, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl mb-2">{trainer.name}</CardTitle>
                  <p className="text-primary font-medium">{trainer.specialty}</p>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      {trainer.experience}
                    </div>
                    <div className="flex items-center">
                      <Dumbbell className="w-4 h-4 mr-1" />
                      Certified
                    </div>
                  </div>
                  <p className="text-sm text-accent">{trainer.achievements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your <span className="bg-gradient-primary bg-clip-text text-transparent">CrossFit Journey?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of dedicated athletes and transform your fitness with the most effective training methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Users className="mr-2 h-5 w-5" />
              Join Our Community
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

export default CrossFit;
