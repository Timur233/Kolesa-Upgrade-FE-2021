<template>
    <section class="promo-banner">
        <a href="#" class="promo-banner__link" :title="title">
            <img
            :src="image"
            :alt="title"
            class="promo-banner__image">
        </a>
    </section>
</template>

<script>
export default {
    name: 'PromoBanner',
    data() {
        return {
            title: 'Суперский баннер - картинка',
            image: 'images/img/promo.jpg',
        };
    },
};
</script>
