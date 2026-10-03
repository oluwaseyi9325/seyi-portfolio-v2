import stacstartLogo from "@/assets/logos/stacstart.svg";
import pitchighLogo from "@/assets/logos/pitchigh.png";
import conclaseLogo from "@/assets/logos/conclase.svg";
import conclaseAcademyLogo from "@/assets/logos/conclase-academy.png";
import trediLogo from "@/assets/logos/tredi.svg";
import copyupLogo from "@/assets/logos/copyup.png";
import smartmartLogo from "@/assets/logos/smartmart.jpg";
import porchplusLogo from "@/assets/logos/porchplus.svg";
import rubiesLogo from "@/assets/logos/rubies.png";
import sqiLogo from "@/assets/logos/sqi.png";

// All portfolio content lives here. Edit this file to update the site —
// the sections and project pages read from it, so nothing else needs to change.

export const profile = {
  name: "Seyi Adedokun",
  firstName: "Seyi",
  role: "Software Engineer",
  siteUrl: "https://seyiportfolio.vercel.app",
  image: "/profile_pic.jpg", // square headshot: favicon and link previews
  portrait: "/seyi-portrait.jpg", // hero photo
  description:
    "Software Engineer specialising in React.js, Next.js, React Native, and Node.js. Building scalable web and mobile applications for startups and product teams across Africa and beyond.",
  email: "adedokunseyi96@gmail.com",
  resume: "/Seyi_Adedokun_Resume.pdf",
  twitterHandle: "@seyiadedokun2",
  location: "Nigeria",
  timeZone: "Africa/Lagos", // for the live clock in the top bar
};

// Links shown in the Contact section.
export const socials = [
  { title: "LinkedIn", url: "https://www.linkedin.com/in/seyiadedokun/" },
  { title: "Github", url: "https://github.com/oluwaseyi9325" },
  { title: "X", url: "https://x.com/seyiadedokun2" },
  { title: "YouTube", url: "https://www.youtube.com/@seyi_adedokun" },
];

// The first line is the big About statement (keep it short); the second is the small note under it.
export const about = [
  "I turn ideas into fast, reliable web and mobile products that people enjoy using — working closely with founders, designers and teams from first sketch to launch.",
  "I also spent years teaching software engineering at SQI College of ICT, and I still mentor developers and share what I learn on YouTube.",
]

// Rows in the "What I do" section.
export const services = [
  {
    title: "Web applications",
    text: "Fast, accessible web apps, dashboards and LMS platforms with React, Next.js and Tailwind.",
  },
  {
    title: "Mobile apps",
    text: "Cross-platform iOS & Android apps with React Native and Expo — offline-first when it matters.",
  },
  {
    title: "AI-powered products",
    text: "Bringing AI into real products: smart job matching, recommendations and developer tools.",
  },
  {
    title: "Teaching & mentoring",
    text: "Years of teaching and mentoring developers — I enjoy levelling up the people around me.",
  },
];

export const stack = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Python", "Dart"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Angular", "Vue.js", "Svelte"] },
  { title: "Mobile", items: ["React Native", "Expo", "Flutter"] },
  { title: "Backend", items: ["Node.js", "Express.js", "NestJS", "GraphQL"] },
  { title: "Databases", items: ["MongoDB", "MySQL"] },
  { title: "Tools", items: ["Redux", "Firebase", "Paystack & Stripe", "GitHub Actions", "Cloud Hosting"] },
];

// `logo` is optional: import an image to show a company logo instead of the
// initials badge; `logoBg` sets the tile colour behind it (default white).
export const work = [
  {
    company: "Tredi (ODJ Tech)",
    logo: trediLogo,
    role: "Mobile Developer (React Native)",
    duration: "Dec 2025 – Present",
    location: "Remote",
    url: "https://tredibooks.com/",
    responsibilities: [
      "Building a mobile invoice management system supporting invoice creation, expense tracking, and product management.",
      "Implementing full offline functionality, so users can work without internet and auto-sync when back online.",
      "Designing intuitive UI flows for business owners managing finances on the go.",
    ],
  },
  {
    company: "Conclase",
    logo: conclaseLogo,
    logoBg: "#0f172a", // white logo
    role: "Frontend Developer",
    duration: "Jul 2025 – Present",
    location: "Lagos, Nigeria",
    url: "https://conclaseint.com/",
    responsibilities: [
      "Develop and maintain multiple web products using React.js and Next.js.",
      "Built Stacstart: an LMS with AI-powered job matching and AI course video generation.",
      "Built and maintain the Conclase Academy LMS, serving 3000+ learners.",
    ],
  },
  {
    company: "Smartmart",
    logo: smartmartLogo,
    logoBg: "#000000", // logo image has a black background
    role: "Mobile Developer (React Native)",
    duration: "Mar 2025 – Nov 2025",
    location: "Remote, Abuja",
    url: "https://smartmartng.com/",
    responsibilities: [
      "Developed and deployed a logistics mobile app to the Google Play Store and Apple App Store.",
      "Monitored and optimised app performance weekly, reducing crash rates across devices.",
    ],
  },
  {
    company: "Afrikdish",
    role: "Frontend Developer Lead",
    duration: "May 2024 – 2025",
    location: "Canada (Remote)",
    url: null, // afrikdish.com is no longer online
    responsibilities: [
      "Led the frontend of an e-commerce platform for African food delivery in Canada.",
      "Built user, vendor and admin dashboards and integrated Stripe payments.",
      "Ran weekly Scrum meetings and worked with DevOps on deployments.",
    ],
  },
  {
    company: "PorchPlus",
    logo: porchplusLogo,
    role: "Mobile Developer (React Native)",
    duration: "Feb 2024 – Jul 2025",
    location: "Lagos, Nigeria",
    url: "https://porchplus.com/",
    responsibilities: [
      "Built two React Native apps: a Tenant App and a Property Management App.",
      "Implemented in-app chat, push notifications and geolocation-based property discovery.",
    ],
  },
  {
    company: "Rubies Technology",
    logo: rubiesLogo,
    role: "Frontend Developer",
    duration: "Jan 2024 – Jan 2025",
    location: "Lagos, Nigeria",
    url: "https://foundation.rubiestech.org/",
    responsibilities: [
      "Built and maintained company software with Next.js and Tailwind CSS on RESTful APIs.",
      "Mentored junior staff and young learners in HTML, CSS and JavaScript.",
    ],
  },
  {
    company: "SQI College of ICT",
    logo: sqiLogo,
    role: "Software Developer Instructor",
    duration: "Aug 2020 – May 2023",
    location: "Ogbomoso, Nigeria",
    url: "https://sqi.edu.ng/",
    responsibilities: [
      "Taught Next.js, Node.js, GraphQL and Cloud Hosting to software engineering students.",
      "Mentored students on real-world development practices and career growth.",
    ],
  },
];

// `slug` is the URL of the detail page: /projects/<slug>.
// `category` drives the filter tabs (Web, Mobile, AI, Tools).
// `img` is optional: import a logo or screenshot to replace the initials badge;
// `imgBg` sets the tile colour behind it (default white).
export const projects = [
  {
    slug: "stacstart",
    category: ["Web", "AI"],
    name: "Stacstart",
    img: stacstartLogo,
    stack: "React.js, Next.js, Node.js, AI Integration",
    title: "Africa's AI-Powered Tech Career & Talent Platform",
    summary: "An AI-powered platform that trains, mentors and connects African tech talent to companies worldwide.",
    liveDemo: "https://stacstart.com/",
    sourceCode: null,
    description: [
      "Stacstart is Africa's AI-powered platform built to train, mentor, and connect tech professionals to companies across the world — not just teach tech, but launch careers.",
      "The platform features a full Learning Management System (LMS) where learners enroll in structured tech courses, track their progress, and earn certificates. An integrated Job Management System allows companies to post roles and directly match with vetted candidates from the talent pool.",
      "AI is deeply embedded in the platform — from personalized learning recommendations and career path suggestions to smart job matching between employers and candidates. The goal is to bridge the skill gap in Africa's tech ecosystem at scale.",
    ],
    features: [
      "AI-powered learning recommendations and career path guidance.",
      "Full LMS with courses, modules, quizzes, and certifications.",
      "Job Management System for companies to post jobs and discover talent.",
      "Smart AI matching between job seekers and employers.",
      "Mentor-student connection and session booking.",
      "Progress tracking, leaderboards, and gamification.",
      "Secure authentication with role-based access (Admin, Mentor, Student, Employer).",
      "Payment integration for course enrollment and subscriptions.",
    ],
  },
  {
    slug: "pitchigh",
    category: ["Web"],
    name: "PitcHigh",
    img: pitchighLogo,
    stack: "React.js, Next.js, Node.js",
    title: "Career Platform for IT Audit, GRC & InfoSec Professionals",
    summary: "Learning paths, certifications and community for IT Audit, GRC and InfoSec professionals.",
    liveDemo: "https://pitchigh.com/",
    sourceCode: null,
    description: [
      "PitcHigh is a professional career development platform focused on IT Audit, Governance, Risk & Compliance (GRC), Risk Analysis, and Information Security. It empowers professionals to build credible careers in these specialized domains.",
      "The platform offers structured learning paths with practical, industry-relevant content, enabling learners to earn certifications and gain the skills employers look for in risk and audit roles.",
      "A growing network of professionals, mentors, and organizations makes PitcHigh a community-driven platform where members can connect, collaborate, and accelerate their careers in tech risk and audit.",
    ],
    features: [
      "Structured learning paths for IT Audit, GRC, Risk Analysis, and InfoSec.",
      "Certification programs with industry-recognized credentials.",
      "Community networking for professionals in risk and audit fields.",
      "Mentor-guided career development and coaching sessions.",
      "Practical projects and case studies for hands-on skill building.",
      "Job board with curated roles in IT audit and compliance.",
      "Role-based dashboard for students, mentors, and admins.",
    ],
  },
  {
    slug: "conclase-academy",
    category: ["Web"],
    name: "Conclase Academy",
    img: conclaseAcademyLogo,
    stack: "React.js, Next.js, Node.js, Tailwind CSS",
    title: "Full-Featured Learning Platform for Conclase Academy",
    summary: "The online learning platform behind Conclase Academy, serving 3000+ learners.",
    liveDemo: "https://conclaseacademy.us/",
    sourceCode: null,
    description: [
      "Conclase Academy is an online learning platform built to deliver tech education to aspiring developers and professionals. As the lead frontend engineer at Conclase, I built and maintain this platform end-to-end from the frontend.",
      "The platform supports course management, student enrollment, progress tracking, and instructor dashboards, giving Conclase a full infrastructure to run its training programs online.",
      "Integrated with backend APIs and designed with a role-based system for admins, instructors, and students to ensure a seamless, secure learning experience.",
    ],
    features: [
      "Course catalog with enrollment, modules, and lesson management.",
      "Student dashboard with progress tracking and certifications.",
      "Instructor panel to create and manage course content.",
      "Admin dashboard for platform oversight and user management.",
      "Secure authentication with role-based access control.",
      "Payment integration for course purchases and subscriptions.",
      "Mobile-responsive design for learning on any device.",
    ],
  },
  {
    slug: "conclase-website",
    category: ["Web"],
    name: "Conclase Website",
    img: conclaseLogo,
    imgBg: "#0f172a", // white logo
    stack: "React.js, Next.js, Tailwind CSS",
    title: "Corporate Website for Conclase — Tech Company & Academy",
    summary: "The corporate website for Conclase, showcasing its software services and academy.",
    liveDemo: "https://conclaseint.com/",
    sourceCode: null,
    description: [
      "Designed and built the official corporate website for Conclase, a technology company offering software development services and tech education. The site serves as the digital face of the company, showcasing its services, team, and training programs.",
      "The website is fully responsive and performance-optimized, presenting Conclase's software outsourcing capabilities, client portfolio, and the Conclase Academy — a training arm that equips developers with in-demand skills.",
      "As the lead frontend engineer at Conclase, I handled both the design implementation and development, ensuring the site reflects the company's brand and effectively converts visitors into clients and students.",
    ],
    features: [
      "Clean, modern UI reflecting the Conclase brand identity.",
      "Services section showcasing software development and outsourcing offerings.",
      "Academy section highlighting training programs and course offerings.",
      "Contact and inquiry forms connected to backend APIs.",
      "Fully mobile-responsive with optimized performance.",
      "SEO-friendly structure for improved discoverability.",
    ],
  },
  {
    slug: "tredi",
    category: ["Mobile"],
    name: "Tredi",
    img: trediLogo,
    stack: "React Native, Node.js, Redux",
    title: "A Feature-Rich Mobile Application",
    summary: "An offline-first mobile app for managing invoices, expenses and products on the go.",
    liveDemo: "https://tredibooks.com/",
    sourceCode: null,
    description: [
      "Tredi is a mobile application built with React Native, delivering a smooth and intuitive user experience across both iOS and Android platforms.",
      "The app is designed with performance and usability at its core, featuring seamless navigation, real-time data handling, and offline capabilities for uninterrupted usage.",
      "Built as part of a full product team, Tredi integrates with backend services and incorporates modern mobile development practices including state management, push notifications, and secure authentication.",
    ],
    features: [
      "Cross-platform support for iOS and Android with React Native.",
      "Offline functionality for uninterrupted app usage.",
      "Real-time data sync with backend APIs.",
      "Push notifications for user engagement.",
      "Secure authentication and session management.",
      "Optimized performance with smooth animations and transitions.",
    ],
  },
  {
    slug: "copyup",
    category: ["Web"],
    name: "Copyup",
    img: copyupLogo,
    stack: "Next.js, React.js, Redux, Node.js",
    title: "A Learning Management System for Copywriters",
    summary: "An LMS where copywriters create, sell and take courses, with quizzes and certificates.",
    liveDemo: "https://mycopyup.vercel.app/",
    sourceCode: "https://github.com/oluwaseyi9325/copy_front",
    description: [
      "Copyup is a feature-rich Learning Management System (LMS) built specifically for copywriters and content creators who want to sharpen their craft and monetize their expertise. The platform allows instructors to create and sell structured courses, while students can enroll, learn at their own pace, and earn certificates.",
      "Courses are organized into modules and lessons with support for video lectures, PDFs, quizzes, and assignments. A real-time progress tracker keeps students informed of their advancement, while interactive assessments provide instant feedback to reinforce learning.",
      "Copyup also fosters community through built-in discussion forums and live Q&A sessions, enabling peer collaboration and direct instructor engagement. The admin and instructor dashboards provide full control over course management, user administration, and payment tracking.",
    ],
    features: [
      "Secure user authentication with role-based access (Admin, Instructor, Student).",
      "Course management system (create, edit, delete courses with modules and lessons).",
      "Support for multiple content types (videos, PDFs, quizzes, and assignments).",
      "Personalized student dashboard to track progress and enrolled courses.",
      "Gamification features (badges, leaderboards, certificates).",
      "Quiz and assessment system with automated grading.",
      "Payment integration with Paystack for course purchases.",
      "Admin and instructor panel for course and user management.",
      "Mobile-responsive design for seamless learning on any device.",
      "Course subscription plans and one-time payment options.",
    ],
  },
  {
    slug: "pr-buddy-ai",
    category: ["AI", "Tools"],
    name: "PR Buddy AI",
    stack: "Node.js, OpenAI API, GitHub API",
    title: "AI-Powered Pull Request Summarizer for GitHub",
    summary: "Reads a pull request, summarises it with OpenAI, and posts the summary back on GitHub.",
    liveDemo: "https://www.linkedin.com/posts/seyiadedokun_prbuddyai-github-ai-activity-7329095388953579521-apMq",
    sourceCode: "https://github.com/oluwaseyi9325/pr-buddy-ai",
    description: [
      "PR Buddy AI is a developer tool that automatically reads and summarizes pull requests using OpenAI, then posts the summary as a comment directly on the GitHub PR — saving reviewers time and improving code review clarity.",
      "The tool hooks into GitHub's API to read PR diffs, passes the changes to OpenAI for intelligent summarization, and posts a human-readable summary comment back to the PR thread.",
      "Built with Node.js, it integrates into any GitHub repository workflow, making code reviews faster and more accessible for teams of any size.",
    ],
    features: [
      "Automatic PR diff extraction via GitHub API.",
      "AI-powered summarization using OpenAI GPT models.",
      "Posts formatted summary comments directly on GitHub PRs.",
      "Configurable to run on PR open, update, or on-demand.",
      "Lightweight Node.js tool with minimal setup required.",
    ],
  },
  {
    slug: "d-pay-bank",
    category: ["Web"],
    name: "D-PAY BANK",
    stack: "React.js, Redux, Firebase",
    title: "A Secure Peer-to-Peer Fund Transfer System",
    summary: "Peer-to-peer transfers using one-time codes and passwords instead of bank details.",
    liveDemo: null,
    sourceCode: null,
    description: [
      "D-PAY BANK is a secure digital payment solution that enables peer-to-peer fund transfers through a unique code-based system. Senders generate a unique transfer code paired with a password, which the recipient uses to securely claim the funds — eliminating the need to expose bank details.",
      "Built with Firebase for real-time authentication and database updates, the app ensures instant transaction processing with live balance and history updates. Redux manages application state efficiently, providing a fast and consistent user experience.",
      "The platform prioritizes security at every layer, incorporating two-factor authentication, OTP verification, and encrypted transaction codes to protect users from fraud.",
    ],
    features: [
      "Secure user authentication and OTP verification.",
      "Unique transaction codes with password protection for safe transfers.",
      "Real-time transaction tracking and history.",
      "Seamless UI/UX with Redux for state management.",
      "Firebase integration for real-time updates and authentication.",
      "Two-factor authentication for enhanced transaction security.",
    ],
  },
  {
    slug: "seamlesspos",
    category: ["Web"],
    name: "SeamlessPos",
    stack: "Next.js, JSON-API",
    title: "A Simulated E-Commerce & Point of Sale Platform",
    summary: "An e-commerce and point-of-sale prototype with cart, checkout and product search.",
    liveDemo: null,
    sourceCode: null,
    description: [
      "SeamlessPos is an e-commerce and point-of-sale platform built with Next.js that uses a JSON Fake API to simulate a realistic backend, making it ideal for prototyping and demo environments. Users can browse a product catalog, manage a shopping cart, and complete checkout flows end to end.",
      "The platform is designed with speed and simplicity in mind — products load dynamically with filtering, searching, and sorting capabilities to help users find what they need quickly.",
      "A clean, minimalist UI ensures an intuitive shopping experience on both desktop and mobile, while local storage keeps cart state persistent across sessions.",
    ],
    features: [
      "Dynamic product listing with API-driven data fetching.",
      "Cart management with persistent local storage integration.",
      "Checkout process with simulated transaction flow.",
      "Product search, filter, and sort functionality.",
      "User authentication for personalized experiences.",
      "Dark mode support for better accessibility.",
    ],
  },
  {
    slug: "jsonforge-api",
    category: ["Tools"],
    name: "JSONForge API",
    stack: "Node.js, Svelte",
    title: "A Developer Tool for Fake API Testing & Prototyping",
    summary: "A customisable fake REST API for prototyping frontends without a real backend.",
    liveDemo: null,
    sourceCode: null,
    description: [
      "JSONForge API is a developer tool built to simplify frontend prototyping and API testing by providing a powerful, customizable fake API — a significant upgrade over tools like JSONPlaceholder.",
      "Built with Node.js for high-throughput performance and Svelte for a fast, reactive frontend, JSONForge lets developers generate dynamic mock data, define custom endpoints, and run full CRUD operations against a simulated backend.",
      "Whether you're prototyping a new feature, testing UI components, or demoing an application without a live backend, JSONForge provides the infrastructure to move fast without compromise.",
    ],
    features: [
      "Fully customizable fake API endpoints for any data shape.",
      "Dynamic mock data generation on demand.",
      "CRUD operations (Create, Read, Update, Delete) via REST.",
      "Improved response time and reliability over JSONPlaceholder.",
      "User authentication for managing and persisting API configurations.",
      "Interactive Svelte frontend for browsing and testing endpoints.",
    ],
  },
  {
    slug: "fintech-app",
    category: ["Mobile"],
    name: "Mobile Fintech App",
    stack: "React Native, Firebase, Redux",
    title: "A React Native Fintech App with Wallet & Payments",
    summary: "A mobile wallet with transfers, QR payments and biometric login.",
    liveDemo: null,
    sourceCode: null,
    description: [
      "A comprehensive React Native mobile fintech application replicating the core functionality of platforms like PayPal, Cash App, and Chime. Users can send and receive money, manage digital wallets, and track every transaction in real time.",
      "Security is a top priority — the app implements biometric authentication (fingerprint/face ID), OTP verification, and encrypted session management to protect user accounts and funds. Firebase handles real-time data sync to keep balances and transaction history up to date.",
      "This project demonstrates production-level mobile fintech architecture including payment flows, QR code transactions, and third-party bank integrations — built to mirror what users expect from real-world financial apps.",
    ],
    features: [
      "Secure authentication with OTP and biometric login (fingerprint/face ID).",
      "Real-time transaction tracking and push notifications.",
      "Digital wallet with deposit, withdrawal, and transfer functionality.",
      "QR code payments for fast peer-to-peer transactions.",
      "Transaction history with detailed breakdowns.",
      "Third-party bank and payment service integration.",
    ],
  },
  {
    slug: "food-delivery-app",
    category: ["Mobile"],
    name: "Food Delivery App",
    stack: "React Native, Firebase, Redux",
    title: "A React Native Food Delivery App",
    summary: "Browse restaurants, build an order and track delivery in real time.",
    liveDemo: "https://www.linkedin.com/posts/seyiadedokun_15daysabrnativeabruiabrchallenge-reactnative-activity-7173730148054159360-1XSu",
    sourceCode: null,
    description: [
      "A fully functional React Native mobile app inspired by popular food delivery platforms like UberEats and DoorDash. The app allows users to browse local restaurants, build orders, and track deliveries in real time from pickup to arrival.",
      "Firebase powers the backend with real-time data synchronization, ensuring order status updates are reflected instantly for both customers and restaurants. Redux manages the cart and order state for a smooth, consistent experience throughout the app.",
      "Built as a portfolio project to demonstrate real-world mobile app architecture, API integration, and production-grade UI patterns in React Native.",
    ],
    features: [
      "Restaurant listing with search and filtering options.",
      "Cart and order management with live order tracking.",
      "User authentication with Firebase.",
      "Push notifications for real-time order status updates.",
      "Payment gateway integration for seamless checkout.",
      "Redux state management for cart and order flow.",
    ],
  },
  {
    slug: "weather-app",
    category: ["Mobile"],
    name: "Weather App",
    stack: "React Native, OpenWeather API",
    title: "A Real-Time Weather Forecasting App",
    summary: "Real-time forecasts with GPS location and a UI that changes with the weather.",
    liveDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7205217517890338816",
    sourceCode: null,
    description: [
      "A sleek React Native weather app that delivers accurate, real-time forecasts powered by the OpenWeather API. Users can check current conditions and a 7-day forecast for any city worldwide, including temperature, humidity, wind speed, and weather descriptions.",
      "The app automatically detects the user's location via GPS to provide instant local weather updates without manual input. A smooth, animated UI adapts dynamically to current weather conditions, giving the app a polished, production-quality feel.",
      "Dark mode support and customizable themes make the app comfortable to use in any lighting environment.",
    ],
    features: [
      "Real-time weather data via OpenWeather API.",
      "GPS-based automatic location detection.",
      "7-day weather forecast with detailed daily breakdowns.",
      "City search for worldwide weather lookup.",
      "Dark mode and customizable themes.",
      "Animated UI that reflects current weather conditions.",
    ],
  },
  {
    slug: "inotes",
    category: ["Mobile"],
    name: "INoTes App",
    stack: "React Native",
    title: "A Mobile Note-Taking Application",
    summary: "Offline-first notes with tags, search and cross-device sync.",
    liveDemo: null,
    sourceCode: null,
    description: [
      "INoTes App is a clean and intuitive mobile note-taking application built with React Native. It gives users a fast and reliable way to capture ideas, create to-do lists, and organize information on the go — all in one place.",
      "Notes can be categorized and tagged for easy retrieval, while a powerful search feature ensures users can find any note instantly. The app syncs data across devices so notes are always accessible, regardless of the device in use.",
      "Designed with usability in mind, INoTes includes dark mode support, text formatting options, and offline functionality — ensuring a seamless experience even without an internet connection.",
    ],
    features: [
      "User authentication and secure cloud storage.",
      "Full offline support for creating and managing notes.",
      "Categorization and tagging system for better organization.",
      "Search functionality for quickly finding notes.",
      "Dark mode and customizable themes.",
      "Cross-device sync for seamless access anywhere.",
    ],
  },
  {
    slug: "golang-profit-calculator",
    category: ["Tools"],
    name: "Go Profit Calculator",
    stack: "Go (Golang)",
    title: "A CLI Profit Calculator Built with Go",
    summary: "A command-line tool that works out profit, loss and margin from revenue and expenses.",
    liveDemo: null,
    sourceCode: "https://github.com/oluwaseyi9325/golang-profit-caculator",
    description: [
      "A profit calculator CLI application built with Go (Golang), demonstrating core Go programming concepts including data types, functions, user input handling, and arithmetic operations.",
      "The tool allows users to input revenue and expense figures and calculates profit, loss, and margin percentages — useful for quick business or trading calculations.",
      "Built as a Go learning project to explore the language's syntax, performance, and simplicity for building CLI tools.",
    ],
    features: [
      "Revenue and expense input for profit/loss calculation.",
      "Profit margin percentage calculation.",
      "Clean CLI interface built natively with Go.",
      "Demonstrates Go fundamentals: functions, types, and I/O.",
      "Fast and lightweight with Go's native performance.",
    ],
  },
];

// Two-letter badge used where no logo image is provided.
export const initials = (name) =>
  name
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
