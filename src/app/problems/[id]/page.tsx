"use client";

import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

// Define types for our problem data
type CodeLanguage = "javascript" | "python" | "java" | "cpp";

type Example = {
  input: string;
  output: string;
  explanation?: string;
};

type Problem = {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
  description: string;
  examples: Example[];
  constraints: string[];
  acceptance: string;
  submissions: number;
  hints: string[];
  starterCode: Record<CodeLanguage, string>;
  solution: Record<CodeLanguage, string>;
};

type SubmissionResult = {
  success: boolean;
  message: string;
  runtime: string;
  memory: string;
};

// Mock data for problems - in a real app, this would come from your backend API
const MOCK_PROBLEMS: Problem[] = [
  {
    id: "1",
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Array", "Hash Table"],
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 6, we return [0, 1]."
      }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    acceptance: "47%",
    submissions: 1250,
    hints: [
      "A brute force approach would be to consider every pair of elements and check if they sum to the target.",
      "Can you use a hash table to make this more efficient?",
      "Think about what you need to find: the complement of the current number (target - nums[i])."
    ],
    starterCode: {
      javascript: "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n    \n};",
      python: "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        ",
      java: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        \n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        \n    }\n};"
    },
    solution: {
      javascript: "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n    const map = new Map();\n    \n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        \n        if (map.has(complement)) {\n            return [map.get(complement), i];\n        }\n        \n        map.set(nums[i], i);\n    }\n    \n    return [];\n};",
      python: "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        num_map = {}\n        \n        for i, num in enumerate(nums):\n            complement = target - num\n            \n            if complement in num_map:\n                return [num_map[complement], i]\n            \n            num_map[num] = i\n        \n        return []",
      java: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        \n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            \n            if (map.containsKey(complement)) {\n                return new int[] { map.get(complement), i };\n            }\n            \n            map.put(nums[i], i);\n        }\n        \n        return new int[0];\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> map;\n        \n        for (int i = 0; i < nums.size(); i++) {\n            int complement = target - nums[i];\n            \n            if (map.find(complement) != map.end()) {\n                return {map[complement], i};\n            }\n            \n            map[nums[i]] = i;\n        }\n        \n        return {};\n    }\n};"
    }
  },
  // Other problems would be defined here
];

// Mock function to simulate code submission and evaluation
const evaluateCode = (code: string, language: CodeLanguage, problemId: string) => {
  return new Promise<SubmissionResult>((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      // For demo purposes, we'll just check if the code includes some expected patterns
      // In a real app, you would send this to your backend for proper evaluation
      const problem = MOCK_PROBLEMS.find(p => p.id === problemId);
      
      if (!problem) {
        resolve({ 
          success: false, 
          message: "Problem not found", 
          runtime: "N/A", 
          memory: "N/A" 
        });
        return;
      }
      
      // More robust evaluation logic
      let isCorrect = false;
      
      // Check if the code contains the core solution pattern AND has proper implementation
      if (language === "javascript") {
        // Check for proper implementation of Two Sum in JavaScript
        isCorrect = code.includes("map.has(complement)") && 
                   code.includes("map.set(nums[i], i)") && 
                   code.includes("return [map.get(complement), i]") &&
                   code.includes("for (let i = 0; i < nums.length; i++)");
      } else if (language === "python") {
        // Check for proper implementation of Two Sum in Python
        isCorrect = code.includes("complement in num_map") && 
                   code.includes("num_map[num] = i") && 
                   code.includes("return [num_map[complement], i]") &&
                   code.includes("for i, num in enumerate(nums)");
      } else if (language === "java") {
        // Check for proper implementation of Two Sum in Java
        isCorrect = code.includes("map.containsKey(complement)") && 
                   code.includes("map.put(nums[i], i)") && 
                   code.includes("return new int[] { map.get(complement), i }") &&
                   code.includes("for (int i = 0; i < nums.length; i++)");
      } else if (language === "cpp") {
        // Check for proper implementation of Two Sum in C++
        isCorrect = code.includes("map.find(complement) != map.end()") && 
                   code.includes("map[nums[i]] = i") && 
                   code.includes("return {map[complement], i}") &&
                   code.includes("for (int i = 0; i < nums.size(); i++)");
      }
      
      // Check if the code is too short (likely incomplete)
      const minCodeLength = {
        javascript: 150,
        python: 120,
        java: 180,
        cpp: 180
      };
      
      if (code.length < minCodeLength[language]) {
        isCorrect = false;
      }
      
      if (isCorrect) {
        resolve({ 
          success: true, 
          message: "All test cases passed!\n\nTest Case 1: nums = [2,7,11,15], target = 9 ✓\nTest Case 2: nums = [3,2,4], target = 6 ✓\nTest Case 3: nums = [3,3], target = 6 ✓", 
          runtime: "56 ms", 
          memory: "42.5 MB" 
        });
      } else {
        resolve({ 
          success: false, 
          message: "Failed test cases:\n\nTest Case 1: nums = [2,7,11,15], target = 9 ✗\nExpected: [0,1]\nOutput: Incorrect or incomplete solution", 
          runtime: "N/A", 
          memory: "N/A" 
        });
      }
    }, 2000); // 2 second delay to simulate processing
  });
};

export default function ProblemPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap the params Promise using React.use()
  const unwrappedParams = use(params);
  const problemId = unwrappedParams.id;
  
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [problem, setProblem] = useState<Problem | null>(null);
  const [language, setLanguage] = useState<CodeLanguage>("javascript");
  const [code, setCode] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);

  // Set mounted state to true after initial render to prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch problem data
  useEffect(() => {
    if (problemId) {
      // In a real app, this would be an API call to your backend
      const foundProblem = MOCK_PROBLEMS.find(p => p.id === problemId);
      
      if (foundProblem) {
        setProblem(foundProblem);
        setCode(foundProblem.starterCode[language]);
      }
    }
  }, [problemId, language]);

  // Update code when language changes
  useEffect(() => {
    if (problem) {
      setCode(problem.starterCode[language]);
    }
  }, [language, problem]);

  // Handle code submission
  const handleSubmit = async () => {
    if (!problem) return;
    
    setSubmissionStatus('submitting');
    
    try {
      const result = await evaluateCode(code, language, problem.id);
      setSubmissionResult(result);
      setSubmissionStatus(result.success ? 'success' : 'error');
    } catch (error) {
      setSubmissionResult({ 
        success: false, 
        message: "An error occurred during evaluation", 
        runtime: "N/A", 
        memory: "N/A" 
      });
      setSubmissionStatus('error');
    }
  };

  // Prevent hydration errors by only rendering content when mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin"></div>
      </div>
    );
  }

  // Show loading state while fetching problem
  if (!problem) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading problem...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Problem Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-bold text-white">{problem.title}</h1>
              <div className="flex items-center gap-3 mt-2">
                <Badge 
                  className={`
                    ${problem.difficulty === 'Easy' ? 'bg-green-600 hover:bg-green-700' : 
                      problem.difficulty === 'Medium' ? 'bg-yellow-600 hover:bg-yellow-700' : 
                      'bg-red-600 hover:bg-red-700'}
                  `}
                >
                  {problem.difficulty}
                </Badge>
                <span className="text-gray-400 text-sm">Acceptance: {problem.acceptance}</span>
                <span className="text-gray-400 text-sm">Submissions: {problem.submissions}</span>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
              onClick={() => router.push('/problems')}
            >
              Back to Problems
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {problem.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-gray-300 border-gray-600">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Problem Description */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Problem Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-gray-300 whitespace-pre-line">
                {problem.description}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Examples:</h3>
                <div className="space-y-4">
                  {problem.examples.map((example, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-md">
                      <div className="mb-2">
                        <span className="text-gray-400 font-mono">Input: </span>
                        <span className="text-gray-300 font-mono">{example.input}</span>
                      </div>
                      <div className="mb-2">
                        <span className="text-gray-400 font-mono">Output: </span>
                        <span className="text-gray-300 font-mono">{example.output}</span>
                      </div>
                      {example.explanation && (
                        <div>
                          <span className="text-gray-400 font-mono">Explanation: </span>
                          <span className="text-gray-300 font-mono">{example.explanation}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Constraints:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {problem.constraints.map((constraint, index) => (
                    <li key={index} className="font-mono">{constraint}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Hints:</h3>
                <div className="space-y-2">
                  {problem.hints.map((hint, index) => (
                    <div key={index} className="bg-blue-900/30 border border-blue-900 p-3 rounded-md text-gray-300">
                      {hint}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Code Editor and Submission */}
          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">Code Editor</CardTitle>
                  <Select value={language} onValueChange={(value: CodeLanguage) => setLanguage(value)}>
                    <SelectTrigger className="w-[180px] bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select Language" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600 text-white">
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="java">Java</SelectItem>
                      <SelectItem value="cpp">C++</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={code}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCode(e.target.value)}
                  className="min-h-[400px] font-mono bg-gray-900 border-gray-700 text-gray-300"
                  placeholder="Write your solution here..."
                />
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button 
                  onClick={handleSubmit}
                  disabled={submissionStatus === 'submitting'}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {submissionStatus === 'submitting' ? (
                    <>
                      <Clock className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : 'Submit Solution'}
                </Button>
              </CardFooter>
            </Card>

            {/* Submission Results */}
            {submissionStatus !== 'idle' && (
              <Card className={`
                ${submissionStatus === 'success' ? 'bg-green-900/20 border-green-900' : 
                  submissionStatus === 'error' ? 'bg-red-900/20 border-red-900' : 
                  'bg-gray-800 border-gray-700'}
              `}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center">
                    {submissionStatus === 'submitting' ? (
                      <>
                        <Clock className="mr-2 h-5 w-5 text-blue-400" />
                        Evaluating Submission
                      </>
                    ) : submissionStatus === 'success' ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                        Submission Accepted
                      </>
                    ) : (
                      <>
                        <AlertCircle className="mr-2 h-5 w-5 text-red-400" />
                        Submission Failed
                      </>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {submissionStatus === 'submitting' ? (
                    <div className="flex items-center justify-center py-6">
                      <div className="w-8 h-8 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin"></div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-gray-300">
                        {submissionResult?.message}
                      </div>
                      {submissionStatus === 'success' && (
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-800 p-3 rounded-md">
                            <div className="text-gray-400 text-sm">Runtime</div>
                            <div className="text-white font-medium">{submissionResult?.runtime}</div>
                          </div>
                          <div className="bg-gray-800 p-3 rounded-md">
                            <div className="text-gray-400 text-sm">Memory</div>
                            <div className="text-white font-medium">{submissionResult?.memory}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
