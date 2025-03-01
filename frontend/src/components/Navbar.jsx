import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-black/90 backdrop-blur-sm fixed w-full z-40 border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-green-500" />
            <span className="text-green-500 font-mono text-xl font-bold">ITSA</span>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <NavLink to="/" isActive={location.pathname === "/"}>Home</NavLink>
              <NavLink to="/events" isActive={location.pathname === "/events"}>Events</NavLink>
              <NavLink to="/team" isActive={location.pathname === "/team"}>Team</NavLink>
              <NavLink to="/resources" isActive={location.pathname === "/resources"}>Resources</NavLink>
              <NavLink to="/join" isActive={location.pathname === "/join"}>Join Now</NavLink>
              <NavLink to="/contact" isActive={location.pathname === "/contact"}>Contact</NavLink>
            </div>
          </div>

          <button className="md:hidden text-green-500" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)} isActive={location.pathname === "/"}>Home</MobileNavLink>
            <MobileNavLink to="/events" onClick={() => setIsOpen(false)} isActive={location.pathname === "/events"}>Events</MobileNavLink>
            <MobileNavLink to="/team" onClick={() => setIsOpen(false)} isActive={location.pathname === "/team"}>Team</MobileNavLink>
            <MobileNavLink to="/resources" onClick={() => setIsOpen(false)} isActive={location.pathname === "/resources"}>Resources</MobileNavLink>
            <MobileNavLink to="/join" onClick={() => setIsOpen(false)} isActive={location.pathname === "/join"}>Join Now</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)} isActive={location.pathname === "/contact"}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, children, isActive }) {
  return (
    <Link to={to} className={`text-green-500 px-3 py-2 rounded-md text-sm font-medium font-mono transition-colors relative ${isActive ? 'text-green-400 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-500 after:rounded-full' : 'hover:text-green-400'}`}>
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick, isActive }) {
  return (
    <Link to={to} className={`block px-3 py-2 rounded-md text-base font-medium font-mono relative ${isActive ? 'text-green-400 bg-green-500/10' : 'text-green-500 hover:text-green-400'}`} onClick={onClick}>
      {children}
    </Link>
  );
}
