import React from 'react';
import { Award, ArrowRight, Instagram, CheckCircle2 } from 'lucide-react';
import { TRAINERS } from '../data/gymData';
import type { Trainer } from '../types';

interface TrainersProps {
  onSelectTrainer: (trainer: Trainer) => void;
  onOpenConsultationModal: () => void;
}

export const Trainers: React.FC<TrainersProps> = ({
  onSelectTrainer,
  onOpenConsultationModal,
}) => {
  return (
    <section id="trainers" className="py-20 sm:py-28 bg-[#F7F7F5] text-[#111315]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-300 text-xs font-bold uppercase tracking-widest text-[#E31B23] mb-3 shadow-xs">
              <Award className="w-3.5 h-3.5" />
              <span>THE ALPHA COACHING STAFF</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-[#090A0B] leading-tight">
              MEET YOUR <span className="text-[#E31B23]">COACHES</span>
            </h2>
            <p className="mt-3 text-neutral-600 text-base max-w-xl">
              Our career trainers hold collegiate physiology degrees and internationally accredited
              certifications. Zero sales reps posing as coaches—just real movement mastery.
            </p>
          </div>

          <button
            onClick={onOpenConsultationModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#090A0B] hover:bg-[#1B1D20] text-white text-xs font-bold uppercase tracking-wider transition-all self-start md:self-auto cursor-pointer"
          >
            <span>Match With a Coach</span>
            <ArrowRight className="w-4 h-4 text-[#E31B23]" />
          </button>
        </div>

        {/* 4 Trainer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {TRAINERS.map((coach) => (
            <div
              key={coach.id}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-[#E31B23]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image with overlay badge */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                <img
                  src={coach.image}
                  alt={coach.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Experience Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                    {coach.experience}
                  </span>
                </div>

                {/* Name & Specialty floating above bottom */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold text-[#E31B23] uppercase tracking-wider block">
                    {coach.role}
                  </span>
                  <h3 className="text-xl font-display font-bold uppercase text-white tracking-wide">
                    {coach.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-neutral-700 mb-2">
                    <span className="text-neutral-500 font-normal">Specialty:</span> {coach.specialty}
                  </div>
                  <div className="space-y-1 mb-4">
                    {coach.certifications.slice(0, 2).map((cert) => (
                      <div key={cert} className="flex items-center gap-1.5 text-[11px] text-neutral-600">
                        <CheckCircle2 className="w-3 h-3 text-[#E31B23] flex-shrink-0" />
                        <span className="truncate">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectTrainer(coach)}
                    className="text-xs font-bold uppercase tracking-wider text-[#090A0B] hover:text-[#E31B23] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E31B23]" />
                  </button>

                  {coach.instagram && (
                    <span className="text-neutral-400 hover:text-[#E31B23] text-xs flex items-center gap-1 transition-colors">
                      <Instagram className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
