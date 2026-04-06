import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Assessment.css';

const subjects = [
  { id: 'math', label: 'Mathematics', icon: '∑', desc: 'Algebra, Calculus, Statistics' },
  { id: 'cs', label: 'Computer Science', icon: '⟨/⟩', desc: 'Programming, Algorithms, Data' },
  { id: 'science', label: 'Science', icon: '⚗', desc: 'Physics, Chemistry, Biology' },
  { id: 'lang', label: 'Languages', icon: '◎', desc: 'Writing, Grammar, Literature' },
  { id: 'business', label: 'Business', icon: '◈', desc: 'Finance, Strategy, Marketing' },
  { id: 'design', label: 'Design', icon: '◇', desc: 'UI/UX, Visual, Product' },
];

const goals = [
  { id: 'catch-up', label: 'Catch up to my class', icon: '↑' },
  { id: 'deep', label: 'Deep-dive a topic', icon: '◉' },
  { id: 'exam', label: 'Prepare for an exam', icon: '✓' },
  { id: 'career', label: 'Career development', icon: '→' },
];

const levels = [
  { id: 'beginner', label: 'Beginner', desc: "I'm just starting out" },
  { id: 'intermediate', label: 'Intermediate', desc: 'I know the basics' },
  { id: 'advanced', label: 'Advanced', desc: 'I want deeper challenges' },
];

function Assessment() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState({ subject: '', goal: '', level: '', time: '' });

  const totalSteps = 4;
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    else navigate('/roadmap');
  };

  const canNext = () => {
    if (step === 1) return !!selected.subject;
    if (step === 2) return !!selected.goal;
    if (step === 3) return !!selected.level;
    if (step === 4) return !!selected.time;
    return false;
  };

  return (
    <main className="assessment-page">
      <div className="assessment-hero">
        <img
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&q=80"
          alt="Assessment background"
          className="assessment-hero-img"
        />
        <div className="assessment-hero-overlay" />
        <div className="assessment-hero-text">
          <p className="section-label" style={{ color: 'var(--sand-light)' }}>Step {step} of {totalSteps}</p>
          <h1>Let's build your<br /><em>personal roadmap</em></h1>
          <p>Four quick questions to understand your starting point and goals.</p>
        </div>
      </div>

      <div className="assessment-body">
        <div className="assessment-container">
          {/* Progress bar */}
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
            {[1, 2, 3, 4].map(n => (
              <div key={n} className={`progress-dot ${step >= n ? 'active' : ''}`}>
                {step > n ? '✓' : n}
              </div>
            ))}
          </div>

          {/* Step 1: Subject */}
          {step === 1 && (
            <div className="step-block fade-up">
              <h2>What do you want to learn?</h2>
              <p className="step-desc">Choose the subject you'd like to focus on.</p>
              <div className="subject-grid">
                {subjects.map(s => (
                  <button
                    key={s.id}
                    className={`subject-card ${selected.subject === s.id ? 'selected' : ''}`}
                    onClick={() => setSelected({ ...selected, subject: s.id })}
                  >
                    <span className="subject-icon">{s.icon}</span>
                    <strong>{s.label}</strong>
                    <span>{s.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Goal */}
          {step === 2 && (
            <div className="step-block fade-up">
              <h2>What's your primary goal?</h2>
              <p className="step-desc">This helps us shape the direction of your roadmap.</p>
              <div className="goal-grid">
                {goals.map(g => (
                  <button
                    key={g.id}
                    className={`goal-card ${selected.goal === g.id ? 'selected' : ''}`}
                    onClick={() => setSelected({ ...selected, goal: g.id })}
                  >
                    <span className="goal-icon">{g.icon}</span>
                    <strong>{g.label}</strong>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Level */}
          {step === 3 && (
            <div className="step-block fade-up">
              <h2>What's your current level?</h2>
              <p className="step-desc">Be honest — there's no wrong answer.</p>
              <div className="level-list">
                {levels.map(l => (
                  <button
                    key={l.id}
                    className={`level-card ${selected.level === l.id ? 'selected' : ''}`}
                    onClick={() => setSelected({ ...selected, level: l.id })}
                  >
                    <div>
                      <strong>{l.label}</strong>
                      <span>{l.desc}</span>
                    </div>
                    <span className="level-check">{selected.level === l.id ? '●' : '○'}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Time */}
          {step === 4 && (
            <div className="step-block fade-up">
              <h2>How much time can you commit?</h2>
              <p className="step-desc">Per week, on average — we'll build your plan around this.</p>
              <div className="time-grid">
                {[
                  { id: '1-3', label: '1–3 hrs / week', sub: 'Steady & relaxed' },
                  { id: '4-6', label: '4–6 hrs / week', sub: 'Consistent progress' },
                  { id: '7-10', label: '7–10 hrs / week', sub: 'Accelerated pace' },
                  { id: '10+', label: '10+ hrs / week', sub: 'Full immersion' },
                ].map(t => (
                  <button
                    key={t.id}
                    className={`time-card ${selected.time === t.id ? 'selected' : ''}`}
                    onClick={() => setSelected({ ...selected, time: t.id })}
                  >
                    <strong>{t.label}</strong>
                    <span>{t.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="step-actions">
            {step > 1 && (
              <button className="btn-outline" onClick={() => setStep(step - 1)}>
                ← Back
              </button>
            )}
            <button
              className="btn-primary"
              onClick={handleNext}
              disabled={!canNext()}
            >
              {step === totalSteps ? 'Build My Roadmap →' : 'Continue →'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Assessment;
