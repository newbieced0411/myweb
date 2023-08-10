<template>
    <div>
        <h1 class="mb-6 pb-2 text-3xl font-bold text-gray-100 tracking-wide border-b border-[#00ccc2]">About Me</h1>
        <div class="text-[16px] text-justify tracking-wide leading-relaxed">
            <div class="mb-6">
            My journey into web development started when I joined Village88, a bootcamp that focusing in full-stack web development. 
            Since then, I've been honing my skills in HTML, CSS, JavaScript, PHP, and various web development frameworks and libraries such as Vue.js, Laravel, and Tailwind CSS. In my experiences, I prioritize clean, maintainable code and responsive design that looks great on any device. I love to challenge myself and push my skills to the limit by taking on projects that require me to learn new technologies and techniques.
            </div>
            <div class="mb-6">
                Embarking on a journey to master the TALL Stack—Tailwind CSS, Alpine.js, Laravel, and Livewire. Elevating my full-stack web development skills to create efficient, stylish, and interactive applications. Excited for the impact this expertise will bring to my coding prowess.
                To be soon develop a mobile applications.
            </div>
            <div class="mb-6">
                I'm excited about the future of web development and the endless possibilities it offers. If you're looking for a dedicated, motivated junior developer to bring your vision to life, please don't hesitate to contact me. I'd love to hear from you!
            </div>
            <div class="mb-6">
                Here are a few technologies I've been working with recently:
            </div>
            <div class="mb-6 flex flex-row justify-between">
                <div class="w-full flex flex-row justify-between">
                    <ul class="mb-6">
                        <li v-for="tech in state.techs" :key="tech" class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00ccc2" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.146 8l-4.646 4.646a.5.5 0 0 0 .708.708l5-5a.5.5 0 0 0 0-.708l-5-5a.5.5 0 1 0-.708.708L10.146 8z"/>
                            </svg>
                            {{ tech }}
                        </li>
                    </ul>
                </div>
                <div class="w-full flex flex-row justify-around">
                    <ul class="mb-6">
                        <li v-for="framework in state.frameworks" :key="framework" class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00ccc2" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.146 8l-4.646 4.646a.5.5 0 0 0 .708.708l5-5a.5.5 0 0 0 0-.708l-5-5a.5.5 0 1 0-.708.708L10.146 8z"/>
                            </svg>
                            {{ framework }}
                        </li>
                    </ul>
                </div>
                <div class="w-full flex flex-row justify-around">
                    <ul class="mb-6">
                        <li v-for="database in state.databases" :key="database" class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00ccc2" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.146 8l-4.646 4.646a.5.5 0 0 0 .708.708l5-5a.5.5 0 0 0 0-.708l-5-5a.5.5 0 1 0-.708.708L10.146 8z"/>
                            </svg>
                            {{ database }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({ 
    techs: ['HTML & CSS','Javascript', 'PHP'],
    frameworks: ['Laravel/API', 'VueJS', 'ReactJS', 'TailwindCSS', 'JQuery'],
    databases: ['MySQL', 'Microsoft SQL Server', 'PostgreSQL'],
    tools: ['Postman', 'Git']
})
</script>

<style scoped>
.arrow-right-bullet {
  list-style: none;
}

.arrow-right-bullet li:before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-arrow-right-short' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M10.146 8l-4.646 4.646a.5.5 0 0 0 .708.708l5-5a.5.5 0 0 0 0-.708l-5-5a.5.5 0 1 0-.708.708L10.146 8z'/%3E%3C/svg%3E") no-repeat center center;
  background-size: contain;
}
</style>