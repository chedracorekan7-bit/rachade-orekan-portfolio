<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const navItems = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'Products', link: '#products' },
    { id: 1, name: 'Categories', link: '#categories' },
    { id: 1, name: 'Offerts', link: '#offerts' },
    { id: 1, name: 'About', link: '#about' },
    { id: 1, name: 'Contact', link: '#contact' },
]

const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
    <header class="stycky top-0 z-50 transition-all duration-300">
        <section class="['w-full',isScrolled ? 'bg-gray-100/95 backdrop-blur shadow-md py-2':'bg-gray-100 py-4' ]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex w-full items-center justify-between gap-3 md:gap-6"> <!-- logo+mobile -->
                    <div class="flex items-center gap-3 shrink-0">
                        <a href="/" class="texte-2xl font-bold text-pink-600">ShopEase</a>
                        <button class="md:hidden text-gray-700 hover:text-indigo-600" aria-label="Toggle mobile menu"
                            @click=" isMobileMenuOpen = !isMobileMenuOpen">
                            <icon icon="mdi:menu" class="W-6 h-6" />
                        </button>
                    </div>
                    <!-- search-bar -->

                    <form class="flex-1 max-w-xl mx-auto" role="search" aria-label="Site search">

                        <label class="relative w-full">

                            <input type="text" placeholder="Search ..."
                                class="w-full px-3 py-2 text-xs border border-gray-300 rounded-full focus:outline-none focus:ring-2">


                            <button type="submit"
                                class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 ☐ hover:text-indigo-600"
                                aria-label="Search button">

                                <Icon icon="mdi:magnify" class="W-4 h-4" />

                            </button>
                        </label>
                    </form>

                    <!-- Icons -->

                    <aside class="flex items-center justify-end space-x-4 shrink-0">
                        <button class="relative p-2 text-gray-700 hover:text-pink-600" aria-label="Wishlist">
                            <Icon icon="mdi:heart-outline" class="w-5 h-5" />
                            <span class="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5
flex items-center justify-center">3</span>
                        </button>
                        <button class="relative p-2 text-gray-700 hover:text-pink-600" aria-label="Wishlist">
                            <Icon icon="mdi:cart-outline" class="w-5 h-5" />
                            <span class="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5
flex items-center justify-center">5</span>
                        </button>
                        <button class="relative p-2 text-gray-700 hover:text-pink-600" aria-label="Wishlist">
                            <Icon icon="mdi:account-outline" class="w-5 h-5" />
                        </button>
                    </aside>
                </div>
            </div>
        </section>
        <!-- Navbar Links -->
        <nav class="bg-pink-950" aria-label="Main navigation">
            <div class="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
                <ul class="hidden md:flex justify-center py-3 flex-wrap gap-x-6 text-sm font-medium text-white">

                    <li v-for="item in navItems" :key="item.id">
                        <a href="item.link" class="hover: text-pink-300 transition-colors">{{ item.name }}</a>
                    </li>
                </ul>
                <section v-if="isMobileMenuOpen"
                    class="md:hidden mt-2 bg-white rounded-1g shadow-md p-4 space-y-3 ☐ text-[#5D4037] text-center"
                    aria-label="Mobile Navigation"><a v-for="item in navItems" href="item.link" :key="item.id"
                        class="block hover: text-amber-600 text-sm font-medium">{{ item.name }}</a>
                </section>
            </div>

        </nav>









        <nav>
            <div>
                <ul>
                    <li v-for="items in navitems">
                        <a href="item.link">{{ item.name }}</a>
                    </li>
                </ul>

                <section v-if="isMobileMenuOpen">
                    <a href="item.link" v-for="item in navitems">{{ item.name }}</a>
                </section>
            </div>
        </nav>
    </header>

</template>
