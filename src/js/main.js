import "../css/style.css";

import {
    createStars,
    createMagicParticles,
    createShootingStar
} from "./particles.js";
import { showScene } from "./scene-manager.js";
import { animateHero } from "./animation.js";

document.addEventListener("DOMContentLoaded", () => {

    createStars();
    createMagicParticles();

    createShootingStar();

    showScene(0);

    setTimeout(() => {

        showScene(1);

        animateHero();

    }, 3000);

});