const popupFoto = document.querySelector('.popup__foto');

const benzinCards = [
  {
    product: 'Бензин АИ-95',
    delivery: 'Автодоставка, Самовывоз',
    availability: 'Отсутствует',
    density: 0.74,
    priceT: 0,
    priceDelivery: 'договорная**',
    linkFoto: 'assets/img/noFoto.jpg',
    linkPassport: '#',
  },
  {
    product: 'Бензин АИ-92',
    delivery: 'Автодоставка, Самовывоз',
    availability: 'Отсутствует',
    density: 0.73,
    priceT: 0,
    priceDelivery: 'договорная**',
    linkFoto: 'assets/img/noFoto.jpg',
    linkPassport: '#',
  },
];

//Создаем карточки из temlate
benzinCards.reverse().forEach(createCards);

function createCards(item) {
  const cardContainer = document.querySelector('.production__list');
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate
    .querySelector('.production__item-offer')
    .cloneNode(true);

  cardElement.querySelector('.production__item_title').textContent =
    item.product;
  cardElement.querySelector('.production__item_delivery').textContent =
    item.delivery;
  cardElement.querySelector('.production__item_availability').textContent =
    item.availability;
  cardElement.querySelector('.production__item_density').textContent =
    item.density;
  cardElement.querySelector('.production__item_priceT').textContent =
    (item.priceT + '')
      .split('')
      .reverse()
      .join('')
      .replace(/(\d{3})/g, '$1 ')
      .split('')
      .reverse()
      .join('')
      .replace(/^ /, '') + ' Р/т*';
  cardElement.querySelector('.production__item_priceL').textContent =
    ((item.priceT * item.density) / 1000).toFixed(2) + ' Р/л';
  cardElement.querySelector('.production__item_priceDelivery').textContent =
    item.priceDelivery;
  cardElement.querySelector('.production__item_foto-toplivo').src =
    item.linkFoto;
  cardElement.querySelector('.production__item_foto-toplivo').alt =
    item.product;
  cardElement.querySelector('.production__item_passport').href =
    item.linkPassport;

  //элементы на карточке
  elementsCard(cardElement);

  cardContainer.prepend(cardElement);

  function elementsCard(element) {
    //открытие попапа Фото
    const openFotoPopup = element.querySelector('.production__item_foto');
    openFotoPopup.addEventListener('click', function () {
      popupFoto.querySelector('.popup__foto_title').textContent =
        element.querySelector('.production__item_title').textContent;
      popupFoto.querySelector('.popup__foto_url').src = element.querySelector(
        '.production__item_foto-toplivo'
      ).src;
      popupFoto.querySelector('.popup__foto_url').alt = element.querySelector(
        '.production__item_foto-toplivo'
      ).alt;
      openPopup(popupFoto);
    });
  }

  /////////////////////////   Функционал Попапов //////////////////////////
  //функции открытия закрытия попапа
  function openPopup(element) {
    element.classList.add('popup_opened');

    //слушатели закрытия попапа
    element
      .querySelector('.popup__close')
      .addEventListener('click', closePopup);
    element.addEventListener('click', closeOverlay);
    document.addEventListener('keydown', closeEsc);
  }

  function closePopup() {
    const popupActive = document.querySelector('.popup_opened');
    popupActive.classList.remove('popup_opened');
    popupActive.removeEventListener('click', closeOverlay);
    document.removeEventListener('keydown', closeEsc);
  }

  function closeOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      closePopup();
    }
  }

  function closeEsc(evt) {
    if (evt.key === 'Escape') {
      closePopup();
    }
  }
}
