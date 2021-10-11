import '../scss/style.scss';

const productsData = () => {
    const products = {
        clothes: [
            {
                id:      0,
                title:   'Футболка "Сдохни или умри"',
                size:    'Размеры S/M/L',
                price:   220,
                isNew:   true,
                img:     'src/assets/img/product.jpg',
                gallery: ['src/assets/img/product.jpg', 'src/assets/img/product.jpg'],
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
                        title:   'Детали:',
                        content: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    },
                    {
                        title:   'Как выбрать размер:',
                        content: `Написать дяде Рику для уточнения.
                                И попросить портальную пушку,
                                что бы сгонять за размерами.`,
                    },
                ],
            },
            {
                id:    0,
                title: 'Title',
                size:  'L',
                price: 210,
                isNew: true,
                img:   '/',
            },
        ],
        accessories: [
            {
                id:    0,
                title: 'Title',
                size:  'L',
                price: 150,
                isNew: true,
                img:   '/',
            },
        ],
    };

    function sortProducts(array, prop = 'id', arrow = 'DESC') {
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

        return sortProducts(allProducts, 'price');
    }

    return {
        getProducts,
    };
};

// const productDetails = (id, title, size = '', price = 0, isNew = false, img = '',
//     gallery = [], options = [], details = []) => {
//     function productGallery() {

//     }
// };

// const modal = (selector) => {
//     const modal
// };

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
            // openModal(productDetailsHtml());
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
                productList('.js__product-list').clear();
                getProducts(tab.getAttribute('data-control'));
            });
        });
    }());

    // getProducts('all');
};

productsTabs();

(function () {
    const buttons = document.querySelectorAll('.product-card__hide-button');
    const modal = document.querySelector('.app__modal');
    const closeButton = document.querySelector('.modal__close-button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
}());

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
