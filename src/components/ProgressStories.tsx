import React from 'react';
import { TrendingUp, Quote, CheckCircle } from 'lucide-react';
import { PROGRESS_STORIES } from '../data/gymData';

export const ProgressStories: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#111315] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1D20] border border-neutral-800 text-xs font-bold uppercase tracking-widest text-[#E31B23] mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>CASE STUDIES IN CONSISTENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
            PROGRESS YOU <span className="text-[#E31B23]">CAN FEEL</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-base">
            No extreme dehydrated photo shoots or unmaintainable gimmicks. Sustainable
            habits, progressive resistance, and lifelong athletic confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROGRESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-[#090A0B] rounded-2xl overflow-hidden border border-neutral-800/90 shadow-xl flex flex-col md:flex-row group"
            >
              {/* Member Image */}
              <div className="md:w-5/12 relative aspect-[4/5] md:aspect-auto overflow-hidden bg-neutral-900">
                <img
                  src={story.image}
                  alt={story.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#E31B23] text-white text-[10px] font-bold uppercase tracking-wider">
                    {story.timeframe}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-sm font-bold block">{story.name}</span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold uppercase text-white mb-2 leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                    {story.highlight}
                  </p>
                  <blockquote className="text-xs italic text-neutral-300 border-l-2 border-[#E31B23] pl-3 py-1 mb-5">
                    {story.quote}
                  </blockquote>
                </div>

                {/* Metrics */}
                <div className="pt-4 border-t border-neutral-800 grid grid-cols-3 gap-2">
                  {story.metrics.map((m) => (
                    <div key={m.label} className="bg-[#111315] p-2 rounded-lg text-center border border-neutral-800/80">
                      <div className="text-sm font-display font-bold text-[#E31B23]">
                        {m.value}
                      </div>
                      <div className="text-[9px] uppercase tracking-wider text-neutral-400 font-semibold mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
