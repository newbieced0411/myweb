<template>
    <header
        class="lg:px-80"
        :class="state.scroll ? state.whenScroll : state.defaultHeader">
        <HeaderComponent />
    </header>
    <main
        id="home"
        class="w-full">
        <section
            class="relative py-10 lg:flex lg:flex-row lg:overflow-hidden lg:items-center lg:self-stretch lg:justify-center lg:px-20 lg:py-24 shrink-0">
            <div class="relative flex flex-col items-start justify-start gap-4 px-8 lg:w-1/2">
                <div
                    class="relative flex flex-col items-start self-stretch justify-center gap-2 shrink-0"
                    style="font: var(--body-2-normal-all, 400 16px/24px 'Inter', sans-serif)">
                    <h1
                        class="relative text-4xl font-bold leading-9 text-center text-gray-100 md:text-5xl lg:text-6xl md:text-left font-inter">
                        Hi, I’m Cedrick 👋
                    </h1>
                    <div
                        class="text-gray-dark-600 text-center md:text-left relative w-full md:w-[768px] tracking-wide leading-relaxed font-inter text-base md:text-lg lg:text-l">
                        I'm a full stack developer (Laravel, Livewire, API, &amp; Vue.js) with a focus on creating (and
                        occasionally developing UI/UX) exceptional digital experiences. I'm passionate about building
                        intuitive, user-friendly websites and web applications that help businesses and individuals
                        achieve their goals.
                    </div>
                </div>
                <div class="relative flex flex-col items-start self-stretch justify-center gap-2 shrink-0">
                    <div class="relative flex flex-row items-center self-stretch justify-start gap-2 shrink-0">
                        <svg
                            class="relative overflow-visible shrink-0"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                                stroke="#D1D5DB"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                                stroke="#D1D5DB"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <div
                            class="relative text-left text-gray-dark-600"
                            style="font: var(--body-2-normal-all, 400 16px/24px 'Inter', sans-serif)">
                            Marikina, Philippines
                        </div>
                    </div>
                </div>
                <div class="relative flex flex-col items-start self-stretch justify-start gap-4 shrink-0">
                    <div class="relative flex flex-row items-center justify-start gap-1 overflow-hidden shrink-0">
                        <div class="rounded-lg p-1.5 flex flex-row gap-0 items-center justify-center shrink-0 relative">
                            <a
                                href="https://github.com/newbieced0411"
                                target="_blank">
                                <svg
                                    class="relative overflow-visible shrink-0"
                                    style=""
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.9998 22V18C15.1389 16.7473 14.7797 15.4901 13.9998 14.5C16.9998 14.5 19.9998 12.5 19.9998 9C20.0798 7.75 19.7298 6.52 18.9998 5.5C19.2798 4.35 19.2798 3.15 18.9998 2C18.9998 2 17.9998 2 15.9998 3.5C13.3598 3 10.6398 3 7.99979 3.5C5.99979 2 4.99979 2 4.99979 2C4.69979 3.15 4.69979 4.35 4.99979 5.5C4.27167 6.51588 3.91827 7.75279 3.99979 9C3.99979 12.5 6.99979 14.5 9.99979 14.5C9.60979 14.99 9.31979 15.55 9.14979 16.15C8.97979 16.75 8.92979 17.38 8.99979 18V22"
                                        stroke="#D1D5DB"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M9 18C4.49 20 4 16 2 16"
                                        stroke="#D1D5DB"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                        <div class="rounded-lg p-1.5 flex flex-row gap-0 items-center justify-center shrink-0 relative">
                            <a
                                href="https://www.linkedin.com/in/newbie-cedrick/"
                                target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-linkedin">
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect
                                        width="4"
                                        height="12"
                                        x="2"
                                        y="9" />
                                    <circle
                                        cx="4"
                                        cy="4"
                                        r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section
            id="about-me"
            class="relative flex flex-row items-start self-stretch justify-center px-20 py-24 overflow-hidden shrink-0"
            style="font: var(--body-2-normal-all, 400 16px/24px 'Inter', sans-serif)">
            <AboutView />
        </section>
        <section
            class="relative flex flex-row items-start self-stretch justify-center px-20 py-24 overflow-hidden shrink-0">
            <TechsView />
        </section>
        <section
            id="experience"
            class="relative flex flex-row items-start self-stretch justify-center px-20 py-24 overflow-hidden shrink-0">
            <ProjectView />
        </section>
        <section
            id="contact"
            class="relative flex flex-row items-start self-stretch justify-center px-20 py-24 overflow-hidden shrink-">
            <ContactView />
        </section>
    </main>
    <FooterComponent />
</template>
<script setup>
    import HeaderComponent from "@/components/HeaderComponent.vue";
    import FooterComponent from "@/components/FooterComponent.vue";
    import AboutView from "./AboutView.vue";
    import TechsView from "./TechsView.vue";
    import ProjectView from "./ExperienceView.vue";
    import ContactView from "./ContactView.vue";

    import { onMounted, reactive } from "vue";

    const state = reactive({
        scroll: false,
        defaultHeader: "sticky top-0 z-30 w-full border-b border-transparent bg-gray max-md:border-gray-50 ",
        whenScroll:
            "sticky top-0 z-30 w-full border-b border-transparent max-md:border-gray-50 bg-gray/50 backdrop-blur-xl md:border-gray-50",
    });

    onMounted(() => {
        window.addEventListener("scroll", handleScroll);
    });

    function handleScroll() {
        state.scroll = window.scrollY > 0;
    }
</script>
<style></style>
