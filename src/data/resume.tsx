import { Icons } from "@/components/icons";

const emojiArray = ["✌️", "👋", "🖖", "🙌"];
const newEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length)];

export const DATA = {
  name: "Vignesh",
  emoji: newEmoji,
  initials: "M B",
  url: "https://dillion.io",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "Frontend Developer specializing in ReactJS with 3 Years of Experience & overall 7 Years of Experience, aspiring to become a MERN Stack Engineer",
  summary:
    "I began my career as an Instrumentation Engineer, providing database reporting solutions for power plants integrated with Automation Systems (PLC/SCADA). During this time, although I have completed many Automation Systems successfully, I realised my coding skill surpasses my skills in developing automation systems. With encouragement and guidance from friends, I transitioned into software field as a Frontend Developer.\n\n My Software career started in a company that specializes in building cloud portals for managing solar portfolios. This role improved my frontend development skills and allowed me to leverage my in-depth knowledge of solar power plants to enhance our product features.\n\n After 2 years, I wanted to explore the Healthcare domain & joined a company where I am actively involved in application development as a frontend-heavy MERN stack developer. I am working on ExpressJS for implementing RESTAPI Endpoints, handling the manual deployment for both Frontend & Backend Apps & currently working on CI/CD implementation with Jenkins with SonarQube Integration",
  avatarUrl: "/me1.png",
  skills: [
    "HTML & CSS",
    "JavaScript",
    "NodeJS",
    "ReactJS",
    "Redux",
    "NextJS",
    "Material UI",
    "Tailwind CSS",
    "ExpressJS",
    "REST APIs",
    "NoSQL (MongoDB)",
    "SQL (MSSQL,MySQL)",
    "AWS (S3, CloudFront, Lambda, API Gateway)",
    "Azure (Speech Services, Function App, API Gateway)",
    "Typescript",
    "NestJS",
    "Docker",
    "Python",
    "Git",
  ],
  contact: {
    email: "vigneshmb2016@gmail.com",
    tel: "+917598981693",
    social: {
      GitHub: {
        url: "https://github.com/vigneshmb",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/vigneshmb18/",
        icon: Icons.linkedin,
      },
      // X: {
      //   url: "https://x.com/dillionverma",
      //   icon: Icons.x,
      // },
      // Youtube: {
      //   url: "https://youtube.com/c/dillionverma",
      //   icon: Icons.youtube,
      // },
    },
  },
  work: [
    {
      companyName: "ScribeEMR Systems",
      companyURL: "https://www.scribeemr.in/",
      companyTechStack: [
        "HTML & CSS",
        "JavaScript",
        "NodeJS",
        "ReactJS",
        "Material UI",
        "ExpressJS",
        "REST APIs",
        "NoSQL (MongoDB)",
        "Docker",
        "Git",
        "Jenkins",
        "SonarQube",
        "Azure (Speech Services, Function App, API Gateway)",
      ],
      companyLogo: "/scribeemr.logo.jpg",
      companyLocation: "Bengaluru - WFO",
      start: "2023",
      end: "2024",
      roleDescription:
        "Working on a product which focuses on Insurance Claiming process which includes processing a Member's Claim along with Health Risk Assessment Form for various clients/hospitals and their set of Insurance Providers.",
      positions: [
        {
          title: "Front-End Software Developer",
          start: "June 2023",
          end: "August 2024",
          description:
            "Working on a product which focuses on Insurance Claiming process which includes processing a Member's Claim along with Health Risk Assessment Form for various clients/hospitals and their set of Insurance Providers.",
        },
      ],
    },
    {
      companyName: "Smartgrid Analytics",
      companyTechStack: [
        "HTML & CSS",
        "JavaScript",
        "NodeJS",
        "ReactJS",
        "Redux",
        "Material UI",
        "ExpressJS",
        "REST APIs",
        "NoSQL (MongoDB)",
        "Typescript",
        "NestJS",
        "Git",
        "AWS (S3, CloudFront, Lambda, API Gateway)",
      ],
      companyURL: "https://www.linkedin.com/company/smart-grid-analytics/",
      companyLogo: "/smartgrid.logo.jpg",
      companyLocation: "Bengaluru - WFH",
      start: "2021",
      end: "2023",
      roleDescription:
        "Worked on Two Products based on MERN Stack for Solar Power Plants - Remacs React, CMMS React. Remacs React is for Monitoring a Solar Plant Portfolio & CMMS is for Managing a Solar Plant Portfolio including Inventory management.",
      positions: [
        {
          title: "Software Developer",
          start: "August 2021",
          end: "June 2023",
          description:
            "Worked on Two Products based on MERN Stack for Solar Power Plants - Remacs React, CMMS React. Remacs React is for Monitoring a Solar Plant Portfolio & CMMS is for Managing a Solar Plant Portfolio including Inventory management.",
        },
      ],
    },
    {
      companyName: "Delsys Automation Technologies",
      companyURL: "https://delsys.co.in/",
      companyTechStack: [
        "HTML & CSS",
        "JavaScript",
        "Material UI",
        "jQuery",
        "SQL (MSSQL,MySQL)",
        "Python",
      ],
      companyLogo: "/delsys.logo.jpg",
      companyLocation: "Chennai/Bengaluru - WFO/Site Visit",
      start: "2017",
      end: "2020",
      roleDescription:
        "Also Known as DELTA CONTROL SYSTEMS. Worked on Automated Reporting Solution for various types of Industries like Solar Power Plants, Thermal Power Plants using Python & MSSQL along with PLC,SCADA Automation for GE, Siemens & AB.",
      positions: [
        {
          title: "Junior Engineer",
          start: "February 2017",
          end: "August 2020",
          description:
            "Worked on Automated Reporting Solution for various types of Industries like Solar Power Plants, Thermal Power Plants using Python & MSSQL along with PLC,SCADA Automation for GE, Siemens & AB.",
        },
        {
          title: "Engineer (Trainee)",
          start: "January 2017",
          end: "January 2018",
          description:
            "Also Known as DELTA CONTROL SYSTEMS. Worked on Automated Reporting Solution for various types of Industries like Solar Power Plants, Thermal Power Plants using Python & MSSQL along with PLC,SCADA Automation for GE, Siemens & AB.",
        },
      ],
    },
  ],
  education: [
    {
      schoolName: "K.L.N. College of Engineering",
      schoolURL: "https://www.klnce.edu/",
      schoolDegree: "B.E - Electronics & Instrumentation Engineering",
      schoolLogo: "/klnce.logo.gif",
      schoolLocation: "Madurai, Tamilnadu, India",
      start: "2011",
      end: "2014",
    },
    {
      schoolName: "Tamilnadu Government Polytechnic College",
      schoolURL: "https://tngptcmadurai.com/",
      schoolDegree: "DCE - Diploma in Computer Engineering",
      schoolLogo: "/diploma.logo.jpg",
      schoolLocation: "Madurai, Tamilnadu, India",
      start: "2008",
      end: "2011",
    },
    {
      schoolName: "M.N.U.J.N. Higher Secondary School",
      schoolURL: "https://www.mnujnhss.com/",
      schoolDegree: "SSLC - Secondary School",
      schoolLogo: "/mnujnhss.logo.png",
      schoolLocation: "Madurai, Tamilnadu, India",
      start: "2003",
      end: "2008",
    },
  ],
} as const;
