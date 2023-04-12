<script>

import AppSectionOne from "./AppSectionOne.vue"
import AppSectionFour from "./AppSectionFour.vue"
import AppSectionSix from "./AppSectionSix.vue"

import {store} from "../store.js"

export default {
    data() {
        return{
            store,
        }
    },

    components: {
        AppSectionOne,
        AppSectionFour,
        AppSectionSix
    }

}
</script>

<template>
    <div id="container-main">
        <div id="section-1">
            <AppSectionOne v-for="card in store.cardsSectionOne" :item="card"> </AppSectionOne>
        </div>

        <div id="section-2">
            <div id="title-s2">
              <h2>The Trusted Name for In-Home Tutoring.</h2>
            </div>  
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugiat est mollitia optio nostrum voluptatum deleniti, nulla, aspernatur commodi nesciunt quos dolorum expedita eaque quasi soluta voluptates, ut harum labore!</p>
            <div style="color: #40C4FF;"><b>LEARN MORE</b></div>
            <div id="container-img-s2"><img src="../../public/h5-img-1.jpg" alt=""></div>
        </div>

        <div id="section-3">
            <div id="container-img-s3">
                <img src="../../public/h1-img-8.jpg" alt="">
            </div>
            <div id="paragraph-s3">
                <div id="top-paragraph-s3">
                   <div id="title-s3">
                       <h2>Empowering Children to Reach Their Potential.</h2>
                   </div>
                
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia, illo eveniet, soluta velit placeat nisi sapiente autem necessitatibus a maxime laudantium laboriosam quia dolor ut est. Neque, ad voluptas.</p>
                </div>

                <div id="bottom-paragraph-s3">
                    <div class="card-s3">
                        <h2>168</h2>
                        <div>User Stories</div>
                    </div>
                    
                    <div class="card-s3">
                        <h2>347</h2>
                        <div>Events</div>
                    </div>
                </div>
            </div>
            
        </div>

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
#section-1{
    width: 90%;

    margin: 40px auto;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

}

#section-2{
    margin: 20px;

    #title-s2{
        width: 245px;
        margin-bottom: 10px;

        font-family: serif;
    }

    p{
        margin-bottom: 15px;
    }

    #container-img-s2{
        width: 800px;

        margin: auto;

        img{
            width: 100%;
        }
    }
}

#section-3{
    display: flex;
    justify-content: center;

    margin: 80px 0px;

    #container-img-s3{
        width: 500px;

        margin: 50px;
        img{
            width: 100%;

        }
    }

    #paragraph-s3{
        width: 30%;

        margin: 50px;

        #top-paragraph-s3{
            #title-s3{
                font-size: 30px;
                font-family: serif;
            }
        }

        #bottom-paragraph-s3{
            margin-top: 50px;

            display: flex;

            .card-s3{
                width: 50%;

                text-align: center;

                h2{
                    font-size: 50px;
                    font-family: serif;

                    color: #40C4FF;
                }

                div{
                    font-size: 20px;

                    color: #40C4FF;
                }
            }
        }
    }
}
</style>