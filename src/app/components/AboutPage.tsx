import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { profile } from "../data/profile";
import { ArrowLeft, Mail, MapPin, Phone, User, GraduationCap } from "lucide-react";

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#0D0E11]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span style={{ fontWeight: 600 }}>Back to Home</span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-12">
          <User className="w-10 h-10 text-[#2EF2D1]" />
          <h1 className="text-5xl" style={{ fontWeight: 700 }}>
            About Me
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-8"
        >
          {/* Main Bio */}
          <div className="bg-white/[0.04] rounded-2xl p-8 border border-white/10">
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {profile.summary}
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl text-[#2EF2D1] mb-4" style={{ fontWeight: 600 }}>
                What I Do
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                I specialize in building scalable web applications with a focus on Python/Django and RESTful architectures.
                My expertise spans full-stack development, from crafting intuitive user interfaces with React to designing
                robust backend systems with Django REST Framework and Node.js.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                I'm particularly passionate about backend optimization, system architecture, and API design.
                Whether it's optimizing database queries, implementing secure authentication systems, or building
                high-performance RESTful APIs, I focus on creating efficient, scalable solutions.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                My approach combines technical excellence with practical problem-solving, ensuring that the applications
                I build are not only performant but also maintainable and deliver exceptional user experiences. I'm
                committed to writing clean code and following best practices in data structures and efficient coding.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/[0.04] rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl mb-6" style={{ fontWeight: 600 }}>
              Contact Info
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-lg">
                <Mail className="w-6 h-6 text-[#2EF2D1]" />
                <a href={`mailto:${profile.email}`} className="text-white/80 hover:text-[#2EF2D1] transition-colors">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <Phone className="w-6 h-6 text-[#2EF2D1]" />
                <span className="text-white/80">{profile.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <MapPin className="w-6 h-6 text-[#2EF2D1]" />
                <span className="text-white/80">{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="pt-4">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-[#2EF2D1]" />
              <h2 className="text-3xl" style={{ fontWeight: 700 }}>
                Education
              </h2>
            </div>

            <div className="space-y-6">
              {profile.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white/[0.04] rounded-2xl p-8 border border-white/10 hover:border-[#2EF2D1]/30 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl mb-2" style={{ fontWeight: 600 }}>
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-[#2EF2D1] mb-1">{edu.institution}</p>
                      <p className="text-white/60">{edu.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="px-4 py-2 bg-[#2EF2D1]/20 text-[#2EF2D1] rounded-lg border border-[#2EF2D1]/30">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {edu.details && (
                    <ul className="space-y-3">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/80 text-lg">
                          <div className="w-2 h-2 bg-[#2EF2D1] rounded-full mt-2.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="bg-white/[0.04] rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl mb-6" style={{ fontWeight: 600 }}>
              Interests & Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Backend Optimization",
                "RESTful API Design",
                "System Architecture",
                "Database Optimization",
                "Performance Engineering"
              ].map((interest) => (
                <div
                  key={interest}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="w-2 h-2 bg-[#2EF2D1] rounded-full" />
                  <span className="text-white/80">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}