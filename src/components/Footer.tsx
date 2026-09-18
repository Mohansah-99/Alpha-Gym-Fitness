import React, { useState } from 'react';
import {
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
} from 'lucide-react';

interface FooterProps {
  onOpenTrialModal: () => void;
  onOpenLoginModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrialModal, onOpenLoginModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#090A0B] text-[#B7B7B7] border-t border-[#1B1D20] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter & Brand Intro Banner */}
        <div className="pb-12 mb-12 border-b border-[#1B1D20] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 bg-white text-[#090A0B] rounded-lg flex items-center justify-center font-black font-display text-lg">
                A
              </div>
              <span className="font-display font-black text-xl text-white tracking-wider">
                ALPHA GYM &amp; FITNESS
              </span>
            </div>
            <p className="text-sm text-neutral-400">
              “Train with purpose. Live with strength.” The premier athletic training compound
              for strength, metabolic conditioning, and recovery.
            </p>
          </div>

          {/* Newsletter Input */}
          <div className="w-full lg:w-auto">
            <span className="text-xs uppercase font-bold text-white tracking-wider block mb-2">
              STAY IN THE LOOP • TRAINING INSIGHTS &amp; PASSES
            </span>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-4 py-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4" />
                <span>You're subscribed! Check your inbox for your welcome guide.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-2.5 rounded-lg bg-[#111315] border border-neutral-700 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#E31B23] flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#E31B23] hover:bg-[#B91018] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer flex-shrink-0"
                >
                  <span>Subscribe</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          {/* Column 1: Explore */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#E31B23] transition-colors">
                  About Alpha
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleLinkClick(e, '#programs')} className="hover:text-[#E31B23] transition-colors">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#schedule" onClick={(e) => handleLinkClick(e, '#schedule')} className="hover:text-[#E31B23] transition-colors">
                  Group Classes
                </a>
              </li>
              <li>
                <a href="#trainers" onClick={(e) => handleLinkClick(e, '#trainers')} className="hover:text-[#E31B23] transition-colors">
                  Coaching Staff
                </a>
              </li>
              <li>
                <a href="#facilities" onClick={(e) => handleLinkClick(e, '#facilities')} className="hover:text-[#E31B23] transition-colors">
                  Compound Facilities
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Membership & Passes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Membership
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={onOpenTrialModal} className="hover:text-[#E31B23] transition-colors text-left cursor-pointer">
                  7-Day Free Trial
                </button>
              </li>
              <li>
                <a href="#memberships" onClick={(e) => handleLinkClick(e, '#memberships')} className="hover:text-[#E31B23] transition-colors">
                  Membership Tiers
                </a>
              </li>
              <li>
                <a href="#personal-training" onClick={(e) => handleLinkClick(e, '#personal-training')} className="hover:text-[#E31B23] transition-colors">
                  Personal Training
                </a>
              </li>
              <li>
                <button onClick={onOpenLoginModal} className="hover:text-[#E31B23] transition-colors text-left cursor-pointer">
                  Member Portal Login
                </button>
              </li>
              <li>
                <a href="#schedule" onClick={(e) => handleLinkClick(e, '#schedule')} className="hover:text-[#E31B23] transition-colors">
                  Class Timetable
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Support &amp; FAQ
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-[#E31B23] transition-colors">
                  Contact Front Desk
                </a>
              </li>
              <li>
                <span className="hover:text-[#E31B23] transition-colors cursor-pointer" onClick={onOpenTrialModal}>
                  Membership Help &amp; Freeze
                </span>
              </li>
              <li>
                <span className="hover:text-[#E31B23] transition-colors cursor-pointer" onClick={onOpenTrialModal}>
                  Booking Assistance
                </span>
              </li>
              <li>
                <span className="hover:text-[#E31B23] transition-colors cursor-pointer" onClick={onOpenTrialModal}>
                  Corporate Wellness
                </span>
              </li>
              <li>
                <span className="hover:text-[#E31B23] transition-colors cursor-pointer" onClick={onOpenTrialModal}>
                  Guest Pass Policy
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E31B23]" />
                <a href="tel:5552342574" className="hover:text-white transition-colors">
                  (555) 234-ALPH
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E31B23]" />
                <a href="mailto:info@alphagymfitness.com" className="hover:text-white transition-colors">
                  info@alphagymfitness.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#E31B23]" />
                <span>24/7 All-Access Pass</span>
              </p>

              {/* Social icons */}
              <div className="pt-4 flex items-center space-x-3 text-white">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-[#111315] hover:bg-[#E31B23] flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-[#111315] hover:bg-[#E31B23] flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-lg bg-[#111315] hover:bg-[#E31B23] flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-[#1B1D20] flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            &copy; 2026 Alpha Gym &amp; Fitness. All rights reserved. Original Brand Identity.
          </div>
          <div className="flex items-center space-x-5 text-neutral-400">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Membership Agreement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
