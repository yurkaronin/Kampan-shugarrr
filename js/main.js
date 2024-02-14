// прилипающая шапка (функции и переменные) ВНИМАНИЕ - вызов фукнции прописал ниже. после DOMContentLoaded
let lastKnownScrollY = 0;
let ticking = false;

function headerChange() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 126) {
    document.body.classList.add("header-sticky");
  } else {
    document.body.classList.remove("header-sticky");
  }

  ticking = false;
}

function onScroll() {
  lastKnownScrollY = window.scrollY;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(headerChange);
  }

  ticking = true;
}
// КОНЕЦ прилипающая шапка (функции и переменные)

document.addEventListener('DOMContentLoaded', function () {
  headerChange();
  window.addEventListener("scroll", onScroll, { passive: true });

  // показ мобильного меню и кнопки
  // Проверяем, есть ли кнопка показа меню на странице
  var buttonMenu = document.querySelector('.button-menu');
  if (buttonMenu) {
    var navigation = document.querySelector('.navigation');
    // Если navigation тоже существует, назначаем обработчик событий
    if (navigation) {
      buttonMenu.addEventListener('click', function () {
        buttonMenu.classList.toggle('isActive');
        navigation.classList.toggle('isActive');
        document.body.classList.toggle('menu-open');
      });
    }
  };
  // КОНЕЦ показ мобильного меню и кнопки

  // Кнопки с эффектом радиальной заливки
  var RadialButtons = document.querySelectorAll('.radial-fill');
  if (RadialButtons) {
    // Функция для добавления элемента 'decorate'
    function addDecorateElement(button) {
      var decorateSpan = document.createElement('span');
      decorateSpan.className = 'decorate';
      button.appendChild(decorateSpan);
    }

    // Добавляем элемент 'decorate' к каждой кнопке
    RadialButtons.forEach(addDecorateElement);

    // Добавляем обработчики событий для каждой кнопки
    RadialButtons.forEach(function (button) {
      button.addEventListener('mouseover', function (e) {
        var pos = button.getBoundingClientRect();
        var elem_left = pos.left;
        var elem_top = pos.top;

        var Xinner = e.clientX - elem_left;
        var Yinner = e.clientY - elem_top;

        var maxDist = Math.max(
          Math.sqrt(Math.pow(Xinner, 2) + Math.pow(Yinner, 2)),
          Math.sqrt(Math.pow(button.clientWidth - Xinner, 2) + Math.pow(Yinner, 2)),
          Math.sqrt(Math.pow(Xinner, 2) + Math.pow(button.clientHeight - Yinner, 2)),
          Math.sqrt(Math.pow(button.clientWidth - Xinner, 2) + Math.pow(button.clientHeight - Yinner, 2))
        );

        var decoration = button.querySelector('.decorate');
        decoration.style.left = Xinner + 'px';
        decoration.style.top = Yinner + 'px';
        decoration.style.width = maxDist * 2 + 'px';
        decoration.style.height = maxDist * 2 + 'px';
      });

      button.addEventListener('mouseout', function () {
        var decoration = button.querySelector('.decorate');
        decoration.style.width = '0';
        decoration.style.height = '0';
      });
    });
  };
  // КОНЕЦ Кнопки с эффектом радиальной заливки


});

// техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
// получить в консоли элемент, по которому кликнули
document.addEventListener('click', e => console.log(e.target));
