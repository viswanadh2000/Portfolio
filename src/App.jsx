import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import OpenSourceShowcase from './components/OpenSourceShowcase.jsx';
import Contact from './components/Contact.jsx';
import RecruiterCTA from './components/RecruiterCTA.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';
import SidebarNav from './components/SidebarNav.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
import Timeline from './components/Timeline.jsx';
import AchievementBadges from './components/AchievementBadges.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <SidebarNav />
        <ScrollToTopButton />
        <main>
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <Timeline />
          <AchievementBadges />
          <Skills />
          <section id="experience"><Experience /></section>
          <section id="projects"><Projects /></section>
          <OpenSourceShowcase />
          <Testimonials />
          <section id="recruiter"><RecruiterCTA /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
