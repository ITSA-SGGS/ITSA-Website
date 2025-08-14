import React from "react";
import {
  Terminal,
  Target,
  Brain,
  Lightbulb,
  Network,
  GraduationCap,
  Code,
  Users,
  BookOpen,
  Award,
  ChevronDown,
  // Calender,
  Cpu,
  Database,
  Globe,
  Shield,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/ITSA_logo.jpeg";

function VisionMission() {
  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {/* Code-like pattern background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-purple-500/20 font-mono text-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: "rotate(-30deg)",
                }}
              >
                {"{code}"}
              </div>
            ))}
          </div>
          {/* Gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[128px]"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Vision */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent rounded-3xl transform transition-transform duration-700 group-hover:scale-105"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/10 h-full transform transition-transform duration-500 hover:translate-y-[-4px]">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400">
                  <Target size={32} />
                </div>
                <div>
                  <div className="text-sm text-purple-400 font-medium mb-1">
                    Our Vision
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                    Shaping Tomorrow's Tech
                  </h2>
                </div>
              </div>

              {/* Main Content */}
              <p className="text-gray-300 leading-relaxed mb-8">
                Creating a vibrant community of innovative IT professionals who
                lead the technological revolution through collaboration,
                continuous learning, and creative problem-solving.
              </p>

              {/* Vision Points */}
              <div className="space-y-6">
                {[
                  {
                    icon: <Brain size={20} />,
                    title: "Foster Innovation",
                    desc: "Cultivating groundbreaking ideas and solutions",
                  },
                  {
                    icon: <Lightbulb size={20} />,
                    title: "Build Tech Leaders",
                    desc: "Developing the next generation of IT pioneers",
                  },
                  {
                    icon: <Network size={20} />,
                    title: "Drive Transformation",
                    desc: "Leading the digital revolution forward",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 group/item">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover/item:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-300 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Mission */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-3xl transform transition-transform duration-700 group-hover:scale-105"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/10 h-full transform transition-transform duration-500 hover:translate-y-[-4px]">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Rocket size={32} />
                </div>
                <div>
                  <div className="text-sm text-blue-400 font-medium mb-1">
                    Our Mission
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                    Empowering Through Tech
                  </h2>
                </div>
              </div>

              {/* Main Content */}
              <p className="text-gray-300 leading-relaxed mb-8">
                Providing students with transformative opportunities for
                technical growth, professional development, and industry
                networking through immersive learning experiences.
              </p>

              {/* Mission Points */}
              <div className="space-y-6">
                {[
                  {
                    icon: <Code size={20} />,
                    title: "Technical Excellence",
                    desc: "Hands-on workshops and practical training",
                  },
                  {
                    icon: <Users size={20} />,
                    title: "Industry Connect",
                    desc: "Building bridges with tech leaders",
                  },
                  {
                    icon: <GraduationCap size={20} />,
                    title: "Skill Development",
                    desc: "Comprehensive learning programs",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 group/item">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover/item:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-300 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
