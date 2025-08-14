import { useState } from 'react';
import {
  Terminal,
  Shield,
  Users,
  Rocket,
  Code2,
  Brain,
  Laptop,
  Globe,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  GraduationCap
} from 'lucide-react';

export default function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    year: '',
    interests: [],
    experience: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestToggle = (interest) => {
    setSelectedInterests(prev => 
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
    setFormData(prev => ({
      ...prev,
      interests: selectedInterests
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, interests: selectedInterests });
  };

  const interests = [
    { name: 'Web Development', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI/ML', icon: <Brain className="w-4 h-4" /> },
    { name: 'Cloud Computing', icon: <Globe className="w-4 h-4" /> },
    { name: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'Mobile Development', icon: <Laptop className="w-4 h-4" /> },
    { name: 'DevOps', icon: <Code2 className="w-4 h-4" /> },
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
            <span className="text-cyan-400 text-sm font-medium">Join Our Community</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Become a Member of ITSA
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join our thriving community of tech enthusiasts and unlock a world of opportunities 
            for learning, growth, and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  Member Benefits
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Terminal className="w-6 h-6" />,
                      title: "Technical Workshops",
                      description: "Access exclusive workshops and hands-on learning sessions",
                      color: "cyan"
                    },
                    {
                      icon: <GraduationCap className="w-6 h-6" />,
                      title: "Certification Programs",
                      description: "Earn certificates through specialized training programs",
                      color: "purple"
                    },
                    {
                      icon: <Users className="w-6 h-6" />,
                      title: "Networking Events",
                      description: "Connect with industry professionals and peers",
                      color: "pink"
                    },
                    {
                      icon: <Rocket className="w-6 h-6" />,
                      title: "Career Growth",
                      description: "Access job opportunities and career guidance",
                      color: "blue"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 group/benefit">
                      <div className={`p-3 rounded-xl bg-${benefit.color}-500/10 group-hover/benefit:bg-${benefit.color}-500/20 transition-colors`}>
                        <div className={`text-${benefit.color}-400`}>{benefit.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 text-white group-hover/benefit:text-cyan-400 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-400">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Registration Form */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                Registration Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {/* Personal Information */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      placeholder="e.g. Tanmay Raut"
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      placeholder="e.g. 2022bit058@sggs.ac.in"
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="studentId" className="block text-sm font-medium text-gray-300 mb-1">
                      Registration Number
                    </label>
                    <input
                      type="text"
                      id="studentId"
                      name="studentId"
                      value={formData.studentId}
                      placeholder="e.g. 2022BIT058"
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-1">
                      Year of Study
                    </label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                      required
                    >
                      <option value="">Select Year</option>
                      <option value="1">First Year</option>
                      <option value="2">Second Year</option>
                      <option value="3">Third Year</option>
                      <option value="4">Fourth Year</option>
                    </select>
                  </div>

                  {/* Areas of Interest */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Areas of Interest
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {interests.map((interest, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleInterestToggle(interest.name)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                            selectedInterests.includes(interest.name)
                              ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                              : 'border-gray-700 text-gray-400 hover:border-gray-600'
                          } transition-colors`}
                        >
                          {interest.icon}
                          <span className="text-sm">{interest.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-1">
                      Technical Experience
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 flex items-center justify-center group"
                >
                  Submit Application
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-gray-400">Hear from our community members about their experience with ITSA</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "ITSA helped me land my dream job at a top tech company. The workshops and networking events were invaluable.",
                author: "Ganesh Mane",
                role: "Head",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              },
              {
                quote: "The mentorship program and technical workshops gave me the confidence to pursue my startup journey.",
                author: "Om gore",
                role: "Tech Entrepreneur",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
              },
              {
                quote: "Being part of ITSA opened up numerous opportunities for professional growth and learning.",
                author: "Pushkar Chauhan",
                role: "Product Manager",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}