import { 
  Github, 
  Linkedin, 
  Instagram, 
  Code, 
  Palette, 
  Trophy, 
  Calculator, 
  Megaphone,
  Users,
  Rocket,
  Sparkles,
  ArrowRight,
  Brain,
  Camera,
  Mic,
  GraduationCap
} from 'lucide-react';
import leadsData from '../data/leadsData';
import technicalData from '../data/technicalData';
import culturalData from '../data/culturalData';
import sportsData from '../data/sportsData';
import financeData from '../data/financeData';
import aluminiData from '../data/aluminiData';
import anchorData from '../data/anchorData';
import mediaData from '../data/mediaData';

// Function to format the committee data
const formatCommitteeData = (title, icon, data, color) => {
  return {
    name: title,
    icon: icon,
    color: color,
    members: data.map(member => ({
      name: member.name,
      role: member.designation,
      image: member.imageUrl,
      github: member.github || null,
      linkedin: member.linkedin || null,
      instagram: member.instagram || null
    }))
  };
};

export default function Team() {
  // Create committees array using imported data with color schemes
  const committees = [
    formatCommitteeData('Leadership Team', <Users className="w-6 h-6" />, leadsData, 'cyan'),
    formatCommitteeData('Technical Committee', <Code className="w-6 h-6" />, technicalData, 'purple'),
    formatCommitteeData('Cultural Committee', <Palette className="w-6 h-6" />, culturalData, 'pink'),
    formatCommitteeData('Sports Committee', <Trophy className="w-6 h-6" />, sportsData, 'emerald'),
    formatCommitteeData('Alumni Network', <GraduationCap className="w-6 h-6" />, aluminiData, 'blue'),
    formatCommitteeData('Finance Committee', <Calculator className="w-6 h-6" />, financeData, 'amber'),
    formatCommitteeData('Media Team', <Camera className="w-6 h-6" />, mediaData, 'rose'),
    formatCommitteeData('Anchor Committee', <Mic className="w-6 h-6" />, anchorData, 'indigo'),
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#3b82f633,transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_800px,#6366f133,transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Meet Our Team</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            The Minds Behind ITSA
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Meet our dedicated team of innovators and leaders who work tirelessly to make
            ITSA a hub of technological excellence and community growth.
          </p>
        </div>

        {/* Committee Sections */}
        <div className="space-y-20">
          {committees.map((committee) => (
            <div key={committee.name} className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-3 rounded-xl bg-${committee.color}-500/10`}>
                  <div className={`text-${committee.color}-400`}>{committee.icon}</div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{committee.name}</h2>
                  <p className="text-gray-400">Driving excellence in {committee.name.toLowerCase()}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {committee.members.map((member, index) => (
                  <div
                    key={`${member.name}-${index}`}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r from-${committee.color}-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`}></div>
                    <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300">
                      <div className="relative mb-6">
                        <div className="aspect-square overflow-hidden rounded-xl">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        {/* Social Links */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          {member.github && (
                            <a
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`p-2 rounded-full bg-gray-900/90 text-${committee.color}-400 hover:text-${committee.color}-300 transition-colors`}
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          )}
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`p-2 rounded-full bg-gray-900/90 text-${committee.color}-400 hover:text-${committee.color}-300 transition-colors`}
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                          {member.instagram && (
                            <a
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`p-2 rounded-full bg-gray-900/90 text-${committee.color}-400 hover:text-${committee.color}-300 transition-colors`}
                            >
                              <Instagram className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-1 text-white group-hover:text-cyan-400 transition-colors">
                          {member.name}
                        </h3>
                        <p className={`text-${committee.color}-400 text-sm`}>{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Join Section */}
        <div className="mt-24 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50 text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">Join Our Team</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Become Part of Something Great
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              We're always looking for passionate individuals to join our team. If you're
              excited about technology and want to make a difference, we'd love to hear from you.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 flex items-center mx-auto group/button">
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover/button:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}