import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/transparentlogo.png";
import { ShieldCheck, FileText, Heart, Gamepad2, Trophy, Flame } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-[#090d16]/80 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 p-0.5 shadow-md shadow-purple-500/20">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <img src={logo} alt="Logo" className="w-7 h-7 object-contain" />
                </div>
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                QUIZPLAY
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Experience the next generation of interactive live quizzes, trivia battles, and cash prize competitions.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Navigation</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link to="/home" className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link to="/ongoingGames" className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Ongoing Games</Link></li>
              <li><Link to="/allGames" className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">All Games</Link></li>
              <li><Link to="/latestFeed" className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Latest Feed</Link></li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Categories</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li className="flex items-center gap-2 text-slate-600 dark:text-slate-300"><Trophy className="w-4 h-4 text-amber-500" /> KBC Champions</li>
              <li className="flex items-center gap-2 text-slate-600 dark:text-slate-300"><Flame className="w-4 h-4 text-rose-500" /> Science & Tech</li>
              <li className="flex items-center gap-2 text-slate-600 dark:text-slate-300"><Gamepad2 className="w-4 h-4 text-purple-500" /> Photo & Visual Trivia</li>
            </ul>
          </div>

          {/* Col 4: Legal & Security */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Trust & Legal</h4>
            <div className="flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-300">
              <a href="#" className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Privacy Policy
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <FileText className="w-4 h-4 text-blue-500" /> Terms of Use
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} <span className="font-semibold text-purple-600 dark:text-purple-400">QuizPlay Games</span>. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" /> for Gamers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
