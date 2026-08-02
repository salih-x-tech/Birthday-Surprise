/* ==========================================
   PARTICLE SYSTEM
========================================== */

export function createStars() {

    const container = document.querySelector(".stars");

    if (!container) return;

    const totalStars = 220;

    for (let i = 0; i < totalStars; i++) {

        const star = document.createElement("span");

        star.className = "star";

        const size = Math.random() * 3 + 1;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // Random twinkle timing
        star.style.animationDuration = `${2 + Math.random() * 4}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;

        container.appendChild(star);

    }

}

/* ==========================================
   MAGIC PARTICLES
========================================== */

export function createMagicParticles() {

    const layer = document.getElementById("background-layer");

    if (!layer) return;

    const totalParticles = 40;

    for (let i = 0; i < totalParticles; i++) {

        const particle = document.createElement("span");

        particle.className = "magic-particle";

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${8 + Math.random() * 8}s`;

        particle.style.transform = `scale(${0.5 + Math.random()})`;

        layer.appendChild(particle);

    }

}

export function createShootingStar() {

    const star = document.querySelector(".shooting-star");

    if (!star) return;

    function shoot() {

        star.style.transition = "none";
        star.style.opacity = "1";

        star.style.left = `${Math.random() * 40}%`;
        star.style.top = `${Math.random() * 30}%`;

        requestAnimationFrame(() => {

            star.style.transition =
                "transform 1s linear, opacity 1s ease";

            star.style.transform =
                "translate(900px, 500px) rotate(-35deg)";

            setTimeout(() => {

                star.style.opacity = "0";
                star.style.transform = "rotate(-35deg)";

            }, 1000);

        });

        const next = 8000 + Math.random() * 7000;

        setTimeout(shoot, next);

    }

    shoot();

}