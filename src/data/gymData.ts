import type {
  Program,
  MembershipPlan,
  Trainer,
  FitnessClass,
  Facility,
  Testimonial,
  ProgressStory,
  Article,
} from '../types';

// Import generated local images
import heroAthleteImg from '../assets/images/hero_athlete_1789761248041.jpg';
import promoRopesImg from '../assets/images/promo_ropes_1789761265025.jpg';
import trainerLeadImg from '../assets/images/trainer_lead_1789761277699.jpg';
import facilityMainImg from '../assets/images/facility_main_1789761291145.jpg';

export const ASSETS = {
  hero: heroAthleteImg,
  promo: promoRopesImg,
  trainerLead: trainerLeadImg,
  facilityMain: facilityMainImg,
};

export const QUICK_CATEGORIES = [
  { id: 'strength', name: 'Strength Training', icon: 'Dumbbell', desc: 'Power racks, barbells & free weights' },
  { id: 'cardio', name: 'Cardio Deck', icon: 'Activity', desc: 'Woodway treadmills, rowers & assault bikes' },
  { id: 'pt', name: 'Personal Training', icon: 'UserCheck', desc: '1-on-1 dedicated coach matching' },
  { id: 'classes', name: 'Group Classes', icon: 'Users', desc: 'HIIT, strength, mobility & spin' },
  { id: 'functional', name: 'Functional Fitness', icon: 'Flame', desc: 'Turf sled track, kettlebells & rings' },
  { id: 'boxing', name: 'Boxing & Combat', icon: 'Shield', desc: 'Heavy bags, speed bags & technique' },
  { id: 'recovery', name: 'Recovery Lounge', icon: 'HeartPulse', desc: 'Infrared sauna, cold plunge & compression' },
  { id: 'nutrition', name: 'Nutrition Plans', icon: 'Apple', desc: 'Macro coaching & body composition' },
  { id: 'memberships', name: 'Memberships', icon: 'CreditCard', desc: 'Flexible 24/7 all-access passes' },
];

export const VALUE_PROPS = [
  {
    title: 'Expert Coaching',
    desc: 'Work with certified career trainers who translate ambition into structured, measurable physical progress.',
    icon: 'Award',
    highlight: '100% Certified Coaches',
  },
  {
    title: 'Premium Equipment',
    desc: 'Train with competition Eleiko barbells, Rogue racks, Hammer Strength machines, and precision cardio.',
    icon: 'Cpu',
    highlight: 'Industry-Standard Gear',
  },
  {
    title: 'Built For Everyone',
    desc: 'From first-time gym members to collegiate athletes, you will find an encouraging, zero-ego community.',
    icon: 'Users',
    highlight: 'All Fitness Levels',
  },
  {
    title: 'Measurable Results',
    desc: 'Structured progressive overload, periodic InBody scans, and weekly check-ins keep you accountable.',
    icon: 'TrendingUp',
    highlight: 'Target Tracking',
  },
];

export const PROGRAMS: Program[] = [
  {
    id: 'strength-cond',
    name: 'Strength & Conditioning',
    category: 'Hypertrophy & Power',
    description: 'Build raw compound strength, explosive power, and athletic mobility through proven progressive overload cycles.',
    difficulty: 'All Levels',
    duration: '12 Weeks',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    focus: ['Compound Lifts', 'Core Stabilization', 'Work Capacity', 'Joint Resilience'],
    schedulePreview: 'Mon / Wed / Fri at 6:00 AM & 5:30 PM',
  },
  {
    id: 'fat-loss',
    name: 'Metabolic Fat Loss',
    category: 'Cardio & Conditioning',
    description: 'High-density interval circuits and resistance complexes formulated to accelerate caloric burn while preserving lean muscle mass.',
    difficulty: 'Intermediate',
    duration: '8 Weeks',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    focus: ['HIIT Intervals', 'Kettlebell Work', 'Heart Rate Pacing', 'Nutritional Calibration'],
    schedulePreview: 'Tue / Thu / Sat at 7:00 AM & 6:30 PM',
  },
  {
    id: 'muscle-building',
    name: 'Muscle Hypertrophy Elite',
    category: 'Bodybuilding & Aesthetics',
    description: 'Maximal muscle architecture development utilizing mechanical tension, metabolic stress, and targeted muscle activation.',
    difficulty: 'Advanced',
    duration: '16 Weeks',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    focus: ['Target Muscle Splits', 'Volume Periodization', 'Mind-Muscle Connection', 'Recovery Protocols'],
    schedulePreview: '4-Day Split with custom coach check-ins',
  },
  {
    id: 'functional-training',
    name: 'Functional Athleticism',
    category: 'Movement & Durability',
    description: 'Master rotational power, multi-planar movements, and real-world agility across our dedicated 40-meter indoor turf.',
    difficulty: 'All Levels',
    duration: '10 Weeks',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80',
    focus: ['Sled Pushes & Pulls', 'Medicine Ball Slams', 'Plyometrics', 'Grip Endurance'],
    schedulePreview: 'Daily at 9:00 AM & 4:30 PM',
  },
  {
    id: 'womens-strength',
    name: "Women's Strength & Tone",
    category: 'Strength & Empowerment',
    description: 'Empowering resistance coaching centered on barbell mastery, glute and posterior chain mechanics, and confidence.',
    difficulty: 'All Levels',
    duration: '8 Weeks',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    focus: ['Barbell Fundamentals', 'Glute Activation', 'Upper Body Posture', 'Core Mechanics'],
    schedulePreview: 'Mon / Wed / Fri at 8:00 AM & 6:00 PM',
  },
  {
    id: 'athletic-performance',
    name: 'Athletic Performance Lab',
    category: 'Speed & Agility',
    description: 'Sports-specific speed, deceleration mechanics, and sprint profiling designed for competitive performance.',
    difficulty: 'Advanced',
    duration: '12 Weeks',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
    focus: ['Vertical Jump', 'First-Step Quickness', 'Eccentric Braking', 'VO2 Max Conditioning'],
    schedulePreview: 'Tue / Thu at 5:00 PM & Sat at 10:00 AM',
  },
];

export const MEMBERSHIPS: MembershipPlan[] = [
  {
    id: 'flex',
    name: 'FLEX ACCESS',
    tagline: 'Ideal for independent lifters seeking flexible, uncompromised gym access.',
    monthlyPrice: 39,
    annualPrice: 32,
    features: [
      'Full 24/7 Access to Gym Floor & Cardio Deck',
      'Free Locker & Showers Access',
      'Alpha Member Training App Access',
      '1 Free InBody Composition Assessment',
      'Discounted Guest Passes ($10/visit)',
    ],
    accessHours: '24 Hours / 7 Days',
    guestPasses: 1,
  },
  {
    id: 'performance',
    name: 'PERFORMANCE',
    tagline: 'Structured programming, unlimited classes, and recovery access.',
    monthlyPrice: 69,
    annualPrice: 58,
    isPopular: true,
    badge: 'MOST POPULAR',
    features: [
      'Everything in Flex Access',
      'Unlimited Group Fitness & HIIT Classes',
      'Weekly Mobility & Yoga Sessions',
      'Monthly Personal Trainer Consultation (1 session)',
      'Infrared Sauna & Cold Plunge Access (2x/month)',
      '2 Complimentary Guest Passes / Month',
      '15% Pro-Shop & Supplement Discount',
    ],
    accessHours: '24 Hours / 7 Days + Priority Booking',
    guestPasses: 2,
  },
  {
    id: 'elite',
    name: 'ALPHA ELITE',
    tagline: 'The ultimate VIP tier with weekly 1-on-1 coaching and unlimited recovery.',
    monthlyPrice: 119,
    annualPrice: 99,
    badge: 'ALL-INCLUSIVE VIP',
    features: [
      'Everything in Performance Access',
      '4 Private 1-on-1 Personal Training Sessions / Mo',
      'Custom Bi-Weekly Nutrition & Macro Plan',
      'Unlimited Infrared Sauna & Cold Plunge Lounge',
      'Complimentary Towel Service & Dedicated VIP Locker',
      'Unlimited Free Guest Passes (Bring a friend anytime)',
      'Quarterly Performance Lab & VO2 Max Diagnostics',
    ],
    accessHours: '24/7 All-Access + VIP Priority Lane',
    guestPasses: 99,
  },
];

export const TRAINERS: Trainer[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Head of Strength & Performance',
    specialty: 'Strength & Conditioning / Powerlifting',
    experience: '12 Years Coaching',
    image: trainerLeadImg,
    certifications: ['CSCS (NSCA)', 'USAW Level 2 Sports Performance', 'B.S. Exercise Physiology'],
    bio: 'Former collegiate decathlete with over a decade spent transforming athletes and busy professionals. Marcus specializes in barbell mechanics, athletic longevity, and sustainable strength gains.',
    instagram: '@marcus_alphafitness',
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Lead Functional Coach & Nutritionist',
    specialty: 'Metabolic Conditioning & Hypertrophy',
    experience: '9 Years Coaching',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80',
    certifications: ['NASM-CPT', 'Precision Nutrition L2 Master Coach', 'FMS Level 2'],
    bio: 'Elena balances relentless energy with pinpoint biomechanical precision. She has guided over 400 clients through transformative body recomposition without unsustainable starvation diets.',
    instagram: '@elena_movefit',
  },
  {
    id: 'darius-cole',
    name: 'Darius Cole',
    role: 'Combat & HIIT Specialist',
    specialty: 'Boxing, Agility & Core Conditioning',
    experience: '8 Years Coaching',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80',
    certifications: ['Golden Gloves Regional Champion', 'ACE Certified Personal Trainer', 'TRX Suspension Master'],
    bio: 'Darius brings fight-camp discipline into accessible group sessions. His high-voltage energy makes strenuous endurance workouts feel like exhilarating breakthroughs.',
    instagram: '@darius_alphafit',
  },
  {
    id: 'chloe-martinez',
    name: 'Chloe Martinez',
    role: 'Mobility & Women’s Strength Lead',
    specialty: 'Joint Longevity, Barbell Mastery & Posture',
    experience: '7 Years Coaching',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=80',
    certifications: ['CPT (ACSM)', 'Yoga Alliance RYT-500', 'FRC Functional Range Conditioning'],
    bio: 'Chloe helps members break through plateaus by restoring true movement mobility, correcting posture imbalances, and building resilient, athletic strength.',
    instagram: '@chloe_alpha_strength',
  },
];

export const CLASSES: FitnessClass[] = [
  // Monday
  { id: 'c1', day: 'Mon', time: '06:00 AM', name: 'Alpha Strength & Power', trainer: 'Marcus Vance', duration: '55 min', intensity: 'High', category: 'Strength', spotsTotal: 18, spotsLeft: 4, room: 'Weight Arena' },
  { id: 'c2', day: 'Mon', time: '07:15 AM', name: 'Metabolic Burn HIIT', trainer: 'Elena Rostova', duration: '45 min', intensity: 'High', category: 'HIIT', spotsTotal: 20, spotsLeft: 7, room: 'Turf Deck' },
  { id: 'c3', day: 'Mon', time: '12:00 PM', name: 'Express Core & Power', trainer: 'Darius Cole', duration: '35 min', intensity: 'Moderate', category: 'Functional', spotsTotal: 16, spotsLeft: 9, room: 'Studio 1' },
  { id: 'c4', day: 'Mon', time: '05:30 PM', name: 'Boxing Conditioning', trainer: 'Darius Cole', duration: '50 min', intensity: 'High', category: 'Boxing', spotsTotal: 14, spotsLeft: 2, room: 'Combat Zone' },
  { id: 'c5', day: 'Mon', time: '07:00 PM', name: 'Restorative Mobility & Yin', trainer: 'Chloe Martinez', duration: '50 min', intensity: 'Restorative', category: 'Yoga', spotsTotal: 22, spotsLeft: 11, room: 'Zen Studio' },

  // Tuesday
  { id: 'c6', day: 'Tue', time: '06:30 AM', name: 'Assault & Spin Ride', trainer: 'Elena Rostova', duration: '45 min', intensity: 'High', category: 'Spin', spotsTotal: 24, spotsLeft: 5, room: 'Cycle Studio' },
  { id: 'c7', day: 'Tue', time: '09:00 AM', name: "Women's Barbell Foundations", trainer: 'Chloe Martinez', duration: '50 min', intensity: 'Challenging', category: 'Strength', spotsTotal: 12, spotsLeft: 3, room: 'Weight Arena' },
  { id: 'c8', day: 'Tue', time: '05:00 PM', name: 'Functional Turf Athlete', trainer: 'Marcus Vance', duration: '55 min', intensity: 'High', category: 'Functional', spotsTotal: 16, spotsLeft: 6, room: 'Turf Deck' },
  { id: 'c9', day: 'Tue', time: '06:30 PM', name: 'Alpha HIIT Shock', trainer: 'Elena Rostova', duration: '45 min', intensity: 'High', category: 'HIIT', spotsTotal: 20, spotsLeft: 4, room: 'Studio 1' },

  // Wednesday
  { id: 'c10', day: 'Wed', time: '06:00 AM', name: 'Deadlift & Squat Mechanics', trainer: 'Marcus Vance', duration: '60 min', intensity: 'Challenging', category: 'Strength', spotsTotal: 10, spotsLeft: 1, room: 'Weight Arena' },
  { id: 'c11', day: 'Wed', time: '07:30 AM', name: 'Speed & Agility Drills', trainer: 'Darius Cole', duration: '45 min', intensity: 'High', category: 'Functional', spotsTotal: 18, spotsLeft: 8, room: 'Turf Deck' },
  { id: 'c12', day: 'Wed', time: '05:30 PM', name: 'Fight Camp Heavy Bag', trainer: 'Darius Cole', duration: '50 min', intensity: 'High', category: 'Boxing', spotsTotal: 14, spotsLeft: 3, room: 'Combat Zone' },
  { id: 'c13', day: 'Wed', time: '07:00 PM', name: 'Deep Fascial Release & Yoga', trainer: 'Chloe Martinez', duration: '50 min', intensity: 'Restorative', category: 'Yoga', spotsTotal: 22, spotsLeft: 12, room: 'Zen Studio' },

  // Thursday
  { id: 'c14', day: 'Thu', time: '06:30 AM', name: 'Rhythm Spin Velocity', trainer: 'Elena Rostova', duration: '45 min', intensity: 'High', category: 'Spin', spotsTotal: 24, spotsLeft: 6, room: 'Cycle Studio' },
  { id: 'c15', day: 'Thu', time: '12:00 PM', name: 'Lunch Hour Iron Circuit', trainer: 'Marcus Vance', duration: '40 min', intensity: 'Moderate', category: 'Strength', spotsTotal: 15, spotsLeft: 5, room: 'Weight Arena' },
  { id: 'c16', day: 'Thu', time: '06:00 PM', name: 'Tabata Thunder HIIT', trainer: 'Elena Rostova', duration: '45 min', intensity: 'High', category: 'HIIT', spotsTotal: 20, spotsLeft: 2, room: 'Turf Deck' },

  // Friday
  { id: 'c17', day: 'Fri', time: '06:00 AM', name: 'Friday Full-Body Armor', trainer: 'Marcus Vance', duration: '55 min', intensity: 'High', category: 'Strength', spotsTotal: 16, spotsLeft: 4, room: 'Weight Arena' },
  { id: 'c18', day: 'Fri', time: '08:00 AM', name: 'Athletic Flow & Core', trainer: 'Chloe Martinez', duration: '50 min', intensity: 'Moderate', category: 'Yoga', spotsTotal: 20, spotsLeft: 10, room: 'Zen Studio' },
  { id: 'c19', day: 'Fri', time: '05:30 PM', name: 'Friday Knockout Boxing', trainer: 'Darius Cole', duration: '50 min', intensity: 'High', category: 'Boxing', spotsTotal: 14, spotsLeft: 1, room: 'Combat Zone' },

  // Saturday
  { id: 'c20', day: 'Sat', time: '08:00 AM', name: 'Weekend Warrior Mega Circuit', trainer: 'Marcus Vance & Elena', duration: '60 min', intensity: 'High', category: 'HIIT', spotsTotal: 25, spotsLeft: 3, room: 'Turf Deck' },
  { id: 'c21', day: 'Sat', time: '09:30 AM', name: 'Hypertrophy Upper Body Masterclass', trainer: 'Marcus Vance', duration: '60 min', intensity: 'Challenging', category: 'Strength', spotsTotal: 14, spotsLeft: 2, room: 'Weight Arena' },
  { id: 'c22', day: 'Sat', time: '11:00 AM', name: 'Sound Bath & Yoga Recovery', trainer: 'Chloe Martinez', duration: '55 min', intensity: 'Restorative', category: 'Yoga', spotsTotal: 24, spotsLeft: 8, room: 'Zen Studio' },

  // Sunday
  { id: 'c23', day: 'Sun', time: '09:00 AM', name: 'Sunday Open Functional Lab', trainer: 'Darius Cole', duration: '60 min', intensity: 'Moderate', category: 'Functional', spotsTotal: 20, spotsLeft: 9, room: 'Turf Deck' },
  { id: 'c24', day: 'Sun', time: '10:30 AM', name: 'Breathwork & Mobility Reset', trainer: 'Chloe Martinez', duration: '50 min', intensity: 'Restorative', category: 'Yoga', spotsTotal: 20, spotsLeft: 14, room: 'Zen Studio' },
];

export const FACILITIES: Facility[] = [
  {
    id: 'f1',
    title: 'Olympic Weightlifting & Power Racks',
    subtitle: 'Custom Rogue Monster racks, Eleiko calibrated plates, and deadlift platforms with vibration dampening.',
    image: facilityMainImg,
    specs: '12 Power Racks • 8 Lifting Platforms • Calibrated Plates',
  },
  {
    id: 'f2',
    title: 'Precision Functional Sled Turf',
    subtitle: '40-meter non-directional indoor turf equipped with sleds, plyo boxes, farmer walk handles, and battle ropes.',
    image: promoRopesImg,
    specs: '40m Sprint Turf • Rogue Echo Sleds • Slam Balls',
  },
  {
    id: 'f3',
    title: 'Cardio Engine Theater',
    subtitle: 'Woodway curved treadmills, Concept2 SkiErgs, air bikes, and stairmasters with telemetry tracking.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    specs: '30+ Cardio Stations • Heart Rate Integration • HD Displays',
  },
  {
    id: 'f4',
    title: 'Boxing & Combat Zone',
    subtitle: '10 professional heavy bags, double-end bags, speed ropes, and padded strike zones for combat training.',
    image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=1200&q=80',
    specs: '10 Heavy Bags • Speed Bags • Ring Flooring',
  },
  {
    id: 'f5',
    title: 'Recovery & Hydro Lounge',
    subtitle: 'Cold water plunge tubs (45°F), cedar Finnish sauna, infrared pods, and NormaTec compression boots.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    specs: 'Dual Cold Plunges • Infrared Sauna • NormaTec Boots',
  },
  {
    id: 'f6',
    title: 'Executive Locker Suites',
    subtitle: 'Keyless digital lockers, rainfall steam showers, Malin+Goetz amenities, and grooming stations.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    specs: 'Private Showers • Keyless Lockers • Complimentary Towels',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'David K.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'After years of starting and stopping at budget gyms, Alpha gave me the structure I actually needed. The coaches are attentive and the culture is genuinely motivating.',
    achievement: 'Lost 28 lbs & Added 95 lbs to Deadlift',
    membershipType: 'Performance Member (18 Months)',
  },
  {
    id: 't2',
    name: 'Sarah M.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'I joined Alpha for basic strength training and ended up completely changing how I approach fitness and nutrition. Walking in never feels intimidating—it feels like an athletic home.',
    achievement: 'First Pull-Up & Half-Marathon PR',
    membershipType: 'Elite Member (1 Year)',
  },
  {
    id: 't3',
    name: 'Jason T.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'The coaches actually pay attention to your form and progress every single session. The equipment quality is unrivaled in the city—clean, heavy, and zero waiting for racks.',
    achievement: 'Overcame Chronic Back Pain & Gained 14 lbs Lean Mass',
    membershipType: 'Flex Access Member (2 Years)',
  },
  {
    id: 't4',
    name: 'Amara N.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'The boxing and HIIT classes push you to another gear, and having the infrared sauna and cold plunge after a grueling workout is an absolute game-changer.',
    achievement: 'Consistent 5 Days/Week Streak for 9 Months',
    membershipType: 'Performance Member (9 Months)',
  },
];

export const PROGRESS_STORIES: ProgressStory[] = [
  {
    id: 'ps1',
    name: 'Robert H., 38',
    timeframe: '6-Month Journey',
    title: 'From Desk Fatigue to Athletic Resilience',
    highlight: 'Rebuilt core stability, lost 32 pounds of visceral fat, and reclaimed energy for his family.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    quote: '“I felt burnt out at 38. The Alpha coaching team structured 45-minute lunch workouts that fit my executive schedule without taking me away from family time.”',
    metrics: [
      { label: 'Body Fat', value: '-11.4%' },
      { label: 'Squat 5RM', value: '+85 lbs' },
      { label: 'Weekly Energy', value: '10 / 10' },
    ],
  },
  {
    id: 'ps2',
    name: 'Maya L., 29',
    timeframe: '9-Month Journey',
    title: 'Confidence, Consistency & Competition Prep',
    highlight: 'Went from zero barbell familiarity to finishing her first regional hybrid fitness decathlon.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    quote: '“I was intimidated by barbells before joining. Elena broke every movement into actionable drills. Now lifting heavy weight is my favorite therapy.”',
    metrics: [
      { label: 'Deadlift', value: '265 lbs' },
      { label: 'VO2 Max', value: '+24%' },
      { label: 'Attendance', value: '98% Tracked' },
    ],
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Build Strength: A Beginner’s Guide to Progressive Overload',
    category: 'Strength Science',
    readTime: '4 Min Read',
    date: 'March 14, 2026',
    author: 'Marcus Vance',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    description: 'Why adding small increments of resistance systematically produces exponential strength without injuring connective tissue.',
    content: [
      'Progressive overload is the fundamental physiological principle underpinning all muscular adaptation. If you demand more from your body over time, it adapts by growing stronger, denser muscle fibers and fortifying tendons.',
      'To implement this effectively: track your sets, reps, and load in a logbook. Aim to add either one rep, 2.5–5 lbs of load, or slightly improve your control and tempo during each workout cycle.',
      'Consistency trumps ego-lifting every single time. True strength is constructed through clean mechanics and repeatable execution over months, not reckless maximum attempts.',
    ],
  },
  {
    id: 'art-2',
    title: 'How To Stay Consistent When Motivation Fades',
    category: 'Mindset & Habits',
    readTime: '5 Min Read',
    date: 'March 8, 2026',
    author: 'Elena Rostova',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    description: 'Actionable strategies to automate your fitness discipline so you never have to rely on fleeting mood spikes.',
    content: [
      'Motivation is an emotional catalyst, not a reliable operating system. Elite athletes do not wake up energized every morning; they operate on automated rituals and non-negotiable standards.',
      'Reduce friction before the morning alarm sounds: pack your gym bag the night before, pre-schedule your sessions on your calendar like client meetings, and commit to just showing up for the warm-up.',
      'Remember the 10-minute rule: commit to completing the dynamic warm-up. Ninety-five percent of the time, once your heart rate elevates and endorphins circulate, you will complete the full session with pride.',
    ],
  },
  {
    id: 'art-3',
    title: 'Nutrition Basics For High-Output Training',
    category: 'Performance Fuel',
    readTime: '6 Min Read',
    date: 'February 26, 2026',
    author: 'Elena Rostova, PN2',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    description: 'Demystifying macronutrient timing, protein targets for repair, and electrolyte hydration protocols for hard lifters.',
    content: [
      'You cannot out-train chronic under-recovery or nutrient-deficient fueling. If you are lifting hard 3–5 times per week, target approximately 0.8 to 1.0 grams of high-quality protein per pound of target body weight.',
      'Carbohydrates are your primary anaerobic fuel substrate. Do not fear complex starches around your workout windows—sweet potatoes, oats, and rice replenish liver and muscular glycogen quickly.',
      'Hydration requires electrolytes: sodium, potassium, and magnesium ensure proper nerve conductivity and prevent mid-workout muscle cramping.',
    ],
  },
  {
    id: 'art-4',
    title: 'Recovery: Why Rest Is Where Muscle Is Truly Built',
    category: 'Recovery & Longevity',
    readTime: '4 Min Read',
    date: 'February 19, 2026',
    author: 'Chloe Martinez',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    description: 'How cold contrast therapy, deep sleep architecture, and deload weeks prevent chronic central nervous system fatigue.',
    content: [
      'Training provides the destructive stimulus; recovery delivers the constructive adaptation. Without sufficient rest intervals, chronic elevation of cortisol degrades lean muscle and suppresses immune function.',
      'Sleep is your most potent natural anabolic state. Aim for 7.5 to 8.5 hours in a cool, dark room to maximize slow-wave delta sleep where human growth hormone (HGH) release peaks.',
      'Incorporate passive and active recovery: Finnish sauna sessions stimulate heat shock proteins, while cold plunge tubs reduce acute inflammatory cytokines after high-impact training.',
    ],
  },
];

export const FAQS = [
  {
    q: 'What is included in the 7-Day Free Trial?',
    a: 'Your 7-Day Free Trial gives you complete 24/7 access to the gym floor, all strength equipment and cardio decks, two complimentary group classes of your choice, full locker room access, and a complimentary 30-minute fitness consultation with a certified coach. No credit card or long-term commitment required.',
  },
  {
    q: 'Can I freeze or cancel my membership at any time?',
    a: 'Yes. All Flex and Performance memberships operate on flexible monthly agreements with zero lock-in contracts. You can freeze your account for up to 60 days per year or cancel anytime with 14 days written notice.',
  },
  {
    q: 'Are the group classes suitable for beginners?',
    a: 'Absolutely. Every class is coached by a certified professional who demonstrates regressions and progressions for each movement. Whether it is your first time touching a barbell or you are an experienced lifter, coaches adapt the intensity to your current capacity.',
  },
  {
    q: 'What are the gym hours and staffed coaching hours?',
    a: 'Alpha Gym & Fitness is open 24 hours a day, 7 days a week, 365 days a year for active keycard/mobile app members. Staffed front desk and coaching hours are Monday–Friday from 5:30 AM to 9:00 PM, and Saturday–Sunday from 7:00 AM to 6:00 PM.',
  },
  {
    q: 'Do you offer personal training packages without a membership?',
    a: 'Yes, we offer non-member personal training packages and consultation passes, although members receive discounted hourly coaching rates and full facility amenities.',
  },
];
