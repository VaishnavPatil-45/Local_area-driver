import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Car, Users, Phone, MapPin, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ride.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Car className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              LocalRide
            </span>
          </div>
          <div className="flex gap-4">
            <Link to="/request-ride">
              <Button variant="ghost">Request Ride</Button>
            </Link>
            <Link to="/driver">
              <Button variant="driver">Become a Driver</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Connect Directly with{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Local Drivers
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Skip the middleman. Get rides from trusted local drivers in your community with direct contact sharing.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/request-ride">
                  <Button variant="hero" size="lg" className="gap-2">
                    <Car className="w-5 h-5" />
                    Request a Ride
                  </Button>
                </Link>
                <Link to="/driver">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Users className="w-5 h-5" />
                    Join as Driver
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="Local ride sharing community"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose LocalRide?</h2>
            <p className="text-xl text-muted-foreground">
              Simple, direct, and community-focused ride sharing
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <Phone className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Direct Contact</h3>
              <p className="text-muted-foreground">
                Get driver's contact directly. Call or message them without any intermediary platform.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <MapPin className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Local Drivers</h3>
              <p className="text-muted-foreground">
                Connect with drivers from your local area who know the best routes and shortcuts.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <Clock className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Real-Time Updates</h3>
              <p className="text-muted-foreground">
                See available drivers instantly and get connected within seconds.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Safe & Verified</h3>
              <p className="text-muted-foreground">
                All drivers are verified members of your local community for your safety.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Community First</h3>
              <p className="text-muted-foreground">
                Support local drivers and build connections within your community.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <Car className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Pricing</h3>
              <p className="text-muted-foreground">
                Negotiate fares directly with drivers for fair, transparent pricing.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-2">For Riders</h3>
              </div>
              <div className="space-y-4 pl-0 md:pl-8">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <h4 className="font-semibold">Request a Ride</h4>
                    <p className="text-muted-foreground">Enter pickup and drop-off locations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <h4 className="font-semibold">View Available Drivers</h4>
                    <p className="text-muted-foreground">See nearby drivers and their details</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <h4 className="font-semibold">Connect Directly</h4>
                    <p className="text-muted-foreground">Call or message driver to confirm ride</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-2">For Drivers</h3>
              </div>
              <div className="space-y-4 pl-0 md:pl-8">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-semibold">Go Online</h4>
                    <p className="text-muted-foreground">Mark yourself available for rides</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-semibold">View Ride Requests</h4>
                    <p className="text-muted-foreground">See requests from nearby riders</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-semibold">Accept & Connect</h4>
                    <p className="text-muted-foreground">Accept rides and coordinate with riders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of riders and drivers today
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/request-ride">
              <Button variant="hero" size="lg" className="gap-2">
                <Car className="w-5 h-5" />
                Request Your First Ride
              </Button>
            </Link>
            <Link to="/driver">
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
              >
                <Users className="w-5 h-5" />
                Start Driving Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 LocalRide. Connecting communities, one ride at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
