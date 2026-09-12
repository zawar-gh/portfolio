import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
import { ArrowRight, Github, Linkedin, ChevronRight } from "lucide-react";

export function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* HERO SECTION */}
      <section className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 mb-8 rounded-full bg-[rgba(46,242,209,0.1)] border border-[#2EF2D1]/20">
              <span className="text-[#2EF2D1] tracking-wide">Full Stack Developer</span>
            </div>

            <h1 className="mb-4 text-7xl md:text-7xl tracking-tight" style={{ fontWeight: 700 }}>
              {profile.name}
            </h1>

            <p className="text-2xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Building scalable applications and high-performance systems
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-4 bg-[#2EF2D1] text-[#0D0E11] rounded-lg hover:bg-[#2EF2D1]/90 transition-all shadow-[0_0_30px_rgba(46,242,209,0.3)] text-lg"
                style={{ fontWeight: 600 }}
              >
                View Projects
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10 flex items-center gap-2 text-lg"
              >
                <Github className="w-5 h-5" />
                GitHub
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10 flex items-center gap-2 text-lg"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 space-y-24 pb-20">
        {/* ABOUT PREVIEW */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/[0.04] rounded-2xl p-8 border border-white/12">
          <h2>About Me:</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-4">
              I'm a Full-Stack Developer focused on Python/Django and RESTful architectures. Experienced in building and deploying
              scalable web applications using React, Node.js, and MySQL. Passionate about backend optimization, data structures,
              efficient coding practices, and system performance analytics.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="px-8 py-2 bg-white/5 rounded-lg hover:bg-white/8 transition-all border border-white/10 flex items-center gap-2 text-lg"
              style={{ fontWeight: 500 }}
            >
              View Profile Details
            </button>
          </div>
        </motion.section>

        {/* FEATURED PROJECTS (MAIN FOCUS) */}
        <section id="projects">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-12 text-5xl text-center" style={{ fontWeight: 700 }}>
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 0.98, y: -8 }}
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="group cursor-pointer bg-white/[0.04] rounded-2xl overflow-hidden border border-white/10 hover:border-[#2EF2D1]/50 hover:shadow-[0_0_40px_rgba(46,242,209,0.2)] transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#2EF2D1]/20 to-[#7C5CFF]/20">
                    <img
                      src={project.screenshots[0].url}
                      alt={project.screenshots[0].title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs ${
                        project.status === 'Completed'
                          ? 'bg-[#2EF2D1]/20 text-[#2EF2D1] border border-[#2EF2D1]/30'
                          : 'bg-[#7C5CFF]/20 text-[#7C5CFF] border border-[#7C5CFF]/30'
                      }`} style={{ fontWeight: 600 }}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="mb-2 text-2xl text-white" style={{ fontWeight: 600 }}>
                      {project.title}
                    </h3>
                    <p className="text-white/60 mb-4">
                      {project.tagline}
                    </p>

                    {/* Tech Stack - Max 4 tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs bg-white/5 rounded-md text-white/70 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[#2EF2D1] group-hover:gap-3 transition-all">
                      <span style={{ fontWeight: 600 }}>View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE TIMELINE (HORIZONTAL) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-4xl text-center" style={{ fontWeight: 700 }}>
            Experience
          </h2>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max px-6">
              {profile.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="bg-white/[0.04] rounded-2xl p-6 border border-white/10 hover:border-[#7C5CFF]/30 transition-all w-[500px] flex-shrink-0"
                >
                  <div className="mb-4">
                    <span className="px-3 py-1.5 bg-[#7C5CFF]/20 text-[#7C5CFF] rounded-lg border border-[#7C5CFF]/30 text-sm">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>
                    {exp.title}
                  </h3>
                  <p className="text-[#7C5CFF] mb-1">{exp.company}</p>
                  <p className="text-sm text-white/50 mb-4">{exp.location}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.description.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                        <div className="w-1 h-1 bg-[#7C5CFF] rounded-full mt-1.5 flex-shrink-0" />
                        <span className="line-clamp-10">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs bg-white/5 rounded text-white/60 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SKILLS OVERVIEW (COMPRESSED) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-4xl text-center" style={{ fontWeight: 700 }}>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {profile.skills.slice(0, 5).map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/[0.04] rounded-2xl p-6 border border-white/10 hover:border-[#2EF2D1]/30 transition-all"
              >
                <h3 className="mb-4 text-lg text-[#2EF2D1]" style={{ fontWeight: 600 }}>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.slice(0, 5).map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-sm bg-white/5 rounded-lg text-white/70 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* STATS STRIP */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-8 bg-white/[0.04] rounded-2xl border border-white/10">
            <div className="text-5xl mb-2 text-[#2EF2D1]" style={{ fontWeight: 700 }}>
              1+
            </div>
            <div className="text-white/60">Years Professional Experience</div>
          </div>
          <div className="text-center p-8 bg-white/[0.04] rounded-2xl border border-white/10">
            <div className="text-5xl mb-2 text-[#7C5CFF]" style={{ fontWeight: 700 }}>
              4+
            </div>
            <div className="text-white/60">Production Projects Completed</div>
          </div>
          <div className="text-center p-8 bg-white/[0.04] rounded-2xl border border-white/10">
            <div className="text-5xl mb-2 text-[#2EF2D1]" style={{ fontWeight: 700 }}>
              10+
            </div>
            <div className="text-white/60">Core Technologies Mastered</div>
          </div>
        </motion.section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <a
                href={`mailto:${profile.email}`}
                className="px-6 py-3 bg-[#2EF2D1]/10 text-[#2EF2D1] rounded-lg hover:bg-[#2EF2D1]/20 transition-all border border-[#2EF2D1]/30"
                style={{ fontWeight: 600 }}
              >
                Email Me
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="text-white/40 text-sm">
              © 2026 {profile.name}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
