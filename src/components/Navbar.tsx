import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Search,
  User,
  Phone,
  Clock,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface NavbarProps {
  onOpenTrialModal: () => void;
  onOpenLoginModal: () => void;
  onOpenSearchModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTrialModal,
  onOpenLoginModal,
  onOpenSearchModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Personal Training', href: '#personal-training' },
    { label: 'Memberships', href: '#memberships' },
    { label: 'Classes', href: '#schedule' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#090A0B] border-b border-[#1B1D20] text-xs text-[#B7B7B7] px-4 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-[#F7F7F5] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#E31B23] animate-pulse"></span>
              Open 24/7 All-Access
            </span>
            <span className="text-[#B7B7B7]">|</span>
            <span>Flexible No-Contract Memberships</span>
            <span className="text-[#B7B7B7]">|</span>
            <span className="text-white font-semibold flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#E31B23]" /> 7-Day Free Trial Available
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href="tel:5552342574"
              className="flex items-center gap-1.5 hover:text-[#E31B23] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#E31B23]" />
              <span>(555) 234-ALPH</span>
            </a>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#E31B23]" />
              <span>Staffed: M-F 5:30AM - 9:00PM</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200 py-3 text-[#111315]'
            : 'bg-white border-b border-neutral-200 py-3.5 text-[#111315]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group cursor-pointer"
            id="brand-logo"
          >
            {/* Custom geometric athletic symbol */}
            <div className="w-10 h-10 bg-[#090A0B] rounded-lg flex items-center justify-center p-1.5 shadow-md group-hover:bg-[#111315] transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-3 h-3 bg-[#E31B23] transform translate-x-1 -translate-y-1 rotate-45"></div>
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-white stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
                {/* Athletic geometric Alpha symbol */}
                <path d="M4 20L12 4L20 20" />
                <path d="M7 14H17" stroke="#E31B23" strokeWidth="3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-display text-2xl font-bold tracking-wider text-[#090A0B] leading-none">
                  ALPHA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23]"></span>
              </div>
              <span className="text-[9px] font-bold tracking-[0.24em] text-[#E31B23] uppercase leading-tight font-sans">
                Gym &amp; Fitness
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-wider font-semibold text-[#36383B] hover:text-[#E31B23] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E31B23] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right-side Actions */}
          <div className="flex items-center space-x-3">
            {/* Quick Search */}
            <button
              onClick={onOpenSearchModal}
              aria-label="Search classes or programs"
              className="p-2 text-[#36383B] hover:text-[#E31B23] hover:bg-neutral-100 rounded-full transition-colors"
              id="search-btn"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Member Login */}
            <button
              onClick={onOpenLoginModal}
              className="hidden sm:flex items-center gap-1.5 text-xs uppercase font-bold tracking-wide text-[#111315] hover:text-[#E31B23] px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors"
              id="member-login-btn"
            >
              <User className="w-3.5 h-3.5 text-[#E31B23]" />
              <span>Login</span>
            </button>

            {/* Primary CTA button */}
            <button
              onClick={onOpenTrialModal}
              className="bg-[#E31B23] hover:bg-[#B91018] text-white text-xs font-extrabold uppercase tracking-wider px-4 sm:px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-1.5"
              id="header-cta-btn"
            >
              <span>Join Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#111315] hover:text-[#E31B23] hover:bg-neutral-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-[#090A0B]/98 text-white z-40 overflow-y-auto p-6 flex flex-col justify-between border-t border-[#1B1D20] backdrop-blur-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#B7B7B7] pb-2 border-b border-[#1B1D20]">
              Navigation Menu
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-display uppercase tracking-wide text-neutral-200 hover:text-[#E31B23] flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#E31B23]" />
              </a>
            ))}
          </div>

          <div className="pt-6 mt-4 border-t border-[#1B1D20] flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLoginModal();
              }}
              className="w-full py-3 bg-[#1B1D20] text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-[#24272C] transition-colors"
            >
              <User className="w-4 h-4 text-[#E31B23]" /> Member Portal Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-3.5 bg-[#E31B23] hover:bg-[#B91018] text-white font-bold text-sm tracking-wider uppercase rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <ShieldCheck className="w-4 h-4" /> Book a Free 7-Day Trial
            </button>
            <div className="text-center text-xs text-[#B7B7B7] pt-2">
              Questions? Call <a href="tel:5552342574" className="text-[#E31B23] underline">(555) 234-ALPH</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
