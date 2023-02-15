<template>
	<section>
		<div class="wrapper">
			<span class="box"> </span>
			<div class="info-content-text">
				<div class="info-content-text-title">
					<h4>All skin-types</h4>
				</div>
				<p class="info-content-text-paragraph">
					<span class="firstLine"
						>Lorem ipsum dolor sit amet
						consectetur incidunt aspernatur quis
						recusandae magni.
					</span>
				</p>
			</div>

			<div class="info-media media-1">
				<figure class="figure-1">
					<img
						src="../assets/images/pexels-ron-lach-8142196.jpg"
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
						src="../assets/images/pexels-cottonbro-4046314.jpg"
						alt=""
					/>
				</figure>
			</div>
			<div class="info-media media-4">
				<figure class="figure-4">
					<img
						src="../assets/images/pexels-anna-shvets-3852142.jpg"
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

	onMounted(() => {
		const e = gsap.timeline();
		e.fromTo(
			".info-content-text-title",
			{
				
				xPercent: -50,
			},
			{

				xPercent: 0,

			}
		);

		scrollTrigger.create({
			animation: e,
			target: ".info-content-text-title",
			start: "top top",
			end:"300px",	

			scrub: 5,
		});
		e.fromTo(
			".info-content-text-paragraph",
			{
				
				yPercent: 40,
			},
			{

				yPercent: 0,

			}
		);

		scrollTrigger.create({
			animation: e,
			target: ".info-content-text-title",
			start: "top top",
			end:"340px",	

			scrub: 2,
		});
		const f = gsap.timeline();
		f.fromTo(
			".firstLine",
			{
				rotate: 0,
				opacity: 0.5,
			},
			{
				rotate: 50,
				opacity: 1,
			}
		);

		scrollTrigger.create({
			animation: f,
			target: "firstLine",
			start: "top top",
			scrub: true,
		});
		const d = gsap.timeline();
		d.fromTo(
			".figure-1",
			{
				yPercent: 70,
			},
			{
				yPercent: 20,
			}
		);

		scrollTrigger.create({
			animation: d,
			target: ".figure-1",
			start: "top top",
			scrub: 3,
		});
		const k = gsap.timeline();
		k.fromTo(
			".figure-2",
			{
				yPercent: 0,
			},
			{
				yPercent: 150,
			}
		);

		scrollTrigger.create({
			animation: k,
			target: ".figure-2",
			start: "top top",
			scrub: 5,
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
			scrub: 5,
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
			scrub: 5,
		});
	});
</script>

<style scoped>
	section {
		padding-top: 19px;
		height: 100vh;
		width: 100vw;
		position: relative;
		background: #f8f8f8;
		/*  */
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
		text-align: left;
		z-index: 4;
		color: #343434;
		width: 50%;
		
		overflow: hidden;
	}
	h4 {
		font-weight: bolder;
		text-align: left;
	}
	.info-content-text::after {
		content: "";
		height: 200px;
		width: 200px;
		border-radius: 50%;
		background: rgba(0, 128, 128, 0.397);
		position: absolute;
		right: -50%;
	}

	.info-content-text h4 {
		font-size: 1rem;
	}

	.info-content-text-paragraph {
		font-size: 1.5rem;
	}

	.media-1 {
		grid-column: 1/3;
		grid-row: 1;

		justify-self: center;

	}

	.media-2 {
		grid-column: 1 / span 3;
		grid-row: 1;

		justify-self: center;
		/* border: solid; */
		z-index: 2;
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
		width: 150px;
		object-fit: cover;
		border-radius: 0.5rem;
	}

	.figure-3 img {
		width: 150px;
		object-fit: cover;
		border-radius: 0.5rem;
	}

	.figure-4 img {
		width: 150px;
		object-fit: cover;
		border-radius: 0.5rem;
	}
</style>
