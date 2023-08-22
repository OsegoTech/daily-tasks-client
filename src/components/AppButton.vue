<script setup>
const props = defineProps({
  btnText:String
})

</script>

<template>
  <button class="bg-primary text-white font-bold py-2 my-5 rounded-lg text-center px-10 mx-auto">
    {{btnText}}
  </button>
</template>

<style scoped>

</style>