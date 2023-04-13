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
        
        <div id="arrow-left" @click="$emit('prev')">
          <i class="fa-solid fa-chevron-left"></i>
        </div>

        <div id="arrow-right" @click="$emit('next') ">
          <i class="fa-solid fa-chevron-right"></i>
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

    position: relative;
    .container-img-s4{
        width: 100px;
        height: 100px;

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

    #arrow-left{
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);

        font-size: 30px;
    }

    #arrow-right{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);

        font-size: 30px;
    }
}
</style>