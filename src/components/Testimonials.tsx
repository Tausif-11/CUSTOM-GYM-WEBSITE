
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonialsData = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1494790108755-2616b85b1e15?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "FlexFusion transformed my fitness journey completely! The CrossFit program pushed me beyond my limits and the trainers are incredibly supportive.",
    program: "CrossFit"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The MMA training here is world-class. Miguel's expertise and the facilities have helped me develop both physical and mental strength.",
    program: "MMA"
  },
  {
    id: 3,
    name: "Anita Patel",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Zumba classes are so much fun! Isabella makes every session energetic and I've lost 15kg while having the time of my life.",
    program: "Zumba"
  },
  {
    id: 4,
    name: "Vikram Singh",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Best gym membership I've ever had! The quarterly plan is perfect value and the community here is amazing.",
    program: "General Fitness"
  },
  {
    id: 5,
    name: "Meera Reddy",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The trainers are knowledgeable and the equipment is top-notch. I've achieved my fitness goals faster than I ever imagined.",
    program: "CrossFit"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-accent fill-current' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Members Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing community has to say about their transformation journey.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-primary/20"
                        />
                        <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                        <div className="flex justify-center mb-2">
                          {renderStars(testimonial.rating)}
                        </div>
                        <span className="text-sm text-primary font-medium">{testimonial.program}</span>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
