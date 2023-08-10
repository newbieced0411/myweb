<template>
  <div>
    <h1 class="mb-6 pb-2 text-3xl font-bold text-gray-100 tracking-wide border-b border-[#00ccc2]">Experiences</h1>
    <ul>
      <li v-for="(experience, index) in experiences" :key="index" class="mb-4">
        <h3 class="text-lg font-medium text-gray-300">{{ experience.title }}</h3>
        <p class="text-gray-500">{{ experience.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const experiences = ref([
  {
    title: "Inventory Management System",
    description: "Designed and developed an Inventory Management System using Laravel and jQuery. Streamlined inventory tracking and management processes."
  },
  {
    title: "Laravel API Integration",
    description: "Proficient in creating and integrating Laravel APIs using a RESTful approach. Enabled seamless communication between applications and data sources."
  },
  {
    title: "E-commerce Website",
    description: "Participated an E-commerce platform using Laravel and jQuery. Implemented features for admin and client side."
  },
  {
    title: "Real-time Notifications",
    description: "Integrated Pusher JS for real-time notifications displayed using simple Toastify notifications. Enhanced user experience with instant updates."
  },
  {
    title: "School Attendance Management System",
    description: "Developed a School Attendance Management System using VueJS for the frontend and Laravel API for the backend. Enabled efficient tracking of student attendance."
  }
  // Add more experiences as needed
]);
</script>

<style>

</style>