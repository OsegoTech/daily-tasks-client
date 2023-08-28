<script setup>

</script>

<template>
  <div class="flex justify-center lg:h-screen ">
    <div class="flex-1">
        <img src="../assets/images/hero-img.jpeg" class="rounded-md h-[100vh]" alt="">
    </div>
    <div class="flex-1   py-7 px-7 my-auto">
      <div class="border-3 border-primary flex justify-center items-center flex-col">
        <img src="../assets/images/logo_solutioninn.webp" alt="" />
        <h2 class="text-primary text-3xl uppercase my-3 font-mono">Register</h2>
      </div>

      <form action="" class="w-80 mx-auto">
        <div>
          <label for="name" class="text-1.5xl font-serif">Name</label>
          <input type="text" name="name" id="name" class="px-3 border-primary border-2 rounded-md w-full my-3 py-1" />
        </div>
        <div>
          <label for="email" class="text-1.5xl font-serif">Email</label>
          <input type="email" name="email" id="email" class="px-3 border-primary border-2 rounded-md w-full my-3 py-1" />
        </div>
        <div>
          <label for="password" class="text-1.5xl font-serif">Password</label>
          <input type="password" name="password" id="password" class="px-3 border-primary border-2 rounded-md w-full my-3 py-1" />
        </div>
        <div>
          <label for="password" class="text-1.5xl font-serif">Confirm Password</label>
          <input type="password" name="password" id="password" class="px-3 border-primary border-2 rounded-md w-full my-3 py-1" />
        </div>
        <div class="flex justify-center my-3 bg-primary py-2 rounded-md text-white text-2xl">
          <button type="submit" class="font-serif">Login</button>
        </div>
      </form>
      <div>
        <p class="text-center text-1.5xl">Already registered? <router-link to="/login" class="text-primary font-mono">Login</router-link></p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>