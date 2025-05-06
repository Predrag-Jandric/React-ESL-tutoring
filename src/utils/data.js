// DATA FOR MAP METHODS ACROSS THE APP
// MODIFY MAP DATA HERE AND NOWHERE ELSE.

export const navLinks = [
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "roadmap", label: "Roadmap" },
  { href: "reviews", label: "Reviews" },
  { href: "contact", label: "Contact" },
];

export const mobilenavLinks = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "roadmap", label: "Roadmap" },
  { href: "reviews", label: "Reviews" },
  { href: "FAQ", label: "FAQ" },
  { href: "contact", label: "Contact" },
];

export const skillsMap = [
  { name: "JavaScript", skillsImageUrl: "/assets/skills/js.png" },
  { name: "React", skillsImageUrl: "/assets/skills/react.png" },
  {
    name: "Redux Toolkit",
    skillsImageUrl: "/assets/skills/redux-toolkit.png",
  },
  { name: "Next.js", skillsImageUrl: "/assets/skills/nextjs.png" },
  { name: "Tailwind", skillsImageUrl: "/assets/skills/tailwind.png" },
  { name: "Node.js", skillsImageUrl: "/assets/skills/nodejs.png" },
  { name: "Mongo DB", skillsImageUrl: "/assets/skills/mongodb.png" },
  { name: "Html", skillsImageUrl: "/assets/skills/html.png" },
  { name: "Css", skillsImageUrl: "/assets/skills/css.png" },
  { name: "Git", skillsImageUrl: "/assets/skills/git.png" },
];

export const projectsMap = [
  {
    name: "Split Smart",
    description:
      "Split Smart is a dashboard type of application that helps users manage shared expenses with friends, family, or roommates. Users can create groups, add expenses, and track balances. The app calculates the ways to settle debts among group members.",
    projectsImageUrl: "/assets/projects/splitsmartprev.png",
    flowchart: [
      "/assets/projects/splitsmartflowchartone.png",
      "/assets/projects/splitsmartflowcharttwo.png",
    ],
    effort: "Team project",
    TechUsed: ["React, ", "Tailwind, ", "Redux Toolkit, ", "React Router. "],
    githubLink: "https://github.com/Predrag-Jandric/Split-Smart",
    previewLink: "https://split-smart.netlify.app/",
    id: 3456267564,
    buildTime: "7 weeks",
    teamSize: "5 people",
    type: "Front-end only",
    about: `Split Smart is an application that aims to make splitting expenses among friends, family, or colleagues easy. Whether planning a trip, organizing a group dinner, or managing shared expenses, Split Smart helps you keep track of who owes what and ensures that everyone pays their equal or unequal share. Your data is automatically saved in your browser locally so that you can always come back to where you left off.\n\nBuilding Split Smart taught me valuable lessons about listening to feedback and improving the app with in-depth testing. I also learned the importance of clear documentation for future development and maintenance. One of the major technical challenges was implementing the logic for accurate contribution changes for each member and ensuring that the app was user-friendly and intuitive.\n\nOur team consisted of one Product Owner, two Developers, one UX/UI Designer, and one Scrum Master. We followed Agile methodologies, with regular sprints, iterations, and backlog management. Design and implementation decisions were made collaboratively, ensuring a simple and efficient approach.\n\nMy role included implementing complex logic, managing state with Redux, turning designs into a fully responsive user interface, fixing bugs and optimizing. I also worked on integrating animations and charts, writing documentation, testing and implementing the dark mode.`,
    howItWorksList: `Users can:\n1. Create groups for different events or activities.\n2. Add members to the groups and assign expenses.\n3. Track total budget, expenses, and remaining budget.\n4. Customize contributions for each member.\n5. Edit group details, such as name, description, and image.\n6. Search for groups using the search bar.\n7. Toggle between light and dark modes for a comfortable viewing experience.`,
    howItWorksText: `We used React as the main framework for building the user interface and logic. Redux Toolkit for global state management. React Router for page switching. Tailwind CSS for styling. Framer Motion for animations. Recharts for pie chart visualization. React Icons and React Toastify for icons and notifications.`,
  },
];

export const faqMap = [
  {
    question: "What makes you stand out from other developers?",
    answer: `- I have a strong drive to keep learning, which is essential in a fast-paced, ever-evolving tech field.\n- I bring diverse experience from working on various projects with different teams, always maintaining a solution-driven mindset.\n- I’m disciplined, focused on writing clean, maintainable code, and committed to promoting a positive, team-oriented work environment.\n- I  enjoy writing documentation, giving presentations, and contributing to a collaborative learning culture. For me, these things are not a chore.`,
  },
  {
    question:
      "How much experience do you have as a frontend developer, and what kinds of projects have you worked on?",
    answer:
      "I’ve been coding for a few years and have worked on 100+ projects (available on my GitHub) of various sizes and complexity. I follow scalable, responsive, pixel-perfect design principles and prioritize best practices to ensure code quality, readability, and long-term maintainability.",
  },
  {
    question: "Do you have experience with [specific framework/tool]?",
    answer:
      "I may not always have direct experience with every tool, but I’m a quick learner and eager to expand my skill set to meet project requirements. I think programming is not about syntax memorisation but problem solving skills and concept understanding. Staying curious, continuously learning, and keeping up with the latest tech trends is a key part of my approach to development.",
  },
  {
    question:
      "Do you have experience with full-stack development or backend technologies?",
    answer:
      "While most of my experience in in front-end development, I have a solid understanding of backend technologies like Node.js, Express, and MongoDB databases. I’m always working on improving these skills.",
  },
  {
    question: "How do you work in teams, and how do you respond to feedback?",
    answer:
      "I’ve worked on open-source projects with developers from diverse backgrounds, often taking on the role of lead developer which has helped me become a better team player. I value collaboration, communication, and I adapt quickly to different team dynamics. I appreciate constructive feedback because it’s an opportunity to improve and grow as a developer. When my colleagues faced challenges, I actively guided them by sharing my knowledge, and helping them troubleshoot issues, ensuring we all grew together.",
  },
  {
    question: "How do you meet deadlines and handle challenges?",
    answer:
      "I think that efficient team communication is key to setting managable deadlines and achieving them in time. I’ve worked with the Scrum framework, which encourages collaboration between the development team, Scrum Master, and Product Owner to stay on track and deliver on time for the end user. When challenges arise, my go-to approach is to break the problem into smaller, more manageable pieces. Usually, stepping away for a quick walk clears my mind and brings fresh ideas. In the next team brainstorming session, we then all present our solutions and choose the best combination of ideas together.",
  },
];

export const footerMap = [
  {
    linkUrl: "https://www.linkedin.com/in/predrag-jandric/",
    footerImageUrl: "/assets/all-social-icons/linkedIn.png",
  },
  {
    linkUrl: "https://github.com/Predrag-Jandric",
    footerImageUrl: "/assets/all-social-icons/github-footer.png",
  },
  {
    linkUrl: "https://www.youtube.com/@predragjandric/videos",
    footerImageUrl: "/assets/all-social-icons/youtube.png",
  },
];
