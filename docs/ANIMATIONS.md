# Motion Design Specification

> Version 1.0

---

# Motion Philosophy

Animations should feel elegant, natural, and meaningful.

Every movement should help tell the story or improve the user experience.

Animations should never distract the user.

---

# Motion Principles

- Smooth
- Slow
- Cinematic
- Natural
- Consistent
- Purposeful

Avoid:

- Random movement
- Fast spinning
- Excessive bouncing
- Flashing effects
- Overlapping animations

---

# Global Timing

Micro Animation

200ms

Small Transition

300ms

Normal Transition

500ms

Large Scene Transition

800ms

Hero Animation

1200ms

Grand Finale

1500ms+

---

# Easing

Primary

ease-in-out

Secondary

ease-out

Elastic easing should only be used for the gift opening.

---

# Scene Animations

---

## Scene 1 — Loader

Purpose

Create curiosity.

Animations

- Fade from black
- Stars appear gradually
- Loading text fades in
- Soft zoom

Trigger

Page Load

Duration

5 seconds

---

## Scene 2 — Hero

Purpose

Welcome the user.

Animations

- Heading fades upward
- Glow appears behind text
- Sparkle trail
- Continue button fades in

Trigger

Loader Complete

---

## Scene 3 — Gift

Purpose

Encourage interaction.

Idle Animation

- Floating
- Gentle rotation
- Ribbon movement

On Tap

- Scale slightly
- Lid opens
- Golden light expands
- Particle burst
- Confetti begins

---

## Scene 4 — Birthday Message

Purpose

Deliver emotional content.

Animations

- Card fades in
- Paragraphs appear one after another
- Glow around the card
- Gentle upward motion

---

## Scene 5 — Wish Orb

Purpose

Interactive moment.

Idle

Soft pulse

On Touch

- Bright flash
- Ripple
- Shooting star
- Particle burst

---

## Scene 6 — Birthday Cake

Purpose

Celebrate.

Animations

- Cake scales in
- Candle flames flicker
- Glow around candles

On Blow

- Flames disappear
- Smoke rises
- Confetti starts

---

## Scene 7 — Fireworks

Purpose

Grand celebration.

Animations

- Fireworks launch
- Multiple explosions
- Golden particles
- Background glow

Text

Happy Birthday Summi

Appears with fade and scale.

---

## Scene 8 — Ending

Purpose

Leave a lasting impression.

Animations

- Slow fade
- Floating stars
- Gentle particle movement
- Replay button appears

---

# Hover Animations

Buttons

- Scale 1.05
- Glow
- Shadow increase

Cards

- Lift slightly
- Shadow grows

Gift

- Stronger floating motion

---

# Background Motion

Continuous

- Twinkling stars
- Floating particles
- Aurora gradient
- Soft light movement

---

# Audio Synchronization

Gift Opening

Play opening sound.

Fireworks

Explosion sounds.

Cake

Blowing sound.

Ending

Music fades gently.

---

# Performance Guidelines

Use CSS animations for:

- Glow
- Float
- Pulse
- Twinkle

Use GSAP for:

- Scene transitions
- Camera movement
- Hero text
- Gift opening

Use Canvas or tsParticles for:

- Fireworks
- Particle effects

---

# Accessibility

If the user prefers reduced motion:

- Disable complex animations
- Keep fade transitions
- Remove camera movement
- Reduce particle count

---

# Motion Goals

- 60 FPS
- Smooth rendering
- Low CPU usage
- Mobile optimized
- Consistent timing