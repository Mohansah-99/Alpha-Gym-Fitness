import React, { useState } from 'react';
import { Eye, ShieldCheck, Dumbbell, Sparkles } from 'lucide-react';
import { FACILITIES } from '../data/gymData';
import type { Facility } from '../types';

interface FacilitiesProps {
  onSelectFacility?: (fac: Facility) => void;
  onOpenTrialModal: () => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenTrialModal }) => {
  const [activeFacility, setActiveFacility] = useState<Facility | null>(null);

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-white text-[#111315]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEFEF] border border-neutral-300 text-xs font-bold uppercase tracking-widest text-[#E31B23] mb-3">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>28,000 SQ. FT. ATHLETIC COMPOUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-[#090A0B] leading-tight">
            TRAIN IN AN ENVIRONMENT{' '}
            <span className="text-[#E31B23]">BUILT FOR PROGRESS</span>
          </h2>
          <p className="mt-3 text-neutral-600 text-base sm:text-lg">
            Purpose-engineered zones built without compromise. Every barbell calibrated,
            every rack spaced for focus, and dedicated recovery pods for your downtime.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((fac, idx) => {
            const isFeatured = idx === 0;

            return (
              <div
                key={fac.id}
                onClick={() => setActiveFacility(fac)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                {/* Background Image */}
                <img
                  src={fac.image}
                  alt={fac.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 contrast-105"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0B]/95 via-[#090A0B]/40 to-transparent"></div>

                {/* Top Specs Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-[#090A0B]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                    {fac.specs.split('•')[0].trim()}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-wide text-white group-hover:text-[#E31B23] transition-colors mb-1.5">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 max-w-xl">
                    {fac.subtitle}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400 border-t border-white/10 pt-2.5">
                    <span className="font-semibold text-neutral-200">
                      {fac.specs}
                    </span>
                    <span className="text-[#E31B23] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Explore</span> →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Facility CTA Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#F7F7F5] border border-neutral-200 p-4 sm:px-8 rounded-2xl">
            <span className="text-sm font-semibold text-neutral-700">
              Want to see the equipment in person before deciding?
            </span>
            <button
              onClick={onOpenTrialModal}
              className="px-6 py-2.5 bg-[#090A0B] hover:bg-[#E31B23] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Schedule a Facility Walkthrough
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
