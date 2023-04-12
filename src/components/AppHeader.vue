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

    
      <img src="../../public/course-9-f-img.jpg" alt="">

      <!-- navbar -->
      <div id="container-nav">
          <AppNavbar></AppNavbar>
      </div>
      <!-- /navbar -->
      <div id="container-text">
          <h1>Contemporary Ideas</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, pariatur maiores necessitatibus amet in dolore velit provident vero distinctio deleniti a rem sapiente sunt veniam! Doloremque, dicta voluptatem. Obcaecati, inventore?</p>
          <button>REGISTER NOW</button>
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
    }

    
}
</style>