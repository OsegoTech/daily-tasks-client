<script setup>
import PreHeader from "./PreHeader.vue";
import { ref} from "vue";
const showMenu = ref(false)
</script>

<template>
  <div>
    <PreHeader  />
    <header class="bg-gray-100">
      <nav
          class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
      >
        <div
            class="flex items-center justify-between"
        >
          <router-link
              to="/"
          >
            <img src="../assets/images/logo_solutioninn.webp" alt="">
          </router-link>

<!--          mobile menu button-->
          <div
          @click="showMenu = !showMenu"
          class="flex md:hidden"
          >
            <button
                type="button"
                class="text-gray-800 hover:text-gray-400 focus:outline-none  focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <li>
            <router-link to="/">
              Home
            </router-link>
          </li>

          <li>
            <router-link to="/tasks">
              Tasks
            </router-link>
          </li>


          <li>
            <router-link to="/about">
              About Us
            </router-link>
          </li>
          <li>
            <router-link to="/faqs">
              FAQ
            </router-link>
          </li>
          <li>
            <router-link to="/contact">
              Contact
            </router-link>
          </li>

        </ul>
      </nav>
    </header>
  </div>

</template>

<style scoped>

</style>