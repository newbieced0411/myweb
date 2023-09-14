<template>
    <div
        class="relative flex flex-col items-start justify-start w-1/2 gap-6 pl-8 pr-8">
        <div
            class="relative flex flex-col items-start self-stretch justify-start gap-4 shrink-0">
            <div
                class="relative flex flex-col items-center self-stretch justify-center gap-0 overflow-hidden shrink-0">
                <div
                    class="relative flex flex-row items-center justify-center gap-0 pt-1 pb-1 pl-5 pr-5 bg-gray-800 rounded-xl shrink-0">
                    <div
                        class="text-gray-300 text-sm font-medium font-['Inter'] leading-tight">
                        Skills
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col items-center self-stretch justify-center h-7">
                <p
                    class="self-stretch text-center text-gray-300 text-xl font-normal font-['Inter'] leading-7">
                    The skills, tools and technologies I am really good at:
                </p>
            </div>
        </div>
        <div
            class="grid grid-cols-3 text-lg font-normal leading-7 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-7 lg:gap-y-12 text-gray-dark-600">
            <div
                v-for="skill in skills"
                :key="skill.id"
                class="flex flex-col items-center gap-2">
                <img
                    :src="skill.logo"
                    alt="" />
                <p class="text-base text-normal md:text-lg">{{ skill.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const skills = [
        {
            id: 1,
            name: "Javascript",
            logo: require("../assets/icons/javascript-svgrepo-com.svg"),
        },
        {
            id: 2,
            name: "PHP",
            logo: require("../assets/icons/php3-svgrepo-com.svg"),
        },
        {
            id: 3,
            name: "Vue",
            logo: require("../assets/icons/vue-svgrepo-com.svg"),
        },
        {
            id: 4,
            name: "Node.js",
            logo: require("../assets/icons/icon-nodejs.svg"),
        },
        {
            id: 5,
            name: "Tailwindcss",
            logo: require("../assets/icons/icon-tailwindcss.svg"),
        },
        {
            id: 6,
            name: "Git",
            logo: require("../assets/icons/icon-git.svg"),
        },
        {
            id: 7,
            name: "Laravel",
            logo: require("../assets/icons/laravel-svgrepo-com.svg"),
        },
        {
            id: 8,
            name: "Livewire",
            logo: require("../assets/icons/livewire.svg"),
        },
        {
            id: 9,
            name: "Alpine",
            logo: require("../assets/icons/alpinejs-icon.svg"),
        },
        {
            id: 10,
            name: "MySQL",
            logo: require("../assets/icons/mysql.svg"),
        },
        {
            id: 11,
            name: "JQuery",
            logo: require("../assets/icons/jquery-wordmark.svg"),
        },
    ];
</script>
