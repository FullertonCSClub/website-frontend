"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

// Define the event interface
interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  attendees: number;
  maxAttendees?: number;
  image: string;
  registrationLink?: string;
  isPast: boolean;
}

// Sample events data
const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Winter Hackathon",
    date: "December 10, 2023",
    time: "9:00 AM - 9:00 PM",
    location: "Computer Science Building, Room 301",
    description: "Join us for a 48-hour coding challenge to build innovative solutions and compete for exciting prizes. This hackathon focuses on creating applications that address real-world problems.",
    category: "Hackathon",
    attendees: 120,
    maxAttendees: 150,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    registrationLink: "/register/hackathon",
    isPast: true
  },
  {
    id: 2,
    title: "Web Development Workshop",
    date: "November 5, 2023",
    time: "3:00 PM - 5:00 PM",
    location: "Virtual (Zoom)",
    description: "Hands-on workshop covering modern web development techniques using React, Next.js, and Tailwind CSS. Perfect for beginners and intermediate developers looking to enhance their skills.",
    category: "Workshop",
    attendees: 85,
    maxAttendees: 100,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    registrationLink: "/register/webdev",
    isPast: true
  },
  {
    id: 3,
    title: "Tech Industry Panel",
    date: "October 15, 2023",
    time: "4:00 PM - 6:00 PM",
    location: "Student Union, Grand Hall",
    description: "Join us for an insightful panel discussion with industry professionals from leading tech companies. Learn about career paths, industry trends, and get advice on breaking into the tech industry.",
    category: "Panel",
    attendees: 95,
    maxAttendees: 100,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    registrationLink: "/register/panel",
    isPast: true
  },
  {
    id: 4,
    title: "Introduction to Machine Learning",
    date: "April 12, 2025",
    time: "2:00 PM - 4:30 PM",
    location: "Computer Science Building, Room 105",
    description: "A beginner-friendly workshop on machine learning fundamentals. We'll cover basic concepts, algorithms, and implement a simple ML model using Python and scikit-learn.",
    category: "Workshop",
    attendees: 45,
    maxAttendees: 60,
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    registrationLink: "/register/ml-workshop",
    isPast: false
  },
  {
    id: 5,
    title: "Spring Coding Competition",
    date: "May 8, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Computer Science Building, Labs 201-205",
    description: "Test your problem-solving skills in our annual coding competition. Participants will solve algorithmic challenges of varying difficulty levels. Great prizes for top performers!",
    category: "Competition",
    attendees: 68,
    maxAttendees: 100,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    registrationLink: "/register/coding-competition",
    isPast: false
  },
  {
    id: 6,
    title: "Cloud Computing Workshop",
    date: "May 20, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Virtual (Zoom)",
    description: "Learn about cloud computing platforms and how to deploy applications to the cloud. We'll cover AWS, Azure, and Google Cloud Platform basics with hands-on demonstrations.",
    category: "Workshop",
    attendees: 32,
    maxAttendees: 75,
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    registrationLink: "/register/cloud-workshop",
    isPast: false
  },
  {
    id: 7,
    title: "Summer Hackathon",
    date: "June 15-17, 2025",
    time: "Starts at 9:00 AM",
    location: "Engineering Building, Floors 2-3",
    description: "Our biggest hackathon of the year! Join us for a weekend of coding, collaboration, and creativity. Form teams, build projects, and compete for amazing prizes and potential internship opportunities.",
    category: "Hackathon",
    attendees: 75,
    maxAttendees: 200,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    registrationLink: "/register/summer-hackathon",
    isPast: false
  }
];

// Event detail dialog component
function EventDetailDialog({ 
  event, 
  open, 
  onClose 
}: { 
  event: EventItem | null, 
  open: boolean, 
  onClose: () => void 
}) {
  if (!event) return null;
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-gray-900 border border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">{event.title}</DialogTitle>
          <DialogDescription className="text-gray-400">
            {event.category} • {event.isPast ? 'Past Event' : 'Upcoming Event'}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          {/* Event image */}
          <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6 bg-gray-800">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">{event.title}</h3>
            </div>
          </div>
          
          {/* Event details */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-blue-400 mt-0.5" />
              <div>
                <p className="font-medium text-white">{event.date}</p>
                <p className="text-sm text-gray-400">{event.time}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
              <p className="text-gray-300">{event.location}</p>
            </div>
            
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-blue-400 mt-0.5" />
              <p className="text-gray-300">
                {event.attendees} {event.maxAttendees ? `/ ${event.maxAttendees}` : ''} attendees
              </p>
            </div>
            
            <div className="pt-2">
              <h4 className="text-lg font-semibold text-white mb-2">About this event</h4>
              <p className="text-gray-300">{event.description}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          {!event.isPast && (
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Register Now
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function EventsPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  
  // Extract unique categories
  const categories = ['all', ...Array.from(new Set(EVENTS.map(event => event.category)))];
  
  // Filter events based on selected filters
  const filteredEvents = EVENTS.filter(event => {
    // Filter by past/upcoming status
    if (filter === 'upcoming' && event.isPast) return false;
    if (filter === 'past' && !event.isPast) return false;
    
    // Filter by category
    if (categoryFilter !== 'all' && event.category !== categoryFilter) return false;
    
    return true;
  });
  
  // Handle event click
  const handleEventClick = (event: EventItem) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };
  
  // Close dialog
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  // Set mounted state to true after initial render to prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration errors by only rendering content when mounted
  if (!mounted) {
    return <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin"></div>
    </div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-950 py-20">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/0"></div>
        
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 bg-blue-500/20 blur-[100px] rounded-full"></div>
        
        <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Events & Activities
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Join us for workshops, hackathons, and tech talks to enhance your skills and connect with fellow enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-gray-900 py-8 border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Time filter */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Show:</span>
              <div className="flex bg-gray-800 rounded-lg p-1">
                <button 
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    filter === 'all' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  All Events
                </button>
                <button 
                  onClick={() => setFilter('upcoming')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    filter === 'upcoming' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  Upcoming
                </button>
                <button 
                  onClick={() => setFilter('past')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    filter === 'past' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  Past Events
                </button>
              </div>
            </div>
            
            {/* Category filter */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Category:</span>
              <select 
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-gray-800 border border-gray-700 text-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <div 
                  key={event.id}
                  onClick={() => handleEventClick(event)}
                  className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                >
                  {/* Event Status Badge */}
                  <div className={`absolute top-4 right-4 z-20 px-2 py-1 rounded-full text-xs font-medium ${
                    event.isPast 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-green-600/90 text-white'
                  }`}>
                    {event.isPast ? 'Past' : 'Upcoming'}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20 px-2 py-1 rounded-full bg-blue-600/90 text-white text-xs font-medium">
                    {event.category}
                  </div>
                  
                  {/* Event Image/Banner */}
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-xl font-bold text-white text-center px-4">{event.title}</h3>
                    </div>
                  </div>
                  
                  {/* Event Details */}
                  <div className="p-6">
                    <div className="flex items-center text-gray-400 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-3">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    
                    <p className="text-gray-300 line-clamp-3 mb-4">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400">
                        <Users className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {event.attendees} {event.maxAttendees ? `/ ${event.maxAttendees}` : ''} attendees
                        </span>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 p-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEventClick(event);
                        }}
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-white mb-2">No events found</h3>
              <p className="text-gray-400">Try changing your filters to see more events.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Event detail dialog */}
      <EventDetailDialog 
        event={selectedEvent} 
        open={isDialogOpen} 
        onClose={handleCloseDialog} 
      />
    </div>
  );
}
