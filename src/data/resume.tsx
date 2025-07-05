// Resume.tsx
import { Icons } from "@/components/icons";
import { ResumeCard } from "@/components/resume-card";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Himanshu Kotia",
  initials: "HK",
  url: "https://himanshukotia.vercel.app/",
  location: "Jalandhar, PB",
  locationLink: "https://www.google.com/maps/place/jalandhar",
  description:
    "Software Engineer turning creative ideas into dynamic web experiences | Code, Create, Innovate 💡",
  summary:
    "I’m Himanshu Kotia, a full-stack developer with a strong foundation in the MERN stack, specializing in building responsive and scalable web applications. I hold a [Bachelor's degree in Computer Science Engineering from D.A.V. University, along with multiple certifications](/#education) in React.js, MongoDB, and JavaScript from LetsUpgrade. [With experience as a Junior Software Developer at PENNEP, a MERN Developer intern at Blackmora Technologies and Drop X Out](/#work), I have worked on developing full-stack applications, optimizing website performance, and enhancing user engagement using MongoDB, Express.js, React.js, and Node.js. I [have built multiple projects](/#projects), including Booklers, an e-commerce bookstore with Firebase authentication and real-time database management, Hotellier, a modern hotel booking platform, and Breeze Beacon, a real-time weather app. My technical expertise includes React, Redux, Node.js, Express.js, MongoDB, REST APIs, Tailwind CSS, and Git. With a background in sales and a passion for problem-solving, I thrive on building intuitive and high-performance applications. I’m constantly learning and growing as a MERN developer, aiming to deliver seamless user experiences through innovative web solutions.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "JavaScript",
    "TailwindCSS", 
    "Git",
    "Redux",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "himanshukotia9@gmail.com",
    tel: "+918283020999",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Himanshukotia9",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/himanshukotia9/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/HimanshuKotia1",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:himanshukotia9@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Blackmora Technologies Private Limited",
      href: "https://blackmora.com/",
      badges: [],
      location: "Remote",
      title: "MERN Stack Developer intern",
      logoUrl: "/blackmora_logo.jpeg",
      start: "April 2024",
      end: "Present",
      description:
        "As a MERN Stack Developer Intern at Blackmora Technology Pvt. Ltd., I work on building a full-stack Point-of-Sale (POS) system with inventory management tailored for healthcare pharmacies. My role involves developing responsive user interfaces with React.js and Tailwind CSS, creating scalable APIs using Node.js and Express.js, and managing data with MongoDB. I handle complex business logic such as batch tracking, inventory updates, and billing, while ensuring seamless integration between the frontend and backend for a real-time, optimized user experience.",
    },
    {
      company: "Drop X Out",
      href: "https://dropxout.com/",
      badges: [],
      location: "Remote",
      title: "MERN Developer intern",
      logoUrl: "/DropXOut.jpeg",
      start: "December 2024",
      end: "Present",
      description:
        "Engineered full-stack web applications using MongoDB, Express.js, React.js, and Node.js, implementing responsive UIs and RESTful APIs.",
    },
    {
      company: "B.B.N Trading Co.",
      badges: [],
      href: "",
      location: "Jalandhar, PB",
      title: "Sales Executive",
      logoUrl: "/Bbn.png",
      start: "July 2022",
      end: "Present",
      description:
        "Developed and maintained relationship with key customers to ensure repeat and referral business. Used to generate invoices, updated records of sales and acquisitions, and also managed inventory.",
    },
    {
      company: "Pennep",
      href: "https://www.pennep.com/",
      badges: [],
      location: "Jalandhar, PB",
      title: "Junior Software Developer intern",
      logoUrl: "/pennep.jpeg",
      start: "January 2022",
      end: "June 2022",
      description:
        "Designed and developed website front-end using HTML, CSS, Bootstrap and JavaScript framework, resulting in a visually appealing and user-friendly interface. Ensured website responsiveness across various devices and screen sizes by implementing responsive design techniques. Leveraged Microsoft Azure to implement storage accounts, containers, SFTP, binding, and triggers, enhancing the functionality and efficiency of the system.",
    },
  ],
  education: [
    {
      school: "Dav University, JALANDHAR",
      href: "https://davuniversity.org/",
      degree: "Bachelor of Technology - BTech",
      logoUrl: "/Dav.png",
      start: "2018",
      end: "2022",
    },
    {
      school: "LetsUpgrade",
      href: "https://verify.letsupgrade.in/certificate/LUEJSMAY123382",
      degree: "JavaScript Programming Essentials Bootcamp",
      logoUrl: "/letsupgrade.jpeg",
      start: "May, 2023",
      end: "Present",
    },
    {
      school: "LetsUpgrade",
      href: "https://verify.letsupgrade.in/certificate/LUERJSMAY123193",
      degree: "React.js Essentials Bootcamp",
      logoUrl: "/letsupgrade.jpeg",
      start: "May, 2024",
      end: "Present",
    },
    {
      school: "LetsUpgrade",
      href: "https://verify.letsupgrade.in/certificate/LUEMDBSEP124534",
      degree: "MongoDB Bootcamp",
      logoUrl: "/letsupgrade.jpeg",
      start: "September, 2024",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Booklers",
      href: "https://booklers.vercel.app/",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "Developed a full-stack e-commerce bookstore using React.js, Node.js, Express, and MongoDB, enabling seamless book purchases for users while providing admin-exclusive management. Optimized performance and UX with Firebase Authentication & Storage, ensuring secure access and scalable image handling. Implemented a responsive UI with Tailwind CSS, achieving a 40% faster page load time for mobile and desktop users.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Redux",
        "TailwindCSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://booklers.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Himanshukotia9/Booklers",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Booklers.jpg",
      video:"",
        // https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4
    },
    {
      title: "Breeze Beacon",
      href: "https://breeze-beacon.vercel.app/",
      dates: "Aug 2024 - Aug 2024",
      active: true,
      description:
        "Delivers real-time weather updates with 99% accuracy, including temperature, conditions, and forecasts. Utilizes an engaging interface that boosts user interaction by 20% and cuts search time by 50%.",
      technologies: [
        "React",
        "Redux",
        "RTK Query",
        "React Hooks",
        "TailwindCSS",
        "JavaScript",
        "Api Integration",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://breeze-beacon.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Himanshukotia9/Breeze-Beacon",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Breeze-beacon.jpg",
      video: "",
      // https://cdn.magicui.design/bento-grid.mp4
    },
    {
      title: "Hotellier",
      href: "https://hotellier.vercel.app/",
      dates: "Oct 2024 - Oct 2024",
      active: true,
      description:
        "Crafted with a 100% responsive and modern design that captivates and retains user attention. Strategically placed, conversion-driven buttons that make booking or inquiries a breeze. Showcases high-resolution imagery and vibrant visuals that bring the hotel's unique ambiance to life.",
      technologies: [
        "React",
        "React Hooks",
        "HTML",
        "CSS",
        "TailwindCSS",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://hotellier.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Himanshukotia9/Hotel-Booking-Website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Hotellier.jpg",
      video: "",
      // https://cdn.llm.report/openai-demo.mp4
    },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
} as const;
