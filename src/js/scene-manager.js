const scenes = document.querySelectorAll(".scene");

export function showScene(index) {

    scenes.forEach(scene => {

        scene.classList.add("hidden");

    });

    scenes[index].classList.remove("hidden");

}