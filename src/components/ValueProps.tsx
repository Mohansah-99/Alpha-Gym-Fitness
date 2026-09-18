import React from 'react';
import { Award, Cpu, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { VALUE_PROPS } from '../data/gymData';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6 text-[#E31B23]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#E31B23]" />,
  Users: <Users className="w-6 h-6 text-[#E31B23]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#E31B23]" />,
};

export const ValueProps: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F7F7F5] text-[#111315]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-bold uppercase tracking-widest text-[#E31B23] mb-3 shadow-xs">
            <span>THE ALPHA ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-[#090A0B] leading-tight">
            MORE THAN A GYM.{' '}
            <span className="text-[#E31B23]">A BETTER WAY TO TRAIN.</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg font-normal leading-relaxed">
            We combined high-performance athletic engineering with an inclusive,
            supportive environment so you can train with purpose every single visit.
          </p>
        </div>

        {/* 4 Premium Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPS.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-[#E31B23]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#090A0B] flex items-center justify-center mb-5 group-hover:bg-[#111315] transition-colors shadow-sm">
                  {iconMap[item.icon]}
                </div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#E31B23] uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.highlight}</span>
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-wide text-[#090A0B] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-semibold">
                <span>Pillar 0{index + 1}</span>
                <span className="w-6 h-0.5 bg-neutral-200 group-hover:w-10 group-hover:bg-[#E31B23] transition-all"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
