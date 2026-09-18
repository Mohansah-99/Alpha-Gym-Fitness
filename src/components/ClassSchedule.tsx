import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Flame,
  ArrowRight,
  Filter,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { CLASSES } from '../data/gymData';
import type { FitnessClass } from '../types';

interface ClassScheduleProps {
  onBookClass: (cls: FitnessClass) => void;
}

const DAYS: ('Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun')[] = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
];

const CATEGORIES = ['All', 'HIIT', 'Strength', 'Yoga', 'Boxing', 'Functional', 'Spin'];

export const ClassSchedule: React.FC<ClassScheduleProps> = ({ onBookClass }) => {
  const [selectedDay, setSelectedDay] = useState<'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'>('Mon');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredClasses = CLASSES.filter((c) => {
    const matchDay = c.day === selectedDay;
    const matchCategory = selectedCategory === 'All' || c.category === selectedCategory;
    return matchDay && matchCategory;
  });

  return (
    <section id="schedule" className="py-20 sm:py-28 bg-[#090A0B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1D20] border border-neutral-800 text-xs font-bold uppercase tracking-widest text-[#E31B23] mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>LIVE WEEKLY TIMETABLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
              FIND YOUR <span className="text-[#E31B23]">NEXT SESSION</span>
            </h2>
            <p className="mt-3 text-neutral-400 text-base max-w-xl">
              Over 50 coached group sessions weekly across strength, conditioning, combat,
              and athletic mobility. Reserve your spot in advance to guarantee equipment.
            </p>
          </div>

          {/* Quick Indicator */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 bg-[#111315] border border-neutral-800 px-4 py-2 rounded-xl self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Real-time spot counts updated</span>
          </div>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {DAYS.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex-1 min-w-[72px] py-3.5 px-4 rounded-xl font-display font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-200 text-center border cursor-pointer ${
                  isSelected
                    ? 'bg-[#E31B23] text-white border-[#E31B23] shadow-lg shadow-red-900/30 -translate-y-0.5'
                    : 'bg-[#111315] text-neutral-300 border-neutral-800/80 hover:bg-[#1B1D20] hover:text-white'
                }`}
              >
                <span>{day}</span>
              </button>
            );
          })}
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          <span className="text-xs uppercase font-bold text-neutral-500 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-white text-[#090A0B]'
                    : 'bg-[#1B1D20] text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Classes Display (Desktop Table / Mobile Stacked Cards) */}
        {filteredClasses.length === 0 ? (
          <div className="bg-[#111315] rounded-2xl p-12 text-center border border-neutral-800">
            <p className="text-neutral-400 font-medium">No sessions scheduled for this category on {selectedDay}.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 px-4 py-2 bg-[#1B1D20] text-xs font-bold uppercase tracking-wider rounded-lg text-[#E31B23] hover:text-white"
            >
              Reset Category Filter
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredClasses.map((cls) => {
              const spotsPercentage = Math.round((cls.spotsLeft / cls.spotsTotal) * 100);
              const isUrgent = cls.spotsLeft <= 3;

              return (
                <div
                  key={cls.id}
                  className="bg-[#111315] hover:bg-[#181A1D] border border-neutral-800/90 hover:border-neutral-700 rounded-xl p-4 sm:p-5 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                >
                  {/* Left: Time & Room */}
                  <div className="flex items-center gap-4 min-w-[200px]">
                    <div className="w-12 h-12 rounded-xl bg-[#090A0B] border border-neutral-800 flex flex-col items-center justify-center text-center">
                      <Clock className="w-4 h-4 text-[#E31B23] mb-0.5" />
                      <span className="text-[9px] font-bold text-neutral-400 uppercase leading-none">
                        {cls.duration}
                      </span>
                    </div>
                    <div>
                      <div className="text-lg font-display font-extrabold text-white tracking-wide">
                        {cls.time}
                      </div>
                      <div className="text-xs text-neutral-400 font-medium">
                        {cls.room}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Class Name & Trainer */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-display font-bold uppercase tracking-wide text-white group-hover:text-[#E31B23] transition-colors">
                        {cls.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#1B1D20] text-neutral-300 border border-neutral-800">
                        {cls.category}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        cls.intensity === 'High' ? 'bg-red-950/70 text-red-400 border border-red-900/50' :
                        cls.intensity === 'Challenging' ? 'bg-amber-950/70 text-amber-400 border border-amber-900/50' :
                        'bg-emerald-950/70 text-emerald-400 border border-emerald-900/50'
                      }`}>
                        {cls.intensity} Intensity
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <User className="w-3.5 h-3.5 text-[#E31B23]" />
                      <span>Led by Coach <strong className="text-neutral-200">{cls.trainer}</strong></span>
                    </div>
                  </div>

                  {/* Right: Availability & Book CTA */}
                  <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-neutral-800">
                    <div className="text-right">
                      <div className="text-xs font-bold text-neutral-200 flex items-center justify-end gap-1.5">
                        <span className={isUrgent ? 'text-[#E31B23] font-black' : 'text-neutral-300'}>
                          {cls.spotsLeft} Spots Left
                        </span>
                        <span className="text-[10px] text-neutral-500 font-normal">/ {cls.spotsTotal}</span>
                      </div>
                      <div className="w-24 h-1.5 bg-neutral-800 rounded-full overflow-hidden mt-1.5">
                        <div
                          className={`h-full rounded-full ${
                            isUrgent ? 'bg-[#E31B23]' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${spotsPercentage}%` }}
                        ></div>
                      </div>
                    </div>

                    <button
                      onClick={() => onBookClass(cls)}
                      className="px-5 py-2.5 bg-[#E31B23] hover:bg-[#B91018] text-white font-display font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <span>BOOK CLASS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
