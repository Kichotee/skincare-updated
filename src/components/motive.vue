<template>
	<div class="motivationPage">
		
		<nextPhase></nextPhase>
		<div class="slide-1 slides" ref="slide_1">
			<div
				class="box"
				@mouseover="textChange('supple')"
			>
				<img
					class="fullImg"
					src="../assets/images/pexels-cottonbro-4046314.jpg"
					alt=""
				/>
				<div class="img-text-box">
					<p class="text">
						0Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Aut,
						quasi.
					</p>
				</div>
			</div>
		</div>
		<div class="slide-2 slides" ref="slide_2">
			<div
				class="box"
				@mouseover="textChange('define')"
			>
				<img
					class="fullImg"
					src="../assets/images/pexels-cottonbro-studio-4046316.jpg"
					alt=""
				/>
				<div class="img-text-box">
					<p class="text">
						there's always something next to do
					</p>
				</div>
			</div>
		</div>
		<div class="slide-3 slides" ref="slide_3">
			<div
				class="box"
				@mouseover="textChange('cleanse')"
			>
				<img
					class="fullImg"
					src="../assets/images/pexels-karolina-grabowska-4210340.jpg"
					alt=""
				/>
				<div class="img-text-box">
					<p class="text">
						0Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Aut,
						quasi.
					</p>
				</div>
			</div>
		</div>
		

		<div ref="ball" class="ball">
			<p
				appear
				@beforeEnter="beforeEnter"
				ref="cursor_text"
			>
				lorem
			</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import nextPhase from "./nextPhase.vue";

	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";
	import Flip from "gsap/Flip";
	import TextPlugin from "gsap/TextPlugin";
	import { onMounted, ref } from "vue";

	gsap.registerPlugin(Flip, ScrollTrigger);
	let ball: any = ref("");
	const textChange: any = ref("");
	let cursor_text: any = ref("");

	const beforeEnter = (el: HTMLElement) => {
		gsap.fromTo(
			el,
			{
				yPercent: 50,
				duration: 1,
			},
			{
				yPercent: 0,
			}
		);
	};
	let tl = gsap.timeline();
	let pageHeight:any=ref('')

	onMounted(() => {
		let panels = gsap.utils.toArray(".slides");
		 pageHeight.value=document.querySelector('.motivationpage')?.clientHeight
		

		ScrollTrigger.create({
			animation: tl.from(panels, {
				xPercent: 100 * (panels.length - 1),
				ease: "none",
			}),
			trigger: ".motivationPage",
			scrub: 2,
			// end:`  +=300`,
			pin: true,
			start: `-=20px top`,
			// markers:true,
			anticipatePin: 1,
			// snap: 1 / (panels.length - 1),
			// pinSpacing:false,
		});

		document.onmousemove = (e) => {
			ball.value.style.left = e.clientX + "px";
			ball.value.style.top = e.clientY + "px";
		};
		textChange.value = (text: string) => {
			cursor_text.value.textContent = text;
		};
	});
</script>

<style scoped>
	.motivationPage {
		height: 100vh;
		width: 100vw;
		white-space: nowrap;
		background-color: #fcfbf4;
		position: relative;
		overflow-x: hidden;
		scroll-behavior: smooth;
		direction: rtl;
	}
	img::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
	.img-text-box {
		width: 40%;
		height: 10%;
		position: absolute;
		z-index: 11;
		top: 50%;
		right: 50%;
		translate: 50% -50%;
	}
	.text {
		white-space: pre-wrap;
		width: 100%;
		font-size: 1.25rem;
		padding: 2.5% 5%;
		color: #fcfbf4;
		font-weight: 600;
	}

	.slides {
		height: 90%;
		width: 60%;
		display: inline-block;
		position: relative;
		top: 0;
		background-color: #fcfbf4;
		overflow: hidden;
	}
	.slides:last-of-type{
		overflow: scroll;
	}
	.productsBox {
		/* display: inline-block; */
		
		width: 100vw;
		height: 100vh;
	}

	.box {
		width: 90%;
		max-width: 90%;
		height: 80%;

		color: aliceblue;
		z-index: 12;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		position: absolute;
		overflow: hidden;
		border-radius: 1rem;

		/* border: 1px solid #123121; */
		border-image-outset: 0;
		border-image-repeat: stretch;
		border-image-slice: 100%;
		border-image-width: 1;
	}

	img:hover {
		scale: 1.1;
	}
	img {
		height: 100%;
		width: 100%;
		margin: 0;
		object-fit: cover;
		object-position: bottom;
		position: absolute;
		z-index: 10;
		border-radius: 1rem;
		transition: all 2s;
		border: solid;
	}
	.fullImg {
		transform-origin: center;
	}

	.sideImg {
		transform-origin: center;
		translate: 0% -50%;
		width: 50%;
	}
	.ball {
		width: 120px;
		height: 90px;
		border-radius: 50%;
		position: absolute;
		border: 1px solid #f0d62d;
		top: 0;
		z-index: 10;
		transition: all 0.5s
			cubic-bezier(0.175, 0.885, 0.32, 1.275);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.ball p {
		transition: all 1s;
		color: #fcfbf4;
	}
</style>
