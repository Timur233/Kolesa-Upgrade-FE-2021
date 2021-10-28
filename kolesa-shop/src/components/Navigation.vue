<template>
    <nav class="main-navigation">
        <ul class="main-navigation__list">
            <li
                v-for="(item, index) in links"
                :key="index"
                class="main-navigation__item"
            >
                <a
                    :href="item.link"
                    v-html="item.title"
                    class="main-navigation__link"
                    :class="{'main-navigation__link--active': activeLinkId === item.id}"
                ></a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            activeLinkId: 1,
            links: [
                {
                    id: 0,
                    link: '#',
                    title: 'Оргсхема',
                },
                {
                    id: 1,
                    link: '#',
                    title: 'Kolesa <strong>Team</strong>',
                },
                {
                    id: 2,
                    link: '#',
                    title: 'Kolesa Shop',
                },
                {
                    id: 3,
                    link: '#',
                    title: 'Новости',
                },
                {
                    id: 4,
                    link: '#',
                    title: 'Education',
                },
                {
                    id: 5,
                    link: '#',
                    title: 'Guidelines',
                },
                {
                    id: 6,
                    link: '#',
                    title: 'Библиотека',
                },
                {
                    id: 7,
                    link: '#',
                    title: 'FAQ',
                },
            ]
        };
    },
};
</script>
