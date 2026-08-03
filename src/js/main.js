import "../css/style.css";

import {
    createStars,
    createMagicParticles,
    createShootingStar
} from "./particles.js";

import { showScene } from "./scene-manager.js";
import { animateHero } from "./animation.js";

function updateUserName(name) {

    document.querySelectorAll(".user-name").forEach(element => {

        element.textContent = name;

    });

}

document.addEventListener("DOMContentLoaded", () => {

    createStars();
    createMagicParticles();
    createShootingStar();

    // Show Loader
    showScene(0);

    // After loader, show Welcome screen
    setTimeout(() => {

        showScene(1);

    }, 3000);

    // Start button
    const startBtn = document.getElementById("start-btn");

    if (startBtn) {

        startBtn.addEventListener("click", () => {

            const input = document.getElementById("user-name");

            const name = input.value.trim();

            if (!name) {

                alert("Please enter your name.");

                return;

            }

            // Save name
            localStorage.setItem("birthdayName", name);

            // Update Hero Name
            document.getElementById("birthday-name").textContent = name;

            updateUserName(name);

            showScene(2);

            animateHero();

        });

    }

});