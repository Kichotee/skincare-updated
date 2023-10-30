<template>
	<section>
		<div class="description-wrapper">
			<div class="description-box">
				<p class="description-box-text">
					<span class="animatedText">
						Elevate your beauty with our premium skincare line.
					</span>
					<span class="animatedText">
						 Discover timeless radiance and confidence. Unleash your inner glow today.</span
					>
					<br />
					Discover timeless radiance and confidence.
					<br />
					Unleash your inner glow today. <br />
					
				</p>
				<img
                src="../assets/images/displayTextImg1.webp"
                class="images"
                alt=""
				/>
				<img
                class="images"
					src="../assets/images/pexels-adrienne-andersen-2661255-small.webp"
					alt=""
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import ScrollTrigger from "gsap/ScrollTrigger";
	import gsap from "gsap";
	import { onMounted, ref } from "vue";
	// let halfWidth: any = ref("");

	gsap.registerPlugin(ScrollTrigger);
    let tl= gsap.timeline()
	onMounted(() => {
		const text: any = document.querySelector(
			".animatedText"
		);
		// halfWidth.value = () => {
		// 	const state = Flip.getState(text);
		// 	text.className == "moveText"
		// 		? (text.className = "animatedText")
		// 		: (text.className = "moveText");
		// 	console.log(text.className);

		// 	Flip.from(state, {
		// 		duration: 1,
		// 		ease: "power1.inOut",
		// 	});
            const images= gsap.utils.toArray('.images')
            tl.from(text, {
                    x:0,
                    ease: "power3.easeOut",
                    
                    duration:.5,
                })
                .from(images,{
                
                opacity:0,
                duration:.5,
                scale:0
            })

			ScrollTrigger.create({
				animation:tl,
				trigger: ".description-wrapper",
                start:'-=50px top',
                toggleActions:'restart reverse restart reverse'
			});
		
	});
</script>

<style scoped>
	section {
		width: 100vw;
		position: relative;
		background: #fcfbf4;
		font-family: editorial;
		color: #343434;
        scroll-behavior: smooth;
	}
	.description-wrapper {
		padding: 12em 0;
		position: relative;
		display: flex;
		overflow: hidden;
		justify-content: center;
		align-items: center;

		/**/
	}
	.description-box {
		position: relative;
		text-align: center;
		width: 80%;

		font-size: 1.9rem;
		/* white-space: nowrap; */
	}
	img {
		width: 3rem;
		max-width: 100%;
		height: 3rem;
		border-radius: 50%;
		object-fit: cover;
		position: absolute;
		vertical-align: middle;
		/* border: solid; */
	}
	img:nth-of-type(1) {
		top: -1%;
		left: 30%;
	}
	img:nth-of-type(2) {
		top: 19%;
		right: 12%;
	}
	.description-box-text {
	}
	span {
		vertical-align: baseline;
		visibility: visible;
		text-align: center;
	}
	span:first-of-type {
		transform: translateX(-3.5rem);
	}
	span:nth-of-type(2) {
        transform: translateX(.5rem);
    }
	.animatedText {
		display: inline-block;
	}
	.moveText {
		display: inline;
	}
</style>
