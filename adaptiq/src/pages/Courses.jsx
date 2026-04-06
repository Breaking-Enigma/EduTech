import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Courses.css';

const filters = ['All', 'Mathematics', 'Computer Science', 'Science', 'Business', 'Design', 'Languages'];

const courses = [
  {
    id: 1,
    title: 'Calculus from First Principles',
    subject: 'Mathematics',
    level: 'Intermediate',
    duration: '8 weeks',
    modules: 14,
    match: 98,
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
    desc: 'Build intuition for limits, derivatives, and integrals through visualization and real-world examples.',
    instructor: 'Dr. Anita Rao',
  },
  {
    id: 2,
    title: 'Data Structures & Algorithms',
    subject: 'Computer Science',
    level: 'Intermediate',
    duration: '10 weeks',
    modules: 18,
    match: 94,
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    desc: 'Master essential CS fundamentals — from arrays to graphs — with practical coding exercises.',
    instructor: 'James Thornton',
  },
  {
    id: 3,
    title: 'Statistics for Real Decisions',
    subject: 'Mathematics',
    level: 'Beginner',
    duration: '6 weeks',
    modules: 12,
    match: 91,
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    desc: 'Understand data, probability, and statistical reasoning without getting lost in formulas.',
    instructor: 'Dr. Maya Patel',
  },
  {
    id: 4,
    title: 'Organic Chemistry Essentials',
    subject: 'Science',
    level: 'Beginner',
    duration: '9 weeks',
    modules: 16,
    match: 87,
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
    desc: 'Explore molecular structure, reactions, and mechanisms with clear visual explanations.',
    instructor: 'Prof. Liu Wei',
  },
  {
    id: 5,
    title: 'UX Research & Design',
    subject: 'Design',
    level: 'Beginner',
    duration: '7 weeks',
    modules: 13,
    match: 85,
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    desc: 'From user research to wireframes — learn to design products people actually enjoy using.',
    instructor: 'Sarah Kim',
  },
  {
    id: 6,
    title: 'Financial Modeling Fundamentals',
    subject: 'Business',
    level: 'Intermediate',
    duration: '8 weeks',
    modules: 15,
    match: 82,
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    desc: 'Build and analyze financial models using spreadsheets — from DCF to scenario analysis.',
    instructor: 'Michael Torres',
  },
];

const levelColors = {
  Beginner: { bg: '#EFF5F0', text: '#557A59' },
  Intermediate: { bg: '#FBF0EB', text: '#9A4F2C' },
  Advanced: { bg: '#EBF3F7', text: '#3D7A95' },
};

function Courses() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = courses.filter(c => {
    const matchFilter = activeFilter === 'All' || c.subject === activeFilter;
    const matchSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        c.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <main className="courses-page">
      <div className="courses-hero">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80"
          alt="Courses"
          className="courses-hero-img"
        />
        <div className="courses-hero-overlay" />
        <div className="courses-hero-content">
          <p className="section-label" style={{ color: 'var(--sand-light)' }}>Content Library</p>
          <h1>Courses built for<br /><em>your path</em></h1>
          <p>Every course is sequenced and matched to your current level and roadmap.</p>
        </div>
      </div>

      <div className="courses-body">
        <div className="container">
          {/* Search + Filter */}
          <div className="courses-controls">
            <div className="search-wrap">
              <span className="search-icon">⌕</span>
              <input
                type="text"
                placeholder="Search courses…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="filter-tabs">
              {filters.map(f => (
                <button
                  key={f}
                  className={`filter-tab ${activeFilter === f ? 'active' : ''}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Courses grid */}
          <div className="courses-grid">
            {filtered.map(course => {
              const lvl = levelColors[course.level] || {};
              return (
                <div className="course-card" key={course.id}>
                  <div className="course-img">
                    <img src={course.img} alt={course.title} />
                    <div className="course-match-badge">{course.match}% match</div>
                  </div>
                  <div className="course-body">
                    <div className="course-meta-row">
                      <span
                        className="course-level"
                        style={{ background: lvl.bg, color: lvl.text }}
                      >
                        {course.level}
                      </span>
                      <span className="course-subject">{course.subject}</span>
                    </div>
                    <h3>{course.title}</h3>
                    <p>{course.desc}</p>
                    <div className="course-stats">
                      <span>⊞ {course.modules} modules</span>
                      <span>◷ {course.duration}</span>
                    </div>
                    <div className="course-footer">
                      <span className="course-instructor">{course.instructor}</span>
                      <Link to="/roadmap" className="btn-primary course-btn">
                        Start →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="empty-state">
              <p>No courses match your search. Try a different keyword or filter.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Courses;
