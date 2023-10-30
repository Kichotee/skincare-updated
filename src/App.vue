<script setup lang="ts">
import helpPage from "./components/helpPage.vue";
import motive from "./components/Gallery.vue";
import detailsPage from "./components/detailsPage.vue";
import navbar from "./components/Navbar.vue";
import { onMounted, ref, computed } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PageLoader from "./components/pageLoader.vue";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

gsap.registerPlugin(ScrollTrigger);
let pageLoading = ref(true);
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
let menuOptions = {
	open: true,
	close: false,
};
if (window.screen.width >= 1024) {
	setTimeout(() => {
		pageLoading.value = false;
	}, 4500);
}

const menuChange = ref(false)
const changeMenu = (menuToggle: any) => {
	console.log(menuToggle);

	if (menuToggle) {
		gsap.to('.app', {
			duration: 1,
			rotate: '25deg',
			Height: '100vh',
		})
		gsap.to('.menu-bg', {
		})

	}
	else {
		gsap.to('.app', {
			duration: 1,
			rotate: 0,
			Height: 'auto',
		})
		gsap.to('.menu-bg', {
		})

	}
};


onMounted(() => {
	if (window.screen.width > 1024) {
		setTimeout(() => {
			gsap.from(bg.value, {
				scaleX: 1.5,
				scaleY: 1.5,
				duration: 5,
				ease: "expoOut",
				// ease:("custom","M0,0,C0.126,0.382,-0.112,0.941,0.104,0.948,0.494,0.96,0.818,1.001,1,1"),
			});
			tl.from(header_text_frag_1.value, {
				xPercent: -100,
				duration: 1,
			})
				.from(header_text_frag_2.value, {
					yPercent: 1000,
					duration: 1,
					// fontStyle: "italic"
				})
				.from(header_text_frag_3.value, {
					xPercent: 110,
					duration: 1,
				})
				.fromTo(
					button_ref.value,
					{
						width: "50px",
						height: "60px",
						borderRadius: "50%",
					},
					{
						borderRadius: "1rem",
						width: "20%",
						height: "15%",
					},
					"<"
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
					scaleY: 0.5,
				},
				{
					duration: 5,
					scale: 2,
				}
			);

			ScrollTrigger.create({
				animation: gsap.fromTo(
					header_text.value,

					{
						yPercent: 100,
					},
					{ yPercent: -20 }
				),
				scrub: 1,
				trigger: img.value,
			});
			ScrollTrigger.create({
				animation: tl2,
				scrub: 3,
				trigger: img.value,
				// markers:true
			});
		}, 4700);
	}
});
</script>

<template>
	<PageLoader v-show="pageLoading" />
	<div class="menu-bg" v-if="!pageLoading">
		<article>
			<!-- <FontAwesomeIcon :icon="faClose"/> -->
			<p>Shop</p>
			<p>Looks</p>
			<p>About</p>
		</article>
	</div>
	<navbar v-if="!pageLoading" @toggleMenu="changeMenu" :menuOptions="menuOptions" />
	<div class="app" v-if="!pageLoading">
		<div class="bg-box">
			<div ref="bg" class="bg">
				<img ref="img" src="./assets/images/autumn-goodman-vTL_qy03D1I-unsplash.webp" alt="" />
				<!-- <div class="logo">Brahma</div> -->

				<div ref="header_text" class="home-header-media-content">
					<div ref="home-header-media-content-text" class="home-header-media-content-text">
						<p ref="header_text_frag_1">
							Grace your <span>body</span>{{
								menuChange ? menuChange : ""
							}}
						</p>

						<span ref="header_text_frag_2" class="italic-text">
							Adorn
						</span>
						<span class="bold-text-frag" ref="header_text_frag_3">
							your skin
						</span>
					</div>
					<button ref="button_ref" class="home-header-media-content-button">
						<h2 ref="button_text_ref">
							Shop now
						</h2>
					</button>
				</div>
			</div>
		</div>
		<helpPage />
		<detailsPage />
		<motive />
	</div>
</template>

<style scoped>
.app {
	min-height: 100vh;
	max-height: auto;
	background: #fcfbf4;
	scroll-behavior: smooth;
	font-family: editorial;
	word-spacing: 0.75rem;
	position: sticky;
	top: 0;
	z-index: 17;
	transform-origin: right;
}

article {
	height: 99vh;
	color: white;
	width: 40%;
	display: flex;
	flex-direction: column;
	padding: 5% 0 5% 2.5%;
	justify-content: space-evenly;
	align-items: start;
	font-size: 3rem;
}

article p {
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

article p::after {
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

article p:hover::after {
	scale: 1;
}

article p:hover {
	color: #444;
}

.menu-bg {
	min-height: 100%;
	/* height: 100vh; */
	position: fixed;
	background: #343434;
	z-index: 15;
	top: 0;
	width: 100vw;
	overflow: hidden;
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
	height: 80%;
	margin: 0 auto;
	width: 95%;
	overflow: hidden;
	position: absolute;
	border: solid;
	border-radius: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
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
	width: 60%;
	height: 70%;
	/* border: solid; */
	align-self: center;

	font-weight: 600;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	line-height: 2rem;
	color: inherit;
	/* overflow-x: hidden; */
}

.home-header-media-content-text {
	font-size: 3rem;
	line-height:105%;
	overflow-x: hidden;
	height: 40%;
	padding: 1rem 0;
}

button {
	width: 20%;
	height: 20%;
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
	transition: all 0.5s;

}

button::after {
	
	border-radius: 1rem;
	position: absolute;
	transition: all 0.5s;
	width: 100%;
	height: 100%;
	content: "";
	z-index: 3;
	background-color: #121212;
	scale: 0.5;

	visibility: hidden;
	border: none;
	opacity: 0;
	transform-origin: center center;
	
}

button:hover {
	color: #fcfbf4;
}

button:hover::after {
	visibility: visible;
	opacity: 1;
	/* border-radius: 1rem; */
	scale: 1;
	width: 100%;
	height: 100%;
}

.lower-header-text {}

span:first-of-type {
	font-family: Montreal;
	font-style: italic;
}

.italic-text {
	font-style: italic;
	font-family: Montreal;
	overflow: hidden;
	display: inline-block;
	vertical-align: middle;
	padding-right: 9px;
}

.bold-text-frag {
	font-style: oblique;
	letter-spacing: 2px;
	font-kerning: 2px;
	display: inline-block;
	vertical-align: middle;
}

@media screen and (max-width: 1024px) {
	.app {
		display: none;
	}
}
</style>
