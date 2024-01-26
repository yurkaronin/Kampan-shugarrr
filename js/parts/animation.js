gsap.registerPlugin(ScrollTrigger);

// Функция для создания анимации клика
function createClickAnimation(element) {
    const tl = gsap.timeline();

    // Начальные стили
    tl.to(element, { scale: 0.95, duration: 0.1, ease: 'power1.inOut' });

    // Анимация нажатия
    tl.to(element, { scale: 1, duration: 0.1, ease: 'power1.inOut' });

    // Добавляем обработчик события клика
    element.addEventListener('click', () => {
        tl.restart(); // Запускаем анимацию при клике
    });
}

// Находим все элементы с классом .click
const clickableElements = document.querySelectorAll('.click');

// Применяем анимацию к каждому элементу
clickableElements.forEach((element) => {
    createClickAnimation(element);
});
