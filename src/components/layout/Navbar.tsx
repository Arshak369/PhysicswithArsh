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
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="p-2 bg-brand-600 rounded-lg text-white">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl text-slate-900">
                PhysicsMaster
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
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  "text-slate-600 hover:text-brand-600 hover:bg-brand-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button className="ml-4 px-4 py-2 rounded-lg bg-brand-600 text-white font-medium text-sm hover:bg-brand-700 transition-colors shadow-sm">
              Free Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:bg-slate-100 focus:text-slate-500 transition-colors"
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
            className="md:hidden overflow-hidden bg-white border-b border-slate-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <button className="w-full px-4 py-3 rounded-lg bg-brand-600 text-white font-medium text-base hover:bg-brand-700 shadow-sm">
                  Free Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
