import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tv, Menu, X, Zap, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('aneetv-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'pricing', label: 'Pakketten' },
    { id: 'setup', label: 'Installatie' },
    { id: 'speedtest', label: 'Snelheidstest' },
    { id: 'faq', label: 'Veelgestelde Vragen' },
  ];

  const handleItemClick = (id: string) => {
    if (isOpen) {
      // Let the mobile menu's closing animation finish first — some mobile browsers
      // (WebKit in particular) cancel an in-progress smooth scrollIntoView if a
      // concurrent layout animation (the menu collapsing) is still reflowing.
      setIsOpen(false);
      window.setTimeout(() => onNavigate(id), 300);
    } else {
      onNavigate(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleItemClick('hero')}
            id="nav-logo"
            aria-label="Ga naar de homepagina"
          >
            <div className="p-2 bg-gradient-to-tr from-red-500 to-red-400 rounded-xl shadow-lg shadow-red-500/10 group-hover:scale-105 transition-all duration-300">
              <Tv className="h-6 w-6 text-slate-950 stroke-[2.5]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
              Anee<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">TV</span>
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-white hover:bg-slate-50/50 hover:dark:bg-slate-900/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-red-500 to-red-700 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Theme Toggle + Contact Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => setIsDark(!isDark)}
              id="theme-toggle-desktop"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-white hover:bg-slate-50 hover:dark:bg-slate-900 transition-colors focus:outline-none"
              aria-label="Donkere modus wisselen"
              title={isDark ? "Lichte modus" : "Donkere modus"}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => handleItemClick('contact')}
              id="nav-contact-btn"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:scale-[1.02]"
            >
              <Zap className="h-4 w-4 text-red-300 animate-pulse" />
              <span>Nu Bestellen</span>
            </button>
          </div>

          {/* Mobile Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center space-x-1">
            <button
              onClick={() => setIsDark(!isDark)}
              id="theme-toggle-mobile"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-white hover:bg-slate-50 hover:dark:bg-slate-900 transition-colors focus:outline-none"
              aria-label="Donkere modus wisselen"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-white hover:bg-slate-50 hover:dark:bg-slate-900 transition-colors focus:outline-none"
              aria-label="Menu openen of sluiten"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-out */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  id={`mobile-nav-link-${item.id}`}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-l-4 border-red-400 pl-3'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-white hover:bg-slate-50/50 hover:dark:bg-slate-900/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 pb-2 border-t border-slate-200 dark:border-slate-800 px-4">
                <button
                  onClick={() => handleItemClick('contact')}
                  id="mobile-nav-contact-btn"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-700 text-white font-bold text-base shadow-lg shadow-red-500/10"
                >
                  <Zap className="h-4 w-4 text-white" />
                  <span>Nu Bestellen</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
