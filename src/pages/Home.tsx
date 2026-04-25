import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { CheckCircle2, PlayCircle, BookOpen, BrainCircuit, Users, Target, ArrowRight, Download, Timer } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 🟢 HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-6 border border-brand-100"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse"></span>
            New Batch Starts in 3 Days
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-slate-900 tracking-tight mb-8"
          >
            Master NEET & JEE Physics <br className="hidden md:block"/>
            with <span className="text-brand-600">NCERT-Based</span> Smart Learning
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto mb-10"
          >
            Score 90+ effortlessly. Daily MCQs, Video Solutions, and a Rank-Oriented Strategy designed for students struggling with numericals.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/ai-generator">
              <Button size="lg" className="w-full sm:w-auto group">
                Start Free Practice
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <PlayCircle className="mr-2 w-5 h-5 text-brand-600" />
              Join Free Demo Class
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 flex items-center justify-center gap-4 text-sm text-slate-500 font-medium"
          >
            <div className="flex -space-x-2">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=Arjun&background=random" alt="" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=Priya&background=random" alt="" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=Rahul&background=random" alt="" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=Neha&background=random" alt="" />
            </div>
            <span>Joined by 5,000+ students this month</span>
          </motion.div>
        </div>
      </section>

      {/* ✅ PROBLEM & SOLUTION SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Struggling with Physics Numericals?</h2>
                <p className="text-lg text-slate-600">
                  Most students fail because they memorize formulas instead of understanding concepts. We break down the hardest problems into simple, logical steps.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Not understanding core concepts clearly?",
                  "Solving taking too much time?",
                  "Confused by twisted NEET/JEE language?",
                  "Forgetting formulas during exams?"
                ].map((problem, i) => (
                  <li key={i} className="flex items-start">
                     <span className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm mr-3 mt-0.5">X</span>
                     <span className="text-slate-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative shadow-sm">
              <div className="absolute -top-4 -right-4 bg-brand-600 text-white font-bold px-4 py-1 rounded-full shadow-lg transform rotate-3">
                Our Method
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">The Zero-to-Rank Framework</h3>
              <div className="space-y-6">
                {[
                  { title: "Concept Mastery", desc: "Interactive visualization of core NCERT topics.", bg: "bg-blue-100", text: "text-blue-700", icon: BookOpen },
                  { title: "Daily AI MCQs", desc: "AI-generated questions matched to your exact weak areas.", bg: "bg-purple-100", text: "text-purple-700", icon: BrainCircuit },
                  { title: "PYQ Pattern Analysis", desc: "Learn the exact tricks used by examiners.", bg: "bg-orange-100", text: "text-orange-700", icon: Target },
                ].map((method, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md">
                    <div className={`p-3 rounded-lg ${method.bg} ${method.text}`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{method.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{method.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟣 LEAD MAGNET SECTION */}
      <section id="lead-magnet" className="py-24 bg-brand-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-800 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-700 opacity-50 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Get the Ultimate Physics Formula Sheet (Free)</h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
            Everything you need for quick revision. NCERT derived formulas, cheat codes, and common traps to avoid.
          </p>
          
          <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500" 
              required 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500" 
              required 
            />
            <input 
              type="tel" 
              placeholder="WhatsApp Number" 
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500" 
              required 
            />
            <Button size="lg" variant="accent" className="w-full text-lg shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <Download className="mr-2 w-5 h-5" />
              Download Free PDF Now
            </Button>
            <p className="text-xs text-brand-300 mt-4">No spam. Unsubscribe anytime.</p>
          </form>
        </div>
      </section>

      {/* ✅ SOCIAL PROOF / TESTIMONIALS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900">Proven Results</h2>
            <p className="mt-4 text-lg text-slate-600">From struggling to passing, to topping the class.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "I used to hate Physics. The daily MCQs and detailed video solutions changed everything. I scored 160+ in NEET Physics!",
                author: "Ankith Sharma",
                exam: "NEET 2023",
                score: "680/720",
                improvement: "+45 marks in Physics"
              },
              {
                text: "The NCERT focus is exactly what's needed. Instead of solving 1000 random questions, I learned to solve 100 high-yield ones correctly.",
                author: "Sneha Reddy",
                exam: "JEE Mains 2024",
                score: "99.2 %ile",
                improvement: "Physics: 99.8 %ile"
              },
              {
                text: "The mentorship program kept me accountable. Whenever I had a doubt, it was cleared the same day. Highly recommended!",
                author: "Mohammed Tariq",
                exam: "Class 12 CBSE",
                score: "95%",
                improvement: "Physics: 98/100"
              }
            ].map((testimonial, i) => (
               <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative pt-12">
                 <div className="absolute top-0 transform -translate-y-1/2 left-8 bg-brand-100 text-brand-700 px-3 py-1 font-bold rounded-full text-sm">
                   {testimonial.improvement}
                 </div>
                 <div className="flex text-accent-500 mb-4">
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                   ))}
                 </div>
                 <p className="text-slate-700 italic mb-6">"{testimonial.text}"</p>
                 <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                   <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                     {testimonial.author.charAt(0)}
                   </div>
                   <div>
                     <p className="font-bold text-slate-900">{testimonial.author}</p>
                     <p className="text-xs text-slate-500">{testimonial.exam} • {testimonial.score}</p>
                   </div>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⏳ URGENCY CTA SECTION */}
      <section className="py-16 bg-brand-50 border-t border-brand-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Enrollment for Target Batch Closing Soon</h2>
          
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-brand-100 text-brand-700 font-mono text-3xl font-bold flex items-center gap-3">
              <Timer className="w-8 h-8 text-brand-500" />
              {formatTime(timeLeft)}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <div className="text-slate-600 font-medium bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm text-sm">
                🔥 Only <span className="text-red-500 font-bold">14</span> seats left
             </div>
             <Link to="/courses">
               <Button size="lg" variant="primary" className="px-8 shadow-md">
                 Claim Your Spot Now
               </Button>
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
