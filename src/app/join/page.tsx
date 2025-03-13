"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function JoinPage() {
  // Replace these URLs with your actual Discord invite and Google Form URLs
  const discordInviteUrl = "https://discord.gg/6b26MBFh";
  const googleFormUrl = "https://forms.google.com/your-form-id";

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Join the Fullerton Computer Science Club
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Become a part of our growing community of tech enthusiasts, developers, and problem solvers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Discord Card */}
          <Card className="relative hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12h.01"></path>
                  <path d="M15 12h.01"></path>
                  <path d="M7.5 4h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-3l-3 3-3-3h-3c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5Z"></path>
                </svg>
              </div>
              <CardTitle className="text-2xl">Join our Discord</CardTitle>
              <CardDescription className="text-base mt-2">
                Connect with fellow members, participate in discussions, and stay updated on club activities.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Our Discord server is the primary hub for communication, events announcements, and collaboration.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center pb-8">
              <div className="relative">
                <a 
                  href={discordInviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer z-10 relative"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
                  </svg>
                  Join Discord
                </a>
              </div>
            </CardFooter>
          </Card>

          {/* Google Form Card */}
          <Card className="relative hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                  <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                  <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                  <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                  <path d="M10 7v10"></path>
                  <path d="M7 12h10"></path>
                </svg>
              </div>
              <CardTitle className="text-2xl">Register with School</CardTitle>
              <CardDescription className="text-base mt-2">
                Submit your information to our school's club documentation system.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                This registration is required by the school to officially join the club and participate in school-sponsored events.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center pb-8">
              <div className="relative">
                <a 
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer z-10 relative"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"></path>
                    <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"></path>
                    <path d="M4 12h16"></path>
                    <path d="M9 12v6"></path>
                    <path d="M15 12v6"></path>
                  </svg>
                  Fill Out Form
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            By joining our club, you'll gain access to exclusive resources, workshops, and networking opportunities.
          </p>
          <Link href="/" className="inline-flex items-center justify-center h-10 py-2 px-4 rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
