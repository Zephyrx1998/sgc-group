import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const industryData: Record<string, {
  name: string;
  entity: string;
  brands: { name: string; description: string }[];
}> = {
  "business-services": {
    name: "Business Services",
    entity: "WPIX MEDIA",
    brands: [
      { name: "7 Design Corp", description: "Creative design and branding solutions" },
      { name: "AVER", description: "Business consulting and strategy" },
      { name: "WCF", description: "Financial advisory services" },
      { name: "VYBE", description: "Digital marketing and communications" },
    ],
  },
  "food-beverage": {
    name: "Food & Beverage",
    entity: "HOTFOOD CORP & SGCFOODLINE",
    brands: [
      { name: "HOTFOOD CORP.", description: "Quick service restaurant chain" },
      { name: "SGC FOODLINE", description: "Premium organic food products" },
      { name: "HOTKNIFE", description: "Gourmet dining experiences" },
      
    ],
  },
  "clothing-apparel": {
    name: "Clothing & Apparel",
    entity: "SGCFASHION",
    brands: [
      { name: "Trendio", description: "Contemporary fashion for youth" },
      { name: "Kelly Louren", description: "Premium women's wear" },
      { name: "Axton Felix", description: "Luxury menswear collection" },
      { name: "Dharanam", description: "Traditional ethnic wear" },
    ],
  },
  "real-estate": {
    name: "Real Estate",
    entity: "SGC-ESTATE",
    brands: [
      { name: "Shednaway", description: "Premium residential and commercial spaces" },
      { name: "SGC Properties", description: "Real estate development and investment" },
      { name: "Urban Nest", description: "Modern urban living solutions" },
    ],
  },
  "education": {
    name: "Education",
    entity: "SGC-EDU",
    brands: [
      { name: "Gyaanam", description: "K-12 educational programs" },
      { name: "SGC School", description: "World-class schooling facilities" },
      { name: "SGC Robotics School", description: "Advanced STEM education" },
    ],
  },
  "logistics": {
    name: "Logistics & Transportation",
    entity: "SGCL&T",
    brands: [
      { name: "Nextrack", description: "Advanced logistics tracking solutions" },
      { name: "SGC Fleet", description: "Commercial transportation services" },
      { name: "Swift Move", description: "Express delivery solutions" },
    ],
  },
  "automobile": {
    name: "Automobile",
    entity: "NEX9 AUTO",
    brands: [
      { name: "Nex9 EV Mobility", description: "Electric vehicle solutions" },
      { name: "Artea", description: "Electric Scooter Segment" },
      { name: "Supervault", description: "Luxury Supercar Segment" },
    ],
  },
  "agriculture": {
    name: "Agriculture",
    entity: "SGCFARM",
    brands: [
      { name: "SGC Organics", description: "Organic farming and produce" },
      { name: "GreenHarvest", description: "Sustainable agriculture solutions" },
      { name: "FarmTech", description: "Agricultural technology services" },
    ],
  },
  "defence": {
    name: "Defence",
    entity: "SGC DEFENCE",
    brands: [
      { name: "Falcron", description: "Ornithopter Stealth Drone" },
      { name: "Predatrix", description: "UAV Attack Helicopter" },
      { name: "Aegis", description: "6x6 UGV" },
      { name: "Sentinel", description: "Gurkha RCWS" },
    ],
  },
};

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? industryData[slug] : null;

  if (!industry) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Industry Not Found</h1>
          <Link to="/industries">
            <Button>Back to Industries</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <Link to="/industries">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Industries
          </Button>
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">{industry.name}</h1>
          <p className="text-xl text-accent font-medium">{industry.entity}</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8">Our Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.brands.map((brand) => (
              <Card key={brand.name} className="hover-lift shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{brand.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{brand.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;
