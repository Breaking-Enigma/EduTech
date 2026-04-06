# AdaptIQ — Adaptive Learning Platform

A personalized EdTech platform that generates adaptive learning roadmaps based on student level and goals.

## Pages

- **Home** (`/`) — Landing page with hero, stats, how-it-works, features, testimonials
- **Assessment** (`/assessment`) — 4-step onboarding quiz to determine subject, goal, level, and time commitment
- **Roadmap** (`/roadmap`) — Personalized learning path with phases, modules, and progress tracking
- **Dashboard** (`/dashboard`) — Student overview with metrics, recommendations, and activity
- **Courses** (`/courses`) — Searchable, filterable course library with match scoring
- **Progress** (`/progress`) — Mastery charts, skill breakdown, peer comparison, and achievements

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

## Tech Stack

- React 18
- React Router v6
- Pure CSS (no UI library)
- Google Fonts: DM Serif Display + DM Sans
- Unsplash images (via URL)

## Project Structure

```
src/
  pages/
    Home.jsx
    Assessment.jsx
    Roadmap.jsx
    Dashboard.jsx
    Courses.jsx
    Progress.jsx
  styles/
    global.css
    Navbar.css
    Home.css
    Assessment.css
    Roadmap.css
    Dashboard.css
    Courses.css
    Progress.css
  components/
    Navbar.jsx
  App.jsx
  index.js
```
