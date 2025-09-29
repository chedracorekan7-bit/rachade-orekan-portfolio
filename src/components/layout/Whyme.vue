<template>
  <section id="pourquoi" class="mt-16 sm:mt-24 lg:mt-32 scroll-mt-16">
    <SectionHeader title="Cursus" />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-8 lg:py-12 overflow-hidden max-w-7xl mx-auto">
      <Education />
      <Experience />
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../UI/SectionHeader.vue'
import Education from './Education.vue'
import Experience from './Experience.vue';
</script>
