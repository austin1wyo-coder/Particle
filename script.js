document.addEventListener("click", function(e) {

    for (let i = 0; i < 20; i++) {

        const particle = document.createElement("div");
        particle.className = "particle";

        particle.style.left = e.clientX + "px";
        particle.style.top = e.clientY + "px";

        // arah acak
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;

        particle.style.setProperty("--x", x + "px");
        particle.style.setProperty("--y", y + "px");

        document.body.appendChild(particle);

        particle.addEventListener("animationend", () => {
            particle.remove();
        });
    }
});