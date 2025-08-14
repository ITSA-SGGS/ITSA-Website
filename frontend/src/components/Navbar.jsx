import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Terminal, Menu, X, ChevronRight } from "lucide-react";
import logo from "../assets/ITSA_logo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur group-hover:blur-md transition-all duration-300"></div>
              <div className="relative bg-gray-900 p-1 rounded-full border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300">
                <img
                  src={logo}
                  alt="ITSA Logo"
                  className="size-14 rounded-full"
                />
              </div>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              ITSA
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <NavLink to="/" isActive={location.pathname === "/"}>
                Home
              </NavLink>
              <NavLink to="/events" isActive={location.pathname === "/events"}>
                Events
              </NavLink>
              <NavLink to="/team" isActive={location.pathname === "/team"}>
                Team
              </NavLink>
              <NavLink
                to="/resources"
                isActive={location.pathname === "/resources"}
              >
                Resources
              </NavLink>
              <NavLink
                to="/contact"
                isActive={location.pathname === "/contact"}
              >
                Contact
              </NavLink>
              <Link
                to="/join"
                className="ml-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 flex items-center group"
              >
                Join Now
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          <button
            className="md:hidden relative group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative p-2 rounded-lg border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300">
              {isOpen ? (
                <X className="h-5 w-5 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
              ) : (
                <Menu className="h-5 w-5 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
        md:hidden fixed inset-0 top-[57px] bg-gray-900/95 backdrop-blur-md transform transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      `}
      >
        <div className="p-4 space-y-2">
          <MobileNavLink
            to="/"
            onClick={() => setIsOpen(false)}
            isActive={location.pathname === "/"}
          >
            Home
          </MobileNavLink>
          <MobileNavLink
            to="/events"
            onClick={() => setIsOpen(false)}
            isActive={location.pathname === "/events"}
          >
            Events
          </MobileNavLink>
          <MobileNavLink
            to="/team"
            onClick={() => setIsOpen(false)}
            isActive={location.pathname === "/team"}
          >
            Team
          </MobileNavLink>
          <MobileNavLink
            to="/resources"
            onClick={() => setIsOpen(false)}
            isActive={location.pathname === "/resources"}
          >
            Resources
          </MobileNavLink>
          <MobileNavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            isActive={location.pathname === "/contact"}
          >
            Contact
          </MobileNavLink>
          <Link
            to="/join"
            onClick={() => setIsOpen(false)}
            className="block w-full mt-4 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium text-center hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, isActive }) {
  return (
    <Link
      to={to}
      className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
    >
      <div
        className={`
        absolute inset-0 rounded-lg transition-all duration-300
        ${
          isActive
            ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
            : "hover:bg-white/5"
        }
      `}
      ></div>
      <span
        className={`
        relative z-10 transition-colors duration-300
        ${
          isActive
            ? "bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text"
            : "text-gray-300 group-hover:text-white"
        }
      `}
      >
        {children}
      </span>
    </Link>
  );
}

function MobileNavLink({ to, children, onClick, isActive }) {
  return (
    <Link
      to={to}
      className={`
        block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300
        ${
          isActive
            ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400"
            : "text-gray-300 hover:bg-white/5 hover:text-white"
        }
      `}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
