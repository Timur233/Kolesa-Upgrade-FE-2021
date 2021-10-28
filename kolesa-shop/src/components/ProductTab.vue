<template>
    <button
        class="product-tabs__button js__product-tab  button button--small"
        :class="{'button--small--active': activeTab === tab.val}"
        @click="setActiveTab(tab.val)"
    >
        {{ tab.title }}
    </button>
</template>

<script>
export default {
    name: 'ProductTab',
    props: {
        tab: Object,
        activeTab: String
    },
    methods: {
        setActiveTab(tab) {
            this.$emit('setActiveTab', tab)
        }
    }
};
</script>
