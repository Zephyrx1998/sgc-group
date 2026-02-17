import { Link } from "react-router-dom";
import { ArrowRight, Building2, Utensils, Shirt, Home as HomeIcon, GraduationCap, Truck, Car, Sprout, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";

const industries = [
  { name: "Business Services", icon: Building2, path: "/industries/business-services", entity: "WPIX MEDIA" },
  { name: "Food & Beverage", icon: Utensils, path: "/industries/food-beverage", entity: "HOTFOOD CORP" },
  { name: "Clothing & Apparel", icon: Shirt, path: "/industries/clothing-apparel", entity: "SGCFASHION" },
  { name: "Real Estate", icon: HomeIcon, path: "/industries/real-estate", entity: "SGC-ESTATE" },
  { name: "Education", icon: GraduationCap, path: "/industries/education", entity: "SGC-EDU" },
  { name: "Logistics & Transportation", icon: Truck, path: "/industries/logistics", entity: "SGCL&T" },
  { name: "Automobile", icon: Car, path: "/industries/automobile", entity: "NEX9 AUTO" },
  { name: "Agriculture", icon: Sprout, path: "/industries/agriculture", entity: "SGCFARM" },
  { name: "Defence", icon: Shield, path: "/industries/defence", entity: "SGC DEFENCE" },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="SGC Group Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Empowering Industries.<br />
            <span className="text-accent">Inspiring Innovation.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in">
            SGC Group is a diversified conglomerate shaping industries through innovation, trust, and excellence.
          </p>
          <Link to="/industries">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 hover-glow font-semibold px-8 py-6 text-lg animate-fade-in">
              Explore Our Industries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Industries</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building excellence across diverse sectors with innovation at our core
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Link key={industry.name} to={industry.path}>
                <Card className="hover-lift cursor-pointer h-full border-2 hover:border-accent transition-smooth group">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-accent/20 transition-smooth">
                      <industry.icon className="h-8 w-8 text-primary group-hover:text-accent transition-smooth" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{industry.entity}</p>
                    <div className="flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 transition-smooth">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">9</div>
              <div className="text-lg text-white/80">Industries</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">12</div>
              <div className="text-lg text-white/80">Entities</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">30+</div>
              <div className="text-lg text-white/80">Brands</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">1</div>
              <div className="text-lg text-white/80">Vision</div>
            </div>
          </div>
          <p className="text-center text-xl mt-12 text-white/90 max-w-3xl mx-auto">
            From food to defence, fashion to technology — SGC Group is building India's next generation of enterprises.
          </p>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <blockquote className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-4 italic">
              "We don't just build businesses —<br />
              <span className="text-accent">we build ecosystems of progress."</span>
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;
