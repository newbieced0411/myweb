<template>
    <div class="w-full flex flex-row justify-between px-6 py-3 border-b border-gray-500/40">
        <div class="flex-1">
            <h1 class="font-['Righteous'] font-bold text-3xl tracking-wider">
                <a href="#home">newbie</a>
            </h1>
        </div>
        <nav class="flex-1 flex justify-end">
            <ul class="w-1/3 h-full flex flex-row justify-between items-center">
                <li class="px-4 py-1 transition rounded hover:bg-gray-600/30">
                    <a href="">Home</a>
                </li>
                <li class="px-4 py-1 transition rounded hover:bg-gray-600/30">
                    <a href="#about-me">About</a>
                </li>
                <li class="px-4 py-1 transition rounded hover:bg-gray-600/30">
                    <a href="">Projects</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

h1 {
  background-image: linear-gradient(#00ccc2, #079292);
  background-clip: text;
  color: transparent;
}
</style>