<template>
  <div class="relative z-10">
    <label 
      :for="id"
      class="block mb-2 sm:mb-3 text-sm sm:text-base font-medium text-gray-900 dark:text-white"
    >
      {{ label }}
    </label>
    
    <!-- Container avec background gradient -->
    <div class="relative rounded-lg bg-gradient-to-r from-[#00c6cc] via-[#785ae4] p-[2px]">
      <component 
        :is="type === 'textarea' ? 'textarea' : 'input'"
        :id="id"
        :name="name || id"
        :placeholder="placeholder"
        :rows="type === 'textarea' ? rows : undefined"
        :value="modelValue"
        @input="onInput"
        class="w-full rounded-lg bg-gray-900 dark:bg-gray-800 text-white placeholder-gray-400 p-3 sm:p-4 text-sm sm:text-base
        focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 transition-all duration-300 resize-none"
      />
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  rows: { type: Number, default: 4 },
  name: { type: String, default: '' },
  modelValue: { type: [String, Number], default: '' }
})

const emit = defineEmits(['update:modelValue'])

const onInput = (e) => {
  emit('update:modelValue', e?.target?.value ?? '')
}
</script>
