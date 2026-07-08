import React from 'react';
import { motion } from 'framer-motion';
import kidney from '../assets/about/kidney-im.png';

const experienceData = [
  {
    id: 1,
    role: 'AI/ML Intern',
    company: 'Azhizen Solutions Private Limited',
    period: 'Nov 2025 - Dec 2025',
    location: 'Offline',
    type: 'Internship',
    description: 'Developed an AI-powered web application to predict Chronic Kidney Disease using machine learning techniques, providing early risk assessment through an interactive interface.',
    achievements: [
      'Built a Random Forest model achieving 77% prediction accuracy.',
      'Applied SelectKBest feature selection to improve model performance.',
      'Developed an interactive Streamlit web application for real-time predictions.',
      'Integrated an LLM-powered RAG chatbot using LangChain for CKD-related guidance and information retrieval.'
    ],
    skills: ['Python', 'Scikit-learn', 'LangChain', 'FastAPI', 'Docker', 'Random Forest','RAG','LLM','Pandas','NumPy','Azure'],
    projects: [
      {
        id: 1,
        title: 'Chronic Kidney Disease Prediction System',
        description: 'Developed an AI-powered disease prediction system using machine learning to identify Chronic Kidney Disease at an early stage through an interactive web application with intelligent clinical assistance.',
        metric: 'Achieved 77% accuracy in CKD prediction. ⭐',
        image: kidney,
        tags: ['Python', 'Scikit-learn', 'LangChain', 'FastAPI', 'Docker', 'Random Forest','RAG','LLM','Pandas','NumPy','Azure'],
        github: 'https://github.com/dineshkarthick21/Chronic-kidney-disease-prediction',
        live: 'https://example.com',
        color: 'from-blue-500 to-cyan-500',
      }
    ]
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-white px-6 py-24 md:px-12 md:py-32 font-sans"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,42,42,0.05),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div data-aos="fade-up" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-gray-700 backdrop-blur-md">
            Experience
          </div>

          <h2 data-aos="fade-up" data-aos-delay="100" className="mt-6 text-4xl font-black leading-tight text-black md:text-6xl">
            My Professional Journey
          </h2>

          <p data-aos="fade-up" data-aos-delay="200" className="mt-4 text-lg text-gray-600">
            From internships to professional roles, building expertise across AI/ML, full-stack development, and cloud infrastructure.
          </p>
        </div>

        {/* Experience Items */}
        {experienceData.map((exp, expIndex) => (
          <motion.div
            key={exp.id}
            data-aos="fade-up"
            data-aos-delay={expIndex * 100}
            className="mb-12"
          >
            {/* Experience Header */}
            <div className="mb-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-black text-gray-900">{exp.role}</h3>
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-red-100 text-red-700 border border-red-300">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-lg text-red-500 font-semibold">{exp.company}</p>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-gray-600">{exp.period}</p>
                  <p className="text-sm text-gray-500">{exp.location}</p>
                </div>
              </div>

              <p className="text-gray-800 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="mb-6 space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600 mb-3">Key Achievements</p>
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                    <p className="text-gray-800">{achievement}</p>
                  </div>
                ))}
              </div>

              {/* Skills Used */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200 hover:border-red-500/50 hover:bg-red-50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects During This Experience */}
            {exp.projects && exp.projects.length > 0 && (
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-6 ml-2">Featured Project</h4>
                
                {exp.projects.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-md hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
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
                      <div className="p-8 flex flex-col justify-between">
                        {/* Title */}
                        <div>
                          <h5 className={`text-2xl font-black bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-3`}>
                            {project.title}
                          </h5>

                          {/* Description */}
                          <p className="text-gray-700 mb-6 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Metric */}
                          <div className="flex items-start gap-3 mb-6 pb-6 border-b border-gray-200">
                            <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-1.5" />
                            <p className="text-sm font-medium text-green-600">
                              {project.metric}
                            </p>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
