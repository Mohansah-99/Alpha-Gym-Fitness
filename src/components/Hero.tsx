import React from 'react';
import { ChevronDown, ArrowRight, ShieldCheck, Dumbbell, Award, Flame } from 'lucide-react';
import { ASSETS } from '../data/gymData';

interface HeroProps {
  onOpenTrialModal: () => void;
  onExploreMemberships: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenTrialModal,
  onExploreMemberships,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center bg-[#090A0B] overflow-hidden"
    >
      {/* Background Photography with directional lighting and dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Athletes training at Alpha Gym & Fitness"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center lg:object-right filter brightness-[0.75] contrast-[1.1] scale-100 transition-transform duration-1000"
        />
        {/* Editorial Gradients: Dark heavy vignette on left for clear typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0B] via-[#090A0B]/85 to-transparent lg:w-3/4"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0B] via-transparent to-black/40"></div>
        {/* Subtle red ambient glow accent */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#E31B23]/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Small Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B1D20]/90 border border-white/10 text-white text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#E31B23] animate-ping"></span>
            <span className="text-[#E31B23]">YOUR STRONGER ERA</span>
            <span className="text-neutral-400">•</span>
            <span>STARTS TODAY</span>
          </div>

          {/* Massive Display Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold uppercase tracking-tight text-white leading-[0.92] mb-6 drop-shadow-md">
            TRAIN HARDER.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31B23] via-[#F22B32] to-[#E31B23]">
              LIVE STRONGER.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed mb-8 max-w-xl">
            Premium training, expert coaching, and a community built to help you
            break through plateaus and become your strongest physical self.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenTrialModal}
              id="hero-primary-cta"
              className="px-8 py-4 bg-[#E31B23] hover:bg-[#B91018] text-white font-display font-bold text-base sm:text-lg uppercase tracking-wider rounded-lg shadow-xl shadow-red-900/30 hover:shadow-red-800/50 transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>BOOK A FREE TRIAL</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreMemberships}
              id="hero-secondary-cta"
              className="px-7 py-4 bg-[#1B1D20]/80 hover:bg-[#24272C] text-white border border-neutral-700 hover:border-neutral-500 font-display font-bold text-base sm:text-lg uppercase tracking-wider rounded-lg transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>EXPLORE MEMBERSHIPS</span>
            </button>
          </div>

          {/* 3 Supporting Benefits */}
          <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
            <div className="flex items-center gap-2 text-neutral-300">
              <div className="w-8 h-8 rounded-md bg-[#1B1D20] flex items-center justify-center flex-shrink-0 text-[#E31B23]">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Expert Coaches
              </span>
            </div>

            <div className="flex items-center gap-2 text-neutral-300">
              <div className="w-8 h-8 rounded-md bg-[#1B1D20] flex items-center justify-center flex-shrink-0 text-[#E31B23]">
                <Dumbbell className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Modern Equipment
              </span>
            </div>

            <div className="flex items-center gap-2 text-neutral-300">
              <div className="w-8 h-8 rounded-md bg-[#1B1D20] flex items-center justify-center flex-shrink-0 text-[#E31B23]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Flexible Passes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
          Scroll Down
        </span>
        <ChevronDown className="w-4 h-4 text-[#E31B23] animate-bounce" />
      </div>
    </section>
  );
};
