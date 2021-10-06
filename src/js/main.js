import '../scss/style.scss';

(function () {
    const buttons = document.querySelectorAll('.product-card__hide-button');
    const modal = document.querySelector('.app__modal');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    });

    const closeButton = document.querySelector('.modal__close-button');

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
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
