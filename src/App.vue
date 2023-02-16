<script setup lang="ts">
	import helpPage from "./components/helpPage.vue";
	import motive from "./components/motive.vue";
	import nextPhase from "./components/nextPhase.vue";
	import { onMounted, ref } from "vue";
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);
	const header_text_frag_1 = ref("");
	const header_text_frag_2 = ref("");
	const header_text_frag_3 = ref("");
	const header_text = ref("");
	const button_ref = ref("");
	const button_text_ref = ref("");
	const bg = ref("");
	const img = ref("");
	const tl = gsap.timeline();
	const tl2 = gsap.timeline();
	onMounted(() => {
		tl.from(bg.value, {
			opacity: 0,
			scale: 3,
			duration: 1,
		})
			.from(header_text_frag_1.value, {
				xPercent: -100,
				duration: 1,
			})
			.from(header_text_frag_2.value, {
				yPercent: 1000,
				duration: 1,
				// fontStyle: "italic"
			})
			.from(header_text_frag_3.value, {
				xPercent: 100,
				duration: 1,
			})
			.fromTo(
				button_ref.value,
				{
					width: "50px",
					height: "60px",
					duration: 0.25,
					borderRadius: "50%",
				},
				{
					borderRadius: "1rem",
					width: "20%",
					height: "30%",
				}
			)
			.fromTo(
				button_text_ref.value,
				{
					opacity: 0,
					duration: 0.25,
				},
				{
					opacity: 1,
				}
			);

		tl2.fromTo(
			img.value,
			{
				scale: 1,
				duration: 3,
			},
			{
				scale: 2,
			}
		);

		ScrollTrigger.create({
			animation: gsap.fromTo(
				header_text.value,

				{
					yPercent: 100,
				},
				{yPercent:-20}
			),
			scrub: 3,
			trigger: img.value,
		});
		ScrollTrigger.create({
			animation: tl2,
			scrub: 3,
			trigger: img.value,
			// markers:true
		});
	});
</script>

<template>
	<div class="app">
		<div class="bg-box">
			<div ref="bg" class="bg">
				<img
					ref="img"
					src="./assets/images/pexels-ron-lach-8142196.jpg"
					alt=""
				/>
				<div class="logo">Brahma</div>

				<div
					ref="header_text"
					class="home-header-media-content"
				>
					<div
						ref="home-header-media-content-text"
						class="home-header-media-content-text"
					>
						<p ref="header_text_frag_1">
							Grace your body
						</p>
						<p class="lower-header-text">
							<span
								ref="header_text_frag_2"
								class="italic-text"
							>
								Adorn
							</span>
							<span
								class="bold-text-frag"
								ref="header_text_frag_3"
							>
								your skin
							</span>
						</p>
					</div>
					<button
						ref="button_ref"
						class="home-header-media-content-button"
					>
						<h2 ref="button_text_ref">
							Shop now
						</h2>
					</button>
				</div>
			</div>
		</div>
		<helpPage />
		<motive />
		<nextPhase />
	</div>
</template>

<style scoped>
	.app {
		min-height: 100vh;
		max-height: auto;
		background: #fcfbf4;
		scroll-behavior: smooth;
	}
	.logo {
		right: 0;
		z-index: 21;
		position: fixed;
	}
	.bg-box {
		height: 100vh;
		width: 100%;
		position: relative;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		object-fit: cover;
	}
	.bg {
		object-fit: cover;
		height: 90%;
		margin: 0 auto;
		width: 90%;
		overflow: hidden;
		position: absolute;
		border-radius: 0.5rem;
	}
	img {
		border-image-outset: 0;
		border-image-repeat: stretch;
		border-image-slice: 100%;
		border-image-width: 1;
		object-fit: cover;
		height: 100%;
		width: 100%;
		position: absolute;
		object-position: center;
	}

	.home-header-media-content {
		z-index: 2;
		position: relative;
		top: 50%;
		width: 60%;
		height: 30%;
		/* border: solid; */
		align-self: center;
		font-size: 2rem;
		font-weight: 600;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		gap: 12%;
		line-height: 2rem;
		color: inherit;
		/* overflow-x: hidden; */
	}
	.home-header-media-content-text {
		font-size: 2.2rem;
		height: 50%;
		/* overflow-x: hidden; */
	}
	button {
		width: 30%;
		height: 30%;
		outline: none;
		border-radius: 1rem;
		border: none;
		background-color: #fcfbf4;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #343434;
		position: relative;
	}
	button h2 {
		font-size: 0.8rem;
		position: absolute;
		z-index: 4;
	}
	button::after {
		height: 105%;
		border-radius: 1.98rem;
		position: absolute;
		transition: all 0.5s;
		width: 65%;
		content: "";
		z-index: 3;
		background-color: #121212;
		scale: 0.5;
		visibility: hidden;
		border: none;
		opacity: 0;
		transform-origin: center center;
		border-inline-start: 0;
		border-inline-end: 0;
	}
	button:hover {
		color: #fcfbf4;
	}
	button:hover::after {
		visibility: visible;
		opacity: 1;
		border-radius: 0.98rem;
		scale: 1;
		width: 105%;
	}

	.lower-header-text {
		font-style: italic;
	}
	.italic-text {
		font-style: italic;
		overflow: hidden;
	}
	.bold-text-frag {
		font-style: oblique;
		letter-spacing: 2px;
		font-kerning: 2px;
	}
</style>
