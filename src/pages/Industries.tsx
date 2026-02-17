import { Link } from "react-router-dom";
import { Building2, Utensils, Shirt, Home as HomeIcon, GraduationCap, Truck, Car, Sprout, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  { 
    name: "Business Services", 
    icon: Building2, 
    path: "/industries/business-services", 
    entity: "WPIX MEDIA",
    description: "Comprehensive business and media solutions"
  },
  { 
    name: "Food & Beverage", 
    icon: Utensils, 
    path: "/industries/food-beverage", 
    entity: "HOTFOOD CORP & SGCFOODLINE",
    description: "Quality food products and services"
  },
  { 
    name: "Clothing & Apparel", 
    icon: Shirt, 
    path: "/industries/clothing-apparel", 
    entity: "SGCFASHION",
    description: "Fashion brands for every lifestyle"
  },
  { 
    name: "Real Estate", 
    icon: HomeIcon, 
    path: "/industries/real-estate", 
    entity: "SGC-ESTATE",
    description: "Building spaces for the future"
  },
  { 
    name: "Education", 
    icon: GraduationCap, 
    path: "/industries/education", 
    entity: "SGC-EDU",
    description: "Empowering minds, shaping futures"
  },
  { 
    name: "Logistics & Transportation", 
    icon: Truck, 
    path: "/industries/logistics", 
    entity: "SGCL&T",
    description: "Moving goods, connecting worlds"
  },
  { 
    name: "Automobile", 
    icon: Car, 
    path: "/industries/automobile", 
    entity: "NEX9 AUTO",
    description: "Driving the future of mobility"
  },
  { 
    name: "Agriculture", 
    icon: Sprout, 
    path: "/industries/agriculture", 
    entity: "SGCFARM",
    description: "Sustainable farming solutions"
  },
  { 
    name: "Defence", 
    icon: Shield, 
    path: "/industries/defence", 
    entity: "SGC DEFENCE",
    description: "Advanced defence technologies"
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Our Industries</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SGC Group operates across nine major industries, each driven by innovation and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Link key={industry.name} to={industry.path}>
              <Card className="hover-lift cursor-pointer h-full border-2 hover:border-accent transition-smooth group">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-accent/20 transition-smooth">
                    <industry.icon className="h-8 w-8 text-primary group-hover:text-accent transition-smooth" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">{industry.name}</h3>
                  <p className="text-sm font-medium text-accent mb-3">{industry.entity}</p>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <div className="flex items-center text-accent opacity-0 group-hover:opacity-100 transition-smooth">
                    <span className="text-sm font-medium">Explore Brands</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
