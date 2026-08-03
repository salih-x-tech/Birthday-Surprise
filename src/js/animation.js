import gsap from "gsap";
import { showScene } from "./scene-manager.js";
import { startFireworks } from "./fireworks.js";

let floatingTween;

export function animateHero() {

    const tl = gsap.timeline();

    tl.from(".hero-title", {

        y: 40,
        opacity: 0,
        duration: 1

    })

    .from(".hero-name", {

        y: 30,
        opacity: 0,
        scale: 0.8,
        duration: 1

    }, "-=0.4")

    .from(".gift-wrapper", {

        y: 60,
        opacity: 0,
        scale: 0.8,
        duration: 1

    }, "-=0.5")

    .from(".tap-text", {

        opacity: 0,
        y: 20,
        duration: 0.8

    });

    floatingTween = gsap.to(".gift", {

        y: -12,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"

    });

    gsap.to(".tap-text", {

        opacity: 0.4,
        scale: 0.96,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"

    });

    const gift = document.querySelector(".gift");

    gift.addEventListener("click", onGiftClick);

}

function createSparkles() {

    const wrapper = document.querySelector(".gift-wrapper");

    for (let i = 0; i < 35; i++) {

        const sparkle = document.createElement("span");

        sparkle.className = "sparkle";

        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;

        sparkle.style.background = `hsl(${Math.random() * 360},100%,70%)`;

        wrapper.appendChild(sparkle);

        gsap.fromTo(

            sparkle,

            {
                scale: 0,
                opacity: 1
            },

            {

                x: gsap.utils.random(-180,180),

                y: gsap.utils.random(-220,-80),

                scale: gsap.utils.random(0.5,2),

                opacity:0,

                duration:gsap.utils.random(1,2),

                ease:"power2.out",

                delay:Math.random()*0.4,

                onComplete(){

                    sparkle.remove();

                }

            }

        );

    }

}

function onGiftClick() {

    floatingTween.kill();

    const tl = gsap.timeline();

    tl.to(".gift", {

        scale: 0.92,

        rotation: -6,

        duration: 0.12,

        ease: "power2.in"

    })

    .to(".gift", {

        scale: 1.15,

        rotation: 6,

        duration: 0.22,

        ease: "back.out(3)"

    })

    .to(".gift-lid", {

        y: -45,
        rotation: -15,
        transformOrigin: "bottom center",
        duration: 0.6,
        ease: "back.out(1.8)"

    }, "-=0.1")

    .to(".gift-light", {

        opacity: 1,
        scale: 18,
        duration: 0.8,
        ease: "power2.out"

    }, "-=0.3")

    .to(".magic-ring", {

        scale: 12,

        opacity: 0,

        duration: 0.8,

        ease: "power2.out"

    }, "-=0.7")

    .to(".gift-rays span", {

        opacity: 1,

        scaleY: 1.4,

        duration: 0.6,

        stagger: 0.04,

        ease: "power2.out"

    }, "-=0.6")
    
    .to(".gift-sparkles span", {

        opacity: 1,

        y: -120,

        scale: 1.8,

        stagger: 0.08,

        duration: 1,

        ease: "power2.out"

    }, "-=0.5")
    
    .to(".gift-confetti span", {

        opacity: 1,

        x: () => gsap.utils.random(-180, 180),

        y: () => gsap.utils.random(-220, -120),

        rotation: () => gsap.utils.random(-360, 360),

        duration: 1.2,

        stagger: 0.03,

        ease: "power2.out"

    }, "-=0.8")

    .call(() => {

        createSparkles();

        gsap.fromTo(

            ".app",

            {
                x: -6
            },

            {
                x: 6,

                duration: 0.05,

                repeat: 5,

                yoyo: true,

                onComplete() {

                    gsap.set(".app", {

                        x: 0

                    });

                }

            }

        );

        gsap.to("#hero", {

            opacity: 0,

            duration: 1,

            onComplete: () => {

                showScene(4);

                animateMessage();

            }

        });

    });

}


function animateMessage() {

    const tl = gsap.timeline();

    tl.from(".message-title", {

        y: 40,
        opacity: 0,
        duration: 0.8

    })

    .from(".message-text", {

        y: 30,
        opacity: 0,
        duration: 1

    })

    .from(".continue-btn", {

        scale: 0.8,
        opacity: 0,
        duration: 0.6

    });

    const continueBtn = document.querySelector(".continue-btn");

    continueBtn.addEventListener("click", () => {

        showScene(5);

        animateWish();

    });

}


function animateWish() {

    gsap.from(".wish-title", {

        y: 40,
        opacity: 0,
        duration: 0.8

    });

    gsap.from(".wish-text", {

        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2

    });

    gsap.from(".wish-orb", {

        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.5

    });

    gsap.from(".wish-hint", {

        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1

    });

    gsap.to(".wish-orb", {

        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"

    });

    gsap.to(".orb-core", {

        scale: 1.12,

        duration: 1.5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });


    const orb = document.querySelector(".wish-orb");

    orb.addEventListener("click", onOrbClick);

}


function onOrbClick() {

    const tl = gsap.timeline();

    tl.to(".wish-orb", {

        scale: 1.3,

        duration: 0.3,

        ease: "power2.out"

    })

    .to(".orb-core", {

        scale: 2,

        opacity: 0,

        duration: 0.5,

        ease: "power2.out"

    }, "-=0.2")

    .to(".wish-light", {

        scale: 12,

        opacity: 1,

        duration: 0.7,

        ease: "power2.out"

    }, "-=0.4")

    .to(".wish-orb", {

        scale: 0,

        opacity: 0,

        duration: 0.6,

        ease: "back.in(1.8)"

    })

    .call(() => {

        gsap.to("#wish", {

            opacity: 0,

            duration: 0.8,

            onComplete: () => {

                showScene(6);

                animateCake();

            }

        });

    });

}


export function animateCake() {

    const tl = gsap.timeline();

    tl.from(".cake-title", {

        y: 40,
        opacity: 0,
        duration: 0.8

    })

    .from(".cake-text", {

        y: 30,
        opacity: 0,
        duration: 0.8

    }, "-=0.4")

    .from(".cake", {

        y: 50,
        opacity: 0,
        scale: 0.8,
        duration: 1

    }, "-=0.3")

    .from(".cake-hint", {

        opacity: 0,
        y: 20,
        duration: 0.6

    });

    gsap.to(".cake", {

        y: -10,

        duration: 2,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

    const blowBtn = document.querySelector(".blow-btn");

    blowBtn.addEventListener("click", blowCandle);

}


function blowCandle() {

    const tl = gsap.timeline();

    tl.to(".flame", {

        scale: 0,

        opacity: 0,

        duration: 0.4,

        ease: "power2.in"

    })

    .to(".smoke", {

        opacity: 0.8,

        y: -60,

        scale: 2,

        duration: 1.5,

        ease: "power1.out"

    }, "-=0.1")

    .to(".smoke", {

        opacity: 0,

        duration: 0.5

    })

    .to(".cake", {

        scale: 1.05,

        duration: 0.3,

        yoyo: true,

        repeat: 1,

        ease: "power2.out"

    })

    .call(() => {

        gsap.to("#cake", {

            opacity: 0,

            duration: 1,

            onComplete: () => {

                showScene(7);

                animateFireworks();

            }

        });

    });

}

export function animateFireworks() {

    const tl = gsap.timeline();

    tl.from(".fireworks-title", {

        y: 50,

        opacity: 0,

        duration: 1

    })

    .from(".fireworks-text", {

        y: 30,

        opacity: 0,

        duration: 0.8

    }, "-=0.4");

    startFireworks();

        gsap.delayedCall(6, () => {

        gsap.to("#fireworks", {

            opacity: 0,

            duration: 1,

            onComplete: () => {

                showScene(8);

                animateEnding();

            }

        });

    });

}


export function animateEnding() {

    const tl = gsap.timeline();

    tl.from(".ending-title", {

        y: 40,

        opacity: 0,

        duration: 1

    })

    .from(".ending-text", {

        y: 30,

        opacity: 0,

        duration: 1

    }, "-=0.4")

    .from(".replay-btn", {

        scale: 0.8,

        opacity: 0,

        duration: 0.6

    });

    const replayBtn = document.querySelector(".replay-btn");

    replayBtn.addEventListener("click", () => {

        location.reload();

    });

}