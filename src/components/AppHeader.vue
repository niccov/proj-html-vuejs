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
    },

    methods: {

        nextSlide() {
        
          if(this.store.activeIndex < this.store.slideHeader.length - 1) {
            this.store.activeIndex++;
            console.log(this.store.activeIndex);
          } else {
            this.store.activeIndex = 0;
            console.log(this.store.activeIndex);
          }
  
        },
    
        prevSlide() {
      
          if(this.store.activeIndex <= 0) {
            this.store.activeIndex = this.store.slideHeader.length - 1;
            console.log(this.store.activeIndex);
          } else {
            this.store.activeIndex--;
            console.log(this.store.activeIndex);
          }
        },
    }

}
</script>

<template>
    <div id="container-header">

    
      <img :src="store.slideHeader[store.activeIndex].image" alt="">

      <!-- navbar -->
      <div id="container-nav">
          <AppNavbar></AppNavbar>
      </div>
      <!-- /navbar -->
      <div id="container-text">
          <h1> {{ store.slideHeader[store.activeIndex].title }} </h1>
          <p> {{ store.slideHeader[store.activeIndex].text }} </p>
          <button>REGISTER NOW</button>
      </div>

      <div id="dots-container">
        <div class="dots active"></div>
        <div class="dots"></div>
        <div class="dots"></div>
      </div>

      <div id="arrow-left" @click=" prevSlide() ">
        <i class="fa-solid fa-chevron-left"></i>
      </div>

      <div id="arrow-right" @click="nextSlide() ">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
</template>

<style lang="scss" scoped>

#container-header {

    width: 100%;
    height: 500px;
    
    position: relative;


    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    #container-nav{
        width: 100%;

        position: absolute;
        top: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    
    #container-text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);

        text-align: center;

        h1{
          font-family: serif;
        }
    }

    #dots-container{
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        gap: 10px;

        .dots{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: white;

            &.active{
                background-color: black;
            }

        }

        
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