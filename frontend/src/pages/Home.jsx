import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Partnerships from '../components/Partnerships';
import AccredianEdge from '../components/AccredianEdge';
import DomainExpertise from '../components/DomainExpertise';
import CourseSegmentation from '../components/CourseSegmentation';
import WhoShouldJoin from '../components/WhoShouldJoin';
import CATFramework from '../components/CATFramework';
import HowWeDeliver from '../components/HowWeDeliver';
import FAQs from '../components/FAQs';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';
import LeadCaptureModal from '../components/LeadCaptureModal';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onEnquire={openModal} />
      <Hero onEnquire={openModal} />
      <Stats />
      <Partnerships />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <WhoShouldJoin />
      <CATFramework />
      <HowWeDeliver />
      <FAQs onEnquire={openModal} />
      <Testimonials />
      <ContactCTA onEnquire={openModal} />
      <Footer />
      <LeadCaptureModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Home;
