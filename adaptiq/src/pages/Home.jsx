import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const stats = [
  { value: '94%', label: 'Student satisfaction rate' },
  { value: '3.2×', label: 'Faster concept mastery' },
  { value: '12K+', label: 'Personalized paths created' },
  { value: '40+', label: 'Subjects & disciplines' },
];

const features = [
  {
    icon: '◎',
    title: 'Adaptive Skill Assessment',
    desc: 'Begin with a thoughtful diagnostic that maps exactly where you are — no judgment, just clarity on your starting point.',
    color: 'sage',
  },
  {
    icon: '⟡',
    title: 'Personalized Roadmaps',
    desc: 'Receive a custom learning path built around your goals, pace, and knowledge gaps — not a generic one-size-fits-all syllabus.',
    color: 'terra',
  },
  {
    icon: '◈',
    title: 'Real-time Progress Metrics',
    desc: 'Track measurable improvements with visual progress reports, milestone celebrations, and adaptive difficulty adjustments.',
    color: 'blue',
  },
  {
    icon: '◇',
    title: 'Curated Content Library',
    desc: 'Access a rich collection of lessons, projects, and exercises — each ranked and sequenced for your unique learning journey.',
    color: 'sand',
  },
];

const testimonials = [
  {
    quote: "I was falling behind in calculus for months. AdaptIQ identified exactly where my understanding broke down and built a path that brought me up to speed in three weeks.",
    name: "Priya Mehta",
    role: "Engineering Student",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&h=80&fit=crop&crop=face"
  },
  {
    quote: "As someone who already had a background in Python, I didn't want to sit through beginner material. AdaptIQ let me skip what I knew and focus on what actually challenged me.",
    name: "Daniel Osei",
    role: "Software Developer",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face"
  },
  {
    quote: "The progress tracking completely changed how I study. Seeing real numbers on my improvement kept me motivated in a way nothing else had before.",
    name: "Yuki Tanaka",
    role: "Medical Student",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
  },
];

function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
            alt="Students learning"
            className="hero-bg-img"
          />
          <div className="hero-bg-overlay" />
        </div>
        <div className="container hero-content">
          <p className="section-label fade-up">Adaptive Learning Platform</p>
          <h1 className="hero-title fade-up-delay-1">
            Learning that fits<br />
            <em>you</em>, not the crowd.
          </h1>
          <p className="hero-subtitle fade-up-delay-2">
            Every student has a unique starting point, pace, and goal. AdaptIQ builds a personalized
            learning roadmap just for you — closing gaps, removing redundancy, and measuring
            real growth.
          </p>
          <div className="hero-actions fade-up-delay-3">
            <Link to="/assessment" className="btn-primary">
              Start Your Assessment →
            </Link>
            <Link to="/courses" className="btn-outline">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-band">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="container">
          <div className="how-header">
            <p className="section-label">The Process</p>
            <h2>From assessment to mastery<br />in four clear steps</h2>
          </div>
          <div className="steps-layout">
            <div className="steps-image">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
                alt="Students collaborating"
              />
            </div>
            <div className="steps-list">
              {[
                { num: '01', title: 'Take the Diagnostic', desc: 'A short, intelligent assessment evaluates your current knowledge level across key concepts in your chosen subject.' },
                { num: '02', title: 'Receive Your Roadmap', desc: 'Our system generates a personalized learning path tailored to your level, goals, and the time you have available.' },
                { num: '03', title: 'Learn at Your Pace', desc: 'Work through curated lessons, exercises, and projects — with the system continuously adapting as you improve.' },
                { num: '04', title: 'Track Measurable Growth', desc: 'Monitor real progress metrics: concept mastery scores, time-to-completion, and milestone achievements.' },
              ].map((step, i) => (
                <div className="step-item" key={i}>
                  <span className="step-num">{step.num}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <p className="section-label">Core Features</p>
            <h2>Everything your learning<br />journey needs</h2>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className={`feature-card feature-card--${f.color}`} key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="banner-section">
        <div className="container">
          <div className="banner-card">
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&q=80"
              alt="Focused study"
              className="banner-img"
            />
            <div className="banner-content">
              <p className="section-label" style={{ color: 'var(--sand-light)' }}>For Every Level</p>
              <h2>Whether you're a beginner<br />or racing ahead</h2>
              <p>AdaptIQ meets students where they are. Those who need more support get scaffolded guidance. Those moving fast get advanced challenges. No one is left bored or left behind.</p>
              <Link to="/assessment" className="btn-primary" style={{ background: 'var(--terracotta)' }}>
                Find Your Level
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <p className="section-label">Student Stories</p>
            <h2>Real results, real learners</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Ready to learn the way<br />that works for <em>you?</em></h2>
            <p>Join thousands of students who stopped fitting into one-size-fits-all curricula and started learning with intention.</p>
            <Link to="/assessment" className="btn-primary">
              Begin Your Journey →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="navbar-logo">
                <span className="logo-mark">A</span>
                <span className="logo-text">AdaptIQ</span>
              </div>
              <p>Personalized learning paths for every student, at every level.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h5>Platform</h5>
                <Link to="/courses">Courses</Link>
                <Link to="/assessment">Assessment</Link>
                <Link to="/roadmap">Roadmap</Link>
                <Link to="/progress">Progress</Link>
              </div>
              <div className="footer-col">
                <h5>Support</h5>
                <a href="#">Help Center</a>
                <a href="#">Contact Us</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 AdaptIQ. Designed for learners everywhere.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
