<template>
  <div class="min-h-screen bg-white w-full" ref="pageTop">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden w-full px-6 sm:px-10">
      <!-- Фон -->
      <div class="absolute inset-0 z-0 w-full h-full">
        <img
          src="/assets/images/bgULK.png"
          alt="KUML Background"
          class="w-full h-full object-cover opacity-10"
        />
      </div>

      <!-- Декор -->
      <div class="absolute inset-0 z-0 w-full h-full">
        <div class="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-32 h-32 bg-cyan-200 rounded-full blur-xl opacity-40 animate-bounce"></div>
      </div>

      <!-- Заголовок -->
      <div class="relative z-10 text-center w-full max-w-5xl mx-auto px-4">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight scroll-animate">
          AI <span class="text-cyan-600">PROJECTS</span>
        </h1>
        <p class="text-xl sm:text-2xl text-gray-700 font-light mb-8 scroll-animate">
          Проекты наших учеников
        </p>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 scroll-animate">
          Здесь собраны лучшие работы студентов KUML, созданные в процессе обучения
        </p>
        <div class="scroll-animate flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            @click="scrollToProjects"
            class="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Смотреть проекты
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section ref="projectsSection" class="relative min-h-screen py-20 bg-white w-full px-6 sm:px-10">
      <!-- Фон -->
      <div class="absolute inset-0 z-0 w-full h-full">
        <img
          src="/assets/images/bgULK.png"
          alt="KUML Background"
          class="w-full h-full object-cover opacity-5"
        />
      </div>

      <div class="relative z-10 w-full max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-cyan-600 font-semibold text-lg uppercase tracking-wider scroll-animate">Лучшие работы</span>
          <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 scroll-animate">
            Проекты <span class="text-cyan-600">студентов</span>
          </h2>
          <p class="text-xl text-gray-600 mt-6 max-w-3xl mx-auto scroll-animate">
            От первых экспериментов с нейросетями до полноценных AI-приложений
          </p>
        </div>

        <!-- Сетка проектов -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div
            v-for="(post, index) in posts"
            :key="index"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 scroll-animate border border-gray-100"
          >
            <div class="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center relative">
              <span class="text-white text-4xl font-bold">{{ post.text }}</span>
              <div class="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1">
                <span class="text-white text-sm font-medium">{{ post.status }}</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold">
                  {{ post.authorInitials }}
                </div>
                <div class="ml-3">
                  <p class="font-semibold text-gray-900">{{ post.author }}</p>
                  <p class="text-sm text-gray-500">{{ post.date }}</p>
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ post.title }}</h3>
              <p class="text-gray-600 mb-4">{{ post.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="(tag, tagIndex) in post.tags"
                  :key="tagIndex"
                  class="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-medium"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex space-x-4 text-gray-500">
                  <button class="flex items-center space-x-1 hover:text-cyan-600 transition-colors">
                    <span></span>
                    <span>{{ post.likes }}</span>
                  </button>
                  <button class="flex items-center space-x-1 hover:text-cyan-600 transition-colors">
                    <span></span>
                    <span>{{ post.comments }}</span>
                  </button>
                </div>
                <a
                  :href="post.link"
                  target="_blank"
                  class="text-cyan-600 hover:text-cyan-700 font-medium flex items-center"
                >
                  Подробнее →
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Призыв к действию -->
        <div class="text-center">
          <p class="text-xl text-gray-600 mb-6">Хочешь увидеть свой проект здесь?</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfWckw0PdIt-5dr9YZM-UXvqu6lnMMXWFLPfFW1-v6ro1toDA/viewform?usp=header"
            target="_blank"
            class="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg inline-block"
          >
            Присоединиться к KUML
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const projectsSection = ref<HTMLElement | null>(null)

const scrollToProjects = () => {
  projectsSection.value?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const posts = [
  {
    text: "Сайт KUML",
    authorInitials: "ИК",
    author: "Илья Кубышенко",
    date: "17 ноября 2025",
    title: "Разработка сайта для KUML",
    description: "Современный веб-сайт для презентации курсов и проектов KUML с адаптивным дизайном.",
    tags: ["Web Development", "Nuxt.js", "Tailwind CSS"],
    link: "#",
    status: "Завершен"
  },
  {
    text: "Urbathon AI",
    authorInitials: "ИК",
    author: "Илья Кубышенко",
    date: "30 ноября 2025",
    title: "Нейросеть для автоматизации домашних дел",
    description: "AI-модель, помогающая управлять бытовыми задачами и оптимизировать повседневные процессы. Проект был создан в рамках проекта для Urbathon",
    tags: ["Web Development", "Nuxt.js", "Grok AI"],
    link: "https://github.com/ikubyshenko/urbathon",
    status: "Завершен"
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el)
  })
})

useSeoMeta({
  title: 'Проекты - KUML - Kozybaev University',
  description: 'KUML - проекты наших учеников, созданные в процессе обучения.',
})
</script>

<style scoped>
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}
.scroll-animate.animate-in {
  opacity: 1;
  transform: translateY(0);
}
section {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}
</style>