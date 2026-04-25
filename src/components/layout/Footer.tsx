import { Link } from 'react-router-dom';
import { BookOpen, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 bg-brand-600 rounded-lg text-white">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                PhysicsMaster
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Making Physics simple for Class 11/12, NEET, and JEE aspirants. 
              From Zero to Rank with daily practice and expert mentorship.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-brand-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-500">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-500">
                <span className="sr-only">WhatsApp Group</span>
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">
                  Courses
                </h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/courses" className="text-base text-slate-400 hover:text-white">Class 11 Physics</Link></li>
                  <li><Link to="/courses" className="text-base text-slate-400 hover:text-white">Class 12 Physics</Link></li>
                  <li><Link to="/courses" className="text-base text-slate-400 hover:text-white">NEET Crash Course</Link></li>
                  <li><Link to="/courses" className="text-base text-slate-400 hover:text-white">JEE Problem Solving</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">
                  Free Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/ai-generator" className="text-base text-slate-400 hover:text-white">Daily MCQs</Link></li>
                  <li><a href="#lead-magnet" className="text-base text-slate-400 hover:text-white">Formula Sheets</a></li>
                  <li><a href="#lead-magnet" className="text-base text-slate-400 hover:text-white">NCERT Notes</a></li>
                  <li><a href="#lead-magnet" className="text-base text-slate-400 hover:text-white">Mock Tests</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-slate-400 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-base text-slate-400 hover:text-white">Contact</a></li>
                  <li><a href="#" className="text-base text-slate-400 hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-base text-slate-400 xl:text-center">
            &copy; {new Date().getFullYear()} PhysicsMaster Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
