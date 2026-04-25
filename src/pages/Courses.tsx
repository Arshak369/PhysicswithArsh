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
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Stop Memorizing, Start <span className="text-brand-600">Understanding</span>
          </h1>
          <p className="text-xl text-slate-600">
            Choose a plan that fits your goal. From basic board prep to advanced competitive exams.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`bg-white rounded-3xl p-8 border-2 transition-all flex flex-col ${
                course.popular 
                  ? 'border-brand-500 shadow-xl lg:-translate-y-4 relative z-10' 
                  : 'border-slate-200 shadow-sm hover:border-slate-300'
              }`}
            >
              {course.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900">{course.title}</h3>
                <p className="text-slate-500 text-sm mt-1">{course.subtitle}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900">{course.price}</span>
                  <span className="text-lg text-slate-400 line-through">{course.oldPrice}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={course.popular ? 'primary' : 'outline'} 
                size="lg" 
                className="w-full text-lg"
              >
                Enroll Now
              </Button>
            </div>
          ))}
        </div>

        {/* Sneak Peek section */}
        <div className="mt-32 max-w-5xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row">
           <div className="p-10 md:w-1/2 flex flex-col justify-center">
             <h2 className="text-3xl font-heading font-bold text-white mb-4">Not sure yet?</h2>
             <p className="text-slate-400 text-lg mb-8">
               Watch a completely free 45-minute masterclass on "How to solve Kinematics without writing equations". Get a taste of our teaching methodology.
             </p>
             <ul className="space-y-3 mb-8">
                {["Live problem solving", "PDF Notes included", "No credit card needed"].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300 gap-2">
                    <Star className="w-4 h-4 text-accent-500 fill-current" />
                    {item}
                  </li>
                ))}
             </ul>
             <Button variant="accent" className="self-start gap-2 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
               <PlayCircle className="w-5 h-5" />
               Watch Free Masterclass
             </Button>
           </div>
           <div className="md:w-1/2 bg-slate-800 relative min-h-[300px]">
              {/* Fake Video Player Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900 to-indigo-900 opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 hover:scale-105 transition-all">
                    <PlayCircle className="w-10 h-10 text-white ml-1" />
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
