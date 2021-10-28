<template>
  <div class="modal app__modal" :class="{'modal--open': isModal}">
        <div class="modal__container">
            <button class="modal__close-button" type="button" @click="closeModal"></button>
            <div class="modal__content">
                <div class="product-details">
                    <div class="product-gallery product-details__gallery">
                        <div class="product-gallery__main-image">
                            <img :src="card.mainImage" :alt="card.tite" class="main-image">
                        </div>
                        <div class="gallery-carousel product-gallery__carousel">
                            <div v-for="image in card.images" :key="image" class="gallery-carousel__item">
                                <a href="#image-item">
                                    <img :src="image"
                                    class="gallery-carousel__item-image"
                                    :alt="card.title">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="product-info">
                        <h2 class="product-info__title">{{ card.title }}</h2>
                        <div class="product-summary product-info__summary">
                            <div class="product-summary__action">
                                <h4 class="product-summary__price">{{ card.price }} баллов</h4>
                                <button class="button button--blue" type="button" @click="orderProduct">
                                    Заказать
                                </button>
                            </div>
                            <div class="user-wallet product-summary__wallet">
                                <div class="user-wallet__text">
                                    <span class="user-wallet__caption">Твой баланс:</span>
                                    <span class="user-wallet__money">{{ userScore }} баллов</span>
                                </div>
                                <div class="user-wallet__icon">
                                    <img src="images/shop.png"
                                    class="user-wallet__icon-image"
                                    alt="Баланс пользователя">
                                </div>
                            </div>
                        </div>
                        <div v-if="card.colors && card.colors.length>0" class="product-field product-info__field">
                            <span class="product-field__title">Цвета:</span>
                            <div v-for="(item, index) in card.colors" :key="index" class="product-option product-field__option">
                                <input type="radio"
                                :id="'color-' + item.color.replace('#', '') + '_' + index"
                                class="product-option__input"
                                name="color"
                                :value="item.color.replace('#', '')"
                                checked hidden>
                                <label class="product-option__label" :for="'color-' + item.color.replace('#', '') + '_' + index">
                                    <span class="product-option__color-probe" :style="{backgroundColor: item.color}">

                                    </span>
                                    <span class="product-option__caption">{{ item.label }}</span>
                                </label>
                            </div>
                        </div>
                        <div v-if="card.sizes && card.sizes.length>0" class="product-field product-info__field">
                            <span class="product-field__title">Размер:</span>
                            <div v-for="(item, index) in card.sizes" :key="index" class="product-option product-field__option">
                                <input type="radio"
                                :id="'size-' + item + '_' + index"
                                class="product-option__input"
                                name="size"
                                :value="item"
                                checked hidden>
                                <label class="product-option__label" :for="'size-' + item + '_' + index">
                                    {{ item }}
                                </label>
                            </div>
                        </div>
                        <div v-if="card.volumes && card.volumes.length>0" class="product-field product-info__field">
                            <span class="product-field__title">Объем:</span>
                            <div v-for="(item, index) in card.volumes" :key="index" class="product-option product-field__option">
                                <input type="radio"
                                :id="'size-' + item + '_' + index"
                                class="product-option__input"
                                name="size"
                                :value="item"
                                checked hidden>
                                <label class="product-option__label" :for="'size-' + item + '_' + index">
                                    {{ item }}
                                </label>
                            </div>
                        </div>
                        <div class="product-desc product-info__desc">
                            <span class="product-desc__title">Детали:</span>
                            <p class="product-desc__content">
                            {{ card.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal__backdrop" @click="closeModal"></div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isModal: Boolean,
    card: Object,
    userScore: Number
  },
  methods: {
    closeModal(){
        this.$emit('toggleModal');
    },
    orderProduct() {
        if ((this.userScore - this.card.price) >= 0) {
            this.$emit('updateScore', this.userScore - this.card.price);
        } else {
            alert('К сожалению ваш баланс = 0. Ну или чуть-чуть больше =)');
            alert('Короче не хватит');
        }
    }
  }
};
</script>
