<template>
	<section
		class="productsBox slides"
		id="productsBox"
	>
		<div ref="fullPage" class="fullpage">
			<div id="box">
				<p
					class="products"
					@mouseenter="textEnter($event) & showImg(image1,0) & boxShow()"
                    

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
					@mouseenter="textEnter($event) & showImg(image2,1) & boxShow()"
                    @mouseover=""

				>
					<span class="original-text">Serum</span>

					<span id="changingText">Serum</span>
				</p>
				<p
					class="products"
                    
					@mouseenter="textEnter($event) & showImg(image3,2) & boxShow()"

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
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
        </div>
		</div>
		<div class="frame2"></div>
	</section>
</template>

<script setup lang="ts">
	import { onMounted, ref } from "vue";
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";
    import image1 from '../assets/images/pexels-karolina-grabowska-4465124.webp'
    import image2 from '../assets/images/pexels-karolina-grabowska-4041392.webp'
    import image3 from '../assets/images/pexels-cottonbro-studio-4046316.webp'
	let fullPage: any = ref("");

	gsap.registerPlugin(ScrollTrigger);
	let frames = gsap.utils.toArray(".fullpage");
	let log = () => console.log("hello");

	onMounted(() => {


		gsap.from(".productsBox", {});
	});
	let tl = gsap.timeline();
	let textEnter = ref();
	let textLeave = ref();
	let boxShow = ref();

    let images=[image1, image2, image3]
    const showImg=ref()
	onMounted(() => {

        let floatingImgBox: any =
        document.querySelector(".floating-img-box");
		let products: any = document.querySelector(
			".floating-img-box"
            );
            
            showImg.value=(e:String, child:number)=>{
                floatingImgBox.children[child].src=e


                for (let i = 0; i < floatingImgBox.children.length; i++) {
                    i==child?floatingImgBox.children[i].style.opacity=1:floatingImgBox.children[i].style.opacity=0
                    
                }
            }
		products.addEventListener("click", () => {
			console.log("hello");
		});

		textEnter.value = (e: any) => {
			tl.fromTo(
				e.srcElement.firstChild,
				{
					translateY: "0%",
				},
				{
					translateY: "-100%",
				}
			)
			.fromTo(
				e.srcElement.lastChild,
				{
					translateY: "-100%",
				},
				{
					translateY: "0%",
				}
			);
			console.log(e);
		};
		textLeave.value = (e: any) => {
			tl.to(e.srcElement, {
				top: "0%",
			}).to(e.srcElement.nextSibling, {
				translateY: "-100%",
			});
			console.log("out");
		};

		fullPage.value.onmousemove = (e: any) => {
			floatingImgBox.style.left =
				e.clientX + "px";
				floatingImgBox.style.rotate =
				e.clientX/45 + "deg";
			floatingImgBox.style.top = e.clientY + "px";
		};
		boxShow.value = () => {
			floatingImgBox.style.opacity = 1;
		};
	});
</script>

<style scoped>
	section {
		display: inline-block;
		position: relative;
		top: 0;
		/* background-color: #fcfbf4; */

		/* overflow: hidden; */
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
		/* opacity: 0; */
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
	.frame2 {
		/* visibility: hidden; */
		background: pink;
		height: 100vh;
		width: 100%;
	}
	.floating-img-box {
		height: 40%;
		width: 30%;
		position: absolute;
		z-index: 2;
		top: 0;
		opacity: 0;
        translate:10% 0;
        transition: all 2s
			cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
    .floating-img-box img{
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
		height: 5rem;
		width: 24rem;
		overflow: hidden;
		z-index: 12;
        text-align: center;
		position: relative;
	/* border: solid; */

		
	}
   p span{
        text-align: center;
		margin: 0 auto;
		left: 10%;
		position: absolute;
		cursor: pointer;
		z-index: 10;

    }
	p #changingText {
		translate: 0 100%;
		display: block;
		
	}
	.original-text {
		/* translate: 0 100%; */
		font-family: Montreal;

		top: 0%;
	}
	p:hover {
	}
	img:first-of-type{
		/* object-position: bottom; */
	}
</style>
