const popupFoto = document.querySelector('.popup__foto');

const dtCards = [
  {
    product: 'ДТ Евро зимнее класса 1',
    delivery: 'Автодоставка, Самовывоз',
    availability: 'Более 100 тонн',
    density: '0.83',
    priceT: '75 000 Р/т*',
    priceL: '62.25 Р/л',
    priceDelivery: 'договорная**',
    linkFoto: 'assets/img/noFoto.jpg',
    linkPassport:
      'documents/Паспорт ДТЗ кл.1 №08035 от 13.11.2023 Роснефть.pdf',
  },
  {
    product: 'ДТ Евро Сорт C',
    delivery: 'Автодоставка, Самовывоз',
    availability: 'Более 100 тонн',
    density: '0.83',
    priceT: '63 000 Р/т*',
    priceL: '52.29 Р/л',
    priceDelivery: 'договорная**',
    linkFoto: 'assets/img/noFoto.jpg',
    linkPassport:
      'documents/Паспорт ДТС №1874 от 31.10.2023 Калуганефтепродукт РНПК.pdf',
  },
  {
    product: 'ТС-1 Высший сорт',
    delivery: 'Автодоставка, Самовывоз',
    availability: 'Более 100 тонн',
    density: '0.78',
    priceT: '81 500 Р/т*',
    priceL: '63.57 Р/л',
    priceDelivery: 'договорная**',
    linkFoto: 'assets/img/noFoto.jpg',
    linkPassport: 'documents/Паспорт на ТС-1 №432 от 10.10.23.pdf',
  },
  {
    product: 'ДТ Евро Сорт C Солнечногорск',
    delivery: 'Автодоставка, Самовывоз',
    availability: 'Более 100 тонн',
    density: '0.83',
    priceT: '61 000 Р/т*',
    priceL: '50.63 Р/л',
    priceDelivery: 'договорная**',
    linkFoto: 'assets/img/noFoto.jpg',
    linkPassport: 'documents/Паспорт ДТС №1179 от 10.11.2023 ВЛПДС.pdf',
  },
  {
    product: 'ДТ Евро Сорт E',
    delivery: 'Автодоставка, Самовывоз',
    availability: 'Более 100 тонн',
    density: '0.83',
    priceT: '64 000 Р/т*',
    priceL: '53.12 Р/л',
    priceDelivery: 'договорная**',
    linkFoto: 'assets/img/noFoto.jpg',
    linkPassport: 'documents/Паспорт №2313222 от 25.10.2023 Лукойл.pdf',
  },
  {
    product: 'ДТ Евро Сорт F',
    delivery: 'Автодоставка, Самовывоз',
    availability: 'Более 100 тонн',
    density: '0.83',
    priceT: '65 000 Р/т*',
    priceL: '53.95 Р/л',
    priceDelivery: 'договорная**',
    linkFoto: 'assets/img/noFoto.jpg',
    linkPassport: 'documents/Паспорт ДТF №658 2699339 от 01.11.2023 МНПЗ.pdf',
  },
];

//Создаем карточки из temlate
dtCards.reverse().forEach(createCards);

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
    item.priceT;
  cardElement.querySelector('.production__item_priceL').textContent =
    item.priceL;
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
