<template>
  <div id="app">
        <header class="main-header">
            <div class="wrapper app__wrapper">
                <div class="site-logo main-header__site-logo">
                    <a href="/">
                        <img src="images/brand/logo.svg" alt="На главную" class="site-logo__image">
                    </a>
                </div>
                <SearchBox :query="searchQuery" />
                <UserBlock :userInfo="userData" @getUserData="getUserData($event)"/>
            </div>
        </header>
        <div class="main-content">
            <div class="wrapper app__wrapper">
                <div class="main-content__sidebar">
                    <Navigation />
                </div>
                <div class="main-content__content">
                    <PromoBanner />
                    <HotLinks />
                    <section class="main-products">
                        <nav class="product-tabs main-products__tabs">
                            <ProductTab
                                v-for="(tab, index) in tabs"
                                :key="index"
                                :tab="tab"
                                :activeTab="activeTab"
                                @setActiveTab="setActiveTab($event)"
                            />
                        </nav>
                        <div class="products-list main-products__list js__product-list">
                            <ProductCard
                                v-for="product in getProducts"
                                :key="product.id"
                                :productData="product"
                                @toggleModal="toggleModal($event)"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <Footer />
        <ModalCard
        :isModal="isModal"
        :card="modalCard"
        :userScore="userData.score"
        @toggleModal="toggleModal($event)"
        @updateScore="updateScore($event)"
        />
  </div>
</template>

<script>

import ModalCard from '@/components/Modal.vue';
import UserBlock from '@/components/User.vue';
import ProductCard from '@/components/ProductCard.vue';
import SearchBox from '@/components/SearchBox.vue';
import PromoBanner from '@/components/PromoBanner.vue';
import HotLinks from '@/components/HotLinks.vue';
import Navigation from '@/components/Navigation.vue';
import ProductTab from '@/components/ProductTab.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'App',
    components: {
        ModalCard,
        UserBlock,
        ProductCard,
        SearchBox,
        PromoBanner,
        HotLinks,
        Navigation,
        ProductTab,
        Footer,
    },
    data() {
        return {
            isModal:   false,
            modalCard: {},
            activeTab: 'all',
            searchQuery: '',
            userData: {},
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
                clothes: [],
                accessories: [],
            },
        };
    },
    computed: {
        getProducts() {
            var filteredProducts = [];

            function sortProducts(array) {
                return array.sort((a, b) => (a['isNew'] < b['isNew'] ? 1 : -1));
            }

            switch (this.activeTab) {
                case 'clothes':
                    filteredProducts = sortProducts(this.products.clothes);
                    break;
                case 'accessories':
                    filteredProducts = sortProducts(this.products.accessories);
                    break;
                default:
                    filteredProducts = sortProducts(this.products.clothes.concat(this.products.accessories));
                    break;
            }

            return filteredProducts
        },
    },
    mounted() {
        fetch('https://api.json-generator.com/templates/-_RLsEGjof6i/data', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f',
            })
        })
        .then(res=>res.json())
        .then(res => this.products.clothes = res);

        fetch('https://api.json-generator.com/templates/q3OPxRyEcPvP/data', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f',
            })
        })
        .then(res=>res.json())
        .then(res => this.products.accessories = res);

    },
    methods: {
        setActiveTab (tab) {
            this.activeTab = tab;
        },
        toggleModal (productData) {
            if (productData) {
                this.modalCard = productData;
            }

            this.isModal = !this.isModal;
        },
        updateScore (newScore) {
            this.userData.score = newScore;
        },
        getUserData (data) {
            this.userData = data;
        },
    },
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
