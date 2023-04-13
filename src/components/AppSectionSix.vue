<script>

export default{
    name: "AppSectionSix",

    data() {
        return{

        }
    },

    props:{
        card: Image,
    }
}
</script>

<template>
    <div class="container-img-s6">
        <img :src="card" alt="">
    </div>
</template>

<style lang="scss" scoped>
.container-img-s6{
    width: 300px;

    img{
        width: 100%;
    }
}
</style>