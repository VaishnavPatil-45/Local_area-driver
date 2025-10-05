import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Car, MapPin, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Driver {
  id: number;
  name: string;
  phone: string;
  vehicle: string;
  rating: number;
  distance: string;
  availability: string;
}

const RequestRide = () => {
  const { toast } = useToast();
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [notes, setNotes] = useState("");
  const [showDrivers, setShowDrivers] = useState(false);

  // Mock drivers data
  const availableDrivers: Driver[] = [
    { id: 1, name: "Rajesh Kumar", phone: "+91 98765 43210", vehicle: "Honda City", rating: 4.8, distance: "0.5 km", availability: "Available now" },
    { id: 2, name: "Amit Sharma", phone: "+91 98765 43211", vehicle: "Toyota Innova", rating: 4.9, distance: "1.2 km", availability: "Available now" },
    { id: 3, name: "Priya Singh", phone: "+91 98765 43212", vehicle: "Maruti Swift", rating: 4.7, distance: "2.0 km", availability: "Available in 5 min" },
  ];

  const handleFindDrivers = () => {
    if (!pickup || !dropoff) {
      toast({
        title: "Missing Information",
        description: "Please enter both pickup and drop-off locations",
        variant: "destructive",
      });
      return;
    }
    setShowDrivers(true);
    toast({
      title: "Searching for drivers",
      description: "Finding available drivers near you...",
    });
  };

  const handleContactDriver = (driver: Driver, method: 'call' | 'message') => {
    if (method === 'call') {
      window.location.href = `tel:${driver.phone}`;
    } else {
      const message = encodeURIComponent(`Hi ${driver.name}, I need a ride from ${pickup} to ${dropoff}. ${notes ? 'Additional notes: ' + notes : ''}`);
      window.open(`https://wa.me/${driver.phone.replace(/\s/g, '')}?text=${message}`, '_blank');
    }
    toast({
      title: "Connecting to driver",
      description: `Opening ${method === 'call' ? 'phone' : 'WhatsApp'} to contact ${driver.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Car className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              LocalRide
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Request Form */}
          <Card className="p-6 border-2">
            <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="w-8 h-8 text-primary" />
              Request a Ride
            </h1>
            <div className="space-y-4">
              <div>
                <Label htmlFor="pickup">Pickup Location</Label>
                <Input
                  id="pickup"
                  placeholder="Enter pickup address"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="dropoff">Drop-off Location</Label>
                <Input
                  id="dropoff"
                  placeholder="Enter drop-off address"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any special requirements or landmarks?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1"
                />
              </div>
              <Button 
                onClick={handleFindDrivers} 
                className="w-full" 
                variant="hero" 
                size="lg"
              >
                Find Available Drivers
              </Button>
            </div>
          </Card>

          {/* Available Drivers */}
          {showDrivers && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Available Drivers Near You</h2>
              <div className="grid gap-4">
                {availableDrivers.map((driver) => (
                  <Card key={driver.id} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">{driver.name}</h3>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground">
                            ★ {driver.rating}
                          </span>
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p className="flex items-center gap-2">
                            <Car className="w-4 h-4" />
                            {driver.vehicle}
                          </p>
                          <p className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {driver.distance} away • {driver.availability}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button
                          onClick={() => handleContactDriver(driver, 'call')}
                          variant="default"
                          size="sm"
                          className="gap-2"
                        >
                          <Phone className="w-4 h-4" />
                          Call
                        </Button>
                        <Button
                          onClick={() => handleContactDriver(driver, 'message')}
                          variant="outline"
                          size="sm"
                          className="gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestRide;
