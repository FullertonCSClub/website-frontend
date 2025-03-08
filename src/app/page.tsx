import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Animated Gradient Background */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 opacity-90">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          
          {/* Animated Circles */}
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500 opacity-20 blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-20 h-60 w-60 rounded-full bg-blue-400 opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 h-60 w-60 rounded-full bg-indigo-400 opacity-20 blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 drop-shadow-md">
              Fullerton Computer Science Club
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-md opacity-90">
              Join our community of passionate programmers, developers, and tech enthusiasts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Link href="/join">Join the Club</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300">
                <Link href="/events">Upcoming Events</Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center">
                <div className="text-white text-9xl opacity-80">💻</div>
              </div>
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 blur-sm animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Animated Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the various opportunities and resources available to our members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M8 13h2"></path><path d="M8 17h2"></path><path d="M14 13h2"></path><path d="M14 17h2"></path></svg>
                </div>
                <CardTitle>Problem-Solving</CardTitle>
                <CardDescription>
                  Practice with our LeetCode-style problems designed to improve your problem-solving skills.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Link href="/problems">Explore Problems</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Feature Card 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="m16 6-4 4-4-4"></path><path d="M16 18a4 4 0 0 0-8 0"></path></svg>
                </div>
                <CardTitle>Video Library</CardTitle>
                <CardDescription>
                  Access our library of video tutorials covering various programming topics and technologies.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Link href="/videos">Watch Videos</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Feature Card 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 12h.01"></path><path d="M7 12h.01"></path><path d="M12 17h.01"></path><path d="M12 7h.01"></path><path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10"></path></svg>
                </div>
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>
                  Connect with fellow members, ask questions, and collaborate on projects.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Link href="/forum">Join Discussion</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section with Tabs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest workshops, hackathons, and social gatherings.
            </p>
          </div>
          
          <Tabs defaultValue="workshops" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="workshops">Workshops</TabsTrigger>
              <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
              <TabsTrigger value="social">Social Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="workshops" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Web Development with React</CardTitle>
                      <CardDescription>Learn the fundamentals of modern web development using React.</CardDescription>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                      Mar 15, 2025
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Join us for a hands-on workshop where we'll build a complete web application using React, Next.js, and Tailwind CSS. Perfect for beginners and intermediate developers looking to enhance their skills.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Register Now</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Introduction to Machine Learning</CardTitle>
                      <CardDescription>Explore the basics of ML algorithms and applications.</CardDescription>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                      Mar 22, 2025
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This workshop will cover fundamental concepts in machine learning, including supervised and unsupervised learning, with practical examples using Python and popular ML libraries.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Register Now</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="hackathons" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Spring Coding Challenge</CardTitle>
                      <CardDescription>48-hour hackathon to build innovative solutions.</CardDescription>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                      Apr 5-7, 2025
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Form a team and compete in our annual Spring Coding Challenge. Create solutions for real-world problems, win prizes, and network with industry professionals.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Register Team</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="social" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Game Night</CardTitle>
                      <CardDescription>Relax and connect with fellow club members.</CardDescription>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                      Mar 18, 2025
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Join us for a fun evening of board games, video games, and networking with other CS enthusiasts. Refreshments will be provided!
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">RSVP</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Industry Mixer</CardTitle>
                      <CardDescription>Network with professionals from top tech companies.</CardDescription>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                      Apr 12, 2025
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Meet representatives from leading tech companies, learn about internship and job opportunities, and get advice from industry professionals.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">RSVP</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Photo Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Glimpses from our past events and activities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg aspect-square bg-muted hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="outline" className="bg-background/80 backdrop-blur-sm">View</Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-white transition-colors duration-300">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 opacity-90">
            Become a part of our growing community of tech enthusiasts and take your skills to the next level.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link href="/join">Join the Club</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
