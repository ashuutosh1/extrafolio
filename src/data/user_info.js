const info = {
  // ============ MAIN DETAILS ============
  main: {
    name: "Ashutosh Kumar Singh",
    description:
      "I am a software engineer with expertise in full-stack web development and mobile app developement. I have experience in building scalable, secure and reliable applications using various frameworks and technologies. I am passionate about creating high-quality code that follows best practices and industry standards.",
    role: "Web and Mobile App Developer",
    photo: "../images4.jpg",
    email: "bro4code@gmail.com",
  },

  // ============ PROJECTS ============
  projects: [
    {
      title: "Pseudocode to C",
      description:
        "Pseudocode to C is a web app that translates pseudocode into C code, aiding in the transition from high-level logic to a lower-level language.",
      technologies: "React, Tailwind, Flask, SpaCy",
      github: "https://github.com",
      link: "https://pseudocode-to-c.netlify.app/",
      image: "images3.jpg" 
    },

    {
      title: "YouShare",
      description:
        "Developed to learn full-stack web development using Nuxt3, Express, and PostgreSQL in fulfillment of my internship requirements.",
      technologies: "Nuxt, Tailwind, Express, PostgreSQL",
      github: "https://github.com",
      link: "https://github.com/dsbalico/YouShare",
      image: "images4.jpg" 
    },

    {
      title: "Draw & Classify",
      description:
        "Draw & Classify is a web application designed to test my machine learning model, which classifies drawn letters, digits, or shapes.",
      technologies: "React, Tailwind, Tensorflow",
      github: "https://github.com",
      link: "https://letterdigitshape-classification.netlify.app/",
      image: "school2.png" 
    },

    {
      title: "Chatroom",
      description:
        "Chatroom is a simple online chatting web application where you can create chat rooms and have a fun conversation with a group of people.",
      technologies: "React, Tailwind, Firebase",
      github: "https://github.com",
      link: "https://thechatroom.netlify.app/",
      image: "school1.png" 
    },

    {
      title: "Sudoku Solver",
      description:
        "Sudoku Solver is a web application that can generate or solve sudoku problems using simulated annealing, an optimization algorithm.",
      technologies: "React, Tailwind, TypeScript",
      github: "https://github.com",
      link: "https://sudoku-solver-sa.netlify.app/",
      image: "images4.jpg" 
    },
  ],

  // ============ EDUCATION ============
  education: [
    {
      school: "Chandigarh University",
      degree:
        "Bachelor of Engineering - Computer Science and Engineering (with specilization in Blockchain Technology)",
      duration: "2022 - 2026",
      image: "college1.jpg",
    },
    {
      school: "Academic Global School",
      degree: "High School (10th) and Senior Secondary (12th)",
      duration: "2018 - 2022",
      image: "school2.png",
    },
  ],

  // ============ EXPERIENCE ============
  experience: [
    {
      position: "Blockchain Developer Traniee",
      company: "MetaCrafter Traniee.",
      duration: "June 2023 - Aug 2023 (2 Months)",
      image: "metacrafter1.jpg",
      descriptions: [
        "Completed an extensive training program in full-stack web development.",
        "Actively contributed to the ongoing development of a web application.",
        "Mentored by senior developers on best practices and code optimization.",
      ],
    },
    {
      position:
        "CyberSecurity Traniee under th gudence of Chandigarh University",
      company: "Cisco Network Academy",
      duration: "June 2024 - July 2024 (1 Month)",
      image: "cisco1.png",
      descriptions: [
        "Developed Python scripts to automate document score calculations.",
        "Developed a company website as part of an ICT-related work immersion program.",
      ],
    },
  ],

  // ============ CERTIFICATES ============
  certificates: [
    {
      title: "Foundations of Cybersecurity Certificate",
      description: "Provided by Coursera & Authorized by IBM",
      icon: "ibm",
      link: "https://www.coursera.org/",
    },
    {
      title: "Git and GitHub Essentials",
      description: "Provided by Coursera & Authorized by IBM",
      icon: "ibm",
      link: "https://www.credly.com/",
    },
  ],
};

export default info;
