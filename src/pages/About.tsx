const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">About SGC Group</h1>
          
          <div className="space-y-8">
            <section>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded with a vision to empower Indian industries, SGC Group is a multi-dimensional conglomerate driving innovation and growth across diverse sectors. From food to defence, education to real estate, we are committed to building sustainable enterprises that shape the future.
              </p>
            </section>

            <section className="py-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Journey</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Foundation Years</h3>
                  <p className="text-muted-foreground">
                    Established with the vision of creating value across multiple industries, SGC Group began its journey by identifying key sectors crucial to India's growth.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Expansion Phase</h3>
                  <p className="text-muted-foreground">
                    Strategic acquisitions and organic growth led to the establishment of multiple entities across nine major industries, creating a robust portfolio of brands.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Present Day</h3>
                  <p className="text-muted-foreground">
                    Today, SGC Group manages 12 entities and over 30 brands, continuing to innovate and expand its footprint across India and beyond.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-8 gradient-hero text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-xl leading-relaxed">
                To be India's most trusted and forward-looking conglomerate, fostering innovation and impact across every sector we touch.
              </p>
            </section>

            <section className="py-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Building sustainable enterprises through excellence, ethics, and empowerment. We are committed to creating long-term value for our stakeholders while contributing to national growth and development.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
