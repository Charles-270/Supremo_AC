import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  AirVent, 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  ChevronRight, 
  Clock, 
  Cog, 
  CreditCard, 
  Globe, 
  GraduationCap, 
  Headphones, 
  House, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Monitor, 
  Package, 
  Phone, 
  Settings, 
  Shield, 
  ShoppingCart, 
  Star, 
  Wrench, 
  Truck, 
  User, 
  Users, 
  Hammer, 
  Zap 
} from "lucide-react";

export default function Home() {
  const [currentUserType, setCurrentUserType] = useState<string | null>(null);
  const [chatOpen, setChatOpen] = useState(false);

  const userTypes = [
    { id: "customer", label: "Customer", icon: User, color: "bg-blue-500" },
    { id: "technician", label: "Technician", icon: Hammer, color: "bg-green-500" },
    { id: "supplier", label: "Supplier", icon: Package, color: "bg-purple-500" },
    { id: "admin", label: "Admin", icon: Settings, color: "bg-red-500" },
    { id: "trainee", label: "Trainee", icon: GraduationCap, color: "bg-orange-500" }
  ];

  const services = [
    {
      title: "AC Installation",
      description: "Professional installation of new air conditioning systems",
      icon: House,
      features: ["Site assessment", "Professional installation", "System testing", "Warranty included"]
    },
    {
      title: "Repairs & Maintenance",
      description: "Expert repair and preventive maintenance services",
      icon: Wrench,
      features: ["24/7 emergency service", "Preventive maintenance", "Parts replacement", "Performance optimization"]
    },
    {
      title: "AC Products & Parts",
      description: "Wide selection of air conditioners and genuine spare parts",
      icon: ShoppingCart,
      features: ["Quality AC units", "Genuine spare parts", "Competitive pricing", "Fast delivery"]
    },
    {
      title: "Training & Apprenticeship",
      description: "Professional HVAC training and certification programs",
      icon: BookOpen,
      features: ["Certified courses", "Hands-on training", "Online modules", "Job placement support"]
    }
  ];

  const features = [
    {
      title: "Real-time Communication",
      description: "Live chat support for instant assistance",
      icon: MessageCircle
    },
    {
      title: "Online Booking",
      description: "Schedule services at your convenience",
      icon: Calendar
    },
    {
      title: "Digital Training Portal",
      description: "Access training materials and track progress",
      icon: Monitor
    },
    {
      title: "E-commerce Platform",
      description: "Shop AC products and spare parts online",
      icon: Globe
    },
    {
      title: "Service Tracking",
      description: "Track your service requests in real-time",
      icon: Truck
    },
    {
      title: "Multi-user Dashboard",
      description: "Customized experience for each user type",
      icon: Users
    }
  ];

  const products = [
    {
      name: "Premium Split AC Unit",
      price: "GHS 2,500",
      image: "🌀",
      rating: 4.8,
      features: ["Energy efficient", "Remote control", "5-year warranty"]
    },
    {
      name: "Industrial HVAC System",
      price: "GHS 15,000",
      image: "🏭",
      rating: 4.9,
      features: ["Commercial grade", "Zone control", "Professional installation"]
    },
    {
      name: "AC Compressor",
      price: "GHS 800",
      image: "⚙️",
      rating: 4.7,
      features: ["High efficiency", "Genuine part", "2-year warranty"]
    }
  ];

  const LoginDialog = ({ userType }: { userType: typeof userTypes[0] }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-105">
          <CardHeader className="text-center">
            <div className={`mx-auto w-16 h-16 ${userType.color} rounded-full flex items-center justify-center mb-4`}>
              <userType.icon className="h-8 w-8 text-white" />
            </div>
            <CardTitle>{userType.label}</CardTitle>
            <CardDescription>
              {userType.id === "customer" && "Book services and shop products"}
              {userType.id === "technician" && "Manage jobs and communicate with customers"}
              {userType.id === "supplier" && "Upload products and manage inventory"}
              {userType.id === "admin" && "Manage platform and generate reports"}
              {userType.id === "trainee" && "Access training materials and courses"}
            </CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{userType.label} Login</DialogTitle>
          <DialogDescription>
            Enter your credentials to access your {userType.label.toLowerCase()} dashboard.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button className="w-full" onClick={() => setCurrentUserType(userType.id)}>
            Login as {userType.label}
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            Don't have an account? <a href="#" className="text-primary hover:underline">Sign up here</a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );

  if (currentUserType) {
    return (
      <div className="min-h-screen bg-background">
        {/* Dashboard Header */}
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <AirVent className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">Supremo AC</span>
              </div>
              <Badge variant="secondary" className="capitalize">
                {currentUserType} Dashboard
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => setChatOpen(true)}>
                <MessageCircle className="h-4 w-4 mr-2" />
                Live Chat
              </Button>
              <Button variant="outline" size="sm" onClick={() => setCurrentUserType(null)}>
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome to your {currentUserType} dashboard!</h1>
            <p className="text-muted-foreground">
              {currentUserType === "customer" && "Book services, shop products, and track your orders."}
              {currentUserType === "technician" && "View assigned jobs, update status, and communicate with customers."}
              {currentUserType === "supplier" && "Manage your product listings and inventory."}
              {currentUserType === "admin" && "Oversee platform operations and generate reports."}
              {currentUserType === "trainee" && "Access your training modules and track your progress."}
            </p>
          </div>

          {/* Customer Dashboard */}
          {currentUserType === "customer" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Book Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Schedule installation, repair, or maintenance</p>
                  <Button className="w-full">Book Now</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Shop Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Browse AC units and spare parts</p>
                  <Button className="w-full" variant="outline">Shop Now</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Track Orders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Monitor your service requests</p>
                  <Button className="w-full" variant="outline">View Orders</Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Technician Dashboard */}
          {currentUserType === "technician" && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Today's Jobs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">3 installations, 2 repairs</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Completed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2</div>
                    <p className="text-xs text-muted-foreground">40% complete</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Rating</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold flex items-center gap-1">
                      4.9 <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-xs text-muted-foreground">Based on 47 reviews</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Assigned Jobs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((job) => (
                      <div key={job} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">AC Installation - Residential</h4>
                          <p className="text-sm text-muted-foreground">Customer: John Doe • Location: East Legon</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Scheduled</Badge>
                          <Button size="sm">Update Status</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Supplier Dashboard */}
          {currentUserType === "supplier" && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Total Products</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Active Listings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">18</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Orders This Month</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">47</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">GHS 12,400</div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex gap-4">
                <Button className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Add Product
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Cog className="h-4 w-4" />
                  Manage Inventory
                </Button>
              </div>
            </div>
          )}

          {/* Admin Dashboard */}
          {currentUserType === "admin" && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Total Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,247</div>
                    <p className="text-xs text-muted-foreground">+12% this month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Active Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">89</div>
                    <p className="text-xs text-muted-foreground">Currently ongoing</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">GHS 45,680</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Training Enrollments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">156</div>
                    <p className="text-xs text-muted-foreground">Active trainees</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Platform Management</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Manage Users
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Package className="h-4 w-4 mr-2" />
                      Review Listings
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Shield className="h-4 w-4 mr-2" />
                      System Security
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Reports & Analytics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <Monitor className="h-4 w-4 mr-2" />
                      Performance Report
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Financial Summary
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Star className="h-4 w-4 mr-2" />
                      Customer Satisfaction
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Trainee Dashboard */}
          {currentUserType === "trainee" && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Course Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">75%</div>
                    <p className="text-xs text-muted-foreground">HVAC Fundamentals</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Completed Modules</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12/16</div>
                    <p className="text-xs text-muted-foreground">4 remaining</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Certification</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">In Progress</div>
                    <p className="text-xs text-muted-foreground">Expected: Next month</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Available Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: "HVAC Fundamentals", progress: 75, status: "In Progress" },
                      { title: "Advanced Repair Techniques", progress: 0, status: "Not Started" },
                      { title: "Electrical Systems", progress: 100, status: "Completed" },
                      { title: "Customer Service", progress: 45, status: "In Progress" }
                    ].map((course, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">{course.title}</h4>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">{course.progress}% complete</span>
                          <Badge variant={course.status === "Completed" ? "default" : course.status === "In Progress" ? "secondary" : "outline"}>
                            {course.status}
                          </Badge>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>

        {/* Live Chat */}
        {chatOpen && (
          <div className="fixed bottom-4 right-4 w-80 h-96 bg-card border rounded-lg shadow-lg z-50">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold">Live Chat Support</h3>
              <Button variant="ghost" size="sm" onClick={() => setChatOpen(false)}>
                ✕
              </Button>
            </div>
            <div className="flex-1 p-4 space-y-4 overflow-y-auto" style={{ height: "250px" }}>
              <div className="bg-secondary p-3 rounded-lg">
                <p className="text-sm">Hello! How can I help you today?</p>
                <span className="text-xs text-muted-foreground">Support Agent - 2 min ago</span>
              </div>
            </div>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input placeholder="Type your message..." className="flex-1" />
                <Button size="sm">Send</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <AirVent className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">Supremo AC Services</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
            <a href="#products" className="text-sm hover:text-primary transition-colors">Products</a>
            <a href="#training" className="text-sm hover:text-primary transition-colors">Training</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <Button size="sm" onClick={() => setChatOpen(true)}>
              <MessageCircle className="h-4 w-4 mr-2" />
              Live Chat
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              <Zap className="h-3 w-3 mr-1" />
              Digital Transformation Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Modern HVAC
              <br />Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Leading provider of air conditioning solutions in Accra. From installation to maintenance, 
              products to professional training - all accessible through our comprehensive digital platform.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="group">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="mr-2 h-4 w-4" />
              Call +233 XXX XXXX
            </Button>
          </div>

          {/* Platform Features */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.slice(0, 3).map((feature, index) => (
              <Card key={index} className="text-left">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Access Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Access Your Dashboard</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform serves different user types with customized experiences. 
              Login to access your personalized dashboard and tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {userTypes.map((userType) => (
              <LoginDialog key={userType.id} userType={userType} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive air conditioning solutions from installation to training
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality air conditioning units and genuine spare parts
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary">{product.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">• {feature}</li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="icon">
                      <Monitor className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Training</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive HVAC training and apprenticeship programs with digital learning portal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Online Learning Portal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Access training materials, video tutorials, and interactive modules from anywhere.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Self-paced learning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Progress tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Certification upon completion
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Job placement assistance
                  </li>
                </ul>
                <Button className="w-full">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Start Learning
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hammer className="h-6 w-6 text-primary" />
                  Hands-on Training
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Practical workshops and apprenticeship programs with experienced technicians.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Expert instructors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Real-world projects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Modern equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Industry certification
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Visit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Platform Features */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solution addressing all business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Booking CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Book a Service?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get started with our online booking system. Schedule installations, 
                  repairs, or maintenance at your convenience.
                </p>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service-type">Service Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="installation">Installation</SelectItem>
                          <SelectItem value="repair">Repair</SelectItem>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input placeholder="Enter your location" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea placeholder="Describe your AC issue or requirements" />
                  </div>
                  <Button className="w-full" size="lg">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Service Now
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔧</div>
                  <h4 className="text-xl font-semibold mb-2">Professional Service</h4>
                  <p className="text-muted-foreground">
                    Expert technicians • Quality guarantee • Real-time tracking
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <AirVent className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Supremo AC Services</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Leading provider of air conditioning solutions in Accra. 
                Digital transformation through our comprehensive platform.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Accra, Ghana</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">AC Installation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Repairs & Maintenance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Consultation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Training Programs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Customer Portal</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Technician Dashboard</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Supplier Hub</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Training Portal</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+233 XXX XXXX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@supremoac.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>24/7 Emergency Service</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Supremo AC Services. Digital transformation by Aryee Joseph & Oduro Joseph.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Button variant="outline" size="sm" onClick={() => setChatOpen(true)}>
                <Headphones className="h-4 w-4 mr-2" />
                24/7 Support
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Live Chat Button */}
      {!chatOpen && (
        <Button
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
          onClick={() => setChatOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Live Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-card border rounded-lg shadow-lg z-50">
          <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-400 rounded-full"></div>
              <h3 className="font-semibold">Live Support</h3>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setChatOpen(false)} className="text-primary-foreground hover:bg-primary-foreground/20">
              ✕
            </Button>
          </div>
          <div className="flex-1 p-4 space-y-4 overflow-y-auto" style={{ height: "250px" }}>
            <div className="bg-secondary/50 p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">Hello! Welcome to Supremo AC Services. How can I assist you today?</p>
              <span className="text-xs text-muted-foreground">Support Agent - Just now</span>
            </div>
            <div className="bg-primary/10 p-3 rounded-lg max-w-[80%] ml-auto">
              <p className="text-sm">Hi! I need to book a maintenance service.</p>
              <span className="text-xs text-muted-foreground">You - Just now</span>
            </div>
            <div className="bg-secondary/50 p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">Perfect! I can help you with that. Can you please provide your location and preferred date?</p>
              <span className="text-xs text-muted-foreground">Support Agent - Just now</span>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button size="sm">
                Send
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Powered by Supremo AC Real-time Support
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
