<script>
import {store} from "../store.js"
export default{
    name: "AppSectionOne",

    data() {
        return{
            store,
        }
    },

    props: {
        item: Object,
    }
}
</script>

<template>
    <div class="card">
      <img :src="item.image" alt="">
      <div>{{ item.text }}</div>
    </div>  
</template>

<style lang="scss" scoped>
.card{
    min-width: 150px;
    height: 200px;

    background-color: #F2F8FC;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
</style>