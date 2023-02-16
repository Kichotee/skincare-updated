<template>
	<section>
		<div class="wrapper">
			<div class="description-box">
				<p class="description-box-text">
					<span> Lorem ipsum dolor </span>
					<span> sit amet consectetur  dolor ipsum dolor</span> <br>
                     sit amet consectetur adipisicing elit. Enim.
                   <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Temporibus, architecto.

				</p>
                <img src="../assets/images/pexels-ron-lach-8142196.jpg" alt="">
                <img src="../assets/images/pexels-cottonbro-4046314.jpg" alt="" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped>
	section {
		width: 100vw;
		position: relative;
		background: #fcfbf4;
		font-family: editorial;
		color: #343434;
	}
	.wrapper {
		padding: 12em 0;
		position: relative;
		display: flex;
		overflow: hidden;
		justify-content: center;
		align-items: center;
		/**/
	}
	.description-box {
		position: relative;
		text-align: center;
		width: 80%;
		
		font-size: 1.9rem;
        /* white-space: nowrap; */


	}
	img {
		width: 2.5rem;
		max-width: 100%;
		height: 2.5rem;
		border-radius: 50%;
		
		position: absolute;
		vertical-align: middle;
        /* border: solid; */
        

		
	}
    img:nth-of-type(1){
        top: -2%;
        left: 30%;
    }
    img:nth-of-type(2){
        top: 19%;
        right: 12%;
    }
	.description-box-text {

	}
	span {
		display: inline-block;
		vertical-align: baseline;
		visibility: visible;
		text-align: center;


	}
    span:first-of-type{
        transform: translateX(-3rem);
    }
    span:nth-of-type(2){

    }
</style>
