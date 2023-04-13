<script>

import AppSectionOne from "./AppSectionOne.vue"
import AppSectionFour from "./AppSectionFour.vue"
import AppSectionFive from "./AppSectionFive.vue"
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
        AppSectionFive,
        AppSectionSix
    },

    methods: {
        nextSlide() {
        
        if(this.store.activeIndexS4 < this.store.sliderSectionFour.length - 1) {
          this.store.activeIndexS4++;
          console.log(this.store.activeIndexS4);
        } else {
          this.store.activeIndexS4 = 0;
          console.log(this.store.activeIndexS4);
        }

        },

        prevSlide() {
      
       if(this.store.activeIndexS4 <= 0) {
         this.store.activeIndexS4 = this.store.sliderSectionFour.length - 1;
         console.log(this.store.activeIndexS4);
        } else {
         this.store.activeIndexS4--;
         console.log(this.store.activeIndexS4);
        }
        },
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
            <AppSectionFour @next="nextSlide()" @prev="prevSlide()"></AppSectionFour>
        </div>

        <div id="section-5">
            <AppSectionFive></AppSectionFive>
        </div>

        <hr>

        <div id="section-6">
            <div id="container-head-s6">
                <h2>Popular Online Courses</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium assumenda illo atque modi tempore incidunt adipisci reprehenderit dolore voluptates laborum molestias officiis, iure maxime est non! Est laboriosam eaque magni?</p>
            </div>
            <div id="container-card-s6">
                <AppSectionSix v-for="(card, index) in store.sliderSectionSix" :card="card"></AppSectionSix>
                
                <div id="arrow-left" @click="">
                  <i class="fa-solid fa-chevron-left"></i>
                </div>

                <div id="arrow-right" @click=" ">
                   <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>    
        </div>

        <hr>

        <div id="section-7">
            <div id="container-head-s7">
                <h2>Pricing Plans</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem optio nisi repudiandae ut quaerat tempora enim cupiditate labore non. Veniam obcaecati quaerat voluptatem, libero.</p>
            </div>

            <div id="container-table">
                <table>
                    <thead>
                        <td style="font-size: 22px;">Save up to 40% by paying weekly</td>
                        <td style="background-color: #f7fdff;">
                            <img src="../../public/h5-custom-icon-7.png" alt="">
                            <div>
                                <div> Standard </div>
                                <div>$12</div>
                            </div>
                        </td>
                        <td style="background-color: #f7fdff; border-top-color: #40C4FF;">
                            <img src="../../public/h5-custom-icon-8.png" alt="">
                            <div>
                                <div> Professional </div>
                                <div>$59</div>
                            </div>
                        </td>
                        <td style="background-color: #f7fdff;">
                            <img src="../../public/h5-custom-icon-9.png" alt="">
                            <div>
                                <div> Advanced </div>
                                <div>$88</div>
                            </div>
                        </td>
                    </thead>

                    <tbody>
                        <tr>
                          <td>Number of Courses</td>
                          <td>2</td>
                          <td>4</td>
                          <td>6</td>
                        </tr>

                        <tr>
                          <td>Time</td>
                          <td>15 Days</td>
                          <td>30 Days</td>
                          <td>30 Days</td>
                        </tr>

                        <tr>
                          <td>Web Designing</td>
                          <td><i class="fa-solid fa-check"></i></td>
                          <td><i class="fa-solid fa-check"></i></td>
                          <td><i class="fa-solid fa-check"></i></td>
                        </tr>

                        <tr>
                          <td>Human-Centered Design</td>
                          <td><i class="fa-solid fa-check"></i></td>
                          <td><i class="fa-solid fa-check"></i></td>
                          <td><i class="fa-solid fa-check"></i></td>
                        </tr>

                        <tr>
                          <td>Basic Marketing</td>
                          <td><i class="fa-solid fa-xmark"></i></td>
                          <td><i class="fa-solid fa-check"></i></td>
                          <td><i class="fa-solid fa-check"></i></td>
                        </tr>

                        <tr>
                          <td>Python for Everybody</td>
                          <td><i class="fa-solid fa-xmark"></i></td>
                          <td><i class="fa-solid fa-check"></i></td>
                          <td><i class="fa-solid fa-check"></i></td>
                        </tr>

                        <tr>
                          <td>Android Developer</td>
                          <td><i class="fa-solid fa-xmark"></i></td>
                          <td><i class="fa-solid fa-xmark"></i></td>
                          <td><i class="fa-solid fa-check"></i></td>
                        </tr>

                        <tr>
                          <td>Business English</td>
                          <td><i class="fa-solid fa-xmark"></i></td>
                          <td><i class="fa-solid fa-xmark"></i></td>
                          <td><i class="fa-solid fa-check"></i></td>
                        </tr>

                        <tr style="height: 80px;">
                            <td style="border: none;"></td>
                            <td style=" background-color: #f7fdff;"><button>GET IT NOW</button></td>
                            <td style=" background-color: #f7fdff;"><button style="background-color: #40C4FF; border: none; color: white;">GET IT NOW</button></td>
                            <td style=" background-color: #f7fdff;"><button>GET IT NOW</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <hr>

        <div id="section-8">
            <div class="container-img-s8">
                <img src="../../public/h5-client-5.png" alt="">
            </div>

            <div class="container-img-s8">
                <img src="../../public/h5-client-1.png" alt="">
            </div>

            <div class="container-img-s8">
                <img src="../../public/h5-client-2.png" alt="">
            </div>

            <div class="container-img-s8">
                <img src="../../public/h5-client-1.png" alt="">
            </div>
        </div>

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

#section-6{
    background-image: url(../../public/page-background-img.png);
    
    height: 600px;

    #container-head-s6{
        text-align: center;

        margin: 40px auto;

        width: 70%;
    }

    #container-card-s6{
        margin-top: 80px;

        display: flex;
        flex-flow: row nowrap;

        position: relative;

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
    
}

#section-7{


    #container-head-s7{
        text-align: center;

        margin: 40px auto;

        width: 70%;
    }

    #container-table{
        table{

            width: 80%;

            margin: 10px auto;
            margin-bottom: 100px;

            border-collapse: collapse;

            thead{
              
                td{
                    border: 1px solid rgba(0, 0, 0, 0.519);
                    border-top: 5px solid;
                    border-top-color: #f7fdff;

                    text-align: center;

                    width: calc(100% / 4);

                    height: 250px;
                }
            }

            tbody{

                .fa-solid.fa-check{
                    color: #40C4FF;
                }
                
                td{
                    border: 1px solid rgba(0, 0, 0, 0.519);

                    text-align: center;

                    height: 60px;

                    button{
                        padding: 8px 20px;
                    }
                }
            }
        }
        
    }
}

#section-8{
    width: 90%;
    
    margin: 50px auto;

    display: flex;
    align-items: center;
    justify-content: center
}
</style>