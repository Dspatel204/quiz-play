import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../Assets/images/transparentlogo.png";
import { useNavLink } from "../../context/NavLinkContext";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Menu, X, LogIn, UserPlus } from "lucide-react";

const AppNavbar = ({ openModal }) => {
  const { activeLink, handleNavLinkClick } = useNavLink();
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Store", path: "/store" },
    { name: "Community", path: "/community" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#090d16]/80 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/home" 
          className="flex items-center gap-3 group" 
          onClick={closeMobileMenu}
        >
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 p-0.5 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center overflow-hidden">
              <img
                alt="QuizPlay Logo"
                src={logo}
                className="w-9 h-9 object-contain"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 dark:from-purple-400 dark:via-pink-400 dark:to-rose-400 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              QUIZPLAY
            </h1>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-widest uppercase -mt-1">
              Interactive Gaming
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/60 p-1.5 rounded-full border border-slate-200 dark:border-slate-700/50 backdrop-blur-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/30 scale-105"
                    : "text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-200/50 dark:hover:bg-slate-700/50"
                }`
              }
              onClick={() => handleNavLinkClick(link.name.toLowerCase())}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions (Theme Toggle & Auth Buttons) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 border border-slate-200 dark:border-slate-700/60 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-5 h-5 text-purple-600 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60 transition-all duration-300 hover:scale-105 cursor-pointer"
            data-modal="modal-login"
            onClick={openModal}
          >
            <LogIn className="w-4 h-4 text-purple-500" />
            LOG IN
          </button>

          <button
            type="button"
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:to-rose-400 shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40 cursor-pointer"
            data-modal="modal-register"
            onClick={openModal}
          >
            <UserPlus className="w-4 h-4" />
            REGISTER
          </button>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-purple-600" />}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#090d16]/95 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-4 animate-fade-in backdrop-blur-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`
                }
                onClick={() => {
                  handleNavLinkClick(link.name.toLowerCase());
                  closeMobileMenu();
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              data-modal="modal-login"
              onClick={(e) => {
                openModal(e);
                closeMobileMenu();
              }}
            >
              <LogIn className="w-5 h-5 text-purple-500" />
              LOG IN
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 shadow-lg"
              data-modal="modal-register"
              onClick={(e) => {
                openModal(e);
                closeMobileMenu();
              }}
            >
              <UserPlus className="w-5 h-5" />
              REGISTER
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default AppNavbar;
