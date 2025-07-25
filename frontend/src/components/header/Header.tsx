import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold">Restaurant Dishcovery</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-red-300 transition">Home</Link>
          <Link to="/explore" className="hover:text-red-300 transition">Explore</Link>
          <Link to="/saved" className="hover:text-red-300 transition">Saved</Link>
        </nav>

        {/* Login Button (hidden in small screen) */}
        <Link to="/login" className="hidden md:block">
          <button className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition">
            Login
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 font-medium text-white bg-white/10">
          <Link to="/" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/explore" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>Explore</Link>
          <Link to="/saved" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>Saved</Link>
          <Link to="/login" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>Login</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
