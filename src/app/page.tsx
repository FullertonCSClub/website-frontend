"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Animated Tech Background */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-[#0a0a1f]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
          
          {/* Animated Particles */}
          {mounted && (
            <>
              <div className="absolute top-0 left-0 w-full h-full">
                {Array.from({ length: 20 }).map((_, index) => (
                  <div 
                    key={index}
                    className="absolute rounded-full bg-blue-500/20"
                    style={{
                      width: `${(index % 5) + 2}px`,
                      height: `${(index % 5) + 2}px`,
                      top: `${(index * 5) % 100}%`,
                      left: `${(index * 7) % 100}%`,
                      animation: `float ${(index % 5) + 10}s linear infinite`,
                      animationDelay: `${index * 0.25}s`
                    }}
                  ></div>
                ))}
              </div>
            </>
          )}
          
          {/* Glowing Orbs */}
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl animate-pulse-glow"></div>
          <div className="absolute top-1/2 left-1/4 h-60 w-60 rounded-full bg-purple-600/20 blur-3xl animate-pulse-glow animation-delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 h-40 w-40 rounded-full bg-cyan-600/20 blur-3xl animate-pulse-glow animation-delay-4000"></div>
          
          {/* Code Lines Animation */}
          {mounted && (
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 10 }).map((_, index) => (
                <div 
                  key={index}
                  className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                  style={{
                    top: `${index * 10 + 2}%`,
                    left: 0,
                    right: 0,
                    animation: `shimmer ${(index % 5) + 5}s linear infinite`,
                    animationDelay: `${index * 0.5}s`
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>
        
        <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              Fullerton College
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 drop-shadow-md">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient-shift">
                Computer Science Club
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-md text-gray-300">
              Join our community of passionate programmers, developers, and tech enthusiasts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-900/40 transition-all duration-300">
                <Link href="/join">Join the Club</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 bg-gray-900/50 text-white hover:bg-gray-800/80 transition-all duration-300">
                <Link href="/events">Upcoming Events</Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* 3D Floating Laptop */}
              <div className="absolute inset-0 flex items-center justify-center animate-float">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl animate-pulse-glow"></div>
                  
                  {/* Laptop Base */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-2 md:w-64 md:h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-md"></div>
                  
                  {/* Laptop */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-40 md:w-64 md:h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 overflow-hidden perspective-800 rotate-y-15 rotate-x-15">
                    {/* Screen */}
                    <div className="absolute top-0 left-0 right-0 h-3/4 bg-gradient-to-br from-gray-900 to-black rounded-t-lg p-1">
                      <div className="w-full h-full bg-gradient-to-br from-blue-900 to-indigo-900 rounded overflow-hidden">
                        {/* Code Animation */}
                        <div className="w-full h-full opacity-70 flex flex-col justify-start items-start p-2 text-[6px] md:text-[8px] font-mono text-blue-300 overflow-hidden">
                          <div className="animate-typing">
                            <span className="text-purple-300">import</span> React <span className="text-purple-300">from</span> <span className="text-green-300">&apos;react&apos;</span>;
                          </div>
                          <div className="animate-typing animation-delay-500">
                            <span className="text-purple-300">function</span> <span className="text-yellow-300">App</span>() {'{'}
                          </div>
                          <div className="animate-typing animation-delay-1000 ml-2">
                            <span className="text-purple-300">return</span> (
                          </div>
                          <div className="animate-typing animation-delay-1500 ml-4">
                            &lt;<span className="text-red-300">div</span>&gt;
                          </div>
                          <div className="animate-typing animation-delay-2000 ml-6">
                            &lt;<span className="text-red-300">h1</span>&gt;CS Club&lt;/<span className="text-red-300">h1</span>&gt;
                          </div>
                          <div className="animate-typing animation-delay-2500 ml-4">
                            &lt;/<span className="text-red-300">div</span>&gt;
                          </div>
                          <div className="animate-typing animation-delay-3000 ml-2">
                            );
                          </div>
                          <div className="animate-typing animation-delay-3500">
                            {'}'}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Keyboard */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg">
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Binary/Code Particles */}
              {mounted && (
                <>
                  {Array.from({ length: 20 }).map((_, index) => (
                    <div 
                      key={`code-${index}`}
                      className="absolute text-[8px] font-mono text-blue-500/30"
                      style={{
                        top: `${(index * 5) % 100}%`,
                        left: `${(index * 7) % 100}%`,
                        animation: `float ${(index % 5) + 15}s linear infinite`,
                        animationDelay: `${index * 0.25}s`
                      }}
                    >
                      {index % 2 === 0 ? '1' : '0'}
                    </div>
                  ))}
                </>
              )}
              
              {/* Circular Ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full border border-blue-500/20 animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-88 md:h-88 rounded-full border border-indigo-500/10 animate-spin-slow animation-delay-2000" style={{ animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>
        
        {/* Tech Stack Icons */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="flex justify-center py-6 gap-8 md:gap-12 opacity-50">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python'].map((tech, index) => (
                <div key={tech} className="text-white/70 text-xs font-mono" style={{ animationDelay: `${index * 0.2}s` }}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section with Timeline */}
      <section className="py-24 bg-[#0a0a1f] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Lines */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"></div>
            <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent"></div>
          </div>
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
              Events
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Events</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join us for exciting workshops, hackathons, and networking opportunities.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500/30 via-blue-500/30 to-indigo-500/30"></div>
            
            <div className="space-y-12">
              {/* Event 1 */}
              <div className="relative group">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                    <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 group-hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden">
                      {/* Card Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className="text-purple-400 font-mono mb-2">October 15, 2023</div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">Intro to Machine Learning</h3>
                        <p className="text-gray-400">
                          Learn the fundamentals of machine learning algorithms and how to implement them using Python and TensorFlow.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gray-900 border-4 border-purple-500/30 group-hover:border-purple-500 transition-colors duration-300 flex items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-purple-500 group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
                    <div className="hidden md:block h-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Event 2 */}
              <div className="relative group">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="hidden md:block h-full"></div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gray-900 border-4 border-blue-500/30 group-hover:border-blue-500 transition-colors duration-300 flex items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                    <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 group-hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
                      {/* Card Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className="text-blue-400 font-mono mb-2">November 5, 2023</div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">Web Development Workshop</h3>
                        <p className="text-gray-400">
                          Hands-on workshop covering modern web development techniques using React, Next.js, and Tailwind CSS.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Event 3 */}
              <div className="relative group">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                    <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 group-hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden">
                      {/* Card Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className="text-indigo-400 font-mono mb-2">December 10, 2023</div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">Winter Hackathon</h3>
                        <p className="text-gray-400">
                          Join us for a 48-hour coding challenge to build innovative solutions and compete for exciting prizes.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gray-900 border-4 border-indigo-500/30 group-hover:border-indigo-500 transition-colors duration-300 flex items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
                    <div className="hidden md:block h-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* View All Events Button */}
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-none shadow-lg shadow-purple-900/20 hover:shadow-xl hover:shadow-purple-900/30 transition-all duration-300">
                <Link href="/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Animated Cards */}
      <section className="py-24 bg-[#0c0c20] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Blob */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-600/5 rounded-full filter blur-3xl"></div>
          
          {/* Dot Grid */}
          <div className="absolute inset-0 bg-[url('/dot-grid.svg')] bg-repeat opacity-5"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Offer</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore the various opportunities and resources available to our members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative z-10 p-6">
                <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M2 18h2"></path>
                    <path d="M20 18h2"></path>
                    <path d="m19.07 10.93-1.41 1.41"></path>
                    <path d="M22 22H2"></path>
                    <path d="m16 6-4 4-4-4"></path>
                    <path d="M16 18a4 4 0 0 0-8 0"></path>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">Problem-Solving</h3>
                <p className="text-gray-400 mb-6">
                  Practice with our LeetCode-style problems designed to improve your algorithmic thinking and coding skills.
                </p>
                
                <div className="pt-4 border-t border-gray-800 group-hover:border-blue-500/20 transition-colors duration-300">
                  <Link href="/problems" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <span>Explore Problems</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/20 to-transparent transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>
            </div>
            
            {/* Feature Card 2 */}
            <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-500 overflow-hidden">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative z-10 p-6">
                <div className="w-14 h-14 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 12h.01"></path>
                    <path d="M7 12h.01"></path>
                    <path d="M12 17h.01"></path>
                    <path d="M12 7h.01"></path>
                    <path d="m19.07 10.93-1.41 1.41"></path>
                    <path d="M22 22H2"></path>
                    <path d="m16 6-4 4-4-4"></path>
                    <path d="M16 18a4 4 0 0 0-8 0"></path>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors duration-300">Video Library</h3>
                <p className="text-gray-400 mb-6">
                  Access our library of video tutorials covering various programming topics and cutting-edge technologies.
                </p>
                
                <div className="pt-4 border-t border-gray-800 group-hover:border-indigo-500/20 transition-colors duration-300">
                  <Link href="/videos" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
                    <span>Watch Videos</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-indigo-500/20 to-transparent transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>
            </div>
            
            {/* Feature Card 3 */}
            <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative z-10 p-6">
                <div className="w-14 h-14 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 12h.01"></path>
                    <path d="M7 12h.01"></path>
                    <path d="M12 17h.01"></path>
                    <path d="M12 7h.01"></path>
                    <path d="m19.07 10.93-1.41 1.41"></path>
                    <path d="M22 22H2"></path>
                    <path d="m16 6-4 4-4-4"></path>
                    <path d="M16 18a4 4 0 0 0-8 0"></path>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">Community Forum</h3>
                <p className="text-gray-400 mb-6">
                  Connect with fellow members, ask questions, and collaborate on exciting projects together.
                </p>
                
                <div className="pt-4 border-t border-gray-800 group-hover:border-purple-500/20 transition-colors duration-300">
                  <Link href="/forum" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                    <span>Join Discussion</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/20 to-transparent transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-24 bg-[#0c0c20] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Blob */}
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-600/5 rounded-full filter blur-3xl"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-600/5 rounded-full filter blur-3xl"></div>
          
          {/* Dot Grid */}
          <div className="absolute inset-0 bg-[url('/dot-grid.svg')] bg-repeat opacity-5"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
              Gallery
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Club <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Activities</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Take a look at our past events, workshops, and hackathons.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="group relative overflow-hidden rounded-xl aspect-square bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-indigo-500/30 transition-all duration-500">
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 group-hover:scale-105 transition-transform duration-500"></div>
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-lg font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Hackathon Winners</h3>
                <p className="text-sm text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  Our team celebrating after winning the annual coding competition.
                </p>
              </div>
              
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500/20">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
              </div>
            </div>
            
            {/* Gallery Item 2 */}
            <div className="group relative overflow-hidden rounded-xl aspect-square bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/30 transition-all duration-500">
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50 group-hover:scale-105 transition-transform duration-500"></div>
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-lg font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Workshop Session</h3>
                <p className="text-sm text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  Students learning web development during our hands-on workshop.
                </p>
              </div>
              
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500/20">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
              </div>
            </div>
            
            {/* Gallery Item 3 */}
            <div className="group relative overflow-hidden rounded-xl aspect-square bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500/30 transition-all duration-500">
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 group-hover:scale-105 transition-transform duration-500"></div>
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-lg font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Guest Speaker</h3>
                <p className="text-sm text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  Industry professionals sharing insights during our tech talk series.
                </p>
              </div>
              
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500/20">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {/* View Gallery Button */}
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-gray-700 bg-gray-900/50 text-white hover:bg-gray-800/80 transition-all duration-300">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Particles */}
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 20 }).map((_, index) => (
              <div 
                key={index}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: `${(index % 5) + 2}px`,
                  height: `${(index % 5) + 2}px`,
                  top: `${(index * 5) % 100}%`,
                  left: `${(index * 7) % 100}%`,
                  animation: `float ${(index % 5) + 10}s linear infinite`,
                  animationDelay: `${index * 0.25}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Radial Gradient */}
          <div className="absolute inset-0 bg-radial-gradient"></div>
          
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
              Become a part of our vibrant community of tech enthusiasts, developers, and problem solvers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 transition-all duration-300 shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-900/40">
                <Link href="/join">Join the Club</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
