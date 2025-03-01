import { useState } from 'react';
import { Terminal, Shield, Users, Rocket } from 'lucide-react';

export default function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    year: '',
    interests: '',
    experience: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono pt-20">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#00ff0010,transparent)]"></div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join ITSA</h1>
          <p className="text-green-400 max-w-2xl mx-auto">
            Become a part of our growing community of tech enthusiasts and unlock
            exciting opportunities for learning and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Member Benefits</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Technical Workshops</h3>
                  <p className="text-green-400">
                    Access to exclusive workshops and hands-on learning sessions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Certification Programs</h3>
                  <p className="text-green-400">
                    Earn certificates through our specialized training programs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Networking</h3>
                  <p className="text-green-400">
                    Connect with industry professionals and like-minded peers.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Career Growth</h3>
                  <p className="text-green-400">
                    Access to job opportunities and career guidance sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="border border-green-500/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium mb-1">
                    Student ID
                  </label>
                  <input
                    type="text"
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="year" className="block text-sm font-medium mb-1">
                    Year of Study
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-green-500"
                    required
                  >
                    <option value="">Select Year</option>
                    <option value="1">First Year</option>
                    <option value="2">Second Year</option>
                    <option value="3">Third Year</option>
                    <option value="4">Fourth Year</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="interests" className="block text-sm font-medium mb-1">
                    Areas of Interest
                  </label>
                  <input
                    type="text"
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    placeholder="e.g., Web Development, AI, Cybersecurity"
                    className="w-full px-4 py-2 bg-black border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium mb-1">
                    Technical Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 bg-black border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-green-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
