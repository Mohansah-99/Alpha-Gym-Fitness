import React from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { ARTICLES } from '../data/gymData';
import type { Article } from '../types';

interface BlogSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#111315]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEFEF] border border-neutral-300 text-xs font-bold uppercase tracking-widest text-[#E31B23] mb-3 shadow-xs">
              <BookOpen className="w-3.5 h-3.5" />
              <span>COACHING INTELLIGENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-[#090A0B] leading-tight">
              TRAIN <span className="text-[#E31B23]">SMARTER</span>
            </h2>
            <p className="mt-3 text-neutral-600 text-base max-w-xl">
              Evidence-based training mechanics, nutritional protocols, and recovery
              strategies written by our in-house physiologists.
            </p>
          </div>
        </div>

        {/* 4 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-[#F7F7F5] rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#090A0B]/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-medium mb-2">
                    <Clock className="w-3 h-3 text-[#E31B23]" />
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold uppercase tracking-wide text-[#090A0B] group-hover:text-[#E31B23] transition-colors leading-snug mb-2.5">
                    {article.title}
                  </h3>

                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectArticle(article)}
                  className="pt-3 border-t border-neutral-200/80 w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#090A0B] group-hover:text-[#E31B23] transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E31B23] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
