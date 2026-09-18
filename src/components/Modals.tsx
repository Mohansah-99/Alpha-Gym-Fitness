import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Dumbbell,
  Award,
  Sparkles,
  Lock,
} from 'lucide-react';
import type { Program, Trainer, FitnessClass, Article, MembershipPlan } from '../types';
import { PROGRAMS, CLASSES, TRAINERS, ARTICLES } from '../data/gymData';

/* ----------------------------------------------------
   1. FREE TRIAL BOOKING MODAL
----------------------------------------------------- */
interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: MembershipPlan | null;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  initialPlan,
}) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: 'Tomorrow Morning',
    experience: 'Intermediate',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setStep('confirmed');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#111315] text-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-neutral-800 shadow-2xl relative">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E31B23]/15 text-[#E31B23] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>7-DAY FREE ACCESS PASS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white mb-2">
              START YOUR TRIAL
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              {initialPlan
                ? `Selected pathway: ${initialPlan.name}. Experience full access with zero risk.`
                : 'Experience the equipment, coaching, and recovery lounge with zero cost.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-bold text-neutral-300 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#090A0B] border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#E31B23]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-neutral-300 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="jordan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#090A0B] border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#E31B23]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-neutral-300 mb-1.5">
                  Phone (For Digital Keycard)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#090A0B] border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#E31B23]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase font-bold text-neutral-300 mb-1.5">
                    First Visit
                  </label>
                  <select
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#090A0B] border border-neutral-700 text-xs text-white"
                  >
                    <option value="Today">Today (Open 24/7)</option>
                    <option value="Tomorrow Morning">Tomorrow Morning</option>
                    <option value="This Weekend">This Weekend</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-neutral-300 mb-1.5">
                    Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#090A0B] border border-neutral-700 text-xs text-white"
                  >
                    <option value="Beginner">First Time in Gym</option>
                    <option value="Intermediate">Intermediate Lifter</option>
                    <option value="Advanced">Advanced Athlete</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#E31B23] hover:bg-[#B91018] text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>ACTIVATE 7-DAY PASS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="block text-center text-[10px] text-neutral-500 mt-2">
                  Instant confirmation • No credit card required
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">
              PASS READY, {formData.name.toUpperCase()}!
            </h3>
            <p className="text-xs text-neutral-300 mb-6">
              Your 7-day complimentary pass QR code has been dispatched to{' '}
              <strong className="text-[#E31B23]">{formData.email}</strong>. Show this screen or your email confirmation at the front desk.
            </p>

            {/* Digital Pass Card */}
            <div className="bg-[#090A0B] border border-neutral-700 rounded-xl p-4 text-left mb-6 font-mono text-xs">
              <div className="flex justify-between border-b border-neutral-800 pb-2 text-[10px] text-neutral-400">
                <span>PASS ID: #ALP-7DAY-{Math.floor(100000 + Math.random() * 900000)}</span>
                <span className="text-emerald-400">ACTIVE</span>
              </div>
              <div className="py-2.5">
                <div className="text-white font-bold">{formData.name}</div>
                <div className="text-neutral-400 text-[11px]">VIP 7-Day All-Access Pass</div>
                <div className="text-neutral-400 text-[11px]">Valid starting: {formData.preferredDate}</div>
              </div>
              <div className="text-center pt-2 border-t border-neutral-800 text-[#E31B23] font-bold">
                ||||| | |||| ||| ||||||| |||
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-[#E31B23] hover:bg-[#B91018] text-white text-xs font-bold uppercase tracking-wider rounded-lg"
            >
              Done &amp; Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   2. MEMBER LOGIN PORTAL MODAL
----------------------------------------------------- */
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrial: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onOpenTrial }) => {
  const [tab, setTab] = useState<'login' | 'status'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#111315] text-white rounded-2xl max-w-md w-full p-6 sm:p-8 border border-neutral-800 shadow-2xl relative">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-[#E31B23] flex items-center justify-center text-white font-black">
            A
          </div>
          <div>
            <h3 className="text-xl font-display font-bold uppercase text-white leading-tight">
              ALPHA MEMBER PORTAL
            </h3>
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
              24/7 Keyless Check-in &amp; Bookings
            </span>
          </div>
        </div>

        {loggedIn ? (
          <div className="py-4">
            <div className="bg-[#090A0B] rounded-xl p-5 border border-neutral-800 mb-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#E31B23] text-white flex items-center justify-center font-bold">
                  AM
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Active Member: Alex Miller</div>
                  <div className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Performance Tier • 24/7 Access Active
                  </div>
                </div>
              </div>
              <div className="text-xs text-neutral-400 space-y-1 pt-2 border-t border-neutral-800">
                <div>• <strong>Current Streak:</strong> 14 Days</div>
                <div>• <strong>Next Booked Class:</strong> HIIT Burn (Tomorrow 7:15 AM)</div>
                <div>• <strong>Sauna/Plunge Credits:</strong> 2 Remaining this month</div>
              </div>
            </div>

            <button
              onClick={() => {
                setLoggedIn(false);
                onClose();
              }}
              className="w-full py-3 bg-[#E31B23] hover:bg-[#B91018] text-white text-xs font-bold uppercase tracking-wider rounded-lg"
            >
              Sign Out &amp; Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase font-bold text-neutral-300 mb-1">
                Member Email or ID
              </label>
              <input
                type="text"
                required
                placeholder="member@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0B] border border-neutral-700 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#E31B23]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-neutral-300 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0B] border border-neutral-700 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#E31B23]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#E31B23] hover:bg-[#B91018] text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
            >
              SIGN IN TO PORTAL
            </button>

            <div className="text-center pt-2">
              <span className="text-xs text-neutral-400">Not a member yet? </span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenTrial();
                }}
                className="text-xs text-[#E31B23] font-bold hover:underline"
              >
                Claim a 7-Day Free Trial
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   3. CLASS BOOKING MODAL
----------------------------------------------------- */
interface ClassBookingModalProps {
  cls: FitnessClass | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ClassBookingModal: React.FC<ClassBookingModalProps> = ({
  cls,
  isOpen,
  onClose,
}) => {
  const [booked, setBooked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen || !cls) return null;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#111315] text-white rounded-2xl max-w-md w-full p-6 sm:p-8 border border-neutral-800 shadow-2xl relative">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">
              SPOT RESERVED!
            </h3>
            <p className="text-xs text-neutral-300 mb-6">
              You are booked for <strong className="text-white">{cls.name}</strong> on{' '}
              <strong className="text-[#E31B23]">{cls.day} at {cls.time}</strong> with Coach {cls.trainer}.
            </p>
            <div className="p-3 bg-[#090A0B] rounded-xl border border-neutral-800 text-xs text-neutral-300 mb-6 text-left">
              <div>• <strong>Location:</strong> {cls.room}</div>
              <div>• <strong>Duration:</strong> {cls.duration}</div>
              <div>• <strong>Intensity:</strong> {cls.intensity}</div>
              <div>• Check in at front kiosk 10 minutes prior to session start.</div>
            </div>
            <button
              onClick={() => {
                setBooked(false);
                onClose();
              }}
              className="w-full py-2.5 bg-[#E31B23] hover:bg-[#B91018] text-white text-xs font-bold uppercase tracking-wider rounded-lg"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E31B23]/15 text-[#E31B23] text-xs font-bold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>RESERVE CLASS SPOT</span>
            </div>
            <h3 className="text-2xl font-display font-bold uppercase text-white mb-1">
              {cls.name}
            </h3>
            <div className="flex items-center gap-3 text-xs text-neutral-400 mb-5">
              <span>{cls.day} • {cls.time}</span>
              <span>•</span>
              <span>Coach {cls.trainer}</span>
              <span>•</span>
              <span className="text-[#E31B23] font-semibold">{cls.spotsLeft} spots left</span>
            </div>

            <form onSubmit={handleBook} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-bold text-neutral-300 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0B] border border-neutral-700 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-neutral-300 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email for calendar invite"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0B] border border-neutral-700 text-xs text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#E31B23] hover:bg-[#B91018] text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer mt-2"
              >
                CONFIRM SPOT RESERVATION
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   4. PROGRAM DETAIL MODAL
----------------------------------------------------- */
interface ProgramModalProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
  onBookTrial: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  isOpen,
  onClose,
  onBookTrial,
}) => {
  if (!isOpen || !program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#111315] text-white rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-neutral-800 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-5">
          <img
            src={program.image}
            alt={program.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#090A0B]/85 text-white text-[10px] font-bold uppercase rounded">
            {program.category}
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white mb-2">
          {program.name}
        </h3>
        <p className="text-sm text-neutral-300 leading-relaxed mb-6">
          {program.description}
        </p>

        <div className="grid grid-cols-2 gap-3 p-4 bg-[#090A0B] rounded-xl border border-neutral-800 mb-6 text-xs">
          <div>
            <span className="text-neutral-500 uppercase font-bold text-[10px] block">Duration</span>
            <span className="text-white font-bold">{program.duration}</span>
          </div>
          <div>
            <span className="text-neutral-500 uppercase font-bold text-[10px] block">Experience</span>
            <span className="text-white font-bold">{program.difficulty}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xs uppercase font-bold text-[#E31B23] tracking-wider mb-2">
            Core Focus Areas
          </h4>
          <div className="flex flex-wrap gap-2">
            {program.focus.map((f) => (
              <span
                key={f}
                className="px-3 py-1 rounded-lg bg-[#1B1D20] text-neutral-300 text-xs border border-neutral-700"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onBookTrial();
            }}
            className="flex-1 py-3 bg-[#E31B23] hover:bg-[#B91018] text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer text-center"
          >
            START WITH FREE TRIAL
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 bg-[#1B1D20] hover:bg-[#24272C] text-neutral-300 text-xs font-bold uppercase tracking-wider rounded-xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   5. TRAINER PROFILE MODAL
----------------------------------------------------- */
interface TrainerModalProps {
  trainer: Trainer | null;
  isOpen: boolean;
  onClose: () => void;
  onConsult: () => void;
}

export const TrainerModal: React.FC<TrainerModalProps> = ({
  trainer,
  isOpen,
  onClose,
  onConsult,
}) => {
  if (!isOpen || !trainer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#111315] text-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-neutral-800 shadow-2xl relative">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <img
            src={trainer.image}
            alt={trainer.name}
            referrerPolicy="no-referrer"
            className="w-20 h-20 rounded-2xl object-cover border-2 border-[#E31B23]"
          />
          <div>
            <span className="text-[11px] font-bold text-[#E31B23] uppercase tracking-wider block">
              {trainer.role}
            </span>
            <h3 className="text-2xl font-display font-bold uppercase text-white">
              {trainer.name}
            </h3>
            <span className="text-xs text-neutral-400">{trainer.experience}</span>
          </div>
        </div>

        <p className="text-sm text-neutral-300 leading-relaxed mb-6">
          {trainer.bio}
        </p>

        <div className="mb-6">
          <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider mb-2">
            Credentials &amp; Certifications
          </h4>
          <div className="space-y-1.5">
            {trainer.certifications.map((c) => (
              <div key={c} className="flex items-center gap-2 text-xs text-neutral-200">
                <ShieldCheck className="w-4 h-4 text-[#E31B23]" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            onClose();
            onConsult();
          }}
          className="w-full py-3.5 bg-[#E31B23] hover:bg-[#B91018] text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
        >
          REQUEST CONSULTATION WITH {trainer.name.toUpperCase()}
        </button>
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   6. ARTICLE READER MODAL
----------------------------------------------------- */
interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#111315] text-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-neutral-800 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-xs text-[#E31B23] font-bold uppercase tracking-wider mb-2">
          {article.category} • {article.readTime}
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white mb-4 leading-tight">
          {article.title}
        </h2>
        <div className="flex items-center gap-3 text-xs text-neutral-400 pb-4 mb-6 border-b border-neutral-800">
          <span>By {article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>

        <div className="space-y-4 text-sm text-neutral-300 leading-relaxed mb-6">
          {article.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-[#1B1D20] hover:bg-[#24272C] text-white text-xs font-bold uppercase tracking-wider rounded-xl"
        >
          Close Article
        </button>
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   7. QUICK SEARCH MODAL
----------------------------------------------------- */
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProgram: (p: Program) => void;
  onSelectClass: (c: FitnessClass) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProgram,
  onSelectClass,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matchedPrograms = query.trim()
    ? PROGRAMS.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
    : [];

  const matchedClasses = query.trim()
    ? CLASSES.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()) || c.trainer.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#111315] text-white rounded-2xl max-w-xl w-full p-6 border border-neutral-800 shadow-2xl relative">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b border-neutral-700 pb-4 mb-4">
          <Search className="w-5 h-5 text-[#E31B23]" />
          <input
            type="text"
            autoFocus
            placeholder="Search programs, classes, trainers, equipment..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white text-base focus:outline-hidden placeholder-neutral-500 font-medium"
          />
        </div>

        {query.trim() === '' ? (
          <div className="text-xs text-neutral-400 py-6 text-center">
            Type a keyword like <span className="text-[#E31B23]">"Strength"</span>, <span className="text-[#E31B23]">"HIIT"</span>, <span className="text-[#E31B23]">"Boxing"</span>, or <span className="text-[#E31B23]">"Marcus"</span>.
          </div>
        ) : matchedPrograms.length === 0 && matchedClasses.length === 0 ? (
          <div className="text-xs text-neutral-400 py-6 text-center">
            No matching programs or classes found for "{query}".
          </div>
        ) : (
          <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
            {matchedPrograms.length > 0 && (
              <div>
                <div className="text-[10px] uppercase font-bold text-neutral-500 mb-2">Programs</div>
                {matchedPrograms.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onClose();
                      onSelectProgram(p);
                    }}
                    className="p-2.5 rounded-lg hover:bg-[#1B1D20] cursor-pointer flex items-center justify-between text-xs"
                  >
                    <span className="font-bold text-white">{p.name}</span>
                    <span className="text-neutral-400">{p.difficulty}</span>
                  </div>
                ))}
              </div>
            )}

            {matchedClasses.length > 0 && (
              <div>
                <div className="text-[10px] uppercase font-bold text-neutral-500 mb-2">Classes</div>
                {matchedClasses.slice(0, 5).map((c) => (
                  <div
                    key={c.id}
                    onClick={() => {
                      onClose();
                      onSelectClass(c);
                    }}
                    className="p-2.5 rounded-lg hover:bg-[#1B1D20] cursor-pointer flex items-center justify-between text-xs"
                  >
                    <span className="font-bold text-white">{c.name} ({c.day} {c.time})</span>
                    <span className="text-[#E31B23] font-semibold">{c.spotsLeft} spots left</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
