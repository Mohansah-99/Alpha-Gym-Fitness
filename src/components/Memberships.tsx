import React, { useState } from 'react';
import { Check, Zap, Sparkles, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { MEMBERSHIPS } from '../data/gymData';
import type { MembershipPlan } from '../types';

interface MembershipsProps {
  onSelectPlan: (plan: MembershipPlan) => void;
  onOpenTrialModal: () => void;
}

export const Memberships: React.FC<MembershipsProps> = ({
  onSelectPlan,
  onOpenTrialModal,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="memberships" className="py-20 sm:py-28 bg-white text-[#111315]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFEFEF] border border-neutral-300 text-xs font-bold uppercase tracking-widest text-[#E31B23] mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE • NO HIDDEN FEES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-[#090A0B] leading-tight">
            CHOOSE YOUR <span className="text-[#E31B23]">WAY TO TRAIN</span>
          </h2>
          <p className="mt-3 text-neutral-600 text-base sm:text-lg">
            Straightforward pricing with zero locked-in long term contracts. Upgrade,
            pause, or cancel anytime.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-[#EFEFEF] border border-neutral-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#090A0B] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#E31B23] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <span>Annual (Save 20%)</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-extrabold">2 MO FREE</span>
            </button>
          </div>
        </div>

        {/* 7-Day Trial Promotional Strip */}
        <div className="mb-12 max-w-4xl mx-auto bg-gradient-to-r from-[#090A0B] via-[#1B1D20] to-[#090A0B] text-white rounded-2xl p-4 sm:p-5 border border-neutral-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#E31B23] flex items-center justify-center flex-shrink-0 text-white shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold uppercase text-base text-white tracking-wide">
                  7-DAY COMPLIMENTARY TRIAL PASS
                </span>
                <span className="hidden md:inline px-2 py-0.5 rounded text-[10px] font-bold bg-[#E31B23] text-white">
                  RISK-FREE
                </span>
              </div>
              <p className="text-xs text-neutral-300">
                Experience the equipment, classes, and recovery suites first. No long-term commitment required for the trial.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenTrialModal}
            className="flex-shrink-0 px-5 py-2.5 bg-[#E31B23] hover:bg-[#B91018] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all hover:scale-105"
          >
            Claim Free Trial
          </button>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {MEMBERSHIPS.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
            const isPop = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                  isPop
                    ? 'bg-[#090A0B] text-white border-2 border-[#E31B23] shadow-2xl lg:-translate-y-2.5 p-8'
                    : 'bg-[#F7F7F5] text-[#111315] border border-neutral-300/80 hover:border-neutral-400 p-8 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Badge */}
                {isPop && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E31B23] text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                {/* Top Section */}
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3
                        className={`text-2xl font-display font-extrabold uppercase tracking-wider ${
                          isPop ? 'text-white' : 'text-[#090A0B]'
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p className={`text-xs mt-1 ${isPop ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        {plan.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-neutral-700/50">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#E31B23]">$</span>
                      <span
                        className={`text-5xl font-display font-black tracking-tight ${
                          isPop ? 'text-white' : 'text-[#090A0B]'
                        }`}
                      >
                        {price}
                      </span>
                      <span className={`text-xs font-semibold uppercase ${isPop ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        / Month
                      </span>
                    </div>
                    <span className="text-[11px] text-neutral-400 block mt-1">
                      {billingCycle === 'monthly' ? 'Billed month-to-month' : 'Billed annually ($' + price * 12 + '/yr)'}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <div className={`text-[11px] font-bold uppercase tracking-wider ${isPop ? 'text-neutral-300' : 'text-neutral-700'}`}>
                      What's Included:
                    </div>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isPop ? 'bg-[#E31B23] text-white' : 'bg-[#E31B23]/10 text-[#E31B23]'
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={`text-xs leading-relaxed font-medium ${isPop ? 'text-neutral-300' : 'text-neutral-700'}`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div className="pt-6 border-t border-neutral-700/40">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 rounded-xl font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isPop
                        ? 'bg-[#E31B23] hover:bg-[#B91018] text-white shadow-lg hover:shadow-red-800/40 transform hover:-translate-y-0.5'
                        : 'bg-[#090A0B] hover:bg-[#1B1D20] text-white hover:text-white'
                    }`}
                  >
                    <span>JOIN WITH {plan.name.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[10px] text-neutral-400 mt-2">
                    7-Day money-back guarantee • No signup fee
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
