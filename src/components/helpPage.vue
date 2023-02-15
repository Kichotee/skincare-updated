<template>
	<section>
		<div class="wrapper">
			<span class="box"> </span>
			<div class="info-content-text">
				<div class="info-content-text-title">
					<h4>All skin-types</h4>
				</div>
				<p class="info-content-text-paragraph">
					<span
						ref="text_frag_1"
						class="info-content-text-1"
					>
						Lorem ipsum
					</span>

					<span
						ref="text_frag_2"
						class="info-content-text-2"
					>
						dolor sit
					</span>
					<br />
					<span
						ref="text_frag_3"
						class="info-content-text-3"
					>
						sit amet.
					</span>
				</p>

				<p ref="long_text" class="about-summer-sale">
					Lorem ipsum dolor sit, amet consectetur
					adipisicing elit. Aliquid illo
					necessitatibus voluptate. Minima, optio
					modi laborum pariatur harum quasi
					repudiandae non quos at quibusdam
					incidunt. Velit, repellat. Fugiat,
					cupiditate sit!
				</p>
			</div>

			<div class="info-media media-1">
				<figure class="figure-1">
					<img
					src="../assets/images/pexels-anna-shvets-3852142.jpg"

						alt=""
					/>
				</figure>
			</div>
			<div class="info-media media-2">
				<figure class="figure-2">
					<img
						src="../assets/images/ezgif-4-81ae41a0a0.webp"
						alt=""
					/>
				</figure>
			</div>
			<div class="info-media media-3">
				<figure class="figure-3">
					<img
						src="../assets/chris-lawton-c0rIh0nFTFU-unsplash.jpg"
						alt=""
					/>
				</figure>
			</div>
			<div class="info-media media-4">
				<figure class="figure-4">
					<img
						src="../assets/images/pexels-shiny-diamond-3762466.jpg"

						alt=""
					/>
				</figure>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref } from "vue";
	import { gsap } from "gsap";

	import scrollTrigger from "gsap/ScrollTrigger";
	import { onMounted } from "vue";

	let page = document.getElementsByClassName(
		"home-header-box"
	);
	gsap.registerPlugin(scrollTrigger);
	let text_frag_1 = ref("");
	let text_frag_2 = ref("");
	let text_frag_3 = ref("");
	let long_text = ref("");
	onMounted(() => {
		const e = gsap.timeline();
		e.fromTo(
			".info-content-text-title",
			{
				yPercent: -500,
			},
			{
				yPercent: 0,
			}
		)
			.fromTo(
				text_frag_1.value,
				{
					xPercent: -500,
					opacity: 0,
					// duration:2
				},
				{
					opacity: 1,
					xPercent: 0,
				}
			)
			.fromTo(
				text_frag_2.value,
				{
					xPercent: 500,
					opacity: 0,
				},
				{
					opacity: 1,
					xPercent: 0,
				}
			)
			.fromTo(
				text_frag_3.value,
				{
					opacity: 0,
				},
				{
					opacity: 1,
				}
			)
			.fromTo(
				long_text.value,
				{
					opacity: 0,
					yPercent:100
				},
				{
					opacity: 1,
					yPercent:0,
					stagger:10
				}
			);

		scrollTrigger.create({
			animation: e,
			target: ".info-content-text-title",
			start: "top top",
			end: "400px",
			
			scrub: 2,
		});
		const v = gsap.timeline();

		const d = gsap.timeline();
		d.fromTo(
			".figure-1",
			{
				yPercent: 50,
			},
			{
				yPercent: -100,
			}
		);

		scrollTrigger.create({
			animation: d,
			target: ".figure-1",
			start: "top top",
			scrub: 1,
		});
		const k = gsap.timeline();
		k.fromTo(
			".figure-2",
			{
				yPercent: 0,
			},
			{
				yPercent: 40,
			}
		);

		scrollTrigger.create({
			animation: k,
			target: ".figure-2",
			start: "top top",
			scrub: 2,
		});
		const m = gsap.timeline();
		m.fromTo(
			".figure-3",
			{
				yPercent: -0,
				scale: 0.8,
			},
			{
				yPercent: 0,
				scale: 1.5,
			}
		);

		scrollTrigger.create({
			animation: m,
			target: ".figure-3",
			start: "top top",
			scrub: 2,
		});
		const n = gsap.timeline();
		n.fromTo(
			".figure-4",
			{
				xPercent: -300,
			},
			{
				xPercent: 0,
			}
		);

		scrollTrigger.create({
			animation: n,
			target: ".figure-4",
			start: "top top",
			scrub: 2,
		});
	});
</script>

<style scoped>
	section {
		padding-top: 19px;
		height: 100vh;
		width: 100vw;
		position: relative;
		background: #fcfbf4;
		/*  */
		font-family: groetsk-mono;
	}

	.wrapper {
		height: 100%;
		width: 100%;
		display: grid;
		overflow: hidden;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}

	.box {
		position: absolute;
		top: 0;
		width: 150px;
		height: 50px;
		background: rgba(0, 128, 128, 0.397);
	}

	.info-content-text {
		position: relative;
		grid-column: 3/-1;
		grid-row: 1;
		align-self: center;
		justify-self: self-start;
		text-align: center;
		z-index: 4;
		color: #343434;
		width: 50%;

		overflow: hidden;
	}
	h4 {
		font-weight: bolder;
		text-align: center;
		font-family: Source;
		letter-spacing: 2px;
	}

	.info-content-text h4 {
		font-size: 0.8rem;
		font-weight: 900;
	}
	.info-content-text-1 {
		/* border: solid; */
		/* position: relative; */
		display: inline-block;
		padding-right: 10px;
	}
	.info-content-text-2 {
		/* border: solid; */
		display: inline-block;
	}
	.info-content-text-2::after {
		content: " ";
		margin-right: 2px;
	}
	.info-content-text-2 {
		display: inline-block;
		/* border: solid; */
	}

	.info-content-text-paragraph {
		font-size: 1.5rem;
		line-height: 1.5;
	}

	.media-1 {
		grid-column: 1 / span 2;
		grid-row: 2;

		justify-self: center;
		z-index: 2;
	}

	.media-2 {
		grid-column: 1 / span 5;
		grid-row: 1;
		width: 100%;
		justify-self: center;
		/* border: solid; */
	}

	.media-3 {
		grid-column: 4;
		grid-row: 1/3;
		z-index: 5;
		justify-self: center;
		align-self: end;
		/* border: solid; */
	}

	.media-4 {
		grid-column: 3;
		grid-row: 2;

		justify-self: center;
		/* border: solid; */
		z-index: 2;
	}

	figure {
		transform-origin: bottom;
	}

	.figure-1 img {
		object-fit: cover;
		width: 150px;
		border-radius: 0.5rem;
	}

	.figure-2 img {
		width: 300px;
		object-fit: cover;
		border-radius: 0.5rem;
	}

	.figure-3 img {
		width: 150px;
		object-fit: cover;
		border-radius: 0.5rem;
	}

	.figure-4 img {
		width: 200px;
		object-fit: cover;
		border-radius: 0.5rem;
	}
</style>
