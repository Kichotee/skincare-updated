<template>
    <nav>
        <div class="menu">
            <div class="">
                menu
            </div>
            <div class="">
                Rodite
            </div>
            <div class="">
                Bag<span>0</span>
            </div>
        </div>


    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
nav{
    height: 10vh;
    /* background-color: black; */
    position: fixed;
    width: 100%;
    z-index: 14;
    color: #343443;
}
.menu{
    display: flex;
    width: 95%;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;
    align-items: center;
}
div:nth-of-type(3)> span{
    border: 1px solid #343434;
    padding: 2.5% 5%;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    position: relative;
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row; */
    
    height: 1rem;
    font-size: 0.8rem;
    margin-left: 5%;
}

</style>