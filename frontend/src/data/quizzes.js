const quizzes = {

  // ==========================================
  // FRONTEND COURSE
  // ==========================================

  1: [

    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Transfer Machine Language",
        "Home Tool Markup Language",
        "Hyper Transfer Markup Level"
      ],
      answer: 0
    },

    {
      question: "Which HTML tag creates the largest heading?",
      options: [
        "<h6>",
        "<heading>",
        "<h1>",
        "<head>"
      ],
      answer: 2
    },

    {
      question: "Which tag creates a paragraph?",
      options: [
        "<text>",
        "<paragraph>",
        "<p>",
        "<span>"
      ],
      answer: 2
    },

    {
      question: "Which HTML element inserts an image?",
      options: [
        "<img>",
        "<picture>",
        "<image>",
        "<src>"
      ],
      answer: 0
    },

    {
      question: "Which tag creates a hyperlink?",
      options: [
        "<link>",
        "<a>",
        "<href>",
        "<url>"
      ],
      answer: 1
    }

  ],

  // ==========================================
  // HTML STRUCTURE
  // ==========================================

  2: [

    {
      question: "Which tag defines the document body?",
      options: [
        "<main>",
        "<body>",
        "<section>",
        "<page>"
      ],
      answer: 1
    },

    {
      question: "Which tag contains metadata?",
      options: [
        "<header>",
        "<meta>",
        "<head>",
        "<title>"
      ],
      answer: 2
    },

    {
      question: "What tag displays the browser tab title?",
      options: [
        "<head>",
        "<tab>",
        "<title>",
        "<meta>"
      ],
      answer: 2
    },

    {
      question: "Which element groups navigation links?",
      options: [
        "<menu>",
        "<nav>",
        "<navigation>",
        "<aside>"
      ],
      answer: 1
    },

    {
      question: "Semantic HTML improves:",
      options: [
        "SEO",
        "Accessibility",
        "Readability",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // HTML FORMS
  // ==========================================

  3: [

    {
      question: "Which element creates a form?",
      options: [
        "<input>",
        "<form>",
        "<submit>",
        "<button>"
      ],
      answer: 1
    },

    {
      question: "Which input type hides typed characters?",
      options: [
        "text",
        "email",
        "password",
        "hidden"
      ],
      answer: 2
    },

    {
      question: "Which tag creates a table row?",
      options: [
        "<td>",
        "<tr>",
        "<th>",
        "<table>"
      ],
      answer: 1
    },

    {
      question: "Which tag creates a table header?",
      options: [
        "<thead>",
        "<header>",
        "<th>",
        "<title>"
      ],
      answer: 2
    },

    {
      question: "Which attribute makes an input compulsory?",
      options: [
        "required",
        "validate",
        "needed",
        "mandatory"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // CSS FUNDAMENTALS
  // ==========================================

  4: [

    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Color Style Sheets"
      ],
      answer: 1
    },

    {
      question: "Which property changes text color?",
      options: [
        "font-color",
        "color",
        "text-color",
        "foreground"
      ],
      answer: 1
    },

    {
      question: "Which property changes background color?",
      options: [
        "background",
        "bgcolor",
        "background-color",
        "color"
      ],
      answer: 2
    },

    {
      question: "Which selector targets every element?",
      options: [
        ".",
        "#",
        "*",
        "all"
      ],
      answer: 2
    },

    {
      question: "Which symbol selects a class?",
      options: [
        "#",
        ".",
        "*",
        "@"
      ],
      answer: 1
    }

  ],

  // ==========================================
  // FLEXBOX
  // ==========================================

  5: [

    {
      question: "Which property enables Flexbox?",
      options: [
        "display:flex",
        "flexbox:true",
        "layout:flex",
        "display:block"
      ],
      answer: 0
    },

    {
      question: "Which property aligns items horizontally?",
      options: [
        "justify-content",
        "align-items",
        "text-align",
        "position"
      ],
      answer: 0
    },

    {
      question: "Which property aligns items vertically?",
      options: [
        "justify-content",
        "align-items",
        "float",
        "display"
      ],
      answer: 1
    },

    {
      question: "Which property changes item order?",
      options: [
        "position",
        "index",
        "order",
        "sequence"
      ],
      answer: 2
    },

    {
      question: "Flexbox works best for:",
      options: [
        "One-dimensional layouts",
        "Tables",
        "Images",
        "Databases"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // CSS GRID
  // ==========================================

  6: [

    {
      question: "CSS Grid is mainly used for:",
      options: [
        "Two-dimensional layouts",
        "Animations",
        "Fonts",
        "Forms"
      ],
      answer: 0
    },

    {
      question: "Which property creates columns?",
      options: [
        "grid-template-columns",
        "grid-column-layout",
        "columns",
        "column-grid"
      ],
      answer: 0
    },

    {
      question: "Which property creates rows?",
      options: [
        "grid-template-rows",
        "grid-row-layout",
        "rows",
        "row-template"
      ],
      answer: 0
    },

    {
      question: "Which property creates spacing between grid items?",
      options: [
        "gap",
        "padding",
        "margin",
        "space"
      ],
      answer: 0
    },

    {
      question: "Grid is better than Flexbox for:",
      options: [
        "Page layouts",
        "Buttons",
        "Single rows",
        "Navigation bars"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // RESPONSIVE DESIGN
  // ==========================================

  7: [

    {
      question: "Which CSS feature creates responsive layouts?",
      options: [
        "Media Queries",
        "Selectors",
        "Variables",
        "Animations"
      ],
      answer: 0
    },

    {
      question: "Which unit is relative to screen width?",
      options: [
        "vw",
        "px",
        "cm",
        "pt"
      ],
      answer: 0
    },

    {
      question: "Bootstrap is a:",
      options: [
        "CSS Framework",
        "Database",
        "Programming Language",
        "Compiler"
      ],
      answer: 0
    },

    {
      question: "Mobile-first means:",
      options: [
        "Design for mobile before desktop",
        "Only build mobile apps",
        "Ignore desktop",
        "Build desktop first"
      ],
      answer: 0
    },

    {
      question: "Responsive websites adapt to:",
      options: [
        "Different screen sizes",
        "Only laptops",
        "Only phones",
        "Only tablets"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // JAVASCRIPT BASICS
  // ==========================================

  8: [

    {
      question: "Which keyword declares a variable in modern JavaScript?",
      options: [
        "let",
        "var",
        "const",
        "Both let and const"
      ],
      answer: 3
    },

    {
      question: "Which symbol is used for comments?",
      options: [
        "//",
        "**",
        "##",
        "<!--"
      ],
      answer: 0
    },

    {
      question: "Which company developed JavaScript?",
      options: [
        "Microsoft",
        "Netscape",
        "Google",
        "IBM"
      ],
      answer: 1
    },

    {
      question: "Which operator checks equality and type?",
      options: [
        "=",
        "==",
        "===",
        "!="
      ],
      answer: 2
    },

    {
      question: "Which function prints to the browser console?",
      options: [
        "print()",
        "console.log()",
        "display()",
        "echo()"
      ],
      answer: 1
    }

  ],

  // ==========================================
  // FUNCTIONS & OBJECTS
  // ==========================================

  9: [

    {
      question: "Functions are used to:",
      options: [
        "Repeat reusable code",
        "Store images",
        "Create databases",
        "Build CSS"
      ],
      answer: 0
    },

    {
      question: "Which keyword returns a value?",
      options: [
        "give",
        "return",
        "break",
        "stop"
      ],
      answer: 1
    },

    {
      question: "Objects store:",
      options: [
        "Key-value pairs",
        "Only numbers",
        "Only strings",
        "Only arrays"
      ],
      answer: 0
    },

    {
      question: "Which notation accesses an object property?",
      options: [
        "Dot notation",
        "Slash notation",
        "Arrow notation",
        "Pipe notation"
      ],
      answer: 0
    },

    {
      question: "Arrays are:",
      options: [
        "Ordered collections",
        "CSS properties",
        "HTML tags",
        "Functions"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // DOM MANIPULATION
  // ==========================================

  10: [

    {
      question: "DOM stands for:",
      options: [
        "Document Object Model",
        "Data Object Method",
        "Desktop Object Model",
        "Digital Output Mode"
      ],
      answer: 0
    },

    {
      question: "Which method selects an element by ID?",
      options: [
        "query()",
        "getElementById()",
        "findId()",
        "selectId()"
      ],
      answer: 1
    },

    {
      question: "Which property changes HTML content?",
      options: [
        "innerHTML",
        "textColor",
        "bodyText",
        "htmlContent"
      ],
      answer: 0
    },

    {
      question: "Which event occurs when a button is pressed?",
      options: [
        "onhover",
        "onclick",
        "onpress",
        "onfocus"
      ],
      answer: 1
    },

    {
      question: "DOM manipulation changes:",
      options: [
        "The webpage dynamically",
        "The database",
        "The operating system",
        "The browser settings"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // ES6 MODERN JAVASCRIPT
  // ==========================================

  11: [

    {
      question: "Arrow functions use:",
      options: [
        "=>",
        "->",
        "::",
        "==>"
      ],
      answer: 0
    },

    {
      question: "Which keyword creates immutable variables?",
      options: [
        "let",
        "var",
        "const",
        "fixed"
      ],
      answer: 2
    },

    {
      question: "Template literals use:",
      options: [
        "Double quotes",
        "Single quotes",
        "Backticks",
        "Brackets"
      ],
      answer: 2
    },

    {
      question: "Spread operator is:",
      options: [
        "...",
        "***",
        "===",
        "++"
      ],
      answer: 0
    },

    {
      question: "Destructuring helps:",
      options: [
        "Extract values easily",
        "Delete objects",
        "Compress code",
        "Create loops"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // REACT INTRODUCTION
  // ==========================================

  12: [

    {
      question: "React is a:",
      options: [
        "JavaScript Library",
        "Programming Language",
        "Database",
        "Operating System"
      ],
      answer: 0
    },

    {
      question: "Who developed React?",
      options: [
        "Google",
        "Microsoft",
        "Meta (Facebook)",
        "Apple"
      ],
      answer: 2
    },

    {
      question: "React applications are built using:",
      options: [
        "Components",
        "Tables",
        "Databases",
        "Classes only"
      ],
      answer: 0
    },

    {
      question: "JSX stands for:",
      options: [
        "JavaScript XML",
        "Java Syntax XML",
        "JSON XML",
        "Java Extended"
      ],
      answer: 0
    },

    {
      question: "React mainly helps build:",
      options: [
        "User Interfaces",
        "Operating Systems",
        "Databases",
        "Compilers"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // COMPONENTS & PROPS
  // ==========================================

  13: [

    {
      question: "Props are used to:",
      options: [
        "Pass data to components",
        "Store databases",
        "Create CSS",
        "Build APIs"
      ],
      answer: 0
    },

    {
      question: "Components should begin with:",
      options: [
        "Uppercase letter",
        "Lowercase letter",
        "Number",
        "Symbol"
      ],
      answer: 0
    },

    {
      question: "Props are:",
      options: [
        "Read-only",
        "Editable",
        "Deleted automatically",
        "Functions only"
      ],
      answer: 0
    },

    {
      question: "Reusable UI blocks are called:",
      options: [
        "Functions",
        "Components",
        "Objects",
        "Variables"
      ],
      answer: 1
    },

    {
      question: "Props improve:",
      options: [
        "Component Reusability",
        "Database Speed",
        "Internet Speed",
        "Browser Updates"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // REACT HOOKS
  // ==========================================

  14: [

    {
      question: "Which hook stores state?",
      options: [
        "useState",
        "useHook",
        "useData",
        "useProps"
      ],
      answer: 0
    },

    {
      question: "Which hook handles side effects?",
      options: [
        "useFetch",
        "useEffect",
        "useRender",
        "useUpdate"
      ],
      answer: 1
    },

    {
      question: "Hooks can only be used:",
      options: [
        "Inside functional components",
        "Inside CSS",
        "Inside HTML",
        "Inside JSON"
      ],
      answer: 0
    },

    {
      question: "State updates cause:",
      options: [
        "Component re-render",
        "Application shutdown",
        "Database reset",
        "Browser restart"
      ],
      answer: 0
    },

    {
      question: "Hooks were introduced in React:",
      options: [
        "16.8",
        "15",
        "17",
        "18"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // FRONTEND CAPSTONE
  // ==========================================

  15: [

    {
      question: "A Capstone project is:",
      options: [
        "A final comprehensive project",
        "A quiz",
        "A database",
        "A CSS file"
      ],
      answer: 0
    },

    {
      question: "A portfolio project should:",
      options: [
        "Solve real-world problems",
        "Contain only HTML",
        "Be unfinished",
        "Be copied"
      ],
      answer: 0
    },

    {
      question: "Which is most important during project development?",
      options: [
        "Planning",
        "Guessing",
        "Skipping testing",
        "Ignoring users"
      ],
      answer: 0
    },

    {
      question: "Git is mainly used for:",
      options: [
        "Version Control",
        "Design",
        "Hosting Videos",
        "Writing CSS"
      ],
      answer: 0
    },

    {
      question: "The final project demonstrates:",
      options: [
        "Complete understanding",
        "Only theory",
        "Only CSS",
        "Only HTML"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // NODE.JS INTRODUCTION
  // ==========================================

  101: [

    {
      question: "Node.js is built on which JavaScript engine?",
      options: [
        "SpiderMonkey",
        "V8",
        "Chakra",
        "Rhino"
      ],
      answer: 1
    },

    {
      question: "Node.js runs JavaScript:",
      options: [
        "Only in browsers",
        "On the server",
        "Inside CSS",
        "Inside HTML"
      ],
      answer: 1
    },

    {
      question: "Node.js is primarily used for:",
      options: [
        "Backend development",
        "Photo editing",
        "Video editing",
        "Game consoles"
      ],
      answer: 0
    },

    {
      question: "Node.js is:",
      options: [
        "Single-threaded",
        "Multi-browser",
        "A database",
        "A compiler"
      ],
      answer: 0
    },

    {
      question: "Node.js uses an event-driven architecture.",
      options: [
        "True",
        "False",
        "Sometimes",
        "Only on Windows"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // NODE MODULES & NPM
  // ==========================================

  102: [

    {
      question: "NPM stands for:",
      options: [
        "Node Package Manager",
        "New Programming Method",
        "Node Program Module",
        "Network Package Manager"
      ],
      answer: 0
    },

    {
      question: "Which command installs a package?",
      options: [
        "npm install",
        "npm create",
        "node install",
        "install package"
      ],
      answer: 0
    },

    {
      question: "package.json stores:",
      options: [
        "Project metadata",
        "CSS",
        "Database tables",
        "Videos"
      ],
      answer: 0
    },

    {
      question: "Built-in modules include:",
      options: [
        "fs",
        "express",
        "mongoose",
        "react"
      ],
      answer: 0
    },

    {
      question: "Which command initializes package.json?",
      options: [
        "npm init",
        "node init",
        "npm create",
        "npm new"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // FILE SYSTEM
  // ==========================================

  103: [

    {
      question: "Which module handles files?",
      options: [
        "fs",
        "http",
        "path",
        "os"
      ],
      answer: 0
    },

    {
      question: "readFile() is used to:",
      options: [
        "Read files",
        "Delete files",
        "Rename files",
        "Move files"
      ],
      answer: 0
    },

    {
      question: "writeFile() is used to:",
      options: [
        "Create or overwrite files",
        "Delete folders",
        "Run servers",
        "Create databases"
      ],
      answer: 0
    },

    {
      question: "Node filesystem operations are commonly:",
      options: [
        "Asynchronous",
        "Always synchronous",
        "Impossible",
        "Database only"
      ],
      answer: 0
    },

    {
      question: "Which module helps with file paths?",
      options: [
        "path",
        "express",
        "mongoose",
        "http"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // EXPRESS INTRODUCTION
  // ==========================================

  104: [

    {
      question: "Express is a:",
      options: [
        "Node.js Framework",
        "Database",
        "Programming Language",
        "Operating System"
      ],
      answer: 0
    },

    {
      question: "Express simplifies:",
      options: [
        "Building APIs",
        "Creating videos",
        "Editing photos",
        "Writing CSS"
      ],
      answer: 0
    },

    {
      question: "Which function creates an Express app?",
      options: [
        "express()",
        "createApp()",
        "new Express()",
        "app.create()"
      ],
      answer: 0
    },

    {
      question: "Express applications listen using:",
      options: [
        "app.listen()",
        "listenServer()",
        "server.run()",
        "startServer()"
      ],
      answer: 0
    },

    {
      question: "Express mainly handles:",
      options: [
        "HTTP Requests",
        "CSS",
        "HTML",
        "SQL Queries"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // EXPRESS ROUTING
  // ==========================================

  105: [

    {
      question: "Routes define:",
      options: [
        "Application endpoints",
        "Database tables",
        "CSS layouts",
        "Folders"
      ],
      answer: 0
    },

    {
      question: "GET requests retrieve:",
      options: [
        "Data",
        "Delete records",
        "Update records",
        "Stop servers"
      ],
      answer: 0
    },

    {
      question: "POST requests usually:",
      options: [
        "Create resources",
        "Delete resources",
        "Read files",
        "Compile code"
      ],
      answer: 0
    },

    {
      question: "PUT is commonly used for:",
      options: [
        "Updating resources",
        "Creating folders",
        "Reading files",
        "Starting servers"
      ],
      answer: 0
    },

    {
      question: "DELETE request removes:",
      options: [
        "Resources",
        "Styles",
        "Components",
        "Variables"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // MIDDLEWARE
  // ==========================================

  106: [

    {
      question: "Middleware executes:",
      options: [
        "Between request and response",
        "After server shutdown",
        "Before HTML loads",
        "Inside CSS"
      ],
      answer: 0
    },

    {
      question: "Which middleware parses JSON?",
      options: [
        "express.json()",
        "express.parse()",
        "json.middleware()",
        "body.json()"
      ],
      answer: 0
    },

    {
      question: "Middleware can:",
      options: [
        "Modify requests",
        "End responses",
        "Call next()",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "next() tells Express to:",
      options: [
        "Continue to the next middleware",
        "Restart the server",
        "Exit Node",
        "Delete data"
      ],
      answer: 0
    },

    {
      question: "Authentication is commonly implemented using:",
      options: [
        "Middleware",
        "HTML",
        "CSS",
        "Bootstrap"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // MONGODB FUNDAMENTALS
  // ==========================================

  107: [

    {
      question: "MongoDB is a:",
      options: [
        "NoSQL Database",
        "SQL Server",
        "Programming Language",
        "Framework"
      ],
      answer: 0
    },

    {
      question: "MongoDB stores data as:",
      options: [
        "Documents",
        "Tables",
        "Rows",
        "Cells"
      ],
      answer: 0
    },

    {
      question: "Collections are similar to:",
      options: [
        "Tables",
        "Functions",
        "Classes",
        "Variables"
      ],
      answer: 0
    },

    {
      question: "MongoDB documents are written in:",
      options: [
        "JSON-like format",
        "XML only",
        "CSV",
        "HTML"
      ],
      answer: 0
    },

    {
      question: "MongoDB is ideal for:",
      options: [
        "Flexible schemas",
        "Only spreadsheets",
        "Image editing",
        "Operating systems"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // MONGOOSE
  // ==========================================

  108: [

    {
      question: "Mongoose is a:",
      options: [
        "MongoDB ODM",
        "Database",
        "Framework",
        "Compiler"
      ],
      answer: 0
    },

    {
      question: "ODM stands for:",
      options: [
        "Object Data Modeling",
        "Object Document Mapper",
        "Object Database Method",
        "Open Data Manager"
      ],
      answer: 1
    },

    {
      question: "Schemas define:",
      options: [
        "Document structure",
        "CSS styles",
        "HTML pages",
        "API routes"
      ],
      answer: 0
    },

    {
      question: "Models are created from:",
      options: [
        "Schemas",
        "Arrays",
        "Functions",
        "Variables"
      ],
      answer: 0
    },

    {
      question: "Mongoose validates:",
      options: [
        "Database data",
        "CSS",
        "Images",
        "Videos"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // CRUD OPERATIONS
  // ==========================================

  109: [

    {
      question: "CRUD stands for:",
      options: [
        "Create Read Update Delete",
        "Copy Read Update Design",
        "Create Render Upload Download",
        "Compile Run Update Deploy"
      ],
      answer: 0
    },

    {
      question: "Which method creates a document?",
      options: [
        "create()",
        "find()",
        "delete()",
        "update()"
      ],
      answer: 0
    },

    {
      question: "find() is used to:",
      options: [
        "Read documents",
        "Delete documents",
        "Update documents",
        "Restart database"
      ],
      answer: 0
    },

    {
      question: "findByIdAndUpdate() is used for:",
      options: [
        "Updating",
        "Deleting",
        "Reading",
        "Connecting"
      ],
      answer: 0
    },

    {
      question: "findByIdAndDelete() removes:",
      options: [
        "A document",
        "The server",
        "The schema",
        "The project"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // JWT AUTHENTICATION
  // ==========================================

  110: [

    {
      question: "JWT stands for:",
      options: [
        "JSON Web Token",
        "Java Web Tool",
        "JSON Website Token",
        "JavaScript Web Token"
      ],
      answer: 0
    },

    {
      question: "JWT is mainly used for:",
      options: [
        "Authentication",
        "CSS Styling",
        "Databases",
        "React Components"
      ],
      answer: 0
    },

    {
      question: "A JWT contains:",
      options: [
        "Header Payload Signature",
        "Username Password",
        "Database Tables",
        "Only JSON"
      ],
      answer: 0
    },

    {
      question: "JWTs are commonly sent in:",
      options: [
        "Authorization Header",
        "HTML Body",
        "CSS File",
        "Image"
      ],
      answer: 0
    },

    {
      question: "JWT improves:",
      options: [
        "Secure authentication",
        "CSS performance",
        "Internet speed",
        "Graphics"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // USER REGISTRATION
  // ==========================================

  111: [

    {
      question: "Passwords should always be:",
      options: [
        "Hashed",
        "Stored in plain text",
        "Ignored",
        "Printed"
      ],
      answer: 0
    },

    {
      question: "Which library hashes passwords?",
      options: [
        "bcrypt",
        "axios",
        "express",
        "mongoose"
      ],
      answer: 0
    },

    {
      question: "Registration creates:",
      options: [
        "A new user account",
        "A CSS file",
        "A database",
        "An API"
      ],
      answer: 0
    },

    {
      question: "Email validation helps:",
      options: [
        "Prevent invalid registrations",
        "Speed internet",
        "Improve CSS",
        "Delete users"
      ],
      answer: 0
    },

    {
      question: "Passwords should never be:",
      options: [
        "Stored as plain text",
        "Encrypted",
        "Validated",
        "Hashed"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // PROTECTED ROUTES
  // ==========================================

  112: [

    {
      question: "Protected routes require:",
      options: [
        "Authentication",
        "CSS",
        "HTML",
        "Bootstrap"
      ],
      answer: 0
    },

    {
      question: "Middleware verifies:",
      options: [
        "JWT Tokens",
        "Images",
        "Videos",
        "CSS"
      ],
      answer: 0
    },

    {
      question: "Unauthorized users receive:",
      options: [
        "401",
        "200",
        "500",
        "100"
      ],
      answer: 0
    },

    {
      question: "Authentication improves:",
      options: [
        "Security",
        "Animations",
        "Fonts",
        "Icons"
      ],
      answer: 0
    },

    {
      question: "Protected routes prevent:",
      options: [
        "Unauthorized access",
        "React rendering",
        "CSS loading",
        "HTML parsing"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // REST API DESIGN
  // ==========================================

  113: [

    {
      question: "REST stands for:",
      options: [
        "Representational State Transfer",
        "Remote Server Technology",
        "Resource Server Transfer",
        "Represent Server Tools"
      ],
      answer: 0
    },

    {
      question: "REST APIs communicate primarily using:",
      options: [
        "HTTP",
        "FTP",
        "SMTP",
        "SSH"
      ],
      answer: 0
    },

    {
      question: "Which HTTP method creates resources?",
      options: [
        "POST",
        "GET",
        "DELETE",
        "OPTIONS"
      ],
      answer: 0
    },

    {
      question: "REST APIs should return:",
      options: [
        "JSON",
        "CSS",
        "HTML only",
        "XML only"
      ],
      answer: 0
    },

    {
      question: "Which status code means Success?",
      options: [
        "200",
        "404",
        "500",
        "301"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // API DEPLOYMENT
  // ==========================================

  114: [

    {
      question: "Deployment means:",
      options: [
        "Publishing an application",
        "Deleting an application",
        "Writing HTML",
        "Installing Windows"
      ],
      answer: 0
    },

    {
      question: "Render is a:",
      options: [
        "Cloud hosting platform",
        "Programming language",
        "Database",
        "IDE"
      ],
      answer: 0
    },

    {
      question: "Environment variables store:",
      options: [
        "Secrets and configuration",
        "Images",
        "Videos",
        "CSS"
      ],
      answer: 0
    },

    {
      question: "Production applications should:",
      options: [
        "Hide sensitive keys",
        "Expose passwords",
        "Store secrets in GitHub",
        "Disable security"
      ],
      answer: 0
    },

    {
      question: "Deployment testing ensures:",
      options: [
        "Everything works online",
        "CSS loads faster",
        "React compiles faster",
        "Videos stream faster"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // BACKEND CAPSTONE
  // ==========================================

  115: [

    {
      question: "A backend capstone demonstrates:",
      options: [
        "Complete backend skills",
        "CSS knowledge",
        "HTML knowledge",
        "Photoshop skills"
      ],
      answer: 0
    },

    {
      question: "A production API should include:",
      options: [
        "Authentication",
        "Database",
        "CRUD",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Testing should be done:",
      options: [
        "Before deployment",
        "Never",
        "After deleting code",
        "Only in production"
      ],
      answer: 0
    },

    {
      question: "GitHub is useful for:",
      options: [
        "Version control",
        "Database hosting",
        "Writing CSS",
        "Editing images"
      ],
      answer: 0
    },

    {
      question: "The capstone project should be:",
      options: [
        "Portfolio-ready",
        "Incomplete",
        "Theory only",
        "Copied from others"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // INTRODUCTION TO AI
  // ==========================================

  201: [

    {
      question: "Artificial Intelligence enables computers to:",
      options: [
        "Think and learn like humans",
        "Only store files",
        "Only browse the internet",
        "Only calculate numbers"
      ],
      answer: 0
    },

    {
      question: "AI is commonly used in:",
      options: [
        "Healthcare",
        "Finance",
        "Robotics",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Which company created ChatGPT?",
      options: [
        "OpenAI",
        "Google",
        "Microsoft",
        "Meta"
      ],
      answer: 0
    },

    {
      question: "Artificial Intelligence primarily works with:",
      options: [
        "Data",
        "Paper",
        "Printers",
        "Hard drives only"
      ],
      answer: 0
    },

    {
      question: "AI can automate:",
      options: [
        "Repetitive tasks",
        "Only games",
        "Only browsers",
        "Only spreadsheets"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // MACHINE LEARNING
  // ==========================================

  202: [

    {
      question: "Machine Learning is a subset of:",
      options: [
        "Artificial Intelligence",
        "Networking",
        "Cyber Security",
        "Blockchain"
      ],
      answer: 0
    },

    {
      question: "Machine Learning improves through:",
      options: [
        "Experience and data",
        "Typing faster",
        "Adding CSS",
        "Changing browsers"
      ],
      answer: 0
    },

    {
      question: "Supervised Learning uses:",
      options: [
        "Labelled data",
        "Random files",
        "Images only",
        "Audio only"
      ],
      answer: 0
    },

    {
      question: "Unsupervised Learning finds:",
      options: [
        "Hidden patterns",
        "Passwords",
        "Operating systems",
        "Source code"
      ],
      answer: 0
    },

    {
      question: "Training data helps a model:",
      options: [
        "Learn",
        "Crash",
        "Delete itself",
        "Format disks"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // DEEP LEARNING
  // ==========================================

  203: [

    {
      question: "Deep Learning is based on:",
      options: [
        "Neural Networks",
        "Excel Sheets",
        "CSS",
        "Routers"
      ],
      answer: 0
    },

    {
      question: "Deep Learning performs well with:",
      options: [
        "Large datasets",
        "Tiny datasets only",
        "No data",
        "Only HTML"
      ],
      answer: 0
    },

    {
      question: "Neural networks are inspired by:",
      options: [
        "The human brain",
        "Cars",
        "Servers",
        "Cloud storage"
      ],
      answer: 0
    },

    {
      question: "Deep Learning powers:",
      options: [
        "Image Recognition",
        "Speech Recognition",
        "Chatbots",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Deep Learning usually requires:",
      options: [
        "Powerful hardware",
        "Only HTML",
        "Only CSS",
        "Only Word documents"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // PYTHON FOR AI
  // ==========================================

  204: [

    {
      question: "Which programming language is most popular in AI?",
      options: [
        "Python",
        "PHP",
        "HTML",
        "CSS"
      ],
      answer: 0
    },

    {
      question: "Python is known for being:",
      options: [
        "Easy to read",
        "Only for websites",
        "Very difficult",
        "Only for databases"
      ],
      answer: 0
    },

    {
      question: "Which keyword defines a function?",
      options: [
        "def",
        "func",
        "create",
        "method"
      ],
      answer: 0
    },

    {
      question: "Python uses indentation to:",
      options: [
        "Define code blocks",
        "Improve graphics",
        "Store data",
        "Create databases"
      ],
      answer: 0
    },

    {
      question: "Python libraries are imported using:",
      options: [
        "import",
        "include",
        "require",
        "using"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // NUMPY
  // ==========================================

  205: [

    {
      question: "NumPy is mainly used for:",
      options: [
        "Numerical computing",
        "Web design",
        "Networking",
        "Operating systems"
      ],
      answer: 0
    },

    {
      question: "NumPy stores data using:",
      options: [
        "Arrays",
        "Tables",
        "Pages",
        "Classes"
      ],
      answer: 0
    },

    {
      question: "NumPy arrays are faster than:",
      options: [
        "Python Lists",
        "Functions",
        "Classes",
        "Strings"
      ],
      answer: 0
    },

    {
      question: "NumPy is commonly imported as:",
      options: [
        "np",
        "num",
        "numpyArray",
        "array"
      ],
      answer: 0
    },

    {
      question: "NumPy supports:",
      options: [
        "Matrix Operations",
        "Linear Algebra",
        "Statistics",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // PANDAS
  // ==========================================

  206: [

    {
      question: "Pandas is mainly used for:",
      options: [
        "Data Analysis",
        "Animation",
        "CSS Styling",
        "Networking"
      ],
      answer: 0
    },

    {
      question: "Pandas stores tabular data using:",
      options: [
        "DataFrames",
        "Tables",
        "Pages",
        "Arrays"
      ],
      answer: 0
    },

    {
      question: "Which function loads CSV files?",
      options: [
        "read_csv()",
        "load_csv()",
        "csv_open()",
        "open_csv()"
      ],
      answer: 0
    },

    {
      question: "Pandas helps clean:",
      options: [
        "Messy datasets",
        "Hard drives",
        "Videos",
        "Operating systems"
      ],
      answer: 0
    },

    {
      question: "Missing values can be handled using:",
      options: [
        "fillna()",
        "clean()",
        "repair()",
        "deleteNull()"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // LARGE LANGUAGE MODELS (LLMs)
  // ==========================================

  207: [

    {
      question: "LLM stands for:",
      options: [
        "Large Language Model",
        "Long Learning Machine",
        "Language Logic Module",
        "Learning Language Method"
      ],
      answer: 0
    },

    {
      question: "Large Language Models are trained on:",
      options: [
        "Massive text datasets",
        "Only images",
        "Only videos",
        "Only audio"
      ],
      answer: 0
    },

    {
      question: "GPT is an example of:",
      options: [
        "A Large Language Model",
        "A Database",
        "A Programming Language",
        "An Operating System"
      ],
      answer: 0
    },

    {
      question: "Transformers are the foundation of:",
      options: [
        "Modern AI Language Models",
        "Operating Systems",
        "Networking",
        "Databases"
      ],
      answer: 0
    },

    {
      question: "LLMs are commonly used for:",
      options: [
        "Content generation",
        "Translation",
        "Coding assistance",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // PROMPT ENGINEERING
  // ==========================================

  208: [

    {
      question: "Prompt Engineering is the skill of:",
      options: [
        "Writing effective AI instructions",
        "Programming robots",
        "Creating databases",
        "Building hardware"
      ],
      answer: 0
    },

    {
      question: "A good prompt should be:",
      options: [
        "Clear and specific",
        "Confusing",
        "Very short only",
        "Random"
      ],
      answer: 0
    },

    {
      question: "Zero-shot prompting means:",
      options: [
        "Giving no examples",
        "Giving many examples",
        "Training the AI",
        "Restarting the model"
      ],
      answer: 0
    },

    {
      question: "Few-shot prompting means:",
      options: [
        "Providing a few examples",
        "Providing no examples",
        "Deleting prompts",
        "Restarting conversations"
      ],
      answer: 0
    },

    {
      question: "Chain-of-Thought prompting encourages:",
      options: [
        "Step-by-step reasoning",
        "Faster internet",
        "Database optimization",
        "Video rendering"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // AI CHATBOTS
  // ==========================================

  209: [

    {
      question: "AI Chatbots mainly use:",
      options: [
        "Natural Language Processing",
        "Photoshop",
        "CSS",
        "HTML"
      ],
      answer: 0
    },

    {
      question: "A chatbot should remember:",
      options: [
        "Conversation context",
        "Only the first message",
        "Nothing",
        "Only images"
      ],
      answer: 0
    },

    {
      question: "Good chatbot responses are:",
      options: [
        "Relevant",
        "Helpful",
        "Accurate",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Modern chatbots can integrate with:",
      options: [
        "Websites",
        "Mobile Apps",
        "Business Systems",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Conversation memory improves:",
      options: [
        "User experience",
        "Computer speed",
        "Internet connection",
        "Hardware performance"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // VECTOR DATABASES
  // ==========================================

  210: [

    {
      question: "Vector databases store:",
      options: [
        "Embeddings",
        "Images only",
        "Videos only",
        "CSS Files"
      ],
      answer: 0
    },

    {
      question: "Embeddings represent:",
      options: [
        "Semantic meaning",
        "Passwords",
        "Images",
        "Programs"
      ],
      answer: 0
    },

    {
      question: "Similarity search compares:",
      options: [
        "Vector distance",
        "HTML pages",
        "IP addresses",
        "Browsers"
      ],
      answer: 0
    },

    {
      question: "Popular vector databases include:",
      options: [
        "Pinecone",
        "Weaviate",
        "Chroma",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Vector databases improve:",
      options: [
        "Semantic search",
        "Video editing",
        "Computer graphics",
        "Operating systems"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // RAG
  // ==========================================

  211: [

    {
      question: "RAG stands for:",
      options: [
        "Retrieval Augmented Generation",
        "Random AI Generator",
        "Resource AI Gateway",
        "Retrieval AI Graph"
      ],
      answer: 0
    },

    {
      question: "RAG combines LLMs with:",
      options: [
        "External knowledge",
        "Images only",
        "HTML",
        "CSS"
      ],
      answer: 0
    },

    {
      question: "Retrievers are responsible for:",
      options: [
        "Finding relevant information",
        "Training models",
        "Creating websites",
        "Editing videos"
      ],
      answer: 0
    },

    {
      question: "Knowledge Bases improve:",
      options: [
        "Answer accuracy",
        "Computer speed",
        "Battery life",
        "Graphics"
      ],
      answer: 0
    },

    {
      question: "RAG reduces:",
      options: [
        "Hallucinations",
        "Downloads",
        "Memory",
        "Storage"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // AI DEPLOYMENT
  // ==========================================

  212: [

    {
      question: "Deployment means:",
      options: [
        "Publishing an AI system",
        "Deleting AI",
        "Stopping training",
        "Formatting storage"
      ],
      answer: 0
    },

    {
      question: "Inference refers to:",
      options: [
        "Running predictions",
        "Training models",
        "Writing prompts",
        "Building databases"
      ],
      answer: 0
    },

    {
      question: "Scaling allows AI to:",
      options: [
        "Handle more users",
        "Reduce accuracy",
        "Delete models",
        "Slow down"
      ],
      answer: 0
    },

    {
      question: "Cloud deployment is commonly done using:",
      options: [
        "AWS",
        "Azure",
        "Google Cloud",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Monitoring helps detect:",
      options: [
        "System issues",
        "CSS errors only",
        "Images",
        "Fonts"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // AI ETHICS
  // ==========================================

  213: [

    {
      question: "Responsible AI focuses on:",
      options: [
        "Fairness",
        "Transparency",
        "Privacy",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Bias in AI can lead to:",
      options: [
        "Unfair decisions",
        "Faster internet",
        "Better graphics",
        "Improved storage"
      ],
      answer: 0
    },

    {
      question: "Transparency means:",
      options: [
        "Explaining AI decisions",
        "Making AI invisible",
        "Removing data",
        "Deleting models"
      ],
      answer: 0
    },

    {
      question: "Privacy protects:",
      options: [
        "User data",
        "Videos",
        "Websites",
        "Images"
      ],
      answer: 0
    },

    {
      question: "Ethical AI builds:",
      options: [
        "Trust",
        "Confusion",
        "Spam",
        "Errors"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // BUILDING AI PRODUCTS
  // ==========================================

  214: [

    {
      question: "An AI product starts with:",
      options: [
        "Problem Identification",
        "Deployment",
        "Marketing",
        "Testing"
      ],
      answer: 0
    },

    {
      question: "A Minimum Viable Product (MVP) is:",
      options: [
        "The simplest working version",
        "The final version",
        "The database",
        "The server"
      ],
      answer: 0
    },

    {
      question: "User feedback is important because:",
      options: [
        "It improves products",
        "It slows development",
        "It replaces testing",
        "It removes AI"
      ],
      answer: 0
    },

    {
      question: "Successful AI products solve:",
      options: [
        "Real problems",
        "Fake problems",
        "No problems",
        "Only coding challenges"
      ],
      answer: 0
    },

    {
      question: "Continuous improvement depends on:",
      options: [
        "Iteration",
        "Ignoring users",
        "Deleting code",
        "Stopping updates"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // AI CAPSTONE
  // ==========================================

  215: [

    {
      question: "The AI Capstone demonstrates:",
      options: [
        "Complete AI engineering skills",
        "Only HTML",
        "Only CSS",
        "Only Networking"
      ],
      answer: 0
    },

    {
      question: "A Capstone project should be:",
      options: [
        "Portfolio Ready",
        "Incomplete",
        "Theory Only",
        "Copied"
      ],
      answer: 0
    },

    {
      question: "A production AI application should:",
      options: [
        "Be tested",
        "Be secure",
        "Be deployable",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Documentation is important because:",
      options: [
        "Others can understand the project",
        "It slows development",
        "It replaces coding",
        "It deletes bugs"
      ],
      answer: 0
    },

    {
      question: "Completing the AI Capstone prepares you for:",
      options: [
        "Real-world AI Engineering",
        "Gaming only",
        "Graphics only",
        "Networking only"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // MECHANICAL ENGINEERING FUNDAMENTALS
  // ==========================================

  301: [

    {
      question: "Mechanical Engineering primarily deals with:",
      options: [
        "Machines and mechanical systems",
        "Websites",
        "Accounting",
        "Medicine"
      ],
      answer: 0
    },

    {
      question: "A mechanical engineer designs:",
      options: [
        "Machines",
        "Engines",
        "Production systems",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Engineering design begins with:",
      options: [
        "Problem identification",
        "Manufacturing",
        "Testing",
        "Maintenance"
      ],
      answer: 0
    },

    {
      question: "Mechanical Engineering combines:",
      options: [
        "Physics and Mathematics",
        "History",
        "Biology only",
        "Literature"
      ],
      answer: 0
    },

    {
      question: "A good engineer should:",
      options: [
        "Solve problems",
        "Avoid calculations",
        "Ignore safety",
        "Skip testing"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // ENGINEERING DRAWING
  // ==========================================

  302: [

    {
      question: "Engineering drawings communicate:",
      options: [
        "Design information",
        "Music",
        "Programming code",
        "Emails"
      ],
      answer: 0
    },

    {
      question: "Orthographic projection uses:",
      options: [
        "Multiple views",
        "One picture",
        "Animations",
        "Videos"
      ],
      answer: 0
    },

    {
      question: "Dimensioning specifies:",
      options: [
        "Object size",
        "Object color",
        "Object owner",
        "Object weight only"
      ],
      answer: 0
    },

    {
      question: "Technical drawings should be:",
      options: [
        "Accurate",
        "Clear",
        "Readable",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Hidden lines represent:",
      options: [
        "Invisible edges",
        "Center lines",
        "Visible edges",
        "Dimensions"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // ENGINEERING MATERIALS
  // ==========================================

  303: [

    {
      question: "Steel is an example of:",
      options: [
        "Metal",
        "Plastic",
        "Ceramic",
        "Composite"
      ],
      answer: 0
    },

    {
      question: "Aluminium is valued because it is:",
      options: [
        "Lightweight",
        "Very heavy",
        "Transparent",
        "Soft only"
      ],
      answer: 0
    },

    {
      question: "Material selection depends on:",
      options: [
        "Strength",
        "Cost",
        "Weight",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Polymers are commonly called:",
      options: [
        "Plastics",
        "Metals",
        "Glass",
        "Concrete"
      ],
      answer: 0
    },

    {
      question: "Composites combine:",
      options: [
        "Two or more materials",
        "Only metals",
        "Only plastics",
        "Only wood"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // ENGINEERING MECHANICS
  // ==========================================

  304: [

    {
      question: "Mechanics is the study of:",
      options: [
        "Forces and motion",
        "Programming",
        "Accounting",
        "Medicine"
      ],
      answer: 0
    },

    {
      question: "Force is measured in:",
      options: [
        "Newton (N)",
        "Pascal",
        "Joule",
        "Meter"
      ],
      answer: 0
    },

    {
      question: "According to Newton's Second Law:",
      options: [
        "F = ma",
        "E = mc²",
        "P = IV",
        "V = IR"
      ],
      answer: 0
    },

    {
      question: "Equilibrium occurs when:",
      options: [
        "Net force equals zero",
        "Velocity is maximum",
        "Acceleration is highest",
        "Mass is zero"
      ],
      answer: 0
    },

    {
      question: "Free-body diagrams help engineers:",
      options: [
        "Analyze forces",
        "Write code",
        "Build databases",
        "Design websites"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // STRENGTH OF MATERIALS
  // ==========================================

  305: [

    {
      question: "Stress is defined as:",
      options: [
        "Force per unit area",
        "Force × Distance",
        "Mass × Velocity",
        "Energy per second"
      ],
      answer: 0
    },

    {
      question: "Strain is:",
      options: [
        "Deformation per unit length",
        "Applied force",
        "Object weight",
        "Pressure"
      ],
      answer: 0
    },

    {
      question: "Hooke's Law states:",
      options: [
        "Stress is proportional to strain",
        "Energy equals force",
        "Pressure equals volume",
        "Power equals work"
      ],
      answer: 0
    },

    {
      question: "Young's Modulus measures:",
      options: [
        "Material stiffness",
        "Material color",
        "Material weight",
        "Material temperature"
      ],
      answer: 0
    },

    {
      question: "A ductile material:",
      options: [
        "Can deform before breaking",
        "Breaks immediately",
        "Cannot bend",
        "Is always brittle"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // THERMODYNAMICS
  // ==========================================

  306: [

    {
      question: "Thermodynamics studies:",
      options: [
        "Heat and energy",
        "Electricity",
        "Programming",
        "Accounting"
      ],
      answer: 0
    },

    {
      question: "Heat naturally flows from:",
      options: [
        "Hot objects to cold objects",
        "Cold objects to hot objects",
        "Objects with more mass",
        "Objects with less mass"
      ],
      answer: 0
    },

    {
      question: "The SI unit of energy is:",
      options: [
        "Joule",
        "Newton",
        "Pascal",
        "Volt"
      ],
      answer: 0
    },

    {
      question: "The First Law of Thermodynamics relates to:",
      options: [
        "Conservation of Energy",
        "Momentum",
        "Gravity",
        "Motion"
      ],
      answer: 0
    },

    {
      question: "An engine converts:",
      options: [
        "Heat into mechanical work",
        "Water into electricity",
        "Pressure into mass",
        "Air into steel"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // FLUID MECHANICS
  // ==========================================

  307: [

    {
      question: "Fluid Mechanics studies:",
      options: [
        "Liquids and gases",
        "Only solids",
        "Electrical systems",
        "Computer networks"
      ],
      answer: 0
    },

    {
      question: "Pressure is defined as:",
      options: [
        "Force per unit area",
        "Mass × Velocity",
        "Energy × Time",
        "Force × Distance"
      ],
      answer: 0
    },

    {
      question: "The SI unit of pressure is:",
      options: [
        "Pascal",
        "Newton",
        "Joule",
        "Watt"
      ],
      answer: 0
    },

    {
      question: "Bernoulli's Principle relates:",
      options: [
        "Pressure and fluid velocity",
        "Heat and temperature",
        "Mass and force",
        "Stress and strain"
      ],
      answer: 0
    },

    {
      question: "Hydraulic systems operate based on:",
      options: [
        "Pascal's Law",
        "Hooke's Law",
        "Newton's Third Law",
        "Ohm's Law"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // MANUFACTURING PROCESSES
  // ==========================================

  308: [

    {
      question: "Casting involves:",
      options: [
        "Pouring molten metal into a mould",
        "Cutting metal",
        "Welding sheets",
        "Grinding surfaces"
      ],
      answer: 0
    },

    {
      question: "Welding permanently joins:",
      options: [
        "Materials",
        "Files",
        "Programs",
        "Databases"
      ],
      answer: 0
    },

    {
      question: "Machining removes material using:",
      options: [
        "Cutting tools",
        "Paint",
        "Glue",
        "Water only"
      ],
      answer: 0
    },

    {
      question: "CNC stands for:",
      options: [
        "Computer Numerical Control",
        "Central Network Computer",
        "Computer Network Circuit",
        "Control Number Code"
      ],
      answer: 0
    },

    {
      question: "Manufacturing quality depends on:",
      options: [
        "Precision",
        "Accuracy",
        "Inspection",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // MACHINE ELEMENTS
  // ==========================================

  309: [

    {
      question: "Bearings are used to:",
      options: [
        "Reduce friction",
        "Increase heat",
        "Store energy",
        "Generate electricity"
      ],
      answer: 0
    },

    {
      question: "A gear is mainly used to:",
      options: [
        "Transmit motion and power",
        "Store fuel",
        "Reduce temperature",
        "Measure pressure"
      ],
      answer: 0
    },

    {
      question: "Bolts and nuts create:",
      options: [
        "Temporary joints",
        "Permanent joints",
        "Electrical circuits",
        "Fluid systems"
      ],
      answer: 0
    },

    {
      question: "Springs primarily:",
      options: [
        "Store mechanical energy",
        "Generate electricity",
        "Increase pressure",
        "Cool engines"
      ],
      answer: 0
    },

    {
      question: "Shafts are designed to:",
      options: [
        "Transmit torque",
        "Measure force",
        "Generate heat",
        "Reduce pressure"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // HEAT TRANSFER
  // ==========================================

  310: [

    {
      question: "Heat is transferred by:",
      options: [
        "Conduction, Convection and Radiation",
        "Pressure",
        "Gravity",
        "Friction only"
      ],
      answer: 0
    },

    {
      question: "Conduction mainly occurs in:",
      options: [
        "Solids",
        "Liquids only",
        "Gases only",
        "Vacuum"
      ],
      answer: 0
    },

    {
      question: "Convection occurs through:",
      options: [
        "Moving fluids",
        "Solid metals",
        "Vacuum",
        "Electrical wires"
      ],
      answer: 0
    },

    {
      question: "Radiation transfers heat through:",
      options: [
        "Electromagnetic waves",
        "Water only",
        "Air only",
        "Steel only"
      ],
      answer: 0
    },

    {
      question: "A heat exchanger is designed to:",
      options: [
        "Transfer heat efficiently",
        "Generate electricity",
        "Increase pressure",
        "Reduce torque"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // ENGINEERING DESIGN
  // ==========================================

  311: [

    {
      question: "Engineering design begins with:",
      options: [
        "Identifying the problem",
        "Manufacturing",
        "Maintenance",
        "Testing"
      ],
      answer: 0
    },

    {
      question: "A prototype is:",
      options: [
        "An early model",
        "A final product",
        "A machine operator",
        "A drawing only"
      ],
      answer: 0
    },

    {
      question: "Design iteration means:",
      options: [
        "Continuous improvement",
        "Stopping development",
        "Deleting ideas",
        "Ignoring feedback"
      ],
      answer: 0
    },

    {
      question: "Engineering design should consider:",
      options: [
        "Safety",
        "Cost",
        "Performance",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "CAD software helps engineers:",
      options: [
        "Create digital designs",
        "Browse the internet",
        "Edit videos",
        "Write essays"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // MAINTENANCE ENGINEERING
  // ==========================================

  312: [

    {
      question: "Preventive maintenance is performed:",
      options: [
        "Before failure occurs",
        "After breakdown",
        "Never",
        "Only during emergencies"
      ],
      answer: 0
    },

    {
      question: "Corrective maintenance occurs:",
      options: [
        "After equipment failure",
        "Before installation",
        "During manufacturing",
        "Before operation"
      ],
      answer: 0
    },

    {
      question: "Maintenance improves:",
      options: [
        "Equipment reliability",
        "Failure rate",
        "Downtime",
        "Waste"
      ],
      answer: 0
    },

    {
      question: "Lubrication mainly reduces:",
      options: [
        "Friction",
        "Voltage",
        "Pressure",
        "Current"
      ],
      answer: 0
    },

    {
      question: "Maintenance records are important for:",
      options: [
        "Planning future maintenance",
        "Deleting equipment",
        "Changing drawings",
        "Writing code"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // INDUSTRIAL SAFETY
  // ==========================================

  313: [

    {
      question: "PPE stands for:",
      options: [
        "Personal Protective Equipment",
        "Production Planning Equipment",
        "Pressure Protection Engine",
        "Plant Power Equipment"
      ],
      answer: 0
    },

    {
      question: "Safety signs are used to:",
      options: [
        "Warn workers",
        "Decorate factories",
        "Increase production",
        "Reduce electricity"
      ],
      answer: 0
    },

    {
      question: "A fire extinguisher should be:",
      options: [
        "Accessible",
        "Hidden",
        "Locked away",
        "Removed"
      ],
      answer: 0
    },

    {
      question: "Good housekeeping helps prevent:",
      options: [
        "Accidents",
        "Production",
        "Machines",
        "Projects"
      ],
      answer: 0
    },

    {
      question: "Safety culture means:",
      options: [
        "Everyone values safety",
        "Ignoring procedures",
        "Avoiding PPE",
        "Working carelessly"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // ENGINEERING PROJECT MANAGEMENT
  // ==========================================

  314: [

    {
      question: "Project management focuses on:",
      options: [
        "Planning and execution",
        "Painting",
        "Programming only",
        "Accounting only"
      ],
      answer: 0
    },

    {
      question: "A project schedule defines:",
      options: [
        "Task timelines",
        "Machine speed",
        "Material strength",
        "Voltage"
      ],
     answer: 0
    },

    {
      question: "Risk management helps:",
      options: [
        "Reduce project problems",
        "Increase delays",
        "Waste resources",
        "Reduce planning"
      ],
      answer: 0
    },

    {
      question: "Successful projects require:",
      options: [
        "Communication",
        "Planning",
        "Teamwork",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Project completion should include:",
      options: [
        "Evaluation",
        "Documentation",
        "Lessons learned",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // MECHANICAL CAPSTONE
  // ==========================================

  315: [

    {
      question: "The Mechanical Capstone demonstrates:",
      options: [
        "Complete engineering competence",
        "Only theory",
        "Only calculations",
        "Only manufacturing"
      ],
      answer: 0
    },

    {
      question: "A capstone project should be:",
      options: [
        "Portfolio-ready",
        "Incomplete",
        "Copied",
        "Untested"
      ],
      answer: 0
    },

    {
      question: "Engineering documentation should be:",
      options: [
        "Clear and complete",
        "Hidden",
        "Ignored",
        "Deleted"
      ],
      answer: 0
    },

    {
      question: "A finished engineering project should:",
      options: [
        "Be tested",
        "Be safe",
        "Meet specifications",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Completing this capstone prepares you for:",
      options: [
        "Professional Mechanical Engineering",
        "Video editing",
        "Graphic design",
        "Accounting"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // CAD FUNDAMENTALS
  // ==========================================

  401: [

    {
      question: "CAD stands for:",
      options: [
        "Computer Aided Design",
        "Computer Automated Drawing",
        "Control Assisted Design",
        "Computer Analysis Device"
      ],
      answer: 0
    },

    {
      question: "CAD software is mainly used to:",
      options: [
        "Create engineering drawings",
        "Browse the internet",
        "Write essays",
        "Edit music"
      ],
      answer: 0
    },

    {
      question: "A CAD model is usually:",
      options: [
        "Digital",
        "Paper only",
        "Handwritten",
        "Audio based"
      ],
      answer: 0
    },

    {
      question: "Popular CAD software includes:",
      options: [
        "SolidWorks",
        "AutoCAD",
        "Fusion 360",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "CAD improves:",
      options: [
        "Design accuracy",
        "Guess work",
        "Manual errors",
        "Paper waste only"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // AUTOCAD BASICS
  // ==========================================

  402: [

    {
      question: "AutoCAD is mainly used for:",
      options: [
        "Technical Drawing",
        "Gaming",
        "Networking",
        "Programming"
      ],
      answer: 0
    },

    {
      question: "The LINE command creates:",
      options: [
        "Straight lines",
        "Circles",
        "Text",
        "Dimensions"
      ],
      answer: 0
    },

    {
      question: "OFFSET command creates:",
      options: [
        "Parallel copies",
        "Circles",
        "Blocks",
        "Hatches"
      ],
      answer: 0
    },

    {
      question: "TRIM command is used to:",
      options: [
        "Remove unwanted portions",
        "Rotate objects",
        "Scale objects",
        "Copy objects"
      ],
      answer: 0
    },

    {
      question: "Layers help organize:",
      options: [
        "Drawing elements",
        "Computer files",
        "Operating systems",
        "Programs"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // 3D MODELING
  // ==========================================

  403: [

    {
      question: "3D Modeling creates:",
      options: [
        "Three-dimensional objects",
        "Documents",
        "Videos",
        "Audio"
      ],
      answer: 0
    },

    {
      question: "Extrude converts:",
      options: [
        "2D sketches into 3D models",
        "Videos into images",
        "Text into drawings",
        "Photos into code"
      ],
      answer: 0
    },

    {
      question: "Revolve creates solids by:",
      options: [
        "Rotating a profile",
        "Moving objects",
        "Scaling objects",
        "Copying sketches"
      ],
      answer: 0
    },

    {
      question: "Fillet creates:",
      options: [
        "Rounded edges",
        "Sharp corners",
        "Dimensions",
        "Annotations"
      ],
      answer: 0
    },

    {
      question: "Chamfer creates:",
      options: [
        "Beveled edges",
        "Rounded corners",
        "Dimensions",
        "Text"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // ASSEMBLY DESIGN
  // ==========================================

  404: [

    {
      question: "An assembly consists of:",
      options: [
        "Multiple parts joined together",
        "A single sketch",
        "A drawing sheet",
        "A dimension only"
      ],
      answer: 0
    },

    {
      question: "Assembly constraints define:",
      options: [
        "How components fit together",
        "Drawing colors",
        "Printer settings",
        "File size"
      ],
      answer: 0
    },

    {
      question: "A mate relationship is used to:",
      options: [
        "Position components",
        "Delete components",
        "Render images",
        "Print drawings"
      ],
      answer: 0
    },

    {
      question: "Exploded views help:",
      options: [
        "Show assembly sequence",
        "Reduce model size",
        "Increase rendering speed",
        "Create dimensions"
      ],
      answer: 0
    },

    {
      question: "Assemblies are commonly used for:",
      options: [
        "Machines",
        "Mechanical products",
        "Equipment",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // ENGINEERING DRAWINGS
  // ==========================================

  405: [

    {
      question: "Working drawings contain:",
      options: [
        "Manufacturing information",
        "Music",
        "Videos",
        "Programming code"
      ],
      answer: 0
    },

    {
      question: "Dimensions specify:",
      options: [
        "Size",
        "Color",
        "Weight only",
        "Material only"
      ],
      answer: 0
    },

    {
      question: "Section views reveal:",
      options: [
        "Internal features",
        "Surface colors",
        "File properties",
        "Hidden menus"
      ],
      answer: 0
    },

    {
      question: "Title blocks contain:",
      options: [
        "Drawing information",
        "Programming code",
        "Machine settings",
        "Animations"
      ],
      answer: 0
    },

    {
      question: "Engineering drawings must be:",
      options: [
        "Clear",
        "Accurate",
        "Complete",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // CAD PROJECTS
  // ==========================================

  406: [

    {
      question: "A CAD project begins with:",
      options: [
        "Planning",
        "Printing",
        "Rendering",
        "Marketing"
      ],
      answer: 0
    },

    {
      question: "Good CAD practice includes:",
      options: [
        "Organized sketches",
        "Proper dimensions",
        "Meaningful file names",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Design revisions improve:",
      options: [
        "Product quality",
        "Drawing errors",
        "Project delays",
        "Waste"
      ],
      answer: 0
    },

    {
      question: "Projects should be saved:",
      options: [
        "Frequently",
        "Once only",
        "After printing",
        "Never"
      ],
      answer: 0
    },

    {
      question: "Completed CAD projects become:",
      options: [
        "Portfolio pieces",
        "Deleted files",
        "Temporary files",
        "Unused documents"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // SURFACE MODELING
  // ==========================================

  407: [

    {
      question: "Surface modeling is mainly used for:",
      options: [
        "Complex shapes",
        "Simple cubes",
        "Electrical circuits",
        "Programming"
      ],
      answer: 0
    },

    {
      question: "Surface models are useful in:",
      options: [
        "Automotive design",
        "Aerospace",
        "Industrial products",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Unlike solid models, surface models:",
      options: [
        "Have no thickness",
        "Always contain mass",
        "Cannot be edited",
        "Cannot be rendered"
      ],
      answer: 0
    },

    {
      question: "Loft is used to:",
      options: [
        "Create smooth surfaces",
        "Delete sketches",
        "Rotate drawings",
        "Print models"
      ],
      answer: 0
    },

    {
      question: "Surface trimming is used to:",
      options: [
        "Remove unwanted surface portions",
        "Scale models",
        "Copy sketches",
        "Create dimensions"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // SHEET METAL DESIGN
  // ==========================================

  408: [

    {
      question: "Sheet metal parts are usually:",
      options: [
        "Thin metal components",
        "Concrete blocks",
        "Plastic bottles",
        "Wooden beams"
      ],
      answer: 0
    },

    {
      question: "Bend allowance compensates for:",
      options: [
        "Material stretching during bending",
        "Weight increase",
        "Heat transfer",
        "Surface finish"
      ],
      answer: 0
    },

    {
      question: "Flat patterns are used for:",
      options: [
        "Manufacturing",
        "Programming",
        "Rendering",
        "Animation"
      ],
      answer: 0
    },

    {
      question: "Sheet metal is commonly manufactured using:",
      options: [
        "Press brakes",
        "3D printers only",
        "Laser projectors",
        "Paint rollers"
      ],
      answer: 0
    },

    {
      question: "Common sheet metal products include:",
      options: [
        "Enclosures",
        "Cabinets",
        "Machine covers",
        "All of the above"
      ],
      answer: 3
    }
    ],

  // ==========================================
  // WELDMENTS
  // ==========================================

  409: [

    {
      question: "A weldment is:",
      options: [
        "A welded structural assembly",
        "A software program",
        "An electrical component",
        "A drawing template"
      ],
      answer: 0
    },

    {
      question: "Structural members include:",
      options: [
        "Channels",
        "Angles",
        "Beams",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Weld symbols indicate:",
      options: [
        "Type of weld",
        "Drawing color",
        "File size",
        "Printer settings"
      ],
      answer: 0
    },

    {
      question: "Cut lists are used for:",
      options: [
        "Manufacturing structural members",
        "Programming",
        "Rendering",
        "Animation"
      ],
      answer: 0
    },

    {
      question: "Weldments are widely used in:",
      options: [
        "Machine frames",
        "Industrial structures",
        "Equipment fabrication",
        "All of the above"
      ],
      answer: 3
    }

  ],
    // ==========================================
  // CAD RENDERING
  // ==========================================

  410: [

    {
      question: "Rendering is used to:",
      options: [
        "Create realistic images",
        "Compile code",
        "Edit videos",
        "Manufacture parts"
      ],
      answer: 0
    },

    {
      question: "Rendering improves:",
      options: [
        "Product visualization",
        "Programming speed",
        "Internet speed",
        "Machine strength"
      ],
      answer: 0
    },

    {
      question: "Materials affect:",
      options: [
        "Model appearance",
        "File size only",
        "CPU speed",
        "Drawing scale"
      ],
      answer: 0
    },

    {
      question: "Lighting is important because:",
      options: [
        "It creates realistic scenes",
        "It changes dimensions",
        "It edits sketches",
        "It removes features"
      ],
      answer: 0
    },

    {
      question: "Rendering is commonly used for:",
      options: [
        "Client presentations",
        "Marketing",
        "Product previews",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // CAD SIMULATION
  // ==========================================

  411: [

    {
      question: "Simulation predicts:",
      options: [
        "Product behavior",
        "Internet speed",
        "Programming errors",
        "Database size"
      ],
      answer: 0
    },

    {
      question: "Stress analysis determines:",
      options: [
        "Material strength",
        "Model color",
        "Rendering quality",
        "Drawing size"
      ],
      answer: 0
    },

    {
      question: "Finite Element Analysis is called:",
      options: [
        "FEA",
        "CAM",
        "CAE",
        "CNC"
      ],
      answer: 0
    },

    {
      question: "Simulation reduces:",
      options: [
        "Physical prototypes",
        "Engineering knowledge",
        "Design quality",
        "Product performance"
      ],
      answer: 0
    },

    {
      question: "Simulation helps engineers:",
      options: [
        "Improve designs",
        "Reduce failures",
        "Save cost",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // COMPUTER AIDED MANUFACTURING
  // ==========================================

  412: [

    {
      question: "CAM stands for:",
      options: [
        "Computer Aided Manufacturing",
        "Computer Analysis Machine",
        "Control Aided Motion",
        "Computer Assembly Method"
      ],
      answer: 0
    },

    {
      question: "CAM generates:",
      options: [
        "Toolpaths",
        "Emails",
        "Videos",
        "Documents"
      ],
      answer: 0
    },

    {
      question: "CAM is commonly used with:",
      options: [
        "CNC Machines",
        "Printers",
        "Projectors",
        "Routers"
      ],
      answer: 0
    },

    {
      question: "G-Code controls:",
      options: [
        "CNC Machines",
        "Databases",
        "Servers",
        "Operating Systems"
      ],
      answer: 0
    },

    {
      question: "CAM improves:",
      options: [
        "Manufacturing efficiency",
        "Internet speed",
        "Video quality",
        "Network security"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // REVERSE ENGINEERING
  // ==========================================

  413: [

    {
      question: "Reverse engineering means:",
      options: [
        "Recreating an existing product",
        "Destroying products",
        "Painting components",
        "Testing databases"
      ],
      answer: 0
    },

    {
      question: "3D scanners help:",
      options: [
        "Capture physical geometry",
        "Compile software",
        "Edit videos",
        "Create websites"
      ],
      answer: 0
    },

    {
      question: "Reverse engineering is useful for:",
      options: [
        "Redesign",
        "Replication",
        "Product improvement",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Point clouds are produced by:",
      options: [
        "3D scanning",
        "Programming",
        "Rendering",
        "Drawing"
      ],
      answer: 0
    },

    {
      question: "Reverse engineering helps preserve:",
      options: [
        "Legacy components",
        "Software licenses",
        "Operating systems",
        "Networks"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // CAD PORTFOLIO PROJECT
  // ==========================================

  414: [

    {
      question: "A CAD portfolio demonstrates:",
      options: [
        "Design ability",
        "Typing speed",
        "Networking",
        "Accounting"
      ],
      answer: 0
    },

    {
      question: "Portfolio projects should be:",
      options: [
        "High quality",
        "Complete",
        "Professional",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Good portfolios include:",
      options: [
        "Drawings",
        "Renderings",
        "Projects",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "A portfolio helps during:",
      options: [
        "Job interviews",
        "University admission",
        "Client presentations",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Professional engineers should continuously:",
      options: [
        "Improve their portfolio",
        "Delete projects",
        "Avoid learning",
        "Ignore feedback"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // CAD CAPSTONE PROJECT
  // ==========================================

  415: [

    {
      question: "The CAD Capstone combines:",
      options: [
        "Everything learned",
        "Only sketches",
        "Only rendering",
        "Only printing"
      ],
      answer: 0
    },

    {
      question: "A complete project includes:",
      options: [
        "Model",
        "Drawing",
        "Presentation",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Capstone projects should be:",
      options: [
        "Portfolio ready",
        "Incomplete",
        "Copied",
        "Untested"
      ],
      answer: 0
    },

    {
      question: "Professional documentation is:",
      options: [
        "Essential",
        "Optional",
        "Ignored",
        "Unnecessary"
      ],
      answer: 0
    },

    {
      question: "Completing the CAD Capstone prepares you for:",
      options: [
        "Professional CAD Design",
        "Music production",
        "Medical practice",
        "Accounting"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // EMBEDDED SYSTEMS INTRODUCTION
  // ==========================================

  501: [

    {
      question: "An Embedded System is:",
      options: [
        "A computer designed for a specific task",
        "A desktop computer",
        "A laptop",
        "A web browser"
      ],
      answer: 0
    },

    {
      question: "Embedded systems are commonly found in:",
      options: [
        "Cars",
        "Microwave ovens",
        "Washing machines",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "The brain of an embedded system is usually:",
      options: [
        "A Microcontroller",
        "A Hard Drive",
        "RAM",
        "Monitor"
      ],
      answer: 0
    },

    {
      question: "Embedded systems are designed to:",
      options: [
        "Perform dedicated tasks",
        "Browse social media",
        "Play games only",
        "Store movies"
      ],
      answer: 0
    },

    {
      question: "Embedded systems are generally:",
      options: [
        "Reliable",
        "Efficient",
        "Low power",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // MICROCONTROLLERS
  // ==========================================

  502: [

    {
      question: "A microcontroller contains:",
      options: [
        "CPU, Memory and I/O",
        "Only RAM",
        "Only CPU",
        "Only ROM"
      ],
      answer: 0
    },

    {
      question: "Popular microcontrollers include:",
      options: [
        "ATmega328P",
        "ESP32",
        "STM32",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "GPIO stands for:",
      options: [
        "General Purpose Input Output",
        "General Program Interface Output",
        "Global Pin Interface",
        "Ground Power Input Output"
      ],
      answer: 0
    },

    {
      question: "Microcontrollers are programmed using:",
      options: [
        "Embedded C/C++",
        "Photoshop",
        "Excel",
        "PowerPoint"
      ],
      answer: 0
    },

    {
      question: "Digital pins can be configured as:",
      options: [
        "Input or Output",
        "Memory",
        "Processor",
        "Storage"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // ARDUINO PROGRAMMING
  // ==========================================

  503: [

    {
      question: "Arduino IDE is used to:",
      options: [
        "Write and upload programs",
        "Draw circuits",
        "Create websites",
        "Edit images"
      ],
      answer: 0
    },

    {
      question: "Every Arduino sketch contains:",
      options: [
        "setup() and loop()",
        "main() only",
        "run() only",
        "while() only"
      ],
      answer: 0
    },

    {
      question: "setup() runs:",
      options: [
        "Once",
        "Forever",
        "Twice",
        "Never"
      ],
      answer: 0
    },

    {
      question: "loop() runs:",
      options: [
        "Continuously",
        "Only once",
        "Twice",
        "Never"
      ],
      answer: 0
    },

    {
      question: "Arduino boards are excellent for:",
      options: [
        "Rapid prototyping",
        "Gaming",
        "Video editing",
        "Graphic design"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // SENSORS
  // ==========================================

  504: [

    {
      question: "A sensor is used to:",
      options: [
        "Detect physical changes",
        "Generate electricity",
        "Store data",
        "Control motors"
      ],
      answer: 0
    },

    {
      question: "A temperature sensor measures:",
      options: [
        "Temperature",
        "Voltage",
        "Pressure",
        "Speed"
      ],
      answer: 0
    },

    {
      question: "An ultrasonic sensor measures:",
      options: [
        "Distance",
        "Temperature",
        "Current",
        "Humidity"
      ],
      answer: 0
    },

    {
      question: "LDR sensors detect:",
      options: [
        "Light intensity",
        "Pressure",
        "Force",
        "Sound"
      ],
      answer: 0
    },

    {
      question: "Sensors provide:",
      options: [
        "Input to the microcontroller",
        "Output voltage only",
        "Mechanical motion",
        "Power supply"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // ACTUATORS
  // ==========================================

  505: [

    {
      question: "An actuator converts:",
      options: [
        "Electrical energy into motion",
        "Motion into electricity",
        "Heat into light",
        "Pressure into sound"
      ],
      answer: 0
    },

    {
      question: "A servo motor provides:",
      options: [
        "Precise angular movement",
        "Random rotation",
        "Heat generation",
        "Voltage regulation"
      ],
      answer: 0
    },

    {
      question: "A relay is commonly used to:",
      options: [
        "Switch high-power loads",
        "Measure voltage",
        "Detect light",
        "Generate PWM"
      ],
      answer: 0
    },

    {
      question: "A DC motor produces:",
      options: [
        "Continuous rotation",
        "Temperature",
        "Voltage",
        "Pressure"
      ],
      answer: 0
    },

    {
      question: "Actuators receive:",
      options: [
        "Output signals from controllers",
        "Input from users only",
        "Mechanical force only",
        "Power from batteries only"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // EMBEDDED PROJECTS
  // ==========================================

  506: [

    {
      question: "An embedded project usually combines:",
      options: [
        "Hardware and software",
        "Only software",
        "Only hardware",
        "Only networking"
      ],
      answer: 0
    },

    {
      question: "Breadboards are used for:",
      options: [
        "Circuit prototyping",
        "Permanent PCB production",
        "Programming",
        "Networking"
      ],
      answer: 0
    },

    {
      question: "LED blinking is often:",
      options: [
        "The first embedded project",
        "The final project",
        "A networking project",
        "A CAD project"
      ],
      answer: 0
    },

    {
      question: "Embedded debugging helps:",
      options: [
        "Find software and hardware faults",
        "Increase internet speed",
        "Design websites",
        "Render graphics"
      ],
      answer: 0
    },

    {
      question: "Successful embedded projects require:",
      options: [
        "Testing",
        "Programming",
        "Hardware integration",
        "All of the above"
      ],
      answer: 3
    }

  ],
    // ==========================================
  // COMMUNICATION PROTOCOLS
  // ==========================================

  507: [

    {
      question: "Communication protocols allow devices to:",
      options: [
        "Exchange data",
        "Generate electricity",
        "Increase voltage",
        "Store files"
      ],
      answer: 0
    },

    {
      question: "UART communication is:",
      options: [
        "Serial communication",
        "Parallel communication",
        "Wireless only",
        "Optical only"
      ],
      answer: 0
    },

    {
      question: "SPI communication is known for:",
      options: [
        "High speed",
        "Low voltage",
        "Long distance",
        "Internet access"
      ],
      answer: 0
    },

    {
      question: "I²C communication requires:",
      options: [
        "SDA and SCL lines",
        "Four motors",
        "Ethernet cable",
        "Wi-Fi"
      ],
      answer: 0
    },

    {
      question: "Communication protocols are important because they:",
      options: [
        "Allow multiple devices to work together",
        "Increase battery size",
        "Replace sensors",
        "Remove programming"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // UART • SPI • I²C
  // ==========================================

  508: [

    {
      question: "UART stands for:",
      options: [
        "Universal Asynchronous Receiver Transmitter",
        "Universal Analog Receiver Timer",
        "Unified Automatic Register Transfer",
        "Universal Address Register"
      ],
      answer: 0
    },

    {
      question: "SPI stands for:",
      options: [
        "Serial Peripheral Interface",
        "Simple Parallel Interface",
        "Serial Program Integration",
        "Signal Peripheral Input"
      ],
      answer: 0
    },

    {
      question: "I²C stands for:",
      options: [
        "Inter-Integrated Circuit",
        "Integrated Internal Communication",
        "Internet Interface Connection",
        "Internal Integrated Controller"
      ],
      answer: 0
    },

    {
      question: "SPI normally uses:",
      options: [
        "Master and Slave devices",
        "Only one device",
        "Wi-Fi",
        "Bluetooth"
      ],
      answer: 0
    },

    {
      question: "I²C allows:",
      options: [
        "Multiple devices on one bus",
        "Only one sensor",
        "No addressing",
        "Internet communication"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // TIMERS & INTERRUPTS
  // ==========================================

  509: [

    {
      question: "A timer is used to:",
      options: [
        "Measure time intervals",
        "Increase voltage",
        "Store programs",
        "Detect temperature"
      ],
      answer: 0
    },

    {
      question: "An interrupt allows the processor to:",
      options: [
        "Respond immediately to events",
        "Stop permanently",
        "Delete memory",
        "Restart continuously"
      ],
      answer: 0
    },

    {
      question: "Hardware interrupts are triggered by:",
      options: [
        "External devices",
        "Comments in code",
        "Internet access",
        "Graphics cards"
      ],
      answer: 0
    },

    {
      question: "Software interrupts are generated by:",
      options: [
        "Programs",
        "Motors",
        "Power supply",
        "Sensors only"
      ],
      answer: 0
    },

    {
      question: "Timers and interrupts help embedded systems become:",
      options: [
        "Efficient and responsive",
        "Slow",
        "Unstable",
        "Manual"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // PWM & MOTOR CONTROL
  // ==========================================

  510: [

    {
      question: "PWM stands for:",
      options: [
        "Pulse Width Modulation",
        "Power Width Module",
        "Pulse Wave Motion",
        "Power Wave Modulation"
      ],
      answer: 0
    },

    {
      question: "PWM is commonly used to:",
      options: [
        "Control motor speed",
        "Measure voltage",
        "Store programs",
        "Connect Wi-Fi"
      ],
      answer: 0
    },

    {
      question: "Increasing PWM duty cycle generally:",
      options: [
        "Increases motor speed",
        "Stops the motor",
        "Deletes memory",
        "Reduces voltage to zero"
      ],
      answer: 0
    },

    {
      question: "Servo motors are controlled using:",
      options: [
        "PWM signals",
        "Ethernet",
        "USB",
        "Bluetooth"
      ],
      answer: 0
    },

    {
      question: "Motor drivers are required because:",
      options: [
        "Microcontrollers cannot supply enough current",
        "They increase Wi-Fi speed",
        "They replace sensors",
        "They generate code"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // REAL-TIME OPERATING SYSTEMS
  // ==========================================

  511: [

    {
      question: "RTOS stands for:",
      options: [
        "Real-Time Operating System",
        "Rapid Time Output System",
        "Real Task Operating Software",
        "Remote Time Operating Service"
      ],
      answer: 0
    },

    {
      question: "The main purpose of an RTOS is:",
      options: [
        "Execute tasks at predictable times",
        "Increase storage",
        "Improve graphics",
        "Connect to Wi-Fi"
      ],
      answer: 0
    },

    {
      question: "A task in RTOS is:",
      options: [
        "An independent program execution unit",
        "A sensor",
        "A processor",
        "A battery"
      ],
      answer: 0
    },

    {
      question: "RTOS scheduling decides:",
      options: [
        "Which task runs next",
        "Battery voltage",
        "Network speed",
        "Display brightness"
      ],
      answer: 0
    },

    {
      question: "Popular RTOS examples include:",
      options: [
        "FreeRTOS",
        "Zephyr",
        "RTX",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // EMBEDDED DEBUGGING
  // ==========================================

  512: [

    {
      question: "Debugging is the process of:",
      options: [
        "Finding and fixing errors",
        "Writing documentation",
        "Drawing schematics",
        "Installing software"
      ],
      answer: 0
    },

    {
      question: "Serial Monitor helps developers:",
      options: [
        "View program output",
        "Increase RAM",
        "Print documents",
        "Measure voltage"
      ],
      answer: 0
    },

    {
      question: "Breakpoints are mainly used during:",
      options: [
        "Debugging",
        "Manufacturing",
        "Rendering",
        "Simulation"
      ],
      answer: 0
    },

    {
      question: "LED indicators can help:",
      options: [
        "Diagnose embedded system states",
        "Increase processor speed",
        "Store files",
        "Replace sensors"
      ],
      answer: 0
    },

    {
      question: "Good debugging practice includes:",
      options: [
        "Testing step by step",
        "Reading error messages",
        "Checking hardware connections",
        "All of the above"
      ],
      answer: 3
    }

  ],
    // ==========================================
  // IoT INTEGRATION
  // ==========================================

  513: [

    {
      question: "IoT stands for:",
      options: [
        "Internet of Things",
        "Internet of Technology",
        "Internal Operating Terminal",
        "Integrated Online Tool"
      ],
      answer: 0
    },

    {
      question: "IoT devices communicate through:",
      options: [
        "The Internet",
        "Only USB",
        "Only HDMI",
        "Only VGA"
      ],
      answer: 0
    },

    {
      question: "ESP32 is popular because it has:",
      options: [
        "Built-in Wi-Fi and Bluetooth",
        "Built-in Printer",
        "Built-in GPU",
        "Built-in Display"
      ],
      answer: 0
    },

    {
      question: "Cloud platforms allow IoT devices to:",
      options: [
        "Store and exchange data",
        "Generate electricity",
        "Increase voltage",
        "Replace sensors"
      ],
      answer: 0
    },

    {
      question: "IoT applications include:",
      options: [
        "Smart Homes",
        "Industrial Automation",
        "Remote Monitoring",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // EMBEDDED FINAL PROJECT
  // ==========================================

  514: [

    {
      question: "A complete embedded project should include:",
      options: [
        "Hardware",
        "Software",
        "Testing",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Prototype testing is important because it:",
      options: [
        "Finds design problems early",
        "Deletes code",
        "Creates documentation automatically",
        "Increases processor speed"
      ],
      answer: 0
    },

    {
      question: "Documentation should include:",
      options: [
        "Circuit diagrams",
        "Program explanation",
        "Testing results",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "A successful embedded project should be:",
      options: [
        "Reliable",
        "Efficient",
        "Safe",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Final projects help build:",
      options: [
        "Professional portfolio",
        "Operating systems",
        "Network cables",
        "RAM"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // EMBEDDED SYSTEMS CAPSTONE
  // ==========================================

  515: [

    {
      question: "The Embedded Systems Capstone combines:",
      options: [
        "Everything learned",
        "Only Arduino",
        "Only Sensors",
        "Only Motors"
      ],
      answer: 0
    },

    {
      question: "Professional embedded engineers must understand:",
      options: [
        "Hardware",
        "Software",
        "Integration",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Embedded products should be:",
      options: [
        "Reliable",
        "Tested",
        "Maintainable",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "A capstone project demonstrates:",
      options: [
        "Real engineering ability",
        "Typing speed",
        "Internet browsing",
        "Video editing"
      ],
      answer: 0
    },

    {
      question: "Completing the Embedded Systems course prepares students for:",
      options: [
        "Professional Embedded Engineering",
        "Graphic Design",
        "Accounting",
        "Music Production"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // PCB FUNDAMENTALS
  // ==========================================

  601: [

    {
      question: "PCB stands for:",
      options: [
        "Printed Circuit Board",
        "Primary Circuit Board",
        "Printed Computer Base",
        "Power Control Board"
      ],
      answer: 0
    },

    {
      question: "The main purpose of a PCB is to:",
      options: [
        "Connect electronic components",
        "Store software",
        "Generate electricity",
        "Display graphics"
      ],
      answer: 0
    },

    {
      question: "PCBs replace:",
      options: [
        "Messy point-to-point wiring",
        "Microcontrollers",
        "Sensors",
        "Power supplies"
      ],
      answer: 0
    },

    {
      question: "A PCB usually consists of:",
      options: [
        "Copper traces",
        "Insulating substrate",
        "Electronic components",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "The green coating on most PCBs is called:",
      options: [
        "Solder Mask",
        "Copper Paint",
        "Plastic Layer",
        "Silicon Coat"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // ELECTRONIC COMPONENTS
  // ==========================================

  602: [

    {
      question: "A resistor is used to:",
      options: [
        "Limit current",
        "Generate voltage",
        "Store data",
        "Amplify signals"
      ],
      answer: 0
    },

    {
      question: "A capacitor stores:",
      options: [
        "Electrical charge",
        "Software",
        "Current",
        "Heat"
      ],
      answer: 0
    },

    {
      question: "A diode allows current to flow:",
      options: [
        "In one direction",
        "In both directions",
        "Randomly",
        "Never"
      ],
      answer: 0
    },

    {
      question: "An LED is a:",
      options: [
        "Light Emitting Diode",
        "Linear Electric Device",
        "Low Energy Driver",
        "Logic Electronic Device"
      ],
      answer: 0
    },

    {
      question: "Integrated Circuits (ICs) contain:",
      options: [
        "Many electronic components",
        "Only resistors",
        "Only capacitors",
        "Only LEDs"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // SCHEMATIC DESIGN
  // ==========================================

  603: [

    {
      question: "A schematic diagram represents:",
      options: [
        "Electrical connections",
        "PCB colors",
        "Mechanical dimensions",
        "Programming code"
      ],
      answer: 0
    },

    {
      question: "Schematics are drawn using:",
      options: [
        "Electrical symbols",
        "Photographs",
        "Animations",
        "Blueprints"
      ],
      answer: 0
    },

    {
      question: "Before PCB layout, engineers create:",
      options: [
        "The schematic",
        "The enclosure",
        "Marketing materials",
        "Firmware"
      ],
      answer: 0
    },

    {
      question: "A net in schematic design represents:",
      options: [
        "An electrical connection",
        "A resistor",
        "A PCB layer",
        "A capacitor"
      ],
      answer: 0
    },

    {
      question: "Popular schematic software includes:",
      options: [
        "KiCad",
        "Altium Designer",
        "EasyEDA",
        "All of the above"
      ],
      answer: 3
    }

  ],
    // ==========================================
  // PCB LAYOUT
  // ==========================================

  604: [

    {
      question: "PCB layout is the process of:",
      options: [
        "Arranging components on a circuit board",
        "Writing source code",
        "Programming a microcontroller",
        "Installing software"
      ],
      answer: 0
    },

    {
      question: "Good PCB layout improves:",
      options: [
        "Circuit performance",
        "System reliability",
        "Manufacturability",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Component placement should prioritize:",
      options: [
        "Short signal paths",
        "Random positions",
        "Board color",
        "Logo placement"
      ],
      answer: 0
    },

    {
      question: "Large components are normally placed:",
      options: [
        "Before routing begins",
        "After manufacturing",
        "Inside software",
        "After soldering"
      ],
      answer: 0
    },

    {
      question: "PCB layout software includes:",
      options: [
        "KiCad PCB Editor",
        "Altium PCB",
        "EasyEDA PCB",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // PCB ROUTING
  // ==========================================

  605: [

    {
      question: "Routing refers to:",
      options: [
        "Connecting components with copper traces",
        "Programming the PCB",
        "Testing voltage",
        "Printing the board"
      ],
      answer: 0
    },

    {
      question: "Copper traces carry:",
      options: [
        "Electrical signals",
        "Heat only",
        "Air",
        "Software"
      ],
      answer: 0
    },

    {
      question: "Good routing minimizes:",
      options: [
        "Noise and interference",
        "Component count",
        "Board color",
        "Voltage"
      ],
     answer: 0
    },

    {
      question: "Power traces are usually:",
      options: [
        "Wider than signal traces",
        "Thinner than signal traces",
        "Invisible",
        "Wireless"
      ],
      answer: 0
    },

    {
      question: "Poor routing may cause:",
      options: [
        "Signal integrity problems",
        "Improved performance",
        "Automatic debugging",
        "Lower temperatures always"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // DESIGN RULES
  // ==========================================

  606: [

    {
      question: "Design Rule Check (DRC) is used to:",
      options: [
        "Find PCB layout errors",
        "Generate code",
        "Program ICs",
        "Measure voltage"
      ],
      answer: 0
    },

    {
      question: "Trace clearance refers to:",
      options: [
        "Minimum spacing between traces",
        "Trace thickness",
        "Trace color",
        "Board height"
      ],
      answer: 0
    },

    {
      question: "PCB manufacturers specify:",
      options: [
        "Minimum design rules",
        "Programming language",
        "Sensor type",
        "Power consumption"
      ],
      answer: 0
    },

    {
      question: "Ignoring DRC errors may result in:",
      options: [
        "Manufacturing failure",
        "Better performance",
        "Faster processors",
        "Automatic repair"
      ],
      answer: 0
    },

    {
      question: "Design rules help ensure:",
      options: [
        "Reliable PCB production",
        "Software security",
        "Internet connectivity",
        "Battery charging"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // GROUND PLANES
  // ==========================================

  607: [

    {
      question: "A ground plane is:",
      options: [
        "A large copper area connected to ground",
        "A PCB enclosure",
        "A type of resistor",
        "A software tool"
      ],
      answer: 0
    },

    {
      question: "Ground planes help reduce:",
      options: [
        "Electrical noise",
        "Processor speed",
        "Memory size",
        "Internet traffic"
      ],
      answer: 0
    },

    {
      question: "Ground planes improve:",
      options: [
        "Signal integrity",
        "Board color",
        "Battery charging",
        "Programming speed"
      ],
      answer: 0
    },

    {
      question: "Ground planes are especially important in:",
      options: [
        "High-speed circuits",
        "Paper circuits",
        "Mechanical drawings",
        "Office software"
      ],
      answer: 0
    },

    {
      question: "Using a continuous ground plane generally:",
      options: [
        "Improves PCB performance",
        "Makes routing impossible",
        "Increases resistance",
        "Removes power"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // MULTI-LAYER PCBs
  // ==========================================

  608: [

    {
      question: "A multilayer PCB contains:",
      options: [
        "More than two copper layers",
        "One copper layer",
        "Only plastic",
        "Only solder mask"
      ],
      answer: 0
    },

    {
      question: "Multilayer PCBs are commonly used for:",
      options: [
        "Complex electronic systems",
        "Simple LED circuits only",
        "Paper designs",
        "Battery charging only"
      ],
      answer: 0
    },

    {
      question: "Additional PCB layers help:",
      options: [
        "Improve routing flexibility",
        "Reduce RAM",
        "Increase software size",
        "Replace processors"
      ],
      answer: 0
    },

    {
      question: "Inner PCB layers often carry:",
      options: [
        "Power and Ground planes",
        "Only LEDs",
        "Mechanical parts",
        "Programming code"
      ],
      answer: 0
    },

    {
      question: "Modern computers commonly use:",
      options: [
        "Multilayer PCBs",
        "Single copper wires",
        "Paper circuits",
        "Breadboards"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // PCB MANUFACTURING
  // ==========================================

  609: [

    {
      question: "PCB manufacturing begins after:",
      options: [
        "Layout is completed",
        "Programming starts",
        "Testing finishes",
        "Packaging"
      ],
      answer: 0
    },

    {
      question: "Gerber files are used to:",
      options: [
        "Manufacture PCBs",
        "Write programs",
        "Debug software",
        "Control robots"
      ],
      answer: 0
    },

    {
      question: "PCB drilling creates:",
      options: [
        "Component mounting holes",
        "Power supply",
        "Copper traces",
        "Microcontrollers"
      ],
      answer: 0
    },

    {
      question: "Solder mask is applied to:",
      options: [
        "Protect copper traces",
        "Increase processor speed",
        "Store software",
        "Generate voltage"
      ],
      answer: 0
    },

    {
      question: "Final PCB inspection ensures:",
      options: [
        "Manufacturing quality",
        "Internet access",
        "Programming language compatibility",
        "Battery charging"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // HIGH-SPEED PCB DESIGN
  // ==========================================

  610: [

    {
      question: "High-speed PCB design focuses on:",
      options: [
        "Maintaining signal integrity",
        "Increasing battery size",
        "Programming microcontrollers",
        "Reducing software bugs"
      ],
      answer: 0
    },

    {
      question: "Signal integrity refers to:",
      options: [
        "Signal quality during transmission",
        "Signal color",
        "Signal storage",
        "Signal voltage generation"
      ],
      answer: 0
    },

    {
      question: "Differential pairs are mainly used for:",
      options: [
        "High-speed communication",
        "Power supply",
        "Ground planes",
        "LED control"
      ],
      answer: 0
    },

    {
      question: "High-speed traces should generally be:",
      options: [
        "Short and direct",
        "Very long",
        "Randomly routed",
        "Disconnected"
      ],
      answer: 0
    },

    {
      question: "Controlled impedance helps:",
      options: [
        "Reduce signal reflections",
        "Increase voltage",
        "Reduce memory usage",
        "Generate power"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // EMI & EMC
  // ==========================================

  611: [

    {
      question: "EMI stands for:",
      options: [
        "Electromagnetic Interference",
        "Electronic Machine Interface",
        "Embedded Machine Integration",
        "Electromagnetic Internet"
      ],
      answer: 0
    },

    {
      question: "EMC stands for:",
      options: [
        "Electromagnetic Compatibility",
        "Electronic Manufacturing Control",
        "Embedded Motion Controller",
        "Electrical Motor Circuit"
      ],
      answer: 0
    },

    {
      question: "Good PCB grounding helps reduce:",
      options: [
        "Electromagnetic interference",
        "Battery life",
        "Programming speed",
        "Memory capacity"
      ],
      answer: 0
    },

    {
      question: "Shielding is used to:",
      options: [
        "Reduce EMI",
        "Increase voltage",
        "Store energy",
        "Replace resistors"
      ],
      answer: 0
    },

    {
      question: "EMC testing ensures:",
      options: [
        "Electronic devices operate without causing interference",
        "Higher internet speed",
        "Lower battery capacity",
        "Faster processors"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // PCB TESTING
  // ==========================================

  612: [

    {
      question: "PCB testing verifies:",
      options: [
        "Correct circuit operation",
        "Programming language",
        "Internet connection",
        "Display resolution"
      ],
      answer: 0
    },

    {
      question: "A multimeter can measure:",
      options: [
        "Voltage",
        "Current",
        "Resistance",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Continuity testing checks:",
      options: [
        "Electrical connections",
        "Processor speed",
        "Software version",
        "Network signal"
      ],
      answer: 0
    },

    {
      question: "Short circuits are detected during:",
      options: [
        "PCB testing",
        "Programming",
        "Packaging",
        "Rendering"
      ],
      answer: 0
    },

    {
      question: "Testing improves:",
      options: [
        "Reliability",
        "Safety",
        "Performance",
        "All of the above"
      ],
     answer: 3
    }

  ],
    // ==========================================
  // PCB ASSEMBLY
  // ==========================================

  613: [

    {
      question: "PCB assembly refers to:",
      options: [
        "Mounting components onto a PCB",
        "Designing software",
        "Programming a microcontroller",
        "Drawing schematics"
      ],
      answer: 0
    },

    {
      question: "SMT stands for:",
      options: [
        "Surface Mount Technology",
        "Signal Mount Technique",
        "Surface Machine Test",
        "System Mount Technology"
      ],
      answer: 0
    },

    {
      question: "Through-hole components are installed:",
      options: [
        "Through drilled holes",
        "On top of solder mask only",
        "Without soldering",
        "Using software"
      ],
      answer: 0
    },

    {
      question: "Soldering creates:",
      options: [
        "Electrical and mechanical connections",
        "Programming logic",
        "Power generation",
        "Wireless communication"
      ],
      answer: 0
    },

    {
      question: "Proper PCB assembly ensures:",
      options: [
        "Reliable operation",
        "Higher internet speed",
        "More RAM",
        "Lower processor speed"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // PROFESSIONAL PCB PROJECT
  // ==========================================

  614: [

    {
      question: "A professional PCB project begins with:",
      options: [
        "System requirements",
        "Manufacturing",
        "Testing",
        "Assembly"
      ],
      answer: 0
    },

    {
      question: "Professional PCB projects require:",
      options: [
        "Schematic design",
        "PCB layout",
        "Testing",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Documentation should include:",
      options: [
        "Schematics",
        "Gerber files",
        "Bill of Materials",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Prototype boards help engineers:",
      options: [
        "Validate the design",
        "Replace programming",
        "Increase processor speed",
        "Generate power"
      ],
      answer: 0
    },

    {
      question: "A successful PCB project should be:",
      options: [
        "Functional",
        "Reliable",
        "Manufacturable",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // PCB DESIGN CAPSTONE
  // ==========================================

  615: [

    {
      question: "The PCB Design Capstone demonstrates:",
      options: [
        "Complete PCB engineering skills",
        "Typing speed",
        "Office software knowledge",
        "Internet browsing"
      ],
      answer: 0
    },

    {
      question: "A complete PCB workflow includes:",
      options: [
        "Schematic",
        "Layout",
        "Manufacturing files",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Professional PCB engineers must understand:",
      options: [
        "Electrical design",
        "Manufacturing",
        "Testing",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "A capstone project should be:",
      options: [
        "Portfolio-ready",
        "Reliable",
        "Professionally documented",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Completing this course prepares learners for:",
      options: [
        "Professional PCB Design",
        "Graphic Design",
        "Accounting",
        "Video Editing"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // PCB ASSEMBLY
  // ==========================================

  613: [

    {
      question: "PCB assembly refers to:",
      options: [
        "Mounting components onto a PCB",
        "Designing software",
        "Programming a microcontroller",
        "Drawing schematics"
      ],
      answer: 0
    },

    {
      question: "SMT stands for:",
      options: [
        "Surface Mount Technology",
        "Signal Mount Technique",
        "Surface Machine Test",
        "System Mount Technology"
      ],
      answer: 0
    },

    {
      question: "Through-hole components are installed:",
      options: [
        "Through drilled holes",
        "On top of solder mask only",
        "Without soldering",
        "Using software"
      ],
      answer: 0
    },

    {
      question: "Soldering creates:",
      options: [
        "Electrical and mechanical connections",
        "Programming logic",
        "Power generation",
        "Wireless communication"
      ],
      answer: 0
    },

    {
      question: "Proper PCB assembly ensures:",
      options: [
        "Reliable operation",
        "Higher internet speed",
        "More RAM",
        "Lower processor speed"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // PROFESSIONAL PCB PROJECT
  // ==========================================

  614: [

    {
      question: "A professional PCB project begins with:",
      options: [
        "System requirements",
        "Manufacturing",
        "Testing",
        "Assembly"
      ],
      answer: 0
    },

    {
      question: "Professional PCB projects require:",
      options: [
        "Schematic design",
        "PCB layout",
        "Testing",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Documentation should include:",
      options: [
        "Schematics",
        "Gerber files",
        "Bill of Materials",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Prototype boards help engineers:",
      options: [
        "Validate the design",
        "Replace programming",
        "Increase processor speed",
        "Generate power"
      ],
      answer: 0
    },

    {
      question: "A successful PCB project should be:",
      options: [
        "Functional",
        "Reliable",
        "Manufacturable",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // PCB DESIGN CAPSTONE
  // ==========================================

   // ==========================================
  // ROBOTICS FUNDAMENTALS
  // ==========================================

  701: [

    {
      question: "A robot is:",
      options: [
        "A programmable machine",
        "A battery",
        "A computer monitor",
        "A resistor"
      ],
      answer: 0
    },

    {
      question: "Robots are primarily designed to:",
      options: [
        "Perform tasks automatically",
        "Generate electricity",
        "Store software",
        "Charge batteries"
      ],
      answer: 0
    },

    {
      question: "Robotics combines:",
      options: [
        "Mechanical Engineering",
        "Electronics",
        "Programming",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Industrial robots are commonly found in:",
      options: [
        "Factories",
        "Hospitals only",
        "Schools only",
        "Banks only"
      ],
      answer: 0
    },

    {
      question: "The 'brain' of a robot is usually:",
      options: [
        "A microcontroller or computer",
        "A motor",
        "A battery",
        "A sensor"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // ROBOT COMPONENTS
  // ==========================================

  702: [

    {
      question: "Sensors help robots:",
      options: [
        "Detect their environment",
        "Generate power",
        "Store programs",
        "Print documents"
      ],
      answer: 0
    },

    {
      question: "Actuators are responsible for:",
      options: [
        "Movement",
        "Programming",
        "Networking",
        "Cooling"
      ],
      answer: 0
    },

    {
      question: "A robotic arm contains:",
      options: [
        "Joints and links",
        "Only batteries",
        "Only LEDs",
        "Only processors"
      ],
      answer: 0
    },

    {
      question: "Motors provide:",
      options: [
        "Mechanical motion",
        "Internet connection",
        "Memory",
        "Programming"
      ],
      answer: 0
    },

    {
      question: "Controllers coordinate:",
      options: [
        "Robot operations",
        "Battery charging only",
        "PCB manufacturing",
        "Video playback"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // ROBOT KINEMATICS
  // ==========================================

  703: [

    {
      question: "Robot kinematics studies:",
      options: [
        "Robot motion",
        "Battery chemistry",
        "Computer graphics",
        "Programming syntax"
      ],
      answer: 0
    },

    {
      question: "Forward kinematics determines:",
      options: [
        "End-effector position",
        "Motor voltage",
        "Battery life",
        "Program size"
      ],
      answer: 0
    },

    {
      question: "Inverse kinematics calculates:",
      options: [
        "Joint angles",
        "Processor speed",
        "Voltage drop",
        "Memory allocation"
      ],
      answer: 0
    },

    {
      question: "Degrees of Freedom (DOF) describe:",
      options: [
        "Independent robot movements",
        "Battery voltage",
        "Software modules",
        "Network bandwidth"
      ],
      answer: 0
    },

    {
      question: "More DOF generally means:",
      options: [
        "Greater flexibility",
        "Less movement",
        "Lower power",
        "Smaller robots"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // ROBOT SENSORS
  // ==========================================

  704: [

    {
      question: "Robot sensors are used to:",
      options: [
        "Detect the environment",
        "Generate electricity",
        "Store software",
        "Increase processor speed"
      ],
      answer: 0
    },

    {
      question: "An ultrasonic sensor measures:",
      options: [
        "Distance",
        "Voltage",
        "Current",
        "Temperature"
      ],
      answer: 0
    },

    {
      question: "Infrared sensors are commonly used for:",
      options: [
        "Obstacle detection",
        "Battery charging",
        "Programming",
        "Wi-Fi communication"
      ],
      answer: 0
    },

    {
      question: "A gyroscope measures:",
      options: [
        "Angular rotation",
        "Humidity",
        "Light intensity",
        "Pressure"
      ],
      answer: 0
    },

    {
      question: "Sensor data allows robots to:",
      options: [
        "Make decisions",
        "Print documents",
        "Increase RAM",
        "Generate code automatically"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // ROBOT ACTUATORS
  // ==========================================

  705: [

    {
      question: "Actuators convert:",
      options: [
        "Electrical energy into movement",
        "Heat into software",
        "Voltage into memory",
        "Programs into electricity"
      ],
      answer: 0
    },

    {
      question: "Servo motors provide:",
      options: [
        "Precise angular control",
        "Internet access",
        "Power storage",
        "Wireless communication"
      ],
      answer: 0
    },

    {
      question: "Stepper motors move:",
      options: [
        "In fixed steps",
        "Randomly",
        "Only backwards",
        "Only once"
      ],
      answer: 0
    },

    {
      question: "DC motors are widely used because they are:",
      options: [
        "Simple and inexpensive",
        "Wireless",
        "Software based",
        "Battery free"
      ],
      answer: 0
    },

    {
      question: "Robot movement depends mainly on:",
      options: [
        "Actuators",
        "Displays",
        "LEDs",
        "USB ports"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // MOBILE ROBOTS
  // ==========================================

  706: [

    {
      question: "A mobile robot is designed to:",
      options: [
        "Move through its environment",
        "Remain permanently stationary",
        "Store electricity",
        "Display videos"
      ],
      answer: 0
    },

    {
      question: "Two-wheel robots commonly use:",
      options: [
        "Differential drive",
        "Hydraulic drive",
        "Manual drive",
        "Chain drive only"
      ],
      answer: 0
    },

    {
      question: "Robot navigation requires:",
      options: [
        "Sensors and control algorithms",
        "Only batteries",
        "Only LEDs",
        "Only Wi-Fi"
      ],
      answer: 0
    },

    {
      question: "Obstacle avoidance is achieved using:",
      options: [
        "Sensors",
        "Displays",
        "Keyboards",
        "Power supplies"
      ],
      answer: 0
    },

    {
      question: "Autonomous mobile robots can:",
      options: [
        "Operate without continuous human control",
        "Only work manually",
        "Never move",
        "Only charge batteries"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // COMPUTER VISION
  // ==========================================

  707: [

    {
      question: "Computer vision enables robots to:",
      options: [
        "Interpret visual information",
        "Generate electricity",
        "Increase battery life",
        "Replace processors"
      ],
      answer: 0
    },

    {
      question: "The primary vision sensor for robots is:",
      options: [
        "Camera",
        "Speaker",
        "Battery",
        "Motor"
      ],
      answer: 0
    },

    {
      question: "Image processing helps robots:",
      options: [
        "Recognize objects",
        "Charge batteries",
        "Increase RAM",
        "Reduce voltage"
      ],
      answer: 0
    },

    {
      question: "OpenCV is a popular library for:",
      options: [
        "Computer Vision",
        "Accounting",
        "Networking",
        "Game Development"
      ],
      answer: 0
    },

    {
      question: "Face detection is an example of:",
      options: [
        "Computer Vision",
        "PCB Design",
        "Power Electronics",
        "Mechanical Design"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // ROBOT PROGRAMMING
  // ==========================================

  708: [

    {
      question: "Robot programming allows robots to:",
      options: [
        "Perform automated tasks",
        "Generate electricity",
        "Increase memory",
        "Build PCBs"
      ],
      answer: 0
    },

    {
      question: "Python is widely used for:",
      options: [
        "Robot programming",
        "Battery charging",
        "PCB manufacturing",
        "Mechanical assembly"
      ],
      answer: 0
    },

    {
      question: "ROS stands for:",
      options: [
        "Robot Operating System",
        "Robotic Output Software",
        "Real Operating Sensor",
        "Robot Output Service"
      ],
      answer: 0
    },

    {
      question: "ROS provides:",
      options: [
        "Frameworks for robot development",
        "Power generation",
        "Circuit simulation",
        "Database hosting"
      ],
      answer: 0
    },

    {
      question: "Robot software usually controls:",
      options: [
        "Sensors and actuators",
        "Only batteries",
        "Only displays",
        "Only LEDs"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // PATH PLANNING
  // ==========================================

  709: [

    {
      question: "Path planning determines:",
      options: [
        "How a robot moves to a destination",
        "Battery capacity",
        "PCB thickness",
        "Processor speed"
      ],
      answer: 0
    },

    {
      question: "The shortest safe route is called:",
      options: [
        "Optimal path",
        "Voltage path",
        "Power path",
        "Sensor path"
      ],
      answer: 0
    },

    {
      question: "Obstacle avoidance is part of:",
      options: [
        "Robot navigation",
        "PCB routing",
        "Programming syntax",
        "Battery charging"
      ],
     answer: 0
    },

    {
      question: "SLAM combines:",
      options: [
        "Mapping and localization",
        "Programming and networking",
        "Power and voltage",
        "Motors and batteries"
      ],
      answer: 0
    },

    {
      question: "Autonomous navigation depends on:",
      options: [
        "Sensors, algorithms, and path planning",
        "Only motors",
        "Only batteries",
        "Only displays"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // ROBOT CONTROL SYSTEMS
  // ==========================================

  710: [

    {
      question: "A robot control system is responsible for:",
      options: [
        "Managing robot movement and behavior",
        "Charging batteries",
        "Printing documents",
        "Designing PCBs"
      ],
      answer: 0
    },

    {
      question: "Closed-loop control requires:",
      options: [
        "Feedback",
        "Wi-Fi",
        "Bluetooth",
        "Internet only"
      ],
      answer: 0
    },

    {
      question: "A PID controller consists of:",
      options: [
        "Proportional, Integral and Derivative control",
        "Power, Input and Drive",
        "Pulse, Internet and Digital",
        "Primary, Internal and Data"
      ],
      answer: 0
    },

    {
      question: "Feedback improves:",
      options: [
        "Robot accuracy",
        "Battery size",
        "Storage capacity",
        "PCB thickness"
      ],
      answer: 0
    },

    {
      question: "Control systems are essential for:",
      options: [
        "Stable robot operation",
        "Video editing",
        "Accounting",
        "Graphic design"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // INDUSTRIAL ROBOTICS
  // ==========================================

  711: [

    {
      question: "Industrial robots are mainly used for:",
      options: [
        "Manufacturing automation",
        "Playing music",
        "Cooking only",
        "Gaming"
      ],
      answer: 0
    },

    {
      question: "A robotic arm is commonly used for:",
      options: [
        "Welding and assembly",
        "Battery charging",
        "Programming",
        "Networking"
      ],
      answer: 0
    },

    {
      question: "Industrial robots improve:",
      options: [
        "Productivity",
        "Consistency",
        "Safety",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Collaborative robots are also known as:",
      options: [
        "Cobots",
        "Nanobots",
        "Microbots",
        "Cyberbots"
      ],
      answer: 0
    },

    {
      question: "Industrial robots often operate:",
      options: [
        "24 hours continuously",
        "Only during the day",
        "Only on weekends",
        "Only manually"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // AUTONOMOUS SYSTEMS
  // ==========================================

  712: [

    {
      question: "An autonomous robot can:",
      options: [
        "Operate independently",
        "Only work with human control",
        "Never move",
        "Only charge batteries"
      ],
      answer: 0
    },

    {
      question: "Artificial Intelligence helps robots:",
      options: [
        "Make intelligent decisions",
        "Increase voltage",
        "Reduce memory",
        "Generate power"
      ],
      answer: 0
    },

    {
      question: "Machine Learning enables robots to:",
      options: [
        "Learn from data",
        "Increase processor speed",
        "Store electricity",
        "Build PCBs"
      ],
      answer: 0
    },

    {
      question: "Autonomous robots commonly use:",
      options: [
        "Sensors",
        "Computer Vision",
        "AI",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Self-driving cars are examples of:",
      options: [
        "Autonomous systems",
        "Embedded processors",
        "PCB layouts",
        "Power electronics"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // ROBOTICS PROJECT
  // ==========================================

  713: [

    {
      question: "A robotics project should begin with:",
      options: [
        "Problem definition",
        "Programming immediately",
        "Buying motors",
        "Painting the robot"
      ],
      answer: 0
    },

    {
      question: "A successful robot project includes:",
      options: [
        "Mechanical design",
        "Electronics",
        "Programming",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Prototyping allows engineers to:",
      options: [
        "Test ideas before final production",
        "Replace programming",
        "Generate electricity",
        "Reduce RAM"
      ],
      answer: 0
    },

    {
      question: "Testing ensures the robot is:",
      options: [
        "Reliable",
        "Safe",
        "Functional",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Project documentation should contain:",
      options: [
        "Circuit diagrams",
        "Source code",
        "Testing results",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // ROBOTICS INTEGRATION
  // ==========================================

  714: [

    {
      question: "Robotics integration combines:",
      options: [
        "Mechanical, Electrical and Software systems",
        "Only Programming",
        "Only Electronics",
        "Only Motors"
      ],
      answer: 0
    },

    {
      question: "System integration ensures:",
      options: [
        "All robot subsystems work together",
        "Only motors operate",
        "Only sensors function",
        "Only batteries charge"
      ],
      answer: 0
    },

    {
      question: "Communication between robot components often uses:",
      options: [
        "Serial protocols",
        "Networking protocols",
        "Field buses",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Integrated robotics systems improve:",
      options: [
        "Performance",
        "Reliability",
        "Efficiency",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Robot integration is common in:",
      options: [
        "Modern manufacturing",
        "Medical systems",
        "Warehouses",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // ROBOTICS CAPSTONE
  // ==========================================

  715: [

    {
      question: "The Robotics Capstone demonstrates:",
      options: [
        "Complete robotics engineering skills",
        "Typing speed",
        "Graphic design",
        "Office automation"
      ],
      answer: 0
    },

    {
      question: "A robotics engineer should understand:",
      options: [
        "Mechanics",
        "Electronics",
        "Programming",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Professional robots should be:",
      options: [
        "Reliable",
        "Safe",
        "Efficient",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "A capstone robot project should be:",
      options: [
        "Portfolio-ready",
        "Well documented",
        "Fully tested",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Completing Robotics Engineering prepares students for:",
      options: [
        "Professional Robotics Engineering",
        "Graphic Design",
        "Accounting",
        "Photography"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // PLC FUNDAMENTALS
  // ==========================================

  801: [

    {
      question: "PLC stands for:",
      options: [
        "Programmable Logic Controller",
        "Power Logic Computer",
        "Primary Load Controller",
        "Programmable Load Computer"
      ],
      answer: 0
    },

    {
      question: "PLCs are mainly used in:",
      options: [
        "Industrial automation",
        "Graphic design",
        "Web development",
        "Video editing"
      ],
      answer: 0
    },

    {
      question: "A PLC replaces:",
      options: [
        "Relay-based control systems",
        "Electric motors",
        "Power supplies",
        "Transformers"
      ],
      answer: 0
    },

    {
      question: "A PLC consists of:",
      options: [
        "CPU, Inputs, Outputs and Memory",
        "Only CPU",
        "Only Sensors",
        "Only Display"
      ],
      answer: 0
    },

    {
      question: "The biggest advantage of PLCs is:",
      options: [
        "Easy programming and flexibility",
        "Internet browsing",
        "Video playback",
        "Graphic rendering"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // PLC HARDWARE
  // ==========================================

  802: [

    {
      question: "PLC input modules receive signals from:",
      options: [
        "Sensors and switches",
        "Motors",
        "Displays",
        "Speakers"
      ],
      answer: 0
    },

    {
      question: "PLC output modules control:",
      options: [
        "Actuators",
        "RAM",
        "Storage",
        "Processors"
      ],
      answer: 0
    },

    {
      question: "The CPU of a PLC:",
      options: [
        "Executes the control program",
        "Generates electricity",
        "Measures voltage",
        "Stores batteries"
      ],
      answer: 0
    },

    {
      question: "PLC memory stores:",
      options: [
        "Programs and data",
        "Only videos",
        "Only images",
        "Only passwords"
      ],
      answer: 0
    },

    {
      question: "Industrial PLCs are designed to operate in:",
      options: [
        "Harsh environments",
        "Bedrooms only",
        "Schools only",
        "Offices only"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // LADDER LOGIC BASICS
  // ==========================================

  803: [

    {
      question: "Ladder Logic is:",
      options: [
        "A graphical PLC programming language",
        "A web programming language",
        "A PCB software",
        "A robot"
      ],
      answer: 0
    },

    {
      question: "Ladder Logic resembles:",
      options: [
        "Electrical relay diagrams",
        "Flowcharts",
        "Pie charts",
        "Bar graphs"
      ],
      answer: 0
    },

    {
      question: "A rung in Ladder Logic represents:",
      options: [
        "One control instruction",
        "One battery",
        "One motor",
        "One processor"
      ],
      answer: 0
    },

    {
      question: "Normally Open contacts become true when:",
      options: [
        "Activated",
        "Disconnected",
        "Powered off",
        "Grounded"
      ],
      answer: 0
    },

    {
      question: "Ladder Logic is widely used because it is:",
      options: [
        "Easy for electricians to understand",
        "Only for programmers",
        "Only for designers",
        "Only for researchers"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // TIMERS & COUNTERS
  // ==========================================

  804: [

    {
      question: "PLC timers are used to:",
      options: [
        "Delay operations",
        "Generate electricity",
        "Increase voltage",
        "Store programs"
      ],
      answer: 0
    },

    {
      question: "PLC counters are used to:",
      options: [
        "Count events",
        "Measure temperature",
        "Store files",
        "Control displays"
      ],
      answer: 0
    },

    {
      question: "An ON-delay timer starts timing:",
      options: [
        "When its input becomes true",
        "When power is removed",
        "Only after reset",
        "When the PLC stops"
      ],
      answer: 0
    },

    {
      question: "Counters are commonly used for:",
      options: [
        "Production counting",
        "Battery charging",
        "Programming PCs",
        "Internet access"
      ],
      answer: 0
    },

    {
      question: "Timers and counters improve:",
      options: [
        "Automation control",
        "Graphic design",
        "Video playback",
        "PCB routing"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // PLC PROGRAMMING
  // ==========================================

  805: [

    {
      question: "PLC programs are executed:",
      options: [
        "Continuously in scan cycles",
        "Only once",
        "Only during startup",
        "Randomly"
      ],
      answer: 0
    },

    {
      question: "A PLC scan cycle includes:",
      options: [
        "Read Inputs → Execute Program → Update Outputs",
        "Update Outputs → Shutdown",
        "Compile Software",
        "Connect Internet"
      ],
      answer: 0
    },

    {
      question: "PLC programming software examples include:",
      options: [
        "TIA Portal",
        "Studio 5000",
        "GX Works",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Debugging PLC programs involves:",
      options: [
        "Monitoring inputs and outputs",
        "Changing hardware color",
        "Replacing batteries",
        "Formatting memory"
      ],
      answer: 0
    },

    {
      question: "Well-written PLC programs are:",
      options: [
        "Reliable and easy to maintain",
        "Long and confusing",
        "Hidden from technicians",
        "Impossible to debug"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // INDUSTRIAL SENSORS
  // ==========================================

  806: [

    {
      question: "Industrial sensors provide:",
      options: [
        "Input signals to PLCs",
        "Output voltage only",
        "Internet access",
        "Battery charging"
      ],
      answer: 0
    },

    {
      question: "A proximity sensor detects:",
      options: [
        "Nearby objects",
        "Voltage",
        "Humidity",
        "Current"
      ],
      answer: 0
    },

    {
      question: "Photoelectric sensors detect:",
      options: [
        "Objects using light",
        "Temperature",
        "Pressure",
        "Sound"
      ],
      answer: 0
    },

    {
      question: "Limit switches are commonly used to detect:",
      options: [
        "Mechanical position",
        "Internet signals",
        "Battery voltage",
        "Processor speed"
      ],
      answer: 0
    },

    {
      question: "Industrial sensors improve:",
      options: [
        "Automation accuracy",
        "Software size",
        "Memory capacity",
        "Graphics quality"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // INDUSTRIAL ACTUATORS
  // ==========================================

  807: [

    {
      question: "Industrial actuators convert:",
      options: [
        "Control signals into physical movement",
        "Heat into electricity",
        "Voltage into memory",
        "Software into hardware"
      ],
      answer: 0
    },

    {
      question: "A solenoid actuator produces:",
      options: [
        "Linear motion",
        "Rotational motion only",
        "Heat",
        "Sound"
      ],
      answer: 0
    },

    {
      question: "Pneumatic actuators operate using:",
      options: [
        "Compressed air",
        "Hydraulic oil",
        "Electricity only",
        "Steam"
      ],
      answer: 0
    },

    {
      question: "Hydraulic actuators are preferred when:",
      options: [
        "High force is required",
        "Low power is needed",
        "No movement is required",
        "Internet access is needed"
      ],
      answer: 0
    },

    {
      question: "Industrial motors are examples of:",
      options: [
        "Actuators",
        "Sensors",
        "Controllers",
        "Switches"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // HUMAN MACHINE INTERFACE (HMI)
  // ==========================================

  808: [

    {
      question: "HMI stands for:",
      options: [
        "Human Machine Interface",
        "Hardware Machine Integration",
        "Human Mechanical Input",
        "High Machine Interface"
      ],
      answer: 0
    },

    {
      question: "The purpose of an HMI is to:",
      options: [
        "Allow operators to monitor and control machines",
        "Generate electricity",
        "Increase motor speed",
        "Store PLC programs"
      ],
      answer: 0
    },

    {
      question: "Industrial HMIs commonly use:",
      options: [
        "Touchscreen displays",
        "Projectors",
        "Printers",
        "Speakers"
      ],
      answer: 0
    },

    {
      question: "Operators use HMIs to:",
      options: [
        "View alarms and system status",
        "Replace PLC hardware",
        "Manufacture PCBs",
        "Program robots only"
      ],
      answer: 0
    },

    {
      question: "A good HMI should be:",
      options: [
        "Simple and easy to understand",
        "Complex and confusing",
        "Hidden from operators",
        "Impossible to modify"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // SCADA SYSTEMS
  // ==========================================

  809: [

    {
      question: "SCADA stands for:",
      options: [
        "Supervisory Control and Data Acquisition",
        "System Control and Data Access",
        "Super Computer Data Automation",
        "Smart Control Design Application"
      ],
      answer: 0
    },

    {
      question: "SCADA systems are primarily used to:",
      options: [
        "Monitor and control industrial processes",
        "Charge batteries",
        "Create PCB layouts",
        "Edit videos"
      ],
      answer: 0
    },

    {
      question: "SCADA collects data from:",
      options: [
        "PLCs and RTUs",
        "Only computers",
        "Only cameras",
        "Only sensors"
      ],
      answer: 0
    },

    {
      question: "SCADA allows operators to:",
      options: [
        "Monitor systems remotely",
        "Increase processor speed",
        "Replace motors",
        "Design mechanical parts"
      ],
      answer: 0
    },

    {
      question: "SCADA is commonly found in:",
      options: [
        "Power plants and factories",
        "Movie theaters",
        "Schools only",
        "Restaurants only"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // INDUSTRIAL NETWORKING
  // ==========================================

  810: [

    {
      question: "Industrial networking connects:",
      options: [
        "Industrial automation devices",
        "Only computers",
        "Only robots",
        "Only motors"
      ],
      answer: 0
    },

    {
      question: "Ethernet/IP is an example of:",
      options: [
        "Industrial communication protocol",
        "Programming language",
        "Power supply",
        "Sensor type"
      ],
      answer: 0
    },

    {
      question: "Modbus is commonly used for:",
      options: [
        "Industrial communication",
        "Video streaming",
        "Programming websites",
        "Battery charging"
      ],
      answer: 0
    },

    {
      question: "PROFINET is developed primarily for:",
      options: [
        "Industrial automation",
        "Gaming",
        "Graphic design",
        "Photography"
      ],
      answer: 0
    },

    {
      question: "Industrial networking improves:",
      options: [
        "Communication between machines",
        "Processor temperature",
        "Battery voltage",
        "Screen resolution"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // PROCESS CONTROL
  // ==========================================

  811: [

    {
      question: "Process control aims to:",
      options: [
        "Maintain desired operating conditions",
        "Increase internet speed",
        "Charge batteries",
        "Program robots"
      ],
      answer: 0
    },

    {
      question: "A process variable may include:",
      options: [
        "Temperature",
        "Pressure",
        "Flow rate",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Controllers compare:",
      options: [
        "Measured value with setpoint",
        "Voltage with current",
        "Power with speed",
        "Memory with storage"
      ],
     answer: 0
    },

    {
      question: "PID controllers are widely used because they:",
      options: [
        "Provide stable control",
        "Generate electricity",
        "Increase RAM",
        "Replace sensors"
      ],
      answer: 0
    },

    {
      question: "Industrial process control is common in:",
      options: [
        "Chemical plants",
        "Food processing",
        "Power generation",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // FACTORY AUTOMATION
  // ==========================================

  812: [

    {
      question: "Factory automation reduces:",
      options: [
        "Manual labor",
        "Electrical power",
        "Internet speed",
        "Programming knowledge"
      ],
      answer: 0
    },

    {
      question: "Automation increases:",
      options: [
        "Productivity",
        "Consistency",
        "Safety",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Modern factories rely heavily on:",
      options: [
        "PLCs and Robots",
        "Paper records",
        "Manual switches only",
        "Typewriters"
      ],
      answer: 0
    },

    {
      question: "Automated production lines improve:",
      options: [
        "Manufacturing efficiency",
        "Battery charging",
        "Office work",
        "Graphic rendering"
      ],
      answer: 0
    },

    {
      question: "Industry 4.0 emphasizes:",
      options: [
        "Smart manufacturing",
        "Manual production",
        "Paper documentation",
        "Mechanical calculators"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // AUTOMATION PROJECT
  // ==========================================

  813: [

    {
      question: "An automation project should begin with:",
      options: [
        "System requirements",
        "Programming immediately",
        "Installing sensors",
        "Buying hardware"
      ],
      answer: 0
    },

    {
      question: "A complete automation project includes:",
      options: [
        "PLC Programming",
        "HMI Design",
        "System Testing",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Testing ensures the automation system is:",
      options: [
        "Reliable",
        "Safe",
        "Efficient",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Project documentation should include:",
      options: [
        "PLC Program",
        "Electrical Drawings",
        "Operating Instructions",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "A successful automation project should:",
      options: [
        "Solve a real industrial problem",
        "Only demonstrate programming",
        "Contain only sensors",
        "Contain only motors"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // INDUSTRIAL SYSTEM INTEGRATION
  // ==========================================

  814: [

    {
      question: "Industrial integration combines:",
      options: [
        "PLCs, HMIs, SCADA and field devices",
        "Only PLCs",
        "Only Robots",
        "Only Sensors"
      ],
      answer: 0
    },

    {
      question: "System integration ensures:",
      options: [
        "All automation equipment communicates correctly",
        "Only motors operate",
        "Only displays work",
        "Only software runs"
      ],
      answer: 0
    },

    {
      question: "Industrial communication protocols include:",
      options: [
        "Modbus",
        "PROFINET",
        "EtherNet/IP",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Integrated automation systems improve:",
      options: [
        "Efficiency",
        "Reliability",
        "Production",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Industrial integration is essential for:",
      options: [
        "Smart factories",
        "Office computers",
        "Mobile phones",
        "Gaming systems"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // AUTOMATION CAPSTONE
  // ==========================================

  815: [

    {
      question: "The Automation Capstone demonstrates:",
      options: [
        "Complete industrial automation skills",
        "Graphic design skills",
        "Accounting knowledge",
        "Video editing"
      ],
      answer: 0
    },

    {
      question: "A professional automation engineer should understand:",
      options: [
        "PLCs",
        "SCADA",
        "Industrial Networking",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Industrial automation systems should be:",
      options: [
        "Reliable",
        "Safe",
        "Maintainable",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "A capstone project should be:",
      options: [
        "Portfolio-ready",
        "Professionally documented",
        "Fully tested",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Completing this course prepares learners for:",
      options: [
        "Industrial Automation Engineering",
        "Photography",
        "Accounting",
        "Graphic Design"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // POWER SYSTEMS FUNDAMENTALS
  // ==========================================

  901: [

    {
      question: "A power system is responsible for:",
      options: [
        "Generating, transmitting and distributing electricity",
        "Programming computers",
        "Manufacturing PCBs",
        "Building robots"
      ],
      answer: 0
    },

    {
      question: "The three major stages of a power system are:",
      options: [
        "Generation, Transmission and Distribution",
        "Production, Storage and Programming",
        "Generation, Robotics and Automation",
        "Distribution, PLC and SCADA"
      ],
      answer: 0
    },

    {
      question: "Electric power is commonly measured in:",
      options: [
        "Watts",
        "Volts",
        "Amperes",
        "Ohms"
      ],
      answer: 0
    },

    {
      question: "Large power systems mainly operate using:",
      options: [
        "Three-phase AC",
        "Single-phase DC",
        "USB Power",
        "Battery Power"
      ],
      answer: 0
    },

    {
      question: "The primary objective of a power system is:",
      options: [
        "Deliver reliable electrical energy",
        "Increase internet speed",
        "Store software",
        "Build robots"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // ELECTRIC POWER GENERATION
  // ==========================================

  902: [

    {
      question: "Electricity is produced in:",
      options: [
        "Power stations",
        "Transformers",
        "Substations",
        "Distribution poles"
      ],
      answer: 0
    },

    {
      question: "Hydroelectric power plants generate electricity using:",
      options: [
        "Flowing water",
        "Coal",
        "Natural gas",
        "Solar panels"
      ],
      answer: 0
    },

    {
      question: "Thermal power plants commonly burn:",
      options: [
        "Coal, gas or oil",
        "Plastic",
        "Copper",
        "Steel"
      ],
      answer: 0
    },

    {
      question: "Wind turbines convert:",
      options: [
        "Wind energy into electrical energy",
        "Solar energy into electricity",
        "Heat into electricity",
        "Pressure into electricity"
      ],
      answer: 0
    },

    {
      question: "Generators convert:",
      options: [
        "Mechanical energy into electrical energy",
        "Electrical energy into heat",
        "Heat into motion",
        "Voltage into pressure"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // POWER TRANSMISSION
  // ==========================================

  903: [

    {
      question: "Power transmission moves electricity:",
      options: [
        "From generating stations to substations",
        "From homes to factories",
        "From batteries to motors",
        "Inside transformers"
      ],
      answer: 0
    },

    {
      question: "High transmission voltage is used to:",
      options: [
        "Reduce power losses",
        "Increase current",
        "Reduce frequency",
        "Increase resistance"
      ],
      answer: 0
    },

    {
      question: "Transmission lines are usually supported by:",
      options: [
        "Transmission towers",
        "Motors",
        "Transformers",
        "Generators"
      ],
      answer: 0
    },

    {
      question: "Power loss in transmission lines mainly occurs because of:",
      options: [
        "Resistance",
        "Capacitance",
        "Frequency",
        "Temperature only"
      ],
      answer: 0
    },

    {
      question: "Most national transmission systems operate using:",
      options: [
        "High-voltage AC",
        "Low-voltage DC",
        "Battery systems",
        "USB power"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // POWER TRANSFORMERS
  // ==========================================

  904: [

    {
      question: "A transformer is used to:",
      options: [
        "Change AC voltage levels",
        "Generate electricity",
        "Store electrical energy",
        "Measure resistance"
      ],
      answer: 0
    },

    {
      question: "Transformers operate on the principle of:",
      options: [
        "Electromagnetic induction",
        "Electrostatic attraction",
        "Capacitance",
        "Resistance"
      ],
      answer: 0
    },

    {
      question: "A step-up transformer:",
      options: [
        "Increases voltage",
        "Decreases voltage",
        "Increases current only",
        "Stores energy"
      ],
      answer: 0
    },

    {
      question: "A step-down transformer:",
      options: [
        "Reduces voltage",
        "Increases voltage",
        "Produces DC power",
        "Measures current"
      ],
      answer: 0
    },

    {
      question: "Power transformers are commonly installed in:",
      options: [
        "Substations",
        "Homes",
        "Mobile phones",
        "Computers"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // POWER DISTRIBUTION SYSTEMS
  // ==========================================

  905: [

    {
      question: "Power distribution delivers electricity from:",
      options: [
        "Substations to consumers",
        "Consumers to substations",
        "Motors to generators",
        "Transformers to turbines"
      ],
      answer: 0
    },

    {
      question: "Distribution voltage is generally:",
      options: [
        "Lower than transmission voltage",
        "Higher than transmission voltage",
        "Equal to generation voltage",
        "Zero volts"
      ],
      answer: 0
    },

    {
      question: "Distribution transformers are installed to:",
      options: [
        "Supply usable voltage to customers",
        "Increase transmission losses",
        "Generate electricity",
        "Store energy"
      ],
     answer: 0
    },

    {
      question: "Distribution networks can be:",
      options: [
        "Radial",
        "Ring",
        "Mesh",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "The final stage of electrical delivery is called:",
      options: [
        "Distribution",
        "Generation",
        "Transmission",
        "Conversion"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // POWER SYSTEM PROTECTION
  // ==========================================

  906: [

    {
      question: "Power system protection prevents:",
      options: [
        "Equipment damage during faults",
        "Electricity generation",
        "Transformer operation",
        "Power transmission"
      ],
      answer: 0
    },

    {
      question: "A circuit breaker is used to:",
      options: [
        "Interrupt fault current",
        "Increase voltage",
        "Generate electricity",
        "Store energy"
      ],
      answer: 0
    },

    {
      question: "Protective relays detect:",
      options: [
        "Abnormal operating conditions",
        "Normal weather",
        "Transformer oil",
        "Network speed"
      ],
      answer: 0
    },

    {
      question: "Short circuits cause:",
      options: [
        "Very high fault current",
        "Low frequency",
        "High resistance",
        "Low voltage only"
      ],
      answer: 0
    },

    {
      question: "The purpose of power protection is to:",
      options: [
        "Improve safety and reliability",
        "Increase electricity prices",
        "Reduce transformer size",
        "Increase resistance"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // ELECTRICAL SUBSTATIONS
  // ==========================================

  907: [

    {
      question: "The primary purpose of a substation is:",
      options: [
        "Control and distribute electrical power",
        "Generate electricity",
        "Manufacture transformers",
        "Charge batteries"
      ],
      answer: 0
    },

    {
      question: "Substations commonly contain:",
      options: [
        "Transformers, switchgear and protection systems",
        "Only generators",
        "Only batteries",
        "Only motors"
      ],
      answer: 0
    },

    {
      question: "Distribution substations are responsible for:",
      options: [
        "Reducing voltage for consumers",
        "Generating electricity",
        "Increasing transmission voltage",
        "Producing DC power"
      ],
      answer: 0
    },

    {
      question: "Busbars inside substations are used to:",
      options: [
        "Connect electrical circuits",
        "Generate voltage",
        "Measure resistance",
        "Store energy"
      ],
      answer: 0
    },

    {
      question: "Substations improve:",
      options: [
        "Reliability and control of the power system",
        "Computer processing speed",
        "Battery capacity",
        "Internet bandwidth"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // TRANSMISSION LINE DESIGN
  // ==========================================

  908: [

    {
      question: "Transmission lines are designed to:",
      options: [
        "Transport electrical energy efficiently",
        "Generate electricity",
        "Store power",
        "Convert AC to DC"
      ],
      answer: 0
    },

    {
      question: "Transmission conductors are commonly made from:",
      options: [
        "Aluminum with steel reinforcement",
        "Plastic",
        "Wood",
        "Rubber"
      ],
      answer: 0
    },

    {
      question: "Transmission towers provide:",
      options: [
        "Mechanical support for conductors",
        "Voltage regulation",
        "Current generation",
        "Battery storage"
      ],
      answer: 0
    },

    {
      question: "Transmission line sag depends on:",
      options: [
        "Temperature and conductor tension",
        "Voltage only",
        "Current only",
        "Frequency only"
      ],
      answer: 0
    },

    {
      question: "Proper transmission line design minimizes:",
      options: [
        "Power losses",
        "Voltage generation",
        "Battery charging",
        "Software errors"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // POWER QUALITY
  // ==========================================

  909: [

    {
      question: "Power quality refers to:",
      options: [
        "The condition of supplied electrical power",
        "The size of generators",
        "Battery performance",
        "Transformer weight"
      ],
      answer: 0
    },

    {
      question: "Voltage sag is:",
      options: [
        "A temporary reduction in voltage",
        "A permanent voltage increase",
        "A complete blackout",
        "A frequency increase"
      ],
      answer: 0
    },

    {
      question: "Electrical harmonics can:",
      options: [
        "Reduce equipment efficiency",
        "Increase battery life",
        "Improve transformer cooling",
        "Increase internet speed"
      ],
      answer: 0
    },

    {
      question: "Power factor correction improves:",
      options: [
        "System efficiency",
        "Voltage generation",
        "Battery charging",
        "Software performance"
      ],
      answer: 0
    },

    {
      question: "Good power quality helps:",
      options: [
        "Protect electrical equipment",
        "Increase resistance",
        "Decrease efficiency",
        "Reduce safety"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // RENEWABLE ENERGY INTEGRATION
  // ==========================================

  910: [

    {
      question: "Renewable energy sources include:",
      options: [
        "Solar, wind and hydro",
        "Coal and diesel",
        "Petrol and kerosene",
        "Natural gas only"
      ],
      answer: 0
    },

    {
      question: "The biggest challenge of renewable energy is:",
      options: [
        "Intermittent generation",
        "High voltage only",
        "Heavy transformers",
        "Low current"
      ],
      answer: 0
    },

    {
      question: "Solar PV systems produce:",
      options: [
        "Direct Current (DC)",
        "Alternating Current (AC)",
        "Mechanical energy",
        "Hydraulic energy"
      ],
      answer: 0
    },

    {
      question: "Grid-connected renewable systems require:",
      options: [
        "Synchronization with the utility grid",
        "Battery removal",
        "Motor control",
        "Transformer removal"
      ],
      answer: 0
    },

    {
      question: "Renewable integration mainly helps:",
      options: [
        "Reduce carbon emissions",
        "Increase fuel consumption",
        "Reduce efficiency",
        "Increase pollution"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // SMART GRID TECHNOLOGY
  // ==========================================

  911: [

    {
      question: "A Smart Grid uses:",
      options: [
        "Digital communication and automation",
        "Only manual switches",
        "Steam engines",
        "Mechanical relays only"
      ],
      answer: 0
    },

    {
      question: "Smart meters allow:",
      options: [
        "Real-time energy monitoring",
        "Mechanical power generation",
        "Transformer cooling",
        "Battery charging"
      ],
      answer: 0
    },

    {
      question: "Smart grids improve:",
      options: [
        "Efficiency and reliability",
        "Fuel consumption",
        "Voltage losses",
        "Electrical faults"
      ],
      answer: 0
    },

    {
      question: "Demand response programs help:",
      options: [
        "Balance electricity demand",
        "Increase transformer losses",
        "Reduce voltage permanently",
        "Replace generators"
      ],
      answer: 0
    },

    {
      question: "Smart grids support:",
      options: [
        "Renewable energy integration",
        "Paper record keeping",
        "Manual meter reading",
        "Mechanical switches only"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // LOAD FLOW ANALYSIS
  // ==========================================

  912: [

    {
      question: "Load flow analysis determines:",
      options: [
        "Voltage, current and power throughout a power system",
        "Battery voltage only",
        "Transformer weight",
        "Cable color"
      ],
      answer: 0
    },

    {
      question: "Load flow studies help engineers:",
      options: [
        "Plan and operate power systems",
        "Write software",
        "Manufacture generators",
        "Repair batteries"
      ],
      answer: 0
    },

    {
      question: "Load flow analysis evaluates:",
      options: [
        "Power system performance",
        "Computer speed",
        "Motor efficiency only",
        "Internet quality"
      ],
      answer: 0
    },

    {
      question: "A bus in load flow analysis represents:",
      options: [
        "A connection point in the power network",
        "A transformer",
        "A motor",
        "A battery"
      ],
      answer: 0
    },

    {
      question: "Load flow software commonly used includes:",
      options: [
        "ETAP and PowerWorld",
        "Photoshop",
        "AutoCAD only",
        "Microsoft Word"
      ],
      answer: 0
    }

  ],
    // ==========================================
  // POWER SYSTEMS PROJECT
  // ==========================================

  913: [

    {
      question: "A power systems project should begin with:",
      options: [
        "System planning and requirements",
        "Buying transformers",
        "Installing cables",
        "Programming PLCs"
      ],
      answer: 0
    },

    {
      question: "A complete power systems project includes:",
      options: [
        "Generation",
        "Transmission",
        "Distribution",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Power system simulations help engineers:",
      options: [
        "Evaluate system performance before implementation",
        "Generate electricity",
        "Replace transformers",
        "Charge batteries"
      ],
      answer: 0
    },

    {
      question: "Testing a completed power system verifies:",
      options: [
        "Safety and reliability",
        "Computer speed",
        "Battery capacity",
        "Internet performance"
      ],
      answer: 0
    },

    {
      question: "Project documentation should include:",
      options: [
        "Single-line diagrams",
        "Load calculations",
        "Protection settings",
        "All of the above"
      ],
      answer: 3
    }

  ],

  // ==========================================
  // GRID INTEGRATION
  // ==========================================

  914: [

    {
      question: "Grid integration refers to:",
      options: [
                "Connecting electrical systems to the utility network",
        "Disconnecting substations",
        "Replacing transformers",
        "Charging batteries"
      ],
      answer: 0
    },

    {
      question: "Successful grid integration requires:",
      options: [
        "Voltage and frequency synchronization",
        "Only high voltage",
        "Only transformers",
        "Only generators"
      ],
      answer: 0
    },

    {
      question: "Renewable energy integration requires:",
      options: [
        "Grid stability analysis",
        "Battery replacement",
        "Mechanical balancing",
        "Motor rewinding"
      ],
      answer: 0
    },

    {
      question: "Power system operators monitor:",
      options: [
        "Voltage, frequency and power flow",
        "Processor speed",
        "Battery life",
        "Internet bandwidth"
      ],
      answer: 0
    },

    {
      question: "Grid integration improves:",
      options: [
        "Power system reliability",
        "Voltage losses",
        "Equipment failures",
        "Manual operation"
      ],
      answer: 0
    }

  ],

  // ==========================================
  // POWER SYSTEMS CAPSTONE
  // ==========================================

  915: [

    {
      question: "The Power Systems Capstone demonstrates:",
      options: [
        "Complete power engineering competence",
        "Graphic design",
        "Web development",
        "Accounting"
      ],
      answer: 0
    },

    {
      question: "A power engineer should understand:",
      options: [
        "Generation",
        "Transmission",
        "Distribution",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Professional power systems must be:",
      options: [
        "Reliable, safe and efficient",
        "Cheap only",
        "Fast only",
        "Portable only"
      ],
      answer: 0
    },

    {
      question: "A capstone project should be:",
      options: [
        "Industry-ready",
        "Well documented",
        "Fully tested",
        "All of the above"
      ],
      answer: 3
    },

    {
      question: "Completing Power Systems Engineering prepares learners for:",
      options: [
        "Professional Power Systems Engineering careers",
        "Photography",
        "Fashion Design",
        "Music Production"
      ],
      answer: 0
    }

  ]
};