import React, { useState } from 'react';
import '../styles/Progress.css';

const weeklyData = [
  { week: 'W1', score: 62, hours: 3 },
  { week: 'W2', score: 68, hours: 4 },
  { week: 'W3', score: 71, hours: 3.5 },
  { week: 'W4', score: 75, hours: 5 },
  { week: 'W5', score: 78, hours: 4.5 },
  { week: 'W6', score: 82, hours: 6 },
];

const skillBreakdown = [
  { skill: 'Core Concepts', mastery: 92, prev: 78 },
  { skill: 'Problem Solving', mastery: 80, prev: 65 },
  { skill: 'Applied Practice', mastery: 74, prev: 58 },
  { skill: 'Advanced Topics', mastery: 45, prev: 30 },
  { skill: 'Critical Analysis', mastery: 68, prev: 55 },
];

const achievements = [
  { icon: '⭐', title: '7-Day Streak', desc: 'Studied 7 days in a row', earned: true },
  { icon: '◉', title: 'First Module', desc: 'Completed your first module', earned: true },
  { icon: '↑', title: 'Quick Learner', desc: 'Improved 20 pts in one week', earned: true },
  { icon: '✓', title: 'Quiz Master', desc: 'Scored 90%+ on 3 quizzes', earned: false },
  { icon: '⊞', title: 'Phase Complete', desc: 'Finish Phase 2', earned: false },
  { icon: '◈', title: 'Half-Way There', desc: 'Reach 50% course completion', earned: false },
];

const maxScore = 100;
const maxHeight = 120;

function BarChart({ data }) {
  return (
    <div className="bar-chart">
      {data.map((d, i) => (
        <div key={i} className="bar-col">
          <div className="bar-wrap">
            <div
              className="bar"
              style={{ height: `${(d.score / maxScore) * maxHeight}px` }}
              title={`Score: ${d.score}`}
            />
          </div>
          <span className="bar-label">{d.week}</span>
          <span className="bar-val">{d.score}</span>
        </div>
      ))}
    </div>
  );
}

function Progress() {
  const [tab, setTab] = useState('overview');

  return (
    <main className="progress-page">
      <div className="progress-hero">
        <img
          src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1400&q=80"
          alt="Progress tracking"
          className="progress-hero-img"
        />
        <div className="progress-hero-overlay" />
        <div className="progress-hero-content">
          <p className="section-label" style={{ color: 'var(--sand-light)' }}>Measurable Growth</p>
          <h1>Your Progress<br /><em>at a glance</em></h1>
          <p>Real metrics showing your improvement over time — not just completion percentages.</p>
        </div>
      </div>

      <div className="progress-body">
        <div className="container">

          {/* KPI row */}
          <div className="kpi-row">
            {[
              { label: 'Mastery Score', value: '82', unit: '/100', change: '+20 from start', color: 'sage' },
              { label: 'Hours Studied', value: '26', unit: 'hrs', change: '+6 vs last month', color: 'blue' },
              { label: 'Avg Quiz Score', value: '88', unit: '%', change: 'Top 18% of peers', color: 'terra' },
              { label: 'Completion', value: '27', unit: '%', change: 'On track for 12 wks', color: 'sand' },
            ].map((k, i) => (
              <div className={`kpi-card kpi--${k.color}`} key={i}>
                <span className="kpi-label">{k.label}</span>
                <div className="kpi-value">
                  <strong>{k.value}</strong>
                  <span>{k.unit}</span>
                </div>
                <span className="kpi-change">{k.change}</span>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="progress-tabs">
            {['overview', 'skills', 'achievements'].map(t => (
              <button
                key={t}
                className={`progress-tab ${tab === t ? 'active' : ''}`}
                onClick={() => setTab(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* Overview tab */}
          {tab === 'overview' && (
            <div className="tab-content fade-up">
              <div className="progress-grid">
                <div className="progress-section-card">
                  <h3>Mastery Score Over Time</h3>
                  <p className="section-subtitle">Weekly progression from week 1 to present</p>
                  <BarChart data={weeklyData} />
                  <div className="chart-note">
                    <span className="trend-up">↑ +20 points</span> improvement since you started
                  </div>
                </div>

                <div className="progress-section-card">
                  <h3>Weekly Study Hours</h3>
                  <p className="section-subtitle">Time invested each week</p>
                  <div className="hours-chart">
                    {weeklyData.map((d, i) => (
                      <div className="hours-row" key={i}>
                        <span className="hours-week">{d.week}</span>
                        <div className="hours-bar-wrap">
                          <div
                            className="hours-bar"
                            style={{ width: `${(d.hours / 8) * 100}%` }}
                          />
                        </div>
                        <span className="hours-val">{d.hours}h</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="progress-section-card comparison-card">
                  <h3>How You Compare</h3>
                  <p className="section-subtitle">Your scores vs. peer average at same stage</p>
                  <div className="comparison-list">
                    {[
                      { label: 'Mastery Score', you: 82, avg: 71 },
                      { label: 'Quiz Performance', you: 88, avg: 76 },
                      { label: 'Module Completion', you: 27, avg: 22 },
                    ].map((c, i) => (
                      <div className="compare-item" key={i}>
                        <span className="compare-label">{c.label}</span>
                        <div className="compare-bars">
                          <div className="compare-bar-row">
                            <span>You</span>
                            <div className="compare-bar you">
                              <div style={{ width: `${c.you}%` }} />
                            </div>
                            <span className="compare-num">{c.you}</span>
                          </div>
                          <div className="compare-bar-row">
                            <span>Avg</span>
                            <div className="compare-bar avg">
                              <div style={{ width: `${c.avg}%` }} />
                            </div>
                            <span className="compare-num">{c.avg}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills tab */}
          {tab === 'skills' && (
            <div className="tab-content fade-up">
              <div className="skills-section-card">
                <h3>Skill Mastery Breakdown</h3>
                <p className="section-subtitle">How your understanding has grown in each area</p>
                <div className="skills-list">
                  {skillBreakdown.map((s, i) => (
                    <div className="skill-row" key={i}>
                      <div className="skill-header">
                        <span className="skill-name">{s.skill}</span>
                        <div className="skill-numbers">
                          <span className="skill-prev">was {s.prev}</span>
                          <span className="skill-current">{s.mastery}%</span>
                        </div>
                      </div>
                      <div className="skill-bar-wrap">
                        <div className="skill-bar-bg">
                          <div className="skill-bar-prev" style={{ width: `${s.prev}%` }} />
                          <div className="skill-bar-now" style={{ width: `${s.mastery}%` }} />
                        </div>
                      </div>
                      <span className="skill-gain">+{s.mastery - s.prev} pts</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Achievements tab */}
          {tab === 'achievements' && (
            <div className="tab-content fade-up">
              <div className="achievements-grid">
                {achievements.map((a, i) => (
                  <div className={`achievement-card ${a.earned ? 'earned' : 'locked'}`} key={i}>
                    <div className="achievement-icon">{a.icon}</div>
                    <h4>{a.title}</h4>
                    <p>{a.desc}</p>
                    <span className="achievement-status">
                      {a.earned ? '✓ Earned' : '🔒 Locked'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Progress;
