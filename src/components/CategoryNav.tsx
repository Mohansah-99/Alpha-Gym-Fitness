import React, { useState } from 'react';
import {
  Dumbbell,
  Activity,
  UserCheck,
  Users,
  Flame,
  Shield,
  HeartPulse,
  Apple,
  CreditCard,
  ChevronRight,
} from 'lucide-react';
import { QUICK_CATEGORIES } from '../data/gymData';

interface CategoryNavProps {
  onSelectCategory: (categoryId: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  UserCheck: <UserCheck className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  HeartPulse: <HeartPulse className="w-5 h-5" />,
  Apple: <Apple className="w-5 h-5" />,
  CreditCard: <CreditCard className="w-5 h-5" />,
};

export const CategoryNav: React.FC<CategoryNavProps> = ({ onSelectCategory }) => {
  const [activeId, setActiveId] = useState<string>('strength');

  const handleClick = (id: string) => {
    setActiveId(id);
    onSelectCategory(id);
  };

  return (
    <section className="bg-white border-y border-neutral-200 py-4 sm:py-5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header label for scannability */}
        <div className="flex items-center justify-between mb-3 text-xs uppercase font-bold tracking-wider text-[#36383B]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23]"></span>
            Explore Training &amp; Services
          </span>
          <span className="hidden sm:inline text-neutral-400 font-normal normal-case text-xs">
            Tap a category to navigate
          </span>
        </div>

        {/* Scrollable Container on Mobile, Grid/Flex on Desktop */}
        <div className="flex items-center space-x-3 sm:space-x-4 overflow-x-auto pb-2 scrollbar-none sm:justify-between">
          {QUICK_CATEGORIES.map((cat) => {
            const isActive = activeId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleClick(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl transition-all duration-200 text-left group border ${
                  isActive
                    ? 'bg-[#090A0B] text-white border-[#E31B23] shadow-md'
                    : 'bg-[#F7F7F5] hover:bg-[#EFEFEF] text-[#36383B] border-neutral-200/80 hover:border-neutral-300'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                    isActive
                      ? 'bg-[#E31B23] text-white'
                      : 'bg-white text-[#111315] group-hover:text-[#E31B23] shadow-xs'
                  }`}
                >
                  {iconMap[cat.icon]}
                </div>
                <div className="flex flex-col whitespace-nowrap pr-1">
                  <span
                    className={`text-xs font-bold uppercase tracking-wide transition-colors ${
                      isActive ? 'text-white' : 'text-[#111315] group-hover:text-[#E31B23]'
                    }`}
                  >
                    {cat.name}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-medium hidden md:block">
                    {cat.desc.split('&')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
