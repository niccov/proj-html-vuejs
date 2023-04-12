<script>

import {store} from "../store.js"

export default{
    name: "AppSectionFour",

    data() {
        return{
            store,
        }
    },
}
</script>

<template>
    <div id="container-s4">
        <div class="container-img-s4">
            <img :src="store.sliderSectionFour[store.activeIndexS4].image" alt="">
        </div>

        <div class="container-paragraph-s4">
            <p> "{{ store.sliderSectionFour[store.activeIndexS4].cit }}" </p>

            <div> {{ store.sliderSectionFour[store.activeIndexS4].name }} </div>

            <div> {{ store.sliderSectionFour[store.activeIndexS4].status }} </div>
        </div>    
    </div>
</template>

<style lang="scss" scoped>
#container-s4{
    background-image: url(../../public/h5-parallax-img-1.png);
    background-position: center;
    width: 100%;
    height: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    color: white;
    font-family: serif;
    font-size: 18px;
    .container-img-s4{
        width: 80px;
        height: 80px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;

            border-radius: 50%;
        }
    }

    .container-paragraph-s4{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 25px;

        width: 40%;
    }
}
</style>