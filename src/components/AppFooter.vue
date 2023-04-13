<script>
import { store } from '../store';


export default {
    data() {
        return{
            store
        }
    },


}
</script>

<template>
    <div id="container-footer-top">
        <div class="column-footer">
            <div id="container-img-footer">
              <img :src="store.firstColumnFooter.image" alt="">
            </div>  
            <p> {{ store.firstColumnFooter.testo }} </p>
            <div> {{ store.firstColumnFooter.phone }} </div>
            <div> {{ store.firstColumnFooter.date }} </div>
        </div>

        <div class="column-footer">
            <h2> {{ store.secondColumnFooter.title }} </h2>
            <h4> {{ store.secondColumnFooter.firstSubject }} </h4>
            <p> {{ store.secondColumnFooter.firstTeacher }} </p>
            <h4> {{ store.secondColumnFooter.secondSubject }} </h4>
            <p> {{ store.secondColumnFooter.secondTeacher }} </p>
            <h4> {{ store.secondColumnFooter.thirdSubject }} </h4>
            <p> {{ store.secondColumnFooter.thirdTeacher }} </p>
        </div>

        <div class="column-footer">
            <h2> {{ store.thirdColumnFooter.title }} </h2>
            <div> {{ store.thirdColumnFooter.linkOne }} </div>
            <div> {{ store.thirdColumnFooter.linkTwo }} </div>
            <div> {{ store.thirdColumnFooter.linkThree }} </div>
            <div> {{ store.thirdColumnFooter.linkFour }} </div>
            <div> {{ store.thirdColumnFooter.linkFive }} </div>
        </div>

        <div class="column-footer">
            <h2> {{ store.fourthColumnFooter.title }} </h2>
            <div id="container-img-map"> 
                <img :src="store.fourthColumnFooter.image" alt="">
            </div>
        </div>

    </div>

    <hr>

    <div id="container-footer-bottom">
        <div>Copyrights 2017 Mikado Themes</div>

        <div id="footer-bottom-right">
            <div>Call +44 300 303 0266</div>
            <div>FOLLOW US</div>
            <div><i class="fa-brands fa-twitter"></i></div>
            <div><i class="fa-brands fa-instagram"></i></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#container-footer-top{
    background-color: black;
    height: 400px;

    display: flex;
    justify-content: center;

    .column-footer{
        color: white;

        width: 300px;

        margin-top: 50px;

        #container-img-footer{
            width: 200px;

            img{
                width: 100%;
            }
        }

        #container-img-map{
            width: 220px;

            img{
                width: 100%;
            }
        }
    }
}

#container-footer-bottom{
    padding: 10px 15px 10px 15px;

    background-color: black;

    color: white;

    display: flex;
    justify-content: space-between;

    #footer-bottom-right{
        display: flex;
        gap: 15px;
    }
}
</style>