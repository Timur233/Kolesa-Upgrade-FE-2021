import '../scss/style.scss';

const productsData = () => {
    const products = {
        clothes: [
            {
                id:      0,
                title:   'Футболка "Сдохни или умри"',
                size:    'Размеры S/M/L',
                price:   200,
                isNew:   true,
                img:     'src/assets/img/product.jpg',
                gallery: ['src/assets/img/product.jpg', 'src/assets/img/product1.jpg'],
                options: [
                    {
                        type:  'color',
                        title: 'Цвета',
                        props: [
                            {
                                slug:  'blue',
                                title: 'Синий',
                            },
                            {
                                slug:  'beige',
                                title: 'Бежевый',
                            },
                            {
                                slug:  'gray',
                                title: 'Серый',
                            },
                            {
                                slug:  'green',
                                title: 'Зеленый',
                            },
                            {
                                slug:  'red',
                                title: 'Красный',
                            },
                            {
                                slug:  'yellow',
                                title: 'Желтый',
                            },
                        ],
                    },
                    {
                        type:  'size',
                        title: 'Размер',
                        props: [
                            {
                                slug:  's',
                                title: 'S',
                            },
                            {
                                slug:  'm',
                                title: 'M',
                            },
                            {
                                slug:  'l',
                                title: 'L',
                            },
                        ],
                    },
                ],
                details: [
                    {
                        title:   'Детали',
                        content: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
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
                img:     'src/assets/img/product2.jpg',
                gallery: ['src/assets/img/product2.jpg', 'src/assets/img/product3.jpg'],
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
                img:     'src/assets/img/product4.jpg',
                gallery: ['src/assets/img/product4.jpg', 'src/assets/img/product5.jpg'],
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
                img:     'src/assets/img/product7.jpg',
                gallery: ['src/assets/img/product7.jpg'],
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
                img:     'src/assets/img/product1.jpg',
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
                img:     'src/assets/img/product6.jpg',
                gallery: ['src/assets/img/product6.jpg'],
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
                img:     'src/assets/img/product8.jpg',
                gallery: ['src/assets/img/product8.jpg', 'src/assets/img/product9.jpg'],
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
                img:     'src/assets/img/product10.jpg',
                gallery: ['src/assets/img/product10.jpg'],
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
    };

    function sortProducts(array, prop = 'isNew', arrow = 'DESC') {
        if (arrow === 'ASC') {
            array.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
        } else {
            array.sort((a, b) => (a[prop] < b[prop] ? 1 : -1));
        }

        return array;
    }

    function getProducts(category = 'all') {
        if (products[category]) {
            return sortProducts(products[category]);
        }

        let allProducts = [];

        Object.keys(products).forEach((key) => {
            allProducts = allProducts.concat(products[key]);
        });

        return sortProducts(allProducts);
    }

    function getOneProduct(id) {
        const searchProducts = getProducts('all');

        for (let i = 0; i < searchProducts.length; i += 1) {
            if (searchProducts[i].id === id) {
                return searchProducts[i];
            }
        }

        return false;
    }

    return {
        getProducts,
        getOneProduct,
    };
};

const productDetails = (productId) => {
    const {
        title, price, isNew, img, gallery, details,
    } = productsData().getOneProduct(productId);

    function productGallery() {
        const block = document.createElement('div');
        const mainImageBlock = document.createElement('div');
        const mainImage = document.createElement('img');
        const galleryNode = document.createElement('div');

        mainImage.src = img || 'src/assets/img/placeholder.jpg';
        mainImage.alt = title;
        mainImage.width = 330;
        mainImage.height = 330;

        mainImageBlock.classList = 'product-gallery__main-image';
        mainImageBlock.appendChild(mainImage);

        galleryNode.classList = 'gallery-carousel product-gallery__carousel';
        gallery.forEach((galleryItem) => {
            const itemNode = document.createElement('div');
            const itemLink = document.createElement('a');
            const itemImg = document.createElement('img');

            itemImg.classList = 'gallery-carousel__item-image';
            itemImg.alt = title;
            itemImg.src = galleryItem;

            itemLink.href = 'galleryItem';
            itemLink.appendChild(itemImg);
            itemLink.addEventListener('click', (evt) => {
                mainImage.src = galleryItem;
                evt.preventDefault();
            });

            itemNode.classList = 'gallery-carousel__item';
            itemNode.appendChild(itemLink);

            galleryNode.appendChild(itemNode);
        });

        if (isNew) {
            const badge = document.createElement('span');

            badge.classList = 'badge badge--green';
            badge.textContent = 'NEW';

            block.appendChild(badge);
        }

        block.classList = 'product-gallery product-details__gallery';
        block.appendChild(mainImageBlock);
        block.appendChild(galleryNode);

        return block;
    }

    function productInfo() {
        const wrapper = document.createElement('div');
        const detailsHtml = () => {
            let html = '';

            details.forEach((detail) => {
                html += `<div class="product-desc product-info__desc">
                            <span class="product-desc__title">${detail.title}:</span>
                            <p class="product-desc__content">${detail.content}</p>
                        </div>`;
            });

            return html;
        };
        const html = `  <h2 class="product-info__title">${title}</h2>
                        <div class="product-summary product-info__summary">
                            <div class="product-summary__action">
                                <h4 class="product-summary__price">${price} баллов</h4>
                                <button class="button button--blue" type="button">Заказать</button>
                            </div>
                            <div class="user-wallet product-summary__wallet">
                                <div class="user-wallet__text">
                                    <span class="user-wallet__caption">Твой баланс:</span>
                                    <span class="user-wallet__money">50 баллов</span>
                                </div>
                                <div class="user-wallet__icon">
                                    <img src="src/assets/shop.png"
                                    class="user-wallet__icon-image"
                                    alt="Баланс пользователя">
                                </div>
                            </div>
                        </div>
                        ${detailsHtml()}
                    `;

        wrapper.classList = 'product-info';
        wrapper.innerHTML = html;

        return wrapper;
    }

    function collectBlock() {
        const wrapper = document.createElement('div');

        wrapper.classList = 'product-details';
        wrapper.appendChild(productGallery());
        wrapper.appendChild(productInfo());

        return wrapper;
    }

    return collectBlock();
};

const modal = (html) => {
    let modalNode;
    let modalContainer;
    let modalCloseButton;
    let modalContent;
    let modalBackdrop;

    function modalClose() {
        modalNode.style.display = 'none';
        modalNode.remove();
    }

    function creiateModal() {
        modalNode = document.createElement('div');
        modalNode.classList = 'modal app__modal';

        modalContainer = document.createElement('div');
        modalContainer.classList = 'modal__container';
        modalNode.appendChild(modalContainer);

        modalCloseButton = document.createElement('button');
        modalCloseButton.classList = 'modal__close-button';
        modalCloseButton.addEventListener('click', () => { modalClose(); });
        modalContainer.appendChild(modalCloseButton);

        modalContent = document.createElement('div');
        modalContent.classList = 'modal__content';
        modalContent.appendChild(html);
        modalContainer.appendChild(modalContent);

        modalBackdrop = document.createElement('div');
        modalBackdrop.classList = 'modal__backdrop';
        modalBackdrop.addEventListener('click', () => { modalClose(); });
        modalNode.appendChild(modalBackdrop);

        document.body.appendChild(modalNode);
    }

    function modalOpen() {
        creiateModal();
        modalNode.style.display = 'flex';
    }

    return modalOpen();
};

const productCard = (id, title, size = '', price = 0, isNew = false, img = '') => {
    function imageBlock() {
        const block = document.createElement('div');
        const imgNode = document.createElement('img');

        block.classList = 'product-card__image';
        imgNode.classList = 'product-card__img';
        imgNode.alt = title;
        imgNode.src = img || 'src/assets/img/placeholder.jpg';
        imgNode.width = 330;
        imgNode.height = 330;

        block.appendChild(imgNode);

        if (isNew) {
            const badge = document.createElement('span');

            badge.classList = 'badge badge--green';
            badge.textContent = 'NEW';

            block.appendChild(badge);
        }

        return block;
    }

    function cardButton() {
        const block = document.createElement('div');
        const button = document.createElement('button');

        block.classList = 'product-card__button-container';

        button.classList = 'button product-card__hide-button';
        button.setAttribute('data-id', id);
        button.textContent = 'Заказать';
        button.addEventListener('click', () => {
            modal(productDetails(id));
        });

        block.appendChild(button);

        return block;
    }

    function description() {
        const block = document.createElement('div');
        const titleNode = document.createElement('span');

        block.classList = 'product-card__desc';

        if (price) {
            const priceNode = document.createElement('span');

            priceNode.classList = 'product-card__price';
            priceNode.textContent = `${price} баллов`;
            block.appendChild(priceNode);
        }

        titleNode.classList = 'product-card__title';
        titleNode.textContent = title;
        block.appendChild(titleNode);

        if (size) {
            const sizeNode = document.createElement('span');

            sizeNode.classList = 'product-card__size';
            sizeNode.textContent = size;
            block.appendChild(sizeNode);
        }

        block.appendChild(cardButton());

        return block;
    }

    function cardWrapper() {
        const wrapper = document.createElement('div');

        wrapper.classList = 'product-card main-products__card';
        wrapper.appendChild(imageBlock());
        wrapper.appendChild(description());

        return wrapper;
    }

    function getCard() {
        if (id !== '' && typeof id === 'number' && title !== '') {
            return cardWrapper();
        }

        return false;
    }

    return getCard();
};

const productList = (selector) => {
    const containerNode = document.querySelector(selector);

    function append(node) {
        containerNode.appendChild(node);

        return true;
    }

    function clear() {
        containerNode.textContent = '';
    }

    return {
        append: containerNode ? append : false,
        clear:  containerNode ? clear : false,
    };
};

const productsTabs = () => {
    function getProducts(category = 'all') {
        const products = productsData().getProducts(category);

        products.forEach((product) => {
            const {
                id, title, size, price, isNew, img,
            } = product;
            const productNode = productCard(id, title, size, price, isNew, img);

            if (productNode) {
                productList('.js__product-list').append(productNode);
            }
        });
    }

    (function () {
        const tabs = document.querySelectorAll('.js__product-tab');

        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const activeTab = document.querySelector('.js__product-tab.button--small--active');

                activeTab.classList.remove('button--small--active');
                tab.classList.add('button--small--active');

                productList('.js__product-list').clear();
                getProducts(tab.getAttribute('data-control'));
            });
        });
    }());

    getProducts('all');
};

productsTabs();

const consoleStyles = `
    color:#fff;
    background-image: linear-gradient(to left,
        #dd2a2a, #c61278, #a53195, #7645a7,
        #5f4faf, #4258b5, #0f5fb7, #1767c0,
        #2478d3, #2a81dd
        );
    padding: 8px 15px;
    font-size: 14px;
    border-radius: 4px;
    text-align:center
`;

console.log('%cKolesa Upgrade - Delta Squad', consoleStyles);
