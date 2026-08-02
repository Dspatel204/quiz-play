import React from "react";
import Modal from "../../Modal";
import gameImg from "../../Assets/images/QuizImages/scienceQuiz.png";
import { Users, Clock, Medal, Trophy, X, Flame } from "lucide-react";

const EntryModal = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="relative w-full max-w-lg mx-4 bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-200 dark:border-purple-950/60 overflow-hidden animate-scale-up backdrop-blur-2xl">
          <div className="relative bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 p-6 text-white text-center">
            <button
              onClick={closeFn}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex justify-center mb-3">
              <div className="relative w-28 h-28 rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 p-1 bg-black/20 backdrop-blur-sm">
                <img src={gameImg} alt="Game preview" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
              <Flame className="w-3.5 h-3.5" />
              Live Tournament
            </div>
            <h2 className="text-2xl font-black">Science Quiz Battle</h2>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
                <div className="text-[10px] font-extrabold uppercase text-slate-400">Prize Pool</div>
                <div className="text-lg font-black text-purple-600 dark:text-purple-400 mt-0.5">₹ 1,00,000</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
                <div className="text-[10px] font-extrabold uppercase text-slate-400">Status</div>
                <div className="flex items-center justify-center gap-1 text-xs font-bold text-rose-500 mt-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                  Live Now
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
                <div className="text-[10px] font-extrabold uppercase text-slate-400">Entry Fee</div>
                <div className="text-lg font-black text-emerald-500 mt-0.5">₹ 10</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-purple-500" />
                  Quiz Slots Filled
                </span>
                <span className="text-purple-600 dark:text-purple-400">750 / 1000 Filled</span>
              </div>
              <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                <div className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full transition-all duration-1000 ease-out" style={{ width: "75%" }}></div>
              </div>
            </div>

            <div className="flex items-center justify-around py-3 px-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 text-purple-700 dark:text-purple-300 text-sm font-bold animate-slide-up">
              <div className="flex items-center gap-2">
                <Medal className="w-5 h-5 text-amber-500" />
                <span>Max Win: ₹100</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-rose-500" />
                <span>Win Rate: 75%</span>
              </div>
            </div>

            <button
              type="button"
              onClick={closeFn}
              className="w-full py-4 rounded-2xl font-black text-base text-white bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:to-rose-400 shadow-xl shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer btn-gradient"
            >
              Pay ₹10 & Join Battle
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EntryModal;
