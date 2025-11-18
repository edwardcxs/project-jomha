const guests = [
  {
    name: "Maria Santos",
    title: "Food Critic",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "An acclaimed food critic with a passion for indigenous cuisines, Maria has featured our restaurant in multiple international publications, praising the preservation of tribal culinary heritage."
  },
  {
    name: "David Kim",
    title: "Travel Writer",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    description: "Award-winning travel journalist who has documented authentic culinary experiences across remote tribal communities worldwide, featuring our restaurant as a beacon of cultural preservation."
  }
];

const HonoredGuests = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Special Honored Guests</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Honored to host distinguished visitors who appreciate authentic tribal cuisine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {guests.map((guest, index) => (
            <div 
              key={index} 
              className="text-center group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto ring-4 ring-muted group-hover:ring-primary transition-all duration-300">
                <img 
                  src={guest.image} 
                  alt={guest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h5 className="text-lg font-semibold text-foreground mb-1">{guest.name}</h5>
              <p className="text-sm text-muted-foreground mb-3">{guest.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed px-4">{guest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonoredGuests;
