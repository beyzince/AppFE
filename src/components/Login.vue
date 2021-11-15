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
        <v-btn depressed color="primary" v-on:click="login()">Login
        </v-btn>
    </div>
</template>

<script>
    import {router} from "@/main";
    import axios from 'axios'

    export default {
        data() {
            return {
                input: {}
            }
        },
        name: "Login",
        methods: {
            async login() {
                await axios.get('api/companies/');
                router.push('/empRegister')
            }
        }
    }
</script>

<style scoped>

</style>