import { Star, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "CrossFit & HIIT",
      experience: "8 years",
      rating: 4.9,
      certifications: ["ACSM-CPT", "CrossFit L2"],
      bio: "Former Olympic athlete turned fitness coach, specializing in high-intensity training.",
      image: "https://images.unsplash.com/photo-1594736797933-d0782ba18ea0?w=400&h=400&fit=crop&crop=face",
      programs: ["CrossFit", "General Fitness"],
    },
    {
      id: 2,
      name: "Miguel Rodriguez",
      specialty: "MMA & Self Defense",
      experience: "12 years",
      rating: 4.8,
      certifications: ["MMA Pro", "Self Defense Inst."],
      bio: "Professional MMA fighter with extensive experience in multiple martial arts disciplines.",
      image: "https://images.unsplash.com/photo-1571019613540-996a69b2d8d9?w=400&h=400&fit=crop&crop=face",
      programs: ["MMA", "General Fitness"],
    },
    {
      id: 3,
      name: "Isabella Martinez",
      specialty: "Zumba & Dance Fitness",
      experience: "6 years",
      rating: 5.0,
      certifications: ["Zumba Instructor", "Dance Certified"],
      bio: "Professional dancer bringing joy and fitness together through energetic dance workouts.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop&crop=face",
      programs: ["Zumba", "General Fitness"],
    },
    {
      id: 4,
      name: "Alex Thompson",
      specialty: "Strength & Conditioning",
      experience: "10 years",
      rating: 4.9,
      certifications: ["CSCS", "NASM-CPT"],
      bio: "Strength coach focused on building functional fitness and athletic performance.",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=400&fit=crop&crop=face",
      programs: ["CrossFit", "General Fitness"],
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Expert Trainers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Train with certified professionals who are passionate about helping you achieve your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer) => (
            <Card key={trainer.id} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
              <CardContent className="p-0">
                {/* Trainer Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold">{trainer.rating}</span>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                    <p className="text-primary font-medium">{trainer.specialty}</p>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {trainer.bio}
                  </p>

                  {/* Experience and Certifications */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {trainer.experience} experience
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Award className="w-4 h-4 mr-2" />
                      {trainer.certifications.join(", ")}
                    </div>
                  </div>

                  {/* Programs */}
                  <div className="flex flex-wrap gap-2">
                    {trainer.programs.map((program) => (
                      <span
                        key={program}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {program}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    Book Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Trainers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Trainers;