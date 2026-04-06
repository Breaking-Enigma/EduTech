import React, { useState } from 'react';
import '../styles/Roadmap.css';

const roadmapData = [
  {
    phase: 'Phase 1',
    title: 'Foundations',
    duration: '2 weeks',
    status: 'completed',
    color: 'sage',
    modules: [
      { title: 'Core Concepts Overview', type: 'Lesson', time: '45 min', done: true },
      { title: 'Fundamental Principles', type: 'Reading', time: '30 min', done: true },
      { title: 'Practice: Basics Quiz', type: 'Quiz', time: '20 min', done: true },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Building Blocks',
    duration: '3 weeks',
    status: 'active',
    color: 'terra',
    modules: [
      { title: 'Intermediate Concepts', type: 'Lesson', time: '60 min', done: true },
      { title: 'Applied Examples', type: 'Project', time: '90 min', done: false },
      { title: 'Peer Review Exercise', type: 'Activity', time: '45 min', done: false },
      { title: 'Module Assessment', type: 'Quiz', time: '30 min', done: false },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Deep Dive',
    duration: '4 weeks',
    status: 'upcoming',
    color: 'blue',
    modules: [
      { title: 'Advanced Theory', type: 'Lesson', time: '75 min', done: false },
      { title: 'Case Studies', type: 'Reading', time: '60 min', done: false },
      { title: 'Complex Problem Set', type: 'Project', time: '120 min', done: false },
      { title: 'Peer Collaboration', type: 'Activity', time: '60 min', done: false },
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Mastery & Application',
    duration: '3 weeks',
    status: 'locked',
    color: 'sand',
    modules: [
      { title: 'Capstone Project', type: 'Project', time: '180 min', done: false },
      { title: 'Real-world Application', type: 'Activity', time: '90 min', done: false },
      { title: 'Final Assessment', type: 'Quiz', time: '60 min', done: false },
    ],
  },
];

const typeColors = {
  Lesson: '#EFF5F0',
  Reading: '#EBF3F7',
  Quiz: '#FBF0EB',
  Project: '#F7F2EB',
  Activity: '#F2EBF7',
};

function Roadmap() {
  const [expanded, setExpanded] = useState('Phase 2');

  return (
    <main className="roadmap-page">
      <div className="roadmap-header-section">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&q=80"
          alt="Learning path"
          className="roadmap-header-bg"
        />
        <div className="roadmap-header-overlay" />
        <div className="roadmap-header-content">
          <p className="section-label" style={{ color: 'var(--sand-light)' }}>Your Personal Plan</p>
          <h1>Your Learning <em>Roadmap</em></h1>
          <p>Tailored to your level and goals — 12 weeks to mastery.</p>

          <div className="roadmap-summary-cards">
            <div className="summary-card">
              <span className="summary-value">12</span>
              <span className="summary-label">Weeks total</span>
            </div>
            <div className="summary-card">
              <span className="summary-value">27%</span>
              <span className="summary-label">Completed</span>
            </div>
            <div className="summary-card">
              <span className="summary-value">14</span>
              <span className="summary-label">Modules ahead</span>
            </div>
            <div className="summary-card">
              <span className="summary-value">82</span>
              <span className="summary-label">Mastery score</span>
            </div>
          </div>
        </div>
      </div>

      <div className="roadmap-body">
        <div className="container roadmap-layout">
          {/* Sidebar */}
          <aside className="roadmap-sidebar">
            <div className="sidebar-card">
              <h4>Current Focus</h4>
              <div className="current-focus">
                <div className="focus-phase">Phase 2 · Week 2</div>
                <p>Applied Examples</p>
                <div className="focus-progress-bar">
                  <div className="focus-progress-fill" style={{ width: '40%' }} />
                </div>
                <span className="focus-meta">40% through this module</span>
              </div>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}>
                Continue Learning →
              </button>
            </div>

            <div className="sidebar-card">
              <h4>Overall Progress</h4>
              <div className="overall-ring">
                <svg viewBox="0 0 80 80" className="ring-svg">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="var(--light-gray)" strokeWidth="7" />
                  <circle
                    cx="40" cy="40" r="34"
                    fill="none"
                    stroke="var(--sage)"
                    strokeWidth="7"
                    strokeDasharray="213.6"
                    strokeDashoffset="156"
                    strokeLinecap="round"
                    transform="rotate(-90 40 40)"
                  />
                </svg>
                <div className="ring-label">27%</div>
              </div>
              <p className="progress-note">You're ahead of 64% of learners who started at your level.</p>
            </div>

            <div className="sidebar-card">
              <h4>Upcoming Milestones</h4>
              <div className="milestones-list">
                {[
                  { label: 'Complete Phase 2', date: 'In 11 days' },
                  { label: 'Mid-course review', date: 'In 3 weeks' },
                  { label: 'Phase 3 unlock', date: 'In 3 weeks' },
                ].map((m, i) => (
                  <div className="milestone-item" key={i}>
                    <span className="milestone-dot">◇</span>
                    <div>
                      <strong>{m.label}</strong>
                      <span>{m.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main roadmap */}
          <div className="roadmap-main">
            <h2 className="roadmap-main-title">Your Path</h2>
            <div className="phases-list">
              {roadmapData.map((phase, i) => (
                <div
                  key={phase.phase}
                  className={`phase-block phase--${phase.color} phase--${phase.status}`}
                >
                  <div
                    className="phase-header"
                    onClick={() => setExpanded(expanded === phase.phase ? null : phase.phase)}
                  >
                    <div className="phase-meta">
                      <span className={`phase-badge phase-badge--${phase.status}`}>
                        {phase.status === 'completed' ? '✓ Done' :
                         phase.status === 'active' ? '● Active' :
                         phase.status === 'upcoming' ? '↓ Next' : '🔒 Locked'}
                      </span>
                      <span className="phase-duration">{phase.duration}</span>
                    </div>
                    <div className="phase-title-row">
                      <h3>
                        <span className="phase-label">{phase.phase}</span>
                        {phase.title}
                      </h3>
                      <span className="phase-chevron">{expanded === phase.phase ? '∧' : '∨'}</span>
                    </div>
                  </div>

                  {expanded === phase.phase && (
                    <div className="phase-modules">
                      {phase.modules.map((mod, j) => (
                        <div className={`module-row ${mod.done ? 'done' : ''}`} key={j}>
                          <span className="module-check">{mod.done ? '✓' : '○'}</span>
                          <div className="module-info">
                            <strong>{mod.title}</strong>
                            <span>{mod.type} · {mod.time}</span>
                          </div>
                          <span
                            className="module-tag"
                            style={{ background: typeColors[mod.type] || '#F5F5F5' }}
                          >
                            {mod.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Roadmap;
