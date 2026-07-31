# Architecture

> Version 1.0

---

# Architecture Goal

Build a clean, modular, scalable, and maintainable single-page application using HTML, CSS, and Vanilla JavaScript.

The architecture should prioritize readability, performance, and future expansion.

---

# High-Level Architecture

```
Browser
        │
        ▼
index.html
        │
        ▼
UI Structure
        │
        ▼
CSS System
        │
        ▼
JavaScript Modules
        │
        ▼
Animations
        │
        ▼
User Interaction
```

---

# Folder Structure

```
src/
│
├── index.html
│
├── css/
│   ├── variables.css
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── ui.js
│   ├── animation.js
│   ├── audio.js
│   ├── particles.js
│   └── utils.js
│
├── assets/
│
└── components/
```

---

# HTML Architecture

The page is divided into independent sections.

```
Body
│
├── Loader
├── Hero
├── Gift
├── Birthday Message
├── Wish Section
├── Cake
├── Fireworks
├── Ending
└── Audio Controls
```

Each section should have its own ID for navigation and animation.

---

# CSS Architecture

variables.css

Stores:

- Colors
- Fonts
- Shadows
- Radius
- Spacing
- Z-index

---

style.css

Stores:

- Layout
- Sections
- Components

---

animations.css

Stores:

- Keyframes
- Transitions
- Hover Effects
- Loading Animations

---

responsive.css

Stores:

- Mobile
- Tablet
- Desktop

---

# JavaScript Responsibilities

main.js

Application entry point.

Responsible for:

- Initializing the app
- Loading sections
- Registering events

---

ui.js

Handles:

- Buttons
- Cards
- UI state
- Section visibility

---

animation.js

Responsible for:

- GSAP timelines
- Fade effects
- Scale
- Motion
- Scene transitions

---

audio.js

Controls:

- Background music
- Sound effects
- Mute state

---

particles.js

Controls:

- Stars
- Floating particles
- Background effects

---

utils.js

Contains reusable helper functions.

Examples:

- Random numbers
- Delay
- DOM helpers

---

# Rendering Flow

```
Page Load

↓

Loader

↓

Initialize Assets

↓

Show Hero

↓

Wait for User

↓

Start Story

↓

Play Animations

↓

Finish Experience

↓

Replay
```

---

# Event Flow

```
Click Continue

↓

Start Hero Animation

↓

Gift Opens

↓

Message Appears

↓

Wish Interaction

↓

Cake

↓

Fireworks

↓

Ending
```

---

# State Management

Simple application state.

```
Loading

↓

Ready

↓

Playing

↓

Completed

↓

Replay
```

Only one state should be active at a time.

---

# Animation Strategy

Use GSAP timelines for:

- Scene transitions
- Fade
- Scale
- Camera movement

Use CSS animations for:

- Floating
- Glow
- Twinkle
- Pulse

Use Canvas / tsParticles for:

- Stars
- Fireworks
- Particle effects

---

# Performance Strategy

- Mobile First
- Lazy-load media
- Compress images
- Minimize DOM updates
- Use requestAnimationFrame where appropriate
- Prefer transforms over layout-changing properties
- Target 60 FPS

---

# Accessibility

- Semantic HTML
- Keyboard support
- Visible focus states
- Sufficient color contrast
- Reduced motion support

---

# Future Scalability

The architecture should allow future support for:

- Multiple recipients
- Multiple themes
- Dynamic messages
- Photo galleries
- Video backgrounds
- Multi-language support