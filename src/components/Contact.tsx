import { MapPin, Phone, Mail, Clock } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contact Us</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">Get in touch for inquiries</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-background rounded-xl">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">above Blackberry Showroom, Gaffur Colony, Chandrapur, Udit Nagar, Rourkela, Odisha 769012</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-xl">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground">+91 82603 72068</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-xl">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">jomhatribalcuisine@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-xl">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                <p className="text-muted-foreground">All Day 11AM - 10PM

              </p>
              </div>
            </div>
          </div>

          <div className="relative w-full" style={{
          paddingBottom: '66.67%'
        }}>
            <iframe className="absolute top-0 left-0 w-full h-full rounded-xl" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=600&height=400&hl=en&q=jomha&t=&z=14&ie=UTF8&iwloc=B&output=embed" title="Restaurant Location Map" />
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;