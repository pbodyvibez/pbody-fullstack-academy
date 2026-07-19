import lessons from "./lessons";

const dailyMissions = [

  {
    id: "watch-lesson",
    title: "Watch 1 Lesson",
    description: "Complete any lesson today",
    xp: 50,
    type: "lesson"
  },

  {
    id: "complete-quiz",
    title: "Complete a Quiz",
    description: "Test your knowledge with a quiz",
    xp: 75,
    type: "quiz"
  },

  {
    id: "code-practice",
    title: "Coding Practice",
    description: "Spend 20 minutes coding",
    xp: 100,
    type: "practice"
  },

  {
    id: "ai-chat",
    title: "Ask AI Mentor",
    description: "Interact with AI Mentor once today",
    xp: 40,
    type: "ai"
  }

];

export default dailyMissions;