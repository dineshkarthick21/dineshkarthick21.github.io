import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
  id: 1,
  title: 'Campus Resource Management System',
  description: 'Developed a full-stack campus resource booking platform with role-based access control, multi-stage approval workflow, real-time booking tracking, and resource management...',
  metric: 'Implemented a 3-stage approval workflow with Student, Staff, and Admin roles',
  image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop',
  tags: [
    'Java',
    'Spring Boot',
    'React',
    'MongoDB',
    'Tailwind CSS'
  ],
  github: 'https://github.com/dineshkarthick21/java-Team-20',
  live: '',
  color: 'from-emerald-500 to-teal-500',
},
  {
  id: 2,
  title: 'Air Canvas Studio',
  description: 'Developed an AI-powered gesture-controlled virtual drawing system using Computer Vision, enabling users to draw, recognize shapes, move objects, and save artwork through real-time hand gestures...',
  metric: 'Built a touchless drawing application with real-time hand gesture recognition using AI',
  image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
  tags: [
    'Python',
    'OpenCV',
    'MediaPipe',
    'NumPy',
    'Computer Vision'
  ],
  github: 'https://github.com/dineshkarthick21/Air-Canvas-Gesture-controlled',
  live: '',
  color: 'from-violet-500 to-fuchsia-500',
},
  {
  id: 3,
  title: 'Animal Image Detector',
  description: 'Developed a full-stack AI-powered animal image classification system using a CNN model, enabling users to upload images and receive real-time predictions through a responsive web interface...',
  metric: 'Achieved real-time animal image classification using a CNN-powered deep learning model',
  image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&h=400&fit=crop',
  tags: [
    'Python',
    'TensorFlow',
    'FastAPI',
    'React',
    'CNN'
  ],
  github: 'https://github.com/dineshkarthick21/Animal-Image-Detector',
  live: 'https://animal-detector-ifb7.onrender.com/',
  color: 'from-orange-500 to-amber-500',
},
  {
  id: 4,
  title: 'RAG Dakshaa - Intelligent Q&A System',
  description: 'Developed a Retrieval-Augmented Generation (RAG) application that delivers context-aware answers using LangChain, FAISS, and Google Gemini, with a modern React interface for intelligent event assistance...',
  metric: 'Built an AI-powered RAG chatbot with semantic search and context-aware response generation',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  tags: [
    'Python',
    'FastAPI',
    'LangChain',
    'FAISS',
    'Google Gemini 2.5 Flash'
  ],
  github: 'https://github.com/dineshkarthick21/Dakshaa-Rag-Model',
  live: '',
  color: 'from-indigo-500 to-purple-500',
},
  {
  id: 5,
  title: 'EaseMilker - Smart Dairy Management App',
  description: 'Developed a cross-platform Flutter application for dairy farm management, integrating Firebase services, IoT device monitoring, real-time order tracking, inventory management, and customer support into a unified platform...',
  metric: 'Built a full-stack Flutter application with Firebase backend and IoT-enabled dairy management features',
  image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop',
  tags: [
    'Flutter',
    'Dart',
    'Firebase',
    'Firestore',
    'MQTT'
  ],
  github: 'https://github.com/Raghul799/EaseMilker-App',
  live: '',
  color: 'from-green-500 to-emerald-500',
},
  {
  id: 6,
  title: 'Palani Temple Visitor Prediction System',
  description: 'Developed a full-stack machine learning application that predicts daily visitor counts using a Random Forest Regression model, enabling data-driven forecasting through a React interface and Flask REST API...',
  metric: 'Built a machine learning forecasting system for predicting temple visitor counts using Random Forest Regression',
  image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop',
  tags: [
    'Python',
    'Flask',
    'React',
    'Scikit-Learn',
    'Random Forest'
  ],
  github: 'https://github.com/dineshkarthick21/palani-visitors-prediction',
  live: '',
  color: 'from-yellow-500 to-orange-500',
},
  {
  id: 7,
  title: "DK's Snake Game",
  description: 'Developed a modern browser-based Snake game featuring cursor and touch controls, multiple color themes, responsive gameplay, and smooth Canvas API animations for desktop and mobile devices...',
  metric: 'Built a responsive HTML5 Canvas game with real-time cursor and touch-based controls',
  image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
  tags: [
    'JavaScript',
    'HTML5',
    'CSS3',
    'Canvas API',
    'Responsive Design'
  ],
  github: 'https://github.com/dineshkarthick21/Snake-Game',
  live: 'https://snake-game-dk.onrender.com',
  color: 'from-lime-500 to-green-500',
},
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-white px-6 py-24 md:px-12 md:py-32 font-sans"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,42,42,0.05),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <div data-aos="fade-up" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-gray-700 backdrop-blur-md">
            Featured Work
          </div>

          <h2 data-aos="fade-up" data-aos-delay="100" className="mt-6 text-4xl font-black leading-tight text-black md:text-6xl">
            Projects & Case Studies
          </h2>

          <p data-aos="fade-up" data-aos-delay="200" className="mt-4 text-lg text-gray-600">
            Crafted solutions across AI/ML, full-stack development, and cloud infrastructure. Each project demonstrates problem-solving, technical depth, and real-world impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-white/10 shadow-lg hover:border-white/20 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                {/* Action Icons */}
                <div className="absolute top-4 right-4 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-gray-300 hover:bg-white transition-all duration-300 text-gray-800"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-gray-300 hover:bg-white transition-all duration-300 text-gray-800"
                    aria-label="Live Demo"
                  >
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className={`text-xl font-black bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-2`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Metric */}
                <div className="flex items-start gap-2 mb-5 pb-5 border-b border-gray-200">
                  <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-1.5" />
                  <p className="text-xs font-medium text-green-600">
                    {project.metric}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
