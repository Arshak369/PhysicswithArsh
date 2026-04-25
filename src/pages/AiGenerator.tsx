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
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4 inline-flex items-center gap-3">
            <span className="p-2 bg-purple-100 rounded-xl text-purple-600">
              <BrainCircuit className="w-8 h-8" />
            </span>
            AI Question Generator
          </h1>
          <p className="text-lg text-slate-600">Generate personalized MCQs based on varying difficulty levels.</p>
        </div>

        {!questions && !isGenerating && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center"
          >
            <div className="max-w-md mx-auto space-y-6">
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Topic</label>
                  <select className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-brand-500 focus:border-brand-500 outline-none">
                    <option>Kinematics</option>
                    <option>Laws of Motion</option>
                    <option>Thermodynamics</option>
                  </select>
                </div>
                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Difficulty</label>
                  <select className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-brand-500 focus:border-brand-500 outline-none">
                    <option>NEET Level</option>
                    <option>JEE Mains Level</option>
                    <option>JEE Adv Level</option>
                  </select>
                </div>
              </div>
              
              <Button size="lg" className="w-full gap-2 text-lg" onClick={handleGenerate}>
                <BrainCircuit className="w-5 h-5" />
                Generate My 5 MCQs
              </Button>
            </div>
          </motion.div>
        )}

        {isGenerating && (
          <div className="flex flex-col items-center justify-center py-20">
             <div className="relative">
               <div className="w-16 h-16 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin"></div>
               <BrainCircuit className="w-6 h-6 text-brand-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
             </div>
             <p className="mt-4 text-slate-600 font-medium animate-pulse">AI is crafting matching questions...</p>
          </div>
        )}

        {questions && (
          <div className="space-y-6">
            
            {/* Top Bar Navigation */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-wrap justify-between items-center gap-4 sticky top-20 z-40">
              <div className="flex gap-2">
                {questions.map((_, idx) => {
                  let statusColor = "bg-slate-100 text-slate-600 border border-slate-200";
                  if (selectedAnswers[idx] !== undefined) statusColor = "bg-brand-100 text-brand-700 border-brand-300 font-bold";
                  if (showResults) {
                     if (selectedAnswers[idx] === questions[idx].correctAnswer) statusColor = "bg-green-100 text-green-700 border-green-300 font-bold";
                     else statusColor = "bg-red-100 text-red-700 border-red-300 font-bold";
                  }
                  
                  return (
                    <button 
                      key={idx}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${statusColor} ${currentQuestionIndex === idx ? 'ring-2 ring-brand-500 ring-offset-2' : ''}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg font-mono text-slate-700 font-medium">
                  <Timer className="w-4 h-4" />
                  {formatTime(timeElapsed)}
                </div>
                {!showResults && (
                  <Button variant="accent" size="sm" onClick={handleSubmit}>
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
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200"
              >
                <div className="mb-6 flex justify-between items-start">
                  <h3 className="text-xl font-medium text-slate-900">
                    <span className="text-brand-600 font-bold mr-2">Q{currentQuestionIndex + 1}.</span>
                    {questions[currentQuestionIndex].text}
                  </h3>
                </div>

                <div className="space-y-3">
                  {questions[currentQuestionIndex].options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[currentQuestionIndex] === optIdx;
                    const isCorrect = questions[currentQuestionIndex].correctAnswer === optIdx;
                    
                    let bgStyle = "bg-white border-slate-200 hover:border-brand-400";
                    let textStyle = "text-slate-700";
                    
                    if (isSelected) {
                      bgStyle = "bg-brand-50 border-brand-500";
                      textStyle = "text-brand-700 font-medium";
                    }

                    if (showResults) {
                      if (isCorrect) {
                        bgStyle = "bg-green-50 border-green-500";
                        textStyle = "text-green-800 font-semibold";
                      } else if (isSelected && !isCorrect) {
                        bgStyle = "bg-red-50 border-red-500";
                        textStyle = "text-red-800";
                      } else {
                        bgStyle = "bg-slate-50 border-slate-200 opacity-50 cursor-not-allowed";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleOptionSelect(currentQuestionIndex, optIdx)}
                        disabled={showResults}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${bgStyle} ${textStyle}`}
                      >
                        <span className="flex-1">{String.fromCharCode(65 + optIdx)}. {opt}</span>
                        {showResults && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />}
                        {showResults && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
                      </button>
                    )
                  })}
                </div>

                {/* Solution Block (Blurred unless unlocked) */}
                {showResults && (
                   <div className="mt-8 border-t border-slate-100 pt-8">
                     <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                       Detailed Solution
                     </h4>
                     
                     <div className="relative rounded-xl overflow-hidden bg-slate-50 border border-slate-200">
                       <div className={`p-6 ${!isUnlocked ? 'filter blur-sm select-none' : ''}`}>
                         <p className="text-slate-700 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                           {questions[currentQuestionIndex].solution}
                         </p>
                       </div>
                       
                       {!isUnlocked && (
                         <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/40 backdrop-blur-md">
                           <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm mx-4">
                              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Lock className="w-6 h-6" />
                              </div>
                              <h5 className="text-lg font-bold text-slate-900 mb-2">Unlock Solutions</h5>
                              <p className="text-sm text-slate-600 mb-6">Create a free account to view detailed step-by-step video & text solutions.</p>
                              <Button className="w-full" onClick={() => setIsUnlocked(true)}>
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
                className="bg-brand-900 rounded-2xl p-8 text-white text-center sm:flex sm:items-center sm:justify-between sm:text-left"
              >
                <div>
                  <h3 className="text-2xl font-bold flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <Trophy className="w-6 h-6 text-yellow-400" />
                    Quiz Complete!
                  </h3>
                  <p className="text-brand-200">
                    You scored <strong className="text-white text-xl">{score}/{questions.length}</strong> in {formatTime(timeElapsed)}.
                  </p>
                </div>
                <div className="mt-6 sm:mt-0 space-x-4">
                  <Button variant="secondary" onClick={() => handleGenerate()}>
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
