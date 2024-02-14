
if (document.querySelector('.js-map')) {
  let center = [45.103539, 38.950340];
  console.log(document.querySelector('.js-map'));

  function init() {
    let mapElement = document.querySelector('.js-map');
    let map = new ymaps.Map(mapElement, {
      center: center,
      zoom: 15
    });

    let placeMark = new ymaps.Placemark([45.103539, 38.950340], {
      hintContent: 'ООО «КАМПАН»',
      balloonContentHeader: 'ООО «КАМПАН»',
      balloonContentFooter: '350005, г. Краснодар, ул. Им.Героя Пешкова, дом 5, этаж/пом 1/36'
    }, {
      iconLayout: 'default#image',
      iconImageHref: './img/map/balun.svg',
      iconImageSize: [47, 64],
      iconImageOffset: [-20, -50]
    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.behaviors.disable(['scrollZoom']);

    map.geoObjects.add(placeMark);

    placeMark.events.add('mouseenter', function (e) {
      e.get('target').options.set('iconImageHref', './img/map/balun-hover.svg');
    });

    placeMark.events.add('mouseleave', function (e) {
      e.get('target').options.set('iconImageHref', './img/map/balun.svg');
    });
  }

  ymaps.ready(init);
};
