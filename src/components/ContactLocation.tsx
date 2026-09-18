import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Send,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface ContactLocationProps {
  onOpenTrialModal: () => void;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ onOpenTrialModal }) => {
  const [quickMsg, setQuickMsg] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMsg.email || !quickMsg.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setQuickMsg({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#111315] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1D20] border border-neutral-800 text-xs font-bold uppercase tracking-widest text-[#E31B23] mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>HEADQUARTERS &amp; FACILITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase tracking-tight text-white mb-6">
              VISIT <span className="text-[#E31B23]">ALPHA GYM</span>
            </h2>

            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
              Centrally located in the Metro Athletic District with complimentary 2-hour
              member garage parking, towel service, and direct transit access.
            </p>

            <div className="space-y-6 mb-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1B1D20] border border-neutral-800 flex items-center justify-center flex-shrink-0 text-[#E31B23]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                    Facility Address
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    104 Athletic Boulevard, Suite 200
                  </p>
                  <p className="text-xs text-neutral-400">
                    Metro District, NY 10001 (Demo Location)
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1B1D20] border border-neutral-800 flex items-center justify-center flex-shrink-0 text-[#E31B23]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                    Hours of Operation
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5 flex items-center gap-2">
                    <span>Active Members: 24 Hours / 7 Days</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Staffed Hours: Mon–Fri 5:30 AM – 9:00 PM | Sat–Sun 7:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1B1D20] border border-neutral-800 flex items-center justify-center flex-shrink-0 text-[#E31B23]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase font-bold text-neutral-400">Direct Phone</h4>
                    <a href="tel:5552342574" className="text-xs font-bold text-white hover:text-[#E31B23]">
                      (555) 234-ALPH
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1B1D20] border border-neutral-800 flex items-center justify-center flex-shrink-0 text-[#E31B23]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase font-bold text-neutral-400">General Inquiry</h4>
                    <a href="mailto:info@alphagymfitness.com" className="text-xs font-bold text-white hover:text-[#E31B23]">
                      info@alphagymfitness.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => window.open('https://maps.google.com', '_blank')}
                className="px-5 py-2.5 bg-[#E31B23] hover:bg-[#B91018] text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>GET DIRECTIONS</span>
              </button>

              <button
                onClick={onOpenTrialModal}
                className="px-5 py-2.5 bg-[#1B1D20] hover:bg-[#24272C] text-neutral-200 text-xs font-bold uppercase tracking-wider rounded-lg border border-neutral-700 flex items-center gap-2 cursor-pointer"
              >
                <span>CONTACT FRONT DESK</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Styled Map Visual & Quick Inquiry */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Map-style visual card with stylized dark grid representation */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-[#090A0B] aspect-[16/9] shadow-2xl flex items-center justify-center group">
              {/* Map grid lines aesthetic */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'radial-gradient(#36383B 1px, transparent 1px), radial-gradient(#36383B 1px, #090A0B 1px)',
                  backgroundSize: '24px 24px',
                }}
              ></div>

              {/* Roads / transit stylized lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 120 Q 200 80, 500 200 T 900 150" stroke="#36383B" strokeWidth="8" fill="none" />
                <path d="M250 0 L 250 500" stroke="#36383B" strokeWidth="6" fill="none" />
                <path d="M600 0 L 600 500" stroke="#36383B" strokeWidth="4" fill="none" />
                <path d="M0 320 L 900 320" stroke="#36383B" strokeWidth="6" fill="none" />
              </svg>

              {/* Pin marker */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-[#E31B23]/30 animate-ping absolute inset-0"></div>
                  <div className="w-14 h-14 rounded-full bg-[#E31B23] text-white flex items-center justify-center shadow-2xl border-2 border-white relative z-10">
                    <MapPin className="w-7 h-7" />
                  </div>
                </div>
                <div className="mt-3 bg-[#090A0B]/95 border border-neutral-700 px-4 py-2 rounded-xl shadow-xl text-center backdrop-blur-md">
                  <div className="text-xs font-display font-extrabold uppercase text-white tracking-wider">
                    ALPHA GYM &amp; FITNESS
                  </div>
                  <div className="text-[10px] text-neutral-400">
                    104 Athletic Blvd • Metro Center
                  </div>
                </div>
              </div>

              {/* Direct Link Tag */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="absolute top-4 right-4 bg-[#111315]/90 hover:bg-[#E31B23] border border-neutral-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-[#090A0B] rounded-2xl p-6 border border-neutral-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Quick Message to Membership Team
              </h3>
              {sent ? (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Thank you! Your message has been routed to member services.</span>
                </div>
              ) : (
                <form onSubmit={handleSend} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={quickMsg.name}
                      onChange={(e) => setQuickMsg({ ...quickMsg, name: e.target.value })}
                      className="px-3.5 py-2.5 rounded-lg bg-[#111315] border border-neutral-700 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#E31B23]"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={quickMsg.email}
                      onChange={(e) => setQuickMsg({ ...quickMsg, email: e.target.value })}
                      className="px-3.5 py-2.5 rounded-lg bg-[#111315] border border-neutral-700 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#E31B23]"
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="How can we assist you?"
                      required
                      value={quickMsg.message}
                      onChange={(e) => setQuickMsg({ ...quickMsg, message: e.target.value })}
                      className="flex-1 px-3.5 py-2.5 rounded-lg bg-[#111315] border border-neutral-700 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#E31B23]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-[#E31B23] hover:bg-[#B91018] text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
