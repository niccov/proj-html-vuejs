<script>

import AppNavbar from "./AppNavbar.vue"
import {store} from "../store.js"

export default {
    data() {
        return{
            store,
        }
    },

    components: {
        AppNavbar,
    }

}
</script>

<template>
    <div id="container-header">
        <!-- navbar -->
        <div id="container-nav">
            <AppNavbar></AppNavbar>
        </div>
        <!-- /navbar -->

        <div id="container-jumbo">
            <h1>Contemporary Ideas</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tenetur magni ex eligendi iure quo sed sequi deleniti veritatis mollitia! Exercitationem nesciunt sequi recusandae volupta</p>
            <button>REGISTER NOW</button>
        </div>

    </div>
</template>

<style lang="scss" scoped>

#container-header {
    background-image: url(../../public/course-9-f-img.jpg);
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    filter: grayscale(0.30);

    width: 100%;
    height: 500px;

    #container-jumbo{
        color: white;
        text-align: center;

        width: 60%;

        margin: 80px auto;

        h1{
            font-size: 50px;
            font-family: serif;
        }

        button{
            padding: 12px 20px;

            margin-top: 30px;

            font-size: 12px;

            background-color: #40C4FF;
            border: none;

            color: white;
        }
    }
    
}
</style>