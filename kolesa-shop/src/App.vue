<template>
  <div id="app">
        <header class="main-header">
            <div class="wrapper app__wrapper">
                <div class="site-logo main-header__site-logo">
                    <a href="/">
                        <img src="images/brand/logo.svg" alt="На главную" class="site-logo__image">
                    </a>
                </div>
                <div class="search">
                    <form action="/main-page.html" class="search__form">
                        <div class="search__box">
                            <input type="text" name="query" placeholder="Поиск" class="search__input" required>
                            <button type="submit" class="search__button">
                                <img src="images/icons/search-big.svg" alt="Search icon">
                            </button>
                        </div>
                    </form>
                </div>
                <div class="user-account main-header__user-account">
                    <a href="#" class="user-account__dropdown" title="Личный кабинет">
                        <img src="images/img/user.png" class="user-account__image" alt="Мортиджан 300 баллов">
                        <div class="user-account__info">
                            <span class="user-account__name">Мортиджан</span>
                            <span class="user-account__money">300 баллов</span>
                        </div>
                    </a>
                </div>
            </div>
        </header>
        <div class="main-content">
            <div class="wrapper app__wrapper">
                <div class="main-content__sidebar">
                    <nav class="main-navigation">
                        <ul class="main-navigation__list">
                            <li class="main-navigation__item">
                                <a href="#" class="main-navigation__link">
                                    Оргсхема
                                </a>
                            </li>
                            <li class="main-navigation__item">
                                <a href="#" class="main-navigation__link">
                                    Kolesa <strong>Team</strong>
                                </a>
                            </li>
                            <li class="main-navigation__item">
                                <a href="#" class="main-navigation__link main-navigation__link--active">
                                    Kolesa Shop
                                </a>
                            </li>
                            <li class="main-navigation__item">
                                <a href="#" class="main-navigation__link">
                                    Картина компании
                                </a>
                            </li>
                            <li class="main-navigation__item">
                                <a href="#" class="main-navigation__link">
                                    Новости
                                </a>
                            </li>
                            <li class="main-navigation__item">
                                <a href="#" class="main-navigation__link">
                                    Education
                                </a>
                            </li>
                            <li class="main-navigation__item">
                                <a href="#" class="main-navigation__link">
                                    Guidelines
                                </a>
                            </li>
                            <li class="main-navigation__item">
                                <a href="#" class="main-navigation__link">
                                    Библиотека
                                </a>
                            </li>
                            <li class="main-navigation__item">
                                <a href="#" class="main-navigation__link">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="main-content__content">
                    <section class="promo-banner">
                        <a href="#" class="promo-banner__link" title="Ссылка баннера">
                            <img
                            src="images/img/promo.jpg"
                            alt="Суперский баннер - картинка"
                            class="promo-banner__image">
                        </a>
                    </section>
                    <section class="hot-links">
                        <div class="hot-links__item hot-links__item--color-green">
                            <a class="hot-links__href" href="#">
                                <span class="hot-links__icon">
                                    <img
                                    src="images/icons/plus.png"
                                    alt="Получить баллы"
                                    class="hot-links__img">
                                </span>
                                <span class="hot-links__text">Получить баллы</span>
                            </a>
                        </div>
                        <div class="hot-links__item hot-links__item--color-yellow">
                            <a class="hot-links__href" href="#">
                                <span class="hot-links__icon">
                                    <img
                                    src="images/icons/quest.png"
                                    alt="Получить баллы"
                                    class="hot-links__img">
                                </span>
                                <span class="hot-links__text">Получить баллы</span>
                            </a>
                        </div>
                        <div class="hot-links__item hot-links__item--color-blue">
                            <a class="hot-links__href" href="#">
                                <span class="hot-links__icon">
                                    <img
                                    src="images/icons/present.png"
                                    alt="Получить баллы"
                                    class="hot-links__img">
                                </span>
                                <span class="hot-links__text">Получить баллы</span>
                            </a>
                        </div>
                    </section>
                    <section class="main-products">
                        <nav class="product-tabs main-products__tabs">
                            <button
                            v-for="tab in tabs"
                            :key="tab.val"
                            class="product-tabs__button js__product-tab  button button--small"
                            :class="{'button--small--active': activeTab === tab.val}"
                            @click="filterProducts(tab.val)"
                            >{{ tab.title }}</button>
                        </nav>
                        <div class="products-list main-products__list js__product-list">
                        <div
                        v-for="product in getAllProducts" :key="product.id"
                        class="product-card main-products__card">
                            <div class="product-card__image">
                            <img
                            v-if="product.img != ''"
                            class="product-card__img"
                            :alt="product.title"
                            :src="product.img"
                            width="330"
                            height="330">
                            <img
                            v-else
                            class="product-card__img"
                            :alt="product.title"
                            src="images/img/placeholder.jpg"
                            width="330"
                            height="330">
                            <span v-if="product.isNew" class="badge badge--green">NEW</span>
                            </div>
                            <div class="product-card__desc">
                            <span class="product-card__price">{{ product.price }} баллов</span>
                            <span class="product-card__title">{{ product.title }}</span>
                            <span class="product-card__size">{{ product.size }}</span>
                            <div class="product-card__button-container">
                                <button
                                class="button product-card__hide-button"
                                :data-id="product.id"
                                @click="toggleModal"
                                >Заказать</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <footer class="main-footer app__main-footer">
            <div class="wrapper app__wrapper wrapper--align-center">
                <div class="social">
                    <span class="copiright main-footer__copiright">© Kolesa Group</span>
                    <ul class="social-buttons main-footer__social-buttons">
                        <li class="social-buttons__item">
                            <a href="#" title="social-link">
                                <img src="images/icons/Instagram.svg"
                                class="social-buttons__icon"
                                alt="social link">
                            </a>
                        </li>
                        <li class="social-buttons__item">
                            <a href="#" title="social-link">
                                <img src="images/icons/YouTube.svg"
                                class="social-buttons__icon"
                                alt="social link">
                            </a>
                        </li>
                        <li class="social-buttons__item">
                            <a href="#" title="social-link">
                                <img src="images/icons/VK.svg"
                                class="social-buttons__icon"
                                alt="social link">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="callback main-footer__callback">
                    <span class="callback__info">
                        Есть идеи что улучшить?<br>
                        Не знаешь, с кем решить проблему?
                    </span>
                    <button class="button button--white">Заказать</button>
                </div>
            </div>
        </footer>
        <div class="modal app__modal" :class="{'modal--open': isModal}">
            <div class="modal__container">
                <button class="modal__close-button" type="button" @click="toggleModal"></button>
                <div class="modal__content">
                    <div class="product-details">
                        <div class="product-gallery product-details__gallery">
                            <div class="product-gallery__main-image">
                                <img src="images/product-image.png" alt="Футболка которая не футболка">
                            </div>
                            <div class="gallery-carousel product-gallery__carousel">
                                <div class="gallery-carousel__item">
                                    <a href="#image-item">
                                        <img src="images/product-image.png"
                                        class="gallery-carousel__item-image"
                                        alt="Футболка которая не футболка ITEM">
                                    </a>
                                </div>
                                <div class="gallery-carousel__item">
                                    <a href="#image-item">
                                        <img src="images/product-image.png"
                                        class="gallery-carousel__item-image"
                                        alt="Футболка которая не футболка ITEM">
                                    </a>
                                </div>
                                <div class="gallery-carousel__item">
                                    <a href="#image-item">
                                        <img src="images/product-image.png"
                                        class="gallery-carousel__item-image"
                                        alt="Футболка которая не футболка ITEM">
                                    </a>
                                </div>
                                <div class="gallery-carousel__item">
                                    <a href="#image-item">
                                        <img src="images/product-image.png"
                                        class="gallery-carousel__item-image"
                                        alt="Футболка которая не футболка ITEM">
                                    </a>
                                </div>
                                <div class="gallery-carousel__item gallery-carousel__item--active">
                                    <a href="#image-item">
                                        <img src="images/product-image.png"
                                        class="gallery-carousel__item-image"
                                        alt="Футболка которая не футболка ITEM">
                                    </a>
                                </div>
                                <div class="gallery-carousel__item">
                                    <a href="#image-item">
                                        <img src="images/product-image.png"
                                        class="gallery-carousel__item-image"
                                        alt="Футболка которая не футболка ITEM">
                                    </a>
                                </div>
                                <div class="gallery-carousel__item">
                                    <a href="#image-item">
                                        <img src="images/product-image.png"
                                        class="gallery-carousel__item-image"
                                        alt="Футболка которая не футболка ITEM">
                                    </a>
                                </div>
                                <div class="gallery-carousel__item">
                                    <a href="#image-item">
                                        <img src="images/product-image.png"
                                        class="gallery-carousel__item-image"
                                        alt="Футболка которая не футболка ITEM">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="product-info">
                            <h2 class="product-info__title">Футболка "Эволюционируй или сдохни"</h2>
                            <div class="product-summary product-info__summary">
                                <div class="product-summary__action">
                                    <h4 class="product-summary__price">100 баллов</h4>
                                    <button class="button button--yellow" type="button">
                                        Попросить 50 баллов
                                        </button>
                                </div>
                                <div class="user-wallet product-summary__wallet">
                                    <div class="user-wallet__text">
                                        <span class="user-wallet__caption">Твой баланс:</span>
                                        <span class="user-wallet__money">50 баллов</span>
                                    </div>
                                    <div class="user-wallet__icon">
                                        <img src="images/shop.png"
                                        class="user-wallet__icon-image"
                                        alt="Баланс пользователя">
                                    </div>
                                </div>
                            </div>
                            <div class="product-field product-info__field">
                                <span class="product-field__title">Цвета:</span>
                                <div class="product-option product-field__option">
                                    <input type="radio"
                                    id="color-blue"
                                    class="product-option__input"
                                    name="color"
                                    value="blue"
                                    checked hidden>
                                    <label class="product-option__label" for="color-blue">
                                        <span class="product-option__color-probe product-option__color-probe--blue">

                                        </span>
                                        <span class="product-option__caption">Синий</span>
                                    </label>
                                </div>
                                <div class="product-option product-field__option">
                                    <input type="radio"
                                    id="color-beige"
                                    class="product-option__input"
                                    name="color"
                                    value="beige"
                                    hidden>
                                    <label class="product-option__label" for="color-beige">
                                        <span class="product-option__color-probe product-option__color-probe--beige">

                                        </span>
                                        <span class="product-option__caption">Бежевый</span>
                                    </label>
                                </div>
                                <div class="product-option product-field__option">
                                    <input type="radio"
                                    id="color-gray"
                                    class="product-option__input"
                                    name="color"
                                    value="gray"
                                    hidden>
                                    <label class="product-option__label" for="color-gray">
                                        <span class="product-option__color-probe product-option__color-probe--gray">

                                        </span>
                                        <span class="product-option__caption">Серый</span>
                                    </label>
                                </div>
                                <div class="product-option product-field__option">
                                    <input type="radio"
                                    id="color-green"
                                    class="product-option__input"
                                    name="color"
                                    value="green"
                                    hidden>
                                    <label class="product-option__label" for="color-green">
                                        <span class="product-option__color-probe product-option__color-probe--green">

                                        </span>
                                        <span class="product-option__caption">Зеленый</span>
                                    </label>
                                </div>
                                <div class="product-option product-field__option">
                                    <input type="radio"
                                    id="color-red"
                                    class="product-option__input"
                                    name="color"
                                    value="red"
                                    hidden>
                                    <label class="product-option__label" for="color-red">
                                        <span class="product-option__color-probe product-option__color-probe--red">

                                        </span>
                                        <span class="product-option__caption">Красный</span>
                                    </label>
                                </div>
                                <div class="product-option product-field__option">
                                    <input type="radio"
                                    id="color-yellow"
                                    class="product-option__input"
                                    name="color"
                                    value="yellow" hidden>
                                    <label class="product-option__label" for="color-yellow">
                                        <span class="product-option__color-probe product-option__color-probe--yellow">

                                        </span>
                                        <span class="product-option__caption">Желтый</span>
                                    </label>
                                </div>
                            </div>
                            <div class="product-field product-info__field">
                                <span class="product-field__title">Размер:</span>
                                <div class="product-option product-field__option">
                                    <input type="radio"
                                    id="size-s"
                                    class="product-option__input"
                                    name="size"
                                    value="s"
                                    checked hidden>
                                    <label class="product-option__label" for="size-s">
                                        S
                                    </label>
                                </div>
                                <div class="product-option product-field__option">
                                    <input type="radio"
                                    id="size-m"
                                    class="product-option__input"
                                    name="size"
                                    value="m"
                                    hidden>
                                    <label class="product-option__label" for="size-m">
                                        M
                                    </label>
                                </div>
                                <div class="product-option product-field__option">
                                    <input
                                    type="radio"
                                    id="size-l"
                                    class="product-option__input"
                                    name="size"
                                    value="l"
                                    hidden>
                                    <label class="product-option__label" for="size-l">
                                        L
                                    </label>
                                </div>
                            </div>
                            <div class="product-desc product-info__desc">
                                <span class="product-desc__title">Детали:</span>
                                <p class="product-desc__content">
                                Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%
                                </p>
                            </div>
                            <div class="product-desc product-info__desc">
                                <span class="product-desc__title">Как выбрать размер:</span>
                                <p class="product-desc__content">Написать дяде Рику для уточнения.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal__backdrop" @click="toggleModal"></div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isModal:   false,
            activeTab: 'all',
            tabs:      [
                {
                    title: 'Все товары',
                    val:   'all'
                },
                {
                    title: 'Одежда',
                    val:   'clothes'
                },
                {
                    title: 'Аксессуары',
                    val:   'accessories'
                },
            ],
            products: {
                clothes: [
                    {
                        id:      0,
                        title:   'Футболка "Сдохни или умри"',
                        size:    'Размеры S/M/L',
                        price:   200,
                        isNew:   true,
                        img:     '',
                        gallery: ['images/img/product.jpg', 'images/img/product1.jpg'],
                        details: [
                            {
                                title:   'Детали',
                                content: `Брендированная толстовка от Qazaq Republic.
                                    Материал: Хлопок 80%, Вискоза 20%`,
                            },
                            {
                                title:   'Как выбрать размер',
                                content: `Написать дяде Рику для уточнения.
                                И попросить портальную пушку,
                                что бы сгонять за размерами.`,
                            },
                        ],
                    },
                    {
                        id:      1,
                        title:   'Кепка с надписью',
                        size:    'Для большой и умной головы',
                        price:   150,
                        isNew:   false,
                        img:     'images/img/product2.jpg',
                        gallery: ['images/img/product2.jpg', 'images/img/product3.jpg'],
                        details: [
                            {
                                title:   'Детали',
                                content: 'Брендовая кепка, только для самых умных. Предназначена беречь от солнца',
                            },
                            {
                                title:   'Как выбрать размер',
                                content: 'Подойти, надеть, посмотреть в зеркало. ',
                            },
                        ],
                    },
                    {
                        id:      2,
                        title:   'Футболка с надписью "Доведи меня до сарказма"',
                        size:    'Размеры S/M',
                        price:   280,
                        isNew:   false,
                        img:     'images/img/product4.jpg',
                        gallery: ['images/img/product4.jpg', 'images/img/product5.jpg'],
                        details: [
                            {
                                title:   'Детали',
                                content: 'Брендовая кепка, только для самых умных. Предназначена беречь от солнца',
                            },
                            {
                                title:   'Как выбрать размер',
                                content: 'Подойти, надеть, посмотреть в зеркало. ',
                            },
                        ],
                    },
                    {
                        id:      5,
                        title:   'Светящиеся кроссовки Adidas Yeezy Boost 700 Vol 3 by Kanye West"',
                        size:    '40/42/44/45',
                        price:   380,
                        isNew:   true,
                        img:     'images/img/product7.jpg',
                        gallery: ['images/img/product7.jpg'],
                        details: [
                            {
                                title:   'Детали',
                                content: `Одни из самых удобных кроссовок из всех существующих....
                                это кроссовки родившиеся от сотрудничества компании
                                adidas и легендарного Кени Веста ( Kanye West)  , название им Yeezy Boost 700.`,
                            },
                        ],
                    },
                ],
                accessories: [
                    {
                        id:      3,
                        title:   'Бутылка для воды',
                        size:    '0,7 л',
                        price:   100,
                        isNew:   true,
                        img:     'images/img/product1.jpg',
                        gallery: [],
                        details: [
                            {
                                title:   'Детали',
                                content: 'Бутылка для воды с трубочкой. Очень удобна для занятий спортом и питья',
                            },
                        ],
                    },
                    {
                        id:      4,
                        title:   'Эргономичный Пластиковый Ремень"',
                        size:    '30 см',
                        price:   80,
                        isNew:   true,
                        img:     'images/img/product6.jpg',
                        gallery: ['images/img/product6.jpg'],
                        details: [
                            {
                                title:   'Детали',
                                content: `Ergonomic executive chair upholstered in bonded black leather and
                                PVC padded seat and back for all-day comfort and support`,
                            },
                        ],
                    },
                    {
                        id:      6,
                        title:   'КРОССОВКИ ADIDAS X LEGO® SUPERSTAR',
                        size:    '',
                        price:   500,
                        isNew:   false,
                        img:     'images/img/product8.jpg',
                        gallery: ['images/img/product8.jpg', 'images/img/product9.jpg'],
                        details: [
                            {
                                title:   'Детали',
                                content: `Добавь в свою коллекцию кроссовок уникальную
                        модель-конструктор adidas x LEGO® Superstar.
                        Эта версия из коллаборации adidas и LEGO Group
                        включает в себя культовую графику adidas Superstar,
                        мысок-ракушку, Трилистник и зазубренные три полоски. У нее есть даже настоящая шнуровка.
                        Конструктор поставляется в особой коробке, похожей на обычную, но с деталями LEGO.
                        `,
                            },
                        ],
                    },
                    {
                        id:      7,
                        title:   'Ручка BTS',
                        size:    '',
                        price:   240,
                        isNew:   false,
                        img:     'images/img/product10.jpg',
                        gallery: ['images/img/product10.jpg'],
                        details: [
                            {
                                title:   'Детали',
                                content: `Длина:16.1cm
                        Цвет: Черный
                        Толщина линии :0.5 мм
                        Материал: Пластик
                        `,
                            },
                        ],
                    },
                ],
            },
            filter: [],
        };
    },
    computed: {
        getAllProducts() {
            if (this.filter.length === 0) {
                this.filterProducts('all');
            }

            return this.filter
        },
    },
    methods: {
        setActiveTab (tab) {
            this.activeTab = tab;
        },
        sortProducts (array) {
            return array.sort((a, b) => (a['isNew'] < b['isNew'] ? 1 : -1));
        },
        filterProducts(category) {
            switch (category) {
                case 'clothes':
                    this.filter = this.sortProducts(this.products.clothes);
                    break;
                case 'accessories':
                    this.filter = this.sortProducts(this.products.accessories);
                    break;
                default:
                    this.filter = this.sortProducts(this.products.clothes.concat(this.products.accessories));
                    break;
            }

            this.setActiveTab(category);
        },
        toggleModal () {
            this.isModal = !this.isModal;
        },
    },
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
