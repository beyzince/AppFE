<template>
    <div>
        <v-text-field
                 label="Username"
                 hide-details="auto"
        ></v-text-field>
        <v-text-field
                 label="Password"
                 type="password"
                 hide-details="auto"
        ></v-text-field>
        <v-button type="button" v-on:click="login()">Login</v-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: {}
            }
        },
        name: "Login",
        methods: {
            login() {

            }
        }
    }
</script>

<style scoped>

</style>