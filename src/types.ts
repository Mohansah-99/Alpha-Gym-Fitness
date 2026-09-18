export interface Program {
  id: string;
  name: string;
  category: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  image: string;
  focus: string[];
  schedulePreview: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  isPopular?: boolean;
  badge?: string;
  features: string[];
  accessHours: string;
  guestPasses: number;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
  certifications: string[];
  bio: string;
  instagram?: string;
}

export interface FitnessClass {
  id: string;
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  time: string;
  name: string;
  trainer: string;
  duration: string;
  intensity: 'High' | 'Moderate' | 'Challenging' | 'Restorative';
  category: 'HIIT' | 'Strength' | 'Yoga' | 'Boxing' | 'Functional' | 'Spin';
  spotsTotal: number;
  spotsLeft: number;
  room: string;
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  specs: string;
}

export interface Testimonial {
  id: string;
  name: string;
  verified: boolean;
  avatar: string;
  rating: number;
  quote: string;
  achievement: string;
  membershipType: string;
}

export interface ProgressStory {
  id: string;
  name: string;
  timeframe: string;
  title: string;
  highlight: string;
  image: string;
  quote: string;
  metrics: { label: string; value: string }[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  description: string;
  image: string;
  date: string;
  author: string;
  content: string[];
}

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  goal: string;
  preferredTime: string;
  preferredContact: string;
  agreedToTerms: boolean;
}
