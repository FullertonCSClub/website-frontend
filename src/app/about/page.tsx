"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

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
              About Our CS Club
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Building a community of passionate coders and problem solvers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                The Computer Science Club is dedicated to fostering a collaborative environment where students can develop their programming skills, explore new technologies, and build innovative projects together.
              </p>
              <p className="text-gray-300 mb-6">
                We believe in learning by doing, which is why we organize regular coding workshops, hackathons, and project showcases throughout the academic year.
              </p>
              <p className="text-gray-300">
                Whether you&apos;re a beginner just starting your coding journey or an experienced developer looking to share your knowledge, our club provides resources, mentorship, and a supportive community to help you grow.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Club Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-gray-300">Weekly coding sessions and problem-solving competitions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-gray-300">Guest speakers from industry professionals</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-gray-300">Hands-on workshops on emerging technologies</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-gray-300">Collaborative projects and hackathons</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-gray-300">Networking opportunities with tech companies</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
              <div className="p-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JD</span>
                </div>
                <h3 className="text-xl font-bold text-white text-center">Jane Doe</h3>
                <p className="text-blue-400 text-center mb-4">Club President</p>
                <p className="text-gray-400 text-center">Computer Science senior with a passion for AI and machine learning.</p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
              <div className="p-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JS</span>
                </div>
                <h3 className="text-xl font-bold text-white text-center">John Smith</h3>
                <p className="text-blue-400 text-center mb-4">Vice President</p>
                <p className="text-gray-400 text-center">Full-stack developer specializing in web technologies and cloud computing.</p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
              <div className="p-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AJ</span>
                </div>
                <h3 className="text-xl font-bold text-white text-center">Alex Johnson</h3>
                <p className="text-blue-400 text-center mb-4">Event Coordinator</p>
                <p className="text-gray-400 text-center">Creative problem solver with experience in organizing tech events and hackathons.</p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
              <div className="p-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">SW</span>
                </div>
                <h3 className="text-xl font-bold text-white text-center">Sarah Williams</h3>
                <p className="text-blue-400 text-center mb-4">Technical Lead</p>
                <p className="text-gray-400 text-center">Backend developer with expertise in algorithms and competitive programming.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Ready to take your coding skills to the next level? Join our CS Club and become part of a thriving community of tech enthusiasts!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg font-semibold">
              Become a Member
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-6 rounded-lg text-lg font-semibold">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
