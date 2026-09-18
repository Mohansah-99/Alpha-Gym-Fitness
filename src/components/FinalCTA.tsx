import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { ASSETS } from '../data/gymData';

interface FinalCTAProps {
  onOpenTrialModal: () => void;
  onExploreMemberships: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenTrialModal,
  onExploreMemberships,
}) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#090A0B] text-white overflow-hidden border-t border-neutral-800">
      {/* Background Image integrated into composition */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Alpha Gym & Fitness athlete"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0B] via-[#090A0B]/70 to-[#090A0B]"></div>
        {/* Athletic red glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E31B23]/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B1D20] border border-neutral-700 text-xs font-bold uppercase tracking-widest text-[#E31B23] mb-6">
          <Zap className="w-3.5 h-3.5 fill-[#E31B23]" />
          <span>NO EXCUSES • NO SHORTCUTS</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-white leading-none mb-6">
          YOUR STRONGER SELF <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31B23] via-[#F22B32] to-[#E31B23]">
            IS WAITING.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Start with a 7-day complimentary all-access trial and experience the coaching,
          community, and atmosphere of Alpha Gym &amp; Fitness for yourself.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <button
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto px-8 py-4 bg-[#E31B23] hover:bg-[#B91018] text-white font-display font-bold text-lg uppercase tracking-wider rounded-xl shadow-xl shadow-red-900/40 hover:shadow-red-700/60 transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>BOOK MY FREE TRIAL</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onExploreMemberships}
            className="w-full sm:w-auto px-7 py-4 bg-[#1B1D20] hover:bg-[#24272C] text-white border border-neutral-700 font-display font-bold text-lg uppercase tracking-wider rounded-xl transition-all cursor-pointer"
          >
            <span>VIEW MEMBERSHIPS</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E31B23]" />
            <span>Instant Digital Pass</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E31B23]" />
            <span>24/7 Facility Access</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E31B23]" />
            <span>No Long-Term Contract</span>
          </div>
        </div>
      </div>
    </section>
  );
};
