const cad = [

  // ===========================================
  // MODULE 1 — AUTOCAD BASICS
  // ===========================================

  {
    id: 401,
    title: "Introduction to AutoCAD",
    duration: "40m",
    xp: 60,
    difficulty: "Beginner",
    module: "AutoCAD Basics",
    assignment: false,
    project: false,
    quiz: true,
    videoId: "VtLzL4uN2hM",
    description:
      "Learn the AutoCAD interface and understand how CAD software works.",
    objectives: [
      "Workspace",
      "Navigation",
      "Drawing setup",
      "Basic commands"
    ]
  },

  {
    id: 402,
    title: "Drawing Basic Objects",
    duration: "55m",
    xp: 70,
    difficulty: "Beginner",
    module: "AutoCAD Basics",
    assignment: true,
    project: false,
    quiz: true,
    videoId: "VtLzL4uN2hM",
    description:
      "Create lines, circles, rectangles and other basic drawing objects.",
    objectives: [
      "Lines",
      "Circles",
      "Rectangles",
      "Polygons"
    ]
  },

  {
    id: 403,
    title: "Modify Commands",
    duration: "1h",
    xp: 80,
    difficulty: "Beginner",
    module: "AutoCAD Basics",
    assignment: true,
    project: true,
    quiz: true,
    videoId: "VtLzL4uN2hM",
    description:
      "Master editing tools to efficiently modify drawings.",
    objectives: [
      "Move",
      "Copy",
      "Mirror",
      "Trim",
      "Extend"
    ]
  },

  // ===========================================
  // MODULE 2 — 2D DRAFTING
  // ===========================================

  {
    id: 404,
    title: "Precision Drawing",
    duration: "55m",
    xp: 90,
    difficulty: "Intermediate",
    module: "2D Drafting",
    assignment: false,
    project: false,
    quiz: true,
    videoId: "VtLzL4uN2hM",
    description:
      "Draw accurately using object snaps, tracking and coordinates.",
    objectives: [
      "OSNAP",
      "Tracking",
      "Coordinates",
      "Precision"
    ]
  },

  {
    id: 405,
    title: "Dimensions & Annotation",
    duration: "1h",
    xp: 100,
    difficulty: "Intermediate",
    module: "2D Drafting",
    assignment: true,
    project: false,
    quiz: true,
    videoId: "VtLzL4uN2hM",
    description:
      "Create professional engineering annotations and dimensions.",
    objectives: [
      "Dimension styles",
      "Text",
      "Leaders",
      "Annotation"
    ]
  },

  {
    id: 406,
    title: "Blocks & Attributes",
    duration: "1h",
    xp: 110,
    difficulty: "Intermediate",
    module: "2D Drafting",
    assignment: true,
    project: true,
    quiz: true,
    videoId: "VtLzL4uN2hM",
    description:
      "Improve productivity using reusable blocks and attributes.",
    objectives: [
      "Blocks",
      "Dynamic blocks",
      "Attributes",
      "Libraries"
    ]
  },

  // ===========================================
  // MODULE 3 — 3D MODELING
  // ===========================================

  {
    id: 407,
    title: "Introduction to 3D Modeling",
    duration: "55m",
    xp: 120,
    difficulty: "Intermediate",
    module: "3D Modeling",
    assignment: false,
    project: false,
    quiz: true,
    videoId: "VtLzL4uN2hM",
    description:
      "Learn AutoCAD's 3D workspace and modeling workflow.",
    objectives: [
      "3D workspace",
      "ViewCube",
      "Navigation",
      "Model setup"
    ]
  },

  {
    id: 408,
    title: "Solid Modeling",
    duration: "1h 20m",
    xp: 140,
    difficulty: "Advanced",
    module: "3D Modeling",
    assignment: true,
    project: true,
    quiz: true,
    videoId: "VtLzL4uN2hM",
    description:
      "Create professional solid models using extrusion, revolve and loft.",
    objectives: [
      "Extrude",
      "Revolve",
      "Sweep",
      "Loft"
    ]
  },

  {
    id: 409,
    title: "Rendering & Visualization",
    duration: "1h",
    xp: 150,
    difficulty: "Advanced",
    module: "Visualization",
    assignment: true,
    project: false,
    quiz: true,
    videoId: "VtLzL4uN2hM",
    description:
      "Produce realistic visualizations of CAD models.",
    objectives: [
      "Materials",
      "Lighting",
      "Rendering",
      "Presentation"
    ]
  },
    // ===========================================
  // MODULE 4 — LAYOUTS & PLOTTING
  // ===========================================

  {
    id: 410,
    title: "Paper Space & Layouts",
    duration: "55m",
    xp: 160,
    difficulty: "Advanced",
    module: "Layouts",
    assignment: false,
    project: false,
    quiz: true,
    videoId: "VtLzL4uN2hM",
    description:
      "Learn how to prepare professional engineering sheets using layouts.",
    objectives: [
      "Paper Space",
      "Viewports",
      "Layout setup",
      "Scale"
    ]
  },

  {
    id: 411,
    title: "Printing & Plotting",
    duration: "50m",
    xp: 170,
    difficulty: "Advanced",
    module: "Layouts",
    assignment: true,
    project: false,
    quiz: true,
    videoId: "VtLzL4uN2hM",
    description:
      "Print engineering drawings professionally with correct scales.",
    objectives: [
      "Plot styles",
      "PDF export",
      "Printing",
      "Scaling"
    ]
  },

  {
    id: 412,
    title: "Sheet Sets & Documentation",
    duration: "1h",
    xp: 180,
    difficulty: "Advanced",
    module: "Documentation",
    assignment: true,
    project: true,
    quiz: true,
    videoId: "VtLzL4uN2hM",
    description:
      "Manage large engineering projects using Sheet Sets.",
    objectives: [
      "Sheet Sets",
      "Documentation",
      "Project organization",
      "Drawing management"
    ]
  },

  // ===========================================
  // MODULE 5 — ADVANCED CAD
  // ===========================================

  {
    id: 413,
    title: "External References (XREF)",
    duration: "55m",
    xp: 190,
    difficulty: "Advanced",
    module: "Advanced CAD",
    assignment: false,
    project: false,
    quiz: true,
    videoId: "VtLzL4uN2hM",
    description:
      "Collaborate efficiently using external references.",
    objectives: [
      "Attach XREF",
      "Reload",
      "Detach",
      "Reference management"
    ]
  },

  {
    id: 414,
    title: "CAD Standards & Best Practices",
    duration: "1h",
    xp: 200,
    difficulty: "Advanced",
    module: "Advanced CAD",
    assignment: true,
    project: true,
    quiz: true,
    videoId: "VtLzL4uN2hM",
    description:
      "Follow professional CAD standards used in engineering companies.",
    objectives: [
      "Layers",
      "Templates",
      "Standards",
      "Quality control"
    ]
  },

  // ===========================================
  // MODULE 6 — CAPSTONE
  // ===========================================

  {
    id: 415,
    title: "Professional CAD Capstone Project",
    duration: "2h",
    xp: 350,
    difficulty: "Advanced",
    module: "Capstone",
    assignment: true,
    project: true,
    quiz: true,
    videoId: "VtLzL4uN2hM",
    description:
      "Complete a full engineering drawing package from concept to final production sheets.",
    objectives: [
      "2D drafting",
      "3D modelling",
      "Layouts",
      "Professional documentation"
    ]
  }

];

export default cad;