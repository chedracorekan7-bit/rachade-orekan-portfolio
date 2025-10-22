<template>
  <section class="mt-16 sm:mt-24 lg:mt-32 scroll-mt-16" id="compétences">
    <SectionHeader title="Mes Compétences" />
    <div class="mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div
            v-for="(element, index) in skills"
            :key="index"
            :ref="el => setSkillRef(el, index)"
            :class="`rounded-xl bg-gradient-to-t ${element.bgGradient} transition-all duration-500 hover:scale-105 hover:shadow-xl`"
          >
            <div
              class="rounded-xl bg-gray-900 dark:bg-gray-800 m-[2px] p-4 sm:p-6 text-center h-full flex flex-col justify-center"
            >
              <h3
                class="font-bold text-xl sm:text-2xl lg:text-3xl text-white flex items-center justify-center mb-2"
              >
                <CountUp v-if="visibilityItems[index]" :end-val="element.percentage" :start-val="0" :duration="2" />%
              </h3>
              <p class="font-medium text-xs sm:text-sm lg:text-base" :style="{color: element.textColor}">{{ element.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SectionHeader from '../UI/SectionHeader.vue'
import CountUp from 'vue-countup-v3'

const skills = ref([
  {
    percentage: 98,
    title: 'Figma',
    bgGradient: 'to-[#acac39] from-[#1f1e1c99]',
    textColor: '#FFE600'
  },
  {
    percentage: 92,
    title: 'Tailwind',
    bgGradient: 'to-[#59c37899] from-[#1f1e1c99]',
    textColor: '#59c378'
  },
  {
    percentage: 88,
    title: 'CSS',
    bgGradient: 'to-[#dd584f99] from-[#1f1e1c99]',
    textColor: '#dd584f'
  },
  {
    percentage: 72,
    title: 'Vue.js',
    bgGradient: 'to-[#ff9a0099] from-[#1f1e1c99]',
    textColor: '#ff9a00'
  },
  {
    percentage: 43,
    title: 'PHP',
    bgGradient: 'to-[#00a9ff99] from-[#1f1e1c99]',
    textColor: '#00a9ff'
  },
  {
    percentage: 40,
    title: 'React.js',
    bgGradient: 'to-[#9e00ff99] from-[#1f1e1c99]',
    textColor: '#ad00ff'
  },
  {
    percentage: 98,
    title: 'HTML',
    bgGradient: 'to-[#acac39] from-[#1f1e1c99]',
    textColor: '#ffe600'
  },
  {
    percentage: 92,
    title: 'JavaScript',
    bgGradient: 'to-[#59c37899] from-[#1f1e1c99]',
    textColor: '#59c378'
  }
])

const visibilityItems = ref(skills.value.map(() => false))
const skillsRef = ref([])
let observer = null

const setSkillRef = (el, index) => {
  if (el) {
    skillsRef.value[index] = el
  }
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = skillsRef.value.indexOf(entry.target)
          if (index !== -1) {
            visibilityItems.value[index] = true
          }
        }
      })
    },
    { threshold: 0.3 }
  )

  // Observer les éléments après le prochain tick
  setTimeout(() => {
    skillsRef.value.forEach((el) => {
      if (el) observer.observe(el)
    })
  }, 100)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>
