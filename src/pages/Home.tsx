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
    <div className="flex flex-col min-h-screen bg-[#0A0A0B]">
      
      {/* 🟢 HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-white/10 bg-[#0A0A0B]">
        <div className="absolute inset-0 bg-[#3E63DD] blur-[120px] opacity-10 rounded-full w-2/3 h-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 bg-[#1A1B1E] border border-[#3E63DD]/30 px-3 py-1 rounded-full"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#3E63DD] animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#3E63DD]">New Batch Starts in 3 Days</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-6 uppercase text-white"
          >
            Master <span className="text-[#3E63DD]">PHYSICS.</span><br/>
            CRACK NEET/JEE.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl text-xl text-white/50 mx-auto mb-10 leading-relaxed font-light italic"
          >
            "Physics is easy when you stop memorizing and start visualizing."
            <span className="block not-italic font-bold text-white/80 mt-2">Score 90+ with NCERT-Based Smart Learning.</span>
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
              </Button>
            </Link>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Join Demo Class
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-3xl mx-auto text-white"
          >
            <div>
              <div className="text-2xl font-black">15K+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Aspirants Guided</div>
            </div>
            <div>
              <div className="text-2xl font-black">98%</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Rank Improvement</div>
            </div>
            <div>
              <div className="text-2xl font-black">4.9/5</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Student Rating</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ PROBLEM & SOLUTION SECTION */}
      <section className="py-24 bg-[#111113]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Struggling with Physics Numericals?</h2>
                <p className="text-lg text-white/60">
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
                     <span className="flex-shrink-0 h-6 w-6 rounded-none bg-red-900/30 border border-red-500/30 flex items-center justify-center text-red-500 font-bold text-sm mr-3 mt-0.5">X</span>
                     <span className="text-white/80">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1A1B1E] p-8 border border-white/10 relative">
              <div className="absolute -top-4 -right-4 bg-[#3E63DD] text-white font-black uppercase tracking-widest text-[10px] px-4 py-2 shadow-lg">
                Our Method
              </div>
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">The Zero-to-Rank Framework</h3>
              <div className="space-y-4">
                {[
                  { title: "Concept Mastery", desc: "Interactive visualization of core NCERT topics.", bg: "bg-white/5", text: "text-white/80", icon: BookOpen, border: "border-white/10" },
                  { title: "Daily AI MCQs", desc: "AI-generated questions matched to your exact weak areas.", bg: "bg-[#3E63DD]/10", text: "text-[#3E63DD]", icon: BrainCircuit, border: "border-[#3E63DD]/30" },
                  { title: "PYQ Pattern Analysis", desc: "Learn the exact tricks used by examiners.", bg: "bg-white/5", text: "text-white/80", icon: Target, border: "border-white/10" },
                ].map((method, i) => (
                  <div key={i} className={`flex items-start gap-4 p-4 bg-[#111113] border ${method.border} transition-all`}>
                    <div className={`p-3 ${method.bg} ${method.text}`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white tracking-widest uppercase text-xs mb-1">{method.title}</h4>
                      <p className="text-sm text-white/50 mt-1">{method.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟣 LEAD MAGNET SECTION */}
      <section id="lead-magnet" className="py-24 bg-[#3E63DD] text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#0A0A0B] opacity-20 blur-[100px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Get the Ultimate Physics Formula Sheet (Free)</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            Everything you need for quick revision. NCERT derived formulas, cheat codes, and common traps to avoid.
          </p>
          
          <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-3 rounded-none bg-[#0A0A0B]/20 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" 
              required 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-3 rounded-none bg-[#0A0A0B]/20 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" 
              required 
            />
            <input 
              type="tel" 
              placeholder="WhatsApp Number" 
              className="w-full px-4 py-3 rounded-none bg-[#0A0A0B]/20 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" 
              required 
            />
            <Button size="lg" variant="secondary" className="w-full">
              <Download className="mr-2 w-5 h-5" />
              Download Free PDF Now
            </Button>
            <p className="text-[10px] uppercase tracking-widest text-white/60 mt-4">No spam. Unsubscribe anytime.</p>
          </form>
        </div>
      </section>

      {/* ✅ SOCIAL PROOF / TESTIMONIALS */}
      <section className="py-24 bg-[#0A0A0B] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Proven Results</h2>
            <p className="mt-4 text-lg text-white/60">From struggling to passing, to topping the class.</p>
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
               <div key={i} className="bg-[#111113] p-8 border border-white/10 relative pt-12">
                 <div className="absolute top-0 transform -translate-y-1/2 left-8 bg-[#3E63DD] text-white px-3 py-1 font-bold uppercase tracking-widest text-[10px]">
                   {testimonial.improvement}
                 </div>
                 <div className="flex text-[#3E63DD] mb-4">
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-4 h-4 fill-current mr-1" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                   ))}
                 </div>
                 <p className="text-white/80 italic mb-6 text-sm">"{testimonial.text}"</p>
                 <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                   <div className="w-10 h-10 bg-[#1A1B1E] flex items-center justify-center font-bold text-white uppercase border border-white/10">
                     {testimonial.author.charAt(0)}
                   </div>
                   <div>
                     <p className="font-bold text-white text-xs uppercase tracking-widest">{testimonial.author}</p>
                     <p className="text-[10px] text-white/50 uppercase tracking-widest">{testimonial.exam} • {testimonial.score}</p>
                   </div>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⏳ URGENCY CTA SECTION */}
      <section className="py-16 bg-[#111113] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Enrollment for Target Batch Closing Soon</h2>
          
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="bg-[#1A1B1E] px-6 py-4 border border-white/10 text-[#3E63DD] font-mono text-3xl font-bold flex items-center gap-3">
              <Timer className="w-8 h-8 text-[#3E63DD]" />
              {formatTime(timeLeft)}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <div className="text-white/80 font-bold uppercase tracking-widest text-xs bg-[#1A1B1E] px-4 py-3 border border-white/10">
                🔥 Only <span className="text-red-500 font-black">14</span> seats left
             </div>
             <Link to="/courses">
               <Button size="lg" className="px-8 shadow-md">
                 Claim Your Spot Now
               </Button>
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
