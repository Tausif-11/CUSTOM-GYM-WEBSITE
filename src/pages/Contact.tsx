
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Fitness Street", "Mumbai, Maharashtra 400001", "India"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211", "Mon-Sun: 6:00 AM - 11:00 PM"],
      color: "text-accent"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@flexfusion.gym", "support@flexfusion.gym", "We reply within 24 hours"],
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: ["Monday - Friday: 6:00 AM - 11:00 PM", "Saturday - Sunday: 7:00 AM - 10:00 PM", "Holidays: 8:00 AM - 8:00 PM"],
      color: "text-primary"
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
            alt="Contact FlexFusion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block text-foreground">Get In</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to start your fitness journey? We'd love to hear from you. Contact us today and let's make it happen together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-full bg-muted/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us more about your fitness goals and how we can help you achieve them..."
                      />
                    </div>
                    
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Find Us</CardTitle>
                  <p className="text-muted-foreground">
                    Located in the heart of Mumbai, easily accessible by public transport.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                      <p className="text-muted-foreground">
                        Google Maps integration coming soon
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Follow Us</CardTitle>
                  <p className="text-muted-foreground">
                    Stay connected with our fitness community on social media.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group">
                      <Facebook className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors group">
                      <Instagram className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors group">
                      <Twitter className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-destructive/10 hover:bg-destructive/20 transition-colors group">
                      <Youtube className="w-6 h-6 text-destructive group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Call us now</p>
                      <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email support</p>
                      <p className="text-sm text-muted-foreground">info@flexfusion.gym</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Schedule a Visit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
