<script>

import {store} from "../store.js"

export default{
    name: "AppSectionFive",

    data() {
        return{
            store,
        }
    },

    methods: {

        infoAppear(index) {
            
            this.store.activeIndexS5 = index
        }
    } 
}
</script>

<template>
    <div id="container-S5">
        <div id="info-column">
            <div class="info" v-for="(item, index) in store.selectorSectionFive" @click="infoAppear(index)"> {{ item.titleColumn }} </div>
        </div>

        <div id="info-description">
            <h2> {{ store.selectorSectionFive[store.activeIndexS5].title }} </h2>
            <p> {{ store.selectorSectionFive[store.activeIndexS5].description }} </p>
            <ul>
                <li> {{ store.selectorSectionFive[store.activeIndexS5].infoOne }} </li>
                <li> {{ store.selectorSectionFive[store.activeIndexS5].infoTwo }} </li>
                <li> {{ store.selectorSectionFive[store.activeIndexS5].infoThree }} </li>
                <li> {{ store.selectorSectionFive[store.activeIndexS5].infoFour }} </li>
            </ul>

            <div id="container-img-s5">
                <img src="../../public/h12-tabs-icon-1.png" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#container-S5{
    width: 80%;

    margin: 50px auto;

    display: flex;
    justify-content: space-around;
    align-items: center;

    #info-column{

        width: 250px;

        .info{
            padding: 20px 12px;

            border: 1px solid grey;

            cursor: pointer;
        }
    }

    #info-description{
        width: 550px;

        position: relative;

        h2{
            margin-bottom: 10px;
        }

        p{
            margin-bottom: 30px;
        }

        ul{
            li{
                margin-bottom: 10px;
            }
        }

        #container-img-s5{
            width: 100px;

            position: absolute;
            bottom: 0;
            right: 10px;

            img{
                width: 100%;
            }
        }
    }
}
</style>