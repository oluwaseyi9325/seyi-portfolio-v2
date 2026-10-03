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
