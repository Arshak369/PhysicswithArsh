import { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { BrainCircuit, Timer, Trophy, Lock, CheckCircle2, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Mock questions
const mockQuestions = [
  {
    id: 1,
    text: "A particle moves in a straight line with a constant acceleration. It changes its velocity from 10 m/s to 20 m/s while passing through a distance 135 m in t second. The value of t is:",
    options: ["10", "9", "12", "1.8"],
    correctAnswer: 1, // index 1 is "9"
    solution: "Using equation of motion: v^2 - u^2 = 2as. Then use v = u + at. \nv^2 - u^2 = 2as => 400 - 100 = 2 * a * 135 => 300 = 270a => a = 10/9. \nv = u + at => 20 = 10 + (10/9)t => 10 = (10/9)t => t = 9s."
  },
  {
    id: 2,
    text: "Two bodies of mass 1 kg and 3 kg have position vectors i+2j+k and -3i-2j+k respectively. The center of mass of this system has a position vector:",
    options: ["-2i-j+k", "2i-j-k", "-i+j+k", "-i-j+k"],
    correctAnswer: 0,
    solution: "r_cm = (m1r1 + m2r2) / (m1 + m2) = (1(i+2j+k) + 3(-3i-2j+k)) / (1+3) = (-8i-4j+4k) / 4 = -2i-j+k"
  }
];

export default function AiGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [questions, setQuestions] = useState<typeof mockQuestions | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Mock API call
    setTimeout(() => {
      setQuestions(mockQuestions);
      setIsGenerating(false);
      setTimerActive(true);
      setTimeElapsed(0);
      setSelectedAnswers({});
      setShowResults(false);
      setCurrentQuestionIndex(0);
    }, 1500);
  };

  const handleOptionSelect = (qIndex: number, optionIndex: number) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [qIndex]: optionIndex
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
    setTimerActive(false);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const score = questions 
    ? questions.reduce((acc, q, i) => acc + (selectedAnswers[i] === q.correctAnswer ? 1 : 0), 0)
    : 0;

  return (
    <div className="min-h-screen bg-[#0A0A0B] py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3E63DD] opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter inline-flex items-center gap-3">
            <span className="p-2 bg-[#3E63DD]/20 rounded-md text-[#3E63DD]">
              <BrainCircuit className="w-8 h-8" />
            </span>
            AI Question Generator
          </h1>
          <p className="text-lg text-white/50 font-light italic">Generate personalized MCQs based on varying difficulty levels.</p>
        </div>

        {!questions && !isGenerating && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#111113] p-8 border border-white/10 text-center shadow-xl"
          >
            <div className="max-w-md mx-auto space-y-6">
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="p-4 border border-white/10 bg-[#1A1B1E]">
                  <label className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-widest">Topic</label>
                  <select className="w-full bg-[#0A0A0B] border border-white/20 text-white px-3 py-2 text-sm focus:ring-0 focus:border-[#3E63DD] outline-none">
                    <option>Kinematics</option>
                    <option>Laws of Motion</option>
                    <option>Thermodynamics</option>
                  </select>
                </div>
                <div className="p-4 border border-white/10 bg-[#1A1B1E]">
                  <label className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-widest">Difficulty</label>
                  <select className="w-full bg-[#0A0A0B] border border-white/20 text-white px-3 py-2 text-sm focus:ring-0 focus:border-[#3E63DD] outline-none">
                    <option>NEET Level</option>
                    <option>JEE Mains Level</option>
                    <option>JEE Adv Level</option>
                  </select>
                </div>
              </div>
              
              <Button size="lg" className="w-full gap-2 text-lg uppercase tracking-widest" onClick={handleGenerate}>
                <BrainCircuit className="w-5 h-5" />
                Generate My 5 MCQs
              </Button>
            </div>
          </motion.div>
        )}

        {isGenerating && (
          <div className="flex flex-col items-center justify-center py-20">
             <div className="relative">
               <div className="w-16 h-16 border-4 border-[#3E63DD]/20 border-t-[#3E63DD] rounded-full animate-spin"></div>
               <BrainCircuit className="w-6 h-6 text-[#3E63DD] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
             </div>
             <p className="mt-4 text-white/60 font-medium animate-pulse tracking-widest uppercase text-xs">AI is crafting matching questions...</p>
          </div>
        )}

        {questions && (
          <div className="space-y-6">
            
            {/* Top Bar Navigation */}
            <div className="bg-[#1A1B1E] p-4 border border-white/10 flex flex-wrap justify-between items-center gap-4 sticky top-20 z-40">
              <div className="flex gap-2">
                {questions.map((_, idx) => {
                  let statusColor = "bg-[#111113] text-white/60 border border-white/10";
                  if (selectedAnswers[idx] !== undefined) statusColor = "bg-[#3E63DD]/20 text-[#3E63DD] border-[#3E63DD]/50 font-black";
                  if (showResults) {
                     if (selectedAnswers[idx] === questions[idx].correctAnswer) statusColor = "bg-green-900/30 text-green-500 border-green-500/50 font-black";
                     else statusColor = "bg-red-900/30 text-red-500 border-red-500/50 font-black";
                  }
                  
                  return (
                    <button 
                      key={idx}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`w-10 h-10 flex items-center justify-center transition-all ${statusColor} ${currentQuestionIndex === idx ? 'border-b-2 border-b-[#3E63DD] bg-[#3E63DD]/10 text-white' : ''}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-[#111113] border border-white/10 px-3 py-1.5 font-mono text-white/80 font-bold text-sm tracking-widest">
                  <Timer className="w-4 h-4 text-[#3E63DD]" />
                  {formatTime(timeElapsed)}
                </div>
                {!showResults && (
                  <Button variant="primary" size="sm" onClick={handleSubmit}>
                    Submit Test
                  </Button>
                )}
              </div>
            </div>

            {/* Question Display */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentQuestionIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="bg-[#111113] p-6 md:p-8 border border-white/10"
              >
                <div className="mb-6 flex justify-between items-start">
                  <h3 className="text-xl text-white font-medium">
                    <span className="text-[#3E63DD] font-black mr-2 text-2xl">Q{currentQuestionIndex + 1}.</span>
                    {questions[currentQuestionIndex].text}
                  </h3>
                </div>

                <div className="space-y-3">
                  {questions[currentQuestionIndex].options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[currentQuestionIndex] === optIdx;
                    const isCorrect = questions[currentQuestionIndex].correctAnswer === optIdx;
                    
                    let bgStyle = "bg-[#1A1B1E] border border-white/10 hover:border-white/30 text-white/80";
                    let textStyle = "";
                    
                    if (isSelected) {
                      bgStyle = "bg-[#3E63DD]/20 border border-[#3E63DD]";
                      textStyle = "text-white font-bold";
                    }

                    if (showResults) {
                      if (isCorrect) {
                        bgStyle = "bg-green-900/30 border border-green-500/50";
                        textStyle = "text-green-400 font-bold";
                      } else if (isSelected && !isCorrect) {
                        bgStyle = "bg-red-900/30 border border-red-500/50";
                        textStyle = "text-red-400";
                      } else {
                        bgStyle = "bg-[#1A1B1E] border border-white/5 opacity-50 cursor-not-allowed";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleOptionSelect(currentQuestionIndex, optIdx)}
                        disabled={showResults}
                        className={`w-full text-left p-4 transition-all flex items-center justify-between ${bgStyle} ${textStyle}`}
                      >
                        <span className="flex-1 font-mono">{String.fromCharCode(65 + optIdx)}. {opt}</span>
                        {showResults && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />}
                        {showResults && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
                      </button>
                    )
                  })}
                </div>

                {/* Solution Block (Blurred unless unlocked) */}
                {showResults && (
                   <div className="mt-8 border-t border-white/10 pt-8">
                     <h4 className="font-black tracking-widest text-[#3E63DD] uppercase mb-4 flex items-center gap-2">
                       Detailed Solution
                     </h4>
                     
                     <div className="relative border border-white/10 bg-[#1A1B1E] overflow-hidden">
                       <div className={`p-6 ${!isUnlocked ? 'filter blur-md select-none opacity-50' : ''}`}>
                         <p className="text-white/80 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                           {questions[currentQuestionIndex].solution}
                         </p>
                       </div>
                       
                       {!isUnlocked && (
                         <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0A0A0B]/60 backdrop-blur-sm">
                           <div className="bg-[#111113] p-8 border border-white/10 text-center max-w-sm mx-4 shadow-2xl">
                              <div className="w-12 h-12 bg-amber-900/30 border border-amber-500/50 text-amber-500 rounded-none flex items-center justify-center mx-auto mb-4">
                                <Lock className="w-6 h-6" />
                              </div>
                              <h5 className="text-xl font-black uppercase tracking-tighter text-white mb-2">Unlock Solutions</h5>
                              <p className="text-[10px] uppercase tracking-widest text-white/50 mb-6">Create a free account to view detailed step-by-step solutions.</p>
                              <Button className="w-full uppercase tracking-widest" onClick={() => setIsUnlocked(true)}>
                                Create Free Account
                              </Button>
                           </div>
                         </div>
                       )}
                     </div>
                   </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Results Summary (if submitted) */}
            {showResults && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#3E63DD] p-8 text-white text-center sm:flex sm:items-center sm:justify-between sm:text-left shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
              >
                <div>
                  <h3 className="text-3xl font-black flex items-center justify-center sm:justify-start gap-2 mb-2 uppercase tracking-tighter">
                    <Trophy className="w-8 h-8 text-yellow-400" />
                    Quiz Complete!
                  </h3>
                  <p className="text-white/80 font-mono text-sm">
                    You scored <strong className="text-white text-xl">{score}/{questions.length}</strong> in {formatTime(timeElapsed)}.
                  </p>
                </div>
                <div className="mt-6 sm:mt-0 space-x-4">
                  <Button variant="secondary" className="bg-white text-black hover:bg-white/90 border-transparent shadow-none w-full sm:w-auto" onClick={() => handleGenerate()}>
                    Generate New Set
                  </Button>
                </div>
              </motion.div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}
