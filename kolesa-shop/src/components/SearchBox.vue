<template>
    <div class="search">
        <form action="/main-page.html" class="search__form">
            <div class="search__box">
                <input
                v-model="query"
                type="text"
                name="query"
                placeholder="Поиск"
                class="search__input"
                required>
                <button type="submit" class="search__button">
                    <img src="images/icons/search-big.svg" alt="Search icon">
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    query: String,
  },
};
</script>
