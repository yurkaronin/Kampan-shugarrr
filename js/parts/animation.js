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


// Получите элемент, который вы хотите анимировать, по его классу
const animateElement = document.querySelector('.animate-logo');

// Создайте GSAP анимацию
const animation = gsap.to(animateElement, {
  rotation: 120, // Поворот на 360 градусов (или другое значение)
  transformOrigin: 'center center', // Устанавливаем центр вращения в центр элемента
  repeat: -1, // Бесконечное повторение
  ease: 'linear', // Тип анимации (линейный для плавного вращения)
  duration: 5, // Длительность анимации (в секундах)
});

// Получаем все элементы, которые нужно анимировать, по их классу
const animateElements = document.querySelectorAll('.animate-spin');

// Инициализация ScrollTrigger и анимации для каждого элемента
animateElements.forEach(element => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top bottom", // Запуск анимации, когда элемент входит в область видимости
      end: "bottom top",
      scrub: true, // Связь скорости анимации со скоростью прокрутки
      // markers: true,
    },
    rotation: 360, // Поворот на 360 градусов
    transformOrigin: 'center center', // Центр вращения
    ease: 'none', // Без дополнительной функции плавности
    repeat: -1 // Бесконечное повторение
  });
});



gsap.from(".hero__label, .hero__title, .hero__text, .hero__buttons", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top center"
  },
  duration: 0.5,
  opacity: 0,
  y: 30,
  stagger: 0.4,
  ease: "power2.out"
});

gsap.from(".feedback", {
  scrollTrigger: {
    trigger: ".hero__grid-item:last-child",
    start: "top bottom"
  },
  duration: 0.8,
  opacity: 0,
  rotationY: 90, // Поворот вокруг вертикальной оси на 90 градусов
  transformOrigin: "center center", // Точка, относительно которой происходит поворот
  x: 30,
  ease: "power2.out",
  delay: 0.6
});

// Получаем все path элементы, кроме тех, что имеют класс 'animate-spin'
const paths = document.querySelectorAll('.custom-icon svg path:not(.animate-spin)');
// Инициализация ScrollTrigger и анимации для каждого path
paths.forEach(path => {
  gsap.from(path, {
    scrollTrigger: {
      // markers: true,
      trigger: path,
      start: "top 75%", // Анимация начинается, когда верх path достигает центра экрана
      toggleActions: "play none none reverse", // Анимация играет при входе и обратно при выходе
    },
    y: -20, // Начальное смещение по оси Y
    opacity: 0, // Начальная прозрачность
    duration: 1, // Продолжительность анимации
    ease: "power1.out" // Функция плавности
  });
});





