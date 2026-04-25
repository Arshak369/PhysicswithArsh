import { Button } from '../components/ui/Button';
import { CheckCircle2, Clock, Users, PlayCircle, Star, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Class 11 Physics Mastery",
    subtitle: "Complete NCERT foundation",
    price: "₹999",
    oldPrice: "₹2,999",
    features: [
       "All chapters covered in depth",
       "150+ Hours of Video Lectures",
       "Chapter-wise PDF Notes",
       "Weekend Doubt Clearing",
       "Access till March 2027"
    ],
    popular: false,
    color: "blue"
  },
  {
    id: 2,
    title: "NEET Physics Crash Course",
    subtitle: "From Zero to 150+ in 60 Days",
    price: "₹1,999",
    oldPrice: "₹5,999",
    features: [
       "Focus on high-weightage topics",
       "2000+ Topic-wise PYQs solved",
       "Short Tricks & Formula memorization",
       "10 Full length mock tests",
       "Personal Whatsapp Mentor"
    ],
    popular: true,
    color: "brand"
  },
  {
    id: 3,
    title: "Personal Mentorship 1-on-1",
    subtitle: "Guaranteed Results",
    price: "₹4,999",
    oldPrice: "₹10,000",
    features: [
       "Everything in NEET Crash Course",
       "Weekly 1-on-1 Zoom planning",
       "Customized daily study schedule",
       "Direct call access to main teacher",
       "Money-back guarantee logic"
    ],
    popular: false,
    color: "slate"
  }
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3E63DD] blur-[150px] opacity-10"></div>
        
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            Stop Memorizing, Start <span className="text-[#3E63DD]">Understanding</span>
          </h1>
          <p className="text-lg text-white/50 italic font-light">
            Choose a plan that fits your goal. From basic board prep to advanced competitive exams.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center relative z-10">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`bg-[#111113] p-8 border transition-all flex flex-col ${
                course.popular 
                  ? 'border-[#3E63DD] shadow-[8px_8px_0px_0px_rgba(62,99,221,0.2)] lg:-translate-y-4' 
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              {course.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3E63DD] text-white px-4 py-1 text-[10px] font-black tracking-widest uppercase border border-white/20">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter">{course.title}</h3>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-2">{course.subtitle}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">{course.price}</span>
                  <span className="text-sm text-white/30 line-through">{course.oldPrice}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3E63DD] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 font-medium text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={course.popular ? 'primary' : 'outline'} 
                size="lg" 
                className="w-full"
              >
                Enroll Now
              </Button>
            </div>
          ))}
        </div>

        {/* Sneak Peek section */}
        <div className="mt-32 max-w-5xl mx-auto bg-[#1A1B1E] overflow-hidden border border-white/10 flex flex-col md:flex-row relative z-10">
           <div className="p-10 md:w-1/2 flex flex-col justify-center">
             <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Not sure yet?</h2>
             <p className="text-white/60 text-sm mb-8 font-light leading-relaxed">
               Watch a completely free 45-minute masterclass on "How to solve Kinematics without writing equations". Get a taste of our teaching methodology.
             </p>
             <ul className="space-y-3 mb-8">
                {["Live problem solving", "PDF Notes included", "No credit card needed"].map((item, i) => (
                  <li key={i} className="flex items-center text-white/70 gap-2 text-sm uppercase tracking-widest">
                    <Star className="w-4 h-4 text-[#3E63DD] fill-current" />
                    {item}
                  </li>
                ))}
             </ul>
             <Button className="self-start gap-2">
               <PlayCircle className="w-5 h-5" />
               Watch Free Masterclass
             </Button>
           </div>
           <div className="md:w-1/2 bg-[#111113] relative min-h-[300px] border-l border-white/10">
              {/* Fake Video Player Thumbnail */}
              <div className="absolute inset-0 bg-[#3E63DD]/10 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-white border border-white/20 text-black rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3E63DD] hover:text-white hover:scale-105 transition-all">
                    <PlayCircle className="w-8 h-8 ml-1" />
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
