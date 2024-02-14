<template>
    <div class="header">
        <div class="text_header">
            <router-link to="/">
                <h2>Home</h2>
            </router-link>
            <router-link to="/users">
                <h2>Users</h2>
            </router-link>
            <router-link to="/profile">
                <h2>Profile</h2>
            </router-link>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
    import {RouterView, RouterLink} from 'vue-router'
</script>

<style scoped>
    .header {
        display: flex;
        flex-direction: column;
        margin-bottom: 120px;
    }
    .text_header{
        display: flex;
        flex-direction: row;
        justify-content: end;
        text-align: end;
        gap: 50px;
    }
    .text_header:last-child {
        margin-right: 250px;
    }
</style>