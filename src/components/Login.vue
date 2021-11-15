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
        <v-btn depressed color="primary" @click="hebele()">Login
        </v-btn>
    </div>
</template>

<script>
import {router} from "@/main";
export default {
        data() {
            return {
                input: {}
            }
        },
        name: "Login",
        methods: {
            hebele() {
                router.push('/empRegister');
            }
        }
    }
</script>

<style scoped>

</style>