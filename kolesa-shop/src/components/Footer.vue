<template>
    <footer class="main-footer app__main-footer">
            <div class="wrapper app__wrapper wrapper--align-center">
                <div class="social">
                    <span class="copiright main-footer__copiright">© Kolesa Group</span>
                    <ul class="social-buttons main-footer__social-buttons">
                        <li
                            v-for="(item, index) in links"
                            :key="index"
                            class="social-buttons__item"
                        >
                            <a :href="item.link" title="social-link">
                                <img :src="item.image"
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
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            links: [
                {
                    link: '#',
                    image: 'images/icons/Instagram.svg',
                },
                {
                    link: '#',
                    image: 'images/icons/YouTube.svg',
                },
                {
                    link: '#',
                    image: 'images/icons/VK.svg',
                },
            ]
        };
    },
};
</script>
