
if (document.querySelectorAll(".hamb").length > 0) {
    document.querySelector(".hamb").onclick = toggleMobileMenu;
}
function toggleMobileMenu() {
    document.querySelector("html").classList.toggle("menu_open");
}

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

console.log(`Score 150 / 160
вёрстка валидная +10
вёрстка семантическая +20
используются css-стили +10
контент центрирован +10
вёрстка адаптивная вплоть до 320рх +10
есть бургер меню и плавная прокрутка по якорям +10
присутствует изображение с сохранением пропорций +10
контакты для связи в виде списка +10
содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
содержит пример кода с подсветкой +10
содержит изображение ссылку на выполненный мною проект с описанием +10
выполнено на английском языке +10
выполнены требования к Pull Request +10
дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию +10
видеорезюме отсутствует -10`)