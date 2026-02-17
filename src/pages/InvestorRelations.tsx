import { FileText, Users, Briefcase, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const InvestorRelations = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8 text-center">
            Partner with SGC Group
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Join us in building India's next generation of enterprises
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="hover-lift shadow-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl text-primary">Investment Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Explore strategic investment opportunities across our diverse portfolio of industries and brands.
                </p>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Download Corporate Deck
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift shadow-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl text-primary">Vendor & Supplier Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Become a part of our supply chain and grow your business with SGC Group.
                </p>
                <Link to="/contact">
                  <Button variant="outline">Register Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-lift shadow-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl text-primary">Media & PR Enquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Connect with our media relations team for press releases and corporate updates.
                </p>
                <a href="mailto:media@sgcgroup.com">
                  <Button variant="outline">Contact Media Team</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="hover-lift shadow-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl text-primary">Careers & Collaborations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Join our team or explore partnership opportunities across our ventures.
                </p>
                <Link to="/contact">
                  <Button variant="outline">Get in Touch</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="gradient-hero text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-lg mb-6">
              Contact our investor relations team to explore opportunities
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorRelations;
