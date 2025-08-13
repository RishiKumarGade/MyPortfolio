import React from 'react';
import { ExternalLink, Github, Users, Brain, Database, Code, Box, Globe, Gamepad2, MapPin, Sword } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "BrainBot",
      description: "AI-powered platform for learning and mastering board games (Chess & Checkers) with intelligent hints, game analysis, and strategic feedback.",
      image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Next.js", "TypeScript", "MongoDB", "JWT", "AI Integration", "TailwindCSS"],
      features: [
        "Play against AI opponents",
        "Real-time hints and suggestions",
        "Game analysis and blunder detection",
        "Mini-game scenarios for practice",
        "Rewind and review functionality"
      ],
      icon: <Brain className="w-6 h-6" />,
      github: "https://github.com/rishikumargade/brainbot",
      demo: "#"
    },
    {
      title: "Smart Inventory System",
      description: "AI-integrated inventory management system for factories and manufacturing units, enabling production tracking, material monitoring, and AI-assisted processes.",
      image: "https://cdn-icons-png.flaticon.com/512/6295/6295417.png",
      technologies: ["Next.js 14", "TypeScript", "MongoDB", "JWT", "TailwindCSS", "Cloudinary", "Gemini AI API"],
      features: [
        "JWT authentication with email verification",
        "Product CRUD with image uploads",
        "Process tracking & inventory conversion",
        "Dashboard analytics per organization",
        "AI-assisted descriptions via Gemini API"
      ],
      icon: <Database className="w-6 h-6" />,
      github: "https://github.com/RishiKumarGade/SmartInventorySystem",
      demo: "#"
    },
    {
      title: "TechArena",
      description: "AI-powered coding battleground for technical interview preparation with dynamic challenges generated using Gemini API, featuring unlimited unique coding questions.",
      image: "https://www.lingio.com/hubfs/33.%20Top%20X%20AI%20Quiz%20Generator%20Tools%20and%20Apps%20to%20Try%20in%202024%20-%20cover.jpg",
      technologies: ["JavaScript", "Gemini API", "HTML", "CSS", "Vite"],
      features: [
        "Infinite unique coding challenges",
        "Adaptive difficulty levels (1-10)",
        "Multiple question formats (MCQ, True/False, Code Analysis)",
        "Detailed explanations and feedback",
        "Performance tracking and statistics"
      ],
      icon: <Sword className="w-6 h-6" />,
      github: "https://github.com/rishikumargade/tech-arena",
      demo: "https://tech-arena-beta.vercel.app/"
    },
    {
      title: "SIH E-commerce Platform",
      description: "Next-gen e-commerce platform empowering vendors, customers, and delivery agents with multi-role support and direct vendor-customer connections.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "Node.js"],
      features: [
        "Multi-role support (vendor/customer/delivery agent)",
        "Direct purchase from vendors",
        "Real-time order management",
        "Smart notifications system",
        "Advanced search and filtering"
      ],
      icon: <Globe className="w-6 h-6" />,
      github: "https://github.com/RishiKumarGade/SIHhackthon",
      demo: "#"
    },
    {
      title: "TourPlanner",
      description: "AI-driven travel planning application using Gemini API with visual node flow, cost estimation, and chat-based session interface for trip customization.",
      image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "TypeScript", "TailwindCSS", "Vite", "Gemini API"],
      features: [
        "AI-powered itinerary generation",
        "Dynamic chat sessions for planning",
        "Visual node flow for destinations",
        "Real-time AI trip updates",
        "Cost estimation with travel details"
      ],
      icon: <MapPin className="w-6 h-6" />,
      github: "https://github.com/RishiKumarGade/TourPlanner",
      demo: "#"
    },
    {
      title: "CodeCraft",
      description: "Real-time collaborative code editor enabling multiple developers to work together seamlessly with live chat, file management, and session persistence.",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*UWkL4QRmHnvLiIoXPoU2qA.jpeg",
      technologies: ["React", "Next.js", "Socket.io", "MongoDB", "TypeScript", "Node.js"],
      features: [
        "Real-time collaborative editing",
        "Syntax highlighting for multiple languages",
        "File system management",
        "Live chat with avatars",
        "Session persistence and recovery"
      ],
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/rishikumargade/codecraft",
      demo: "#"
    },
    {
      title: "Cobalt",
      description: "AI-powered codebase understanding tool for storing, retrieving, and interpreting code snippets securely with intelligent search capabilities.",
      image: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
      technologies: ["Next.js", "TypeScript", "MongoDB", "JWT", "TailwindCSS", "AI Integration"],
      features: [
        "Secure snippet storage",
        "AI-assisted code search",
        "Tag-based snippet categorization",
        "Dark/light theme",
        "Fast MongoDB-backed search"
      ],
      icon: <Box className="w-6 h-6" />,
      github: "https://github.com/RishiKumarGade/Cobalt",
      demo: "#"
    },
    {
      title: "CodeForGood AI Games",
      description: "2D AI engine specializing in solving games and puzzles using machine learning, featuring Q-learning implementation for autonomous gameplay.",
      image: "https://www.ediiie.com/blog/assets/admin/uploads/AI-in-Gaming.png",
      technologies: ["Python", "PyTorch", "Matplotlib", "NumPy", "Q-Learning", "Reinforcement Learning"],
      features: [
        "Q-learning algorithm for game solving",
        "Multiple game implementations (Block AI, Snake AI, Space Shooter)",
        "Performance visualization and tracking",
        "Autonomous learning and improvement",
        "Training progression analytics"
      ],
      icon: <Gamepad2 className="w-6 h-6" />,
      github: "https://github.com/RishiKumarGade/2D-AI-Game-Engine",
      demo: "#"
    },
    {
      title: "Employee Management System",
      description: "Comprehensive full-stack system for HR management with role-based access control, attendance tracking, and leave management.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Spring Boot", "Next.js", "MySQL", "JWT", "Java", "TypeScript"],
      features: [
        "Role-based authentication (Admin/HR/Employee)",
        "Leave request workflow",
        "Attendance tracking system",
        "Employee profile management",
        "Dashboard analytics"
      ],
      icon: <Users className="w-6 h-6" />,
      github: "https://github.com/rishikumargade/employeemanagement",
      demo: "#"
    },
    {
      title: "BrickNBash Game",
      description: "Java Swing-based game with AI implementation using Q-Learning reinforcement learning for intelligent agent navigation.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Java", "Swing", "Q-Learning", "Reinforcement Learning", "AI"],
      features: [
        "Q-Learning algorithm implementation",
        "Autonomous agent navigation",
        "Collision detection system",
        "Training and testing modes",
        "State-action learning persistence"
      ],
      icon: <Database className="w-6 h-6" />,
      github: "https://github.com/rishikumargade/bricknbash",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            AI integration, and collaborative tools
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg text-blue-600">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/rishikumargade"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
