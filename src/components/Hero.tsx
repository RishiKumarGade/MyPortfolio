import React from "react";
import { ChevronDown, Download, Github, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full p-[3px] bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
  <div className="rounded-full overflow-hidden w-full h-full">
    <img
      src="src\assets\rishi.jpg" 
      alt="Rishi Kumar Gade"
      className="w-full h-full object-cover"
    />
  </div>
</div>


            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              Rishi Kumar Gade
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 animate-fade-in-delay-1">
              Full Stack Developer & Software Engineer
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in-delay-2">
              Passionate about creating innovative solutions with modern
              technologies. Specialized in web development, AI integration, and
              building scalable applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-delay-3">
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="mailto:gaderishi77@gmail.com"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6 animate-fade-in-delay-4">
            <a
              href="https://github.com/rishikumargade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:gaderishi77@gmail.com"
              className="text-white/80 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
