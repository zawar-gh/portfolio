import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router";
import { projects } from "../data/projects";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl mb-4">Project not found</h1>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-[#2EF2D1] text-[#0D0E11] rounded-lg"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#0D0E11]/80 border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="text-white/60 hover:text-white transition-colors"
        >
          Back to Home
        </button>

        <span
          className={`px-4 py-2 rounded-full text-sm ${
            project.status === "Completed"
              ? "bg-[#2EF2D1]/20 text-[#2EF2D1] border border-[#2EF2D1]/30"
              : "bg-[#7C5CFF]/20 text-[#7C5CFF] border border-[#7C5CFF]/30"
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT SIDE — HERO + OVERVIEW */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Title */}
            <div>
              <h1 className="text-5xl mb-3 font-bold">{project.title}</h1>
              <p className="text-2xl text-[#2EF2D1]">{project.tagline}</p>
            </div>

            {/* Main Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#2EF2D1]/20 to-[#7C5CFF]/20 border border-white/10">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={project.screenshots[currentImageIndex].url}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overview */}
            <div className="bg-white/[0.04] rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl mb-4 text-[#2EF2D1] font-bold">
                Overview
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-white/60 font-semibold mb-1">
                    Problem
                  </h4>
                  <p className="text-white/90">{project.problem}</p>
                </div>

                <div>
                  <h4 className="text-white/60 font-semibold mb-1">
                    Solution
                  </h4>
                  <p className="text-white/90">{project.solution}</p>
                </div>

                <div>
                  <h4 className="text-white/60 font-semibold mb-1">
                    Description
                  </h4>
                  <p className="text-white/90">{project.description}</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white/[0.04] rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl mb-4 text-[#2EF2D1] font-bold">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/5 rounded-lg border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — THUMBNAILS + DESCRIPTION + FEATURES */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Thumbnail Grid — Optimized to be smaller & occupy less space */}
            <div className="bg-white/[0.04] rounded-2xl p-5 border border-white/10">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 text-white/50">
                Screenshots
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.screenshots.map((shot, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-12 rounded-md overflow-hidden border-2 transition-all shrink-0 hover:opacity-90 ${
                      currentImageIndex === index
                        ? "border-[#2EF2D1] scale-95"
                        : "border-white/10 opacity-60"
                    }`}
                  >
                    <img
                      src={shot.url}
                      className="w-full h-full object-cover"
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Screenshot Description */}
            <div className="bg-white/[0.04] rounded-2xl p-6 border border-white/10">
              <h4 className="text-[#2EF2D1] font-bold mb-2">
                {project.screenshots[currentImageIndex].title}
              </h4>
              <p className="text-white/70">
                {project.screenshots[currentImageIndex].description}
              </p>
            </div>

{/* Project Links */}
<div className="flex flex-wrap gap-4">
  {project.liveUrl && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-3 bg-[#2EF2D1] text-[#0D0E11] rounded-lg font-semibold hover:bg-[#24d9bb] transition-colors"
    >
      <ExternalLink className="w-5 h-5" />
      View Live Project
    </a>
  )}

  {project.githubUrl && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/10 rounded-lg font-semibold hover:bg-white/20 transition-colors"
    >
      <Github className="w-5 h-5" />
      View on GitHub
    </a>
  )}
</div>
            {/* Key Features */}
            <div className="bg-white/[0.04] rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl mb-4 text-[#2EF2D1] font-bold">
                Key Features
              </h3>

              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-white/90">
                    <CheckCircle2 className="text-[#2EF2D1] w-5 h-5 mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture */}
            {project.architecture && (
              <div className="bg-white/[0.04] rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl mb-4 text-[#7C5CFF] font-bold">
                  Architecture
                </h3>

                <ul className="space-y-2 text-white/90">
                  {project.architecture.map((a, i) => (
                    <li key={i}>• {a}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}