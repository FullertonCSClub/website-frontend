"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Define types for our problem data
type Problem = {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
  description: string;
  acceptance: string;
  submissions: number;
};

// Mock data for problems - in a real app, this would come from your backend API
const MOCK_PROBLEMS: Problem[] = [
  {
    id: "1",
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Array", "Hash Table"],
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    acceptance: "47%",
    submissions: 1250,
  },
  {
    id: "2",
    title: "Add Two Numbers",
    difficulty: "Medium",
    tags: ["Linked List", "Math", "Recursion"],
    description: "You are given two non-empty linked lists representing two non-negative integers. Add the two numbers and return the sum as a linked list.",
    acceptance: "38%",
    submissions: 980,
  },
  {
    id: "3",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    tags: ["Hash Table", "String", "Sliding Window"],
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    acceptance: "33%",
    submissions: 870,
  },
  {
    id: "4",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    acceptance: "25%",
    submissions: 650,
  },
  {
    id: "5",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    tags: ["String", "Dynamic Programming"],
    description: "Given a string s, return the longest palindromic substring in s.",
    acceptance: "31%",
    submissions: 920,
  },
  {
    id: "6",
    title: "Reverse Integer",
    difficulty: "Easy",
    tags: ["Math"],
    description: "Given a signed 32-bit integer x, return x with its digits reversed.",
    acceptance: "42%",
    submissions: 1100,
  },
  {
    id: "7",
    title: "String to Integer (atoi)",
    difficulty: "Medium",
    tags: ["String", "Math"],
    description: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.",
    acceptance: "28%",
    submissions: 780,
  },
  {
    id: "8",
    title: "Container With Most Water",
    difficulty: "Medium",
    tags: ["Array", "Two Pointers", "Greedy"],
    description: "Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai), find the container that contains the most water.",
    acceptance: "35%",
    submissions: 850,
  },
  {
    id: "9",
    title: "Regular Expression Matching",
    difficulty: "Hard",
    tags: ["String", "Dynamic Programming", "Recursion"],
    description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.",
    acceptance: "22%",
    submissions: 580,
  },
];

export default function ProblemsPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProblems, setFilteredProblems] = useState<Problem[]>(MOCK_PROBLEMS);

  // Set mounted state to true after initial render to prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter problems based on active tab and search query
  useEffect(() => {
    let filtered = MOCK_PROBLEMS;
    
    // Filter by difficulty
    if (activeTab !== "all") {
      filtered = filtered.filter(problem => 
        problem.difficulty.toLowerCase() === activeTab.toLowerCase()
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(problem => 
        problem.title.toLowerCase().includes(query) || 
        problem.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredProblems(filtered);
  }, [activeTab, searchQuery]);

  // Prevent hydration errors by only rendering content when mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin"></div>
      </div>
    );
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
              Problem Solving
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Sharpen your coding skills with our collection of programming challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/3">
              <Input
                type="text"
                placeholder="Search problems..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={(value: string) => setActiveTab(value)}>
              <TabsList className="bg-gray-800">
                <TabsTrigger value="all" className="data-[state=active]:bg-blue-600">All</TabsTrigger>
                <TabsTrigger value="easy" className="data-[state=active]:bg-green-600">Easy</TabsTrigger>
                <TabsTrigger value="medium" className="data-[state=active]:bg-yellow-600">Medium</TabsTrigger>
                <TabsTrigger value="hard" className="data-[state=active]:bg-red-600">Hard</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Problems List */}
          <div className="space-y-4">
            {filteredProblems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No problems found matching your criteria.</p>
              </div>
            ) : (
              filteredProblems.map((problem) => (
                <div key={problem.id} className="relative">
                  <Link 
                    href={`/problems/${problem.id}`} 
                    className="block w-full h-full absolute top-0 left-0 z-10 cursor-pointer"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">View problem details</span>
                  </Link>
                  <Card className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 relative">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-white">{problem.title}</CardTitle>
                        <Badge 
                          className={`
                            ${problem.difficulty === 'Easy' ? 'bg-green-600 hover:bg-green-700' : 
                              problem.difficulty === 'Medium' ? 'bg-yellow-600 hover:bg-yellow-700' : 
                              'bg-red-600 hover:bg-red-700'}
                          `}
                        >
                          {problem.difficulty}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-400 line-clamp-2">
                        {problem.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {problem.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-gray-300 border-gray-600">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="text-sm text-gray-400 flex justify-between">
                      <div>Acceptance: {problem.acceptance}</div>
                      <div>Submissions: {problem.submissions}</div>
                    </CardFooter>
                  </Card>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
