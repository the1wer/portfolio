"use strict"

window.onload = function () {
    const parallax = document.querySelector('.header');
    const position = document.documentElement;

    position.addEventListener("mousemove", e => {
        position.style.setProperty('--x', e.clientX + 'px');
    })

    if (parallax) {
        const content = document.querySelector('.parallax__container');
        const text = document.querySelector('.parallax__text');
        const forText = 20;
        const speed = 0.1;
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            text.style.cssText = `transform: translate(${positionX / forText}%,${positionY / forText}%);`;

            requestAnimationFrame(setMouseParallaxStyle);

        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 1;

            coordXprocent = coordX / parallaxWidth * 200;
            coordYprocent = coordY / parallaxHeight * 200;

        });
    }
}