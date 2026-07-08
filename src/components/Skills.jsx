import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    accent: 'from-[#ff2a2a] to-[#ff6a3d]',
    barColor: 'bg-gradient-to-r from-[#ff2a2a] to-[#ff6a3d]',
    description: 'I build clean, responsive interfaces with modern React patterns and strong attention to motion, spacing, and usability.',
    items: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'CSS', level: 92 },
      { name: 'HTML', level: 95 },
      { name: 'Responsive UI', level: 90 },
    ],
  },
  {
    title: 'Backend',
    accent: 'from-[#111827] to-[#374151]',
    barColor: 'bg-gradient-to-r from-[#6b7280] to-[#9ca3af]',
    description: 'I create APIs and server logic that stay organized, secure, and easy to extend as the product grows.',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 85 },
      { name: 'Python', level: 88 },
      { name: 'Flask', level: 82 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT Authentication', level: 80 },
    ]
  },
  {
    title: 'Database',
    accent: 'from-[#7c3aed] to-[#2563eb]',
    barColor: 'bg-gradient-to-r from-[#7c3aed] to-[#2563eb]',
    description: 'I design data flows and structures that keep applications fast, consistent, and easy to maintain.',
    items: [
      { name: 'MySQL', level: 87 },
      { name: 'MongoDB', level: 86 },
      { name: 'MongoDB Atlas', level: 84 },
    ],
  },
  {
    title: 'AI & ML',
    accent: 'from-[#0f766e] to-[#14b8a6]',
    barColor: 'bg-gradient-to-r from-[#0f766e] to-[#14b8a6]',
    description: 'I work on intelligent features, model-driven experiences, and practical machine learning integrations.',
    items: [
      { name: 'Python', level: 88 },
      { name: 'TensorFlow', level: 82 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'LangChain', level: 80 },
      { name: 'Large Language Models (LLMs)', level: 83 },
      { name: 'Retrieval-Augmented Generation (RAG)', level: 81 },
      { name: 'Natural Language Processing (NLP)', level: 84 },
      { name: 'Prompt Engineering', level: 86 },
    ],
  },
  {
    title: 'Cloud',
    accent: 'from-[#1d4ed8] to-[#0ea5e9]',
    barColor: 'bg-gradient-to-r from-[#1d4ed8] to-[#0ea5e9]',
    description: 'I deploy and support projects with cloud-ready workflows and a focus on reliability and scalability.',
    items: [
      { name: 'Microsoft Azure', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 90 },
      { name: 'Postman', level: 88 },
      { name: 'Render', level: 83 },
      { name: 'Vercel', level: 85 },
      { name: 'Netlify', level: 84 },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-white px-6 py-24 md:px-12 md:py-32 font-sans"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,42,42,0.05),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <div data-aos="fade-up" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-gray-700 backdrop-blur-md">
            Skills
          </div>

          <h2 data-aos="fade-up" data-aos-delay="100" className="mt-6 text-4xl font-black leading-tight text-black md:text-6xl">
            My Core Tech Stack Across Full-Stack, AI/ML & Cloud
          </h2>

        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              data-aos={index % 2 === 0 ? 'fade-up' : 'fade-left'}
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-[1.8rem] border border-gray-200 bg-gray-50 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${group.accent}`} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-gray-400">0{index + 1}</p>
                  <h3 className="mt-3 text-2xl font-black text-gray-900">{group.title}</h3>
                </div>

                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${group.accent} text-sm font-black text-white shadow-lg shadow-black/20`}>
                  {group.title.slice(0, 2).toUpperCase()}
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                {group.description}
              </p>

              <div className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <div key={item.name} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-700">{item.name}</span>
                      <span className="text-xs font-bold text-gray-600">{item.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${group.barColor}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;