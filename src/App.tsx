/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { ValueProps } from './components/ValueProps';
import { FeaturedPrograms } from './components/FeaturedPrograms';
import { Memberships } from './components/Memberships';
import { PromoBanner } from './components/PromoBanner';
import { PersonalTraining } from './components/PersonalTraining';
import { Trainers } from './components/Trainers';
import { ClassSchedule } from './components/ClassSchedule';
import { Facilities } from './components/Facilities';
import { SocialProof } from './components/SocialProof';
import { ProgressStories } from './components/ProgressStories';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { LeadForm } from './components/LeadForm';
import { FinalCTA } from './components/FinalCTA';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import {
  TrialModal,
  LoginModal,
  ClassBookingModal,
  ProgramModal,
  TrainerModal,
  ArticleModal,
  SearchModal,
} from './components/Modals';
import type { Program, Trainer, FitnessClass, Article, MembershipPlan } from './types';

export default function App() {
  // Modal states
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [selectedPlanForTrial, setSelectedPlanForTrial] = useState<MembershipPlan | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Selected item modal states
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [selectedClass, setSelectedClass] = useState<FitnessClass | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleOpenTrial = (plan?: MembershipPlan) => {
    setSelectedPlanForTrial(plan || null);
    setIsTrialOpen(true);
  };

  const handleScrollToLead = () => {
    const leadSection = document.getElementById('lead-form');
    if (leadSection) {
      leadSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenTrial();
    }
  };

  const handleScrollToMemberships = () => {
    const memSection = document.getElementById('memberships');
    if (memSection) {
      memSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    if (categoryId === 'memberships') {
      handleScrollToMemberships();
    } else if (categoryId === 'classes') {
      const el = document.getElementById('schedule');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (categoryId === 'personal-training') {
      const el = document.getElementById('personal-training');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (categoryId === 'free-trial') {
      handleScrollToLead();
    } else if (categoryId === 'facilities') {
      const el = document.getElementById('facilities');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('programs');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0B] text-white flex flex-col selection:bg-[#E31B23] selection:text-white">
      {/* 1. Sticky Navigation Bar with Utility Bar & Mobile Drawer */}
      <Navbar
        onOpenTrialModal={() => handleOpenTrial()}
        onOpenLoginModal={() => setIsLoginOpen(true)}
        onOpenSearchModal={() => setIsSearchOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenTrialModal={() => handleOpenTrial()}
          onExploreMemberships={handleScrollToMemberships}
        />

        {/* 3. Category / Service Navigation Strip */}
        <CategoryNav onSelectCategory={handleSelectCategory} />

        {/* 4. Value Propositions Section */}
        <ValueProps />

        {/* 5. Featured Programs Section */}
        <FeaturedPrograms
          onSelectProgram={(prog) => setSelectedProgram(prog)}
          onOpenTrialModal={() => handleOpenTrial()}
        />

        {/* 6. Memberships Pricing & 7-Day Free Trial */}
        <Memberships
          onSelectPlan={(plan) => handleOpenTrial(plan)}
          onOpenTrialModal={() => handleOpenTrial()}
        />

        {/* 7. Full-Width Promotional Banner */}
        <PromoBanner onOpenTrialModal={() => handleOpenTrial()} />

        {/* 8. Personal Training Section (Split Editorial Layout) */}
        <PersonalTraining
          onOpenConsultationModal={() => handleOpenTrial()}
        />

        {/* 9. Trainers Showcase */}
        <Trainers
          onSelectTrainer={(trainer) => setSelectedTrainer(trainer)}
          onOpenConsultationModal={() => handleOpenTrial()}
        />

        {/* 10. Class Schedule & Booking (Interactive Days & Filters) */}
        <ClassSchedule
          onBookClass={(cls) => setSelectedClass(cls)}
        />

        {/* 11. Facilities / Compound Experience */}
        <Facilities
          onOpenTrialModal={() => handleOpenTrial()}
        />

        {/* 12. Results / Social Proof & Member Metrics */}
        <SocialProof />

        {/* 13. Progress Stories / Authentic Member Journeys */}
        <ProgressStories />

        {/* 14. Fitness Content / Blog Section */}
        <BlogSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* 15. Frequently Asked Questions Accordion */}
        <FAQSection />

        {/* 16. Lead Capture Free Trial Activation Form */}
        <LeadForm />

        {/* 17. Final High-Impact CTA */}
        <FinalCTA
          onOpenTrialModal={() => handleOpenTrial()}
          onExploreMemberships={handleScrollToMemberships}
        />

        {/* 18. Contact / Facility Location & Directions */}
        <ContactLocation onOpenTrialModal={() => handleOpenTrial()} />
      </main>

      {/* 19. Multi-Column Footer */}
      <Footer
        onOpenTrialModal={() => handleOpenTrial()}
        onOpenLoginModal={() => setIsLoginOpen(true)}
      />

      {/* Modals & Portals */}
      <TrialModal
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
        initialPlan={selectedPlanForTrial}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onOpenTrial={() => {
          setIsLoginOpen(false);
          handleOpenTrial();
        }}
      />

      <ClassBookingModal
        cls={selectedClass}
        isOpen={!!selectedClass}
        onClose={() => setSelectedClass(null)}
      />

      <ProgramModal
        program={selectedProgram}
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onBookTrial={() => handleOpenTrial()}
      />

      <TrainerModal
        trainer={selectedTrainer}
        isOpen={!!selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
        onConsult={() => handleOpenTrial()}
      />

      <ArticleModal
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProgram={(p) => setSelectedProgram(p)}
        onSelectClass={(c) => setSelectedClass(c)}
      />
    </div>
  );
}

