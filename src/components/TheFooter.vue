<template>
    <div class=" flex justify-around items-center mt-6 bg-[url('/bg-footer.png')] bg-center absolute bottom-0 w-[100%] py-6 px-6">
        <div class="flex flex-col">
            <img :src="'/logo_solutioninn.webp'" alt="">
            <ul>
                <li>Solutioninn Writers</li>
                <li>Computer Projects</li>
                <li>Photography</li>
            </ul>
        </div>
        <div class="flex justify-around gap-8 items-center">
            <div>
                <h3>COMPANY</h3>
                <ul class="flex flex-col">
                    <a href="">Home</a>
                    <a href="">Available Tasks</a>
                    <a href="">Reviews</a>
                    <a href="">Affiliates</a>
                </ul>
            </div>

            <div>
                <h3>SOCILAS</h3>
                <ul class="flex flex-col">
                    <a href="">Twitter</a>
                    <a href="">Facebook</a>
                    <a href="">Instagram</a>
                    <a href="">Threads</a>
                </ul>
            </div>

            <div>
                <h3>FLOWBASE</h3>
                <ul class="flex flex-col">
                    <a href="">Twitter</a>
                    <a href="">Facebook</a>
                    <a href="">Instagram</a>
                    <a href="">Threads</a>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


</script>

<style  scoped>

</style>