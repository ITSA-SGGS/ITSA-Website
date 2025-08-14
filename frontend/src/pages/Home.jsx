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
import VisionMission from "../components/VisionMission";

function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans relative">
      {/* Hero Section */}

      <div
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30">
            <Terminal className="inline-block mr-2" size={20} />
            <span className="text-purple-300">Welcome to ITSA</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text animate-fade-in">
            Information Technology Student Association
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Empowering the next generation of tech innovators
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2">
              <Rocket size={20} />
              Join ITSA Today
            </button>
            <button className="border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-500/20 transition-all flex items-center gap-2">
              {/* <Calendar size={20} /> */}
              View Events
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/80" />
        </div>

        {/* Tech Pattern Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_400px_at_50%_300px,#7c3aed33,transparent)]"></div>
          </div>
        </div>
      </div>
      
      {/* Mission & Vision */}
      <VisionMission />

      {/* What We Do Section */}
      <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
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
          {/* Section Header */}
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30">
              <Zap className="inline-block mr-2 text-purple-400" size={20} />
              <span className="text-purple-300">What We Do</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
              Building the Future of Tech Together
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join our community of innovators and tech enthusiasts to learn,
              grow, and create amazing things together
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code size={28} />,
                // bgIcon: <Terminal size={120} />,
                title: "Coding Workshops",
                description:
                  "Master modern technologies through hands-on workshops led by industry experts",
                tech: ["React", "Node.js", "Python"],
                gradient: "from-purple-500/20 via-indigo-500/20 to-blue-500/20",
                iconColor: "text-purple-400",
              },
              {
                icon: <Database size={28} />,
                // bgIcon: <Cloud size={120} />,
                title: "Hackathons",
                description:
                  "Build innovative solutions and compete for exciting prizes in our coding challenges",
                tech: ["AI/ML", "Cloud", "DevOps"],
                gradient: "from-blue-500/20 via-cyan-500/20 to-purple-500/20",
                iconColor: "text-blue-400",
              },
              {
                icon: <Users size={28} />,
                // bgIcon: <Globe size={120} />,
                title: "Networking",
                description:
                  "Connect with industry leaders and build relationships that last beyond college",
                tech: ["Events", "Mentorship", "Career"],
                gradient: "from-cyan-500/20 via-purple-500/20 to-blue-500/20",
                iconColor: "text-cyan-400",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 hover:bg-gray-800/80 transition-all duration-500 overflow-hidden"
              >
                {/* Background Icon */}
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.05] transform group-hover:scale-110 transition-all duration-700">
                  {feature.bgIcon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <div className={`${feature.iconColor}`}>{feature.icon}</div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {feature.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm bg-gray-700/50 text-gray-300 border border-gray-600/50 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Border Gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-purple-500/50 opacity-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
