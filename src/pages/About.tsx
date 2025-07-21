
import { Calendar, Users, Target, Heart, Award, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const timeline = [
    {
      year: "2018",
      title: "Foundation",
      description: "FlexFusion was founded with a vision to create an inclusive fitness community that combines multiple training disciplines under one roof."
    },
    {
      year: "2019",
      title: "Program Expansion",
      description: "Added specialized programs including CrossFit, Zumba, and MMA training with certified instructors."
    },
    {
      year: "2020",
      title: "Community Growth",
      description: "Reached 200+ active members and introduced online training sessions during the pandemic."
    },
    {
      year: "2022",
      title: "Facility Upgrade",
      description: "Expanded to a 5000 sq ft facility with state-of-the-art equipment and dedicated training areas."
    },
    {
      year: "2024",
      title: "Excellence Recognition",
      description: "Awarded 'Best Fitness Center' by Mumbai Fitness Association with 500+ happy members."
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Community",
      description: "We believe fitness is better together. Our supportive community motivates and inspires each member to reach their goals."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do - from our training programs to our member experience."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our passion for fitness and helping others drives us to create transformative experiences for our members."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We continuously evolve our programs and facilities to offer the latest and most effective fitness solutions."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Head CrossFit Trainer",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop&crop=face",
      speciality: "CrossFit Level 3, Olympic Lifting"
    },
    {
      name: "Miguel Rodriguez",
      role: "MMA Instructor",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300&h=300&fit=crop&crop=face",
      speciality: "Former Pro Fighter, BJJ Black Belt"
    },
    {
      name: "Isabella Martinez",
      role: "Zumba Instructor",
      image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=300&h=300&fit=crop&crop=face",
      speciality: "Dance Choreographer, Fitness Specialist"
    },
    {
      name: "Alex Thompson",
      role: "Strength & Conditioning Coach",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face",
      speciality: "CSCS Certified, Sports Performance"
    },
    {
      name: "Dr. Amit Patel",
      role: "Fitness Director",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      speciality: "Exercise Science PhD, Nutrition Expert"
    },
    {
      name: "Priya Gupta",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      speciality: "Business Operations, Member Experience"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop"
            alt="About FlexFusion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block text-foreground">About</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                FlexFusion
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transforming lives through fitness since 2018. We're more than a gym - we're a community dedicated to helping you achieve your best self.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class fitness programs and create a supportive community where every member can achieve their personal best, regardless of their starting point or fitness level.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be Mumbai's leading fitness destination, recognized for our innovative programs, exceptional trainers, and transformative member experiences that inspire lasting lifestyle changes.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2018 by fitness enthusiasts who believed that exercise should be enjoyable, effective, and accessible to everyone. Today, we're proud to serve 500+ members across multiple disciplines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a fitness community leader - here's how we've grown.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <Card className="hover:shadow-card transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <CardTitle className="text-xl">{item.year}</CardTitle>
                      </div>
                      <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our community culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of fitness professionals is dedicated to helping you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{member.speciality}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Facilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art equipment and dedicated spaces for every type of training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden group hover:shadow-card transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop"
                  alt="CrossFit Area"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">CrossFit Zone</h3>
                <p className="text-muted-foreground">Dedicated space with Olympic lifting platforms and functional training equipment.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-card transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
                  alt="Dance Studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dance Studio</h3>
                <p className="text-muted-foreground">Spacious mirrored studio perfect for Zumba and dance fitness classes.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-card transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=300&fit=crop"
                  alt="MMA Training Area"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">MMA Training Area</h3>
                <p className="text-muted-foreground">Professional mats and equipment for martial arts and self-defense training.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
