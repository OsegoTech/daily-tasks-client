<template>
  <div class="flex justify-center lg:h-screen ">
    <div class="flex-1">
        <img src="../assets/images/hero-img.jpeg" class="rounded-md h-[100vh]" alt="">
    </div>
    <div class="flex-1   py-7 px-7 my-auto">
      <div class="border-3 border-primary flex justify-center items-center flex-col">
        <img src="../assets/images/logo_solutioninn.webp" alt="" />
        <h2 class="text-primary text-3xl uppercase my-3 font-serif">Login</h2>
      </div>

      <form action="" class="w-80 mx-auto">
        <div>
          <label for="email" class="text-2xl font-serif">Email</label>
          <input type="email" name="email" id="email" class="border-primary border-2 rounded-md w-full my-3 py-1" />
        </div>
        <div>
          <label for="password" class="text-2xl font-serif">Password</label>
          <input type="password" name="password" id="password" class="border-primary border-2 rounded-md w-full my-3 py-1" />
        </div>
        <div class="flex justify-center my-3 bg-primary py-2 rounded-md text-white text-2xl font-serif">
          <button type="submit">Login</button>
        </div>
      </form>
      <div>
        <p class="text-center text-1.5xl">Don't have an account? <router-link to="/register" class="text-primary font-mono">Register</router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
