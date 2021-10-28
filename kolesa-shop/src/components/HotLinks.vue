<template>
    <section class="hot-links">
        <div v-for="(item, index) in links" :key="index"
        :class="'hot-links__item hot-links__item--color-' + item.color">
            <a class="hot-links__href" href="#">
                <span class="hot-links__icon">
                    <img
                    :src="item.image"
                    :alt="item.tite"
                    class="hot-links__img">
                </span>
                <span class="hot-links__text">{{ item.title }}</span>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HotLinks',
    data() {
        return {
            links: [
                {
                    image: 'images/icons/plus.png',
                    title: 'Получить баллы',
                    color: 'green'
                },
                {
                    image: 'images/icons/quest.png',
                    title: 'Как получить баллы',
                    color: 'yellow'
                },
                {
                    image: 'images/icons/present.png',
                    title: 'Подарить баллы',
                    color: 'blue'
                },
            ]
        };
    },
};
</script>
