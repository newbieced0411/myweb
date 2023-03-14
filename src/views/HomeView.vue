<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
    <header class="fixed w-full">
        <HeaderComponent />
    </header>
    <main class="w-full">
        <section class="flex flex-col justify-center w-1/2 h-screen mx-auto">
            <div class="text-[#00ccc2]">
                Hello, my name is 
            </div>
            <div class="my-2 text-7xl font-[500] text-gray-100 leading-normal ">
                Cedrick Dela Carcel
            </div>
            <div class="mb-6 text-3xl font-[500] text-gray-200 ">
                junior web developer
            </div>
            <div class="mt-4 mb-9 text-[18px] text-justify tracking-wide leading-relaxed">
                <div class="mb-6">
                    I'm passionate about building intuitive, user-friendly websites and web applications that help businesses and individuals achieve their goals.
                </div>
                <div class="mb-6">
                    My journey into web development started when I joined Village88, a bootcamp that focusing in full-stack web development. 
                    Since then, I've been honing my skills in HTML, CSS, JavaScript, PHP, and various web development frameworks and libraries such as Vue.js, Laravel, and Tailwind CSS. In my experiences, I prioritize clean, maintainable code and responsive design that looks great on any device. I love to challenge myself and push my skills to the limit by taking on projects that require me to learn new technologies and techniques.
                </div>
            </div>
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row justify-around items-center">
                    <a href="https://github.com/newbieced0411" title="github" target="_blank" class="px-2 py-1 transition rounded hover:bg-gray-600/30">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" class="p-1">
                            <path fill="currentColor" d="M12 0a12 12 0 00-3.8 23.36c.6.11.82-.26.82-.58v-1.99c-3.35.73-4.05-1.61-4.05-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.73.08-.72.08-.72 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.82 1.3 3.5 1 .11-.8.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.92 0-1.3.46-2.36 1.24-3.19-.14-.3-.54-1.51.1-3.14 0 0 1-.32 3.3 1.22a11.38 11.38 0 016 0c2.3-1.54 3.3-1.22 3.3-1.22.64 1.63.24 2.84.12 3.14.77.83 1.23 1.9 1.23 3.19 0 4.59-2.81 5.62-5.48 5.92.43.36.82 1.09.82 2.2v3.26c0 .32.21.69.83.58A12 12 0 0012 0z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/newbie-cedrick/" title="linkedin" target="_blank" class="px-2 py-1 transition rounded hover:bg-gray-600/30">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" class="p-1">
                            <path fill="currentColor" d="M20.035 20.034h-3.447v-5.384c0-1.287-.023-2.941-1.789-2.941-1.79 0-2.064 1.4-2.064 2.847v5.478h-3.447V9h3.354v1.513h.047c.466-.882 1.605-1.81 3.309-1.81 3.534 0 4.185 2.327 4.185 5.358V20.034zM5.894 7.395c-1.032 0-1.871-.84-1.871-1.871s.84-1.871 1.871-1.871 1.871.84 1.871 1.871-.84 1.871-1.871 1.871zM3.448 20.034h3.447V9H3.448v11.034zM22.401 0H1.599C.715 0 0 .715 0 1.599v20.802c0 .883.715 1.599 1.599 1.599h20.802c.883 0 1.599-.715 1.599-1.599V1.599c0-.884-.715-1.599-1.599-1.599z"/>
                        </svg>
                    </a>
                </div>
                <div>
                    <a href="mailto:jctdelacarcel@gmail.com" class="py-4 px-5 text-white font-semibold bg-[#272727] border border-gray-400 rounded transition hover:bg-gray-700">
                        Email me
                    </a>
                </div>
            </div>
        </section>
        <section class="h-screen">
            <h1>Introduction</h1>
        </section>
    </main>
    <FooterComponent/>
</template>

<style>
</style>