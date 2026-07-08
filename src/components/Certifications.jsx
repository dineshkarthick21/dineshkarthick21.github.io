import React from 'react';
import claude from '../assets/about/certifications/claude.png';
import great from '../assets/about/certifications/great.png';
import IBM from '../assets/about/certifications/IBM-Ai.png';
import intern from '../assets/about/certifications/intern.png';

const certifications = [
  {
    title: 'Internship in AI & ML',
    issuer: 'Azhizen Solutions Private Limited',
    date: 'Nov 2025 to Dec 2025',
    image: intern,
    link: '#contact',
    accent: 'from-indigo-400 via-cyan-400 to-sky-500',
  },
 {
  title: 'Artificial Intelligence Fundamentals',
  issuer: 'IBM SkillsBuild',
  date: 'January 2026',
  image: IBM, // Update with your certificate image path
  link: 'https://www.credly.com/badges/0f233074-9e42-4326-923e-08e5a871c663',
  accent: 'from-blue-500 via-indigo-500 to-purple-600',
},
  {
  title: 'Claude 101',
  issuer: 'Anthropic',
  date: 'July 2026', // Change if your completion date is different
  image: claude,
  link: '#', // Add certificate verification link if available
  accent: 'from-orange-400 via-amber-400 to-yellow-500',
},
  {
  title: 'SDLC',
  issuer: 'Great Learning Academy',
  date: 'May 2024',
  image: great,
  link: 'https://verify.mygreatlearning.com/EFCXEZUR',
  accent: 'from-cyan-400 via-blue-500 to-indigo-600',
},
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative w-full overflow-hidden bg-[#0c1224] px-6 py-24 md:px-12 md:py-32 font-sans text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div data-aos="fade-up" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-sky-200 backdrop-blur-md">
            Verified Learning
          </div>

          <h2 data-aos="fade-up" data-aos-delay="100" className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
            Certifications
          </h2>

          <p data-aos="fade-up" data-aos-delay="200" className="mt-4 text-lg text-slate-300">
            Validating my expertise through recognized certifications and hands-on learning across analytics, AI, and machine learning.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {certifications.map((certification, index) => (
            <article
              key={certification.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#11182f]/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${certification.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.08]`} />
              <div className="relative grid gap-6 md:grid-cols-[240px_1fr] md:items-center">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-3">
                  <div className="aspect-[4/3] overflow-hidden rounded-[1rem] bg-[#eaeef8] shadow-inner">
                    <img
                      src={certification.image}
                      alt={certification.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="px-1 py-1">
                  <h3 className="text-2xl font-black leading-tight text-white md:text-3xl">
                    {certification.title}
                  </h3>

                  <p className="mt-3 text-lg text-sky-200/90">
                    {certification.issuer}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    {certification.date}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <a
                      href={certification.link}
                      className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-100 transition-colors duration-300 hover:bg-indigo-500/20 hover:text-white"
                    >
                      Verify Credential
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>

                    <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
                      Portfolio credential
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

