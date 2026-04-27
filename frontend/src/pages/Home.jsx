import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Partnerships from '../components/Partnerships';
import AccredianEdge from '../components/AccredianEdge';
import DomainExpertise from '../components/DomainExpertise';
import CourseSegmentation from '../components/CourseSegmentation';
import SkillAssessmentQuiz from '../components/SkillAssessmentQuiz';
import WhoShouldJoin from '../components/WhoShouldJoin';
import ROICalculator from '../components/ROICalculator';
import CATFramework from '../components/CATFramework';
import LearningPathBuilder from '../components/LearningPathBuilder';
import HowWeDeliver from '../components/HowWeDeliver';
import ProgramComparison from '../components/ProgramComparison';
import FAQs from '../components/FAQs';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';
import LeadCaptureModal from '../components/LeadCaptureModal';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar onEnquire={openModal} />
      <Hero onEnquire={openModal} />
      <Stats />
      <Partnerships />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      {/* Unique feature #1 */}
      <SkillAssessmentQuiz onEnquire={openModal} />
      <WhoShouldJoin />
      {/* Unique feature #2 */}
      <ROICalculator />
      <CATFramework />
      {/* Unique feature #6 */}
      <LearningPathBuilder />
      <HowWeDeliver />
      {/* Unique feature #3 */}
      <ProgramComparison />
      <FAQs onEnquire={openModal} />
      <Testimonials />
      <ContactCTA onEnquire={openModal} />
      <Footer />
      <LeadCaptureModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Home;
