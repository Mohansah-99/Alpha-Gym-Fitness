import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, Sparkles, Send } from 'lucide-react';
import type { LeadFormData } from '../types';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    goal: 'Get Stronger',
    preferredTime: 'Morning (5:30 AM - 9:00 AM)',
    preferredContact: 'SMS / Text Message',
    agreedToTerms: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof LeadFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = 'Please provide a valid phone number';
    }
    if (!formData.agreedToTerms) {
      errs.agreedToTerms = 'You must agree to continue';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-reliability client-side lead capture
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  return (
    <section id="lead-form" className="py-20 sm:py-28 bg-[#090A0B] text-white relative overflow-hidden">
      {/* Ambient red flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E31B23]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#111315] rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-2xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1D20] border border-neutral-700 text-xs font-bold uppercase tracking-widest text-[#E31B23] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CLAIM YOUR 7-DAY VIP ALL-ACCESS PASS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
              LET’S GET YOU <span className="text-[#E31B23]">STARTED</span>
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base">
              Fill out your details below to activate your instant 7-day complimentary
              pass. Our guest experience manager will prepare your digital locker key.
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-[#090A0B] rounded-2xl p-8 sm:p-10 text-center border border-emerald-500/40 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white mb-2">
                YOUR FREE TRIAL PASS IS ACTIVATED!
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base max-w-md mx-auto mb-6">
                Welcome to Alpha, <strong className="text-white">{formData.fullName}</strong>! We sent your digital check-in pass and confirmation to <strong className="text-[#E31B23]">{formData.email}</strong>.
              </p>
              <div className="p-4 bg-[#1B1D20] rounded-xl border border-neutral-800 max-w-md mx-auto text-xs text-neutral-300 text-left space-y-1.5 mb-6">
                <div>• <strong>Location:</strong> 104 Athletic Boulevard, Metro Center</div>
                <div>• <strong>Primary Goal:</strong> {formData.goal}</div>
                <div>• <strong>Preferred Window:</strong> {formData.preferredTime}</div>
                <div>• <strong>What to bring:</strong> Workout gear, athletic shoes &amp; government ID</div>
              </div>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    goal: 'Get Stronger',
                    preferredTime: 'Morning (5:30 AM - 9:00 AM)',
                    preferredContact: 'SMS / Text Message',
                    agreedToTerms: true,
                  });
                }}
                className="px-6 py-2.5 bg-[#E31B23] hover:bg-[#B91018] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Register Another Guest Pass
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Full Name <span className="text-[#E31B23]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#090A0B] border text-white placeholder-neutral-500 text-sm focus:outline-hidden focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-neutral-700 focus:border-[#E31B23] focus:ring-[#E31B23]/20'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Email Address <span className="text-[#E31B23]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#090A0B] border text-white placeholder-neutral-500 text-sm focus:outline-hidden focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-neutral-700 focus:border-[#E31B23] focus:ring-[#E31B23]/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Phone Number <span className="text-[#E31B23]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#090A0B] border text-white placeholder-neutral-500 text-sm focus:outline-hidden focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-neutral-700 focus:border-[#E31B23] focus:ring-[#E31B23]/20'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Fitness Goal Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090A0B] border border-neutral-700 text-white text-sm focus:outline-hidden focus:border-[#E31B23] focus:ring-2 focus:ring-[#E31B23]/20 transition-all cursor-pointer"
                  >
                    <option value="Get Stronger">Get Stronger (Compound Resistance)</option>
                    <option value="Lose Weight">Metabolic Fat Loss &amp; Conditioning</option>
                    <option value="Build Muscle">Build Muscle / Hypertrophy</option>
                    <option value="Improve Fitness">General Fitness &amp; Stamina</option>
                    <option value="Sports Performance">Athletic &amp; Sports Performance</option>
                    <option value="General Health">Longevity, Mobility &amp; Health</option>
                  </select>
                </div>

                {/* Preferred Training Time */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Preferred Training Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090A0B] border border-neutral-700 text-white text-sm focus:outline-hidden focus:border-[#E31B23] focus:ring-2 focus:ring-[#E31B23]/20 transition-all cursor-pointer"
                  >
                    <option value="Morning (5:30 AM - 9:00 AM)">Early Morning (5:30 AM - 9:00 AM)</option>
                    <option value="Mid-Day (11:00 AM - 2:00 PM)">Lunch / Mid-Day (11:00 AM - 2:00 PM)</option>
                    <option value="Evening (4:30 PM - 8:30 PM)">Evening Peak (4:30 PM - 8:30 PM)</option>
                    <option value="Late Night / 24/7">Late Night / 24/7 Flexible</option>
                  </select>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    value={formData.preferredContact}
                    onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090A0B] border border-neutral-700 text-white text-sm focus:outline-hidden focus:border-[#E31B23] focus:ring-2 focus:ring-[#E31B23]/20 transition-all cursor-pointer"
                  >
                    <option value="SMS / Text Message">SMS / Text Message (Fastest)</option>
                    <option value="Phone Call">Phone Call from Coach</option>
                    <option value="Email">Email Only</option>
                  </select>
                </div>
              </div>

              {/* Consent and Terms */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreedToTerms}
                    onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded-sm bg-[#090A0B] border-neutral-700 text-[#E31B23] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#E31B23]"
                  />
                  <span className="text-xs text-neutral-400 leading-normal">
                    I agree to receive communications regarding my 7-day trial pass and fitness consultation.
                    No spam, ever. You can unsubscribe at any time.
                  </span>
                </label>
                {errors.agreedToTerms && (
                  <p className="mt-1 text-xs text-red-400">{errors.agreedToTerms}</p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#E31B23] hover:bg-[#B91018] disabled:bg-neutral-800 text-white font-display font-bold text-lg uppercase tracking-wider rounded-xl shadow-xl shadow-red-900/40 hover:shadow-red-700/60 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>ACTIVATING PASS...</span>
                  ) : (
                    <>
                      <span>GET MY FREE TRIAL</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 text-center">
                <ShieldCheck className="w-4 h-4 text-[#E31B23]" />
                <span>100% Free • No Credit Card Required • Zero Pressure Policy</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
