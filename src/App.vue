<script setup lang="ts">
	import helpPage from "./components/helpPage.vue";
	import motive from "./components/motive.vue";
	import nextPhase from "./components/nextPhase.vue";
	import { onMounted, ref } from "vue";
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);
	const header_text = ref("");
	const bg = ref("");
	const img = ref("");
	const tl = gsap.timeline();
	onMounted(() => {
		tl.from(bg.value, {
			opacity: 0,

			duration: 3,
			
		})
		ScrollTrigger.create({
			animation: gsap.fromTo(
			img.value,
			{
				scale: 1,
				duration: 3,
			},
			{
				scale: 2,
			}
		),
			scrub: 2,
			trigger: header_text.value,
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
						class="home-header-media-content-text"
					>
						<p>Grace your body</p>
						<p>
							<span
								><em>Adorn </em> your skin
							</span>
						</p>
					</div>
					<button
						class="home-header-media-content-button"
					></button>
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
		background: #f8f8f8;
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
		border-radius: 0.25rem;
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
		object-position: left;

	}

	.home-header-media-content {
		z-index: 2;
		position: relative;
		top:50%;
		width: 50%;
		height: 40%;

		align-self: center;
		font-size: 2rem;
		font-weight: 600;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		gap: 12%;
		line-height: 1.2rem;
		color:inherit;
	}
	.home-header-media-content-text {
		font-size: 2.2rem;
	}
	button {
		width: 40%;
		height: 30%;
		outline: none;
		border-radius: 1rem;
		border: none;
	}
</style>
