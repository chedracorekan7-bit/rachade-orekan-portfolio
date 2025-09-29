import { ref, onMounted, onUnmounted } from 'vue'

export function useActiveSection() {
  const activeSection = ref('')

  const handleScroll = () => {
    const sections = ['services', 'competences', 'pourquoi', 'projets', 'contact']
    const scrollPosition = window.scrollY + 100

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          activeSection.value = sectionId
          break
        }
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { activeSection }
}