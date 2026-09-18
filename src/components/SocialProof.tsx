import React from 'react';
import { Star, ShieldCheck, Trophy, Users, Calendar, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F7F5] text-[#111315]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Banner */}
        <div className="bg-[#090A0B] text-white rounded-2xl p-8 sm:p-10 mb-16 border border-neutral-800 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E31B23]">
              COMMUNITY IMPACT METRICS
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wide mt-1">
              PROVEN RESULTS ACROSS OUR ATHLETIC ROSTER
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
            <div className="pt-4 lg:pt-0">
              <div className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                4.9<span className="text-[#E31B23]">/5</span>
              </div>
              <div className="flex justify-center my-1.5 text-[#E31B23]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#E31B23]" />
                ))}
              </div>
              <div className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                Member Satisfaction Rating
              </div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                1,500<span className="text-[#E31B23]">+</span>
              </div>
              <div className="flex justify-center my-1.5 text-neutral-500">
                <Users className="w-4 h-4 text-[#E31B23]" />
              </div>
              <div className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                Active Members
              </div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                50<span className="text-[#E31B23]">+</span>
              </div>
              <div className="flex justify-center my-1.5 text-neutral-500">
                <Calendar className="w-4 h-4 text-[#E31B23]" />
              </div>
              <div className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                Weekly Coached Classes
              </div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                12<span className="text-[#E31B23]">+</span>
              </div>
              <div className="flex justify-center my-1.5 text-neutral-500">
                <Award className="w-4 h-4 text-[#E31B23]" />
              </div>
              <div className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                Certified Career Coaches
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-300 text-xs font-bold uppercase tracking-widest text-[#E31B23] mb-3 shadow-xs">
            <Trophy className="w-3.5 h-3.5" />
            <span>AUTHENTIC MEMBER TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-[#090A0B] leading-tight">
            REAL PEOPLE. <span className="text-[#E31B23]">REAL PROGRESS.</span>
          </h2>
          <p className="mt-3 text-neutral-600 text-base">
            No paid celebrity spokespeople or staged catalog actors. Read how real members
            integrated strength and discipline into their everyday lives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#E31B23] mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#E31B23]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-neutral-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div>
                {/* Goal Achieved Pill */}
                <div className="p-2.5 rounded-lg bg-[#F7F7F5] border border-neutral-200 mb-4">
                  <span className="text-[10px] uppercase font-bold text-[#E31B23] tracking-wider block">
                    Outcome Achieved:
                  </span>
                  <span className="text-xs font-bold text-[#090A0B]">
                    {t.achievement}
                  </span>
                </div>

                {/* Member Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-neutral-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#E31B23]"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-[#090A0B]">
                        {t.name}
                      </span>
                      {t.verified && (
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      )}
                    </div>
                    <span className="text-[10px] text-neutral-500 block">
                      {t.membershipType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
