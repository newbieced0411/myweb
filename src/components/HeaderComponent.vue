<script setup>
    import { ref } from "vue";

    let mobileMenuOpen = ref(false);
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

    function downloadCV() {
        // Create the content of the file (e.g., a sample text)
        const fileContent = "../assets/CV-John-Cedrick-Dela-Carcel-1.pdf";

        // Create a Blob object with the content
        const blob = new Blob([fileContent], { type: "text/plain" });

        // Create a download URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create an anchor element to trigger the download
        const a = document.createElement("a");
        a.href = url;
        a.download = "CV-John-Cedrick-Dela-Carcel.pdf"; // Specify the filename

        // Trigger a click event on the anchor element to start the download
        a.click();

        // Clean up by revoking the object URL
        URL.revokeObjectURL(url);
    }

    function toggleMobileMenu() {
        // Toggle the state of the mobile menu
        mobileMenuOpen.value = !mobileMenuOpen.value;
    }
</script>

<template>
    <div class="flex flex-row w-full p-2 relevant lg:py-3 lg:px-6 lg:justify-between">
        <div class="flex-1">
            <h1 class="flex items-center text-3xl font-bold tracking-wider">
                <a
                    href="#home"
                    class="text-center text-gray-50 text-3xl font-bold font-['Inter'] leading-9">
                    <span>&lt;ced /&gt;</span>
                </a>
            </h1>
        </div>

        <!-- Burger Menu for Mobile and Tablet -->
        <div class="flex items-center lg:hidden">
            <button
                @click="toggleMobileMenu"
                class="px-2 py-1 text-gray-300 focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>

        <nav
            class="hidden lg:flex justify-end flex-1 gap-x-12 text-gray-300 text-base font-medium font-['Inter'] leading-normal">
            <ul class="flex flex-row items-center justify-between w-1/3 h-full">
                <li
                    v-for="tab in tabs"
                    v-bind:key="tab"
                    class="px-4 py-1 transition rounded hover:bg-gray-600/30">
                    <a :href="tab.id">{{ tab.text }}</a>
                </li>
            </ul>

            <button
                @click="downloadCV"
                class="ml-16 bg-gray-300 rounded-xl pt-1.5 pr-4 pb-1.5 pl-4 flex flex-row gap-2 items-center justify-center relative">
                <span class="relative text-left text-gray-900">Download CV</span>
            </button>
        </nav>

        <!-- Mobile Menu (Initially Hidden) -->
        <div
            v-if="mobileMenuOpen"
            class="absolute flex items-center justify-center w-full h-screen text-gray-300 bg-[#111111] opacity-95 backdrop-blur-lg top-14 md:justify-center md:right-0 md:w-1/2 lg:hidde">
            <ul class="flex flex-col items-center justify-center h-full">
                <li
                    @click="toggleMobileMenu"
                    v-for="tab in tabs"
                    v-bind:key="tab"
                    class="px-4 py-2 transition hover:bg-gray-600/30">
                    <a :href="tab.id">{{ tab.text }}</a>
                </li>
                <li class="px-4 py-2 transition hover:bg-gray-600/30">
                    <button
                        @click="downloadCV"
                        class="text-gray-300 focus:outline-none">
                        Download CV
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
</style>