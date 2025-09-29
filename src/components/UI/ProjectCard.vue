<template>
    <article class="w-full max-w-sm mx-auto overflow-hidden shadow-lg rounded-lg sm:rounded-xl border border-secondary dark:bg-[#ffffff29] bg-primary">
        <!-- Selection d'image -->
         <figure>
            <img :src="image" :alt="title" class="w-full h-40 sm:h-48 lg:h-52 object-cover">
         </figure>

         <!-- Content section -->
          <section class="px-4 sm:px-6 py-3 sm:py-4">
            <header>
                <h3 class="font-bold text-lg sm:text-xl mb-2 text-white">{{ title }}</h3>
            </header>
            <p class="text-gray-300 text-xs sm:text-sm leading-relaxed">{{ description }}</p>
          </section>

          <!-- tags section -->
           <footer class="px-4 sm:px-6 pt-3 sm:pt-4 pb-2">
            <ul class="flex flex-wrap gap-1 sm:gap-2">
                <li v-for="(tag, index) in tags" :key="index" class="inline-block dark:bg-gray-700 bg-gray-700 text-gray-200 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold">#{{ tag }}</li>
            </ul>
           </footer>

           <!-- Action Section -->
           <div class="px-4 sm:px-6 pb-3 sm:pb-4 flex justify-between items-center">
            <a :href="liveLink" v-if="liveLink" class="text-secondary font-semibold hover:underline text-xs sm:text-sm transition-colors duration-200">Demo</a>
            <a :href="codeLink" v-if="codeLink" class="text-secondary font-semibold hover:underline text-xs sm:text-sm transition-colors duration-200">Code</a>
           </div>
    </article>
</template>
<script setup>
defineProps({
    title:{
    type: String,
    required:true,
    default:'Nom du projet'
},
description:{
    type: String,
    required:true,
    default:'Description du projet'
},
image:{
    type: String,
    required:true,
    default:'/'
},

tags:{
    type: Array,
    required:false,
    default:()=>['Vue.js', 'Tailwind css']
},

liveLink:{
    type: String,
    required:false,
    default:'null'
},

codeLink:{
    type: String,
    required:false,
    default:'null'
},
})

</script>
