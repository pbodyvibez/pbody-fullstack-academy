
import frontendImg from "../assets/images/courses/frontend.png";
import backendImg from "../assets/images/courses/backend.png";
import fullstackImg from "../assets/images/courses/fullstack.png";
import mobileImg from "../assets/images/courses/mobile.png";
import aiImg from "../assets/images/courses/ai.png";
import devopsImg from "../assets/images/courses/devops.png";
import cybersecurityImg from "../assets/images/courses/cybersecurity.png";
import uiuxImg from "../assets/images/courses/uiux.png";
import testingImg from "../assets/images/courses/testing.png";
import dataEngineeringImg from "../assets/images/courses/dataengineering.png";
const courses = [

{
id:"frontend",
access:"free",
slug:"frontend-engineering",

title:"Frontend Engineering",

shortTitle:"Frontend",

tagline:
"Become a professional frontend engineer by mastering modern web technologies.",

description:
"Master HTML, CSS, JavaScript, React, Next.js, TypeScript, responsive design, UI engineering and professional frontend workflows while building portfolio-ready applications.",

icon:"🎨",

color:"#2563EB",

level:"Beginner",

duration:"12 Weeks",

lessons:65,

projects:18,

quizzes:65,

certificate:true,

xp:8000,

students:12850,

rating:4.9,

reviews:3450,

featured:true,

category:"Web Development",

careerPaths:[
"Frontend Developer",
"React Developer",
"UI Engineer",
"JavaScript Developer"
],

technologies:[
"HTML",
"CSS",
"JavaScript",
"Git",
"GitHub",
"Responsive Design",
"React",
"React Router",
"Context API",
"Redux",
"Next.js",
"TypeScript",
"Tailwind CSS",
"REST APIs",
"Axios",
"Vite"
],

image:frontendImg,

thumbnail:frontendImg
},

{

id:"backend",
access:"premium",
slug:"backend-engineering",

title:"Backend Engineering",

shortTitle:"Backend",

tagline:
"Build secure and scalable backend systems for modern applications.",

description:
"Learn Node.js, Express, authentication, APIs, databases, caching, security and scalable backend architecture by developing real production-ready services.",

icon:"⚙️",

color:"#059669",

level:"Intermediate",

duration:"14 Weeks",

lessons:70,

projects:20,

quizzes:70,

certificate:true,

xp:9000,

students:9650,

rating:4.9,

reviews:2840,

featured:true,

category:"Web Development",

careerPaths:[
"Backend Developer",
"Node.js Developer",
"API Engineer",
"Server Engineer"
],

technologies:[
"Node.js",
"Express",
"MongoDB",
"PostgreSQL",
"MySQL",
"JWT",
"Authentication",
"Authorization",
"REST API",
"Socket.io",
"Redis",
"Docker",
"Prisma",
"Mongoose"
],

image:backendImg,

thumbnail:backendImg
},

{

id:"fullstack",
access:"premium",
slug:"fullstack-engineering",

title:"Full Stack Engineering",

shortTitle:"Full Stack",

tagline:
"Master frontend and backend engineering to build complete applications.",

description:
"Combine frontend engineering, backend engineering, databases, APIs, deployment and software architecture to become a professional full stack engineer.",

icon:"💻",

color:"#7C3AED",

level:"Advanced",

duration:"24 Weeks",

lessons:130,

projects:35,

quizzes:130,

certificate:true,

xp:18000,

students:15200,

rating:5.0,

reviews:4725,

featured:true,

category:"Software Engineering",

careerPaths:[
"Full Stack Developer",
"Software Engineer",
"Technical Lead",
"SaaS Developer"
],

technologies:[
"HTML",
"CSS",
"JavaScript",
"React",
"Next.js",
"Node.js",
"Express",
"MongoDB",
"PostgreSQL",
"Docker",
"Git",
"AWS",
"CI/CD"
],

image:fullstackImg,

thumbnail:fullstackImg
},

{

id:"ai",
access:"premium",
slug:"artificial-intelligence-engineering",

title:"Artificial Intelligence Engineering",

shortTitle:"AI Engineering",

tagline:
"Build intelligent software powered by modern AI technologies.",

description:
"Master machine learning fundamentals, prompt engineering, LLM integration, OpenAI APIs, AI automation and practical AI application development.",

icon:"🤖",

color:"#F59E0B",

level:"Advanced",

duration:"18 Weeks",

lessons:90,

projects:25,

quizzes:90,

certificate:true,

xp:12000,

students:7400,

rating:4.9,

reviews:2145,

featured:true,

category:"Artificial Intelligence",

careerPaths:[
"AI Engineer",
"Machine Learning Engineer",
"Prompt Engineer",
"AI Application Developer"
],

technologies:[
"Python",
"OpenAI API",
"LLMs",
"Prompt Engineering",
"LangChain",
"Vector Databases",
"Embeddings",
"RAG",
"Automation"
],

image:aiImg,

thumbnail:aiImg
},
{

id:"mobile",
access:"premium",
slug:"mobile-app-engineering",

title:"Mobile App Engineering",

shortTitle:"Mobile",

tagline:
"Build beautiful Android and iOS applications from one codebase.",

description:
"Learn React Native, Expo, mobile UI development, device APIs, state management, authentication, offline storage and app deployment while building production-ready mobile applications.",

icon:"📱",

color:"#EC4899",

level:"Intermediate",

duration:"16 Weeks",

lessons:85,

projects:22,

quizzes:85,

certificate:true,

xp:10500,

students:6950,

rating:4.9,

reviews:1820,

featured:true,

category:"Mobile Development",

careerPaths:[
"Mobile App Developer",
"React Native Developer",
"Cross Platform Engineer"
],

technologies:[
"React Native",
"Expo",
"JavaScript",
"TypeScript",
"Firebase",
"AsyncStorage",
"Navigation",
"Push Notifications",
"App Store",
"Google Play"
],

image:mobileImg,

thumbnail:mobileImg
},

{

id:"devops",
access:"premium",

slug:"devops-cloud-engineering",

title:"DevOps & Cloud Engineering",

shortTitle:"DevOps",

tagline:
"Deploy, automate and scale modern cloud applications.",

description:
"Master Docker, Kubernetes, CI/CD pipelines, Linux, AWS, monitoring and cloud infrastructure using real production environments.",

icon:"☁️",

color:"#0EA5E9",

level:"Advanced",

duration:"18 Weeks",

lessons:90,

projects:24,

quizzes:90,

certificate:true,

xp:12500,

students:5100,

rating:4.9,

reviews:1540,

featured:true,

category:"Cloud Computing",

careerPaths:[
"DevOps Engineer",
"Cloud Engineer",
"Site Reliability Engineer"
],

technologies:[
"Docker",
"Kubernetes",
"Linux",
"AWS",
"GitHub Actions",
"Nginx",
"Terraform",
"CI/CD",
"Cloud Monitoring"
],

image:devopsImg,

thumbnail:devopsImg
},

{

id:"cybersecurity",
access:"premium",
slug:"cybersecurity-engineering",

title:"Cybersecurity Engineering",

shortTitle:"Cybersecurity",

tagline:
"Protect systems, networks and applications from modern cyber threats.",

description:
"Learn ethical hacking, penetration testing, network security, web security, cryptography and security best practices for modern applications.",

icon:"🛡️",

color:"#DC2626",

level:"Advanced",

duration:"20 Weeks",

lessons:100,

projects:26,

quizzes:100,

certificate:true,

xp:13500,

students:4600,

rating:4.9,

reviews:1495,

featured:true,

category:"Cyber Security",

careerPaths:[
"Cybersecurity Engineer",
"Penetration Tester",
"Security Analyst",
"Ethical Hacker"
],

technologies:[
"Kali Linux",
"OWASP",
"Burp Suite",
"Nmap",
"Wireshark",
"Cryptography",
"Network Security",
"Web Security"
],

image:cybersecurityImg,

thumbnail:cybersecurityImg
},

{

id:"uiux",
access:"premium",
slug:"ui-ux-engineering",

title:"UI/UX Engineering",

shortTitle:"UI/UX",

tagline:
"Design beautiful user experiences developers love to build.",

description:
"Learn design thinking, wireframing, prototyping, accessibility, design systems and Figma while creating modern user interfaces.",

icon:"🎯",

color:"#8B5CF6",

level:"Beginner",

duration:"10 Weeks",

lessons:55,

projects:15,

quizzes:55,

certificate:true,

xp:6500,

students:8350,

rating:4.8,

reviews:2370,

featured:true,

category:"Design",

careerPaths:[
"UI Designer",
"UX Designer",
"Product Designer"
],

technologies:[
"Figma",
"Design Systems",
"Wireframing",
"Prototyping",
"Accessibility",
"User Research",
"Typography",
"Color Theory"
],

image:uiuxImg,

thumbnail:uiuxImg
},

{

id:"testing",
access:"premium",
slug:"software-testing-engineering",

title:"Software Testing Engineering",

shortTitle:"Testing",

tagline:
"Ensure software quality through professional testing practices.",

description:
"Learn manual testing, automated testing, unit testing, integration testing, end-to-end testing and quality assurance workflows.",

icon:"🧪",

color:"#14B8A6",

level:"Intermediate",

duration:"10 Weeks",

lessons:50,

projects:12,

quizzes:50,

certificate:true,

xp:6000,

students:3200,

rating:4.8,

reviews:920,

featured:false,

category:"Quality Assurance",

careerPaths:[
"QA Engineer",
"Automation Tester",
"Software Test Engineer"
],

technologies:[
"Jest",
"Cypress",
"Playwright",
"Testing Library",
"Selenium",
"Postman"
],

image:testingImg,

thumbnail:testingImg
},

{

id:"data",

access:"premium",
slug:"data-engineering",

title:"Data Engineering",

shortTitle:"Data",

tagline:
"Build modern data pipelines and analytics platforms.",

description:
"Learn SQL, ETL pipelines, data warehousing, Apache tools, cloud data platforms and big data fundamentals.",

icon:"📊",

color:"#F97316",

level:"Advanced",

duration:"18 Weeks",

lessons:95,

projects:22,

quizzes:95,

certificate:true,

xp:12000,

students:2800,

rating:4.9,

reviews:760,

featured:false,

category:"Data",

careerPaths:[
"Data Engineer",
"Analytics Engineer",
"Business Intelligence Engineer"
],

technologies:[
"SQL",
"Python",
"PostgreSQL",
"Apache Spark",
"Airflow",
"Data Warehouse",
"ETL",
"Big Data"
],

image:dataEngineeringImg,

thumbnail:dataEngineeringImg
}

];

export default courses;