<script setup>
import { ref } from "vue";

const tabs = ref([
  {
    id: "#about-me",
    text: "About",
  },
  {
    id: "#experience",
    text: "Experience",
  },
  {
    id: "#contact",
    text: "Contact",
  },
]);
</script>

<template>
  <div class="flex flex-row justify-between w-full px-6 py-3 backdrop-blur-xl">
    <div class="flex-1">
      <h1 class="flex items-center text-3xl font-bold tracking-wider">
        <!-- <span><img src="@/assets/nc-transparent-background.png" alt="NC Logo" class="h-8 mr-2"></span> -->
        <a href="#home" class="text-center text-gray-50 text-3xl font-bold font-['Inter'] leading-9"
          ><span>&lt;ced /&gt;</span></a
        >
      </h1>
    </div>
    <nav class="flex justify-end flex-1 gap-x-12 text-gray-300 text-base font-medium font-['Inter'] leading-normal">
      <ul class="flex flex-row items-center justify-between w-1/3 h-full">
        <li
          v-for="tab in tabs"
          v-bind:key="tab"
          class="px-4 py-1 transition rounded hover:bg-gray-600/30"
        >
          <a :href="tab.id">{{ tab.text }}</a>
        </li>
      </ul>

      <button
        class="ml-16 bg-gray-300 rounded-xl pt-1.5 pr-4 pb-1.5 pl-4 flex flex-row gap-2 items-center justify-center relative"
      >
        <p class="relative text-left text-gray-900">Download CV</p>
      </button>
    </nav>
  </div>
</template>
