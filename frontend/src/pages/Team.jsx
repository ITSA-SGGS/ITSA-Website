import { Github, Linkedin, Instagram, Code, Palette, Trophy, Calculator, Megaphone } from 'lucide-react';
import leadsData from '../data/leadsData';
import technicalData from '../data/technicalData';
import culturalData from '../data/culturalData';
import sportsData from '../data/sportsData';
import financeData from '../data/financeData';
import aluminiData from '../data/aluminiData'
import anchorData from '../data/anchorData'
import mediaData from '../data/mediaData'

// Function to format the committee data
const formatCommitteeData = (title, icon, data) => {
  return {
    name: title,
    icon: icon,
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
  // Create committees array using imported data
  const committees = [
    formatCommitteeData('Leadership', <Code className="w-6 h-6" />, leadsData),
    formatCommitteeData('Technical Committee', <Code className="w-6 h-6" />, technicalData),
    formatCommitteeData('Cultural Committee', <Palette className="w-6 h-6" />, culturalData),
    formatCommitteeData('Sports Committee', <Trophy className="w-6 h-6" />, sportsData),
    formatCommitteeData('Alumini Committee', <Calculator className="w-6 h-6" />, aluminiData),
    formatCommitteeData('Finance Committee', <Calculator className="w-6 h-6" />, financeData),
    formatCommitteeData('Media Committee', <Calculator className="w-6 h-6" />, mediaData),
    formatCommitteeData('Anchor Committee', <Calculator className="w-6 h-6" />, anchorData),
    // formatCommitteeData('Public Relations', <Megaphone className="w-6 h-6" />, prData),
  ];

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#00ff0010,transparent)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-green-400 max-w-2xl mx-auto">
            $ echo "Meet the dedicated individuals who work tirelessly to make ITSA a hub of
            technological innovation and learning."
          </p>
        </div>

        <div className="space-y-16">
          {committees.map((committee) => (
            <div key={committee.name} className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  {committee.icon}
                </div>
                <h2 className="text-2xl font-bold">{committee.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {committee.members.map((member, index) => (
                  <div
                    key={`${member.name}-${index}`}
                    className="border border-green-500/20 rounded-lg p-6 hover:border-green-500 transition-all transform hover:-translate-y-1"
                  >
                    <div className="relative mb-4">
                      <div className="aspect-square overflow-hidden rounded-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all"
                        />
                      </div>
                      <div className="absolute bottom-2 right-2 flex space-x-2">
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/80 p-2 rounded-full text-green-500 hover:text-green-400 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/80 p-2 rounded-full text-green-500 hover:text-green-400 transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.instagram && (
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/80 p-2 rounded-full text-green-500 hover:text-green-400 transition-colors"
                          >
                            <Instagram className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">$ whoami<br /><span className="text-green-300">{member.name}</span></h3>
                    <p className="text-green-400">$ role --display<br /><span className="text-green-300">{member.role}</span></p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-green-400 max-w-2xl mx-auto mb-6">
            Interested in becoming a part of ITSA leadership? We're always looking
            for passionate individuals to join our team.
          </p>
          <button className="px-6 py-2 border-2 border-green-500 hover:bg-green-500 hover:text-black transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}