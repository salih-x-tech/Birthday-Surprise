export function startFireworks() {

    const canvas = document.getElementById("fireworks-canvas");

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [

        "#ff4d6d",
        "#ffd166",
        "#7b2cff",
        "#4cc9f0",
        "#ffffff",
        "#ff8fab"

    ];

    function burst(x, y) {

        for (let i = 0; i < 80; i++) {

            const angle = Math.random() * Math.PI * 2;

            const speed = Math.random() * 6 + 2;

            const particle = {

                x,
                y,

                dx: Math.cos(angle) * speed,

                dy: Math.sin(angle) * speed,

                life: 80,

                color: colors[Math.floor(Math.random() * colors.length)]

            };

            particles.push(particle);

        }

    }

    const particles = [];

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, index) => {

            p.x += p.dx;

            p.y += p.dy;

            p.dy += 0.02;

            p.life--;

            ctx.beginPath();

            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);

            ctx.fillStyle = p.color;

            ctx.fill();

            if (p.life <= 0) {

                particles.splice(index, 1);

            }

        });

        requestAnimationFrame(animate);

    }

    animate();

    setInterval(() => {

        burst(

            Math.random() * canvas.width,

            Math.random() * canvas.height * 0.6

        );

    }, 700);

}