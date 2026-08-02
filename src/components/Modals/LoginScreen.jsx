import { useState } from "react";
import { Mail, Lock, X, LogIn, ArrowRight } from "lucide-react";

const LoginScreen = ({ closeFn, openRegisterModal = () => null, openQuizModal = () => null }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div className="modal--mask">
      <div className="relative w-full max-w-md mx-4 bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-200 dark:border-purple-950/60 overflow-hidden animate-scale-up backdrop-blur-2xl">
        <div className="relative bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 p-6 text-white text-center">
          <button
            onClick={closeFn}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 mb-2 animate-fade-in">
            <LogIn className="w-6 h-6 text-amber-300" />
          </div>
          <h2 className="text-2xl font-black animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>Welcome Back</h2>
          <p className="text-xs text-purple-200 mt-1 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>Log in to enter live quiz tournaments</p>
        </div>

        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1 animate-slide-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <label className="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-400">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="font-semibold text-purple-600 dark:text-purple-400 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:to-rose-400 shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer mt-2 btn-gradient"
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={() => openQuizModal("kbc-quiz")}
              className="w-full py-3 rounded-2xl font-semibold text-xs text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Play Demo Quiz Instead</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-6">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={openRegisterModal}
              className="font-bold text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
            >
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;