<script setup>
import Star from "vue-material-design-icons/Star.vue"
import AppButton from "./AppButton.vue";
import BannerLayout from "./Layout/BannerLayout.vue";
</script>

<template>
  <BannerLayout>
    <div class="lg:w-[48%]">
      <h1 class="font-extrabold text-2xl lg:text-3xl">
        "Unleash Your <span class="text-primary">Creative Journey</span> with Our Multifaceted Hero Services: Crafting Words, Capturing Moments, Building Digital Realms, and Simplifying Your Everyday."
      </h1>
      <AppButton btn-text="Explore"/>
      <span>
        <Star class="inline"/> Customer Ratings
      </span>
    </div>
    <div class="lg:w-[48%]">
      <img src="../assets/images/hero-img.jpeg" alt="" class="lg:h-[500px] rounded-l-3xl"/>
    </div>
  </BannerLayout>
</template>

<style scoped>

</style>