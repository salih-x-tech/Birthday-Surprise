# Scene Flow

> Version 1.0

---

# Purpose

This document defines the application flow, user interactions, state transitions, and scene progression.

It acts as the implementation guide for JavaScript.

---

# Application States

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

Only one state can be active at a time.

---

# Complete Flow

```
Browser Opens
        │
        ▼
Loader
        │
Assets Ready?
        │
   ┌────┴────┐
   │         │
 Yes         No
   │         │
   ▼         │
Hero         │
   │         │
Continue     │
   ▼         │
Gift         │
   ▼         │
Birthday Message
   ▼
Wish Orb
   ▼
Birthday Cake
   ▼
Fireworks
   ▼
Ending
   ▼
Replay
```

---

# Scene Details

## Scene 1

State

Loading

Entry

Page loads.

Exit

Assets are ready.

Next

Hero.

---

## Scene 2

State

Hero

Trigger

Continue Button

Next

Gift

---

## Scene 3

State

Gift

Trigger

Open Gift Button

Next

Birthday Message

---

## Scene 4

State

Birthday Message

Trigger

Continue Button

Next

Wish Orb

---

## Scene 5

State

Wish Orb

Trigger

User taps orb.

Next

Cake

---

## Scene 6

State

Cake

Trigger

Blow Candles

Next

Fireworks

---

## Scene 7

State

Fireworks

Trigger

Animation Complete

Next

Ending

---

## Scene 8

State

Ending

Trigger

Replay Button

Next

Loader

---

# Invalid Actions

During animations:

- Ignore repeated taps.
- Disable buttons until transitions complete.
- Prevent multiple audio starts.

---

# Error Handling

If music fails:

Continue silently.

If animations are disabled:

Use fade transitions.

If assets fail:

Display fallback visuals.

---

# Replay Logic

Replay resets:

- Scene state
- Animations
- Particles
- Audio position
- Fireworks
- Gift state
- Cake state

Return to Scene 1.

---

# Completion Criteria

The experience is complete when:

- All scenes have been viewed.
- Ending message is displayed.
- Replay is available.