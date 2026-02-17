import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const boardMembers = [
  {
    name: "Board Director",
    title: "Strategy & Operations",
    initials: "BD",
  },
  {
    name: "Board Director",
    title: "Finance & Investment",
    initials: "BD",
  },
  {
    name: "Board Director",
    title: "Technology & Innovation",
    initials: "BD",
  },
  {
    name: "Board Director",
    title: "Human Resources",
    initials: "BD",
  },
  {
    name: "Board Director",
    title: "Legal & Compliance",
    initials: "BD",
  },
  {
    name: "Board Director",
    title: "Marketing & Communications",
    initials: "BD",
  },
];

const Board = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Board of Directors</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our board comprises seasoned professionals with deep expertise across industries, guiding SGC Group towards sustained excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {boardMembers.map((member, index) => (
            <Card key={index} className="hover-lift shadow-card">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-muted-foreground font-medium">{member.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
