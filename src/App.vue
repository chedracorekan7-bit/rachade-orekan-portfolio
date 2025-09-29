<template >
   <div class="bg-[#d4ebf8] dark:bg-[#080326] min-h-screen">
    <NavBar />
    <HeroSection />
    <Counter />
    <Services />
    <Skills />
    <Whyme />
    <Projects />
    <Contact />
    <Footer/>
    <BacktoTop />
   </div>
</template>
<script setup>
import { onMounted } from 'vue'
import NavBar from './components/layout/NavBar.vue'
import { useTheme } from './composables/useTheme'
import HeroSection from './components/layout/HeroSection.vue'
import Counter from './components/layout/Counter.vue'
import Services from './components/layout/Services.vue'
import Skills from './components/layout/Skills.vue'
import Whyme from './components/layout/Whyme.vue'
import Projects from './components/layout/Projects.vue'
import Contact from './components/layout/Contact.vue'
import Footer from './components/layout/Footer.vue'
import BacktoTop from './components/layout/BacktoTop.vue'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>
