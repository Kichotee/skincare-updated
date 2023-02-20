<template>
    <nav>
        <div class="menu">
            <div class="">
                <FontAwesomeIcon :icon="faBars"/>
                menu
            </div>
            <div class="">
                Rodite
            </div>
            <div class="">
                Bag<span>0</span>
            </div>
        </div>


    </nav>
</template>

<script setup lang="ts">
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


</script>

<style scoped>
nav{
    height: 10vh;
    /* background-color: black; */
    position: fixed;
    width: 100%;
    z-index: 14;
    color: #343443;
}
.menu{
    display: flex;
    width: 95%;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;
    align-items: end;
    vertical-align: center;
    text-transform: capitalize;
    line-height: 1.5rem;
}
div >div:nth-of-type(1){
    font-size: 0.9em;
    color: #444;
    letter-spacing: 1px;
    font-family: Montreal;

}
div:nth-of-type(2){
    font-size: 1.2rem;
    color: #343434;

    translate:0 0.3rem ;

}
div >div:nth-of-type(3){
    font-size: 0.9em;
    color: #444;
    font-family: Montreal;
}
div:nth-of-type(3)> span{
    border: 1px solid #343434;
    padding: 2.5% 5%;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    position: relative;
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row; */
    
    height: 1rem;
    font-size: 0.8rem;
    margin-left: 5%;
}

</style>