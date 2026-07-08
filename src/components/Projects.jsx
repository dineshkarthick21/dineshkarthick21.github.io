import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Predictive Maintenance System',
    description: 'Developed LSTM-based predictive maintenance system for industrial equipment, forecasting failures 72 hours in advance with...',
    metric: 'Reduced unplanned downtime by 35% in test scenarios',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
    tags: ['Python', 'TensorFlow', 'LSTM', 'Pandas', 'Matplotlib'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Agricultural Commodity Price Predictor',
    description: 'Built LSTM neural network to predict crop prices based on historical data, weather patterns, and market indicators.',
    metric: 'Achieved competitive prediction accuracy on test data',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
    tags: ['Python', 'LSTM', 'Scikit-learn', 'Flask', 'Plotly'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'N8N Security & Threat Intelligence System',
    description: 'Automated security monitoring and intelligence gathering system using n8n workflows, integrating multiple threat feeds.',
    metric: 'Reduced manual monitoring time by 80%',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13d991b?w=600&h=400&fit=crop',
    tags: ['n8n', 'Python', 'APIs', 'Github', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 4,
    title: 'E-Commerce Platform with AI Recommendations',
    description: 'Full-stack e-commerce platform featuring AI-powered product recommendations, real-time inventory management, and payment integration.',
    metric: 'Increased conversion rate by 42%',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Machine Learning'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'RAG-Based Document Analysis System',
    description: 'Built Retrieval-Augmented Generation system for intelligent document analysis, supporting multi-document queries with contextual understanding.',
    metric: 'Achieved 95% accuracy in document retrieval',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&h=400&fit=crop',
    tags: ['LangChain', 'OpenAI', 'Python', 'Vector DB', 'Flask'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 6,
    title: 'Real-Time Collaboration Platform',
    description: 'Developed real-time collaboration tool with live editing, presence awareness, and conflict resolution for distributed teams.',
    metric: 'Supports 1000+ concurrent users with <100ms latency',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    tags: ['React', 'WebSocket', 'Node.js', 'Redis', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 7,
    title: 'Computer Vision Object Detection API',
    description: 'Scalable REST API for real-time object detection and image classification using YOLOv8, deployed with auto-scaling capabilities.',
    metric: 'Processes 1000+ images per minute with 98.5% accuracy',
    image: 'https://images.unsplash.com/photo-1634817552657-e66c6a6af999?w=600&h=400&fit=crop',
    tags: ['Python', 'YOLOv8', 'FastAPI', 'Docker', 'Azure'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-amber-500 to-orange-500',
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
