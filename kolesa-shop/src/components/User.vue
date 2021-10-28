<template>
    <div class="user-account main-header__user-account">
        <a href="#" class="user-account__dropdown" title="Личный кабинет">
            <img :src="userInfo.avatarUrl" class="user-account__image" :alt="userInfo.name + ' ' + userInfo.score + ' баллов'">
            <div class="user-account__info">
                <span class="user-account__name">{{ userInfo.name }}</span>
                <span class="user-account__money">{{ userInfo.score }} баллов</span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'User',
    props: {
    userInfo: Object,
    },
    mounted() {
        fetch('https://api.json-generator.com/templates/7ZW3y5GAuIge/data', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f',
            })
        })
        .then(res=>res.json())
        .then(res => {
            this.$emit('getUserData', res);
        });
    },
};
</script>
