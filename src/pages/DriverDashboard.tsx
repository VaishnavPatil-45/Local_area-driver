import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Car, MapPin, Phone, MessageCircle, ArrowLeft, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface RideRequest {
  id: number;
  rider: string;
  phone: string;
  pickup: string;
  dropoff: string;
  distance: string;
  time: string;
  notes?: string;
}

const DriverDashboard = () => {
  const { toast } = useToast();
  const [isOnline, setIsOnline] = useState(false);
  const [acceptedRides, setAcceptedRides] = useState<number[]>([]);

  // Mock ride requests
  const rideRequests: RideRequest[] = [
    {
      id: 1,
      rider: "Neha Patel",
      phone: "+91 98765 12345",
      pickup: "MG Road Metro Station",
      dropoff: "Koramangala 5th Block",
      distance: "8.5 km",
      time: "2 mins ago",
      notes: "Please wait near gate 3"
    },
    {
      id: 2,
      rider: "Rohan Mehta",
      phone: "+91 98765 12346",
      pickup: "Indiranagar 100 Feet Road",
      dropoff: "HAL Airport",
      distance: "12 km",
      time: "5 mins ago",
    },
    {
      id: 3,
      rider: "Ananya Das",
      phone: "+91 98765 12347",
      pickup: "Whitefield Main Road",
      dropoff: "Brigade Road",
      distance: "15 km",
      time: "8 mins ago",
      notes: "Need spacious car for luggage"
    },
  ];

  const handleToggleOnline = (checked: boolean) => {
    setIsOnline(checked);
    toast({
      title: checked ? "You're now online" : "You're now offline",
      description: checked 
        ? "You'll start receiving ride requests" 
        : "You won't receive new ride requests",
    });
  };

  const handleAcceptRide = (rideId: number) => {
    setAcceptedRides([...acceptedRides, rideId]);
    const ride = rideRequests.find(r => r.id === rideId);
    toast({
      title: "Ride Accepted!",
      description: `Contact ${ride?.rider} to coordinate pickup`,
    });
  };

  const handleContactRider = (ride: RideRequest, method: 'call' | 'message') => {
    if (method === 'call') {
      window.location.href = `tel:${ride.phone}`;
    } else {
      const message = encodeURIComponent(`Hi ${ride.rider}, I'm your driver for the ride from ${ride.pickup} to ${ride.dropoff}. I'll be there shortly!`);
      window.open(`https://wa.me/${ride.phone.replace(/\s/g, '')}?text=${message}`, '_blank');
    }
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
              LocalRide Driver
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Status Card */}
          <Card className="p-6 border-2 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Driver Dashboard</h1>
                <p className="text-muted-foreground">
                  {isOnline ? "You're online and ready to accept rides" : "Go online to start receiving ride requests"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Label htmlFor="online-status" className="text-lg font-semibold">
                  {isOnline ? "Online" : "Offline"}
                </Label>
                <Switch
                  id="online-status"
                  checked={isOnline}
                  onCheckedChange={handleToggleOnline}
                  className="data-[state=checked]:bg-accent"
                />
              </div>
            </div>
          </Card>

          {/* Stats */}
          {isOnline && (
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4 text-center border-2">
                <div className="text-3xl font-bold text-primary">{rideRequests.length}</div>
                <div className="text-sm text-muted-foreground">Available Requests</div>
              </Card>
              <Card className="p-4 text-center border-2">
                <div className="text-3xl font-bold text-accent">{acceptedRides.length}</div>
                <div className="text-sm text-muted-foreground">Accepted Today</div>
              </Card>
              <Card className="p-4 text-center border-2">
                <div className="text-3xl font-bold text-primary-glow">4.8</div>
                <div className="text-sm text-muted-foreground">Your Rating</div>
              </Card>
            </div>
          )}

          {/* Ride Requests */}
          {isOnline ? (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Available Ride Requests</h2>
              {rideRequests.length > 0 ? (
                <div className="grid gap-4">
                  {rideRequests.map((ride) => {
                    const isAccepted = acceptedRides.includes(ride.id);
                    return (
                      <Card 
                        key={ride.id} 
                        className={`p-6 transition-all border-2 ${
                          isAccepted 
                            ? 'bg-accent/10 border-accent' 
                            : 'hover:shadow-lg hover:border-primary/50'
                        }`}
                      >
                        <div className="space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-3">
                                <h3 className="text-xl font-bold">{ride.rider}</h3>
                                {isAccepted && (
                                  <Badge className="bg-accent text-accent-foreground">
                                    Accepted
                                  </Badge>
                                )}
                                <span className="text-sm text-muted-foreground ml-auto flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {ride.time}
                                </span>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-semibold">Pickup</p>
                                    <p className="text-sm text-muted-foreground">{ride.pickup}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-semibold">Drop-off</p>
                                    <p className="text-sm text-muted-foreground">{ride.dropoff}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                  <span className="flex items-center gap-1">
                                    <Car className="w-4 h-4" />
                                    {ride.distance}
                                  </span>
                                  {ride.notes && (
                                    <span className="flex items-center gap-1">
                                      <User className="w-4 h-4" />
                                      {ride.notes}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            {!isAccepted ? (
                              <Button
                                onClick={() => handleAcceptRide(ride.id)}
                                variant="hero"
                                className="flex-1"
                              >
                                Accept Ride
                              </Button>
                            ) : (
                              <>
                                <Button
                                  onClick={() => handleContactRider(ride, 'call')}
                                  variant="default"
                                  className="flex-1 gap-2"
                                >
                                  <Phone className="w-4 h-4" />
                                  Call Rider
                                </Button>
                                <Button
                                  onClick={() => handleContactRider(ride, 'message')}
                                  variant="outline"
                                  className="flex-1 gap-2"
                                >
                                  <MessageCircle className="w-4 h-4" />
                                  Message
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <Card className="p-12 text-center border-2 border-dashed">
                  <Car className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">No ride requests yet</h3>
                  <p className="text-muted-foreground">
                    New ride requests will appear here when riders need a ride in your area
                  </p>
                </Card>
              )}
            </div>
          ) : (
            <Card className="p-12 text-center border-2">
              <div className="max-w-md mx-auto">
                <Car className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">You're Offline</h3>
                <p className="text-muted-foreground mb-6">
                  Toggle the switch above to go online and start receiving ride requests from riders in your area
                </p>
                <Button 
                  onClick={() => handleToggleOnline(true)} 
                  variant="hero" 
                  size="lg"
                >
                  Go Online Now
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
