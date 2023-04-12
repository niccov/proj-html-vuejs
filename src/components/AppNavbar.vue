<script>

import {store} from "../store.js"

export default {
    name: "AppNavbar",

    data() {
        return{
            store,
        }
    },

    


}
</script>

<template>
    <div id="container-navbar">
        <div id="container-logo">
            <img src="../../public/logo-light.png" alt="">
        </div>

        <div id="container-nav-links" v-for="link in store.links"><a href="#"> {{ link }} </a></div>

        <div id="container-function-icons">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-bag-shopping"></i>
            <i class="fa-solid fa-bars"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#container-navbar{
    width: 100%;

    padding-top: 10px;
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    #container-logo{
        max-width: 220px;

        img{
            width: 100%;
        }
    }

    #container-nav-links{
        display: flex;
        align-items: center;
        justify-content: space-around;

        a{
            color: white;
            text-decoration: none;
        }
    }

    #container-function-icons{
        display: flex;
        align-items: center;
        gap: 25px;

        i{
            font-size: 22px;

            color: white;
        }
    }
}
</style>