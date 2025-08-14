import { Terminal, Github, Linkedin, Mail, MapPin, Phone, Rocket, Code, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../assets/ITSA_logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-purple-500/20 text-white font-sans relative overflow-hidden">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_400px_at_50%_100px,#7c3aed33,transparent)]"></div>
          
          {/* Code-like pattern background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            {[...Array(10)].map((_, i) => (
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
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="ITSA Logo" className="h-8 w-8 rounded-full" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">ITSA</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering the next generation of tech innovators through innovation, learning, and community.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:contact@itsa.edu" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-300">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-purple-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-purple-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-purple-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                  Team
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-purple-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/join" className="hover:text-purple-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                  Join Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-300">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/30">
                  <Mail className="h-4 w-4 text-purple-400" />
                </div>
                <span>contact@itsa.edu</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/30">
                  <Phone className="h-4 w-4 text-purple-400" />
                </div>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/30 mt-1">
                  <MapPin className="h-4 w-4 text-purple-400" />
                </div>
                <span>IT Department, SGGSIE&T, Vishnupuri, Nanded</span>
              </li>
            </ul>
          </div>

          {/* Join Now */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-300">Join ITSA</h3>
            <p className="text-gray-400 text-sm mb-4">
              Become a part of our growing community of tech enthusiasts and innovators.
            </p>
            <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2">
              <Rocket size={18} />
              Join ITSA Today
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-purple-500/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Information Technology Student Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}