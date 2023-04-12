<script>

import AppSectionFour from "./AppSectionFour.vue"
import AppSectionSix from "./AppSectionSix.vue"

export default {
    data() {
        return{

        }
    },

    components: {
        AppSectionFour,
        AppSectionSix
    }

}
</script>

<template>
    <div id="container-main">
        <div id="section-1"></div>
        <div id="section-2"></div>
        <div id="section-3"></div>
        <div id="section-4">
            <AppSectionFour></AppSectionFour>
        </div>
        <div id="section-5"></div>
        <div id="section-6">
            <AppSectionSix></AppSectionSix>
        </div>
        <div id="section-7"></div>
        <div id="section-8"></div>
    </div>
</template>

<style lang="scss" scoped>
</style>