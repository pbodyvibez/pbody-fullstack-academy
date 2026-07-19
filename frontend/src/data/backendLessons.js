const backend = [

  // ===========================================
  // MODULE 1 — NODE.JS
  // ===========================================

  {
    id: 101,
    title: "Introduction to Node.js",
    duration: "45m",
    xp: 60,
    difficulty: "Beginner",
    module: "Node.js",
    assignment: false,
    project: false,
    quiz: true,
    videoId: "fBNz5xF-Kx4",
    description:
      "Understand what Node.js is, why it exists and how JavaScript runs outside the browser.",
    objectives: [
      "Understand Node.js",
      "Install Node",
      "Run JavaScript from terminal"
    ]
  },

  {
    id: 102,
    title: "Node Modules & NPM",
    duration: "50m",
    xp: 70,
    difficulty: "Beginner",
    module: "Node.js",
    assignment: true,
    project: false,
    quiz: true,
    videoId: "fBNz5xF-Kx4",
    description:
      "Learn Node modules, package.json and how to manage dependencies using NPM.",
    objectives: [
      "CommonJS modules",
      "package.json",
      "Installing packages",
      "Scripts"
    ]
  },

  {
    id: 103,
    title: "Working with File System",
    duration: "55m",
    xp: 80,
    difficulty: "Beginner",
    module: "Node.js",
    assignment: true,
    project: true,
    quiz: true,
    videoId: "fBNz5xF-Kx4",
    description:
      "Read, write and manage files using Node's File System module.",
    objectives: [
      "Read files",
      "Write files",
      "Delete files",
      "Directories"
    ]
  },

  // ===========================================
  // MODULE 2 — EXPRESS
  // ===========================================

  {
    id: 104,
    title: "Introduction to Express",
    duration: "1h",
    xp: 90,
    difficulty: "Intermediate",
    module: "Express",
    assignment: false,
    project: false,
    quiz: true,
    videoId: "fBNz5xF-Kx4",
    description:
      "Build your first Express server and understand routing.",
    objectives: [
      "Create server",
      "Handle requests",
      "HTTP methods"
    ]
  },

  {
    id: 105,
    title: "Express Routing",
    duration: "55m",
    xp: 90,
    difficulty: "Intermediate",
    module: "Express",
    assignment: true,
    project: false,
    quiz: true,
    videoId: "fBNz5xF-Kx4",
    description:
      "Organize applications using Express routes and routers.",
    objectives: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ]
  },

  {
    id: 106,
    title: "Middleware",
    duration: "1h",
    xp: 100,
    difficulty: "Intermediate",
    module: "Express",
    assignment: true,
    project: true,
    quiz: true,
    videoId: "fBNz5xF-Kx4",
    description:
      "Understand middleware and request processing in Express.",
    objectives: [
      "Application middleware",
      "Router middleware",
      "Error middleware"
    ]
  },

  // ===========================================
  // MODULE 3 — DATABASE
  // ===========================================

  {
    id: 107,
    title: "MongoDB Fundamentals",
    duration: "1h",
    xp: 110,
    difficulty: "Intermediate",
    module: "Database",
    assignment: false,
    project: false,
    quiz: true,
    videoId: "fBNz5xF-Kx4",
    description:
      "Learn MongoDB collections, documents and databases.",
    objectives: [
      "Collections",
      "Documents",
      "CRUD basics"
    ]
  },

  {
    id: 108,
    title: "Mongoose ODM",
    duration: "1h",
    xp: 120,
    difficulty: "Intermediate",
    module: "Database",
    assignment: true,
    project: false,
    quiz: true,
    videoId: "fBNz5xF-Kx4",
    description:
      "Connect Node.js to MongoDB using Mongoose.",
    objectives: [
      "Schemas",
      "Models",
      "Validation"
    ]
  },

  {
    id: 109,
    title: "CRUD Operations",
    duration: "1h 15m",
    xp: 120,
    difficulty: "Intermediate",
    module: "Database",
    assignment: true,
    project: true,
    quiz: true,
    videoId: "fBNz5xF-Kx4",
    description:
      "Build complete Create, Read, Update and Delete APIs.",
    objectives: [
      "Create",
      "Read",
      "Update",
      "Delete"
    ]
  },
    // ===========================================
  // MODULE 4 — AUTHENTICATION
  // ===========================================

  {
    id: 110,
    title: "JWT Authentication",
    duration: "1h",
    xp: 130,
    difficulty: "Advanced",
    module: "Authentication",
    assignment: false,
    project: false,
    quiz: true,
    videoId: "fBNz5xF-Kx4",
    description:
      "Understand authentication using JSON Web Tokens.",
    objectives: [
      "JWT",
      "Access Tokens",
      "Authorization",
      "Security"
    ]
  },

  {
    id: 111,
    title: "User Registration System",
    duration: "1h",
    xp: 140,
    difficulty: "Advanced",
    module: "Authentication",
    assignment: true,
    project: true,
    quiz: true,
    videoId: "fBNz5xF-Kx4",
    description:
      "Build a secure registration and login system using Express and MongoDB.",
    objectives: [
      "Register users",
      "Login users",
      "Password hashing",
      "JWT login"
    ]
  },

  {
    id: 112,
    title: "Protected Routes",
    duration: "55m",
    xp: 140,
    difficulty: "Advanced",
    module: "Authentication",
    assignment: true,
    project: false,
    quiz: true,
    videoId: "fBNz5xF-Kx4",
    description:
      "Protect backend routes using authentication middleware.",
    objectives: [
      "Middleware",
      "Protected APIs",
      "Authorization",
      "Role checking"
    ]
  },

  // ===========================================
  // MODULE 5 — REST APIs
  // ===========================================

  {
    id: 113,
    title: "REST API Design",
    duration: "1h",
    xp: 150,
    difficulty: "Advanced",
    module: "REST API",
    assignment: true,
    project: false,
    quiz: true,
    videoId: "fBNz5xF-Kx4",
    description:
      "Design clean, scalable and production-ready REST APIs.",
    objectives: [
      "REST principles",
      "Status codes",
      "Endpoints",
      "Best practices"
    ]
  },

  {
    id: 114,
    title: "Backend Deployment",
    duration: "50m",
    xp: 160,
    difficulty: "Advanced",
    module: "Deployment",
    assignment: true,
    project: true,
    quiz: true,
    videoId: "fBNz5xF-Kx4",
    description:
      "Deploy your backend application to the cloud using modern deployment platforms.",
    objectives: [
      "Environment variables",
      "Cloud deployment",
      "Production configuration",
      "Debugging"
    ]
  },

  // ===========================================
  // MODULE 6 — CAPSTONE
  // ===========================================

  {
    id: 115,
    title: "Backend Capstone Project",
    duration: "2h",
    xp: 300,
    difficulty: "Advanced",
    module: "Capstone",
    assignment: true,
    project: true,
    quiz: true,
    videoId: "fBNz5xF-Kx4",
    description:
      "Build a complete backend powering a real-world application with authentication, database integration and deployment.",
    objectives: [
      "Complete backend API",
      "Authentication",
      "MongoDB",
      "Production deployment"
    ]
  }

];

export default backend;