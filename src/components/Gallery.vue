<template>
	<div class="motivationPage" >
		
		<nextPhase onmouseenter="document.querySelector('.ball').style.opacity=0"></nextPhase>
		<div  onmouseenter="document.querySelector('.ball').style.opacity=1" class="slide-1 slides" ref="slide_1">
			<div
				class="box"
				@mouseover="textChange('supple')"
			>
				<img
					class="fullImg"
					src="../assets/images/pexels-cottonbro-studio-4004470.webp"
					alt=""
				/>
				<div class="img-text-box">
					<p class="text">
						Unleash your skin's potential.
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
					src="../assets/images/pexels-anna-shvets-3852142.webp"
					alt=""
				/>
				<div class="img-text-box">
					<p class="text">
						Transform your skin's health.
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
					src="../assets/images/pexels-john-tekeridis-3212164.webp"
					alt=""
				/>
				<div class="img-text-box">
					<p class="text">
						Get the perfect skincare fit.
					</p>
				</div>
			</div>
		</div>
		

		<div ref="ball" class="ball">
			<p
				appear
				@beforeEnter="beforeEnter"
				ref="cursor_text"
				id="cursor_text"
			>
				
			</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import nextPhase from "./Products.vue";

	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";
	import Flip from "gsap/Flip";
	import TextPlugin from "gsap/TextPlugin";
	// import obser
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
			pin: '.motivationPage',
			start: `-=20px top`,
			snap:1/5,
			anticipatePin: 1,
			
		});
		

		document.onmousemove = (e) => {
			ball.value.style.left = e.clientX + "px";
			ball.value.style.top = e.clientY + "px";
		};
		textChange.value = (text: string) => {
			cursor_text.value.textContent = text;
			cursor_text.value.style.opacity=1
		};
		
	});
</script>

<style scoped>
	.motivationPage {
		height: auto;
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
	.pin-Spacer{
		height: 90% !important;
	}
	.img-text-box {
		width: 80%;
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
		font-size: 3.75rem;
		padding: 2.5% 5%;
		color: #fcfbf4;
		font-weight: 800;
		font-family: Montreal;
		text-align: center;
		transition: all 2s  cubic-bezier(0.175, 0.885, 0.32, 1.275);

	}

	.slides {
		height: 99%;
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
	

	.box {
		width: 90%;
		max-width: 90%;
		height: 80%;

		color: #fcfbf4;
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
	
	.box:hover .text{
		translate: 0 -50%;
	}
	img {
		height: 100%;
		width: 100%;
		margin: 0;
		object-fit: cover;
		object-position: top;
		/* position: absolute; */
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
		opacity: 0;
		transition: all 0.5s;
	}
</style>
