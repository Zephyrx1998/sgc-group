import chairmanPhoto from "@/assets/chairman.png";

const Chairman = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8 text-center">
            Message from the Chairman
          </h1>

          <div className="bg-secondary/50 rounded-lg p-8 md:p-12 shadow-elegant">
            <div className="flex flex-col items-center mb-8">
              <img 
                src={chairmanPhoto} 
                alt="Sambit Rout - Chairman of SGC Group" 
                className="w-64 h-64 object-cover rounded-lg shadow-card"
              />
              <h2 className="mt-4 text-2xl font-bold text-primary">Sambit Rout</h2>
              <p className="text-muted-foreground text-sm">Chairman, SGC Group</p>
            </div>

            <blockquote className="text-center space-y-6">
              <p className="text-2xl md:text-3xl font-serif italic text-primary leading-relaxed">
                "At SGC Group, we envision an India where business drives progress — not just profit. Every brand we build reflects our belief in innovation, people, and national growth."
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our journey is not merely about establishing businesses across diverse sectors. It is about creating ecosystems that empower communities, foster innovation, and contribute to India's emergence as a global economic powerhouse.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                From the food on your table to the technology defending our borders, from the clothes you wear to the education shaping young minds — SGC Group is committed to excellence in every sphere we operate.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                As we continue to grow and diversify, our core values remain unchanged: integrity, innovation, and impact. We are building not just for today, but for generations to come.
              </p>

              <div className="pt-8">
                <div className="text-2xl font-bold text-primary">Chairman</div>
                <div className="text-lg text-accent font-medium">SGC Group</div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chairman;
