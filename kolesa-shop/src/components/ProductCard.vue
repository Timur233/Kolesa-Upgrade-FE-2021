<template>
    <div class="product-card main-products__card">
        <div class="product-card__image">
        <img
        v-if="productData.mainImage != ''"
        class="product-card__img"
        :alt="productData.title"
        :src="productData.mainImage"
        width="330"
        height="330">
        <img
        v-else
        class="product-card__img"
        :alt="productData.title"
        src="images/img/placeholder.jpg"
        width="330"
        height="330">
        <span v-if="productData.isNew" class="badge badge--green">NEW</span>
        </div>
        <div class="product-card__desc">
        <span class="product-card__price">{{ productData.price }} баллов</span>
        <span class="product-card__title">{{ productData.title }}</span>
        <span v-if="productData.sizes && productData.sizes.length > 0" class="product-card__size">
            {{ `Размеры: ${String(productData.sizes)}` }}
        </span>
        <div class="product-card__button-container">
            <button
            class="button product-card__hide-button"
            :data-id="productData.id"
            @click="openModal"
            >Заказать</button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    productData: Object,
  },
  methods: {
    openModal(){
      this.$emit('toggleModal', this.productData);
    }
  }
};
</script>
