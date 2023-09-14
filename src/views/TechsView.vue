<template>
    <div class="relative flex flex-col items-start justify-start w-1/2 gap-8 pl-8 pr-8">
        <div class="relative flex flex-col items-start self-stretch justify-start gap-4 shrink-0">
            <div class="relative flex flex-col items-center self-stretch justify-center gap-0 overflow-hidden shrink-0">
                <div class="relative flex flex-row items-center justify-center gap-0 pt-1 pb-1 pl-5 pr-5 bg-gray-800 rounded-xl shrink-0">
                    <div class="text-gray-300 text-sm font-medium font-['Inter'] leading-tight">
                        Skills
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center self-stretch justify-center h-7">
            <p class="self-stretch text-center text-gray-300 text-xl font-normal font-['Inter'] leading-7">The skills, tools and technologies I am really good at:</p>
        </div>
        <div class="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12 text-gray-dark-600 text-lg font-normal font-['Inter'] leading-7">
            <div class="flex flex-col items-center gap-2">
                <img :src="JsLogo" alt="">
                <p class="text-base text-normal md:text-lg">Javascript</p>
            </div>
            <div class="flex flex-col items-center gap-2">
                <img :src="PHPLogo" alt="">
                <p class="text-base text-normal md:text-lg">PHP</p>
            </div>
            <div class="flex flex-col items-center gap-2">
                <img :src="VueLogo" alt="">
                <p class="text-base text-normal md:text-lg">Vue</p>
            </div>
            <div class="flex flex-col items-center gap-2">
                <img :src="NodeLogo" alt="">
                <p class="text-base text-normal md:text-lg">Node.js</p>
            </div>
            <div class="flex flex-col items-center gap-2">
                <img :src="TailwindLogo" alt="">
                <p class="text-base text-normal md:text-lg">Tailwindcss</p>
            </div>
            <div class="flex flex-col items-center gap-2">
                <img :src="GitLogo" alt="">
                <p class="text-base text-normal md:text-lg">Git</p>
            </div>
            <div class="flex flex-col items-center gap-2">
                <img :src="LaravelLogo" alt="">
                <p class="text-base text-normal md:text-lg">Laravel</p>
            </div>
            <div class="flex flex-col items-center gap-2">
                <img :src="LivewireLogo" alt="">
                <p class="text-base text-normal md:text-lg">Livewire</p>
            </div>
            <div class="flex flex-col items-center gap-2">
                <img :src="AlpineLogo" alt="">
                <p class="text-base text-normal md:text-lg">Alpine</p>
            </div>
            <div class="flex flex-col items-center gap-2">
                <img :src="MySQLLogo" alt="">
                <p class="text-base text-normal md:text-lg">MySQL</p>
            </div>
            <div class="flex flex-col items-center gap-2">
                <img :src="JQueryLogo" alt="">
                <p class="text-base text-normal md:text-lg">JQuery</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import JsLogo from '../assets/icons/javascript-svgrepo-com.svg'
import AlpineLogo from '../assets/icons/alpinejs-icon.svg'
import LaravelLogo from '../assets/icons/laravel-svgrepo-com.svg'
import LivewireLogo from '../assets/icons/livewire.svg'
import MySQLLogo from '../assets/icons/mysql.svg'
import JQueryLogo from '../assets/icons/jquery-wordmark.svg'
import GitLogo from '../assets/icons/icon-git.svg'
import TailwindLogo from '../assets/icons/icon-tailwindcss.svg'
import NodeLogo from '../assets/icons/icon-nodejs.svg'
import VueLogo from '../assets/icons/vue-svgrepo-com.svg'
import PHPLogo from '../assets/icons/php3-svgrepo-com.svg'
</script>