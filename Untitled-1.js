import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { MotionDiv } from "framer-motion";
import { BookOpen, Brain } from "lucide-react";

const subjects = {
  "Class 1": ["Math", "English", "Science"],
  "Class 2": ["Math", "English", "Science"],
  "Class 3": ["Math", "English", "Science", "Social Studies"],
  "Class 4": ["Math", "English", "Science", "Social Studies"],
  "Class 5": ["Math", "English", "Science", "Social Studies", "Computer"],
  "Class 6": ["Math", "English", "Science", "History", "Geography"],
  "Class 7": ["Math", "English", "Science", "History", "Geography", "AI Basics"],
  "Class 8": ["Math", "English", "Science", "History", "Geography", "AI Advanced"]
};

export default function Elearning() {
  const [selectedClass, setSelectedClass] = useState("Class 1");

  return (
    <div className="min-h-screen p-6 bg-blue-50 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">E-Learning Platform</h1>
      <Select onValueChange={setSelectedClass}>
        <SelectTrigger className="w-64 bg-white shadow p-2 rounded">
          {selectedClass}
        </SelectTrigger>
        <SelectContent>
          {Object.keys(subjects).map((cls) => (
            <SelectItem key={cls} value={cls}>
              {cls}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {subjects[selectedClass].map((subject) => (
          <MotionDiv key={subject} className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
            <BookOpen className="h-10 w-10 text-blue-500 mb-2" />
            <h2 className="text-lg font-semibold">{subject}</h2>
            <Button className="mt-2">Explore</Button>
          </MotionDiv>
        ))}
      </div>
      <div className="mt-8 p-4 bg-white shadow rounded-lg flex flex-col items-center">
        <Brain className="h-10 w-10 text-green-500 mb-2" />
        <h2 className="text-lg font-semibold">AI Tutor</h2>
        <p className="text-gray-600 text-center">Ask AI for help with any topic!</p>
        <Button className="mt-2">Chat with AI</Button>
      </div>
    </div>
  );
}