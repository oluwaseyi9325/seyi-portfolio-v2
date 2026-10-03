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
  { title: "Youtube", url: "https://www.youtube.com/@code_with_sheynet" },
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
    role: "Mobile Developer (React Native)",
    duration: "Dec, 2025 - Present",
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
    role: "Frontend Developer",
    duration: "Jul, 2025 - Present",
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
    role: "Mobile Developer (React Native)",
    duration: "Mar, 2025 - Nov, 2025",
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
    duration: "May, 2024 - Present",
    location: "Canada (Remote)",
    url: "https://afrikdish.com/",
    responsibilities: [
      "Lead the frontend of an e-commerce platform for African food delivery in Canada.",
      "Built user, vendor and admin dashboards and integrated Stripe payments.",
      "Run weekly Scrum meetings and work with DevOps on deployments.",
    ],
  },
  {
    company: "PorchPlus",
    role: "Mobile Developer (React Native)",
    duration: "Feb, 2024 - Jul, 2025",
    location: "Lagos, Nigeria",
    url: "https://porchplus.com/",
    responsibilities: [
      "Built two React Native apps: a Tenant App and a Property Management App.",
      "Implemented in-app chat, push notifications and geolocation-based property discovery.",
    ],
  },
  {
    company: "Rubies Technology",
    role: "Frontend Developer",
    duration: "Jan, 2024 - Jan, 2025",
    location: "Lagos, Nigeria",
    url: "https://foundation.rubiestech.org/",
    responsibilities: [
      "Built and maintained company software with Next.js and Tailwind CSS on RESTful APIs.",
      "Mentored junior staff and young learners in HTML, CSS and JavaScript.",
    ],
  },
  {
    company: "Shaperly Africa",
    role: "Mobile Developer (React Native)",
    duration: "Jan, 2023 - Jul, 2023",
    location: "Rivers State, Nigeria",
    url: null,
    responsibilities: [
      "Collaborated on driver and customer logistics apps connected via REST APIs.",
      "Implemented offline data sync for low-connectivity environments.",
    ],
  },
  {
    company: "SQI College of ICT",
    role: "Software Developer Instructor",
    duration: "Aug, 2020 - May, 2023",
    location: "Ogbomoso, Nigeria",
    url: "https://sqi.edu.ng/",
    responsibilities: [
      "Taught Next.js, Node.js, GraphQL and Cloud Hosting to software engineering students.",
      "Mentored students on real-world development practices and career growth.",
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
