import { Terminal, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-green-500/20 text-green-500 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Terminal className="h-6 w-6" />
              <span className="text-xl font-bold">ITSA</span>
            </div>
            <p className="text-green-400/80 text-sm">
              Empowering future tech leaders through innovation, learning, and community.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-green-500 hover:text-green-400">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-green-500 hover:text-green-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-green-400/80">
              <li>
                <Link to="/" className="hover:text-green-400">Home</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-green-400">Events</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-green-400">Team</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-green-400">Resources</Link>
              </li>
              <li>
                <Link to="/join" className="hover:text-green-400">Join Now</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-green-400/80">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@itsa.edu</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-8 w-8" />
                <span>IT Department, SGGSIE&T, Vishnupuri, Nanded</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Join Now</h3>
            <p className="text-green-400/80 text-sm mb-4">
            Become a part of our growing community of tech enthusiasts.
            </p>
            <form className="space-y-2">
              {/* <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-black border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-green-500 text-sm"
              /> */}
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-colors text-sm"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-500/20 text-center text-green-400/60 text-sm">
          <p>&copy; {new Date().getFullYear()} ITSA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
