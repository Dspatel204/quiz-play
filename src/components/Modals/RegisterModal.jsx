import React, { useState } from "react";
import Modal from "../../Modal";
import { Mail, Lock, Phone, X, UserPlus, ArrowRight } from "lucide-react";

const RegisterModal = ({ closeFn = () => null, open = false, openLoginModal = () => null, openQuizModal = () => null }) => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
    }
  };

  return (
    <Modal open={open}>
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
              <UserPlus className="w-6 h-6 text-amber-300" />
            </div>
            <h2 className="text-2xl font-black animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>Create Account</h2>
            <p className="text-xs text-purple-200 mt-1 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>Join thousands of players & win rewards</p>
          </div>

          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="animate-slide-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="+91 9876543210"
                    className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.phoneNumber && <p className="text-rose-500 text-[11px] mt-0.5">{errors.phoneNumber}</p>}
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
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
                  />
                </div>
                {errors.email && <p className="text-rose-500 text-[11px] mt-0.5">{errors.email}</p>}
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Create a strong password"
                    className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.password && <p className="text-rose-500 text-[11px] mt-0.5">{errors.password}</p>}
              </div>

              <div className="pt-1 animate-slide-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
                <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 dark:text-slate-400">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span>I agree to the Terms & Privacy Policy</span>
                </label>
                {errors.agreeTerms && <p className="text-rose-500 text-[11px] mt-0.5">{errors.agreeTerms}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:to-rose-400 shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer mt-2 btn-gradient"
              >
                Register Now
              </button>

              <button
                type="button"
                onClick={() => openQuizModal("science-quiz")}
                className="w-full py-3 rounded-2xl font-semibold text-xs text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Continue with Science Quiz</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-5">
              Already have an account?{" "}
              <button
                type="button"
                onClick={openLoginModal}
                className="font-bold text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
              >
                Log In
              </button>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;
