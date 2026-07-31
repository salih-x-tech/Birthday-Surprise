# Development Rules

> Version 1.0

---

# Purpose

This document defines the development standards for the Birthday Surprise project.

Every new feature, component, animation, and file must follow these rules.

---

# Core Principles

- Keep the code simple.
- Prioritize readability over cleverness.
- Build mobile-first.
- Optimize before adding complexity.
- Every animation must have a purpose.
- Consistency is more important than variety.

---

# Project Structure Rules

- Keep HTML, CSS, and JavaScript separated.
- Do not place CSS inside HTML.
- Do not place JavaScript inside HTML.
- Keep assets organized by type.
- One responsibility per file.

---

# HTML Rules

- Use semantic HTML elements.
- Use meaningful IDs and class names.
- Avoid unnecessary wrapper elements.
- Keep the document structure clean.
- Every section must have a unique ID.

Example:

hero-section

gift-section

cake-section

ending-section

---

# CSS Rules

- Use CSS variables whenever possible.
- Never hardcode colors repeatedly.
- Follow the spacing system from DESIGN.md.
- Keep selectors simple.
- Avoid !important unless absolutely necessary.
- Group related styles together.

---

# JavaScript Rules

- One responsibility per function.
- Use descriptive function names.
- Avoid global variables.
- Prefer const over let.
- Comment only when the code is not self-explanatory.
- Keep functions small and reusable.

---

# Animation Rules

- Every animation must improve the experience.
- Do not animate everything.
- Use smooth easing.
- Avoid distracting motion.
- Keep transitions consistent.
- Respect reduced-motion preferences.

---

# Naming Convention

Folders

lowercase

Example

assets

components

css

js

---

Files

kebab-case

Examples

main.js

style.css

animation-controller.js

---

CSS Classes

kebab-case

Examples

hero-title

gift-box

cake-button

---

JavaScript

Variables

camelCase

Functions

camelCase

Classes

PascalCase

Constants

UPPER_CASE

---

# Accessibility Rules

- Use semantic elements.
- Add alt text where needed.
- Maintain color contrast.
- Ensure keyboard navigation.
- Support reduced motion.
- Make touch targets easy to tap.

---

# Performance Rules

- Optimize images.
- Lazy-load large assets.
- Minimize DOM updates.
- Prefer transform and opacity animations.
- Avoid layout thrashing.
- Target 60 FPS.

---

# Git Rules

Commit after every completed milestone.

Commit messages should be short and meaningful.

Examples

Initialize project

Add design system

Implement loader scene

Create hero section

Add fireworks animation

---

# Documentation Rules

Whenever a major decision is made:

Update

- MEMORY.md

If architecture changes:

Update

- ARCHITECTURE.md

If the user experience changes:

Update

- STORYBOARD.md

If colors, typography, or spacing change:

Update

- DESIGN.md

---

# Code Quality Checklist

Before committing:

- Code works.
- No console errors.
- Mobile tested.
- Readable formatting.
- Unused code removed.
- Documentation updated if necessary.

---

# Definition of Done

A task is complete only when:

- Functionality works.
- Responsive behavior is verified.
- Animations are smooth.
- Accessibility is considered.
- Performance is acceptable.
- Documentation is updated.
- Changes are committed to Git.