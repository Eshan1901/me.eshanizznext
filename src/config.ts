export const config = {
    developer: {
        name: "Eshan",
        fullName: "Eshan Bhardwaj",
        title: "Software Engineer & Full-Stack Developer",
        description: "Aspiring software development engineer and full-stack generalist with experience building, testing, deploying, and maintaining web products. Skilled in React, TypeScript, Node.js, REST APIs, databases, CI/CD, Python, and AI-assisted development."
    },
    social: {
        github: "Eshan1901",
        email: "ebhardwaj87@gmail.com",
        phone: "+91 8200712178",
        location: "Chennai, India"
    },
    about: {
        title: "About Me",
        description: "I am an aspiring Software Development Engineer and Full-Stack Generalist pursuing B.Tech in Computer Science and Engineering at SRM Institute of Science and Technology (CGPA: 8.83). I have hands-on experience building, testing, deploying, and maintaining web products with React, TypeScript, Node.js, REST APIs, databases, and CI/CD. With 500+ problems solved on LeetCode (1700 rating) and a state-level chess ranking (1643 ELO), I bring disciplined problem-solving and end-to-end ownership to engineering reliable software."
    },
    education: {
        degree: "B.Tech, Computer Science and Engineering",
        institution: "SRM Institute of Science and Technology",
        period: "2023 – 2027",
        location: "Chennai, India",
        cgpa: "8.83"
    },
    certifications: [
        {
            title: "SAP Certified",
            subTitle: "ABAP Backend Development",
            issuer: "SAP"
        },
        {
            title: "Microsoft Certified",
            subTitle: "GitHub Actions",
            issuer: "Microsoft"
        }
    ],
    achievements: [
        "Solved 500+ coding problems on LeetCode (70+ LeetCode Hard, 1700 rating)",
        "Led the Velocity Team at Coding Ninjas SRM as Accelerator Program member",
        "Top 10 finalist at House of Coders 2024",
        "State-level chess ranking with an ELO rating of 1643"
    ],
    experiences: [
        {
            position: "Web Development Intern",
            company: "SSS Patna",
            period: "Jun 2026 – Jul 2026",
            location: "Remote",
            description: "Translated product requirements for InternshipWala.com into customer-facing features and functional web deliverables. Tested and validated rapid updates, debugged issues, and iterated on fixes to maintain platform reliability and release quality.",
            responsibilities: [
                "Translated product requirements for InternshipWala.com into customer-facing features",
                "Tested and validated rapid updates, debugging issues across environments",
                "Iterated on fixes to maintain platform reliability and release quality",
                "Collaborated with cross-functional stakeholders with end-to-end ownership"
            ],
            technologies: ["React", "TypeScript", "REST APIs", "Debugging", "Web Products"]
        },
        {
            position: "Full-Stack Developer",
            company: "Gnosis Press (Startup)",
            period: "2025",
            location: "Remote",
            description: "Owned the end-to-end design, development, deployment, and maintenance of the startup’s live MERN-stack platform (gnosispress.org). Worked directly with publishing stakeholders to shape features and implemented CI/CD workflows to automate releases.",
            responsibilities: [
                "Owned end-to-end design, development, deployment, and maintenance of live MERN platform",
                "Collaborated with publishing stakeholders to shape features and improve site accessibility",
                "Implemented CI/CD workflows to automate releases and reduce maintenance overhead",
                "Engineered responsive user interfaces and robust backend services"
            ],
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CI/CD", "MERN Stack"]
        },
        {
            position: "Volunteer Developer",
            company: "Ahinsadham NGO",
            period: "2025",
            location: "Kutch, India",
            description: "Built a digital operations platform for animal rescue, veterinary treatment management, and donation tracking. Mapped real-world care processes into structured application workflows, reducing manual coordination for injured and abandoned animals.",
            responsibilities: [
                "Built digital operations platform for animal rescue and vet treatment management",
                "Developed donation tracking and medical record workflows",
                "Mapped real-world care processes into structured digital forms",
                "Reduced manual coordination overhead for animal welfare staff"
            ],
            technologies: ["React", "Node.js", "Database Management", "Workflow Automation"]
        },
        {
            position: "Technical Lead (Velocity Team)",
            company: "Coding Ninjas SRM",
            period: "2023 - 2025",
            location: "Chennai, India",
            description: "Led the Velocity Team after progressing from technical member; coordinated technical initiatives as an Accelerator Program member. Recognized as a Top 10 finalist at House of Coders 2024.",
            responsibilities: [
                "Led the Velocity Team and coordinated club technical initiatives",
                "Mentored student developers in Data Structures, Algorithms, and development",
                "Top 10 finalist at House of Coders 2024",
                "Maintained active competitive programming community"
            ],
            technologies: ["Leadership", "DSA", "Problem Solving", "Mentorship", "Algorithms"]
        },
        {
            position: "B.Tech in Computer Science & Engineering",
            company: "SRM Institute of Science and Technology",
            period: "2023 - 2027",
            location: "Chennai, India",
            description: "Pursuing B.Tech in CSE with a CGPA of 8.83. Strong foundation in Data Structures, Algorithms, Computer Networks, Operating Systems, and DBMS. State-level chess ranking with 1643 ELO.",
            responsibilities: [
                "Maintained academic excellence with 8.83 CGPA",
                "Mastered CS fundamentals: DSA, OODP, Computer Networks, OS, and DBMS",
                "Solved 500+ LeetCode problems (70+ Hard, 1700 rating)",
                "State-level chess player with 1643 ELO rating"
            ],
            technologies: ["DSA", "OODP", "Computer Networks", "OS", "DBMS", "LeetCode"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Social",
            category: "Full-Stack Web",
            technologies: "React.js, Node.js, Express.js, MongoDB, REST APIs",
            image: "/images/social_platform.jpg",
            description: "Engineered a full-stack community platform supporting authenticated user accounts, post sharing, likes, comments, and paginated content feeds with MongoDB-backed REST APIs.",
            link: "https://socialapp-j6z3.vercel.app/login"
        },
        {
            id: 2,
            title: "Cloud Task Scheduling Simulator",
            category: "Cloud & Machine Learning",
            technologies: "CloudSim Plus, LightGBM, Hugging Face, Java, Python",
            image: "/images/cloud_scheduler.jpg",
            description: "Engineered 13 features from 400,000+ raw Google Borg trace records. Trained a LightGBM quantile regression model with pinball loss estimating P10/P50/P90 tail risk for CPU, memory, and task duration, reducing SLA violations by 84.7% and wait times by 83.9%.",
            link: "https://github.com/Eshan1901/Cloud-Simulation-Using-ML"
        },
        {
            id: 3,
            title: "TeachLoop",
            category: "EdTech Platform",
            technologies: "React 18, TypeScript, Tailwind CSS, Shadcn/ui, Appwrite, Vite",
            image: "/images/teachloop.jpg",
            description: "A modern educational platform that connects teachers and learners through an intuitive course creation and management system. Features Appwrite authentication, database, storage, search, interactive progress dashboard, and real-time notifications.",
            link: "https://teachloop-ten.vercel.app/"
        },
        {
            id: 4,
            title: "Playbox",
            category: "Web App / Gaming",
            technologies: "React.js, JavaScript, Tailwind CSS, Vercel",
            image: "/images/playbox.jpg",
            description: "A digital game library & subscription platform inspired by Steam and Spotify. Features curated game exploration, genre filtering/sorting, 'Your Library' collection manager, and a sleek modern dark/light responsive UI.",
            link: "https://play-box-indol.vercel.app/"
        }
    ],
    contact: {
        email: "ebhardwaj87@gmail.com",
        phone: "+91 8200712178",
        github: "https://github.com/Eshan1901",
        linkedin: "https://www.linkedin.com/in/eshan-bhardwaj-88947328a/",
        instagram: "https://www.instagram.com/eshanrizzznext"
    },
    skills: {
        develop: {
            title: "FULL-STACK & BACKEND",
            description: "Building scalable web products & robust APIs",
            details: "Full-stack generalist skilled in building, testing, deploying, and maintaining web products with React, Next.js, Node.js, Express.js, and databases (MongoDB, SQL). Experience with REST APIs, authentication, CI/CD, and AI-assisted development.",
            tools: ["React.js", "Next.js", "Node.js", "Express.js", "TypeScript", "JavaScript", "MongoDB", "REST APIs", "Tailwind CSS", "Docker", "CI/CD", "GitHub Actions"]
        },
        design: {
            title: "DATA, ML & CORE CS",
            description: "Algorithms, Machine Learning & CS Fundamentals",
            details: "Deep CS foundation with 500+ LeetCode problems solved (1700 rating). Strong in Data Structures, Algorithms, OODP, Computer Networks, OS, and DBMS. Experienced in Python data science, Machine Learning (Scikit-learn, LightGBM, Pandas, NumPy), and cloud simulation.",
            tools: ["Python", "C/C++", "DSA", "SQL", "Machine Learning", "LightGBM", "Scikit-learn", "Pandas", "NumPy", "CloudSim Plus", "Git", "Appwrite"]
        }
    }
};
