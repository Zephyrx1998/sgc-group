import { Lightbulb, Target, Users, Leaf, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation with Integrity",
    description: "We pioneer new solutions while maintaining the highest ethical standards in everything we do.",
  },
  {
    icon: Target,
    title: "Excellence in Execution",
    description: "Our commitment to quality and precision drives us to deliver exceptional results across all sectors.",
  },
  {
    icon: Users,
    title: "People First",
    description: "We believe in empowering our employees, partners, and communities to achieve their full potential.",
  },
  {
    icon: Leaf,
    title: "Sustainability & Responsibility",
    description: "Building businesses that create long-term value while preserving our environment for future generations.",
  },
  {
    icon: TrendingUp,
    title: "Nation-Building",
    description: "Contributing to India's growth story by creating jobs, fostering innovation, and driving economic development.",
  },
];

const Vision = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-12 text-center">
            Vision & Values
          </h1>

          <section className="mb-16 gradient-hero text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-xl leading-relaxed">
              To be India's most trusted and forward-looking conglomerate, fostering innovation and impact across every sector we touch. We aspire to create an ecosystem where businesses thrive, communities prosper, and the nation grows stronger.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Core Values</h2>
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="hover-lift shadow-card">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Vision;
