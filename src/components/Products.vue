<template>
	<section
		class="productsBox slides"
		id="productsBox"
	>
		<div ref="fullPage" class="fullpage">
			<div id="box">
				<p
					class="products"
					@mouseenter="
						textEnter($event) &
							showImg(image1, 0) &
							boxShow()
					"
					@mouseleave="textLeave($event)"
				>
					<span class="original-text"
						>Facial Toner</span
					>

					<span id="changingText"
						>Facial Toner</span
					>
				</p>
				<p
					class="products"
					@mouseenter="
						textEnter($event) &
							showImg(image2, 1) &
							boxShow()
					"
					@mouseleave="textLeave($event)"
				>
					<span class="original-text">Serum</span>

					<span id="changingText">Serum</span>
				</p>
				<p
					class="products"
					@mouseenter="
						textEnter($event) &
							showImg(image3, 2) &
							boxShow()
					"
					@mouseout="textLeave($event)"
				>
					<span class="original-text"
						>Moisturizer</span
					>

					<span id="changingText"
						>Moisturizer</span
					>
				</p>
			</div>
			<div
				ref="floatingIgBox"
				class="floating-img-box"
			>
				<img src="" alt="" />
				<img src="" alt="" />
				<img src="" alt="" />
			</div>
		</div>

		<footer class="footer-frame2">
			<!-- <div class="frame2"></div> -->
			<div class="frame3" ref="footer_box">
				<div class="box-1 footer-box">
					Aphrodite
				</div>
				<div class="box-2 footer-box">
					<ul>
						<li>Shop</li>
						<li>Looks</li>
						<li>LEGAl</li>
					</ul>
					<ul>
						<li>About</li>
						<li>Shopping bag</li>
						<li>Contact</li>
					</ul>
				</div>
				<div class="box-3 footer-box">
					<fieldset>
						<label for="email">
							Subscribe to our Email</label
						>
						<input
							type="email"
							name=""
							id=""
							placeholder="Type your email"
						/>
							<FontAwesomeIcon class="arrow" :icon="faArrowRight"/>
					</fieldset>
					<div class="social-media">
						<li>
							<FontAwesomeIcon
								:icon="faInstagram"
							></FontAwesomeIcon>
						</li>
						<li>
							<FontAwesomeIcon
								:icon="faTwitter"
							></FontAwesomeIcon>
						</li>
					</div>
					
				</div>
			</div>
			<div class="creator-box">
				<p>created by <a href="https://twitter.com/Siriusliblack">Timi</a></p>
			</div>
		
		</footer>
	</section>
</template>

<script setup lang="ts">
	import { onMounted, ref } from "vue";
	import gsap from "gsap";
	import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
	import {
		faInstagram,
		faTwitter,
	} from "@fortawesome/free-brands-svg-icons";
	import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
	import ScrollTrigger from "gsap/ScrollTrigger";
	import image1 from "../assets/images/pexels-karolina-grabowska-4465124.webp";
	import image2 from "../assets/images/pexels-karolina-grabowska-4041392.webp";
	import image3 from "../assets/images/pexels-cottonbro-studio-4046316.webp";
	import {
		myObserver,
		visibility,
	} from "../assets/observer";
	let fullPage: any = ref("");

	gsap.registerPlugin(ScrollTrigger);
	let frames = gsap.utils.toArray(".fullpage");
	let log = () => console.log("hello");

	let tl = gsap.timeline();
	let textEnter = ref();
	let textLeave = ref();
	let boxShow = ref();
	let footer_box = ref();
	const showImg = ref();
	const isVisible = ref(false);
	onMounted(() => {
		//get cursor element from document
		let floatingImgBox: any =
			document.querySelector(".floating-img-box");
		// Display element function
		showImg.value = (
			e: String,
			child: number
		) => {
			floatingImgBox.children[child].src = e;

			for (
				let i = 0;
				i < floatingImgBox.children.length;
				i++
			) {
				i == child
					? (floatingImgBox.children[
							i
					  ].style.opacity = 1)
					: (floatingImgBox.children[
							i
					  ].style.opacity = 0);
			}
		};
		// Text change function
		textEnter.value = (e: any) => {
			tl.fromTo(
				e.srcElement.childNodes[0],
				{},
				{
					yPercent: -100,
					duration: 0.25,
				}
			).fromTo(
				e.srcElement.childNodes[1],
				{},
				{
					yPercent: 0,
					duration: 0.25,
				}
			);
		};
		textLeave.value = (e: any) => {
			tl.to(e.srcElement.childNodes[1], {
				yPercent: -100,
				duration: 0.25,
			}).to(e.srcElement.childNodes[0], {
				yPercent: 0,
				duration: 0.25,
			});
			console.log("out");
		};

		fullPage.value.onmousemove = (e: any) => {
			floatingImgBox.style.left =
				e.clientX + "px";
			floatingImgBox.style.rotate =
				e.clientX / 45 + "deg";
			floatingImgBox.style.top = e.clientY + "px";
		};
		boxShow.value = () => {
			floatingImgBox.style.opacity = 1;
		};

		myObserver.observe(footer_box.value);
		// isVisible.value = visibility;
		// isVisible?
		// 	ScrollTrigger.create({
		// 	animation: tl.to(".frame2", {
		// 		// scale: 0.75,
		// 		// yPercent: -50,
		// 	}),
		// 	trigger:footer_box.value,
		// 	markers:true
		// }):''
	});
</script>

<style scoped>
	section {
		display: inline-block;
		position: relative;
		top: 0;
		direction: ltr;
		scroll-behavior: smooth;
	}
	#productsBox {
		/* background-color: green; */
		height: 100vh;
		width: 100vw;
		scroll-behavior: smooth;
	}
	.fullpage {
		height: 100%;
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: #343434; */
	}

	#box {
		width: 60%;
		height: 70%;
		font-size: 3.5rem;
		letter-spacing: 0.25rem;
		color: #343434;
		text-align: center;
		display: grid;
		place-content: center;
		z-index: 4;
	}
	.footer-frame2 {
		height: 40vh;
		width: 100%;
		position: relative;
		background: #000;
	}

	.frame3 {
		/* border: 3px solid gray; */
		border-radius: 1rem;
		left: 0;
		margin: 0 auto;
		height: 100%;
		padding-top: 2.5%;
		width: 95%;
		display: flex;
		overflow: hidden;
	}
	.floating-img-box {
		height: 40%;
		width: 30%;
		position: absolute;
		z-index: 2;
		top: 0;
		opacity: 0;
		translate: 10% 0;
		transition: all 2s
			cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.floating-img-box img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
		object-fit: cover;
		opacity: 0;
		transition: all 1s;
		position: absolute;
		rotate: -15deg;

		top: 0;
	}
	p {
		height: 4rem;
		width: 26rem;
		overflow: hidden;
		z-index: 12;
		text-align: center;
		position: relative;
	}
	p span {
		text-align: center;
		margin: 0 auto;
		left: 10%;
		position: absolute;
		width: 100%;

		cursor: pointer;
		z-index: 10;
		transition: all 0.05s;
	}
	#changingText {
		translate: 0 100%;
		display: block;
		font-family: Montreal;
	}
	.original-text {
		/* translate: 0 100%; */
		font-family: editorial;
		top: 0%;
		font-weight: 600;
	}
	p:hover {
	}
	.footer-box {
		height: 100%;
		width: calc(1 / 3 * 100%);
		display: flex;
		position: relative;
		z-index: 16;
	}
	.box-1 {
		background: #000;
	}
	.box-2 {
		background: #000;
		display: flex;
		justify-content: space-around;
		width: 100%;
		height: 100%;
		font-family: Montreal;
	}
	ul {
		height: 50%;
	}

	li {
		text-transform: uppercase;
		overflow: hidden;
		padding: 0 0 2.5% 0;
		position: relative;
		width: max-content;
		transition: all 0.8s linear;
		cursor: pointer;
		font-size: 1em;
		list-style: none;
	}

	li::after {
		height: 1px;
		width: 100%;
		content: "";
		background-color: #a4a4a4;
		position: absolute;
		bottom: 20%;
		left: 0;
		scale: 0;
		transform-origin: left;
		transition: all 0.8s linear;
	}
	li:hover::after {
		scale: 1;
	}
	li:hover {
		color: #343434;
	}
	.box-3 {
		background: #000;
		width: 100%;
		height: 100%;
		font-family: Montreal;
		display: flex;
		justify-content: space-around;
	}
	input[type="email"] {
		outline: none;
		border: none;
		background-color: transparent;
		border-bottom: 1px solid;
		padding-inline-start: 2%;
	}
	label {
		padding-bottom: 10%;
	}
	.arrow{
		position: absolute;
		right: 5%;
		top: 45%;
		font-size: 0.8rem;
	}
	fieldset {
		border: none;
		display: flex;
		width: 40%;
		height: 50%;
		flex-direction: column;
		position: relative;
		;
	}
	::placeholder {
		font-size: 0.75rem;
	}
	.social-media{
		width:40%;
		height: 50%;
		display: flex;
		
		justify-content: space-evenly;
	}
	.social-media li::after{
		display: none;
	}
	.creator-box{
		width: 100%;
		height: 5vh;
		position: absolute;
		background-color: #000;
	}
	.creator-box p{
		width: 20%;
		margin: 0 auto;
		color: #adadad;
		font-family: Montreal;
	}
</style>
