<template>
	<section class="productsBox slides" id='productsBox'>
		<div class="fullpage"></div>
        <div class="frame2"></div>
		
	</section>
</template>

<script setup lang="ts">
	import { onMounted, ref } from "vue";
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);
	let frames = gsap.utils.toArray(".fullpage");

	onMounted(() => {
		gsap.from(".productsBox", {});
		// ScrollTrigger.create({
		// 	animation: gsap.from(".frame2", {
		// 		y: () => {
		// 			document.querySelector(".productsBox")?.clientHeight +'px';
		// 		},
		// 	}),
		// 	trigger: ".fullPage",
		// 	markers: true,
		// 	// pin: true,
		// });
	});
</script>

<style scoped>
	section {
		display: inline-block;
		position: relative;
		top: 0;
		/* background-color: #fcfbf4; */
		width: 100vw;
		height: 90vh;
		/* overflow: hidden; */
        scroll-behavior: smooth;
        background: blue;
	}
    #productsBox{
        background-color: green;
    }
	.fullpage {
		height: 100%;
		/* opacity: 0; */
	}
	.frame2 {
		/* visibility: hidden; */
        background: pink;
        height: 100%;
        width: 100%;
	}
</style>
