import React, { useState, useEffect } from 'react';
import { Flame, ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';
import { ASSETS } from '../data/gymData';

interface PromoBannerProps {
  onOpenTrialModal: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenTrialModal }) => {
  // Live promotional countdown ticker
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#090A0B] overflow-hidden py-16 sm:py-24 border-y border-neutral-800">
      {/* Dynamic diagonal angled backdrop shape */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.promo}
          alt="High intensity battle rope training at Alpha Gym"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-125"
        />
        {/* Angled athletic graphic slice in dark red / black */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0B] via-[#090A0B]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0B] via-transparent to-[#E31B23]/20"></div>

        {/* Diagonal decorative streak */}
        <div className="absolute -top-24 -right-24 w-96 h-[150%] bg-[#E31B23]/15 transform -rotate-12 pointer-events-none blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Eyebrow badge with countdown */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#E31B23] text-white text-xs font-black uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 fill-white" />
              LIMITED PASSES THIS WEEK
            </span>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold bg-[#111315]/90 border border-neutral-700 px-3 py-1 rounded-md text-white">
              <Clock className="w-3 h-3 text-[#E31B23]" />
              <span>Ends in:</span>
              <span className="text-[#E31B23]">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-none mb-4">
            READY TO GET <span className="text-[#E31B23]">STARTED?</span>
          </h2>

          <p className="text-lg sm:text-xl text-neutral-200 font-medium mb-3">
            Your first week starts with a 100% free trial. Experience our world-class coaches,
            cutting-edge strength floor, and recovery lounge with zero risk.
          </p>

          <p className="text-sm text-neutral-400 mb-8 max-w-lg">
            No credit card upfront. No sales pressure. Just 7 full days of pure athletic progression.
          </p>

          {/* CTA & Trust items */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenTrialModal}
              className="px-8 py-4 bg-[#E31B23] hover:bg-[#B91018] text-white font-display font-bold text-base uppercase tracking-wider rounded-xl shadow-2xl shadow-red-900/50 hover:shadow-red-700/60 transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>CLAIM YOUR FREE TRIAL</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-xs text-neutral-300 font-semibold px-2">
              <ShieldCheck className="w-4 h-4 text-[#E31B23]" />
              <span>Instant Confirmation • VIP Pass Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
