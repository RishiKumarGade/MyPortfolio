import React from 'react';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: "education",
      title: "B.Tech in Computer Science Engineering",
      organization: "CVR College of Engineering",
      location: "Hyderabad, India",
      period: "2022 - 2026",
      description: "Pursuing Bachelor's degree with focus on software development, algorithms, and emerging technologies.",
      highlights: [
        "Relevant coursework in Data Structures, Algorithms, and Software Engineering",
        "Active participation in hackathons and coding competitions",
        "Member of Google Developer Student Club (GDSC)"
      ],
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      type: "project",
      title: "Hackathon Winner - BitnBuild",
      organization: "GDSC CVR",
      location: "CVR College of Engineering",
      period: "February 2024",
      description: "Led team '404Found' to develop CodeCraft, a real-time collaborative code editor.",
      highlights: [
        "Built full-stack application in 24 hours",
        "Implemented real-time collaboration features",
        "Integrated live chat and session management"
      ],
      icon: <Award className="w-5 h-5" />
    }
  ];

  const certifications = [
    "Full Stack Web Development",
    "Java Programming",
    "React Development",
    "Database Management",
    "AI & Machine Learning Fundamentals"
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and practical experience in software development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-blue-500 rounded-full shadow-lg">
                    <div className="text-blue-600">
                      {exp.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-2">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'education' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {exp.type === 'education' ? 'Education' : 'Achievement'}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {exp.title}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-3">
                        <span className="font-medium">{exp.organization}</span>
                        <span className="hidden sm:inline mx-2">•</span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-500 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {exp.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Skills */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                Key Competencies
              </h3>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Current Focus</h4>
                <p className="text-sm text-gray-600">
                  Exploring advanced AI integration, microservices architecture, 
                  and cloud-native development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;