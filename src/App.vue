<template>
    <v-app>
        <div></div>
    </v-app>
</template>

<script>

    export default {
        name: 'App',
        created() {
            this.isLogin();
        },
        methods: {
            isLogin() {
                this.$router.push('/login')
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
