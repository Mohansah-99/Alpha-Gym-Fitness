import React from 'react';
import {
  CheckCircle,
  Calendar,
  UserCheck,
  Target,
  Utensils,
  LineChart,
  ArrowRight,
} from 'lucide-react';
import { ASSETS } from '../data/gymData';

interface PersonalTrainingProps {
  onOpenConsultationModal: () => void;
}

const features = [
  {
    icon: <UserCheck className="w-4 h-4 text-[#E31B23]" />,
    title: 'One-on-One Dedicated Coaching',
    desc: 'Direct supervision from experienced movement specialists who correct form in real time.',
  },
  {
    icon: <Target className="w-4 h-4 text-[#E31B23]" />,
    title: 'Customized Periodized Training Plans',
    desc: 'Workouts engineered specifically around your schedule, joint history, and athletic targets.',
  },
  {
    icon: <LineChart className="w-4 h-4 text-[#E31B23]" />,
    title: 'Bi-Weekly InBody Scans & Metric Tracking',
    desc: 'Concrete data on skeletal muscle mass, visceral fat, and metabolic adaptation.',
  },
  {
    icon: <Utensils className="w-4 h-4 text-[#E31B23]" />,
    title: 'Precision Macro & Nutrition Guidance',
    desc: 'Sustainable fueling strategies that match your caloric output without crash diets.',
  },
  {
    icon: <CheckCircle className="w-4 h-4 text-[#E31B23]" />,
    title: 'Functional Mobility & Recovery Integration',
    desc: 'Prehab routines and sauna/cold-water protocols to keep you injury-free and lifting consistently.',
  },
];

export const PersonalTraining: React.FC<PersonalTrainingProps> = ({
  onOpenConsultationModal,
}) => {
  return (
    <section id="personal-training" className="py-20 sm:py-28 bg-[#111315] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Professional Trainer Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl group">
              <img
                src={ASSETS.trainerLead}
                alt="Alpha Gym Head Coach Marcus Vance"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[4/5] filter brightness-95 group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0B] via-transparent to-transparent"></div>

              {/* Floating Credential Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#090A0B]/90 backdrop-blur-md border border-neutral-700/80 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase font-extrabold tracking-wider text-[#E31B23]">
                      Head of Coaching
                    </div>
                    <div className="text-xl font-display font-bold uppercase text-white">
                      Marcus Vance, CSCS
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      12+ Years Developing Collegiate &amp; Executive Athletes
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#E31B23] flex items-center justify-center text-white font-bold">
                    1-on-1
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative red square accent */}
            <div className="hidden lg:block absolute -top-4 -left-4 w-24 h-24 border-2 border-[#E31B23]/40 rounded-xl -z-10"></div>
          </div>

          {/* Right Column: Editorial Details */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1D20] border border-neutral-800 text-xs font-bold uppercase tracking-widest text-[#E31B23] mb-4">
              <span>ELITE PERSONAL COACHING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight text-white leading-tight mb-5">
              YOUR GOAL. YOUR PLAN.{' '}
              <span className="text-[#E31B23]">YOUR COACH.</span>
            </h2>

            <p className="text-neutral-300 text-base leading-relaxed mb-8">
              Generic workout apps and cookie-cutter routines lead to stagnation. At
              Alpha, your personal coach conducts comprehensive biomechanical assessments,
              builds a customized roadmap, and holds you strictly accountable to your potential.
            </p>

            {/* Feature list */}
            <div className="space-y-4 mb-9">
              {features.map((feat) => (
                <div key={feat.title} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1B1D20] border border-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-white">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultationModal}
                className="px-8 py-4 bg-[#E31B23] hover:bg-[#B91018] text-white font-display font-bold text-base uppercase tracking-wider rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK A CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-neutral-400 text-center sm:text-left">
                Includes complimentary movement &amp; body composition assessment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
