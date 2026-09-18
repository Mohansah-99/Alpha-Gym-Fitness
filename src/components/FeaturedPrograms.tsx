import React from 'react';
import { Clock, BarChart, ArrowRight, Sparkles } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';
import type { Program } from '../types';

interface FeaturedProgramsProps {
  onSelectProgram: (program: Program) => void;
  onOpenTrialModal: () => void;
}

export const FeaturedPrograms: React.FC<FeaturedProgramsProps> = ({
  onSelectProgram,
  onOpenTrialModal,
}) => {
  return (
    <section id="programs" className="py-20 sm:py-28 bg-[#090A0B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1D20] border border-neutral-800 text-xs font-bold uppercase tracking-widest text-[#E31B23] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STRUCTURED ATHLETIC PATHWAYS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
              FEATURED TRAINING <span className="text-[#E31B23]">PROGRAMS</span>
            </h2>
            <p className="mt-3 text-neutral-400 text-base max-w-xl">
              Scientifically periodized coaching programs built for real biological
              adaptation—whether your priority is raw power, fat loss, or longevity.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenTrialModal}
              className="text-xs uppercase font-extrabold tracking-wider text-white hover:text-[#E31B23] flex items-center gap-1.5 transition-colors group cursor-pointer"
            >
              <span>Explore All Pathways</span>
              <ArrowRight className="w-4 h-4 text-[#E31B23] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 6 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="bg-[#111315] rounded-2xl overflow-hidden border border-neutral-800/80 hover:border-[#E31B23]/60 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:-translate-y-1.5"
            >
              {/* Image Container with category overlay tag */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={prog.image}
                  alt={prog.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-black/30"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-[#090A0B]/85 backdrop-blur-md border border-neutral-700 text-white text-[11px] font-bold uppercase tracking-wider">
                    {prog.category}
                  </span>
                </div>

                {/* Difficulty & Duration Pills */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-black/60 backdrop-blur-xs font-semibold text-[11px]">
                    <BarChart className="w-3 h-3 text-[#E31B23]" />
                    {prog.difficulty}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-black/60 backdrop-blur-xs font-semibold text-[11px]">
                    <Clock className="w-3 h-3 text-[#E31B23]" />
                    {prog.duration}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-wide text-white group-hover:text-[#E31B23] transition-colors mb-2">
                    {prog.name}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-5">
                    {prog.description}
                  </p>

                  {/* Focus Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {prog.focus.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#1B1D20] text-neutral-300 border border-neutral-800"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
                    {prog.schedulePreview.split('at')[0]}
                  </span>
                  <button
                    onClick={() => onSelectProgram(prog)}
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#E31B23] hover:text-white transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                  >
                    <span>EXPLORE PROGRAM</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
