import { Link } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'AI Question Generator', path: '/ai-generator' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0A0B]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-[#3E63DD] rounded-full flex items-center justify-center text-sm font-black text-white">
                Φ
              </div>
              <span className="font-black text-2xl tracking-tighter text-white uppercase">
                PhysicsCore
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "uppercase tracking-widest text-sm font-medium transition-colors",
                  "text-white/60 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button className="ml-8 border border-white/20 px-6 py-2 text-xs font-bold uppercase text-white hover:bg-white hover:text-black transition-colors rounded-none">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-none text-white/60 hover:text-white hover:bg-white/5 focus:outline-none focus:bg-white/5 focus:text-white transition-colors"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0A0A0B] border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm font-medium uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <button className="w-full border border-white/20 px-6 py-3 text-xs font-bold uppercase text-white hover:bg-white hover:text-black transition-colors rounded-none">
                  Login
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
