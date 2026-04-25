import { Link } from 'react-router-dom';
import { BookOpen, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex flex-shrink-0 items-center gap-2">
              <div className="w-8 h-8 bg-[#3E63DD] rounded-full flex items-center justify-center text-sm font-black text-white">
                Φ
              </div>
              <span className="font-black text-2xl tracking-tighter text-white uppercase">
                PhysicsCore
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Making Physics simple for Class 11/12, NEET, and JEE aspirants. 
              From Zero to Rank with daily practice and expert mentorship.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <span className="sr-only">WhatsApp Group</span>
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-bold text-white/50 tracking-widest uppercase">
                  Courses
                </h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/courses" className="text-sm font-medium text-white/60 hover:text-white uppercase tracking-widest">Class 11 Physics</Link></li>
                  <li><Link to="/courses" className="text-sm font-medium text-white/60 hover:text-white uppercase tracking-widest">Class 12 Physics</Link></li>
                  <li><Link to="/courses" className="text-sm font-medium text-white/60 hover:text-white uppercase tracking-widest">NEET Crash Course</Link></li>
                  <li><Link to="/courses" className="text-sm font-medium text-white/60 hover:text-white uppercase tracking-widest">JEE Problem Solving</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-xs font-bold text-white/50 tracking-widest uppercase">
                  Free Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/ai-generator" className="text-sm font-medium text-white/60 hover:text-white uppercase tracking-widest">Daily MCQs</Link></li>
                  <li><a href="#lead-magnet" className="text-sm font-medium text-white/60 hover:text-white uppercase tracking-widest">Formula Sheets</a></li>
                  <li><a href="#lead-magnet" className="text-sm font-medium text-white/60 hover:text-white uppercase tracking-widest">NCERT Notes</a></li>
                  <li><a href="#lead-magnet" className="text-sm font-medium text-white/60 hover:text-white uppercase tracking-widest">Mock Tests</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-bold text-white/50 tracking-widest uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-sm font-medium text-white/60 hover:text-white uppercase tracking-widest">About Us</a></li>
                  <li><a href="#" className="text-sm font-medium text-white/60 hover:text-white uppercase tracking-widest">Contact</a></li>
                  <li><a href="#" className="text-sm font-medium text-white/60 hover:text-white uppercase tracking-widest">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-widest text-white/40 xl:text-center font-bold">
            &copy; {new Date().getFullYear()} PhysicsCore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
