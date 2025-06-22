/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sai Kumar Bachireddy",
  title: "Hi all, I'm Sai Kumar",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 with hands-on experience in building cloud-native applications, scalable backend systems, and intelligent data pipelines using Java, Python, AWS, Spring Boot, and React."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1fH8Wcbzpk8aNsCi1jfOCpx9JBmpqUEJv/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/saikumarbachi/",
  gmail: "saikumarbachi@gmail.com",
  facebook: "https://www.facebook.com/saikumar.bachi.5",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills   ",
  subTitle: "</>",
  skills: [
    emoji(
      "⚡ Build cloud-native applications and data pipelines with AWS, Docker, and CI/CD"
    ),
    emoji("⚡  Design scalable backend APIs and services with Spring Boot and Node.js"),
    emoji(
      "⚡ Develop responsive and dynamic front-end interfaces using React.js"),
       emoji("⚡ Automate data workflows using Apache Airflow and integrate real-time data via Kafka"),
        emoji("⚡  Create smart AI/ML-powered apps using Hugging Face, BERT, and Python"),
         emoji("⚡ Deploy and monitor systems with Prometheus, Grafana, and GitHub Actions"),

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    }

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Florida",
      logo: require("./assets/images/uf.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2023 - December 2024"
    },
    {
      schoolName: "Sreenidhi Institute of Science & Technology",
      logo: require("./assets/images/snist.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2018 - August 2022"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud",
      progressPercentage: "85%"

    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "National Science Foundation",
      companylogo: require("./assets/images/nsf.png"),
      date: "January 2024 – Present",
      desc: "Built a SaaS-based AI tool to streamline ML workflows using Hugging Face and Docker. Optimized for HPC with Intel Gaudi 2, integrated CI/CD via GitHub Actions, and built real-time monitoring with Prometheus and Grafana."
    },
    {
      role: "Associate Software Developer",
      company: "Fronesis Solutions",
      companylogo: require("./assets/images/fronesis.png"),
      date: "July 2021 – December 2022",
      desc: "Developed scalable Spring Boot + GraphQL services, cutting API calls by 35%. Deployed microservices on AWS with Docker, secured 50K+ users with JWT, and maintained 99% uptime in Agile teams."
      
    },
    {
      role: "Machine Learning Intern",
      company: "TheSmartBridge",
      companylogo: require("./assets/images/smart.png"),
      date: "May 2020 – July 2020",
      desc: "Built an NLP pipeline to extract product review insights. Fine-tuned BERT models and used spaCy/NLTK to boost text understanding and reduce model drift."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle:
        "Certified in designing secure, reliable, and cost-effective cloud solutions using Amazon Web Services (AWS). Skilled in building and managing cloud systems.",
      image: require("./assets/images/aws.png"),
      imageAlt: "aws",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/c9219157-2e7e-4a0b-a66a-4c464808c75c/linked_in_profile"
        }
      ]
    },
    {
      title: "Graph Developer - Associate",
      subtitle:
        "Certified in building and working with GraphQL APIs using Apollo. Skilled in designing schemas, writing queries, and managing data efficiently with GraphQL.",
      image: require("./assets/images/graph.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.apollographql.com/tutorials/certifications/41102184-6ffd-418e-9034-e45358a8e16d"
        }
      ]
    },

    {
      title: "Databricks Lakehouse Fundamentals",
      subtitle: "Certified in the basics of the Databricks Lakehouse platform. Understands how to combine data engineering, analytics, and machine learning on a unified architecture.",
      image: require("./assets/images/databricks.png"),
      imageAlt: "PWA Logo",
     footerLink: [
        {
          name: "Certification",
          url: "https://credentials.databricks.com/099f0ca1-6013-4046-9775-08d3822776f5#acc.4fOHdXuD"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I’m on the hunt for full-time positions in Software Engineering. If you’re aware of any exciting opportunities, have questions, or just want to get in touch, please reach out",
  number: "+1-352-664-0820",
  email_address: "saikumarbachi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
