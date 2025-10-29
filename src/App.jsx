import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import ChatBot from './components/ChatBot.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import AchievementBadges from './components/AchievementBadges.jsx';
import AIResumeParser from './components/AIResumeParser.jsx';
import Blog from './components/Blog.jsx';
import BlogPost from './components/BlogPost.jsx';
import ColorCustomizer from './components/ColorCustomizer.jsx';
import Timeline from './components/Timeline.jsx';
import RecruiterCTA from './components/RecruiterCTA.jsx';
import SidebarNav from './components/SidebarNav.jsx';
import ToolStack from './components/ToolStack.jsx';
import VoiceIntro from './components/VoiceIntro.jsx';
import OpenSourceShowcase from './components/OpenSourceShowcase.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import GitHubStats from './components/GitHubStats.jsx';
import SkillsRadar from './components/SkillsRadar.jsx';
import SystemDesign from './components/SystemDesign.jsx';
import Testimonials from './components/Testimonials.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
import EasterEgg from './components/EasterEgg.jsx';
export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-zinc-950 text-white">
          <ColorCustomizer />
          <SidebarNav />
          <Navbar />
          <ChatBot />
          <main className="relative">
            {/* Home Section */}
            <section id="home" className="min-h-screen">
              <Hero />
              <RecruiterCTA />
            </section>
            {/* About Section */}
            <section id="about" className="py-16">
              <About />
              <AchievementBadges />
              <GitHubStats />
            </section>
            {/* Timeline Section */}
            <section id="timeline" className="py-16">
              <Timeline />
            </section>
            {/* Skills Section */}
            <section id="skills" className="py-16">
              <Skills />
              <SkillsRadar />
              <ToolStack />
            </section>
            {/* Experience Section */}
            <section id="experience" className="py-16">
              <Experience />
            </section>
            {/* Projects Section */}
            <section id="projects" className="py-16">
              <Projects />
              <OpenSourceShowcase />
            </section>
            {/* System Design Section */}
            <section id="system-design" className="py-16">
              <SystemDesign />
            </section>
            {/* Testimonials Section */}
            <section id="testimonials" className="py-16">
              <Testimonials />
            </section>
            {/* Contact Section */}
            <section id="contact" className="py-16">
              <Contact />
            </section>
            <ScrollToTopButton />
            <EasterEgg />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
