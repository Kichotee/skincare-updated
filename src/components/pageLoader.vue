<template>
    <section class="pageLoader">
        <div class="">

            <span :class="textVisible?'fade-in':''">Not</span> Loading<span>...</span>
        </div>
        <p :class="textVisible?'fade-in':''">View on desktop only</p>
    </section>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
onMounted(()=>{

    gsap.from('.pageLoader',{
        opacity:0,
        duration:1
    })
    if(window.screen.width>1024){
        setTimeout(()=>{
            gsap.to('.pageLoader',{
                yPercent:101
            })
        },4500)
    }

})

let textVisible=ref(false)
setTimeout(()=>{
    textVisible.value = true;
}, 2000)

</script>

<style scoped>
section{
    height: 100vh;
		width: 100vw;
		white-space: nowrap;
		background: #f5b940;
        background-image: url(../assets/images/noise.svg);
		position: relative;
        display: flex;
        justify-content:center;
        align-items: center;
    flex-direction: column;
        letter-spacing: 1px;
        font-size: 1.25rem;
}
span:first-of-type, p{
    opacity: 0;
}
@media screen and (max-width:1024px){
    .fade-in{
        transition: all 0.5s;
        opacity: 1;
    
} 
span:first-of-type {
    transition: all 0.5s;
        opacity: 1;
}
}
</style>