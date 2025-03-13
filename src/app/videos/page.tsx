"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Define the video interface
interface VideoItem {
  id: number;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  date: string;
  category: string;
  instructor: string;
  views: number;
  isPlaylist?: boolean;
}

// Define the category interface
interface Category {
  id: string;
}

// Mock video data - this would typically come from an API
const VIDEOS: VideoItem[] = [
  {
    id: 1,
    title: "React Hooks Tutorial Series",
    description: "Complete tutorial series on React Hooks by Codevolution, covering useState, useEffect, useContext, useReducer, useCallback, useMemo, and custom hooks.",
    duration: "4:13:45",
    thumbnail: "https://i.ytimg.com/vi/cF2lQ_gZeA8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/cF2lQ_gZeA8?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A",
    date: "March 10, 2025",
    category: "Web Development",
    instructor: "Codevolution",
    views: 1245,
    isPlaylist: true
  },
  {
    id: 2,
    title: "Data Structures: Arrays vs Linked Lists",
    description: "A deep dive into the differences between arrays and linked lists, with practical examples.",
    duration: "45:22",
    thumbnail: "https://i.ytimg.com/vi/DuDz6B4cqVc/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/DuDz6B4cqVc",
    date: "February 28, 2025",
    category: "Algorithms",
    instructor: "mycodeschool",
    views: 982
  },
  {
    id: 3,
    title: "Building APIs with Node.js",
    description: "Step-by-step guide to creating RESTful APIs using Node.js and Express.",
    duration: "58:40",
    thumbnail: "https://i.ytimg.com/vi/fgTGADljAeg/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/fgTGADljAeg",
    date: "February 15, 2025",
    category: "Backend",
    instructor: "Academind",
    views: 1567
  },
  {
    id: 4,
    title: "Python for Machine Learning",
    description: "Introduction to Python libraries for machine learning and data analysis.",
    duration: "1:12:33",
    thumbnail: "https://i.ytimg.com/vi/7eh4d6sabA0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/7eh4d6sabA0",
    date: "January 25, 2025",
    category: "Machine Learning",
    instructor: "freeCodeCamp.org",
    views: 2341
  },
  {
    id: 5,
    title: "Git & GitHub Workshop",
    description: "Learn version control with Git and collaboration with GitHub.",
    duration: "48:10",
    thumbnail: "https://i.ytimg.com/vi/RGOj5yH7evk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/RGOj5yH7evk",
    date: "January 12, 2025",
    category: "Tools",
    instructor: "freeCodeCamp.org",
    views: 1123
  },
  {
    id: 6,
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps using React Native.",
    duration: "1:05:18",
    thumbnail: "https://i.ytimg.com/vi/0-S5a0eXPoc/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/0-S5a0eXPoc",
    date: "December 18, 2024",
    category: "Mobile Development",
    instructor: "Programming with Mosh",
    views: 1876
  }
];

// Categories for filtering
const CATEGORIES: Category[] = [
  { id: "All" },
  { id: "Web Development" },
  { id: "Algorithms" },
  { id: "Backend" },
  { id: "Machine Learning" },
  { id: "Tools" },
  { id: "Mobile Development" }
];

export default function VideosPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  // Filter videos based on category and search query
  const filteredVideos = VIDEOS.filter(video => {
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle video selection and modal opening
  const handleVideoClick = (video: VideoItem) => {
    setIsLoading(true);
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
  };

  // Focus search input when category changes
  useEffect(() => {
    if (mounted && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [selectedCategory, mounted]);

  // Set mounted state to true after initial render
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
      <section className="relative overflow-hidden py-20 bg-[#0a0a1f]">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 left-1/4 h-60 w-60 rounded-full bg-purple-600/20 blur-3xl animate-pulse-glow animation-delay-2000"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              Learning Resources
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-md">
              Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient-shift">Library</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Watch tutorials and recordings from our workshops and events.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-[#0c0c20]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/3">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <input 
                ref={searchInputRef}
                type="search" 
                className="block w-full p-3 pl-10 text-sm bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                placeholder="Search videos..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-900/50 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {category.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Videos Grid Section */}
      <section className="py-16 bg-[#0c0c20] relative">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Blob */}
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-600/5 rounded-full filter blur-3xl"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-600/5 rounded-full filter blur-3xl"></div>
          
          {/* Dot Grid */}
          <div className="absolute inset-0 bg-[url('/dot-grid.svg')] bg-repeat opacity-5"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <div 
                  key={video.id} 
                  className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-500"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    {/* Thumbnail Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80 group-hover:scale-105 transition-transform duration-500">
                      {/* Add an image element for the thumbnail */}
                      <img 
                        src={video.thumbnail} 
                        alt={`Thumbnail for ${video.title}`}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      {/* Add a subtle overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => handleVideoClick(video)}
                        className="relative z-10 w-16 h-16 rounded-full bg-blue-600/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg"
                        aria-label={`Play ${video.title}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </button>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded">
                      {video.duration}
                    </div>
                    
                    {/* Playlist Badge */}
                    {video.isPlaylist && (
                      <div className="absolute top-3 right-3 px-2 py-1 bg-blue-600/90 text-white text-xs rounded-full flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <rect width="18" height="18" x="3" y="3" rx="2" />
                          <path d="M9 9h6" />
                          <path d="M9 13h6" />
                          <path d="M9 17h6" />
                        </svg>
                        Playlist
                      </div>
                    )}
                  </div>
                  
                  {/* Video Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400">
                        {video.category}
                      </span>
                      <span className="text-gray-400 text-sm">{video.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      <button 
                        onClick={() => handleVideoClick(video)} 
                        className="text-left cursor-pointer hover:underline focus:outline-none focus:underline"
                        aria-label={`View ${video.title}`}
                      >
                        {video.title}
                        {video.isPlaylist && (
                          <span className="ml-2 text-xs bg-blue-600/80 text-white px-2 py-0.5 rounded-full">
                            Playlist
                          </span>
                        )}
                      </button>
                    </h3>
                    
                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                      {video.description}
                    </p>
                    
                    {/* Author/Instructor with Avatar */}
                    <div className="flex items-center mt-auto">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-medium">
                        {video.instructor.split(' ').map(name => name[0]).join('')}
                      </div>
                      <div className="ml-2">
                        <p className="text-sm font-medium text-white">{video.instructor}</p>
                        <div className="flex items-center text-xs text-gray-400">
                          <span>{video.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No videos found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
          
          {/* Load More Button */}
          {filteredVideos.length > 0 && (
            <div className="mt-16 text-center">
              <Button size="lg" variant="outline" className="border-gray-700 bg-gray-900/50 text-white hover:bg-gray-800/80 transition-all duration-300">
                Load More Videos
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Particles */}
          {mounted && (
            <div className="absolute top-0 left-0 w-full h-full">
              {Array.from({ length: 20 }).map((_, index) => (
                <div 
                  key={index}
                  className="absolute rounded-full bg-white/10"
                  style={{
                    width: `${Math.random() * 6 + 2}px`,
                    height: `${Math.random() * 6 + 2}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                ></div>
              ))}
            </div>
          )}
          
          {/* Diagonal Lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full transform -rotate-45 overflow-hidden">
              {Array.from({ length: 20 }).map((_, index) => (
                <div 
                  key={index}
                  className="absolute h-px bg-white/30"
                  style={{
                    top: `${index * 10}%`,
                    left: '-100%',
                    right: '-100%',
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">
              Want to contribute your own videos?
            </h2>
            <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
              Share your knowledge with the community by submitting your own tutorials and presentations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="relative z-10">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 transition-all duration-300 shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-900/40">
                  <Link href="/submit-video" className="relative z-10 cursor-pointer">Submit a Video</Link>
                </Button>
              </div>
              <div className="relative z-10">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300">
                  <Link href="/video-guidelines" className="relative z-10 cursor-pointer">View Guidelines</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-4xl bg-gray-900 border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center">
              {selectedVideo?.title}
              {selectedVideo?.isPlaylist && (
                <span className="ml-3 text-xs bg-blue-600/80 text-white px-2 py-0.5 rounded-full flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M9 9h6" />
                    <path d="M9 13h6" />
                    <path d="M9 17h6" />
                  </svg>
                  Playlist
                </span>
              )}
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              {selectedVideo?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            {selectedVideo && (
              <>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
                    <div className="w-12 h-12 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin"></div>
                  </div>
                )}
                <iframe
                  src={selectedVideo.videoUrl}
                  className="w-full h-full"
                  title={selectedVideo.title}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  onLoad={() => setIsLoading(false)}
                ></iframe>
              </>
            )}
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                {selectedVideo?.instructor.split(' ').map(name => name[0]).join('')}
              </div>
              <div className="ml-3">
                <p className="text-white font-medium">{selectedVideo?.instructor}</p>
                <p className="text-gray-400">Creator</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="text-gray-400">{selectedVideo?.date}</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span className="text-gray-400">{selectedVideo?.views.toLocaleString()} views</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
