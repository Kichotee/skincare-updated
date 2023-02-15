<template>
	<div class="motivationPage">
		<div class="slide-1 slides" ref="slide_1">
			<img
				@click="halfWidth"
				class="fullImg"
				src="../assets/images/pexels-cottonbro-4046314.jpg"
				alt=""
				/>
				<!-- <div class="img-text-box">
					<p class="text">
						0Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Aut, quasi.
					</p>
				</div> -->
			</div>
			<div class="slide-2 slides" ref="slide_2">
				<img
				class="fullImg"
				@click="halfWidth"
				src="../assets/images/pexels-cottonbro-studio-4046316.jpg"
				alt=""
				/>
				<div class="img-text-box">
					<p class="text">
						there's always something next to do
					</p>
				</div>
			</div>
			<div class="slide-3 slides" ref="slide_3">
				<img
				class="fullImg"
				@click="halfWidth"
				src="../assets/images/pexels-karolina-grabowska-4210340.jpg"
				alt=""
			/>
            <div class="img-text-box">
				<p class="text">
				Only the dead stops living
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";
	import Flip from "gsap/Flip";
	import TextPlugin from "gsap/TextPlugin";
	import { onMounted, ref } from "vue";

	gsap.registerPlugin(Flip, ScrollTrigger);
	let halfWidth: any = ref("");
	const tl = gsap.timeline();
	onMounted(() => {
		let panels = gsap.utils.toArray(".slides");
		let page: any = document.querySelector(
			".motivationPage"
		);

		ScrollTrigger.create({
			animation: gsap.from(panels, {
				xPercent: -100 * (panels.length - 1),
				ease: "none",
			}),
			trigger: ".motivationPage",
			scrub: 1,
			pin: true,
			snap: 1 / (panels.length - 1),
		});
		halfWidth.value = (e: any) => {
			const state = Flip.getState(e.srcElement);
			e.srcElement.className == "fullImg"
				? (e.srcElement.className = "sideImg")
				: (e.srcElement.className = "fullImg");
			console.log(e.srcElement.className);

			Flip.from(state, {
				duration: 1,
				ease: "power1.inOut",
			});
		};
	});
</script>

<style scoped>
	.motivationPage {
		height: 100vh;
		width: 100vw;
		white-space: nowrap;
		background-color: #f3f3f3;
		position: relative;
		overflow-x: hidden;
        
	}
	img::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
	.img-text-box {
		width: 40%;
		height: 100vh;
		position: absolute;
		z-index: 2;
		top: 0;
		right: 0;
	}
	.text {
        width: 100%;
        white-space: pre-wrap;
		font-size: 3.25rem;
        padding: 2.5% 5%;
		color: #36454f;
        font-weight: 600;
	}
	

	.slides {
		height: 80%;
		width: 100%;
		display: inline-block;
		position: relative;
		top: 0;
        background-color: #f3f3f3;
	}

	.slide-1 {
		z-index: 2;
	}

	.slide-2 {
		z-index: 3;
	}

	.box {
		width: 50%;
		height: 40%;
		background-color: red;
		color: aliceblue;
		z-index: 10;
		top: 0;
		position: absolute;
		margin: 0 auto;
	}

	.slide-3 {
		z-index: 4;
		transform-origin: left;
	}

	img {
		height: 80%;
		width: 80%;
		margin: 0;
		object-fit: cover;
		object-position: bottom;
		position: absolute;
		z-index: 10;
		
		left: 50%;
		top: 50%;
		border-radius: 10px;
		translate: -50% -50%;
	}
	.fullImg{
		
		transform-origin: center;
	}
	
	.sideImg {
		transform-origin: center;
		translate: 0% -50%;
		width: 50%;
	}
</style>
