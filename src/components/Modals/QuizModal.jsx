import { useEffect, useMemo, useState } from "react";
import Modal from "../../Modal";
import confetti from "canvas-confetti";
import { X, CheckCircle2, AlertCircle, Trophy, Sparkles, Timer, ArrowRight, RotateCcw, Award } from "lucide-react";

const quizData = {
  "kbc-quiz": {
    title: "KBC Master Quiz",
    category: "General Knowledge",
    questions: [
      {
        question: "Who is known as the father of computers?",
        options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        answer: 1,
      },
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "London"],
        answer: 2,
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Earth", "Venus", "Mercury", "Mars"],
        answer: 2,
      },
      {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Silver"],
        answer: 1,
      },
    ],
  },
  "science-quiz": {
    title: "Science & Tech Quiz",
    category: "Science",
    questions: [
      {
        question: "What is H2O commonly known as?",
        options: ["Salt", "Water", "Oxygen", "Hydrogen"],
        answer: 1,
      },
      {
        question: "What force keeps us grounded on Earth?",
        options: ["Magnetism", "Friction", "Gravity", "Electricity"],
        answer: 2,
      },
      {
        question: "What gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        answer: 2,
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: 2,
      },
    ],
  },
  "photo-quiz": {
    title: "Visual Photo Challenge",
    category: "Visual Trivia",
    questions: [
      {
        question: "What kind of visual trivia card is this?",
        options: ["History", "Photo", "Science", "Sports"],
        answer: 1,
      },
      {
        question: "What is the main focus of a visual photo quiz?",
        options: ["Visual clues & images", "Math problems", "Audio clues", "Text facts"],
        answer: 0,
      },
      {
        question: "Which image format supports transparency natively?",
        options: ["JPG", "BMP", "PNG", "TXT"],
        answer: 2,
      },
    ],
  },
};

const QuizModal = ({ closeFn = () => null, open = false, quizId = "kbc-quiz" }) => {
  const quizKey = quizData[quizId] ? quizId : "kbc-quiz";
  const quiz = quizData[quizKey];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isAnswerConfirmed, setIsAnswerConfirmed] = useState(false);

  useEffect(() => {
    if (!open) {
      setCurrentIndex(0);
      setSelectedAnswer(null);
      setScore(0);
      setCompleted(false);
      setTimeLeft(15);
      setIsAnswerConfirmed(false);
    }
  }, [open, quizId]);

  // Timer per question
  useEffect(() => {
    if (!open || completed || isAnswerConfirmed) return;

    if (timeLeft === 0) {
      // Auto move to next or reveal answer
      handleNext();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [open, completed, timeLeft, isAnswerConfirmed]);

  const currentQuestion = quiz.questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / quiz.questions.length) * 100);

  const handleSelect = (index) => {
    if (isAnswerConfirmed) return;
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === currentQuestion.answer) {
        setScore((prev) => prev + 1);
      }
    }

    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(15);
      setIsAnswerConfirmed(false);
    } else {
      setCompleted(true);
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // ignore confetti errors
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setCompleted(false);
    setTimeLeft(15);
    setIsAnswerConfirmed(false);
  };

  if (!open) return null;

  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="relative w-full max-w-xl mx-4 bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-200 dark:border-purple-950/60 overflow-hidden animate-scale-up backdrop-blur-2xl">
          {/* Header Bar */}
          <div className="relative bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 p-6 text-white overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
            
            <button
              onClick={closeFn}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-1 text-purple-200 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-amber-300" />
              {quiz.category}
            </div>
            <h2 className="text-2xl font-black tracking-tight">{quiz.title}</h2>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between items-center text-xs font-semibold mb-1 opacity-90">
                <span>Question {currentIndex + 1} of {quiz.questions.length}</span>
                <span>{progressPercent}% Completed</span>
              </div>
              <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8">
            {!completed ? (
              <div className="space-y-6">
                {/* Question and Timer */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 leading-snug">
                    {currentQuestion.question}
                  </h3>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-extrabold shrink-0">
                    <Timer className="w-4 h-4 text-purple-600 dark:text-purple-400 animate-pulse" />
                    <span>{timeLeft}s</span>
                  </div>
                </div>

                {/* Options List */}
                <div className="grid grid-cols-1 gap-3">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleSelect(index)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl font-semibold text-left transition-all duration-200 cursor-pointer border ${
                          isSelected
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-lg shadow-purple-500/30 scale-[1.01]"
                            : "bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700/60 hover:bg-purple-50 dark:hover:bg-slate-700/80 hover:border-purple-300 dark:hover:border-purple-500/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                              isSelected
                                ? "bg-white text-purple-700 shadow"
                                : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                            }`}
                          >
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="text-sm md:text-base">{option}</span>
                        </div>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-white shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Controls */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    Score: <span className="text-purple-600 dark:text-purple-400 text-sm">{score}</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={selectedAnswer === null}
                    className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg ${
                      selectedAnswer !== null
                        ? "bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white hover:from-purple-500 hover:to-rose-400 shadow-purple-500/30 cursor-pointer hover:scale-105"
                        : "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed shadow-none"
                    }`}
                  >
                    <span>{currentIndex < quiz.questions.length - 1 ? "Next Question" : "Complete Quiz"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* Quiz Completion Screen */
              <div className="text-center py-6 space-y-6 animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 text-white shadow-xl shadow-pink-500/30 animate-bounce">
                  <Trophy className="w-10 h-10" />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100">
                    Quiz Completed!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    You answered {score} out of {quiz.questions.length} questions correctly.
                  </p>
                </div>

                {/* Score badge */}
                <div className="p-4 rounded-2xl bg-purple-50 dark:bg-slate-800/80 border border-purple-200 dark:border-purple-800/60 max-w-xs mx-auto">
                  <div className="text-xs uppercase font-extrabold text-purple-600 dark:text-purple-400 tracking-wider">
                    Final Result
                  </div>
                  <div className="text-3xl font-black text-slate-800 dark:text-slate-100 mt-1">
                    {Math.round((score / quiz.questions.length) * 100)}%
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Try Again
                  </button>
                  <button
                    type="button"
                    onClick={closeFn}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-500/30 transition-all cursor-pointer hover:scale-105"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default QuizModal;
