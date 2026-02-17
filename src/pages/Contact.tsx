import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Get in touch with SGC Group
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-6">Corporate Office</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-primary">Address</p>
                        <p className="text-muted-foreground">
                          SGC Group Headquarters<br />
                          Corporate Tower, Business District<br />
                          Mumbai, Maharashtra 400001<br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-primary">Phone</p>
                        <p className="text-muted-foreground">+91 (022) 1234 5678</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-primary">Email</p>
                        <p className="text-muted-foreground">info@sgcgroup.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="gradient-hero text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="mb-2">Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" required />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" required />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Phone Number" />
                  </div>
                  <div>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Inquiry Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="investor">Investor Relations</SelectItem>
                        <SelectItem value="media">Media & PR</SelectItem>
                        <SelectItem value="business">Business Partnership</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      required
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
