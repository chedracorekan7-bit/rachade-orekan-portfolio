<template>
  <section id="projets" class="relative px-4 sm:px-6 lg:px-8 xl:px-16 mx-auto scroll-mt-16 max-w-7xl">
    <SectionHeader title="Mes projets" />
    
    <!-- Navigation buttons - Hidden on mobile -->
    <button class="swiper-prev absolute top-[550px] left-2 sm:left-4 lg:left-6 transform -translate-y-1/2 z-20 bg-gray-900 dark:bg-gray-800 text-yellow-300 p-2.5 sm:p-3 lg:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 hidden sm:flex items-center justify-center border border-yellow-300/20 hover:border-yellow-300/40">
      <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
      </svg>
    </button>
    <button class="swiper-next absolute top-[550px] right-2 sm:right-4 lg:right-6 transform -translate-y-1/2 z-20 bg-gray-900 dark:bg-gray-800 text-yellow-300 p-2.5 sm:p-3 lg:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 hidden sm:flex items-center justify-center border border-yellow-300/20 hover:border-yellow-300/40">
      <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
      </svg>
    </button>

    <!-- Swiper component -->
    <div class="mt-16 sm:mt-20 lg:mt-32">
      <swiper
        :effect="'coverflow'"
        grabCursor
        centeredSlides
        :slidesPerView="1"
        :spaceBetween="20"
        :breakpoints="{
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 40
          }
        }"
        :coverflowEffect="{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :navigation="navigationOptions"
        :pagination="{ clickable: true, dynamicBullets: true }"
        loop
        :modules="[EffectCoverflow, Navigation, Pagination]"
        class="w-full pb-12"
      >
        <swiper-slide
          class="max-w-[280px] sm:max-w-[320px] lg:max-w-[350px]"
          v-for="(project, index) in projects"
          :key="index"
        >
          <ProjectCard
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :tags="project.tags"
            :liveLink="project.liveLink"
            :codeLink="project.codeLink"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script setup>
import SectionHeader from "../UI/SectionHeader.vue";
import ProjectCard from "../UI/ProjectCard.vue";
import { Icon } from "@iconify/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { ref } from "vue";

// Import des images
import projet1 from "@/assets/img/projet1.jpg";
import projet2 from "@/assets/img/projet2.jpg";
import projet3 from "@/assets/img/projet3.jpg";
import projet4 from "@/assets/img/projet4.jpg";
import projet5 from "@/assets/img/projet5.jpg";
import projet6 from "@/assets/img/projet6.jpg";
import projet7 from "@/assets/img/projet7.png";
import projet8 from "@/assets/img/projet8.jpg";
import projet9 from "@/assets/img/projet9.jpg";
import projet10 from "@/assets/img/projet10.jpg";
import projet11 from "@/assets/img/projet11.PNG";
import projet12 from "@/assets/img/projet12.PNG";
import projet13 from "@/assets/img/projet13.PNG";
import projet14 from "@/assets/img/projet14.PNG";
import projet15 from "@/assets/img/projet15.PNG";
import projet16 from "@/assets/img/projet16.PNG";
import projetA from "@/assets/img/projetA.jpg";
import projetB from "@/assets/img/projetB.jpg";
import projet8A from "@/assets/img/projet8A.jpg";

// Definir les options de navigation
const navigationOptions = {
  nextEl: ".swiper-next",
  prevEl: ".swiper-prev",
};

const projects = ref([
  {
    title: "Design UI",
    description:
      "Interface interactive et responsive d'une plateforme.",
    image: projet1,
    tags: ["HTML", "CSS", "Javascript"],
    liveLink: "/",
    codeLink: "",
  },
  {
    title: "Design UI",
    description:
      "Interface interactive et responsive d'une plateforme.",
    image: projet2,
    tags: ["Vue.js", "Tailwind Css"],
    liveLink: "/",
    codeLink: "",
  },
  {
    title: "Formulaire responsive UI",
    description:
      "Formulaire d'inscription et de connection",
    image: projet3,
    tags: ["React", "D3.js"],
    liveLink: "/",
    codeLink: "",
  },
  {
    title: "Design UI",
    description: "Formulaire d'inscription et de connection",
    image: projet4,
    tags: ["React Native", "Firebase"],
    liveLink: "/",
    codeLink: "",
  },
  {
    title: "Design UI",
    description: "Formulaire d'inscription et de connection",
    image: projet5,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "",
  },
  {
    title: "Design UI",
    description:
      "Formulaire d'inscription et de connection",
    image: projet6,
    tags: ["HTML", "CSS", "Javascript"],
    liveLink: "/",
    codeLink: "",
  },

  {
    title: "Site Vitrine",
    description: "Site web responsive pour une entreprise de services",
    image: projet7,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "",
  },

  {
    title: "Site Vitrine",
    description: "Site web responsive pour une entreprise de services",
    image: projet8,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "",
  },

  {
    title: "Design UI",
    description: "Formulaire d'inscription et de connection",
    image: projet8A,
    tags: ["Vue.js", "Tailwind Css"],
    liveLink: "/",
    codeLink: "",
  },

  {
    title: "Design UI",
    description: "Formulaire d'inscription et de connection",
    image: projet9,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "",
  },

  {
    title: "Design UI",
    description: "Formulaire d'inscription et de connection",
    image: projet10,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "",
  },

  {
    title: "Dash Board",
    description: "Interface utilisateur d'une application.",
    image: projet11,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "",
  },

  {
    title: "Dash Board",
    description: "Interface utilisateur d'une application",
    image: projet12,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "",
  },

  {
    title: "Dash Board",
    description: "Interface utilisateur d'une application",
    image: projet13,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "",
  },

  {
    title: "Design UI",
    description: "Formulaire d'inscription et de connection",
    image: projet14,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "",
  },

  {
    title: "Design UI",
    description: "Formulaire d'inscription et de connection",
    image: projet15,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "",
  },

  {
    title: "Design UI",
    description: "Formulaire d'inscription et de connection",
    image: projet16,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "",
  },

  {
    title: "To-Do App",
    description: "Application de gestion de taches.",
    image: projetA,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "",
  },

  {
    title: "To-Do App",
    description: "Application de gestion de taches.",
    image: projetB,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "",
  },
]);
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  cursor: pointer;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  
}
</style>
