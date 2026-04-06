import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const recentActivity = [
  { type: 'lesson', title: 'Core Concepts Overview', subject: 'Mathematics', time: '2 hrs ago', score: 92 },
  { type: 'quiz', title: 'Fundamentals Check', subject: 'Mathematics', time: 'Yesterday', score: 88 },
  { type: 'project', title: 'Applied Examples', subject: 'Mathematics', time: '2 days ago', score: null },
];

const recommendations = [
  {
    title: 'Intermediate Calculus',
    type: 'Lesson',
    duration: '55 min',
    match: 98,
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80',
  },
  {
    title: 'Problem Set: Derivatives',
    type: 'Practice',
    duration: '40 min',
    match: 95,
    img: 'https://images.unsplash.com/photo-1596496181871-9681eacf9764?w=400&q=80',
  },
  {
    title: 'Linear Algebra Basics',
    type: 'Lesson',
    duration: '70 min',
    match: 90,
    img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80',
  },
];

function Dashboard() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-header">
        <div className="container">
          <div className="dashboard-greeting">
            <div>
              <p className="section-label">Welcome back</p>
              <h1>Good morning, <em>Alex</em></h1>
              <p className="greeting-sub">You're on a 7-day streak. Keep going — you're making real progress.</p>
            </div>
            <div className="streak-badge">
              <span className="streak-icon">🔥</span>
              <span className="streak-num">7</span>
              <span className="streak-label">day streak</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-body">
        <div className="container dashboard-grid">

          {/* Left column */}
          <div className="dash-left">
            {/* Continue learning */}
            <div className="dash-card continue-card">
              <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80"
                alt="Continue learning"
                className="continue-img"
              />
              <div className="continue-overlay" />
              <div className="continue-content">
                <span className="continue-tag">Pick up where you left off</span>
                <h3>Applied Examples</h3>
                <p>Phase 2 · Module 2 of 4 · 40% complete</p>
                <div className="continue-bar">
                  <div className="continue-fill" style={{ width: '40%' }} />
                </div>
                <Link to="/roadmap" className="btn-primary" style={{ marginTop: '16px' }}>
                  Continue →
                </Link>
              </div>
            </div>

            {/* Metrics */}
            <div className="metrics-row">
              {[
                { label: 'Mastery Score', value: '82', unit: '/100', change: '+6 this week', up: true },
                { label: 'Modules Done', value: '4', unit: '/14', change: '29% complete', up: true },
                { label: 'Study Hours', value: '18', unit: 'hrs', change: '+3 hrs vs last week', up: true },
                { label: 'Avg Quiz Score', value: '88', unit: '%', change: '+4 pts vs avg', up: true },
              ].map((m, i) => (
                <div className="metric-card" key={i}>
                  <span className="metric-label">{m.label}</span>
                  <div className="metric-val">
                    <strong>{m.value}</strong>
                    <span>{m.unit}</span>
                  </div>
                  <span className={`metric-change ${m.up ? 'up' : 'down'}`}>{m.change}</span>
                </div>
              ))}
            </div>

            {/* Recommendations */}
            <div className="dash-card">
              <div className="card-header">
                <h3>Recommended for You</h3>
                <Link to="/courses" className="see-all">See all →</Link>
              </div>
              <div className="recommendations-list">
                {recommendations.map((r, i) => (
                  <div className="rec-item" key={i}>
                    <div className="rec-img">
                      <img src={r.img} alt={r.title} />
                    </div>
                    <div className="rec-info">
                      <span className="rec-type">{r.type}</span>
                      <strong>{r.title}</strong>
                      <span className="rec-meta">{r.duration}</span>
                    </div>
                    <div className="rec-match">
                      <span className="match-val">{r.match}%</span>
                      <span className="match-label">match</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="dash-right">
            {/* Progress ring */}
            <div className="dash-card progress-card">
              <h3>Overall Progress</h3>
              <div className="big-ring">
                <svg viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="var(--light-gray)" strokeWidth="10" />
                  <circle
                    cx="60" cy="60" r="50"
                    fill="none"
                    stroke="var(--sage)"
                    strokeWidth="10"
                    strokeDasharray="314"
                    strokeDashoffset="229"
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                  />
                </svg>
                <div className="big-ring-label">
                  <span className="big-pct">27%</span>
                  <span>Complete</span>
                </div>
              </div>
              <div className="ring-breakdown">
                {[
                  { label: 'Phase 1', pct: 100, color: 'var(--sage)' },
                  { label: 'Phase 2', pct: 25, color: 'var(--terracotta-light)' },
                  { label: 'Phase 3', pct: 0, color: 'var(--soft-blue-light)' },
                  { label: 'Phase 4', pct: 0, color: 'var(--sand-light)' },
                ].map((b, i) => (
                  <div className="breakdown-row" key={i}>
                    <div className="breakdown-bar-wrap">
                      <span>{b.label}</span>
                      <div className="breakdown-bar">
                        <div style={{ width: `${b.pct}%`, background: b.color }} />
                      </div>
                    </div>
                    <span className="breakdown-pct">{b.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent activity */}
            <div className="dash-card">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                {recentActivity.map((a, i) => (
                  <div className="activity-item" key={i}>
                    <div className={`activity-icon activity-icon--${a.type}`}>
                      {a.type === 'lesson' ? '▷' : a.type === 'quiz' ? '✓' : '⊞'}
                    </div>
                    <div className="activity-info">
                      <strong>{a.title}</strong>
                      <span>{a.subject} · {a.time}</span>
                    </div>
                    {a.score && <span className="activity-score">{a.score}%</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly plan */}
            <div className="dash-card">
              <h3>This Week's Plan</h3>
              <div className="week-grid">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
                  <div key={d} className={`day-cell ${i < 3 ? 'done' : i === 3 ? 'today' : ''}`}>
                    <span className="day-name">{d}</span>
                    <span className="day-dot">{i < 3 ? '●' : i === 3 ? '◉' : '○'}</span>
                  </div>
                ))}
              </div>
              <p className="week-note">3 of 5 study days completed this week.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
